from django.views.generic import ListView
from django.contrib.auth.mixins import LoginRequiredMixin
from ..model.models import Supplier

class SupplierListView(LoginRequiredMixin, ListView):
    model = Supplier
    template_name = 'suppliers/list.html'
    context_object_name = 'suppliers'
