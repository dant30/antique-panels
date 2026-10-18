import uuid
from django.db import models
from django.conf import settings
from apps.vehicles.models.models import Vehicle
from apps.bookings.models.models import Booking

class JobCardStage(models.TextChoices):
    INTAKE_QC = 'INTAKE_QC', 'Intake Inspection & Baseline QC'
    TEARDOWN = 'TEARDOWN', 'Disassembly & Part Labeling'
    STRIPPING = 'STRIPPING', 'Media Blasting / Rust Removal'
    PANEL_BEATING = 'PANEL_BEATING', 'Metal Shaping, Welding & Alignment'
    SURFACE_PREP = 'SURFACE_PREP', 'Epoxy Primer & Guide Coating'
    PAINT_BOOTH = 'PAINT_BOOTH', 'Oven Spray Painting & Clear Coat'
    POLISHING = 'POLISHING', 'Color Sanding & Mirror Glaze Buffing'
    ASSEMBLY = 'ASSEMBLY', 'Mechanical Rebuild & Trim Installation'
    ROAD_TEST = 'ROAD_TEST', 'Road Testing & Dyno Calibration'
    FINAL_DETAILING = 'FINAL_DETAILING', 'Concours Detailing & Final Sign-Off'
    READY = 'READY', 'Ready for Collection'
    DELIVERED = 'DELIVERED', 'Delivered to Client'

class JobCard(models.Model):
    job_number = models.CharField(max_length=30, unique=True, editable=False)
    booking = models.OneToOneField(Booking, on_delete=models.SET_NULL, null=True, blank=True, related_name='job_card')
    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE, related_name='job_cards')
    lead_technician = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True, related_name='assigned_job_cards')
    bay_number = models.CharField(max_length=20, default='Bay 1 (Coachbuilding)')
    current_stage = models.CharField(max_length=40, choices=JobCardStage.choices, default=JobCardStage.INTAKE_QC)
    progress_percentage = models.PositiveIntegerField(default=5)
    estimated_labor_hours = models.DecimalField(max_digits=7, decimal_places=2, default=40.00)
    actual_labor_hours = models.DecimalField(max_digits=7, decimal_places=2, default=0.00)
    scope_of_work = models.TextField()
    is_blocked = models.BooleanField(default=False)
    block_reason = models.CharField(max_length=255, blank=True, null=True)
    intake_date = models.DateField(auto_now_add=True)
    target_delivery_date = models.DateField(null=True, blank=True)
    actual_delivery_date = models.DateField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-intake_date', '-created_at']

    def save(self, *args, **kwargs):
        if not self.job_number:
            self.job_number = f"JC-{uuid.uuid4().hex[:6].upper()}"
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.job_number} - {self.vehicle.license_plate} [{self.get_current_stage_display()}]"

class JobCardPhotoLog(models.Model):
    job_card = models.ForeignKey(JobCard, on_delete=models.CASCADE, related_name='photo_logs')
    stage = models.CharField(max_length=40, choices=JobCardStage.choices)
    caption = models.CharField(max_length=255)
    image_url = models.URLField(max_length=500)
    taken_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.job_card.job_number} - {self.stage} ({self.caption})"
