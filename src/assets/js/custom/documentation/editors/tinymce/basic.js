'use strict';
var KTFormsTinyMCEBasic = {
	init: function () {
		var i;
		(i = { selector: '#kt_docs_tinymce_basic', height: '480' }),
			'dark' === KTThemeMode.getMode() &&
				((i.skin = 'oxide-dark'), (i.content_css = 'dark')),
			tinymce.init(i);
	}
};
KTUtil.onDOMContentLoaded(function () {
	KTFormsTinyMCEBasic.init();
});
