from django.apps import AppConfig

class AuditConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.audit'
    verbose_name = 'Audit Trail & Compliance Logging'

    def ready(self):
        try:
            import apps.audit.signals
        except ImportError:
            pass
