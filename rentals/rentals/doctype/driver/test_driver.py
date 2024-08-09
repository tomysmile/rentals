# Copyright (c) 2024, Thinkspedia and Contributors
# See license.txt

import frappe
from frappe.tests.utils import FrappeTestCase


class TestDriver(FrappeTestCase):
	def test_full_name_correctly_set(self):
		test_driver = frappe.new_doc("Driver")
		test_driver.first_name = "John"
		test_driver.last_name = "Doe"
		test_driver.license_number = "XYZ12345"
		test_driver.phone_number = "+6281299912345"
		test_driver.save()

		self.assertEqual(test_driver.full_name, "John Doe")
