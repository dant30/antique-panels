from django.test import TestCase
from ..model.models import AuditLog

class AuditLogModelTest(TestCase):
    def test_audit(self):
        a = AuditLog.objects.create(action="TEST_ACTION", target_entity="Booking", target_id="1")
        self.assertEqual(a.action, "TEST_ACTION")
