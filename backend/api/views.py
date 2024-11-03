# api/views.py
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny 
from .authentication import CustomJWTAuthentication
from django.shortcuts import get_object_or_404
from .models import User, Quiz
from .serializers import UserSerializer
from django.contrib.auth.hashers import make_password, check_password 


@api_view(['POST'])
@permission_classes([AllowAny])
def create_user(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():

        user = serializer.save()
        
        return Response({
            'user': UserSerializer(user).data,
            'access': user.generate_jwt(),
            'refresh': user.generate_refresh_jwt()
        }, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@authentication_classes([CustomJWTAuthentication])
def get_user(request):
    return Response(UserSerializer(request.user).data)

@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    email = request.data.get('email')  # Assuming email is used as identifier
    password = request.data.get('password')
    
    # Validate input
    if not email or not password:
        return Response(
            {'error': 'Please provide both email and password'},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    user = get_object_or_404(User, email=email)
    try:

        if user is None:
            return Response({ 'error': 'User not found' }, status=status.HTTP_404_NOT_FOUND)
        
        # Compare passwords
        if not check_password(password, user.password):
            return Response(
                {'error': 'Invalid credentials'},
                status=status.HTTP_401_UNAUTHORIZED
            )
        

        response_data = {
            'user': UserSerializer(user).data,
            'tokens': {
                'refresh': user.generate_jwt(),
                'access': user.generate_refresh_jwt(),
            }
        }
        
        return Response(response_data, status=status.HTTP_200_OK)

    except Exception as e:
        return Response(
            {'error': 'An error occurred during login'},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
        
@api_view(['PUT'])
@authentication_classes([CustomJWTAuthentication])
def update_quiz_status(request):
    quiz_title = request.data.get('title')
    passed = request.data.get('passed')
    
    if not quiz_title or passed is None:
        return Response({
            'error': 'Both title and passed status are required'
        }, status=status.HTTP_400_BAD_REQUEST)
    
    user_id = request.user.id
    quiz = get_object_or_404(Quiz, user_id=user_id, title=quiz_title)
    quiz.passed = passed
    quiz.save()
    
    return Response({'success': True})