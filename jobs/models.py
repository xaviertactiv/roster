from django.conf import settings
from django.db import models
from users.models import Client, Contractor
from django.utils.translation import gettext_lazy as _

class Job(models.Model):
    """ job listing
    """
    title = models.CharField(max_length=200)
    client = models.ForeignKey(Client,
        related_name="client", null=True, on_delete=models.SET_NULL)
    description = models.TextField()
    
    categories = models.ManyToManyField('Category', blank=True)
    tags = models.ManyToManyField('Tag', blank=True)

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    user_hired = models.ForeignKey(Contractor,
        related_name="user_hired", null=True, blank=True, on_delete=models.SET_NULL)

    def __str__(self):
        return f"{self.title}"


class Category(models.Model):
    """ job category
    """
    name = models.CharField(max_length=200)

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return f"{self.name}"


class Tag(models.Model):
    """ job tag
    """
    name = models.CharField(max_length=200)

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name}"

class Application(models.Model):
    """ job application
    """
    status_choices = (
        (0, 'Pending'),
        (1, 'Hired'),
        (2, 'Rejected'),
    )

    contractor = models.ForeignKey(Contractor,
        related_name='contractor', null=True, on_delete=models.SET_NULL)
    
    job = models.ForeignKey(Job, 
        related_name="job" ,null=True, blank=True, on_delete=models.SET_NULL)
    
    details = models.TextField(null=True, blank=True)

    rate = models.DecimalField(null=True, 
        blank=True, max_digits=10, decimal_places=5)

    status = models.IntegerField(
        choices=status_choices,
        default=0,
    )

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    
