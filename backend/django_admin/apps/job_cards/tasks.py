from celery import shared_task

@shared_task
def send_customer_stage_update_notification(job_card_id: int):
    return f"Stage update notification sent for job card {job_card_id}"
