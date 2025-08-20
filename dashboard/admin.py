from django.contrib import admin
from .models import CarbonUsage, CarbonGoal, FootprintAssessment


@admin.register(CarbonUsage)
class CarbonUsageAdmin(admin.ModelAdmin):
    list_display = ['user', 'date', 'carbon_estimate', 'usage_amount', 'percentage_change']
    list_filter = ['date', 'user']
    search_fields = ['user__username', 'user__email']
    date_hierarchy = 'date'


@admin.register(CarbonGoal)
class CarbonGoalAdmin(admin.ModelAdmin):
    list_display = ['user', 'target_usage', 'target_date', 'current_progress']
    list_filter = ['target_date']
    search_fields = ['user__username', 'user__email']


@admin.register(FootprintAssessment)
class FootprintAssessmentAdmin(admin.ModelAdmin):
    list_display = ['user', 'assessment_date', 'total_score', 'completed']
    list_filter = ['completed', 'assessment_date']
    search_fields = ['user__username', 'user__email']
    readonly_fields = ['assessment_date']
