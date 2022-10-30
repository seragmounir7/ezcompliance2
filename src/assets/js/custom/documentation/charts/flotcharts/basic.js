'use strict';
var KTFlotDemoBasic = {
	init: function () {
		!(function () {
			for (var t = [], a = 0; a < 2 * Math.PI; a += 0.25)
				t.push([a, Math.sin(a)]);
			var i = [];
			for (a = 0; a < 2 * Math.PI; a += 0.25) i.push([a, Math.cos(a)]);
			var e = [];
			for (a = 0; a < 2 * Math.PI; a += 0.1) e.push([a, Math.tan(a)]);
			$.plot(
				$('#kt_docs_flot_basic'),
				[
					{
						label: 'sin(x)',
						data: t,
						lines: { lineWidth: 1 },
						shadowSize: 0
					},
					{
						label: 'cos(x)',
						data: i,
						lines: { lineWidth: 1 },
						shadowSize: 0
					},
					{
						label: 'tan(x)',
						data: e,
						lines: { lineWidth: 1 },
						shadowSize: 0
					}
				],
				{
					colors: [
						KTUtil.getCssVariableValue('--kt-active-success'),
						KTUtil.getCssVariableValue('--kt-active-primary'),
						KTUtil.getCssVariableValue('--kt-active-danger')
					],
					series: {
						lines: { show: !0 },
						points: { show: !0, fill: !0, radius: 3, lineWidth: 1 }
					},
					xaxis: {
						tickColor: KTUtil.getCssVariableValue(
							'--kt-light-dark'
						),
						ticks: [
							0,
							[Math.PI / 2, 'π/2'],
							[Math.PI, 'π'],
							[(3 * Math.PI) / 2, '3π/2'],
							[2 * Math.PI, '2π']
						]
					},
					yaxis: {
						tickColor: KTUtil.getCssVariableValue(
							'--kt-light-dark'
						),
						ticks: 10,
						min: -2,
						max: 2
					},
					grid: {
						borderColor: KTUtil.getCssVariableValue(
							'--kt-light-dark'
						),
						borderWidth: 1
					}
				}
			);
		})();
	}
};
KTUtil.onDOMContentLoaded(function () {
	KTFlotDemoBasic.init();
});
