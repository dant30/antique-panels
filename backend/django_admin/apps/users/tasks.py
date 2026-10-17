from celery import shared_task

@shared_task
def sync_technician_shift_roster():
    return "Technician roster synchronized"
