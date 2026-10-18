from ..models.models import Customer

class CustomerService:
    @staticmethod
    def find_or_create_by_phone(phone: str, first_name: str, last_name: str, email: str = None) -> Customer:
        customer, created = Customer.objects.get_or_create(
            phone_number=phone.strip(),
            defaults={
                'first_name': first_name.strip(),
                'last_name': last_name.strip(),
                'email': email.strip() if email else None,
            }
        )
        return customer
