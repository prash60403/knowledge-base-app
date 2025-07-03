# accounts/urls.py
from django.urls import path
from .views import RegisterView, LoginView, PasswordResetRequest

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('password-reset/', PasswordResetRequest.as_view(), name='password_reset'),
]
