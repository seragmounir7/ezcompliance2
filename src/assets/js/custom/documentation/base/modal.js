'use strict';
var KTDocsModal = (function () {
	var n;
	return {
		init: function () {
			(n = document.querySelector('#kt_modal_3')) &&
				(function (n) {
					var e = 0,
						o = 0,
						t = 0,
						u = 0;
					function c(n) {
						(n = n || window.event).preventDefault(),
							(t = n.clientX),
							(u = n.clientY),
							(document.onmouseup = i),
							(document.onmousemove = l);
					}
					function l(c) {
						(c = c || window.event).preventDefault(),
							(e = t - c.clientX),
							(o = u - c.clientY),
							(t = c.clientX),
							(u = c.clientY),
							(n.style.top = n.offsetTop - o + 'px'),
							(n.style.left = n.offsetLeft - e + 'px');
					}
					function i() {
						(document.onmouseup = null),
							(document.onmousemove = null);
					}
					n.querySelector('.modal-content')
						? (n.querySelector('.modal-content').onmousedown = c)
						: (n.onmousedown = c);
				})(n);
		}
	};
})();
KTUtil.onDOMContentLoaded(function () {
	KTDocsModal.init();
});
