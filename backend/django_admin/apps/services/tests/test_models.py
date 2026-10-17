from django.test import TestCase
from ..model.models import WorkshopService, ServiceCategory

class WorkshopServiceModelTest(TestCase):
    def test_service_creation(self):
        s = WorkshopService.objects.create(name="Bare Metal Prep", slug="bare-metal-prep", category=ServiceCategory.PANEL_BEATING)
        self.assertEqual(s.name, "Bare Metal Prep")
