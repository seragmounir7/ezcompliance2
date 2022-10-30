'use strict';
var KTModalSelectLocation = (function () {
	var t,
		o,
		e = '',
		n = !1;
	return {
		init: function () {
			(o = document.querySelector('#kt_modal_select_location')) &&
				((t = document.querySelector(
					'#kt_modal_select_location_target'
				)),
				document
					.querySelector('#kt_modal_select_location_button')
					.addEventListener('click', function () {
						t && (t.value ? (t.value = e) : (t.innerHTML = e));
					}),
				o.addEventListener('shown.bs.modal', function () {
					n ||
						(!(function () {
							if (L) {
								var t,
									o = L.map('kt_modal_select_location_map', {
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
									(t =
										void 0 === L.esri.Geocoding
											? L.esri.geocodeService()
											: L.esri.Geocoding.geocodeService());
								var n = L.layerGroup().addTo(o),
									i = L.divIcon({
										html:
											'<span class="svg-icon svg-icon-danger svg-icon-3x"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="24" width="24" height="0"/><path d="M5,10.5 C5,6 8,3 12.5,3 C17,3 20,6.75 20,10.5 C20,12.8325623 17.8236613,16.03566 13.470984,20.1092932 C12.9154018,20.6292577 12.0585054,20.6508331 11.4774555,20.1594925 C7.15915182,16.5078313 5,13.2880005 5,10.5 Z M12.5,12 C13.8807119,12 15,10.8807119 15,9.5 C15,8.11928813 13.8807119,7 12.5,7 C11.1192881,7 10,8.11928813 10,9.5 C10,10.8807119 11.1192881,12 12.5,12 Z" fill="#000000" fill-rule="nonzero"/></g></svg></span>',
										bgPos: [10, 10],
										iconAnchor: [20, 37],
										popupAnchor: [0, -37],
										className: 'leaflet-marker'
									});
								o.on('click', function (o) {
									t.reverse()
										.latlng(o.latlng)
										.run(function (t, o) {
											t ||
												(n.clearLayers(),
												(e = o.address.Match_addr),
												L.marker(o.latlng, { icon: i })
													.addTo(n)
													.bindPopup(
														o.address.Match_addr,
														{ closeButton: !1 }
													)
													.openPopup(),
												Swal.fire({
													html:
														'<div class="mb-2">Your selected - <b>"' +
														e +
														'"</b>.</div>Click on the "Apply" button to select this location.',
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
						})(),
						(n = !0));
				}));
		}
	};
})();
KTUtil.onDOMContentLoaded(function () {
	KTModalSelectLocation.init();
});
