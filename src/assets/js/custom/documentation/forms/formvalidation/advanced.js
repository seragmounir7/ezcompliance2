'use strict';
var KTFormValidationDemoAdvanced = {
	init: function () {
		!(function () {
			const t = document.getElementById(
					'kt_docs_formvalidation_daterangepicker'
				),
				e = $('#kt_daterangepicker');
			e.daterangepicker({ autoUpdateInput: !1 }),
				e.on('apply.daterangepicker', function (t, e) {
					$(this).val(
						e.startDate.format('MM/DD/YYYY') +
							' - ' +
							e.endDate.format('MM/DD/YYYY')
					);
				}),
				e.on('cancel.daterangepicker', function (t, e) {
					$(this).val('');
				});
			var i = FormValidation.formValidation(t, {
				fields: {
					daterangepicker_input: {
						validators: {
							notEmpty: {
								message: 'Date range input is required'
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
			});
			const a = document.getElementById(
				'kt_docs_formvalidation_daterangepicker_submit'
			);
			a.addEventListener('click', function (t) {
				t.preventDefault(),
					i &&
						i.validate().then(function (t) {
							console.log('validated!'),
								'Valid' == t &&
									(a.setAttribute('data-kt-indicator', 'on'),
									(a.disabled = !0),
									setTimeout(function () {
										a.removeAttribute('data-kt-indicator'),
											(a.disabled = !1),
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
											});
									}, 2e3));
						});
			});
		})(),
			(function () {
				const t = document.getElementById(
					'kt_docs_formvalidation_flatpickr'
				);
				$('#kt_flatpickr').flatpickr();
				var e = FormValidation.formValidation(t, {
					fields: {
						flatpickr_input: {
							validators: {
								date: {
									format: 'YYYY-MM-DD',
									message: 'The value is not a valid date'
								},
								notEmpty: {
									message: 'Flatpickr input is required'
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
				});
				const i = document.getElementById(
					'kt_docs_formvalidation_flatpickr_submit'
				);
				i.addEventListener('click', function (t) {
					t.preventDefault(),
						e &&
							e.validate().then(function (t) {
								console.log('validated!'),
									'Valid' == t &&
										(i.setAttribute(
											'data-kt-indicator',
											'on'
										),
										(i.disabled = !0),
										setTimeout(function () {
											i.removeAttribute(
												'data-kt-indicator'
											),
												(i.disabled = !1),
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
												});
										}, 2e3));
							});
				});
			})(),
			(function () {
				const t = document.getElementById(
					'kt_docs_formvalidation_image_input'
				);
				var e = FormValidation.formValidation(t, {
					fields: {
						avatar: {
							validators: {
								notEmpty: { message: 'Please select an image' },
								file: {
									extension: 'jpg,jpeg,png',
									type: 'image/jpeg,image/png',
									message: 'The selected file is not valid'
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
				});
				const i = document.getElementById(
					'kt_docs_formvalidation_image_input_submit'
				);
				i.addEventListener('click', function (t) {
					t.preventDefault(),
						e &&
							e.validate().then(function (t) {
								console.log('validated!'),
									'Valid' == t &&
										(i.setAttribute(
											'data-kt-indicator',
											'on'
										),
										(i.disabled = !0),
										setTimeout(function () {
											i.removeAttribute(
												'data-kt-indicator'
											),
												(i.disabled = !1),
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
												});
										}, 2e3));
							});
				});
			})(),
			(function () {
				const t = document.getElementById(
					'kt_docs_formvalidation_password'
				);
				var e = FormValidation.formValidation(t, {
					fields: {
						current_password: {
							validators: {
								notEmpty: {
									message: 'Current password is required'
								}
							}
						},
						new_password: {
							validators: {
								notEmpty: {
									message: 'The password is required'
								},
								callback: {
									message: 'Please enter valid password',
									callback: function (t) {
										if (t.value.length > 0)
											return validatePassword();
									}
								}
							}
						},
						confirm_password: {
							validators: {
								notEmpty: {
									message:
										'The password confirmation is required'
								},
								identical: {
									compare: function () {
										return t.querySelector(
											'[name="new_password"]'
										).value;
									},
									message:
										'The password and its confirm are not the same'
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
				});
				const i = document.getElementById(
					'kt_docs_formvalidation_password_submit'
				);
				i.addEventListener('click', function (t) {
					t.preventDefault(),
						e &&
							e.validate().then(function (t) {
								console.log('validated!'),
									'Valid' == t &&
										(i.setAttribute(
											'data-kt-indicator',
											'on'
										),
										(i.disabled = !0),
										setTimeout(function () {
											i.removeAttribute(
												'data-kt-indicator'
											),
												(i.disabled = !1),
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
												});
										}, 2e3));
							});
				});
			})(),
			(function () {
				const t = document.getElementById(
					'kt_docs_formvalidation_select2'
				);
				var e = FormValidation.formValidation(t, {
					fields: {
						select2_input: {
							validators: {
								notEmpty: {
									message: 'Select2 input is required'
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
				});
				$(t.querySelector('[name="select2_input"]')).on(
					'change',
					function () {
						e.revalidateField('select2_input');
					}
				);
				const i = document.getElementById(
					'kt_docs_formvalidation_select2_submit'
				);
				i.addEventListener('click', function (t) {
					t.preventDefault(),
						e &&
							e.validate().then(function (t) {
								console.log('validated!'),
									'Valid' == t &&
										(i.setAttribute(
											'data-kt-indicator',
											'on'
										),
										(i.disabled = !0),
										setTimeout(function () {
											i.removeAttribute(
												'data-kt-indicator'
											),
												(i.disabled = !1),
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
												});
										}, 2e3));
							});
				});
			})(),
			(function () {
				const t = document.getElementById(
					'kt_docs_formvalidation_tagify'
				);
				new Tagify(document.querySelector('#kt_tagify'), {
					whitelist: [
						'Tag 1',
						'Tag 2',
						'Tag 3',
						'Tag 4',
						'Tag 5',
						'Tag 6',
						'Tag 7',
						'Tag 8',
						'Tag 9',
						'Tag 10',
						'Tag 11',
						'Tag 12'
					],
					maxTags: 6,
					dropdown: {
						maxItems: 20,
						classname: 'tagify__inline__suggestions',
						enabled: 0,
						closeOnSelect: !1
					}
				}).on('change', function () {
					e.revalidateField('tagify_input');
				});
				var e = FormValidation.formValidation(t, {
					fields: {
						tagify_input: {
							validators: {
								notEmpty: {
									message: 'Tagify input is required'
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
				});
				const i = document.getElementById(
					'kt_docs_formvalidation_tagify_submit'
				);
				i.addEventListener('click', function (t) {
					t.preventDefault(),
						e &&
							e.validate().then(function (t) {
								console.log('validated!'),
									'Valid' == t &&
										(i.setAttribute(
											'data-kt-indicator',
											'on'
										),
										(i.disabled = !0),
										setTimeout(function () {
											i.removeAttribute(
												'data-kt-indicator'
											),
												(i.disabled = !1),
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
												});
										}, 2e3));
							});
				});
			})();
	}
};
KTUtil.onDOMContentLoaded(function () {
	KTFormValidationDemoAdvanced.init();
});
