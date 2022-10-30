'use strict';
var KTJSTreeCheckable = {
	init: function () {
		$('#kt_docs_jstree_checkable').jstree({
			plugins: ['wholerow', 'checkbox', 'types'],
			core: {
				themes: { responsive: !1 },
				data: [
					{
						text: 'Same but with checkboxes',
						children: [
							{
								text: 'initially selected',
								state: { selected: !0 }
							},
							{
								text: 'custom icon',
								icon: 'fa fa-warning text-danger'
							},
							{
								text: 'initially open',
								icon: 'fa fa-folder text-default',
								state: { opened: !0 },
								children: ['Another node']
							},
							{
								text: 'custom icon',
								icon: 'fa fa-warning text-waring'
							},
							{
								text: 'disabled node',
								icon: 'fa fa-check text-success',
								state: { disabled: !0 }
							}
						]
					},
					'And wholerow selection'
				]
			},
			types: {
				default: { icon: 'fa fa-folder text-warning' },
				file: { icon: 'fa fa-file  text-warning' }
			}
		});
	}
};
KTUtil.onDOMContentLoaded(function () {
	KTJSTreeCheckable.init();
});
