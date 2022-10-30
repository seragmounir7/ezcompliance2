'use strict';
var KTGeneralChartJS = (function () {
	function a(a = 1, t = 100) {
		return Math.floor(Math.random() * (t - a) + a);
	}
	function t(t = 1, e = 100, r = 10) {
		for (var l = [], s = 0; s < r; s++) l.push(a(t, e));
		return l;
	}
	return {
		init: function () {
			(Chart.defaults.font.size = 13),
				(Chart.defaults.font.family = KTUtil.getCssVariableValue(
					'--bs-font-sans-serif'
				)),
				(function () {
					var a = document.getElementById('kt_chartjs_1'),
						e = KTUtil.getCssVariableValue('--kt-primary'),
						r = KTUtil.getCssVariableValue('--kt-danger'),
						l = KTUtil.getCssVariableValue('--kt-success');
					KTUtil.getCssVariableValue('--bs-font-sans-serif');
					const s = {
						labels: [
							'January',
							'February',
							'March',
							'April',
							'May',
							'June',
							'July',
							'August',
							'September',
							'October',
							'November',
							'December'
						],
						datasets: [
							{
								label: 'Dataset 1',
								data: t(1, 100, 12),
								backgroundColor: e,
								stack: 'Stack 0'
							},
							{
								label: 'Dataset 2',
								data: t(1, 100, 12),
								backgroundColor: r,
								stack: 'Stack 1'
							},
							{
								label: 'Dataset 3',
								data: t(1, 100, 12),
								backgroundColor: l,
								stack: 'Stack 2'
							}
						]
					};
					new Chart(a, {
						type: 'bar',
						data: s,
						options: {
							plugins: { title: { display: !1 } },
							responsive: !0,
							interaction: { intersect: !1 },
							scales: { x: { stacked: !0 }, y: { stacked: !0 } }
						}
					});
				})(),
				(function () {
					var a = document.getElementById('kt_chartjs_2'),
						e = KTUtil.getCssVariableValue('--kt-primary'),
						r = KTUtil.getCssVariableValue('--kt-danger');
					KTUtil.getCssVariableValue('--kt-success'),
						KTUtil.getCssVariableValue('--bs-font-sans-serif');
					const l = {
						labels: [
							'January',
							'February',
							'March',
							'April',
							'May',
							'June',
							'July'
						],
						datasets: [
							{
								label: 'Dataset 1',
								data: t(1, 50, 7),
								borderColor: e,
								backgroundColor: 'transparent'
							},
							{
								label: 'Dataset 2',
								data: t(1, 50, 7),
								borderColor: r,
								backgroundColor: 'transparent'
							}
						]
					};
					new Chart(a, {
						type: 'line',
						data: l,
						options: {
							plugins: { title: { display: !1 } },
							responsive: !0
						}
					});
				})(),
				(function () {
					var a = document.getElementById('kt_chartjs_3'),
						e = KTUtil.getCssVariableValue('--kt-primary'),
						r = KTUtil.getCssVariableValue('--kt-danger'),
						l = KTUtil.getCssVariableValue('--kt-success'),
						s = KTUtil.getCssVariableValue('--kt-warning'),
						i = KTUtil.getCssVariableValue('--kt-info');
					const n = {
						labels: [
							'January',
							'February',
							'March',
							'April',
							'May'
						],
						datasets: [
							{
								label: 'Dataset 1',
								data: t(1, 100, 5),
								backgroundColor: [e, r, l, s, i]
							}
						]
					};
					new Chart(a, {
						type: 'pie',
						data: n,
						options: {
							plugins: { title: { display: !1 } },
							responsive: !0
						}
					});
				})(),
				(function () {
					var a = document.getElementById('kt_chartjs_4'),
						e = KTUtil.getCssVariableValue('--kt-primary'),
						r = KTUtil.getCssVariableValue('--kt-danger');
					KTUtil.getCssVariableValue('--kt-danger-light'),
						KTUtil.getCssVariableValue('--bs-font-sans-serif');
					const l = {
						labels: [
							'January',
							'February',
							'March',
							'April',
							'May',
							'June',
							'July',
							'August',
							'September',
							'October',
							'November',
							'December'
						],
						datasets: [
							{
								label: 'Dataset 1',
								data: t(50, 100, 12),
								borderColor: e,
								backgroundColor: 'transparent',
								stack: 'combined'
							},
							{
								label: 'Dataset 2',
								data: t(1, 60, 12),
								backgroundColor: r,
								borderColor: r,
								stack: 'combined',
								type: 'bar'
							}
						]
					};
					new Chart(a, {
						type: 'line',
						data: l,
						options: {
							plugins: { title: { display: !1 } },
							responsive: !0,
							interaction: { intersect: !1 },
							scales: { y: { stacked: !0 } }
						},
						defaults: { font: { family: 'inherit' } }
					});
				})(),
				(function () {
					var a = document.getElementById('kt_chartjs_5'),
						e = KTUtil.getCssVariableValue('--kt-info'),
						r = KTUtil.getCssVariableValue('--kt-info-light'),
						l = KTUtil.getCssVariableValue('--kt-warning'),
						s = KTUtil.getCssVariableValue('--kt-warning-light'),
						i = KTUtil.getCssVariableValue('--kt-primary'),
						n = KTUtil.getCssVariableValue('--kt-primary-light');
					KTUtil.getCssVariableValue('--bs-font-sans-serif');
					const o = {
						labels: [
							'January',
							'February',
							'March',
							'April',
							'May',
							'June'
						],
						datasets: [
							{
								label: 'Dataset 1',
								data: t(20, 80, 6),
								borderColor: e,
								backgroundColor: r
							},
							{
								label: 'Dataset 2',
								data: t(10, 60, 6),
								backgroundColor: s,
								borderColor: l
							},
							{
								label: 'Dataset 3',
								data: t(0, 80, 6),
								backgroundColor: n,
								borderColor: i
							}
						]
					};
					new Chart(a, {
						type: 'radar',
						data: o,
						options: {
							plugins: { title: { display: !1 } },
							responsive: !0
						}
					});
				})();
		}
	};
})();
KTUtil.onDOMContentLoaded(function () {
	KTGeneralChartJS.init();
});