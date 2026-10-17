from django.apps import AppConfig

class JobCardsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.job_cards'
    verbose_name = 'Workshop Job Cards & Telemetry'

    def ready(self):
        try:
            import apps.job_cards.signals
        except ImportError:
            pass
