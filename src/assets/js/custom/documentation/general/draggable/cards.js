'use strict';
var KTDraggableCards = {
	init: function () {
		!(function () {
			var a = document.querySelectorAll('.draggable-zone');
			if (0 === a.length) return !1;
			new Sortable.default(a, {
				draggable: '.draggable',
				handle: '.draggable .draggable-handle',
				mirror: { appendTo: 'body', constrainDimensions: !0 }
			});
		})();
	}
};
KTUtil.onDOMContentLoaded(function () {
	KTDraggableCards.init();
});
