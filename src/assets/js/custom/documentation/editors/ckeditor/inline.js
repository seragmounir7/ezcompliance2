'use strict';
var KTFormsCKEditorInline = {
	init: function () {
		InlineEditor.create(document.querySelector('#kt_docs_ckeditor_inline'))
			.then((n) => {
				console.log(n);
			})
			.catch((n) => {
				console.error(n);
			});
	}
};
KTUtil.onDOMContentLoaded(function () {
	KTFormsCKEditorInline.init();
});