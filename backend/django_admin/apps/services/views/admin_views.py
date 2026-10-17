from django.views.generic import ListView
from django.contrib.auth.mixins import LoginRequiredMixin
from ..model.models import WorkshopService

class ServiceCatalogAdminView(LoginRequiredMixin, ListView):
    model = WorkshopService
    template_name = 'services/catalog_admin.html'
    context_object_name = 'services'
