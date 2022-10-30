'use strict';
var KTFormsTinyMCEHidden = {
	init: function () {
		tinymce.init({
			selector: '#kt_docs_tinymce_hidden',
			menubar: !1,
			height: '480',
			toolbar: [
				'styleselect fontselect fontsizeselect',
				'undo redo | cut copy paste | bold italic | link image | alignleft aligncenter alignright alignjustify',
				'bullist numlist | outdent indent | blockquote subscript superscript | advlist | autolink | lists charmap | print preview |  code'
			],
			plugins:
				'advlist autolink link image lists charmap print preview code'
		});
	}
};
KTUtil.onDOMContentLoaded(function () {
	KTFormsTinyMCEHidden.init();
});
