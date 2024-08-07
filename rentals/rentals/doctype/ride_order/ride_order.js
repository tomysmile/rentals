// Copyright (c) 2024, Thinkspedia and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Order", {
	refresh(frm) {
    if (frm.doc.status !== "Accepted") {
      frm.add_custom_button("Accept", () => { 
        // status => Accepted
        frm.set_value("status", "Accepted");
        // save the form
        frm.save();
      })
    }
	},
});
