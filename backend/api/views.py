
# Create your views here.
# views.py
from rest_framework import status, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.shortcuts import get_object_or_404
from .models import User, Quiz
from .serializers import UserSerializer, QuizSerializer

@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def create_user(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        
        # Generate JWT tokens
        refresh = RefreshToken.for_user(user)
        tokens = {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }
        
        return Response({
            'user': serializer.data,
            'tokens': tokens
        }, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
@permission_classes([permissions.IsAuthenticated])
def update_quiz_status(request):
    title = request.data.get('title')
    passed = request.data.get('passed')
    
    if not title or passed is None:
        return Response({
            'error': 'Both title and passed status are required'
        }, status=status.HTTP_400_BAD_REQUEST)
    
    quiz = get_object_or_404(Quiz, user=request.user, title=title)
    quiz.passed = passed
    quiz.save()
    
    return Response(QuizSerializer(quiz).data)

@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def get_user(request):
    user = get_object_or_404(User, id=request.user.id)
    serializer = UserSerializer(user)
    return Response(serializer.data)