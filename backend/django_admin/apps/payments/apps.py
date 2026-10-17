from django.apps import AppConfig

class PaymentsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.payments'
    verbose_name = 'Payment Gateways & Receipts'

    def ready(self):
        try:
            import apps.payments.signals
        except ImportError:
            pass
