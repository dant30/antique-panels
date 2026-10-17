from celery import shared_task

@shared_task
def update_service_pricing_indexes():
    return "Service price indexes updated"
