from django.urls import path
from ..views import admin_views

app_name = 'admin_inventory'

urlpatterns = [
    path('', getattr(admin_views, [k for k in dir(admin_views) if k.endswith('View')][0]).as_view(), name='dashboard'),
]
