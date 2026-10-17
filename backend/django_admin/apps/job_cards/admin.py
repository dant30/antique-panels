from django.contrib import admin
from .model.models import JobCard, JobCardPhotoLog

class JobCardPhotoLogInline(admin.TabularInline):
    model = JobCardPhotoLog
    extra = 1

@admin.register(JobCard)
class JobCardAdmin(admin.ModelAdmin):
    list_display = ['job_number', 'vehicle', 'lead_technician', 'bay_number', 'current_stage', 'progress_percentage', 'is_blocked', 'intake_date', 'target_delivery_date']
    list_filter = ['current_stage', 'bay_number', 'is_blocked', 'intake_date']
    search_fields = ['job_number', 'vehicle__license_plate', 'vehicle__vin', 'lead_technician__username']
    inlines = [JobCardPhotoLogInline]
