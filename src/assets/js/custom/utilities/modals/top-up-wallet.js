'use strict';
var KTModalTopUpWallet = (function () {
	var t,
		e,
		o,
		n,
		a,
		r,
		l,
		i = [];
	return {
		init: function () {
			(e = document.querySelector('#kt_modal_top_up_wallet')) &&
				((t = new bootstrap.Modal(e)),
				(o = document.querySelector('#kt_modal_top_up_wallet_stepper')),
				(n = document.querySelector(
					'#kt_modal_top_up_wallet_stepper_form'
				)),
				(a = o.querySelector('[data-kt-stepper-action="submit"]')),
				(r = o.querySelector('[data-kt-stepper-action="next"]')),
				(l = new KTStepper(o)).on('kt.stepper.changed', function (t) {
					4 === l.getCurrentStepIndex()
						? (a.classList.remove('d-none'),
						  a.classList.add('d-inline-block'),
						  r.classList.add('d-none'))
						: 5 === l.getCurrentStepIndex()
						? (a.classList.add('d-none'), r.classList.add('d-none'))
						: (a.classList.remove('d-inline-block'),
						  a.classList.remove('d-none'),
						  r.classList.remove('d-none'));
				}),
				l.on('kt.stepper.next', function (t) {
					console.log('stepper.next');
					var e = i[t.getCurrentStepIndex() - 1];
					e
						? e.validate().then(function (e) {
								console.log('validated!'),
									'Valid' == e
										? t.goNext()
										: Swal.fire({
												text:
													'Sorry, looks like there are some errors detected, please try again.',
												icon: 'error',
												buttonsStyling: !1,
												confirmButtonText:
													'Ok, got it!',
												customClass: {
													confirmButton:
														'btn btn-light'
												}
										  }).then(function () {});
						  })
						: (t.goNext(), KTUtil.scrollTop());
				}),
				l.on('kt.stepper.previous', function (t) {
					console.log('stepper.previous'),
						t.goPrevious(),
						KTUtil.scrollTop();
				}),
				a.addEventListener('click', function (t) {
					t.preventDefault(),
						(a.disabled = !0),
						a.setAttribute('data-kt-indicator', 'on'),
						setTimeout(function () {
							a.removeAttribute('data-kt-indicator'),
								(a.disabled = !1),
								l.goNext();
						}, 2e3);
				}),
				(function () {
					const t = n.querySelectorAll('[name="currency_type"]'),
						e = n.querySelectorAll(
							'[data-kt-modal-top-up-wallet-option]'
						);
					let o = 'dollar';
					t.forEach((t) => {
						t.addEventListener('change', (t) => {
							(o = t.target.value),
								e.forEach((t) => {
									t.classList.add('d-none'),
										t.getAttribute(
											'data-kt-modal-top-up-wallet-option'
										) === o && t.classList.remove('d-none');
								});
						});
					}),
						document
							.querySelector('#kt_modal_top_up_wallet_create_new')
							.addEventListener('click', function () {
								n.reset(), l.goTo(1);
							});
				})(),
				i.push(
					FormValidation.formValidation(n, {
						fields: {
							top_up_amount: {
								validators: {
									notEmpty: {
										message: 'Top up amount is required'
									}
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
					})
				),
				i.push(
					FormValidation.formValidation(n, {
						fields: {
							payment_methods: {
								validators: {
									notEmpty: {
										message: 'Payment method is required'
									}
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
					})
				),
				i.push(
					FormValidation.formValidation(n, {
						fields: {
							top_up_password: {
								validators: {
									notEmpty: {
										message: 'Password is required'
									}
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
					})
				),
				(() => {
					e.querySelector(
						'[data-kt-modal-action-type="close"]'
					).addEventListener('click', (t) => {
						o(t);
					});
					const o = (e) => {
						e.preventDefault(),
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
							}).then(function (e) {
								e.value
									? (n.reset(), t.hide())
									: 'cancel' === e.dismiss &&
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
					};
				})());
		}
	};
})();
KTUtil.onDOMContentLoaded(function () {
	KTModalTopUpWallet.init();
});
