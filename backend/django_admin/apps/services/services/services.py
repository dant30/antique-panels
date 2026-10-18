from ..models.models import WorkshopService

class WorkshopServiceLogic:
    @staticmethod
    def get_featured_catalog():
        return WorkshopService.objects.filter(is_active=True, featured=True)
