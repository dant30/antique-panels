from django.urls import path, include
from rest_framework.routers import DefaultRouter
from ..views.api import InvoiceViewSet

router = DefaultRouter()
router.register(r'', InvoiceViewSet, basename='invoices')

urlpatterns = [
    path('', include(router.urls)),
]
