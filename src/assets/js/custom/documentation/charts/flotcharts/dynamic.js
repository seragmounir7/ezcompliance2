'use strict';
var KTFlotDemoDynamic = {
	init: function () {
		!(function () {
			var t = [];
			function i() {
				for (t.length > 0 && (t = t.slice(1)); t.length < 250; ) {
					var i =
						(t.length > 0 ? t[t.length - 1] : 50) +
						10 * Math.random() -
						5;
					i < 0 && (i = 0), i > 100 && (i = 100), t.push(i);
				}
				for (var a = [], e = 0; e < t.length; ++e) a.push([e, t[e]]);
				return a;
			}
			var a = {
					colors: [
						KTUtil.getCssVariableValue('--kt-active-danger'),
						KTUtil.getCssVariableValue('--kt-active-primary')
					],
					series: { shadowSize: 1 },
					lines: {
						show: !0,
						lineWidth: 0.5,
						fill: !0,
						fillColor: {
							colors: [{ opacity: 0.1 }, { opacity: 1 }]
						}
					},
					yaxis: {
						min: 0,
						max: 100,
						tickColor: KTUtil.getCssVariableValue(
							'--kt-light-dark'
						),
						tickFormatter: function (t) {
							return t + '%';
						}
					},
					xaxis: { show: !1 },
					colors: [KTUtil.getCssVariableValue('--kt-active-primary')],
					grid: {
						tickColor: KTUtil.getCssVariableValue(
							'--kt-light-dark'
						),
						borderWidth: 0
					}
				},
				e = $.plot($('#kt_docs_flot_dynamic'), [i()], a);
			!(function t() {
				e.setData([i()]), e.draw(), setTimeout(t, 30);
			})();
		})();
	}
};
KTUtil.onDOMContentLoaded(function () {
	KTFlotDemoDynamic.init();
});
