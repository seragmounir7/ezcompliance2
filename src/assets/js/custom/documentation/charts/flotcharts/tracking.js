'use strict';
var KTFlotDemoTracking = {
	init: function () {
		!(function () {
			for (var t = [], a = [], i = 0; i < 14; i += 0.1)
				t.push([i, Math.sin(i)]), a.push([i, Math.cos(i)]);
			var e = $.plot(
					$('#kt_docs_flot_tracking'),
					[
						{
							data: t,
							label: 'sin(x) = -0.00',
							lines: { lineWidth: 1 },
							shadowSize: 0
						},
						{
							data: a,
							label: 'cos(x) = -0.00',
							lines: { lineWidth: 1 },
							shadowSize: 0
						}
					],
					{
						colors: [
							KTUtil.getCssVariableValue('--kt-active-primary'),
							KTUtil.getCssVariableValue('--kt-active-warning')
						],
						series: { lines: { show: !0 } },
						crosshair: { mode: 'x' },
						grid: {
							hoverable: !0,
							autoHighlight: !1,
							tickColor: KTUtil.getCssVariableValue(
								'--kt-light-dark'
							),
							borderColor: KTUtil.getCssVariableValue(
								'--kt-light-dark'
							),
							borderWidth: 1
						},
						yaxis: { min: -1.2, max: 1.2 }
					}
				),
				l = $('#kt_docs_flot_tracking .legendLabel');
			l.each(function () {
				$(this).css('width', $(this).width());
			});
			var o = null,
				n = null;
			function s() {
				o = null;
				var t = n,
					a = e.getAxes();
				if (
					!(
						t.x < a.xaxis.min ||
						t.x > a.xaxis.max ||
						t.y < a.yaxis.min ||
						t.y > a.yaxis.max
					)
				) {
					var i,
						s,
						r = e.getData();
					for (i = 0; i < r.length; ++i) {
						var d = r[i];
						for (
							s = 0;
							s < d.data.length && !(d.data[s][0] > t.x);
							++s
						);
						var c,
							h = d.data[s - 1],
							g = d.data[s];
						(c =
							null == h
								? g[1]
								: null == g
								? h[1]
								: h[1] +
								  ((g[1] - h[1]) * (t.x - h[0])) /
										(g[0] - h[0])),
							l
								.eq(i)
								.text(
									d.label.replace(/=.*/, '= ' + c.toFixed(2))
								);
					}
				}
			}
			$('#kt_docs_flot_tracking').bind('plothover', function (t, a, i) {
				(n = a), o || (o = setTimeout(s, 50));
			});
		})();
	}
};
KTUtil.onDOMContentLoaded(function () {
	KTFlotDemoTracking.init();
});
