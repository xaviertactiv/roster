from django.apps import apps
from django.contrib.auth.models import BaseUserManager


class UserManager(BaseUserManager):
    """ user manager
    """
    def create_user(self, email, password=None, **kwargs):
        """ create a normal user
        """
        if not email:
            raise ValueError("Email is required.")

        user = self.model(email=email, **kwargs)
        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, email, password=None, **kwargs):
        """ create a super user
        """
        user = self.create_user(email, password, **kwargs)
        user.is_active = True
        user.is_superuser = True
        user.is_staff = True
        user.save()

        return user

    def create_client(self, email):
        """ create a client instance of the user
        """
        return self._create_usertype(email, 'users.Client')

    def create_contractor(self, email):
        """ create a contractor instance of the user
        """
        return self._create_usertype(email, 'users.Contractor')

    def _create_usertype(self, email, _model):
        usertype = apps.get_model(_model).objects.create(
            user=self.get_by_natural_key(email)
        )

        return usertype

