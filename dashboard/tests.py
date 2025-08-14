from django.test import TestCase
from django.contrib.auth.models import User
from django.urls import reverse
from .models import CarbonUsage, CarbonGoal


class DashboardViewTests(TestCase):
    def test_dashboard_view_anonymous(self):
        """Test dashboard view for anonymous users"""
        response = self.client.get(reverse('dashboard:index'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'EcoTrack')
        
    def test_dashboard_view_authenticated(self):
        """Test dashboard view for authenticated users"""
        user = User.objects.create_user(username='testuser', password='testpass')
        self.client.login(username='testuser', password='testpass')
        response = self.client.get(reverse('dashboard:index'))
        self.assertEqual(response.status_code, 200)


class CarbonUsageModelTests(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='testpass')
        
    def test_carbon_usage_creation(self):
        """Test creating a carbon usage record"""
        usage = CarbonUsage.objects.create(
            user=self.user,
            carbon_estimate=100.50,
            usage_amount=150.75,
            percentage_change=5.2
        )
        self.assertEqual(str(usage), f"testuser - {usage.date} - $100.50")
        self.assertEqual(usage.user, self.user)
        self.assertEqual(usage.carbon_estimate, 100.50)
