'use strict';
var KTModalUpgradePlan = (function () {
	var t,
		a,
		n,
		e = function (a) {
			[].slice
				.call(t.querySelectorAll('[data-kt-plan-price-month]'))
				.map(function (t) {
					var n = t.getAttribute('data-kt-plan-price-month'),
						e = t.getAttribute('data-kt-plan-price-annual');
					'month' === a
						? (t.innerHTML = n)
						: 'annual' === a && (t.innerHTML = e);
				});
		};
	return {
		init: function () {
			(t = document.querySelector('#kt_modal_upgrade_plan')) &&
				((a = t.querySelector('[data-kt-plan="month"]')),
				(n = t.querySelector('[data-kt-plan="annual"]')),
				a.addEventListener('click', function (t) {
					t.preventDefault(),
						a.classList.add('active'),
						n.classList.remove('active'),
						e('month');
				}),
				n.addEventListener('click', function (t) {
					t.preventDefault(),
						a.classList.remove('active'),
						n.classList.add('active'),
						e('annual');
				}),
				e());
		}
	};
})();
KTUtil.onDOMContentLoaded(function () {
	KTModalUpgradePlan.init();
});
