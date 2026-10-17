from celery import shared_task

@shared_task
def generate_weekly_executive_brief():
    return "Executive brief compiled"
