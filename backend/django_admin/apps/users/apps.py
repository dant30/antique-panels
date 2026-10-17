from django.apps import AppConfig

class UsersConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.users'
    verbose_name = 'User Management & RBAC'

    def ready(self):
        try:
            import apps.users.signals
        except ImportError:
            pass
