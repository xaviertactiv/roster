from django.urls import path
from .views import Jobs


urlpatterns = [
    path('', Jobs.as_view({
        'get': 'get',
        'post': 'create',
    }), name="jobs"),
]