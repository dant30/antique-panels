"""
Master URL configuration for Antique Panels Django Back-Office ERP.
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # Internal Admin Portal Views
    path('backoffice/users/', include('apps.users.urls.admin_urls', namespace='admin_users')),
    path('backoffice/customers/', include('apps.customers.urls.admin_urls', namespace='admin_customers')),
    path('backoffice/vehicles/', include('apps.vehicles.urls.admin_urls', namespace='admin_vehicles')),
    path('backoffice/services/', include('apps.services.urls.admin_urls', namespace='admin_services')),
    path('backoffice/bookings/', include('apps.bookings.urls.admin_urls', namespace='admin_bookings')),
    path('backoffice/job-cards/', include('apps.job_cards.urls.admin_urls', namespace='admin_job_cards')),
    path('backoffice/inventory/', include('apps.inventory.urls.admin_urls', namespace='admin_inventory')),
    path('backoffice/suppliers/', include('apps.suppliers.urls.admin_urls', namespace='admin_suppliers')),
    path('backoffice/invoices/', include('apps.invoices.urls.admin_urls', namespace='admin_invoices')),
    path('backoffice/payments/', include('apps.payments.urls.admin_urls', namespace='admin_payments')),
    path('backoffice/notifications/', include('apps.notifications.urls.admin_urls', namespace='admin_notifications')),
    path('backoffice/reports/', include('apps.reports.urls.admin_urls', namespace='admin_reports')),
    path('backoffice/audit/', include('apps.audit.urls.admin_urls', namespace='admin_audit')),
    
    # REST API endpoints (v1)
    path('api/v1/users/', include('apps.users.urls.api_urls')),
    path('api/v1/customers/', include('apps.customers.urls.api_urls')),
    path('api/v1/vehicles/', include('apps.vehicles.urls.api_urls')),
    path('api/v1/services/', include('apps.services.urls.api_urls')),
    path('api/v1/bookings/', include('apps.bookings.urls.api_urls')),
    path('api/v1/job-cards/', include('apps.job_cards.urls.api_urls')),
    path('api/v1/inventory/', include('apps.inventory.urls.api_urls')),
    path('api/v1/suppliers/', include('apps.suppliers.urls.api_urls')),
    path('api/v1/invoices/', include('apps.invoices.urls.api_urls')),
    path('api/v1/payments/', include('apps.payments.urls.api_urls')),
    path('api/v1/notifications/', include('apps.notifications.urls.api_urls')),
    path('api/v1/reports/', include('apps.reports.urls.api_urls')),
    path('api/v1/audit/', include('apps.audit.urls.api_urls')),
]

admin.site.site_header = "Antique Panels Automotive ERP"
admin.site.site_title = "Antique Panels Admin Portal"
admin.site.index_title = "Workshop Operations & Restoration Management"
