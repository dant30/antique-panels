"""FastAPI Inventory Telemetry Logic."""
class InventoryService:
    @staticmethod
    def evaluate_stock_health(item: dict) -> bool:
        return item.get("quantity_on_hand", 0) <= item.get("reorder_threshold", 5)
