from django.test import TestCase
from ..model.models import User, UserRole

class UserModelTest(TestCase):
    def test_user_creation(self):
        u = User.objects.create_user(username="tech1", email="tech1@antiquepanels.co.ke", password="password")
        self.assertEqual(u.username, "tech1")
