from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from django.core.mail import send_mail
from django.conf import settings

class RegisterView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        if User.objects.filter(username=email).exists():
            return Response({'message': 'User already exists'}, status=400)
        User.objects.create_user(username=email, email=email, password=password)
        return Response({'message': 'User registered successfully'}, status=201)

class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        user = authenticate(username=email, password=password)
        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                'token': str(refresh.access_token)
            })
        return Response({'message': 'Invalid credentials'}, status=401)

class PasswordResetRequest(APIView):
    def post(self, request):
        email = request.data.get('email')
        if not User.objects.filter(email=email).exists():
            return Response({'message': 'Email not found'}, status=404)

        # NOTE: You should send a secure token + reset link in real systems
        send_mail(
            subject="Reset Your Password",
            message="Here is your reset link: (not implemented yet)",
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[email]
        )
        return Response({'message': 'Reset link sent'}, status=200)
