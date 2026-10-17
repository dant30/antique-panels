from django.test import TestCase
from ..model.models import Notification, NotificationChannel

class NotificationModelTest(TestCase):
    def test_notification(self):
        n = Notification.objects.create(recipient_identifier="+254721757776", channel=NotificationChannel.WHATSAPP, body="Test")
        self.assertEqual(n.channel, NotificationChannel.WHATSAPP)
