// Copyright (c) 2024, Thinkspedia and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Booking", {
	refresh(frm) {
		//
	},
});

frappe.ui.form.on("Ride Booking Item", {
	refresh(frm) {
		//
	},
	distance(frm, cdt, cdn) {
		let total_d = 0;
		for(let item of frm.doc.items) {
			total_d += item.distance;
		}

		const amount = frm.doc.rate * total_d;
		frm.set_value("total_amount", amount);
	}
});
