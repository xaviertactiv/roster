from django.conf import settings
from django.db import models


class WorkSpace(models.Model):
    """ project workspace
    """
    user = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.SET_NULL)
    name = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.name}"