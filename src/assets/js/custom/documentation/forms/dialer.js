'use strict';
var KTFormsDialerDemos = {
	init: function (e) {
		var i;
		(i = document.querySelector('#kt_dialer_example_1')),
			new KTDialer(i, {
				min: 1e3,
				max: 5e4,
				step: 1e3,
				prefix: '$',
				decimals: 2
			});
	}
};
KTUtil.onDOMContentLoaded(function () {
	KTFormsDialerDemos.init();
});