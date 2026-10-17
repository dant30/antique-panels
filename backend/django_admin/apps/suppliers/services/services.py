from ..model.models import Supplier

class SupplierService:
    @staticmethod
    def get_preferred_suppliers():
        return Supplier.objects.filter(is_active=True)
