from django.conf import settings
from django.db import models

from jobs.models import Job


class WorkSpace(models.Model):
    """ project workspace
    """
    user = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.SET_NULL)
    name = models.CharField(max_length=200)

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name}"


class Member(models.Model):
    """ workspace member
    """
    workspace = models.ForeignKey(WorkSpace, null=True, on_delete=models.SET_NULL)
    job = models.ForeignKey(Job, null=True, on_delete=models.SET_NULL)

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"({self.workspace}) {self.job.user_hired}"

