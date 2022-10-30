'use strict';
var KTFormsClipboard = {
	init: function () {
		!(function () {
			const n = document.getElementById('kt_clipboard_1'),
				e = n.nextElementSibling;
			new ClipboardJS(e, {
				target: n,
				text: function () {
					return n.value;
				}
			}).on('success', function (n) {
				const t = e.innerHTML;
				'Copied!' !== e.innerHTML &&
					((e.innerHTML = 'Copied!'),
					setTimeout(function () {
						e.innerHTML = t;
					}, 3e3));
			});
		})(),
			(function () {
				const n = document.getElementById('kt_clipboard_2'),
					e = n.nextElementSibling;
				new ClipboardJS(e, {
					target: n,
					text: function () {
						return n.innerText;
					}
				}).on('success', function (n) {
					const t = e.innerHTML;
					'Copied!' !== e.innerHTML &&
						((e.innerHTML = 'Copied!'),
						setTimeout(function () {
							e.innerHTML = t;
						}, 3e3));
				});
			})(),
			(function () {
				const n = document.getElementById('kt_clipboard_3');
				new ClipboardJS(n).on('success', function (e) {
					const t = n.innerHTML;
					'Copied!' !== n.innerHTML &&
						((n.innerHTML = 'Copied!'),
						setTimeout(function () {
							n.innerHTML = t;
						}, 3e3));
				});
			})(),
			(function () {
				const n = document.getElementById('kt_clipboard_4'),
					e = n.nextElementSibling;
				new ClipboardJS(e, {
					target: n,
					text: function () {
						return n.innerHTML;
					}
				}).on('success', function (t) {
					var i = e.querySelector('.bi.bi-check'),
						o = e.querySelector('.svg-icon');
					if (i) return;
					(i = document.createElement('i')).classList.add('bi'),
						i.classList.add('bi-check'),
						i.classList.add('fs-2x'),
						e.appendChild(i);
					const s = ['text-success', 'fw-boldest'];
					n.classList.add(...s),
						e.classList.add('btn-success'),
						o.classList.add('d-none'),
						setTimeout(function () {
							o.classList.remove('d-none'),
								e.removeChild(i),
								n.classList.remove(...s),
								e.classList.remove('btn-success');
						}, 3e3);
				});
			})();
	}
};
KTUtil.onDOMContentLoaded(function () {
	KTFormsClipboard.init();
});
