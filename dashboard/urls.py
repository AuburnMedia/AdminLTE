from django.urls import path
from . import views

app_name = 'dashboard'

urlpatterns = [
    path('', views.dashboard_view, name='index'),
    path('profile/', views.profile_view, name='profile'),
    path('reports/', views.reports_view, name='reports'),
    path('calculator/', views.footprint_calculator_view, name='calculator'),
    path('detailed/', views.detailed_view, name='detailed'),
    path('impact/', views.impact_view, name='impact'),
    path('checkup/', views.checkup_view, name='checkup'),
]
