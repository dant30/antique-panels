from celery import shared_task

@shared_task
def sync_supplier_price_sheets():
    return "Supplier catalogues updated"
