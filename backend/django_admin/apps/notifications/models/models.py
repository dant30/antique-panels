from django.db import models

class NotificationChannel(models.TextChoices):
    WHATSAPP = 'WHATSAPP', 'WhatsApp Message (+254 721 757 776)'
    SMS = 'SMS', 'SMS Alert'
    EMAIL = 'EMAIL', 'Email (info@antiquepanels.co.ke)'

class NotificationStatus(models.TextChoices):
    PENDING = 'PENDING', 'Queued'
    SENT = 'SENT', 'Sent'
    DELIVERED = 'DELIVERED', 'Delivered'
    FAILED = 'FAILED', 'Failed'

class Notification(models.Model):
    recipient_identifier = models.CharField(max_length=150, help_text="Phone number or Email address")
    channel = models.CharField(max_length=20, choices=NotificationChannel.choices, default=NotificationChannel.WHATSAPP)
    subject = models.CharField(max_length=255, blank=True, null=True)
    body = models.TextField()
    status = models.CharField(max_length=20, choices=NotificationStatus.choices, default=NotificationStatus.PENDING)
    error_message = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    sent_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"[{self.channel}] to {self.recipient_identifier} ({self.status})"
