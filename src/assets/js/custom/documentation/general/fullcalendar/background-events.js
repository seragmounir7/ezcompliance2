'use strict';
var KTGeneralFullCalendarEventsDemos = {
	init: function () {
		var e, t, a;
		(e = KTUtil.getCssVariableValue('--kt-active-success')),
			(t = KTUtil.getCssVariableValue('--kt-active-danger')),
			(a = document.getElementById(
				'kt_docs_fullcalendar_background_events'
			)),
			new FullCalendar.Calendar(a, {
				headerToolbar: {
					left: 'prev,next today',
					center: 'title',
					right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
				},
				initialDate: '2020-09-12',
				navLinks: !0,
				businessHours: !0,
				editable: !0,
				selectable: !0,
				events: [
					{
						title: 'Business Lunch',
						start: '2020-09-03T13:00:00',
						constraint: 'businessHours'
					},
					{
						title: 'Meeting',
						start: '2020-09-13T11:00:00',
						constraint: 'availableForMeeting',
						color: e
					},
					{
						title: 'Conference',
						start: '2020-09-18',
						end: '2020-09-20'
					},
					{ title: 'Party', start: '2020-09-29T20:00:00' },
					{
						groupId: 'availableForMeeting',
						start: '2020-09-11',
						end: '2020-09-11',
						display: 'background'
					},
					{
						groupId: 'availableForMeeting',
						start: '2020-09-13',
						end: '2020-09-13',
						display: 'background'
					},
					{
						start: '2020-09-24',
						end: '2020-09-28',
						overlap: !1,
						display: 'background',
						color: t
					},
					{
						start: '2020-09-06',
						end: '2020-09-08',
						overlap: !1,
						display: 'background',
						color: t
					}
				]
			}).render();
	}
};
KTUtil.onDOMContentLoaded(function () {
	KTGeneralFullCalendarEventsDemos.init();
});
