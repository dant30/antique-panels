from django.test import TestCase
from ..model.models import GeneratedReport, ReportType

class ReportModelTest(TestCase):
    def test_report(self):
        r = GeneratedReport.objects.create(title="Q4 Audit", report_type=ReportType.FINANCIAL_SUMMARY)
        self.assertEqual(r.title, "Q4 Audit")
