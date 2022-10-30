'use strict';
var KTFlotDemoPie = {
	init: function () {
		var a;
		(a = [
			{
				label: 'CSS',
				data: 10,
				color: KTUtil.getCssVariableValue('--kt-active-primary')
			},
			{
				label: 'HTML5',
				data: 40,
				color: KTUtil.getCssVariableValue('--kt-active-success')
			},
			{
				label: 'PHP',
				data: 30,
				color: KTUtil.getCssVariableValue('--kt-active-danger')
			},
			{
				label: 'Angular',
				data: 20,
				color: KTUtil.getCssVariableValue('--kt-active-warning')
			}
		]),
			$.plot($('#kt_docs_flot_pie'), a, {
				series: { pie: { show: !0 } }
			});
	}
};
KTUtil.onDOMContentLoaded(function () {
	KTFlotDemoPie.init();
});
