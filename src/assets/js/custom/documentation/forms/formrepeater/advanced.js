'use strict';
var KTFormRepeaterAdvanced = {
	init: function () {
		$('#kt_docs_repeater_advanced').repeater({
			initEmpty: !1,
			defaultValues: { 'text-input': 'foo' },
			show: function () {
				$(this).slideDown(),
					$(this).find('[data-kt-repeater="select2"]').select2(),
					$(this).find('[data-kt-repeater="datepicker"]').flatpickr(),
					new Tagify(
						this.querySelector('[data-kt-repeater="tagify"]')
					);
			},
			hide: function (e) {
				$(this).slideUp(e);
			},
			ready: function () {
				$('[data-kt-repeater="select2"]').select2(),
					$('[data-kt-repeater="datepicker"]').flatpickr(),
					new Tagify(
						document.querySelector('[data-kt-repeater="tagify"]')
					);
			}
		});
	}
};
KTUtil.onDOMContentLoaded(function () {
	KTFormRepeaterAdvanced.init();
});