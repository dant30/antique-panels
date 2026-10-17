from django.db import models

class ReportType(models.TextChoices):
    FINANCIAL_SUMMARY = 'FINANCIAL_SUMMARY', 'Monthly Revenue & Collections'
    WORKSHOP_UTILIZATION = 'WORKSHOP_UTILIZATION', 'Bay & Technician Labor Efficiency'
    TURNAROUND_TIME = 'TURNAROUND_TIME', 'Job Card Duration & Bottlenecks'
    INVENTORY_VALUATION = 'INVENTORY_VALUATION', 'Parts Stock Value & COGS'

class GeneratedReport(models.Model):
    report_type = models.CharField(max_length=40, choices=ReportType.choices)
    title = models.CharField(max_length=200)
    parameters = models.JSONField(default=dict, blank=True)
    summary_data = models.JSONField(default=dict, blank=True)
    generated_at = models.DateTimeField(auto_now_add=True)
    notes = models.TextField(blank=True, null=True)

    class Meta:
        ordering = ['-generated_at']

    def __str__(self):
        return f"{self.title} ({self.get_report_type_display()})"
