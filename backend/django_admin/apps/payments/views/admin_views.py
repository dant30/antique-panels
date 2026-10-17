from django.views.generic import ListView
from django.contrib.auth.mixins import LoginRequiredMixin
from ..model.models import Payment

class DailyCollectionsView(LoginRequiredMixin, ListView):
    model = Payment
    template_name = 'payments/daily_collections.html'
    context_object_name = 'payments'
