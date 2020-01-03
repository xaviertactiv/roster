from django.contrib import admin
from .models import WorkSpace, Member


class MemberInline(admin.TabularInline):
    model = Member
    extra = 1
    readonly_fields = ('date_created', 'date_updated')

@admin.register(WorkSpace)
class WorkSpaceAdmin(admin.ModelAdmin):
    list_display = ('name', 'user', 'date_created', 'date_updated')
    inlines = (MemberInline,)