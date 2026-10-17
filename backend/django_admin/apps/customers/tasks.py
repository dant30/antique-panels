from celery import shared_task

@shared_task
def sync_customer_crm_records():
    return "Customer records synced"
