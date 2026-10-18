from django.test import TestCase
from ..models.models import InventoryItem, ItemCategory

class InventoryItemModelTest(TestCase):
    def test_item(self):
        i = InventoryItem.objects.create(sku="PNT-EPX-01", name="2K Epoxy Primer", category=ItemCategory.PAINT_MATERIAL, quantity_on_hand=10)
        self.assertEqual(i.sku, "PNT-EPX-01")
