'use strict';
var KTFormsCKEditorClassic = {
	init: function () {
		ClassicEditor.create(
			document.querySelector('#kt_docs_ckeditor_classic')
		)
			.then((o) => {
				console.log(o);
			})
			.catch((o) => {
				console.error(o);
			});
	}
};
KTUtil.onDOMContentLoaded(function () {
	KTFormsCKEditorClassic.init();
});
