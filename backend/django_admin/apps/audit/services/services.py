from ..model.models import AuditLog

class AuditService:
    @staticmethod
    def record_event(action: str, entity: str, entity_id: str, user=None, details: dict = None, ip: str = None) -> AuditLog:
        return AuditLog.objects.create(
            action=action,
            target_entity=entity,
            target_id=str(entity_id),
            user=user if user and user.is_authenticated else None,
            details=details or {},
            ip_address=ip
        )
