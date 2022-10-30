'use strict';
var KTVisTimelineStyle = {
	init: function () {
		!(function () {
			var t = document.getElementById('kt_docs_vistimeline_style');
			const e = (t, e) => {
				const n = document.createElement('div'),
					a = document.createElement('div');
				a.classList.add('fw-bolder', 'mb-2'), (a.innerHTML = t);
				const s = document.createElement('img');
				s.setAttribute('src', e);
				const i = document.createElement('div');
				return (
					i.classList.add('symbol', 'symbol-circle', 'symbol-30'),
					i.appendChild(s),
					n.appendChild(a),
					n.appendChild(i),
					n
				);
			};
			var n = new vis.DataSet([
				{
					start: new Date(2010, 7, 23),
					content: e(
						'Conversation',
						hostUrl + '/media/avatars/300-6.jpg'
					)
				},
				{
					start: new Date(2010, 7, 23, 23, 0, 0),
					content: e(
						'Mail from boss',
						hostUrl + '/media/avatars/300-1.jpg'
					)
				},
				{ start: new Date(2010, 7, 24, 16, 0, 0), content: 'Report' },
				{
					start: new Date(2010, 7, 26),
					end: new Date(2010, 8, 2),
					content: 'Traject A'
				},
				{
					start: new Date(2010, 7, 28),
					content: e('Memo', hostUrl + '/media/avatars/300-2.jpg')
				},
				{
					start: new Date(2010, 7, 29),
					content: e(
						'Phone call',
						hostUrl + '/media/avatars/300-5.jpg'
					)
				},
				{
					start: new Date(2010, 7, 31),
					end: new Date(2010, 8, 3),
					content: 'Traject B'
				},
				{
					start: new Date(2010, 8, 4, 12, 0, 0),
					content: e('Report', hostUrl + '/media/avatars/300-20.jpg')
				}
			]);
			new vis.Timeline(t, n, {
				editable: !0,
				margin: { item: 20, axis: 40 }
			});
		})();
	}
};
KTUtil.onDOMContentLoaded(function () {
	KTVisTimelineStyle.init();
});
