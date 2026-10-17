from celery import shared_task

@shared_task
def send_overdue_invoice_reminders():
    return "Overdue invoice reminders dispatched"
