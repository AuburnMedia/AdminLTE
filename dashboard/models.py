from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class CarbonUsage(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField(default=timezone.now)
    carbon_estimate = models.DecimalField(max_digits=10, decimal_places=2)
    usage_amount = models.DecimalField(max_digits=10, decimal_places=2)
    percentage_change = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-date']
        verbose_name = 'Carbon Usage'
        verbose_name_plural = 'Carbon Usage Records'

    def __str__(self):
        return f"{self.user.username} - {self.date} - ${self.carbon_estimate}"


class CarbonGoal(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    target_usage = models.DecimalField(max_digits=10, decimal_places=2)
    target_date = models.DateField()
    current_progress = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.username} - Target: ${self.target_usage}"


class FootprintAssessment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    assessment_date = models.DateTimeField(auto_now_add=True)
    total_score = models.IntegerField()
    recommendations = models.TextField()
    completed = models.BooleanField(default=False)

    class Meta:
        ordering = ['-assessment_date']

    def __str__(self):
        return f"{self.user.username} - Assessment {self.assessment_date.date()}"
