from celery import shared_task

@shared_task
def send_booking_confirmation_alert(booking_id: int):
    return f"Booking confirmation alert sent for id {booking_id}"
