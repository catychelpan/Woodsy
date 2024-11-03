from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from . import views

urlpatterns = [
    path('users/create/', views.create_user, name='create_user'),
    path('users/me/', views.get_user, name='get_user'),
    path('quizzes/update-status/', views.update_quiz_status, name='update_quiz_status'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('users/login', views.login, name='token_refresh'),
]