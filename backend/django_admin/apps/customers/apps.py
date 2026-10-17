from django.apps import AppConfig

class CustomersConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.customers'
    verbose_name = 'Customer CRM & Profiles'

    def ready(self):
        try:
            import apps.customers.signals
        except ImportError:
            pass
