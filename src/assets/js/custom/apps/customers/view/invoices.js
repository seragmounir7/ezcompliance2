'use strict';
var KTCustomerViewInvoices = {
	init: function () {
		!(function () {
			const e = '#kt_customer_details_invoices_table_1';
			document
				.querySelector(e)
				.querySelectorAll('tbody tr')
				.forEach((e) => {
					const t = e.querySelectorAll('td'),
						o = moment(t[0].innerHTML, 'DD MMM YYYY, LT').format();
					t[0].setAttribute('data-order', o);
				}),
				$(e).DataTable({
					info: !1,
					order: [],
					pageLength: 5,
					lengthChange: !1,
					columnDefs: [{ orderable: !1, targets: 4 }]
				});
		})(),
			(function () {
				const e = '#kt_customer_details_invoices_table_2';
				document
					.querySelector(e)
					.querySelectorAll('tbody tr')
					.forEach((e) => {
						const t = e.querySelectorAll('td'),
							o = moment(
								t[0].innerHTML,
								'DD MMM YYYY, LT'
							).format();
						t[0].setAttribute('data-order', o);
					}),
					$(e).DataTable({
						info: !1,
						order: [],
						pageLength: 5,
						lengthChange: !1,
						columnDefs: [{ orderable: !1, targets: 4 }]
					});
			})(),
			(function () {
				const e = '#kt_customer_details_invoices_table_3';
				document
					.querySelector(e)
					.querySelectorAll('tbody tr')
					.forEach((e) => {
						const t = e.querySelectorAll('td'),
							o = moment(
								t[0].innerHTML,
								'DD MMM YYYY, LT'
							).format();
						t[0].setAttribute('data-order', o);
					}),
					$(e).DataTable({
						info: !1,
						order: [],
						pageLength: 5,
						lengthChange: !1,
						columnDefs: [{ orderable: !1, targets: 4 }]
					});
			})(),
			(function () {
				const e = '#kt_customer_details_invoices_table_4';
				document
					.querySelector(e)
					.querySelectorAll('tbody tr')
					.forEach((e) => {
						const t = e.querySelectorAll('td'),
							o = moment(
								t[0].innerHTML,
								'DD MMM YYYY, LT'
							).format();
						t[0].setAttribute('data-order', o);
					}),
					$(e).DataTable({
						info: !1,
						order: [],
						pageLength: 5,
						lengthChange: !1,
						columnDefs: [{ orderable: !1, targets: 4 }]
					});
			})();
	}
};
KTUtil.onDOMContentLoaded(function () {
	KTCustomerViewInvoices.init();
});
