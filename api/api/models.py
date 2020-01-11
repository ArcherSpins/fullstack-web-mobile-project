from django.db import models
from django.contrib.auth.models import User
# from django.core.validators import MaxValueValidator, MinValueValidator


class News(models.Model):
    title = models.CharField(max_length=32)
    description = models.TextField(max_length=355)
    stars = models.IntegerField()


class Comment(models.Model):
    message = models.TextField(max_length=644)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    new = models.ForeignKey(News, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('user', 'new')
        index_together = ('user', 'new')


