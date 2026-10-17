from django.apps import AppConfig

class InvoicesConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.invoices'
    verbose_name = 'Billing, Quotes & Invoicing'

    def ready(self):
        try:
            import apps.invoices.signals
        except ImportError:
            pass
