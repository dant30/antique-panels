from ..models.models import InventoryItem

class InventoryService:
    @staticmethod
    def adjust_stock(sku: str, delta: float, reason: str = None) -> InventoryItem:
        item = InventoryItem.objects.get(sku=sku)
        item.quantity_on_hand = float(item.quantity_on_hand) + delta
        item.save()
        return item
