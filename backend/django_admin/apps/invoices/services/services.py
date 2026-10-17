from ..model.models import Invoice

class InvoiceService:
    @staticmethod
    def recalculate_totals(invoice: Invoice):
        subtotal = sum(item.line_total for item in invoice.items.all())
        invoice.subtotal_amount = subtotal
        invoice.vat_amount = (subtotal * (invoice.vat_percentage / 100))
        invoice.total_amount = subtotal + invoice.vat_amount - invoice.discount_amount
        invoice.save()
        return invoice
