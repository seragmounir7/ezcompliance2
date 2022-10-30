'use strict';
var KTGeneralScrollDemos = {
	init: function () {
		var e, o, t;
		(e = document.querySelector('#kt_scroll_change_pos')),
			(o = document.querySelector('#kt_scroll_change_pos_top')),
			(t = document.querySelector('#kt_scroll_change_pos_bottom')),
			o.addEventListener('click', function (o) {
				e.scrollTop = 0;
			}),
			t.addEventListener('click', function (o) {
				e.scrollTop = parseInt(e.scrollHeight);
			});
	}
};
KTUtil.onDOMContentLoaded(function () {
	KTGeneralScrollDemos.init();
});
