'use strict';
var KTFormsGoogleRecaptchaDemos = {
	init: function (e) {
		document
			.querySelector('#kt_form_submit_button')
			.addEventListener('click', function (e) {
				e.preventDefault(),
					grecaptcha.ready(function () {
						'' === grecaptcha.getResponse()
							? alert('Please validate the Google reCaptcha.')
							: alert(
									'Successful validation! Now you can submit this form to your server side processing.'
							  );
					});
			});
	}
};
KTUtil.onDOMContentLoaded(function () {
	KTFormsGoogleRecaptchaDemos.init();
});
