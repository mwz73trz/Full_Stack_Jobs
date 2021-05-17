from django.db import models
from django.utils import timezone

class Job(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=50)
    applied = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.name


