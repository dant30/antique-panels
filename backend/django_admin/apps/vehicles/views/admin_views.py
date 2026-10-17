from django.views.generic import ListView
from django.contrib.auth.mixins import LoginRequiredMixin
from ..model.models import Vehicle

class VehicleInventoryListView(LoginRequiredMixin, ListView):
    model = Vehicle
    template_name = 'vehicles/fleet_list.html'
    context_object_name = 'vehicles'
