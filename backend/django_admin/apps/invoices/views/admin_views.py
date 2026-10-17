from django.views.generic import ListView
from django.contrib.auth.mixins import LoginRequiredMixin
from ..model.models import Invoice

class OutstandingInvoicesView(LoginRequiredMixin, ListView):
    model = Invoice
    template_name = 'invoices/outstanding.html'
    context_object_name = 'invoices'
