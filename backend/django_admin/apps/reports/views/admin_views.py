from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin

class ExecutiveDashboardView(LoginRequiredMixin, TemplateView):
    template_name = 'reports/dashboard.html'
