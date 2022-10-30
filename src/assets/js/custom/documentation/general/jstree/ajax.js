'use strict';
var KTJSTreeAjax = {
	init: function () {
		$('#kt_docs_jstree_ajax').jstree({
			core: {
				themes: { responsive: !1 },
				check_callback: !0,
				data: {
					url: function (e) {
						return 'https://preview.keenthemes.com/api/jstree/ajax_data.php';
					},
					data: function (e) {
						return { parent: e.id };
					}
				}
			},
			types: {
				default: { icon: 'fa fa-folder text-primary' },
				file: { icon: 'fa fa-file  text-primary' }
			},
			state: { key: 'demo3' },
			plugins: ['dnd', 'state', 'types']
		});
	}
};
KTUtil.onDOMContentLoaded(function () {
	KTJSTreeAjax.init();
});
