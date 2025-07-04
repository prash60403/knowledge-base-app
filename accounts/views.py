from rest_framework import generics, status
from rest_framework.response import Response
from django.contrib.auth import authenticate, get_user_model
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import RegisterSerializer, LoginSerializer, PasswordResetSerializer

User = get_user_model()


class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer


class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({'detail': 'Invalid email or password'}, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(username=user.username, password=password)
        if user is not None:
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            })
        else:
            return Response({'detail': 'Invalid email or password'}, status=status.HTTP_400_BAD_REQUEST)


class PasswordResetRequest(generics.GenericAPIView):
    serializer_class = PasswordResetSerializer

    def post(self, request):
        email = request.data.get('email')
        if not email:
            return Response({'detail': 'Email is required'}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(email=email).exists():
            # Placeholder for sending email logic
            return Response({'detail': 'Password reset email sent (simulated).'})
        else:
            return Response({'detail': 'User with this email does not exist.'}, status=status.HTTP_404_NOT_FOUND)
