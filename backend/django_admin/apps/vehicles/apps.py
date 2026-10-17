from django.apps import AppConfig

class VehiclesConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.vehicles'
    verbose_name = 'Vehicle Fleet & Register'

    def ready(self):
        try:
            import apps.vehicles.signals
        except ImportError:
            pass
