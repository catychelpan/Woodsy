from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import User, Quiz

class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = ['id', 'title', 'passed', 'created_date']
        read_only_fields = ['id', 'created_date']

class UserSerializer(serializers.ModelSerializer):
    quizzes = QuizSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['id', 'email', 'password', 'first_name', 'last_name', 'quizzes']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        # Hash the password
        validated_data['password'] = make_password(validated_data['password'])
        user = User.objects.create(**validated_data)
        
        # Create the three default quizzes
        default_quizzes = ['trueFalseGame', 'trashSortingGame', 'findImpactGame']
        for title in default_quizzes:
            Quiz.objects.create(user=user, title=title)
        
        return user