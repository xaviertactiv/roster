from django.urls import path
from .views import Jobs, Applications


urlpatterns = [
    path('', Jobs.as_view({
        'get': 'get',
        'post': 'create',
    }), name="jobs"),
    path('<int:pk>/', Jobs.as_view({
        'get': 'retrieve',
    })),
    path('application/', Applications.as_view({
        'get': 'get',
        'post': 'create',
    }))
]