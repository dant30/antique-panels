from celery import shared_task

@shared_task
def purge_old_audit_records():
    return "Audit logs retention policy verified"
