'use strict';
var KTFlotDemoAxis = (function () {
	var i = function () {
		function i() {
			return Math.floor(21 * Math.random()) + 20;
		}
		var t = [
				[1, i()],
				[2, i()],
				[3, 2 + i()],
				[4, 3 + i()],
				[5, 5 + i()],
				[6, 10 + i()],
				[7, 15 + i()],
				[8, 20 + i()],
				[9, 25 + i()],
				[10, 30 + i()],
				[11, 35 + i()],
				[12, 25 + i()],
				[13, 15 + i()],
				[14, 20 + i()],
				[15, 45 + i()],
				[16, 50 + i()],
				[17, 65 + i()],
				[18, 70 + i()],
				[19, 85 + i()],
				[20, 80 + i()],
				[21, 75 + i()],
				[22, 80 + i()],
				[23, 75 + i()],
				[24, 70 + i()],
				[25, 65 + i()],
				[26, 75 + i()],
				[27, 80 + i()],
				[28, 85 + i()],
				[29, 90 + i()],
				[30, 95 + i()]
			],
			e = [
				[1, i() - 5],
				[2, i() - 5],
				[3, i() - 5],
				[4, 6 + i()],
				[5, 5 + i()],
				[6, 20 + i()],
				[7, 25 + i()],
				[8, 36 + i()],
				[9, 26 + i()],
				[10, 38 + i()],
				[11, 39 + i()],
				[12, 50 + i()],
				[13, 51 + i()],
				[14, 12 + i()],
				[15, 13 + i()],
				[16, 14 + i()],
				[17, 15 + i()],
				[18, 15 + i()],
				[19, 16 + i()],
				[20, 17 + i()],
				[21, 18 + i()],
				[22, 19 + i()],
				[23, 20 + i()],
				[24, 21 + i()],
				[25, 14 + i()],
				[26, 24 + i()],
				[27, 25 + i()],
				[28, 26 + i()],
				[29, 27 + i()],
				[30, 31 + i()]
			];
		$.plot(
			$('#kt_docs_flot_axis'),
			[
				{
					data: t,
					label: 'Unique Visits',
					lines: { lineWidth: 1 },
					shadowSize: 0
				},
				{
					data: e,
					label: 'Page Views',
					lines: { lineWidth: 1 },
					shadowSize: 0
				}
			],
			{
				series: {
					lines: {
						show: !0,
						lineWidth: 2,
						fill: !0,
						fillColor: {
							colors: [{ opacity: 0.05 }, { opacity: 0.01 }]
						}
					},
					points: { show: !0, radius: 3, lineWidth: 1 },
					shadowSize: 2
				},
				grid: {
					hoverable: !0,
					clickable: !0,
					tickColor: KTUtil.getCssVariableValue('--kt-light-dark'),
					borderColor: KTUtil.getCssVariableValue('--kt-light-dark'),
					borderWidth: 1
				},
				colors: [
					KTUtil.getCssVariableValue('--kt-active-primary'),
					KTUtil.getCssVariableValue('--kt-active-danger')
				],
				xaxis: {
					ticks: 11,
					tickDecimals: 0,
					tickColor: KTUtil.getCssVariableValue('--kt-active-dark')
				},
				yaxis: {
					ticks: 11,
					tickDecimals: 0,
					tickColor: KTUtil.getCssVariableValue('--kt-active-dark')
				}
			}
		);
		var a = null;
		$('#chart_2').bind('plothover', function (i, t, e) {
			if (
				($('#x').text(t.x.toFixed(2)), $('#y').text(t.y.toFixed(2)), e)
			) {
				if (a != e.dataIndex) {
					(a = e.dataIndex), $('#tooltip').remove();
					var l = e.datapoint[0].toFixed(2),
						o = e.datapoint[1].toFixed(2);
					!(function (i, t, e) {
						$('<div id="tooltip">' + e + '</div>')
							.css({
								position: 'absolute',
								display: 'none',
								top: t + 5,
								left: i + 15,
								border:
									'1px solid ' +
									KTUtil.getCssVariableValue(
										'--kt-light-dark'
									),
								padding: '4px',
								color: +KTUtil.getCssVariableValue(
									'--kt-active-dark'
								),
								'border-radius': '3px',
								'background-color': +KTUtil.getCssVariableValue(
									'--kt-light-dark'
								),
								opacity: 0.8
							})
							.appendTo('body')
							.fadeIn(200);
					})(
						e.pageX,
						e.pageY,
						e.series.label + ' of ' + l + ' = ' + o
					);
				}
			} else $('#tooltip').remove(), (a = null);
		});
	};
	return {
		init: function () {
			i();
		}
	};
})();
KTUtil.onDOMContentLoaded(function () {
	KTFlotDemoAxis.init();
});
