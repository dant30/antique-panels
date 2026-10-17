from django.apps import AppConfig

class SuppliersConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.suppliers'
    verbose_name = 'Suppliers & Vendor Management'

    def ready(self):
        try:
            import apps.suppliers.signals
        except ImportError:
            pass
