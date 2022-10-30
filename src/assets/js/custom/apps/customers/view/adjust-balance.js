'use strict';
var KTModalAdjustBalance = (function () {
	var t, e, n, o, a, i, r, l, c;
	return {
		init: function () {
			(t = document.querySelector('#kt_modal_adjust_balance')),
				(c = new bootstrap.Modal(t)),
				(l = t.querySelector('#kt_modal_adjust_balance_form')),
				(e = l.querySelector('#kt_modal_adjust_balance_submit')),
				(n = l.querySelector('#kt_modal_adjust_balance_cancel')),
				(o = t.querySelector('#kt_modal_adjust_balance_close')),
				Inputmask('US$ 9,999,999.99', { numericInput: !0 }).mask(
					'#kt_modal_inputmask'
				),
				(function () {
					const e = t.querySelector(
						'[kt-modal-adjust-balance="current_balance"]'
					);
					(r = t.querySelector(
						'[kt-modal-adjust-balance="new_balance"]'
					)),
						(i = document.getElementById('kt_modal_inputmask'));
					const n = e.innerHTML.includes('-');
					let o,
						a = parseFloat(
							e.innerHTML.replace(/[^0-9.]/g, '').replace(',', '')
						);
					(a = n ? -1 * a : a),
						i.addEventListener('focusout', function (t) {
							(o = parseFloat(
								t.target.value
									.replace(/[^0-9.]/g, '')
									.replace(',', '')
							)),
								isNaN(o) && (o = 0),
								(r.innerHTML =
									'US$ ' +
									(o + a)
										.toFixed(2)
										.replace(/\d(?=(\d{3})+\.)/g, '$&,'));
						});
				})(),
				(a = FormValidation.formValidation(l, {
					fields: {
						adjustment: {
							validators: {
								notEmpty: {
									message: 'Adjustment type is required'
								}
							}
						},
						amount: {
							validators: {
								notEmpty: { message: 'Amount is required' }
							}
						}
					},
					plugins: {
						trigger: new FormValidation.plugins.Trigger(),
						bootstrap: new FormValidation.plugins.Bootstrap5({
							rowSelector: '.fv-row',
							eleInvalidClass: '',
							eleValidClass: ''
						})
					}
				})),
				$(l.querySelector('[name="adjustment"]')).on(
					'change',
					function () {
						a.revalidateField('adjustment');
					}
				),
				e.addEventListener('click', function (t) {
					t.preventDefault(),
						a &&
							a.validate().then(function (t) {
								console.log('validated!'),
									'Valid' == t
										? (e.setAttribute(
												'data-kt-indicator',
												'on'
										  ),
										  (e.disabled = !0),
										  setTimeout(function () {
												e.removeAttribute(
													'data-kt-indicator'
												),
													Swal.fire({
														text:
															'Form has been successfully submitted!',
														icon: 'success',
														buttonsStyling: !1,
														confirmButtonText:
															'Ok, got it!',
														customClass: {
															confirmButton:
																'btn btn-primary'
														}
													}).then(function (t) {
														t.isConfirmed &&
															(c.hide(),
															(e.disabled = !1),
															l.reset(),
															(r.innerHTML =
																'--'));
													});
										  }, 2e3))
										: Swal.fire({
												text:
													'Sorry, looks like there are some errors detected, please try again.',
												icon: 'error',
												buttonsStyling: !1,
												confirmButtonText:
													'Ok, got it!',
												customClass: {
													confirmButton:
														'btn btn-primary'
												}
										  });
							});
				}),
				n.addEventListener('click', function (t) {
					t.preventDefault(),
						Swal.fire({
							text: 'Are you sure you would like to cancel?',
							icon: 'warning',
							showCancelButton: !0,
							buttonsStyling: !1,
							confirmButtonText: 'Yes, cancel it!',
							cancelButtonText: 'No, return',
							customClass: {
								confirmButton: 'btn btn-primary',
								cancelButton: 'btn btn-active-light'
							}
						}).then(function (t) {
							t.value
								? (l.reset(), c.hide())
								: 'cancel' === t.dismiss &&
								  Swal.fire({
										text:
											'Your form has not been cancelled!.',
										icon: 'error',
										buttonsStyling: !1,
										confirmButtonText: 'Ok, got it!',
										customClass: {
											confirmButton: 'btn btn-primary'
										}
								  });
						});
				}),
				o.addEventListener('click', function (t) {
					t.preventDefault(),
						Swal.fire({
							text: 'Are you sure you would like to cancel?',
							icon: 'warning',
							showCancelButton: !0,
							buttonsStyling: !1,
							confirmButtonText: 'Yes, cancel it!',
							cancelButtonText: 'No, return',
							customClass: {
								confirmButton: 'btn btn-primary',
								cancelButton: 'btn btn-active-light'
							}
						}).then(function (t) {
							t.value
								? (l.reset(), c.hide())
								: 'cancel' === t.dismiss &&
								  Swal.fire({
										text:
											'Your form has not been cancelled!.',
										icon: 'error',
										buttonsStyling: !1,
										confirmButtonText: 'Ok, got it!',
										customClass: {
											confirmButton: 'btn btn-primary'
										}
								  });
						});
				});
		}
	};
})();
KTUtil.onDOMContentLoaded(function () {
	KTModalAdjustBalance.init();
});
