from django.db import models
import uuid

class User(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)  # You'll need to hash this
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'users'

    def __str__(self):
        return self.email

    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"

class Quiz(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=200)
    passed = models.BooleanField(default=False)
    created_date = models.DateTimeField(auto_now_add=True)
    
    # Foreign key to User - this creates the one-to-many relationship
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,  # When user is deleted, delete their quizzes
        related_name='quizzes'     # Now we can use user.quizzes.all()
    )

    class Meta:
        db_table = 'quizzes'
        verbose_name = 'Quiz'
        verbose_name_plural = 'Quizzes'
        ordering = ['-created_date']
        # Optional: Ensure users can't create duplicate quiz titles
        unique_together = ['user', 'title']
        indexes = [
            models.Index(fields=['user', 'created_date']),
            models.Index(fields=['passed']),
        ]

    def __str__(self):
        return f"{self.title} by {self.user.email}"

    @property
    def days_since_created(self):
        from django.utils import timezone
        delta = timezone.now() - self.created_date
        return delta.days