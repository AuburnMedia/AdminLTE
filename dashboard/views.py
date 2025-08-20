from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.db.models import Sum, Avg
from django.utils import timezone
from datetime import datetime, timedelta
import json
from .models import CarbonUsage, CarbonGoal, FootprintAssessment


def dashboard_view(request):
    """Main dashboard view with carbon tracking data"""
    context = {
        'page_title': 'EcoTrack | Carbon Dashboard',
        'total_usage': 18230.00,
        'usage_percentage': 16,
        'usage_change': 1.99,
    }
    
    if request.user.is_authenticated:
        # Get user's carbon usage data
        user_usage = CarbonUsage.objects.filter(user=request.user)
        recent_usage = user_usage[:10]
        
        # Calculate total usage
        total_usage = user_usage.aggregate(Sum('carbon_estimate'))['carbon_estimate__sum'] or 0
        
        # Get user's goal
        try:
            user_goal = CarbonGoal.objects.get(user=request.user)
            progress_percentage = (total_usage / user_goal.target_usage * 100) if user_goal.target_usage else 0
        except CarbonGoal.DoesNotExist:
            user_goal = None
            progress_percentage = 0
        
        # Generate chart data for the last 7 months
        chart_data = []
        target_data = []
        labels = []
        
        for i in range(6, -1, -1):
            month_date = timezone.now() - timedelta(days=30*i)
            month_name = month_date.strftime('%B')
            labels.append(month_name)
            
            # Sample data - in real app, calculate from database
            chart_data.append(30 + i*5 + (i%3)*10)
            target_data.append(20 + i*4 + (i%2)*8)
        
        # Generate monthly bar chart data
        monthly_labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
        usage_data = [12, 19, 15, 17, 20, 18, 22]
        average_data = [10, 15, 12, 14, 16, 14, 18]
        
        context.update({
            'total_usage': total_usage,
            'recent_usage': recent_usage,
            'user_goal': user_goal,
            'progress_percentage': round(progress_percentage, 1),
            'chart_labels': json.dumps(labels),
            'chart_data': json.dumps(chart_data),
            'target_data': json.dumps(target_data),
            'monthly_labels': json.dumps(monthly_labels),
            'usage_data': json.dumps(usage_data),
            'average_data': json.dumps(average_data),
        })
    else:
        # Default data for non-authenticated users
        context.update({
            'chart_labels': json.dumps(['January', 'February', 'March', 'April', 'May', 'June', 'July']),
            'chart_data': json.dumps([30, 45, 35, 50, 49, 60, 70]),
            'target_data': json.dumps([20, 35, 25, 40, 39, 50, 55]),
            'monthly_labels': json.dumps(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']),
            'usage_data': json.dumps([12, 19, 15, 17, 20, 18, 22]),
            'average_data': json.dumps([10, 15, 12, 14, 16, 14, 18]),
            'recent_usage': [],
        })
    
    return render(request, 'dashboard/index.html', context)


@login_required
def profile_view(request):
    """User profile view"""
    context = {
        'page_title': 'EcoTrack | Profile',
    }
    return render(request, 'dashboard/profile.html', context)


@login_required
def reports_view(request):
    """Reports view"""
    context = {
        'page_title': 'EcoTrack | Reports',
    }
    return render(request, 'dashboard/reports.html', context)


def footprint_calculator_view(request):
    """Footprint calculator view"""
    context = {
        'page_title': 'EcoTrack | Footprint Calculator',
    }
    return render(request, 'dashboard/calculator.html', context)


def detailed_view(request):
    """Detailed information view"""
    context = {
        'page_title': 'EcoTrack | Detailed Information',
    }
    return render(request, 'dashboard/detailed.html', context)


def impact_view(request):
    """Impact view"""
    context = {
        'page_title': 'EcoTrack | Your Impact',
    }
    return render(request, 'dashboard/impact.html', context)


def checkup_view(request):
    """Checkup/footprint estimator view"""
    context = {
        'page_title': 'EcoTrack | Footprint Estimator',
    }
    return render(request, 'dashboard/checkup.html', context)
