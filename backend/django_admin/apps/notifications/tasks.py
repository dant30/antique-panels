from celery import shared_task

@shared_task
def dispatch_queued_notifications():
    return "Notification dispatch batch processed"
