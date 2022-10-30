'use strict';
var KTDocsDatatableSubtable = (function () {
	var t, e;
	const a = [
			{
				image: '76',
				name: 'Go Pro 8',
				description: 'Latest  version of Go Pro.',
				cost: '500.00',
				qty: '1',
				total: '500.00',
				stock: '12'
			},
			{
				image: '60',
				name: 'Bose Earbuds',
				description: 'Top quality earbuds from Bose.',
				cost: '300.00',
				qty: '1',
				total: '300.00',
				stock: '8'
			},
			{
				image: '211',
				name: 'Dry-fit Sports T-shirt',
				description: 'Comfortable sportswear for everyday use.',
				cost: '89.00',
				qty: '1',
				total: '89.00',
				stock: '18'
			},
			{
				image: '21',
				name: 'Apple Airpod 3',
				description: "Apple's latest and most advanced earbuds.",
				cost: '200.00',
				qty: '2',
				total: '400.00',
				stock: '32'
			},
			{
				image: '83',
				name: 'Nike Pumps',
				description: "Apple's latest and most advanced headphones.",
				cost: '200.00',
				qty: '1',
				total: '200.00',
				stock: '8'
			}
		],
		o = () => {
			const t = document.querySelectorAll(
					'[data-kt-docs-datatable-subtable="expand_row"]'
				),
				e = [4, 1, 5, 1, 4, 2];
			t.forEach((t, o) => {
				t.addEventListener('click', (d) => {
					d.stopImmediatePropagation(), d.preventDefault();
					const l = t.closest('tr'),
						r = ['isOpen', 'border-bottom-0'],
						n = [];
					for (var c = 0; c < e[o]; c++) n.push(a[c]);
					if (l.classList.contains('isOpen')) {
						for (
							;
							l.nextSibling &&
							'subtable_template' ===
								l.nextSibling.getAttribute(
									'data-kt-docs-datatable-subtable'
								);

						)
							l.nextSibling.parentNode.removeChild(l.nextSibling);
						l.classList.remove(...r), t.classList.remove('active');
					} else
						s(n, l),
							l.classList.add(...r),
							t.classList.add('active');
				});
			});
		},
		s = (a, o) => {
			a.forEach((s, d) => {
				const l = e.cloneNode(!0),
					r = l.querySelector(
						'[data-kt-docs-datatable-subtable="template_image"]'
					),
					n = l.querySelector(
						'[data-kt-docs-datatable-subtable="template_name"]'
					),
					c = l.querySelector(
						'[data-kt-docs-datatable-subtable="template_description"]'
					),
					i = l.querySelector(
						'[data-kt-docs-datatable-subtable="template_cost"]'
					),
					b = l.querySelector(
						'[data-kt-docs-datatable-subtable="template_qty"]'
					),
					u = l.querySelector(
						'[data-kt-docs-datatable-subtable="template_total"]'
					),
					m = l.querySelector(
						'[data-kt-docs-datatable-subtable="template_stock"]'
					),
					p = r.getAttribute('src');
				if (
					(r.setAttribute('src', p + s.image + '.gif'),
					(n.innerText = s.name),
					(c.innerText = s.description),
					(i.innerText = s.cost),
					(b.innerText = s.qty),
					(u.innerText = s.total),
					s.stock > 10
						? (m.innerHTML =
								'<div class="badge badge-light-success">In Stock</div>')
						: (m.innerHTML =
								'<div class="badge badge-light-warning">Low Stock</div>'),
					1 === a.length)
				) {
					let t = ['rounded', 'rounded-end-0'];
					l.querySelectorAll('td')[0].classList.add(...t),
						(t = ['rounded', 'rounded-start-0']),
						l.querySelectorAll('td')[4].classList.add(...t),
						l.classList.add('border-bottom-0');
				} else {
					if (d === a.length - 1) {
						let t = ['rounded-start', 'rounded-bottom-0'];
						l.querySelectorAll('td')[0].classList.add(...t),
							(t = ['rounded-end', 'rounded-bottom-0']),
							l.querySelectorAll('td')[4].classList.add(...t);
					}
					if (0 === d) {
						let t = ['rounded-start', 'rounded-top-0'];
						l.querySelectorAll('td')[0].classList.add(...t),
							(t = ['rounded-end', 'rounded-top-0']),
							l.querySelectorAll('td')[4].classList.add(...t),
							l.classList.add('border-bottom-0');
					}
				}
				t.querySelector('tbody').insertBefore(l, o.nextSibling);
			});
		},
		d = () => {
			document
				.querySelectorAll(
					'[data-kt-docs-datatable-subtable="subtable_template"]'
				)
				.forEach((t) => {
					t.parentNode.removeChild(t);
				});
			t.querySelectorAll('tbody tr').forEach((t) => {
				t.classList.remove('isOpen'),
					t.querySelector(
						'[data-kt-docs-datatable-subtable="expand_row"]'
					) &&
						t
							.querySelector(
								'[data-kt-docs-datatable-subtable="expand_row"]'
							)
							.classList.remove('active');
			});
		};
	return {
		init: function () {
			(t = document.querySelector('#kt_docs_datatable_subtable')) &&
				((() => {
					t.querySelectorAll('tbody tr').forEach((t) => {
						const e = t.querySelectorAll('td'),
							a = moment(
								e[1].innerHTML,
								'DD MMM YYYY, LT'
							).format();
						t.closest(
							'[data-kt-docs-datatable-subtable="subtable_template"]'
						) ||
							(e[1].setAttribute('data-order', a),
							(e[1].innerText = moment(a).fromNow()));
					});
					const a = document.querySelector(
						'[data-kt-docs-datatable-subtable="subtable_template"]'
					);
					(e = a.cloneNode(!0)).classList.remove('d-none'),
						a.parentNode.removeChild(a),
						$(t)
							.DataTable({
								info: !1,
								order: [],
								lengthChange: !1,
								pageLength: 6,
								ordering: !1,
								paging: !1,
								columnDefs: [
									{ orderable: !1, targets: 0 },
									{ orderable: !1, targets: 6 }
								]
							})
							.on('draw', function () {
								d(), o();
							});
				})(),
				o());
		}
	};
})();
'undefined' != typeof module && (module.exports = KTDocsDatatableSubtable),
	KTUtil.onDOMContentLoaded(function () {
		KTDocsDatatableSubtable.init();
	});
