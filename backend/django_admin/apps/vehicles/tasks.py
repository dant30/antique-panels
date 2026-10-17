from celery import shared_task

@shared_task
def sync_vehicle_specs():
    return "Vehicle technical specs indexed"
