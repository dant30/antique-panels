from django.views.generic import ListView
from django.contrib.auth.mixins import LoginRequiredMixin
from ..model.models import Customer

class CustomerDirectoryView(LoginRequiredMixin, ListView):
    model = Customer
    template_name = 'customers/directory.html'
    context_object_name = 'customers'
