from django.apps import AppConfig

class ServicesConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.services'
    verbose_name = 'Restoration & Workshop Services Catalog'

    def ready(self):
        try:
            import apps.services.signals
        except ImportError:
            pass
