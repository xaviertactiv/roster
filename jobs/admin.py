from django.contrib import admin
from .models import Job, Category, Tag


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    """ category admin config
    """
    pass


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    """ tag admin config
    """
    pass


@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    """ job admin config
    """
    list_display = ('title', 'contractor', 'user_hired', 'date_created', 'date_updated')
    filter_horizontal = ('categories', 'tags')