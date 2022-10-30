'use strict';
var KTContactApply = (function () {
	var t, e, o, n;
	return {
		init: function () {
			(o = document.querySelector('#kt_contact_form')),
				(t = document.getElementById('kt_contact_submit_button')),
				$(o.querySelector('[name="position"]')).on(
					'change',
					function () {
						e.revalidateField('position');
					}
				),
				(e = FormValidation.formValidation(o, {
					fields: {
						name: {
							validators: {
								notEmpty: { message: 'Name is required' }
							}
						},
						email: {
							validators: {
								notEmpty: {
									message: 'Email address is required'
								},
								emailAddress: {
									message:
										'The value is not a valid email address'
								}
							}
						},
						message: {
							validators: {
								notEmpty: { message: 'Message is required' }
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
				t.addEventListener('click', function (o) {
					o.preventDefault(),
						e &&
							e.validate().then(function (e) {
								console.log('validated!'),
									'Valid' == e
										? (t.setAttribute(
												'data-kt-indicator',
												'on'
										  ),
										  (t.disabled = !0),
										  setTimeout(function () {
												t.removeAttribute(
													'data-kt-indicator'
												),
													(t.disabled = !1),
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
														t.isConfirmed;
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
										  }).then(function (t) {
												KTUtil.scrollTop();
										  });
							});
				}),
				(function (t) {
					if (L) {
						var e,
							o = L.map(t, {
								center: [40.725, -73.985],
								zoom: 30
							});
						L.tileLayer(
							'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
							{
								attribution:
									'&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
							}
						).addTo(o),
							(e =
								void 0 === L.esri.Geocoding
									? L.esri.geocodeService()
									: L.esri.Geocoding.geocodeService());
						var i = L.layerGroup().addTo(o),
							r = L.divIcon({
								html:
									'<span class="svg-icon svg-icon-primary shadow svg-icon-3x"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="24" width="24" height="0"/><path d="M5,10.5 C5,6 8,3 12.5,3 C17,3 20,6.75 20,10.5 C20,12.8325623 17.8236613,16.03566 13.470984,20.1092932 C12.9154018,20.6292577 12.0585054,20.6508331 11.4774555,20.1594925 C7.15915182,16.5078313 5,13.2880005 5,10.5 Z M12.5,12 C13.8807119,12 15,10.8807119 15,9.5 C15,8.11928813 13.8807119,7 12.5,7 C11.1192881,7 10,8.11928813 10,9.5 C10,10.8807119 11.1192881,12 12.5,12 Z" fill="#000000" fill-rule="nonzero"/></g></svg></span>',
								bgPos: [10, 10],
								iconAnchor: [20, 37],
								popupAnchor: [0, -37],
								className: 'leaflet-marker'
							});
						L.marker([40.724716, -73.984789], { icon: r })
							.addTo(i)
							.bindPopup('430 E 6th St, New York, 10009.', {
								closeButton: !1
							})
							.openPopup(),
							o.on('click', function (t) {
								e.reverse()
									.latlng(t.latlng)
									.run(function (t, e) {
										t ||
											(i.clearLayers(),
											(n = e.address.Match_addr),
											L.marker(e.latlng, { icon: r })
												.addTo(i)
												.bindPopup(
													e.address.Match_addr,
													{ closeButton: !1 }
												)
												.openPopup(),
											Swal.fire({
												html:
													'Your selected - <b>"' +
													n +
													' - ' +
													e.latlng +
													'"</b>.',
												icon: 'success',
												buttonsStyling: !1,
												confirmButtonText:
													'Ok, got it!',
												customClass: {
													confirmButton:
														'btn btn-primary'
												}
											}).then(function (t) {}));
									});
							});
					}
				})('kt_contact_map');
		}
	};
})();
KTUtil.onDOMContentLoaded(function () {
	KTContactApply.init();
});
