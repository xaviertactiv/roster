import datetime

from django.conf import settings
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils import timezone

from rest_framework.authtoken.models import Token
from utils.annoying import get_object_or_none

from .managers import UserManager
from .utils import user_media_path


class Client(models.Model):
    """ client details
    """
    user = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return f"{self.user}"


class Contractor(models.Model):
    """ freelancer
    """
    user = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return f"{self.user}"


class User(AbstractBaseUser, PermissionsMixin):
    """ user detail
    """
    email = models.EmailField(max_length=500, unique=True)
    first_name = models.CharField(max_length=80, null=True, blank=True)
    last_name = models.CharField(max_length=80, null=True, blank=True)
    image = models.ImageField(upload_to=user_media_path, null=True, blank=True)

    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)

    date_joined = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ("first_name", "last_name")
    _image = _cover = None

    def __init__(self, *args, **kwargs):
        super(User, self).__init__(*args, **kwargs)
        # set the user type information
        # upon initialization.
        self.profile = self._get_profile()

    def __str__(self):
        return f"{self.email}"

    def _get_profile(self):
        _get = get_object_or_none
        try:
            return _get(Client, user=self) or _get(Contractor, user=self)
        except Exception:
            # user has no designation. it is either
            # created using the terminal or in the admin panel
            return None

    @property
    def is_client(self):
        return isinstance(self.profile, Client)

    @property
    def user_type(self):
        return f"{'Client' if self.is_client else 'Contractor'}"

    def get_full_name(self):
        """ return the display name
        """
        return f"{self.first_name} {self.last_name}".title()

    def get_token(self):
        """ get or generate a user token that is valid for
            `settings.AUTH_TOKEN_EXPIRY_TIME`
        """
        token, created = Token.objects.get_or_create(user=self)
        expiry_date = token.created + datetime.timedelta(days=settings.AUTH_TOKEN_EXPIRY_TIME)

        if not created and expiry_date < timezone.now():
            # delete token
            token.delete()
            # generate a new one
            token = Token.objects.create(user=self)

        return token


@receiver(post_save, sender=User)
def create_auth_token(instance=None, created=False, **kwargs):
    """ generate a user token for new user.
    """
    if created:
        # generate token
        instance.get_token()


class TeamMember(models.Model):
    """ membership
    """
    team = models.ForeignKey('Team', on_delete=models.CASCADE)
    user = models.ForeignKey('Contractor', null=True, on_delete=models.SET_NULL)

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"({self.team}) {self.user.email}"


class Team(models.Model):
    """ team/agency
    """
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.SET_NULL)
    name = models.CharField(max_length=200)
    about = models.TextField(null=True)

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name}"