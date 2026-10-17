from django.apps import AppConfig

class BookingsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.bookings'
    verbose_name = 'Intake Bookings & Appointments'

    def ready(self):
        try:
            import apps.bookings.signals
        except ImportError:
            pass
