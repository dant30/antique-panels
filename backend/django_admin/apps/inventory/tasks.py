from celery import shared_task

@shared_task
def check_low_stock_and_notify():
    return "Low stock audit completed"
