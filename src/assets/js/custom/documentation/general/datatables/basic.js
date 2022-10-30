'use strict';
var KTDatatablesBasic = {
	init: function () {
		$('#kt_datatable_zero_configuration').DataTable(),
			$('#kt_datatable_vertical_scroll').DataTable({
				scrollY: '500px',
				scrollCollapse: !0,
				paging: !1,
				dom: "<'table-responsive'tr>"
			}),
			$('#kt_datatable_horizontal_scroll').DataTable({ scrollX: !0 }),
			$('#kt_datatable_both_scrolls').DataTable({
				scrollY: 300,
				scrollX: !0
			}),
			$('#kt_datatable_fixed_columns').DataTable({
				scrollY: '300px',
				scrollX: !0,
				scrollCollapse: !0,
				fixedColumns: { left: 2 }
			});
	}
};
KTUtil.onDOMContentLoaded(function () {
	KTDatatablesBasic.init();
});
