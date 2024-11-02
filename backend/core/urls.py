
from django.urls import path, include

urlpatterns = [
    path('api/', include('api.urls')),  # This forwards all /api/ requests to api.urls
]
