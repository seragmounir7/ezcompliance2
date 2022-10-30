'use strict';
var KTGeneralSearchResponsiveDemos = (function () {
	var e,
		n,
		t,
		s,
		r,
		a,
		o,
		c,
		d,
		l = function (e) {
			setTimeout(function () {
				var s = KTUtil.getRandomInt(1, 3);
				n.classList.add('d-none'),
					3 === s
						? (t.classList.add('d-none'),
						  r.classList.remove('d-none'))
						: (t.classList.remove('d-none'),
						  r.classList.add('d-none')),
					e.complete();
			}, 1500);
		},
		i = function (e) {
			n.classList.remove('d-none'),
				t.classList.add('d-none'),
				r.classList.add('d-none');
		};
	return {
		init: function () {
			(e = document.querySelector(
				'#kt_docs_search_handler_responsive'
			)) &&
				((s = e.querySelector('[data-kt-search-element="wrapper"]')),
				(n = e.querySelector(
					'[data-kt-search-element="recently-viewed"]'
				)),
				(t = e.querySelector('[data-kt-search-element="results"]')),
				(r = e.querySelector('[data-kt-search-element="empty"]')),
				(a = e.querySelector('[data-kt-search-element="preferences"]')),
				(o = e.querySelector(
					'[data-kt-search-element="preferences-show"]'
				)),
				(c = e.querySelector(
					'[data-kt-search-element="preferences-dismiss"]'
				)),
				(d = new KTSearch(e)).on('kt.search.process', l),
				d.on('kt.search.clear', i),
				o.addEventListener('click', function () {
					s.classList.add('d-none'), a.classList.remove('d-none');
				}),
				c.addEventListener('click', function () {
					s.classList.remove('d-none'), a.classList.add('d-none');
				}));
		}
	};
})();
KTUtil.onDOMContentLoaded(function () {
	KTGeneralSearchResponsiveDemos.init();
}),
	'undefined' != typeof module &&
		void 0 !== module.exports &&
		(module.exports = KTGeneralSearchResponsiveDemos);
