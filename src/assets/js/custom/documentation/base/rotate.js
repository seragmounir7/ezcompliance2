'use strict';
var KTBaseRotateDemos = {
	init: function (t) {
		var e;
		(e = document.querySelector('#kt_button_toggle')).addEventListener(
			'click',
			function () {
				e.classList.toggle('active');
			}
		);
	}
};
KTUtil.onDOMContentLoaded(function () {
	KTBaseRotateDemos.init();
});
