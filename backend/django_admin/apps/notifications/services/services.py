from ..models.models import Notification, NotificationChannel, NotificationStatus

class NotificationService:
    @staticmethod
    def send_whatsapp(recipient: str, message: str) -> Notification:
        notif = Notification.objects.create(
            recipient_identifier=recipient,
            channel=NotificationChannel.WHATSAPP,
            body=message,
            status=NotificationStatus.SENT
        )
        return notif
