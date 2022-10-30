'use strict';
var KTFormsBootstrapSelect = {
	init: function () {
		document.querySelectorAll('.bootstrap-select').forEach((t) => {
			$(t).selectpicker();
		});
	}
};
KTUtil.onDOMContentLoaded(function () {
	KTFormsBootstrapSelect.init();
});
