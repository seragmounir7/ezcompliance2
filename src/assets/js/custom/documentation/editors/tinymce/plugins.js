'use strict';
var KTFormsTinyMCEPlugins = {
	init: function () {
		tinymce.init({
			selector: '#kt_docs_tinymce_plugins',
			height: '480',
			toolbar:
				'advlist | autolink | link image | lists charmap | print preview',
			plugins: 'advlist autolink link image lists charmap print preview'
		});
	}
};
KTUtil.onDOMContentLoaded(function () {
	KTFormsTinyMCEPlugins.init();
});
