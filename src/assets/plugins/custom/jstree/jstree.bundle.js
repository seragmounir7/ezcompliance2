!(function (e) {
	'use strict';
	'function' == typeof define && define.amd
		? define(['jquery'], e)
		: 'undefined' != typeof module && module.exports
		? (module.exports = e(require('jquery')))
		: e(jQuery);
})(function (e, t) {
	'use strict';
	/*!
	 * jsTree 3.3.12
	 * http://jstree.com/
	 *
	 * Copyright (c) 2014 Ivan Bozhanov (http://vakata.com)
	 *
	 * Licensed same as jquery - under the terms of the MIT License
	 *   http://www.opensource.org/licenses/mit-license.php
	 */
	/*!
	 * if using jslint please allow for the jQuery global and use following options:
	 * jslint: loopfunc: true, browser: true, ass: true, bitwise: true, continue: true, nomen: true, plusplus: true, regexp: true, unparam: true, todo: true, white: true
	 */ if (!e.jstree) {
		var i = 0,
			r = !1,
			s = !1,
			a = !1,
			n = [],
			o = e('script:last').attr('src'),
			d = window.document,
			c = window.setImmediate,
			l = window.Promise;
		!c &&
			l &&
			(c = function (e, t) {
				l.resolve(t).then(e);
			}),
			(e.jstree = {
				version: '3.3.12',
				defaults: { plugins: [] },
				plugins: {},
				path:
					o && -1 !== o.indexOf('/')
						? o.replace(/\/[^\/]+$/, '')
						: '',
				idregex: /[\\:&!^|()\[\]<>@*'+~#";.,=\- \/${}%?`]/g,
				root: '#'
			}),
			(e.jstree.create = function (t, r) {
				var s = new e.jstree.core(++i),
					a = r;
				return (
					(r = e.extend(!0, {}, e.jstree.defaults, r)),
					a && a.plugins && (r.plugins = a.plugins),
					e.each(r.plugins, function (e, t) {
						'core' !== e && (s = s.plugin(t, r[t]));
					}),
					e(t).data('jstree', s),
					s.init(t, r),
					s
				);
			}),
			(e.jstree.destroy = function () {
				e('.jstree:jstree').jstree('destroy'), e(d).off('.jstree');
			}),
			(e.jstree.core = function (e) {
				(this._id = e),
					(this._cnt = 0),
					(this._wrk = null),
					(this._data = {
						core: {
							themes: {
								name: !1,
								dots: !1,
								icons: !1,
								ellipsis: !1
							},
							selected: [],
							last_error: {},
							working: !1,
							worker_queue: [],
							focused: null
						}
					});
			}),
			(e.jstree.reference = function (t) {
				var i = null,
					r = null;
				if (
					(!t || !t.id || (t.tagName && t.nodeType) || (t = t.id),
					!r || !r.length)
				)
					try {
						r = e(t);
					} catch (e) {}
				if (!r || !r.length)
					try {
						r = e('#' + t.replace(e.jstree.idregex, '\\$&'));
					} catch (e) {}
				return (
					r &&
					r.length &&
					(r = r.closest('.jstree')).length &&
					(r = r.data('jstree'))
						? (i = r)
						: e('.jstree').each(function () {
								var r = e(this).data('jstree');
								if (r && r._model.data[t]) return (i = r), !1;
						  }),
					i
				);
			}),
			(e.fn.jstree = function (i) {
				var r = 'string' == typeof i,
					s = Array.prototype.slice.call(arguments, 1),
					a = null;
				return (
					!(!0 === i && !this.length) &&
					(this.each(function () {
						var n = e.jstree.reference(this),
							o = r && n ? n[i] : null;
						if (
							((a = r && o ? o.apply(n, s) : null),
							n ||
								r ||
								(i !== t && !e.isPlainObject(i)) ||
								e.jstree.create(this, i),
							((n && !r) || !0 === i) && (a = n || !1),
							null !== a && a !== t)
						)
							return !1;
					}),
					null !== a && a !== t ? a : this)
				);
			}),
			(e.expr.pseudos.jstree = e.expr.createPseudo(function (i) {
				return function (i) {
					return e(i).hasClass('jstree') && e(i).data('jstree') !== t;
				};
			})),
			(e.jstree.defaults.core = {
				data: !1,
				strings: !1,
				check_callback: !1,
				error: e.noop,
				animation: 200,
				multiple: !0,
				themes: {
					name: !1,
					url: !1,
					dir: !1,
					dots: !0,
					icons: !0,
					ellipsis: !1,
					stripes: !1,
					variant: !1,
					responsive: !1
				},
				expand_selected_onload: !0,
				worker: !0,
				force_text: !1,
				dblclick_toggle: !0,
				loaded_state: !1,
				restore_focus: !0,
				compute_elements_positions: !1,
				keyboard: {
					'ctrl-space': function (t) {
						(t.type = 'click'), e(t.currentTarget).trigger(t);
					},
					enter: function (t) {
						(t.type = 'click'), e(t.currentTarget).trigger(t);
					},
					left: function (t) {
						if ((t.preventDefault(), this.is_open(t.currentTarget)))
							this.close_node(t.currentTarget);
						else {
							var i = this.get_parent(t.currentTarget);
							i &&
								i.id !== e.jstree.root &&
								this.get_node(i, !0)
									.children('.jstree-anchor')
									.trigger('focus');
						}
					},
					up: function (e) {
						e.preventDefault();
						var t = this.get_prev_dom(e.currentTarget);
						t &&
							t.length &&
							t.children('.jstree-anchor').trigger('focus');
					},
					right: function (t) {
						if (
							(t.preventDefault(),
							this.is_closed(t.currentTarget))
						)
							this.open_node(t.currentTarget, function (e) {
								this.get_node(e, !0)
									.children('.jstree-anchor')
									.trigger('focus');
							});
						else if (this.is_open(t.currentTarget)) {
							var i = this.get_node(t.currentTarget, !0).children(
								'.jstree-children'
							)[0];
							i &&
								e(this._firstChild(i))
									.children('.jstree-anchor')
									.trigger('focus');
						}
					},
					down: function (e) {
						e.preventDefault();
						var t = this.get_next_dom(e.currentTarget);
						t &&
							t.length &&
							t.children('.jstree-anchor').trigger('focus');
					},
					'*': function (e) {
						this.open_all();
					},
					home: function (t) {
						t.preventDefault();
						var i = this._firstChild(this.get_container_ul()[0]);
						i &&
							e(i)
								.children('.jstree-anchor')
								.filter(':visible')
								.trigger('focus');
					},
					end: function (e) {
						e.preventDefault(),
							this.element
								.find('.jstree-anchor')
								.filter(':visible')
								.last()
								.trigger('focus');
					},
					f2: function (e) {
						e.preventDefault(), this.edit(e.currentTarget);
					}
				}
			}),
			(e.jstree.core.prototype = {
				plugin: function (t, i) {
					var r = e.jstree.plugins[t];
					return r
						? ((this._data[t] = {}),
						  (r.prototype = this),
						  new r(i, this))
						: this;
				},
				init: function (t, i) {
					(this._model = {
						data: {},
						changed: [],
						force_full_redraw: !1,
						redraw_timeout: !1,
						default_state: {
							loaded: !0,
							opened: !1,
							selected: !1,
							disabled: !1
						}
					}),
						(this._model.data[e.jstree.root] = {
							id: e.jstree.root,
							parent: null,
							parents: [],
							children: [],
							children_d: [],
							state: { loaded: !1 }
						}),
						(this.element = e(t).addClass(
							'jstree jstree-' + this._id
						)),
						(this.settings = i),
						(this._data.core.ready = !1),
						(this._data.core.loaded = !1),
						(this._data.core.rtl =
							'rtl' === this.element.css('direction')),
						this.element[
							this._data.core.rtl ? 'addClass' : 'removeClass'
						]('jstree-rtl'),
						this.element.attr('role', 'tree'),
						this.settings.core.multiple &&
							this.element.attr('aria-multiselectable', !0),
						this.element.attr('tabindex') ||
							this.element.attr('tabindex', '0'),
						this.bind(),
						this.trigger('init'),
						(this._data.core.original_container_html = this.element
							.find(' > ul > li')
							.clone(!0)),
						this._data.core.original_container_html
							.find('li')
							.addBack()
							.contents()
							.filter(function () {
								return (
									3 === this.nodeType &&
									(!this.nodeValue ||
										/^\s+$/.test(this.nodeValue))
								);
							})
							.remove(),
						this.element.html(
							"<ul class='jstree-container-ul jstree-children' role='group'><li id='j" +
								this._id +
								"_loading' class='jstree-initial-node jstree-loading jstree-leaf jstree-last' role='none'><i class='jstree-icon jstree-ocl'></i><a class='jstree-anchor' role='treeitem' href='#'><i class='jstree-icon jstree-themeicon-hidden'></i>" +
								this.get_string('Loading ...') +
								'</a></li></ul>'
						),
						this.element.attr(
							'aria-activedescendant',
							'j' + this._id + '_loading'
						),
						(this._data.core.li_height =
							this.get_container_ul()
								.children('li')
								.first()
								.outerHeight() || 24),
						(this._data.core.node = this._create_prototype_node()),
						this.trigger('loading'),
						this.load_node(e.jstree.root);
				},
				destroy: function (e) {
					if ((this.trigger('destroy'), this._wrk))
						try {
							window.URL.revokeObjectURL(this._wrk),
								(this._wrk = null);
						} catch (e) {}
					e || this.element.empty(), this.teardown();
				},
				_create_prototype_node: function () {
					var e,
						t,
						i = d.createElement('LI');
					return (
						i.setAttribute('role', 'none'),
						((e = d.createElement('I')).className =
							'jstree-icon jstree-ocl'),
						e.setAttribute('role', 'presentation'),
						i.appendChild(e),
						((e = d.createElement('A')).className =
							'jstree-anchor'),
						e.setAttribute('href', '#'),
						e.setAttribute('tabindex', '-1'),
						e.setAttribute('role', 'treeitem'),
						((t = d.createElement('I')).className =
							'jstree-icon jstree-themeicon'),
						t.setAttribute('role', 'presentation'),
						e.appendChild(t),
						i.appendChild(e),
						(e = t = null),
						i
					);
				},
				_kbevent_to_func: function (e) {
					var t = [];
					if (
						(e.ctrlKey && t.push('ctrl'),
						e.altKey && t.push('alt'),
						e.shiftKey && t.push('shift'),
						t.push(
							{
								8: 'Backspace',
								9: 'Tab',
								13: 'Enter',
								19: 'Pause',
								27: 'Esc',
								32: 'Space',
								33: 'PageUp',
								34: 'PageDown',
								35: 'End',
								36: 'Home',
								37: 'Left',
								38: 'Up',
								39: 'Right',
								40: 'Down',
								44: 'Print',
								45: 'Insert',
								46: 'Delete',
								96: 'Numpad0',
								97: 'Numpad1',
								98: 'Numpad2',
								99: 'Numpad3',
								100: 'Numpad4',
								101: 'Numpad5',
								102: 'Numpad6',
								103: 'Numpad7',
								104: 'Numpad8',
								105: 'Numpad9',
								'-13': 'NumpadEnter',
								112: 'F1',
								113: 'F2',
								114: 'F3',
								115: 'F4',
								116: 'F5',
								117: 'F6',
								118: 'F7',
								119: 'F8',
								120: 'F9',
								121: 'F10',
								122: 'F11',
								123: 'F12',
								144: 'Numlock',
								145: 'Scrolllock',
								16: 'Shift',
								17: 'Ctrl',
								18: 'Alt',
								48: '0',
								49: '1',
								50: '2',
								51: '3',
								52: '4',
								53: '5',
								54: '6',
								55: '7',
								56: '8',
								57: '9',
								59: ';',
								61: '=',
								65: 'a',
								66: 'b',
								67: 'c',
								68: 'd',
								69: 'e',
								70: 'f',
								71: 'g',
								72: 'h',
								73: 'i',
								74: 'j',
								75: 'k',
								76: 'l',
								77: 'm',
								78: 'n',
								79: 'o',
								80: 'p',
								81: 'q',
								82: 'r',
								83: 's',
								84: 't',
								85: 'u',
								86: 'v',
								87: 'w',
								88: 'x',
								89: 'y',
								90: 'z',
								107: '+',
								109: '-',
								110: '.',
								186: ';',
								187: '=',
								188: ',',
								189: '-',
								190: '.',
								191: '/',
								192: '`',
								219: '[',
								220: '\\',
								221: ']',
								222: "'",
								111: '/',
								106: '*',
								173: '-'
							}[e.which] || e.which
						),
						'shift-shift' ===
							(t = t.sort().join('-').toLowerCase()) ||
							'ctrl-ctrl' === t ||
							'alt-alt' === t)
					)
						return null;
					var i,
						r,
						s = this.settings.core.keyboard;
					for (i in s)
						if (
							s.hasOwnProperty(i) &&
							('-' !== (r = i) &&
								'+' !== r &&
								(r = (r = r
									.replace('--', '-MINUS')
									.replace('+-', '-MINUS')
									.replace('++', '-PLUS')
									.replace('-+', '-PLUS'))
									.split(/-|\+/)
									.sort()
									.join('-')
									.replace('MINUS', '-')
									.replace('PLUS', '+')
									.toLowerCase()),
							r === t)
						)
							return s[i];
					return null;
				},
				teardown: function () {
					this.unbind(),
						this.element
							.removeClass('jstree')
							.removeData('jstree')
							.find("[class^='jstree']")
							.addBack()
							.attr('class', function () {
								return this.className.replace(
									/jstree[^ ]*|$/gi,
									''
								);
							}),
						(this.element = null);
				},
				bind: function () {
					var t = '',
						i = null,
						r = 0;
					this.element
						.on('dblclick.jstree', function (e) {
							if (
								e.target.tagName &&
								'input' === e.target.tagName.toLowerCase()
							)
								return !0;
							if (d.selection && d.selection.empty)
								d.selection.empty();
							else if (window.getSelection) {
								var t = window.getSelection();
								try {
									t.removeAllRanges(), t.collapse();
								} catch (e) {}
							}
						})
						.on(
							'mousedown.jstree',
							function (e) {
								e.target === this.element[0] &&
									(e.preventDefault(), (r = +new Date()));
							}.bind(this)
						)
						.on('mousedown.jstree', '.jstree-ocl', function (e) {
							e.preventDefault();
						})
						.on(
							'click.jstree',
							'.jstree-ocl',
							function (e) {
								this.toggle_node(e.target);
							}.bind(this)
						)
						.on(
							'dblclick.jstree',
							'.jstree-anchor',
							function (e) {
								if (
									e.target.tagName &&
									'input' === e.target.tagName.toLowerCase()
								)
									return !0;
								this.settings.core.dblclick_toggle &&
									this.toggle_node(e.target);
							}.bind(this)
						)
						.on(
							'click.jstree',
							'.jstree-anchor',
							function (t) {
								t.preventDefault(),
									t.currentTarget !== d.activeElement &&
										e(t.currentTarget).trigger('focus'),
									this.activate_node(t.currentTarget, t);
							}.bind(this)
						)
						.on(
							'keydown.jstree',
							'.jstree-anchor',
							function (e) {
								if (
									e.target.tagName &&
									'input' === e.target.tagName.toLowerCase()
								)
									return !0;
								this._data.core.rtl &&
									(37 === e.which
										? (e.which = 39)
										: 39 === e.which && (e.which = 37));
								var t = this._kbevent_to_func(e);
								if (t) {
									var i = t.call(this, e);
									if (!1 === i || !0 === i) return i;
								}
							}.bind(this)
						)
						.on(
							'load_node.jstree',
							function (t, i) {
								i.status &&
									(i.node.id !== e.jstree.root ||
										this._data.core.loaded ||
										((this._data.core.loaded = !0),
										this._firstChild(
											this.get_container_ul()[0]
										) &&
											this.element.attr(
												'aria-activedescendant',
												this._firstChild(
													this.get_container_ul()[0]
												).id
											),
										this.trigger('loaded')),
									this._data.core.ready ||
										setTimeout(
											function () {
												if (
													this.element &&
													!this.get_container_ul().find(
														'.jstree-loading'
													).length
												) {
													if (
														((this._data.core.ready = !0),
														this._data.core.selected
															.length)
													) {
														if (
															this.settings.core
																.expand_selected_onload
														) {
															var t,
																i,
																r = [];
															for (
																t = 0,
																	i = this
																		._data
																		.core
																		.selected
																		.length;
																t < i;
																t++
															)
																r = r.concat(
																	this._model
																		.data[
																		this
																			._data
																			.core
																			.selected[
																			t
																		]
																	].parents
																);
															for (
																t = 0,
																	i = (r = e.vakata.array_unique(
																		r
																	)).length;
																t < i;
																t++
															)
																this.open_node(
																	r[t],
																	!1,
																	0
																);
														}
														this.trigger(
															'changed',
															{
																action: 'ready',
																selected: this
																	._data.core
																	.selected
															}
														);
													}
													this.trigger('ready');
												}
											}.bind(this),
											0
										));
							}.bind(this)
						)
						.on(
							'keypress.jstree',
							function (r) {
								if (
									r.target.tagName &&
									'input' === r.target.tagName.toLowerCase()
								)
									return !0;
								i && clearTimeout(i),
									(i = setTimeout(function () {
										t = '';
									}, 500));
								var s = String.fromCharCode(
										r.which
									).toLowerCase(),
									a = this.element
										.find('.jstree-anchor')
										.filter(':visible'),
									n = a.index(d.activeElement) || 0,
									o = !1;
								if ((t += s).length > 1) {
									if (
										(a.slice(n).each(
											function (i, r) {
												if (
													0 ===
													e(r)
														.text()
														.toLowerCase()
														.indexOf(t)
												)
													return (
														e(r).trigger('focus'),
														(o = !0),
														!1
													);
											}.bind(this)
										),
										o)
									)
										return;
									if (
										(a.slice(0, n).each(
											function (i, r) {
												if (
													0 ===
													e(r)
														.text()
														.toLowerCase()
														.indexOf(t)
												)
													return (
														e(r).trigger('focus'),
														(o = !0),
														!1
													);
											}.bind(this)
										),
										o)
									)
										return;
								}
								if (
									new RegExp(
										'^' +
											s.replace(
												/[-\/\\^$*+?.()|[\]{}]/g,
												'\\$&'
											) +
											'+$'
									).test(t)
								) {
									if (
										(a.slice(n + 1).each(
											function (t, i) {
												if (
													e(i)
														.text()
														.toLowerCase()
														.charAt(0) === s
												)
													return (
														e(i).trigger('focus'),
														(o = !0),
														!1
													);
											}.bind(this)
										),
										o)
									)
										return;
									if (
										(a.slice(0, n + 1).each(
											function (t, i) {
												if (
													e(i)
														.text()
														.toLowerCase()
														.charAt(0) === s
												)
													return (
														e(i).trigger('focus'),
														(o = !0),
														!1
													);
											}.bind(this)
										),
										o)
									)
										return;
								}
							}.bind(this)
						)
						.on(
							'init.jstree',
							function () {
								var e = this.settings.core.themes;
								(this._data.core.themes.dots = e.dots),
									(this._data.core.themes.stripes =
										e.stripes),
									(this._data.core.themes.icons = e.icons),
									(this._data.core.themes.ellipsis =
										e.ellipsis),
									this.set_theme(e.name || 'default', e.url),
									this.set_theme_variant(e.variant);
							}.bind(this)
						)
						.on(
							'loading.jstree',
							function () {
								this[
									this._data.core.themes.dots
										? 'show_dots'
										: 'hide_dots'
								](),
									this[
										this._data.core.themes.icons
											? 'show_icons'
											: 'hide_icons'
									](),
									this[
										this._data.core.themes.stripes
											? 'show_stripes'
											: 'hide_stripes'
									](),
									this[
										this._data.core.themes.ellipsis
											? 'show_ellipsis'
											: 'hide_ellipsis'
									]();
							}.bind(this)
						)
						.on(
							'blur.jstree',
							'.jstree-anchor',
							function (t) {
								(this._data.core.focused = null),
									e(t.currentTarget)
										.filter('.jstree-hovered')
										.trigger('mouseleave'),
									this.element.attr('tabindex', '0');
							}.bind(this)
						)
						.on(
							'focus.jstree',
							'.jstree-anchor',
							function (t) {
								var i = this.get_node(t.currentTarget);
								i && i.id && (this._data.core.focused = i.id),
									this.element
										.find('.jstree-hovered')
										.not(t.currentTarget)
										.trigger('mouseleave'),
									e(t.currentTarget).trigger('mouseenter'),
									this.element.attr('tabindex', '-1');
							}.bind(this)
						)
						.on(
							'focus.jstree',
							function () {
								if (
									+new Date() - r > 500 &&
									!this._data.core.focused &&
									this.settings.core.restore_focus
								) {
									r = 0;
									var e = this.get_node(
										this.element.attr(
											'aria-activedescendant'
										),
										!0
									);
									e &&
										e
											.find('> .jstree-anchor')
											.trigger('focus');
								}
							}.bind(this)
						)
						.on(
							'mouseenter.jstree',
							'.jstree-anchor',
							function (e) {
								this.hover_node(e.currentTarget);
							}.bind(this)
						)
						.on(
							'mouseleave.jstree',
							'.jstree-anchor',
							function (e) {
								this.dehover_node(e.currentTarget);
							}.bind(this)
						);
				},
				unbind: function () {
					this.element.off('.jstree'),
						e(d).off('.jstree-' + this._id);
				},
				trigger: function (e, t) {
					t || (t = {}),
						(t.instance = this),
						this.element.triggerHandler(
							e.replace('.jstree', '') + '.jstree',
							t
						);
				},
				get_container: function () {
					return this.element;
				},
				get_container_ul: function () {
					return this.element.children('.jstree-children').first();
				},
				get_string: function (t) {
					var i = this.settings.core.strings;
					return e.vakata.is_function(i)
						? i.call(this, t)
						: i && i[t]
						? i[t]
						: t;
				},
				_firstChild: function (e) {
					for (
						e = e ? e.firstChild : null;
						null !== e && 1 !== e.nodeType;

					)
						e = e.nextSibling;
					return e;
				},
				_nextSibling: function (e) {
					for (
						e = e ? e.nextSibling : null;
						null !== e && 1 !== e.nodeType;

					)
						e = e.nextSibling;
					return e;
				},
				_previousSibling: function (e) {
					for (
						e = e ? e.previousSibling : null;
						null !== e && 1 !== e.nodeType;

					)
						e = e.previousSibling;
					return e;
				},
				get_node: function (t, i) {
					var r;
					t && t.id && (t = t.id),
						t instanceof e && t.length && t[0].id && (t = t[0].id);
					try {
						if (this._model.data[t]) t = this._model.data[t];
						else if (
							'string' == typeof t &&
							this._model.data[t.replace(/^#/, '')]
						)
							t = this._model.data[t.replace(/^#/, '')];
						else if (
							'string' == typeof t &&
							(r = e(
								'#' + t.replace(e.jstree.idregex, '\\$&'),
								this.element
							)).length &&
							this._model.data[
								r.closest('.jstree-node').attr('id')
							]
						)
							t = this._model.data[
								r.closest('.jstree-node').attr('id')
							];
						else if (
							(r = this.element.find(t)).length &&
							this._model.data[
								r.closest('.jstree-node').attr('id')
							]
						)
							t = this._model.data[
								r.closest('.jstree-node').attr('id')
							];
						else {
							if (
								!(r = this.element.find(t)).length ||
								!r.hasClass('jstree')
							)
								return !1;
							t = this._model.data[e.jstree.root];
						}
						return (
							i &&
								(t =
									t.id === e.jstree.root
										? this.element
										: e(
												'#' +
													t.id.replace(
														e.jstree.idregex,
														'\\$&'
													),
												this.element
										  )),
							t
						);
					} catch (e) {
						return !1;
					}
				},
				get_path: function (t, i, r) {
					if (
						!(t = t.parents ? t : this.get_node(t)) ||
						t.id === e.jstree.root ||
						!t.parents
					)
						return !1;
					var s,
						a,
						n = [];
					for (
						n.push(r ? t.id : t.text), s = 0, a = t.parents.length;
						s < a;
						s++
					)
						n.push(r ? t.parents[s] : this.get_text(t.parents[s]));
					return (n = n.reverse().slice(1)), i ? n.join(i) : n;
				},
				get_next_dom: function (t, i) {
					var r;
					if ((t = this.get_node(t, !0))[0] === this.element[0]) {
						for (
							r = this._firstChild(this.get_container_ul()[0]);
							r && 0 === r.offsetHeight;

						)
							r = this._nextSibling(r);
						return !!r && e(r);
					}
					if (!t || !t.length) return !1;
					if (i) {
						r = t[0];
						do {
							r = this._nextSibling(r);
						} while (r && 0 === r.offsetHeight);
						return !!r && e(r);
					}
					if (t.hasClass('jstree-open')) {
						for (
							r = this._firstChild(
								t.children('.jstree-children')[0]
							);
							r && 0 === r.offsetHeight;

						)
							r = this._nextSibling(r);
						if (null !== r) return e(r);
					}
					r = t[0];
					do {
						r = this._nextSibling(r);
					} while (r && 0 === r.offsetHeight);
					return null !== r
						? e(r)
						: t
								.parentsUntil('.jstree', '.jstree-node')
								.nextAll('.jstree-node:visible')
								.first();
				},
				get_prev_dom: function (t, i) {
					var r;
					if ((t = this.get_node(t, !0))[0] === this.element[0]) {
						for (
							r = this.get_container_ul()[0].lastChild;
							r && 0 === r.offsetHeight;

						)
							r = this._previousSibling(r);
						return !!r && e(r);
					}
					if (!t || !t.length) return !1;
					if (i) {
						r = t[0];
						do {
							r = this._previousSibling(r);
						} while (r && 0 === r.offsetHeight);
						return !!r && e(r);
					}
					r = t[0];
					do {
						r = this._previousSibling(r);
					} while (r && 0 === r.offsetHeight);
					if (null !== r) {
						for (t = e(r); t.hasClass('jstree-open'); )
							t = t
								.children('.jstree-children')
								.first()
								.children('.jstree-node:visible:last');
						return t;
					}
					return (
						!(
							!(r = t[0].parentNode.parentNode) ||
							!r.className ||
							-1 === r.className.indexOf('jstree-node')
						) && e(r)
					);
				},
				get_parent: function (t) {
					return (
						!(!(t = this.get_node(t)) || t.id === e.jstree.root) &&
						t.parent
					);
				},
				get_children_dom: function (e) {
					return (e = this.get_node(e, !0))[0] === this.element[0]
						? this.get_container_ul().children('.jstree-node')
						: !(!e || !e.length) &&
								e
									.children('.jstree-children')
									.children('.jstree-node');
				},
				is_parent: function (e) {
					return (
						(e = this.get_node(e)) &&
						(!1 === e.state.loaded || e.children.length > 0)
					);
				},
				is_loaded: function (e) {
					return (e = this.get_node(e)) && e.state.loaded;
				},
				is_loading: function (e) {
					return (e = this.get_node(e)) && e.state && e.state.loading;
				},
				is_open: function (e) {
					return (e = this.get_node(e)) && e.state.opened;
				},
				is_closed: function (e) {
					return (
						(e = this.get_node(e)) &&
						this.is_parent(e) &&
						!e.state.opened
					);
				},
				is_leaf: function (e) {
					return !this.is_parent(e);
				},
				load_node: function (t, i) {
					var r, s, a, n, o;
					if (e.vakata.is_array(t))
						return this._load_nodes(t.slice(), i), !0;
					if (!(t = this.get_node(t)))
						return i && i.call(this, t, !1), !1;
					if (t.state.loaded) {
						for (
							t.state.loaded = !1, a = 0, n = t.parents.length;
							a < n;
							a++
						)
							this._model.data[
								t.parents[a]
							].children_d = e.vakata.array_filter(
								this._model.data[t.parents[a]].children_d,
								function (i) {
									return -1 === e.inArray(i, t.children_d);
								}
							);
						for (r = 0, s = t.children_d.length; r < s; r++)
							this._model.data[t.children_d[r]].state.selected &&
								(o = !0),
								delete this._model.data[t.children_d[r]];
						o &&
							(this._data.core.selected = e.vakata.array_filter(
								this._data.core.selected,
								function (i) {
									return -1 === e.inArray(i, t.children_d);
								}
							)),
							(t.children = []),
							(t.children_d = []),
							o &&
								this.trigger('changed', {
									action: 'load_node',
									node: t,
									selected: this._data.core.selected
								});
					}
					return (
						(t.state.failed = !1),
						(t.state.loading = !0),
						this.get_node(t, !0)
							.addClass('jstree-loading')
							.attr('aria-busy', !0),
						this._load_node(
							t,
							function (e) {
								((t = this._model.data[
									t.id
								]).state.loading = !1),
									(t.state.loaded = e),
									(t.state.failed = !t.state.loaded);
								var r,
									s = this.get_node(t, !0),
									a = 0,
									n = this._model.data,
									o = !1;
								for (a = 0, r = t.children.length; a < r; a++)
									if (
										n[t.children[a]] &&
										!n[t.children[a]].state.hidden
									) {
										o = !0;
										break;
									}
								t.state.loaded &&
									s &&
									s.length &&
									(s.removeClass(
										'jstree-closed jstree-open jstree-leaf'
									),
									o
										? '#' !== t.id &&
										  s.addClass(
												t.state.opened
													? 'jstree-open'
													: 'jstree-closed'
										  )
										: s.addClass('jstree-leaf')),
									s
										.removeClass('jstree-loading')
										.attr('aria-busy', !1),
									this.trigger('load_node', {
										node: t,
										status: e
									}),
									i && i.call(this, t, e);
							}.bind(this)
						),
						!0
					);
				},
				_load_nodes: function (e, t, i, r) {
					var s,
						a,
						n = !0,
						o = function () {
							this._load_nodes(e, t, !0);
						},
						d = this._model.data,
						c = [];
					for (s = 0, a = e.length; s < a; s++)
						d[e[s]] &&
							((!d[e[s]].state.loaded && !d[e[s]].state.failed) ||
								(!i && r)) &&
							(this.is_loading(e[s]) || this.load_node(e[s], o),
							(n = !1));
					if (n) {
						for (s = 0, a = e.length; s < a; s++)
							d[e[s]] && d[e[s]].state.loaded && c.push(e[s]);
						t && !t.done && (t.call(this, c), (t.done = !0));
					}
				},
				load_all: function (t, i) {
					if ((t || (t = e.jstree.root), !(t = this.get_node(t))))
						return !1;
					var r,
						s,
						a = [],
						n = this._model.data,
						o = n[t.id].children_d;
					for (
						t.state && !t.state.loaded && a.push(t.id),
							r = 0,
							s = o.length;
						r < s;
						r++
					)
						n[o[r]] &&
							n[o[r]].state &&
							!n[o[r]].state.loaded &&
							a.push(o[r]);
					a.length
						? this._load_nodes(a, function () {
								this.load_all(t, i);
						  })
						: (i && i.call(this, t),
						  this.trigger('load_all', { node: t }));
				},
				_load_node: function (t, i) {
					var r,
						s = this.settings.core.data,
						a = function () {
							return 3 !== this.nodeType && 8 !== this.nodeType;
						};
					return s
						? e.vakata.is_function(s)
							? s.call(
									this,
									t,
									function (r) {
										!1 === r
											? i.call(this, !1)
											: this[
													'string' == typeof r
														? '_append_html_data'
														: '_append_json_data'
											  ](
													t,
													'string' == typeof r
														? e(
																e.parseHTML(r)
														  ).filter(a)
														: r,
													function (e) {
														i.call(this, e);
													}
											  );
									}.bind(this)
							  )
							: 'object' == typeof s
							? s.url
								? ((s = e.extend(!0, {}, s)),
								  e.vakata.is_function(s.url) &&
										(s.url = s.url.call(this, t)),
								  e.vakata.is_function(s.data) &&
										(s.data = s.data.call(this, t)),
								  e
										.ajax(s)
										.done(
											function (r, s, n) {
												var o = n.getResponseHeader(
													'Content-Type'
												);
												return (o &&
													-1 !== o.indexOf('json')) ||
													'object' == typeof r
													? this._append_json_data(
															t,
															r,
															function (e) {
																i.call(this, e);
															}
													  )
													: (o &&
															-1 !==
																o.indexOf(
																	'html'
																)) ||
													  'string' == typeof r
													? this._append_html_data(
															t,
															e(
																e.parseHTML(r)
															).filter(a),
															function (e) {
																i.call(this, e);
															}
													  )
													: ((this._data.core.last_error = {
															error: 'ajax',
															plugin: 'core',
															id: 'core_04',
															reason:
																'Could not load node',
															data: JSON.stringify(
																{
																	id: t.id,
																	xhr: n
																}
															)
													  }),
													  this.settings.core.error.call(
															this,
															this._data.core
																.last_error
													  ),
													  i.call(this, !1));
											}.bind(this)
										)
										.fail(
											function (e) {
												(this._data.core.last_error = {
													error: 'ajax',
													plugin: 'core',
													id: 'core_04',
													reason:
														'Could not load node',
													data: JSON.stringify({
														id: t.id,
														xhr: e
													})
												}),
													i.call(this, !1),
													this.settings.core.error.call(
														this,
														this._data.core
															.last_error
													);
											}.bind(this)
										))
								: ((r = e.vakata.is_array(s)
										? e.extend(!0, [], s)
										: e.isPlainObject(s)
										? e.extend(!0, {}, s)
										: s),
								  t.id === e.jstree.root
										? this._append_json_data(
												t,
												r,
												function (e) {
													i.call(this, e);
												}
										  )
										: ((this._data.core.last_error = {
												error: 'nodata',
												plugin: 'core',
												id: 'core_05',
												reason: 'Could not load node',
												data: JSON.stringify({
													id: t.id
												})
										  }),
										  this.settings.core.error.call(
												this,
												this._data.core.last_error
										  ),
										  i.call(this, !1)))
							: 'string' == typeof s
							? t.id === e.jstree.root
								? this._append_html_data(
										t,
										e(e.parseHTML(s)).filter(a),
										function (e) {
											i.call(this, e);
										}
								  )
								: ((this._data.core.last_error = {
										error: 'nodata',
										plugin: 'core',
										id: 'core_06',
										reason: 'Could not load node',
										data: JSON.stringify({ id: t.id })
								  }),
								  this.settings.core.error.call(
										this,
										this._data.core.last_error
								  ),
								  i.call(this, !1))
							: i.call(this, !1)
						: t.id === e.jstree.root
						? this._append_html_data(
								t,
								this._data.core.original_container_html.clone(
									!0
								),
								function (e) {
									i.call(this, e);
								}
						  )
						: i.call(this, !1);
				},
				_node_changed: function (t) {
					(t = this.get_node(t)) &&
						-1 === e.inArray(t.id, this._model.changed) &&
						this._model.changed.push(t.id);
				},
				_append_html_data: function (t, i, r) {
					((t = this.get_node(t)).children = []), (t.children_d = []);
					var s,
						a,
						n,
						o = i.is('ul') ? i.children() : i,
						d = t.id,
						c = [],
						l = [],
						h = this._model.data,
						_ = h[d],
						g = this._data.core.selected.length;
					for (
						o.each(
							function (t, i) {
								(s = this._parse_model_from_html(
									e(i),
									d,
									_.parents.concat()
								)) &&
									(c.push(s),
									l.push(s),
									h[s].children_d.length &&
										(l = l.concat(h[s].children_d)));
							}.bind(this)
						),
							_.children = c,
							_.children_d = l,
							a = 0,
							n = _.parents.length;
						a < n;
						a++
					)
						h[_.parents[a]].children_d = h[
							_.parents[a]
						].children_d.concat(l);
					this.trigger('model', { nodes: l, parent: d }),
						d !== e.jstree.root
							? (this._node_changed(d), this.redraw())
							: (this.get_container_ul()
									.children('.jstree-initial-node')
									.remove(),
							  this.redraw(!0)),
						this._data.core.selected.length !== g &&
							this.trigger('changed', {
								action: 'model',
								selected: this._data.core.selected
							}),
						r.call(this, !0);
				},
				_append_json_data: function (t, i, r, s) {
					if (null !== this.element) {
						((t = this.get_node(t)).children = []),
							(t.children_d = []),
							i.d &&
								'string' == typeof (i = i.d) &&
								(i = JSON.parse(i)),
							e.vakata.is_array(i) || (i = [i]);
						var a = null,
							n = {
								df: this._model.default_state,
								dat: i,
								par: t.id,
								m: this._model.data,
								t_id: this._id,
								t_cnt: this._cnt,
								sel: this._data.core.selected
							},
							o = this,
							d = function (e, t) {
								e.data && (e = e.data);
								var i,
									r,
									s,
									a,
									n = e.dat,
									d = e.par,
									c = [],
									l = [],
									h = [],
									_ = e.df,
									g = e.t_id,
									u = e.t_cnt,
									f = e.m,
									p = f[d],
									m = e.sel,
									v = function (e, i, r) {
										(r = r ? r.concat() : []),
											i && r.unshift(i);
										var s,
											a,
											n,
											o,
											d = e.id.toString(),
											c = {
												id: d,
												text: e.text || '',
												icon: e.icon === t || e.icon,
												parent: i,
												parents: r,
												children: e.children || [],
												children_d: e.children_d || [],
												data: e.data,
												state: {},
												li_attr: { id: !1 },
												a_attr: { href: '#' },
												original: !1
											};
										for (s in _)
											_.hasOwnProperty(s) &&
												(c.state[s] = _[s]);
										if (
											(e &&
												e.data &&
												e.data.jstree &&
												e.data.jstree.icon &&
												(c.icon = e.data.jstree.icon),
											(c.icon !== t &&
												null !== c.icon &&
												'' !== c.icon) ||
												(c.icon = !0),
											e &&
												e.data &&
												((c.data = e.data),
												e.data.jstree))
										)
											for (s in e.data.jstree)
												e.data.jstree.hasOwnProperty(
													s
												) &&
													(c.state[s] =
														e.data.jstree[s]);
										if (e && 'object' == typeof e.state)
											for (s in e.state)
												e.state.hasOwnProperty(s) &&
													(c.state[s] = e.state[s]);
										if (e && 'object' == typeof e.li_attr)
											for (s in e.li_attr)
												e.li_attr.hasOwnProperty(s) &&
													(c.li_attr[s] =
														e.li_attr[s]);
										if (
											(c.li_attr.id || (c.li_attr.id = d),
											e && 'object' == typeof e.a_attr)
										)
											for (s in e.a_attr)
												e.a_attr.hasOwnProperty(s) &&
													(c.a_attr[s] = e.a_attr[s]);
										for (
											e &&
												e.children &&
												!0 === e.children &&
												((c.state.loaded = !1),
												(c.children = []),
												(c.children_d = [])),
												f[c.id] = c,
												s = 0,
												a = c.children.length;
											s < a;
											s++
										)
											(n = v(f[c.children[s]], c.id, r)),
												(o = f[n]),
												c.children_d.push(n),
												o.children_d.length &&
													(c.children_d = c.children_d.concat(
														o.children_d
													));
										return (
											delete e.data,
											delete e.children,
											(f[c.id].original = e),
											c.state.selected && h.push(c.id),
											c.id
										);
									},
									j = function (e, i, r) {
										(r = r ? r.concat() : []),
											i && r.unshift(i);
										var s,
											a,
											n,
											o,
											d,
											c = !1;
										do {
											c = 'j' + g + '_' + ++u;
										} while (f[c]);
										for (s in ((d = {
											id: !1,
											text: 'string' == typeof e ? e : '',
											icon:
												'object' != typeof e ||
												e.icon === t ||
												e.icon,
											parent: i,
											parents: r,
											children: [],
											children_d: [],
											data: null,
											state: {},
											li_attr: { id: !1 },
											a_attr: { href: '#' },
											original: !1
										}),
										_))
											_.hasOwnProperty(s) &&
												(d.state[s] = _[s]);
										if (
											(e &&
												e.id &&
												(d.id = e.id.toString()),
											e && e.text && (d.text = e.text),
											e &&
												e.data &&
												e.data.jstree &&
												e.data.jstree.icon &&
												(d.icon = e.data.jstree.icon),
											(d.icon !== t &&
												null !== d.icon &&
												'' !== d.icon) ||
												(d.icon = !0),
											e &&
												e.data &&
												((d.data = e.data),
												e.data.jstree))
										)
											for (s in e.data.jstree)
												e.data.jstree.hasOwnProperty(
													s
												) &&
													(d.state[s] =
														e.data.jstree[s]);
										if (e && 'object' == typeof e.state)
											for (s in e.state)
												e.state.hasOwnProperty(s) &&
													(d.state[s] = e.state[s]);
										if (e && 'object' == typeof e.li_attr)
											for (s in e.li_attr)
												e.li_attr.hasOwnProperty(s) &&
													(d.li_attr[s] =
														e.li_attr[s]);
										if (
											(d.li_attr.id &&
												!d.id &&
												(d.id = d.li_attr.id.toString()),
											d.id || (d.id = c),
											d.li_attr.id ||
												(d.li_attr.id = d.id),
											e && 'object' == typeof e.a_attr)
										)
											for (s in e.a_attr)
												e.a_attr.hasOwnProperty(s) &&
													(d.a_attr[s] = e.a_attr[s]);
										if (
											e &&
											e.children &&
											e.children.length
										) {
											for (
												s = 0, a = e.children.length;
												s < a;
												s++
											)
												(n = j(e.children[s], d.id, r)),
													(o = f[n]),
													d.children.push(n),
													o.children_d.length &&
														(d.children_d = d.children_d.concat(
															o.children_d
														));
											d.children_d = d.children_d.concat(
												d.children
											);
										}
										return (
											e &&
												e.children &&
												!0 === e.children &&
												((d.state.loaded = !1),
												(d.children = []),
												(d.children_d = [])),
											delete e.data,
											delete e.children,
											(d.original = e),
											(f[d.id] = d),
											d.state.selected && h.push(d.id),
											d.id
										);
									};
								if (
									n.length &&
									n[0].id !== t &&
									n[0].parent !== t
								) {
									for (r = 0, s = n.length; r < s; r++)
										n[r].children || (n[r].children = []),
											n[r].state || (n[r].state = {}),
											(f[n[r].id.toString()] = n[r]);
									for (r = 0, s = n.length; r < s; r++)
										f[n[r].parent.toString()]
											? (f[
													n[r].parent.toString()
											  ].children.push(
													n[r].id.toString()
											  ),
											  p.children_d.push(
													n[r].id.toString()
											  ))
											: void 0 !== o &&
											  ((o._data.core.last_error = {
													error: 'parse',
													plugin: 'core',
													id: 'core_07',
													reason:
														'Node with invalid parent',
													data: JSON.stringify({
														id: n[r].id.toString(),
														parent: n[
															r
														].parent.toString()
													})
											  }),
											  o.settings.core.error.call(
													o,
													o._data.core.last_error
											  ));
									for (
										r = 0, s = p.children.length;
										r < s;
										r++
									)
										(i = v(
											f[p.children[r]],
											d,
											p.parents.concat()
										)),
											l.push(i),
											f[i].children_d.length &&
												(l = l.concat(f[i].children_d));
									for (
										r = 0, s = p.parents.length;
										r < s;
										r++
									)
										f[p.parents[r]].children_d = f[
											p.parents[r]
										].children_d.concat(l);
									a = {
										cnt: u,
										mod: f,
										sel: m,
										par: d,
										dpc: l,
										add: h
									};
								} else {
									for (r = 0, s = n.length; r < s; r++)
										(i = j(n[r], d, p.parents.concat())) &&
											(c.push(i),
											l.push(i),
											f[i].children_d.length &&
												(l = l.concat(
													f[i].children_d
												)));
									for (
										p.children = c,
											p.children_d = l,
											r = 0,
											s = p.parents.length;
										r < s;
										r++
									)
										f[p.parents[r]].children_d = f[
											p.parents[r]
										].children_d.concat(l);
									a = {
										cnt: u,
										mod: f,
										sel: m,
										par: d,
										dpc: l,
										add: h
									};
								}
								if (
									'undefined' != typeof window &&
									void 0 !== window.document
								)
									return a;
								postMessage(a);
							},
							l = function (t, i) {
								if (null !== this.element) {
									this._cnt = t.cnt;
									var s,
										a = this._model.data;
									for (s in a)
										a.hasOwnProperty(s) &&
											a[s].state &&
											a[s].state.loading &&
											t.mod[s] &&
											(t.mod[s].state.loading = !0);
									if (((this._model.data = t.mod), i)) {
										var n,
											d = t.add,
											l = t.sel,
											h = this._data.core.selected.slice();
										if (
											((a = this._model.data),
											l.length !== h.length ||
												e.vakata.array_unique(
													l.concat(h)
												).length !== l.length)
										) {
											for (
												s = 0, n = l.length;
												s < n;
												s++
											)
												-1 === e.inArray(l[s], d) &&
													-1 === e.inArray(l[s], h) &&
													(a[
														l[s]
													].state.selected = !1);
											for (
												s = 0, n = h.length;
												s < n;
												s++
											)
												-1 === e.inArray(h[s], l) &&
													(a[
														h[s]
													].state.selected = !0);
										}
									}
									t.add.length &&
										(this._data.core.selected = this._data.core.selected.concat(
											t.add
										)),
										this.trigger('model', {
											nodes: t.dpc,
											parent: t.par
										}),
										t.par !== e.jstree.root
											? (this._node_changed(t.par),
											  this.redraw())
											: this.redraw(!0),
										t.add.length &&
											this.trigger('changed', {
												action: 'model',
												selected: this._data.core
													.selected
											}),
										!i && c
											? c(function () {
													r.call(o, !0);
											  })
											: r.call(o, !0);
								}
							};
						if (
							this.settings.core.worker &&
							window.Blob &&
							window.URL &&
							window.Worker
						)
							try {
								null === this._wrk &&
									(this._wrk = window.URL.createObjectURL(
										new window.Blob(
											[
												'self.onmessage = ' +
													d.toString()
											],
											{ type: 'text/javascript' }
										)
									)),
									!this._data.core.working || s
										? ((this._data.core.working = !0),
										  ((a = new window.Worker(
												this._wrk
										  )).onmessage = function (e) {
												l.call(this, e.data, !0);
												try {
													a.terminate(), (a = null);
												} catch (e) {}
												this._data.core.worker_queue
													.length
													? this._append_json_data.apply(
															this,
															this._data.core.worker_queue.shift()
													  )
													: (this._data.core.working = !1);
										  }.bind(this)),
										  n.par
												? a.postMessage(n)
												: this._data.core.worker_queue
														.length
												? this._append_json_data.apply(
														this,
														this._data.core.worker_queue.shift()
												  )
												: (this._data.core.working = !1))
										: this._data.core.worker_queue.push([
												t,
												i,
												r,
												!0
										  ]);
							} catch (e) {
								l.call(this, d(n), !1),
									this._data.core.worker_queue.length
										? this._append_json_data.apply(
												this,
												this._data.core.worker_queue.shift()
										  )
										: (this._data.core.working = !1);
							}
						else l.call(this, d(n), !1);
					}
				},
				_parse_model_from_html: function (i, r, s) {
					(s = s ? [].concat(s) : []), r && s.unshift(r);
					var a,
						n,
						o,
						d,
						c,
						l = this._model.data,
						h = {
							id: !1,
							text: !1,
							icon: !0,
							parent: r,
							parents: s,
							children: [],
							children_d: [],
							data: null,
							state: {},
							li_attr: { id: !1 },
							a_attr: { href: '#' },
							original: !1
						};
					for (o in this._model.default_state)
						this._model.default_state.hasOwnProperty(o) &&
							(h.state[o] = this._model.default_state[o]);
					if (
						((d = e.vakata.attributes(i, !0)),
						e.each(d, function (t, i) {
							if (!(i = e.vakata.trim(i)).length) return !0;
							(h.li_attr[t] = i),
								'id' === t && (h.id = i.toString());
						}),
						(d = i.children('a').first()).length &&
							((d = e.vakata.attributes(d, !0)),
							e.each(d, function (t, i) {
								(i = e.vakata.trim(i)).length &&
									(h.a_attr[t] = i);
							})),
						(d = i.children('a').first().length
							? i.children('a').first().clone()
							: i.clone())
							.children('ins, i, ul')
							.remove(),
						(d = d.html()),
						(d = e('<div></div>').html(d)),
						(h.text = this.settings.core.force_text
							? d.text()
							: d.html()),
						(d = i.data()),
						(h.data = d ? e.extend(!0, {}, d) : null),
						(h.state.opened = i.hasClass('jstree-open')),
						(h.state.selected = i
							.children('a')
							.hasClass('jstree-clicked')),
						(h.state.disabled = i
							.children('a')
							.hasClass('jstree-disabled')),
						h.data && h.data.jstree)
					)
						for (o in h.data.jstree)
							h.data.jstree.hasOwnProperty(o) &&
								(h.state[o] = h.data.jstree[o]);
					(d = i.children('a').children('.jstree-themeicon'))
						.length &&
						(h.icon =
							!d.hasClass('jstree-themeicon-hidden') &&
							d.attr('rel')),
						h.state.icon !== t && (h.icon = h.state.icon),
						(h.icon !== t && null !== h.icon && '' !== h.icon) ||
							(h.icon = !0),
						(d = i.children('ul').children('li'));
					do {
						c = 'j' + this._id + '_' + ++this._cnt;
					} while (l[c]);
					return (
						(h.id = h.li_attr.id ? h.li_attr.id.toString() : c),
						d.length
							? (d.each(
									function (t, i) {
										(a = this._parse_model_from_html(
											e(i),
											h.id,
											s
										)),
											(n = this._model.data[a]),
											h.children.push(a),
											n.children_d.length &&
												(h.children_d = h.children_d.concat(
													n.children_d
												));
									}.bind(this)
							  ),
							  (h.children_d = h.children_d.concat(h.children)))
							: i.hasClass('jstree-closed') &&
							  (h.state.loaded = !1),
						h.li_attr.class &&
							(h.li_attr.class = h.li_attr.class
								.replace('jstree-closed', '')
								.replace('jstree-open', '')),
						h.a_attr.class &&
							(h.a_attr.class = h.a_attr.class
								.replace('jstree-clicked', '')
								.replace('jstree-disabled', '')),
						(l[h.id] = h),
						h.state.selected && this._data.core.selected.push(h.id),
						h.id
					);
				},
				_parse_model_from_flat_json: function (e, i, r) {
					(r = r ? r.concat() : []), i && r.unshift(i);
					var s,
						a,
						n,
						o,
						d = e.id.toString(),
						c = this._model.data,
						l = this._model.default_state,
						h = {
							id: d,
							text: e.text || '',
							icon: e.icon === t || e.icon,
							parent: i,
							parents: r,
							children: e.children || [],
							children_d: e.children_d || [],
							data: e.data,
							state: {},
							li_attr: { id: !1 },
							a_attr: { href: '#' },
							original: !1
						};
					for (s in l) l.hasOwnProperty(s) && (h.state[s] = l[s]);
					if (
						(e &&
							e.data &&
							e.data.jstree &&
							e.data.jstree.icon &&
							(h.icon = e.data.jstree.icon),
						(h.icon !== t && null !== h.icon && '' !== h.icon) ||
							(h.icon = !0),
						e && e.data && ((h.data = e.data), e.data.jstree))
					)
						for (s in e.data.jstree)
							e.data.jstree.hasOwnProperty(s) &&
								(h.state[s] = e.data.jstree[s]);
					if (e && 'object' == typeof e.state)
						for (s in e.state)
							e.state.hasOwnProperty(s) &&
								(h.state[s] = e.state[s]);
					if (e && 'object' == typeof e.li_attr)
						for (s in e.li_attr)
							e.li_attr.hasOwnProperty(s) &&
								(h.li_attr[s] = e.li_attr[s]);
					if (
						(h.li_attr.id || (h.li_attr.id = d),
						e && 'object' == typeof e.a_attr)
					)
						for (s in e.a_attr)
							e.a_attr.hasOwnProperty(s) &&
								(h.a_attr[s] = e.a_attr[s]);
					for (
						e &&
							e.children &&
							!0 === e.children &&
							((h.state.loaded = !1),
							(h.children = []),
							(h.children_d = [])),
							c[h.id] = h,
							s = 0,
							a = h.children.length;
						s < a;
						s++
					)
						(o =
							c[
								(n = this._parse_model_from_flat_json(
									c[h.children[s]],
									h.id,
									r
								))
							]),
							h.children_d.push(n),
							o.children_d.length &&
								(h.children_d = h.children_d.concat(
									o.children_d
								));
					return (
						delete e.data,
						delete e.children,
						(c[h.id].original = e),
						h.state.selected && this._data.core.selected.push(h.id),
						h.id
					);
				},
				_parse_model_from_json: function (e, i, r) {
					(r = r ? r.concat() : []), i && r.unshift(i);
					var s,
						a,
						n,
						o,
						d,
						c = !1,
						l = this._model.data,
						h = this._model.default_state;
					do {
						c = 'j' + this._id + '_' + ++this._cnt;
					} while (l[c]);
					for (s in ((d = {
						id: !1,
						text: 'string' == typeof e ? e : '',
						icon: 'object' != typeof e || e.icon === t || e.icon,
						parent: i,
						parents: r,
						children: [],
						children_d: [],
						data: null,
						state: {},
						li_attr: { id: !1 },
						a_attr: { href: '#' },
						original: !1
					}),
					h))
						h.hasOwnProperty(s) && (d.state[s] = h[s]);
					if (
						(e && e.id && (d.id = e.id.toString()),
						e && e.text && (d.text = e.text),
						e &&
							e.data &&
							e.data.jstree &&
							e.data.jstree.icon &&
							(d.icon = e.data.jstree.icon),
						(d.icon !== t && null !== d.icon && '' !== d.icon) ||
							(d.icon = !0),
						e && e.data && ((d.data = e.data), e.data.jstree))
					)
						for (s in e.data.jstree)
							e.data.jstree.hasOwnProperty(s) &&
								(d.state[s] = e.data.jstree[s]);
					if (e && 'object' == typeof e.state)
						for (s in e.state)
							e.state.hasOwnProperty(s) &&
								(d.state[s] = e.state[s]);
					if (e && 'object' == typeof e.li_attr)
						for (s in e.li_attr)
							e.li_attr.hasOwnProperty(s) &&
								(d.li_attr[s] = e.li_attr[s]);
					if (
						(d.li_attr.id &&
							!d.id &&
							(d.id = d.li_attr.id.toString()),
						d.id || (d.id = c),
						d.li_attr.id || (d.li_attr.id = d.id),
						e && 'object' == typeof e.a_attr)
					)
						for (s in e.a_attr)
							e.a_attr.hasOwnProperty(s) &&
								(d.a_attr[s] = e.a_attr[s]);
					if (e && e.children && e.children.length) {
						for (s = 0, a = e.children.length; s < a; s++)
							(o =
								l[
									(n = this._parse_model_from_json(
										e.children[s],
										d.id,
										r
									))
								]),
								d.children.push(n),
								o.children_d.length &&
									(d.children_d = d.children_d.concat(
										o.children_d
									));
						d.children_d = d.children.concat(d.children_d);
					}
					return (
						e &&
							e.children &&
							!0 === e.children &&
							((d.state.loaded = !1),
							(d.children = []),
							(d.children_d = [])),
						delete e.data,
						delete e.children,
						(d.original = e),
						(l[d.id] = d),
						d.state.selected && this._data.core.selected.push(d.id),
						d.id
					);
				},
				_redraw: function () {
					var t,
						i,
						r,
						s = this._model.force_full_redraw
							? this._model.data[e.jstree.root].children.concat(
									[]
							  )
							: this._model.changed.concat([]),
						a = d.createElement('UL'),
						n = this._data.core.focused;
					for (i = 0, r = s.length; i < r; i++)
						(t = this.redraw_node(
							s[i],
							!0,
							this._model.force_full_redraw
						)) &&
							this._model.force_full_redraw &&
							a.appendChild(t);
					this._model.force_full_redraw &&
						((a.className = this.get_container_ul()[0].className),
						a.setAttribute('role', 'group'),
						this.element.empty().append(a)),
						null !== n &&
							this.settings.core.restore_focus &&
							((t = this.get_node(n, !0)) &&
							t.length &&
							t.children('.jstree-anchor')[0] !== d.activeElement
								? t.children('.jstree-anchor').trigger('focus')
								: (this._data.core.focused = null)),
						(this._model.force_full_redraw = !1),
						(this._model.changed = []),
						this.trigger('redraw', { nodes: s });
				},
				redraw: function (e) {
					e && (this._model.force_full_redraw = !0), this._redraw();
				},
				draw_children: function (t) {
					var i = this.get_node(t),
						r = !1,
						s = !1,
						a = !1,
						n = d;
					if (!i) return !1;
					if (i.id === e.jstree.root) return this.redraw(!0);
					if (!(t = this.get_node(t, !0)) || !t.length) return !1;
					if (
						(t.children('.jstree-children').remove(),
						(t = t[0]),
						i.children.length && i.state.loaded)
					) {
						for (
							(a = n.createElement('UL')).setAttribute(
								'role',
								'group'
							),
								a.className = 'jstree-children',
								r = 0,
								s = i.children.length;
							r < s;
							r++
						)
							a.appendChild(
								this.redraw_node(i.children[r], !0, !0)
							);
						t.appendChild(a);
					}
				},
				redraw_node: function (t, i, r, s) {
					var a = this.get_node(t),
						n = !1,
						o = !1,
						c = !1,
						l = !1,
						h = !1,
						_ = !1,
						g = '',
						u = d,
						f = this._model.data,
						p = !1,
						m = null,
						v = 0,
						j = 0,
						k = !1,
						b = !1;
					if (!a) return !1;
					if (a.id === e.jstree.root) return this.redraw(!0);
					if (
						((i = i || 0 === a.children.length),
						(t = d.querySelector
							? this.element[0].querySelector(
									'#' +
										(-1 !== '0123456789'.indexOf(a.id[0])
											? '\\3' +
											  a.id[0] +
											  ' ' +
											  a.id
													.substr(1)
													.replace(
														e.jstree.idregex,
														'\\$&'
													)
											: a.id.replace(
													e.jstree.idregex,
													'\\$&'
											  ))
							  )
							: d.getElementById(a.id)))
					)
						(t = e(t)),
							r ||
								((n = t.parent().parent()[0]) ===
									this.element[0] && (n = null),
								(o = t.index())),
							i ||
								!a.children.length ||
								t.children('.jstree-children').length ||
								(i = !0),
							i || (c = t.children('.jstree-children')[0]),
							(p =
								t.children('.jstree-anchor')[0] ===
								d.activeElement),
							t.remove();
					else if (((i = !0), !r)) {
						if (
							!(
								null ===
									(n =
										a.parent !== e.jstree.root
											? e(
													'#' +
														a.parent.replace(
															e.jstree.idregex,
															'\\$&'
														),
													this.element
											  )[0]
											: null) ||
								(n && f[a.parent].state.opened)
							)
						)
							return !1;
						o = e.inArray(
							a.id,
							null === n
								? f[e.jstree.root].children
								: f[a.parent].children
						);
					}
					for (l in ((t = this._data.core.node.cloneNode(!0)),
					(g = 'jstree-node '),
					a.li_attr))
						if (a.li_attr.hasOwnProperty(l)) {
							if ('id' === l) continue;
							'class' !== l
								? t.setAttribute(l, a.li_attr[l])
								: (g += a.li_attr[l]);
						}
					for (
						a.a_attr.id || (a.a_attr.id = a.id + '_anchor'),
							t.childNodes[1].setAttribute(
								'aria-selected',
								!!a.state.selected
							),
							t.childNodes[1].setAttribute(
								'aria-level',
								a.parents.length
							),
							this.settings.core.compute_elements_positions &&
								(t.childNodes[1].setAttribute(
									'aria-setsize',
									f[a.parent].children.length
								),
								t.childNodes[1].setAttribute(
									'aria-posinset',
									f[a.parent].children.indexOf(a.id) + 1
								)),
							a.state.disabled &&
								t.childNodes[1].setAttribute(
									'aria-disabled',
									!0
								),
							l = 0,
							h = a.children.length;
						l < h;
						l++
					)
						if (!f[a.children[l]].state.hidden) {
							k = !0;
							break;
						}
					if (
						null !== a.parent &&
						f[a.parent] &&
						!a.state.hidden &&
						((l = e.inArray(a.id, f[a.parent].children)),
						(b = a.id),
						-1 !== l)
					)
						for (
							l++, h = f[a.parent].children.length;
							l < h &&
							(f[f[a.parent].children[l]].state.hidden ||
								(b = f[a.parent].children[l]),
							b === a.id);
							l++
						);
					for (h in (a.state.hidden && (g += ' jstree-hidden'),
					a.state.loading && (g += ' jstree-loading'),
					a.state.loaded && !k
						? (g += ' jstree-leaf')
						: ((g +=
								a.state.opened && a.state.loaded
									? ' jstree-open'
									: ' jstree-closed'),
						  t.childNodes[1].setAttribute(
								'aria-expanded',
								a.state.opened && a.state.loaded
						  )),
					b === a.id && (g += ' jstree-last'),
					(t.id = a.id),
					(t.className = g),
					(g =
						(a.state.selected ? ' jstree-clicked' : '') +
						(a.state.disabled ? ' jstree-disabled' : '')),
					a.a_attr))
						if (a.a_attr.hasOwnProperty(h)) {
							if ('href' === h && '#' === a.a_attr[h]) continue;
							'class' !== h
								? t.childNodes[1].setAttribute(h, a.a_attr[h])
								: (g += ' ' + a.a_attr[h]);
						}
					if (
						(g.length &&
							(t.childNodes[1].className = 'jstree-anchor ' + g),
						((a.icon && !0 !== a.icon) || !1 === a.icon) &&
							(!1 === a.icon
								? (t.childNodes[1].childNodes[0].className +=
										' jstree-themeicon-hidden')
								: -1 === a.icon.indexOf('/') &&
								  -1 === a.icon.indexOf('.')
								? (t.childNodes[1].childNodes[0].className +=
										' ' +
										a.icon +
										' jstree-themeicon-custom')
								: ((t.childNodes[1].childNodes[0].style.backgroundImage =
										'url("' + a.icon + '")'),
								  (t.childNodes[1].childNodes[0].style.backgroundPosition =
										'center center'),
								  (t.childNodes[1].childNodes[0].style.backgroundSize =
										'auto'),
								  (t.childNodes[1].childNodes[0].className +=
										' jstree-themeicon-custom'))),
						this.settings.core.force_text
							? t.childNodes[1].appendChild(
									u.createTextNode(a.text)
							  )
							: (t.childNodes[1].innerHTML += a.text),
						i &&
							a.children.length &&
							(a.state.opened || s) &&
							a.state.loaded)
					) {
						for (
							(_ = u.createElement('UL')).setAttribute(
								'role',
								'group'
							),
								_.className = 'jstree-children',
								l = 0,
								h = a.children.length;
							l < h;
							l++
						)
							_.appendChild(
								this.redraw_node(a.children[l], i, !0)
							);
						t.appendChild(_);
					}
					if ((c && t.appendChild(c), !r)) {
						for (
							n || (n = this.element[0]),
								l = 0,
								h = n.childNodes.length;
							l < h;
							l++
						)
							if (
								n.childNodes[l] &&
								n.childNodes[l].className &&
								-1 !==
									n.childNodes[l].className.indexOf(
										'jstree-children'
									)
							) {
								m = n.childNodes[l];
								break;
							}
						m ||
							((m = u.createElement('UL')).setAttribute(
								'role',
								'group'
							),
							(m.className = 'jstree-children'),
							n.appendChild(m)),
							o < (n = m).childNodes.length
								? n.insertBefore(t, n.childNodes[o])
								: n.appendChild(t),
							p &&
								((v = this.element[0].scrollTop),
								(j = this.element[0].scrollLeft),
								t.childNodes[1].focus(),
								(this.element[0].scrollTop = v),
								(this.element[0].scrollLeft = j));
					}
					return (
						a.state.opened &&
							!a.state.loaded &&
							((a.state.opened = !1),
							setTimeout(
								function () {
									this.open_node(a.id, !1, 0);
								}.bind(this),
								0
							)),
						t
					);
				},
				open_node: function (i, r, s) {
					var a, n, o, d;
					if (e.vakata.is_array(i)) {
						for (a = 0, n = (i = i.slice()).length; a < n; a++)
							this.open_node(i[a], r, s);
						return !0;
					}
					return (
						!(!(i = this.get_node(i)) || i.id === e.jstree.root) &&
						((s = s === t ? this.settings.core.animation : s),
						this.is_closed(i)
							? this.is_loaded(i)
								? ((o = this.get_node(i, !0)),
								  (d = this),
								  o.length &&
										(s &&
											o.children('.jstree-children')
												.length &&
											o
												.children('.jstree-children')
												.stop(!0, !0),
										i.children.length &&
											!this._firstChild(
												o.children(
													'.jstree-children'
												)[0]
											) &&
											this.draw_children(i),
										s
											? (this.trigger('before_open', {
													node: i
											  }),
											  o
													.children(
														'.jstree-children'
													)
													.css('display', 'none')
													.end()
													.removeClass(
														'jstree-closed'
													)
													.addClass('jstree-open')
													.children('.jstree-anchor')
													.attr('aria-expanded', !0)
													.end()
													.children(
														'.jstree-children'
													)
													.stop(!0, !0)
													.slideDown(s, function () {
														(this.style.display =
															''),
															d.element &&
																d.trigger(
																	'after_open',
																	{ node: i }
																);
													}))
											: (this.trigger('before_open', {
													node: i
											  }),
											  (o[0].className = o[0].className.replace(
													'jstree-closed',
													'jstree-open'
											  )),
											  o[0].childNodes[1].setAttribute(
													'aria-expanded',
													!0
											  ))),
								  (i.state.opened = !0),
								  r && r.call(this, i, !0),
								  o.length ||
										this.trigger('before_open', {
											node: i
										}),
								  this.trigger('open_node', { node: i }),
								  (s && o.length) ||
										this.trigger('after_open', { node: i }),
								  !0)
								: this.is_loading(i)
								? setTimeout(
										function () {
											this.open_node(i, r, s);
										}.bind(this),
										500
								  )
								: void this.load_node(i, function (e, t) {
										return t
											? this.open_node(e, r, s)
											: !!r && r.call(this, e, !1);
								  })
							: (r && r.call(this, i, !1), !1))
					);
				},
				_open_to: function (t) {
					if (!(t = this.get_node(t)) || t.id === e.jstree.root)
						return !1;
					var i,
						r,
						s = t.parents;
					for (i = 0, r = s.length; i < r; i += 1)
						i !== e.jstree.root && this.open_node(s[i], !1, 0);
					return e(
						'#' + t.id.replace(e.jstree.idregex, '\\$&'),
						this.element
					);
				},
				close_node: function (i, r) {
					var s, a, n, o;
					if (e.vakata.is_array(i)) {
						for (s = 0, a = (i = i.slice()).length; s < a; s++)
							this.close_node(i[s], r);
						return !0;
					}
					return (
						!(!(i = this.get_node(i)) || i.id === e.jstree.root) &&
						!this.is_closed(i) &&
						((r = r === t ? this.settings.core.animation : r),
						(n = this),
						(o = this.get_node(i, !0)),
						(i.state.opened = !1),
						this.trigger('close_node', { node: i }),
						void (o.length
							? r
								? o
										.children('.jstree-children')
										.attr(
											'style',
											'display:block !important'
										)
										.end()
										.removeClass('jstree-open')
										.addClass('jstree-closed')
										.children('.jstree-anchor')
										.attr('aria-expanded', !1)
										.end()
										.children('.jstree-children')
										.stop(!0, !0)
										.slideUp(r, function () {
											(this.style.display = ''),
												o
													.children(
														'.jstree-children'
													)
													.remove(),
												n.element &&
													n.trigger('after_close', {
														node: i
													});
										})
								: ((o[0].className = o[0].className.replace(
										'jstree-open',
										'jstree-closed'
								  )),
								  o
										.children('.jstree-anchor')
										.attr('aria-expanded', !1),
								  o.children('.jstree-children').remove(),
								  this.trigger('after_close', { node: i }))
							: this.trigger('after_close', { node: i })))
					);
				},
				toggle_node: function (t) {
					var i, r;
					if (e.vakata.is_array(t)) {
						for (i = 0, r = (t = t.slice()).length; i < r; i++)
							this.toggle_node(t[i]);
						return !0;
					}
					return this.is_closed(t)
						? this.open_node(t)
						: this.is_open(t)
						? this.close_node(t)
						: void 0;
				},
				open_all: function (t, i, r) {
					if ((t || (t = e.jstree.root), !(t = this.get_node(t))))
						return !1;
					var s,
						a,
						n,
						o =
							t.id === e.jstree.root
								? this.get_container_ul()
								: this.get_node(t, !0);
					if (!o.length) {
						for (s = 0, a = t.children_d.length; s < a; s++)
							this.is_closed(this._model.data[t.children_d[s]]) &&
								(this._model.data[
									t.children_d[s]
								].state.opened = !0);
						return this.trigger('open_all', { node: t });
					}
					(r = r || o),
						(n = this),
						(o = this.is_closed(t)
							? o.find('.jstree-closed').addBack()
							: o.find('.jstree-closed')).each(function () {
							n.open_node(
								this,
								function (e, t) {
									t &&
										this.is_parent(e) &&
										this.open_all(e, i, r);
								},
								i || 0
							);
						}),
						0 === r.find('.jstree-closed').length &&
							this.trigger('open_all', {
								node: this.get_node(r)
							});
				},
				close_all: function (t, i) {
					if ((t || (t = e.jstree.root), !(t = this.get_node(t))))
						return !1;
					var r,
						s,
						a =
							t.id === e.jstree.root
								? this.get_container_ul()
								: this.get_node(t, !0),
						n = this;
					for (
						a.length &&
							((a = this.is_open(t)
								? a.find('.jstree-open').addBack()
								: a.find('.jstree-open')),
							e(a.get().reverse()).each(function () {
								n.close_node(this, i || 0);
							})),
							r = 0,
							s = t.children_d.length;
						r < s;
						r++
					)
						this._model.data[t.children_d[r]].state.opened = !1;
					this.trigger('close_all', { node: t });
				},
				is_disabled: function (e) {
					return (
						(e = this.get_node(e)) && e.state && e.state.disabled
					);
				},
				enable_node: function (t) {
					var i, r;
					if (e.vakata.is_array(t)) {
						for (i = 0, r = (t = t.slice()).length; i < r; i++)
							this.enable_node(t[i]);
						return !0;
					}
					if (!(t = this.get_node(t)) || t.id === e.jstree.root)
						return !1;
					(t.state.disabled = !1),
						this.get_node(t, !0)
							.children('.jstree-anchor')
							.removeClass('jstree-disabled')
							.attr('aria-disabled', !1),
						this.trigger('enable_node', { node: t });
				},
				disable_node: function (t) {
					var i, r;
					if (e.vakata.is_array(t)) {
						for (i = 0, r = (t = t.slice()).length; i < r; i++)
							this.disable_node(t[i]);
						return !0;
					}
					if (!(t = this.get_node(t)) || t.id === e.jstree.root)
						return !1;
					(t.state.disabled = !0),
						this.get_node(t, !0)
							.children('.jstree-anchor')
							.addClass('jstree-disabled')
							.attr('aria-disabled', !0),
						this.trigger('disable_node', { node: t });
				},
				is_hidden: function (e) {
					return !0 === (e = this.get_node(e)).state.hidden;
				},
				hide_node: function (t, i) {
					var r, s;
					if (e.vakata.is_array(t)) {
						for (r = 0, s = (t = t.slice()).length; r < s; r++)
							this.hide_node(t[r], !0);
						return i || this.redraw(), !0;
					}
					if (!(t = this.get_node(t)) || t.id === e.jstree.root)
						return !1;
					t.state.hidden ||
						((t.state.hidden = !0),
						this._node_changed(t.parent),
						i || this.redraw(),
						this.trigger('hide_node', { node: t }));
				},
				show_node: function (t, i) {
					var r, s;
					if (e.vakata.is_array(t)) {
						for (r = 0, s = (t = t.slice()).length; r < s; r++)
							this.show_node(t[r], !0);
						return i || this.redraw(), !0;
					}
					if (!(t = this.get_node(t)) || t.id === e.jstree.root)
						return !1;
					t.state.hidden &&
						((t.state.hidden = !1),
						this._node_changed(t.parent),
						i || this.redraw(),
						this.trigger('show_node', { node: t }));
				},
				hide_all: function (t) {
					var i,
						r = this._model.data,
						s = [];
					for (i in r)
						r.hasOwnProperty(i) &&
							i !== e.jstree.root &&
							!r[i].state.hidden &&
							((r[i].state.hidden = !0), s.push(i));
					return (
						(this._model.force_full_redraw = !0),
						t || this.redraw(),
						this.trigger('hide_all', { nodes: s }),
						s
					);
				},
				show_all: function (t) {
					var i,
						r = this._model.data,
						s = [];
					for (i in r)
						r.hasOwnProperty(i) &&
							i !== e.jstree.root &&
							r[i].state.hidden &&
							((r[i].state.hidden = !1), s.push(i));
					return (
						(this._model.force_full_redraw = !0),
						t || this.redraw(),
						this.trigger('show_all', { nodes: s }),
						s
					);
				},
				activate_node: function (e, i) {
					if (this.is_disabled(e)) return !1;
					if (
						((i && 'object' == typeof i) || (i = {}),
						(this._data.core.last_clicked =
							this._data.core.last_clicked &&
							this._data.core.last_clicked.id !== t
								? this.get_node(this._data.core.last_clicked.id)
								: null),
						this._data.core.last_clicked &&
							!this._data.core.last_clicked.state.selected &&
							(this._data.core.last_clicked = null),
						!this._data.core.last_clicked &&
							this._data.core.selected.length &&
							(this._data.core.last_clicked = this.get_node(
								this._data.core.selected[
									this._data.core.selected.length - 1
								]
							)),
						this.settings.core.multiple &&
							(i.metaKey || i.ctrlKey || i.shiftKey) &&
							(!i.shiftKey ||
								(this._data.core.last_clicked &&
									this.get_parent(e) &&
									this.get_parent(e) ===
										this._data.core.last_clicked.parent)))
					)
						if (i.shiftKey) {
							var r,
								s,
								a = this.get_node(e).id,
								n = this._data.core.last_clicked.id,
								o = this.get_node(
									this._data.core.last_clicked.parent
								).children,
								d = !1;
							for (r = 0, s = o.length; r < s; r += 1)
								o[r] === a && (d = !d),
									o[r] === n && (d = !d),
									this.is_disabled(o[r]) ||
									(!d && o[r] !== a && o[r] !== n)
										? this.deselect_node(o[r], !0, i)
										: this.is_hidden(o[r]) ||
										  this.select_node(o[r], !0, !1, i);
							this.trigger('changed', {
								action: 'select_node',
								node: this.get_node(e),
								selected: this._data.core.selected,
								event: i
							});
						} else
							this.is_selected(e)
								? this.deselect_node(e, !1, i)
								: this.select_node(e, !1, !1, i);
					else
						!this.settings.core.multiple &&
						(i.metaKey || i.ctrlKey || i.shiftKey) &&
						this.is_selected(e)
							? this.deselect_node(e, !1, i)
							: (this.deselect_all(!0),
							  this.select_node(e, !1, !1, i),
							  (this._data.core.last_clicked = this.get_node(
									e
							  )));
					this.trigger('activate_node', {
						node: this.get_node(e),
						event: i
					});
				},
				hover_node: function (e) {
					if (
						!(e = this.get_node(e, !0)) ||
						!e.length ||
						e.children('.jstree-hovered').length
					)
						return !1;
					var t = this.element.find('.jstree-hovered'),
						i = this.element;
					t && t.length && this.dehover_node(t),
						e.children('.jstree-anchor').addClass('jstree-hovered'),
						this.trigger('hover_node', { node: this.get_node(e) }),
						setTimeout(function () {
							i.attr('aria-activedescendant', e[0].id);
						}, 0);
				},
				dehover_node: function (e) {
					if (
						!(e = this.get_node(e, !0)) ||
						!e.length ||
						!e.children('.jstree-hovered').length
					)
						return !1;
					e.children('.jstree-anchor').removeClass('jstree-hovered'),
						this.trigger('dehover_node', {
							node: this.get_node(e)
						});
				},
				select_node: function (t, i, r, s) {
					var a, n, o;
					if (e.vakata.is_array(t)) {
						for (n = 0, o = (t = t.slice()).length; n < o; n++)
							this.select_node(t[n], i, r, s);
						return !0;
					}
					if (!(t = this.get_node(t)) || t.id === e.jstree.root)
						return !1;
					(a = this.get_node(t, !0)),
						t.state.selected ||
							((t.state.selected = !0),
							this._data.core.selected.push(t.id),
							r || (a = this._open_to(t)),
							a &&
								a.length &&
								a
									.children('.jstree-anchor')
									.addClass('jstree-clicked')
									.attr('aria-selected', !0),
							this.trigger('select_node', {
								node: t,
								selected: this._data.core.selected,
								event: s
							}),
							i ||
								this.trigger('changed', {
									action: 'select_node',
									node: t,
									selected: this._data.core.selected,
									event: s
								}));
				},
				deselect_node: function (t, i, r) {
					var s, a, n;
					if (e.vakata.is_array(t)) {
						for (s = 0, a = (t = t.slice()).length; s < a; s++)
							this.deselect_node(t[s], i, r);
						return !0;
					}
					if (!(t = this.get_node(t)) || t.id === e.jstree.root)
						return !1;
					(n = this.get_node(t, !0)),
						t.state.selected &&
							((t.state.selected = !1),
							(this._data.core.selected = e.vakata.array_remove_item(
								this._data.core.selected,
								t.id
							)),
							n.length &&
								n
									.children('.jstree-anchor')
									.removeClass('jstree-clicked')
									.attr('aria-selected', !1),
							this.trigger('deselect_node', {
								node: t,
								selected: this._data.core.selected,
								event: r
							}),
							i ||
								this.trigger('changed', {
									action: 'deselect_node',
									node: t,
									selected: this._data.core.selected,
									event: r
								}));
				},
				select_all: function (t) {
					var i,
						r,
						s = this._data.core.selected.concat([]);
					for (
						this._data.core.selected = this._model.data[
							e.jstree.root
						].children_d.concat(),
							i = 0,
							r = this._data.core.selected.length;
						i < r;
						i++
					)
						this._model.data[this._data.core.selected[i]] &&
							(this._model.data[
								this._data.core.selected[i]
							].state.selected = !0);
					this.redraw(!0),
						this.trigger('select_all', {
							selected: this._data.core.selected
						}),
						t ||
							this.trigger('changed', {
								action: 'select_all',
								selected: this._data.core.selected,
								old_selection: s
							});
				},
				deselect_all: function (e) {
					var t,
						i,
						r = this._data.core.selected.concat([]);
					for (t = 0, i = this._data.core.selected.length; t < i; t++)
						this._model.data[this._data.core.selected[t]] &&
							(this._model.data[
								this._data.core.selected[t]
							].state.selected = !1);
					(this._data.core.selected = []),
						this.element
							.find('.jstree-clicked')
							.removeClass('jstree-clicked')
							.attr('aria-selected', !1),
						this.trigger('deselect_all', {
							selected: this._data.core.selected,
							node: r
						}),
						e ||
							this.trigger('changed', {
								action: 'deselect_all',
								selected: this._data.core.selected,
								old_selection: r
							});
				},
				is_selected: function (t) {
					return (
						!(!(t = this.get_node(t)) || t.id === e.jstree.root) &&
						t.state.selected
					);
				},
				get_selected: function (t) {
					return t
						? e.map(
								this._data.core.selected,
								function (e) {
									return this.get_node(e);
								}.bind(this)
						  )
						: this._data.core.selected.slice();
				},
				get_top_selected: function (t) {
					var i,
						r,
						s,
						a,
						n = this.get_selected(!0),
						o = {};
					for (i = 0, r = n.length; i < r; i++) o[n[i].id] = n[i];
					for (i = 0, r = n.length; i < r; i++)
						for (s = 0, a = n[i].children_d.length; s < a; s++)
							o[n[i].children_d[s]] &&
								delete o[n[i].children_d[s]];
					for (i in ((n = []), o)) o.hasOwnProperty(i) && n.push(i);
					return t
						? e.map(
								n,
								function (e) {
									return this.get_node(e);
								}.bind(this)
						  )
						: n;
				},
				get_bottom_selected: function (t) {
					var i,
						r,
						s = this.get_selected(!0),
						a = [];
					for (i = 0, r = s.length; i < r; i++)
						s[i].children.length || a.push(s[i].id);
					return t
						? e.map(
								a,
								function (e) {
									return this.get_node(e);
								}.bind(this)
						  )
						: a;
				},
				get_state: function () {
					var t,
						i = {
							core: {
								open: [],
								loaded: [],
								scroll: {
									left: this.element.scrollLeft(),
									top: this.element.scrollTop()
								},
								/*!
					'themes' : {
						'name' : this.get_theme(),
						'icons' : this._data.core.themes.icons,
						'dots' : this._data.core.themes.dots
					},
					*/
								selected: []
							}
						};
					for (t in this._model.data)
						this._model.data.hasOwnProperty(t) &&
							t !== e.jstree.root &&
							(this._model.data[t].state.loaded &&
								this.settings.core.loaded_state &&
								i.core.loaded.push(t),
							this._model.data[t].state.opened &&
								i.core.open.push(t),
							this._model.data[t].state.selected &&
								i.core.selected.push(t));
					return i;
				},
				set_state: function (i, r) {
					if (i) {
						if (
							(i.core &&
								i.core.selected &&
								i.core.initial_selection === t &&
								(i.core.initial_selection = this._data.core.selected
									.concat([])
									.sort()
									.join(',')),
							i.core)
						) {
							var s, a;
							if (i.core.loaded)
								return (
									this.settings.core.loaded_state &&
									e.vakata.is_array(i.core.loaded) &&
									i.core.loaded.length
										? this._load_nodes(
												i.core.loaded,
												function (e) {
													delete i.core.loaded,
														this.set_state(i, r);
												}
										  )
										: (delete i.core.loaded,
										  this.set_state(i, r)),
									!1
								);
							if (i.core.open)
								return (
									e.vakata.is_array(i.core.open) &&
									i.core.open.length
										? this._load_nodes(
												i.core.open,
												function (e) {
													this.open_node(e, !1, 0),
														delete i.core.open,
														this.set_state(i, r);
												}
										  )
										: (delete i.core.open,
										  this.set_state(i, r)),
									!1
								);
							if (i.core.scroll)
								return (
									i.core.scroll &&
										i.core.scroll.left !== t &&
										this.element.scrollLeft(
											i.core.scroll.left
										),
									i.core.scroll &&
										i.core.scroll.top !== t &&
										this.element.scrollTop(
											i.core.scroll.top
										),
									delete i.core.scroll,
									this.set_state(i, r),
									!1
								);
							if (i.core.selected)
								return (
									(s = this),
									(i.core.initial_selection !== t &&
										i.core.initial_selection !==
											this._data.core.selected
												.concat([])
												.sort()
												.join(',')) ||
										(this.deselect_all(),
										e.each(
											i.core.selected,
											function (e, t) {
												s.select_node(t, !1, !0);
											}
										)),
									delete i.core.initial_selection,
									delete i.core.selected,
									this.set_state(i, r),
									!1
								);
							for (a in i)
								i.hasOwnProperty(a) &&
									'core' !== a &&
									-1 ===
										e.inArray(a, this.settings.plugins) &&
									delete i[a];
							if (e.isEmptyObject(i.core))
								return delete i.core, this.set_state(i, r), !1;
						}
						return (
							!e.isEmptyObject(i) ||
							((i = null),
							r && r.call(this),
							this.trigger('set_state'),
							!1)
						);
					}
					return !1;
				},
				refresh: function (t, i) {
					(this._data.core.state = !0 === i ? {} : this.get_state()),
						i &&
							e.vakata.is_function(i) &&
							(this._data.core.state = i.call(
								this,
								this._data.core.state
							)),
						(this._cnt = 0),
						(this._model.data = {}),
						(this._model.data[e.jstree.root] = {
							id: e.jstree.root,
							parent: null,
							parents: [],
							children: [],
							children_d: [],
							state: { loaded: !1 }
						}),
						(this._data.core.selected = []),
						(this._data.core.last_clicked = null),
						(this._data.core.focused = null);
					var r = this.get_container_ul()[0].className;
					t ||
						(this.element.html(
							"<ul class='" +
								r +
								"' role='group'><li class='jstree-initial-node jstree-loading jstree-leaf jstree-last' role='none' id='j" +
								this._id +
								"_loading'><i class='jstree-icon jstree-ocl'></i><a class='jstree-anchor' role='treeitem' href='#'><i class='jstree-icon jstree-themeicon-hidden'></i>" +
								this.get_string('Loading ...') +
								'</a></li></ul>'
						),
						this.element.attr(
							'aria-activedescendant',
							'j' + this._id + '_loading'
						)),
						this.load_node(e.jstree.root, function (t, i) {
							i &&
								((this.get_container_ul()[0].className = r),
								this._firstChild(this.get_container_ul()[0]) &&
									this.element.attr(
										'aria-activedescendant',
										this._firstChild(
											this.get_container_ul()[0]
										).id
									),
								this.set_state(
									e.extend(!0, {}, this._data.core.state),
									function () {
										this.trigger('refresh');
									}
								)),
								(this._data.core.state = null);
						});
				},
				refresh_node: function (t) {
					if (!(t = this.get_node(t)) || t.id === e.jstree.root)
						return !1;
					var i = [],
						r = [],
						s = this._data.core.selected.concat([]);
					r.push(t.id),
						!0 === t.state.opened && i.push(t.id),
						this.get_node(t, !0)
							.find('.jstree-open')
							.each(function () {
								r.push(this.id), i.push(this.id);
							}),
						this._load_nodes(
							r,
							function (e) {
								this.open_node(i, !1, 0),
									this.select_node(s),
									this.trigger('refresh_node', {
										node: t,
										nodes: e
									});
							}.bind(this),
							!1,
							!0
						);
				},
				set_id: function (t, i) {
					if (!(t = this.get_node(t)) || t.id === e.jstree.root)
						return !1;
					var r,
						s,
						a = this._model.data,
						n = t.id;
					for (
						i = i.toString(),
							a[t.parent].children[
								e.inArray(t.id, a[t.parent].children)
							] = i,
							r = 0,
							s = t.parents.length;
						r < s;
						r++
					)
						a[t.parents[r]].children_d[
							e.inArray(t.id, a[t.parents[r]].children_d)
						] = i;
					for (r = 0, s = t.children.length; r < s; r++)
						a[t.children[r]].parent = i;
					for (r = 0, s = t.children_d.length; r < s; r++)
						a[t.children_d[r]].parents[
							e.inArray(t.id, a[t.children_d[r]].parents)
						] = i;
					return (
						-1 !==
							(r = e.inArray(t.id, this._data.core.selected)) &&
							(this._data.core.selected[r] = i),
						(r = this.get_node(t.id, !0)) &&
							(r.attr('id', i),
							this.element.attr('aria-activedescendant') ===
								t.id &&
								this.element.attr('aria-activedescendant', i)),
						delete a[t.id],
						(t.id = i),
						(t.li_attr.id = i),
						(a[i] = t),
						this.trigger('set_id', { node: t, new: t.id, old: n }),
						!0
					);
				},
				get_text: function (t) {
					return (
						!(!(t = this.get_node(t)) || t.id === e.jstree.root) &&
						t.text
					);
				},
				set_text: function (t, i) {
					var r, s;
					if (e.vakata.is_array(t)) {
						for (r = 0, s = (t = t.slice()).length; r < s; r++)
							this.set_text(t[r], i);
						return !0;
					}
					return (
						!(!(t = this.get_node(t)) || t.id === e.jstree.root) &&
						((t.text = i),
						this.get_node(t, !0).length && this.redraw_node(t.id),
						this.trigger('set_text', { obj: t, text: i }),
						!0)
					);
				},
				get_json: function (t, i, r) {
					if (!(t = this.get_node(t || e.jstree.root))) return !1;
					i && i.flat && !r && (r = []);
					var s,
						a,
						n = {
							id: t.id,
							text: t.text,
							icon: this.get_icon(t),
							li_attr: e.extend(!0, {}, t.li_attr),
							a_attr: e.extend(!0, {}, t.a_attr),
							state: {},
							data:
								(!i || !i.no_data) &&
								e.extend(
									!0,
									e.vakata.is_array(t.data) ? [] : {},
									t.data
								)
						};
					if (
						(i && i.flat
							? (n.parent = t.parent)
							: (n.children = []),
						i && i.no_state)
					)
						delete n.state;
					else
						for (s in t.state)
							t.state.hasOwnProperty(s) &&
								(n.state[s] = t.state[s]);
					if (
						(i && i.no_li_attr && delete n.li_attr,
						i && i.no_a_attr && delete n.a_attr,
						i &&
							i.no_id &&
							(delete n.id,
							n.li_attr && n.li_attr.id && delete n.li_attr.id,
							n.a_attr && n.a_attr.id && delete n.a_attr.id),
						i && i.flat && t.id !== e.jstree.root && r.push(n),
						!i || !i.no_children)
					)
						for (s = 0, a = t.children.length; s < a; s++)
							i && i.flat
								? this.get_json(t.children[s], i, r)
								: n.children.push(
										this.get_json(t.children[s], i)
								  );
					return i && i.flat
						? r
						: t.id === e.jstree.root
						? n.children
						: n;
				},
				create_node: function (i, r, s, a, n) {
					if (
						(null === i && (i = e.jstree.root),
						!(i = this.get_node(i)))
					)
						return !1;
					if (
						!(s = s === t ? 'last' : s)
							.toString()
							.match(/^(before|after)$/) &&
						!n &&
						!this.is_loaded(i)
					)
						return this.load_node(i, function () {
							this.create_node(i, r, s, a, !0);
						});
					var o, d, c, l;
					switch (
						(r || (r = { text: this.get_string('New node') }),
						(r =
							'string' == typeof r
								? { text: r }
								: e.extend(!0, {}, r)).text === t &&
							(r.text = this.get_string('New node')),
						i.id === e.jstree.root &&
							('before' === s && (s = 'first'),
							'after' === s && (s = 'last')),
						s)
					) {
						case 'before':
							(o = this.get_node(i.parent)),
								(s = e.inArray(i.id, o.children)),
								(i = o);
							break;
						case 'after':
							(o = this.get_node(i.parent)),
								(s = e.inArray(i.id, o.children) + 1),
								(i = o);
							break;
						case 'inside':
						case 'first':
							s = 0;
							break;
						case 'last':
							s = i.children.length;
							break;
						default:
							s || (s = 0);
					}
					if (
						(s > i.children.length && (s = i.children.length),
						r.id || (r.id = !0),
						!this.check('create_node', r, i, s))
					)
						return (
							this.settings.core.error.call(
								this,
								this._data.core.last_error
							),
							!1
						);
					if (
						(!0 === r.id && delete r.id,
						!(r = this._parse_model_from_json(
							r,
							i.id,
							i.parents.concat()
						)))
					)
						return !1;
					for (
						o = this.get_node(r),
							(d = []).push(r),
							d = d.concat(o.children_d),
							this.trigger('model', { nodes: d, parent: i.id }),
							i.children_d = i.children_d.concat(d),
							c = 0,
							l = i.parents.length;
						c < l;
						c++
					)
						this._model.data[
							i.parents[c]
						].children_d = this._model.data[
							i.parents[c]
						].children_d.concat(d);
					for (
						r = o, o = [], c = 0, l = i.children.length;
						c < l;
						c++
					)
						o[c >= s ? c + 1 : c] = i.children[c];
					return (
						(o[s] = r.id),
						(i.children = o),
						this.redraw_node(i, !0),
						this.trigger('create_node', {
							node: this.get_node(r),
							parent: i.id,
							position: s
						}),
						a && a.call(this, this.get_node(r)),
						r.id
					);
				},
				rename_node: function (t, i) {
					var r, s, a;
					if (e.vakata.is_array(t)) {
						for (r = 0, s = (t = t.slice()).length; r < s; r++)
							this.rename_node(t[r], i);
						return !0;
					}
					return (
						!(!(t = this.get_node(t)) || t.id === e.jstree.root) &&
						((a = t.text),
						this.check('rename_node', t, this.get_parent(t), i)
							? (this.set_text(t, i),
							  this.trigger('rename_node', {
									node: t,
									text: i,
									old: a
							  }),
							  !0)
							: (this.settings.core.error.call(
									this,
									this._data.core.last_error
							  ),
							  !1))
					);
				},
				delete_node: function (t) {
					var i, r, s, a, n, o, d, c, l, h, _, g;
					if (e.vakata.is_array(t)) {
						for (i = 0, r = (t = t.slice()).length; i < r; i++)
							this.delete_node(t[i]);
						return !0;
					}
					if (!(t = this.get_node(t)) || t.id === e.jstree.root)
						return !1;
					if (
						((s = this.get_node(t.parent)),
						(a = e.inArray(t.id, s.children)),
						(h = !1),
						!this.check('delete_node', t, s, a))
					)
						return (
							this.settings.core.error.call(
								this,
								this._data.core.last_error
							),
							!1
						);
					for (
						-1 !== a &&
							(s.children = e.vakata.array_remove(s.children, a)),
							(n = t.children_d.concat([])).push(t.id),
							o = 0,
							d = t.parents.length;
						o < d;
						o++
					)
						this._model.data[
							t.parents[o]
						].children_d = e.vakata.array_filter(
							this._model.data[t.parents[o]].children_d,
							function (t) {
								return -1 === e.inArray(t, n);
							}
						);
					for (c = 0, l = n.length; c < l; c++)
						if (this._model.data[n[c]].state.selected) {
							h = !0;
							break;
						}
					for (
						h &&
							(this._data.core.selected = e.vakata.array_filter(
								this._data.core.selected,
								function (t) {
									return -1 === e.inArray(t, n);
								}
							)),
							this.trigger('delete_node', {
								node: t,
								parent: s.id
							}),
							h &&
								this.trigger('changed', {
									action: 'delete_node',
									node: t,
									selected: this._data.core.selected,
									parent: s.id
								}),
							c = 0,
							l = n.length;
						c < l;
						c++
					)
						delete this._model.data[n[c]];
					return (
						-1 !== e.inArray(this._data.core.focused, n) &&
							((this._data.core.focused = null),
							(_ = this.element[0].scrollTop),
							(g = this.element[0].scrollLeft),
							s.id === e.jstree.root
								? this._model.data[e.jstree.root].children[0] &&
								  this.get_node(
										this._model.data[e.jstree.root]
											.children[0],
										!0
								  )
										.children('.jstree-anchor')
										.triger('focus')
								: this.get_node(s, !0)
										.children('.jstree-anchor')
										.trigger('focus'),
							(this.element[0].scrollTop = _),
							(this.element[0].scrollLeft = g)),
						this.redraw_node(s, !0),
						!0
					);
				},
				check: function (t, i, r, s, a) {
					(i = i && i.id ? i : this.get_node(i)),
						(r = r && r.id ? r : this.get_node(r));
					var n = t.match(/^move_node|copy_node|create_node$/i)
							? r
							: i,
						o = this.settings.core.check_callback;
					if ('move_node' === t || 'copy_node' === t) {
						if (
							!(
								(a && a.is_multi) ||
								'move_node' !== t ||
								e.inArray(i.id, r.children) !== s
							)
						)
							return (
								(this._data.core.last_error = {
									error: 'check',
									plugin: 'core',
									id: 'core_08',
									reason:
										'Moving node to its current position',
									data: JSON.stringify({
										chk: t,
										pos: s,
										obj: !(!i || !i.id) && i.id,
										par: !(!r || !r.id) && r.id
									})
								}),
								!1
							);
						if (
							!(
								(a && a.is_multi) ||
								(i.id !== r.id &&
									('move_node' !== t ||
										e.inArray(i.id, r.children) !== s) &&
									-1 === e.inArray(r.id, i.children_d))
							)
						)
							return (
								(this._data.core.last_error = {
									error: 'check',
									plugin: 'core',
									id: 'core_01',
									reason: 'Moving parent inside child',
									data: JSON.stringify({
										chk: t,
										pos: s,
										obj: !(!i || !i.id) && i.id,
										par: !(!r || !r.id) && r.id
									})
								}),
								!1
							);
					}
					return (
						n && n.data && (n = n.data),
						n &&
						n.functions &&
						(!1 === n.functions[t] || !0 === n.functions[t])
							? (!1 === n.functions[t] &&
									(this._data.core.last_error = {
										error: 'check',
										plugin: 'core',
										id: 'core_02',
										reason:
											'Node data prevents function: ' + t,
										data: JSON.stringify({
											chk: t,
											pos: s,
											obj: !(!i || !i.id) && i.id,
											par: !(!r || !r.id) && r.id
										})
									}),
							  n.functions[t])
							: !(
									!1 === o ||
									(e.vakata.is_function(o) &&
										!1 === o.call(this, t, i, r, s, a)) ||
									(o && !1 === o[t])
							  ) ||
							  ((this._data.core.last_error = {
									error: 'check',
									plugin: 'core',
									id: 'core_03',
									reason:
										'User config for core.check_callback prevents function: ' +
										t,
									data: JSON.stringify({
										chk: t,
										pos: s,
										obj: !(!i || !i.id) && i.id,
										par: !(!r || !r.id) && r.id
									})
							  }),
							  !1)
					);
				},
				last_error: function () {
					return this._data.core.last_error;
				},
				move_node: function (i, r, s, a, n, o, d) {
					var c, l, h, _, g, u, f, p, m, v, j, k, b, y;
					if (((r = this.get_node(r)), (s = s === t ? 0 : s), !r))
						return !1;
					if (
						!s.toString().match(/^(before|after)$/) &&
						!n &&
						!this.is_loaded(r)
					)
						return this.load_node(r, function () {
							this.move_node(i, r, s, a, !0, !1, d);
						});
					if (e.vakata.is_array(i)) {
						if (1 !== i.length) {
							for (c = 0, l = i.length; c < l; c++)
								(m = this.move_node(i[c], r, s, a, n, !1, d)) &&
									((r = m), (s = 'after'));
							return this.redraw(), !0;
						}
						i = i[0];
					}
					if (
						!(i = i && i.id ? i : this.get_node(i)) ||
						i.id === e.jstree.root
					)
						return !1;
					if (
						((h = (i.parent || e.jstree.root).toString()),
						(g =
							s.toString().match(/^(before|after)$/) &&
							r.id !== e.jstree.root
								? this.get_node(r.parent)
								: r),
						(f =
							!(u =
								d ||
								(this._model.data[i.id]
									? this
									: e.jstree.reference(i.id))) ||
							!u._id ||
							this._id !== u._id),
						(_ =
							u &&
							u._id &&
							h &&
							u._model.data[h] &&
							u._model.data[h].children
								? e.inArray(i.id, u._model.data[h].children)
								: -1),
						u && u._id && (i = u._model.data[i.id]),
						f)
					)
						return (
							!!(m = this.copy_node(i, r, s, a, n, !1, d)) &&
							(u && u.delete_node(i), m)
						);
					switch (
						(r.id === e.jstree.root &&
							('before' === s && (s = 'first'),
							'after' === s && (s = 'last')),
						s)
					) {
						case 'before':
							s = e.inArray(r.id, g.children);
							break;
						case 'after':
							s = e.inArray(r.id, g.children) + 1;
							break;
						case 'inside':
						case 'first':
							s = 0;
							break;
						case 'last':
							s = g.children.length;
							break;
						default:
							s || (s = 0);
					}
					if (
						(s > g.children.length && (s = g.children.length),
						!this.check('move_node', i, g, s, {
							core: !0,
							origin: d,
							is_multi: u && u._id && u._id !== this._id,
							is_foreign: !u || !u._id
						}))
					)
						return (
							this.settings.core.error.call(
								this,
								this._data.core.last_error
							),
							!1
						);
					if (i.parent === g.id) {
						for (
							p = g.children.concat(),
								-1 !== (m = e.inArray(i.id, p)) &&
									((p = e.vakata.array_remove(p, m)),
									s > m && s--),
								m = [],
								v = 0,
								j = p.length;
							v < j;
							v++
						)
							m[v >= s ? v + 1 : v] = p[v];
						(m[s] = i.id),
							(g.children = m),
							this._node_changed(g.id),
							this.redraw(g.id === e.jstree.root);
					} else {
						for (
							(m = i.children_d.concat()).push(i.id),
								v = 0,
								j = i.parents.length;
							v < j;
							v++
						) {
							for (
								p = [],
									k = 0,
									b = (y =
										u._model.data[i.parents[v]].children_d)
										.length;
								k < b;
								k++
							)
								-1 === e.inArray(y[k], m) && p.push(y[k]);
							u._model.data[i.parents[v]].children_d = p;
						}
						for (
							u._model.data[
								h
							].children = e.vakata.array_remove_item(
								u._model.data[h].children,
								i.id
							),
								v = 0,
								j = g.parents.length;
							v < j;
							v++
						)
							this._model.data[
								g.parents[v]
							].children_d = this._model.data[
								g.parents[v]
							].children_d.concat(m);
						for (p = [], v = 0, j = g.children.length; v < j; v++)
							p[v >= s ? v + 1 : v] = g.children[v];
						for (
							p[s] = i.id,
								g.children = p,
								g.children_d.push(i.id),
								g.children_d = g.children_d.concat(
									i.children_d
								),
								i.parent = g.id,
								(m = g.parents.concat()).unshift(g.id),
								y = i.parents.length,
								i.parents = m,
								m = m.concat(),
								v = 0,
								j = i.children_d.length;
							v < j;
							v++
						)
							(this._model.data[
								i.children_d[v]
							].parents = this._model.data[
								i.children_d[v]
							].parents.slice(0, -1 * y)),
								Array.prototype.push.apply(
									this._model.data[i.children_d[v]].parents,
									m
								);
						(h !== e.jstree.root && g.id !== e.jstree.root) ||
							(this._model.force_full_redraw = !0),
							this._model.force_full_redraw ||
								(this._node_changed(h),
								this._node_changed(g.id)),
							o || this.redraw();
					}
					return (
						a && a.call(this, i, g, s),
						this.trigger('move_node', {
							node: i,
							parent: g.id,
							position: s,
							old_parent: h,
							old_position: _,
							is_multi: u && u._id && u._id !== this._id,
							is_foreign: !u || !u._id,
							old_instance: u,
							new_instance: this
						}),
						i.id
					);
				},
				copy_node: function (i, r, s, a, n, o, d) {
					var c, l, h, _, g, u, f, p, m, v;
					if (((r = this.get_node(r)), (s = s === t ? 0 : s), !r))
						return !1;
					if (
						!s.toString().match(/^(before|after)$/) &&
						!n &&
						!this.is_loaded(r)
					)
						return this.load_node(r, function () {
							this.copy_node(i, r, s, a, !0, !1, d);
						});
					if (e.vakata.is_array(i)) {
						if (1 !== i.length) {
							for (c = 0, l = i.length; c < l; c++)
								(_ = this.copy_node(i[c], r, s, a, n, !0, d)) &&
									((r = _), (s = 'after'));
							return this.redraw(), !0;
						}
						i = i[0];
					}
					if (
						!(i = i && i.id ? i : this.get_node(i)) ||
						i.id === e.jstree.root
					)
						return !1;
					switch (
						((p = (i.parent || e.jstree.root).toString()),
						(m =
							s.toString().match(/^(before|after)$/) &&
							r.id !== e.jstree.root
								? this.get_node(r.parent)
								: r),
						!(v =
							d ||
							(this._model.data[i.id]
								? this
								: e.jstree.reference(i.id))) ||
							!v._id ||
							this._id !== v._id,
						v && v._id && (i = v._model.data[i.id]),
						r.id === e.jstree.root &&
							('before' === s && (s = 'first'),
							'after' === s && (s = 'last')),
						s)
					) {
						case 'before':
							s = e.inArray(r.id, m.children);
							break;
						case 'after':
							s = e.inArray(r.id, m.children) + 1;
							break;
						case 'inside':
						case 'first':
							s = 0;
							break;
						case 'last':
							s = m.children.length;
							break;
						default:
							s || (s = 0);
					}
					if (
						(s > m.children.length && (s = m.children.length),
						!this.check('copy_node', i, m, s, {
							core: !0,
							origin: d,
							is_multi: v && v._id && v._id !== this._id,
							is_foreign: !v || !v._id
						}))
					)
						return (
							this.settings.core.error.call(
								this,
								this._data.core.last_error
							),
							!1
						);
					if (
						!(f = v
							? v.get_json(i, {
									no_id: !0,
									no_data: !0,
									no_state: !0
							  })
							: i)
					)
						return !1;
					if (
						(!0 === f.id && delete f.id,
						!(f = this._parse_model_from_json(
							f,
							m.id,
							m.parents.concat()
						)))
					)
						return !1;
					for (
						_ = this.get_node(f),
							i &&
								i.state &&
								!1 === i.state.loaded &&
								(_.state.loaded = !1),
							(h = []).push(f),
							h = h.concat(_.children_d),
							this.trigger('model', { nodes: h, parent: m.id }),
							g = 0,
							u = m.parents.length;
						g < u;
						g++
					)
						this._model.data[
							m.parents[g]
						].children_d = this._model.data[
							m.parents[g]
						].children_d.concat(h);
					for (h = [], g = 0, u = m.children.length; g < u; g++)
						h[g >= s ? g + 1 : g] = m.children[g];
					return (
						(h[s] = _.id),
						(m.children = h),
						m.children_d.push(_.id),
						(m.children_d = m.children_d.concat(_.children_d)),
						m.id === e.jstree.root &&
							(this._model.force_full_redraw = !0),
						this._model.force_full_redraw ||
							this._node_changed(m.id),
						o || this.redraw(m.id === e.jstree.root),
						a && a.call(this, _, m, s),
						this.trigger('copy_node', {
							node: _,
							original: i,
							parent: m.id,
							position: s,
							old_parent: p,
							old_position:
								v &&
								v._id &&
								p &&
								v._model.data[p] &&
								v._model.data[p].children
									? e.inArray(i.id, v._model.data[p].children)
									: -1,
							is_multi: v && v._id && v._id !== this._id,
							is_foreign: !v || !v._id,
							old_instance: v,
							new_instance: this
						}),
						_.id
					);
				},
				cut: function (t) {
					if (
						(t || (t = this._data.core.selected.concat()),
						e.vakata.is_array(t) || (t = [t]),
						!t.length)
					)
						return !1;
					var i,
						n,
						o,
						d = [];
					for (n = 0, o = t.length; n < o; n++)
						(i = this.get_node(t[n])) &&
							i.id &&
							i.id !== e.jstree.root &&
							d.push(i);
					if (!d.length) return !1;
					(r = d),
						(a = this),
						(s = 'move_node'),
						this.trigger('cut', { node: t });
				},
				copy: function (t) {
					if (
						(t || (t = this._data.core.selected.concat()),
						e.vakata.is_array(t) || (t = [t]),
						!t.length)
					)
						return !1;
					var i,
						n,
						o,
						d = [];
					for (n = 0, o = t.length; n < o; n++)
						(i = this.get_node(t[n])) &&
							i.id &&
							i.id !== e.jstree.root &&
							d.push(i);
					if (!d.length) return !1;
					(r = d),
						(a = this),
						(s = 'copy_node'),
						this.trigger('copy', { node: t });
				},
				get_buffer: function () {
					return { mode: s, node: r, inst: a };
				},
				can_paste: function () {
					return !1 !== s && !1 !== r;
				},
				paste: function (e, t) {
					if (
						!(
							(e = this.get_node(e)) &&
							s &&
							s.match(/^(copy_node|move_node)$/) &&
							r
						)
					)
						return !1;
					this[s](r, e, t, !1, !1, !1, a) &&
						this.trigger('paste', {
							parent: e.id,
							node: r,
							mode: s
						}),
						(r = !1),
						(s = !1),
						(a = !1);
				},
				clear_buffer: function () {
					(r = !1), (s = !1), (a = !1), this.trigger('clear_buffer');
				},
				edit: function (t, i, r) {
					var s,
						a,
						n,
						o,
						c,
						l,
						h,
						_,
						g,
						u = !1;
					return (
						!!(t = this.get_node(t)) &&
						(this.check('edit', t, this.get_parent(t))
							? ((g = t),
							  (i = 'string' == typeof i ? i : t.text),
							  this.set_text(t, ''),
							  (t = this._open_to(t)),
							  (g.text = i),
							  (s = this._data.core.rtl),
							  (a = this.element.width()),
							  (this._data.core.focused = g.id),
							  (n = t
									.children('.jstree-anchor')
									.trigger('focus')),
							  (o = e('<span></span>')),
							  /*!
			oi = obj.children("i:visible"),
			ai = a.children("i:visible"),
			w1 = oi.width() * oi.length,
			w2 = ai.width() * ai.length,
			*/
							  (c = i),
							  (l = e('<div></div>', {
									css: {
										position: 'absolute',
										top: '-200px',
										left: s ? '0px' : '-1000px',
										visibility: 'hidden'
									}
							  }).appendTo(d.body)),
							  (h = e('<input />', {
									value: c,
									class: 'jstree-rename-input',
									css: {
										padding: '0',
										border: '1px solid silver',
										'box-sizing': 'border-box',
										display: 'inline-block',
										height:
											this._data.core.li_height + 'px',
										lineHeight:
											this._data.core.li_height + 'px',
										width: '150px'
									},
									blur: function (i) {
										i.stopImmediatePropagation(),
											i.preventDefault();
										var s,
											a = o
												.children(
													'.jstree-rename-input'
												)
												.val(),
											d = this.settings.core.force_text;
										'' === a && (a = c),
											l.remove(),
											o.replaceWith(n),
											o.remove(),
											(c = d
												? c
												: e('<div></div>')
														.append(e.parseHTML(c))
														.html()),
											(t = this.get_node(t)),
											this.set_text(t, c),
											(s = !!this.rename_node(
												t,
												d
													? e('<div></div>')
															.text(a)
															.text()
													: e('<div></div>')
															.append(
																e.parseHTML(a)
															)
															.html()
											)) || this.set_text(t, c),
											(this._data.core.focused = g.id),
											setTimeout(
												function () {
													var e = this.get_node(
														g.id,
														!0
													);
													e.length &&
														((this._data.core.focused =
															g.id),
														e
															.children(
																'.jstree-anchor'
															)
															.trigger('focus'));
												}.bind(this),
												0
											),
											r && r.call(this, g, s, u, a),
											(h = null);
									}.bind(this),
									keydown: function (e) {
										var t = e.which;
										27 === t &&
											((u = !0), (this.value = c)),
											(27 !== t &&
												13 !== t &&
												37 !== t &&
												38 !== t &&
												39 !== t &&
												40 !== t &&
												32 !== t) ||
												e.stopImmediatePropagation(),
											(27 !== t && 13 !== t) ||
												(e.preventDefault(),
												this.blur());
									},
									click: function (e) {
										e.stopImmediatePropagation();
									},
									mousedown: function (e) {
										e.stopImmediatePropagation();
									},
									keyup: function (e) {
										h.width(
											Math.min(
												l
													.text('pW' + this.value)
													.width(),
												a
											)
										);
									},
									keypress: function (e) {
										if (13 === e.which) return !1;
									}
							  })),
							  (_ = {
									fontFamily: n.css('fontFamily') || '',
									fontSize: n.css('fontSize') || '',
									fontWeight: n.css('fontWeight') || '',
									fontStyle: n.css('fontStyle') || '',
									fontStretch: n.css('fontStretch') || '',
									fontVariant: n.css('fontVariant') || '',
									letterSpacing: n.css('letterSpacing') || '',
									wordSpacing: n.css('wordSpacing') || ''
							  }),
							  o
									.attr('class', n.attr('class'))
									.append(n.contents().clone())
									.append(h),
							  n.replaceWith(o),
							  l.css(_),
							  h
									.css(_)
									.width(
										Math.min(
											l.text('pW' + h[0].value).width(),
											a
										)
									)[0]
									.select(),
							  void e(d).one(
									'mousedown.jstree touchstart.jstree dnd_start.vakata',
									function (t) {
										h &&
											t.target !== h &&
											e(h).trigger('blur');
									}
							  ))
							: (this.settings.core.error.call(
									this,
									this._data.core.last_error
							  ),
							  !1))
					);
				},
				set_theme: function (t, i) {
					if (!t) return !1;
					if (!0 === i) {
						var r = this.settings.core.themes.dir;
						r || (r = e.jstree.path + '/themes'),
							(i = r + '/' + t + '/style.css');
					}
					i &&
						-1 === e.inArray(i, n) &&
						(e('head').append(
							'<link rel="stylesheet" href="' +
								i +
								'" type="text/css" />'
						),
						n.push(i)),
						this._data.core.themes.name &&
							this.element.removeClass(
								'jstree-' + this._data.core.themes.name
							),
						(this._data.core.themes.name = t),
						this.element.addClass('jstree-' + t),
						this.element[
							this.settings.core.themes.responsive
								? 'addClass'
								: 'removeClass'
						]('jstree-' + t + '-responsive'),
						this.trigger('set_theme', { theme: t });
				},
				get_theme: function () {
					return this._data.core.themes.name;
				},
				set_theme_variant: function (e) {
					this._data.core.themes.variant &&
						this.element.removeClass(
							'jstree-' +
								this._data.core.themes.name +
								'-' +
								this._data.core.themes.variant
						),
						(this._data.core.themes.variant = e),
						e &&
							this.element.addClass(
								'jstree-' +
									this._data.core.themes.name +
									'-' +
									this._data.core.themes.variant
							);
				},
				get_theme_variant: function () {
					return this._data.core.themes.variant;
				},
				show_stripes: function () {
					(this._data.core.themes.stripes = !0),
						this.get_container_ul().addClass('jstree-striped'),
						this.trigger('show_stripes');
				},
				hide_stripes: function () {
					(this._data.core.themes.stripes = !1),
						this.get_container_ul().removeClass('jstree-striped'),
						this.trigger('hide_stripes');
				},
				toggle_stripes: function () {
					this._data.core.themes.stripes
						? this.hide_stripes()
						: this.show_stripes();
				},
				show_dots: function () {
					(this._data.core.themes.dots = !0),
						this.get_container_ul().removeClass('jstree-no-dots'),
						this.trigger('show_dots');
				},
				hide_dots: function () {
					(this._data.core.themes.dots = !1),
						this.get_container_ul().addClass('jstree-no-dots'),
						this.trigger('hide_dots');
				},
				toggle_dots: function () {
					this._data.core.themes.dots
						? this.hide_dots()
						: this.show_dots();
				},
				show_icons: function () {
					(this._data.core.themes.icons = !0),
						this.get_container_ul().removeClass('jstree-no-icons'),
						this.trigger('show_icons');
				},
				hide_icons: function () {
					(this._data.core.themes.icons = !1),
						this.get_container_ul().addClass('jstree-no-icons'),
						this.trigger('hide_icons');
				},
				toggle_icons: function () {
					this._data.core.themes.icons
						? this.hide_icons()
						: this.show_icons();
				},
				show_ellipsis: function () {
					(this._data.core.themes.ellipsis = !0),
						this.get_container_ul().addClass('jstree-ellipsis'),
						this.trigger('show_ellipsis');
				},
				hide_ellipsis: function () {
					(this._data.core.themes.ellipsis = !1),
						this.get_container_ul().removeClass('jstree-ellipsis'),
						this.trigger('hide_ellipsis');
				},
				toggle_ellipsis: function () {
					this._data.core.themes.ellipsis
						? this.hide_ellipsis()
						: this.show_ellipsis();
				},
				set_icon: function (i, r) {
					var s, a, n, o;
					if (e.vakata.is_array(i)) {
						for (s = 0, a = (i = i.slice()).length; s < a; s++)
							this.set_icon(i[s], r);
						return !0;
					}
					return (
						!(!(i = this.get_node(i)) || i.id === e.jstree.root) &&
						((o = i.icon),
						(i.icon =
							!0 === r || null === r || r === t || '' === r || r),
						(n = this.get_node(i, !0)
							.children('.jstree-anchor')
							.children('.jstree-themeicon')),
						!1 === r
							? (n
									.removeClass('jstree-themeicon-custom ' + o)
									.css('background', '')
									.removeAttr('rel'),
							  this.hide_icon(i))
							: !0 === r || null === r || r === t || '' === r
							? (n
									.removeClass('jstree-themeicon-custom ' + o)
									.css('background', '')
									.removeAttr('rel'),
							  !1 === o && this.show_icon(i))
							: -1 === r.indexOf('/') && -1 === r.indexOf('.')
							? (n.removeClass(o).css('background', ''),
							  n
									.addClass(r + ' jstree-themeicon-custom')
									.attr('rel', r),
							  !1 === o && this.show_icon(i))
							: (n.removeClass(o).css('background', ''),
							  n
									.addClass('jstree-themeicon-custom')
									.css(
										'background',
										"url('" +
											r +
											"') center center no-repeat"
									)
									.attr('rel', r),
							  !1 === o && this.show_icon(i)),
						!0)
					);
				},
				get_icon: function (t) {
					return (
						!(!(t = this.get_node(t)) || t.id === e.jstree.root) &&
						t.icon
					);
				},
				hide_icon: function (t) {
					var i, r;
					if (e.vakata.is_array(t)) {
						for (i = 0, r = (t = t.slice()).length; i < r; i++)
							this.hide_icon(t[i]);
						return !0;
					}
					return (
						!(!(t = this.get_node(t)) || t === e.jstree.root) &&
						((t.icon = !1),
						this.get_node(t, !0)
							.children('.jstree-anchor')
							.children('.jstree-themeicon')
							.addClass('jstree-themeicon-hidden'),
						!0)
					);
				},
				show_icon: function (t) {
					var i, r, s;
					if (e.vakata.is_array(t)) {
						for (i = 0, r = (t = t.slice()).length; i < r; i++)
							this.show_icon(t[i]);
						return !0;
					}
					return (
						!(!(t = this.get_node(t)) || t === e.jstree.root) &&
						((s = this.get_node(t, !0)),
						(t.icon =
							!s.length ||
							s
								.children('.jstree-anchor')
								.children('.jstree-themeicon')
								.attr('rel')),
						t.icon || (t.icon = !0),
						s
							.children('.jstree-anchor')
							.children('.jstree-themeicon')
							.removeClass('jstree-themeicon-hidden'),
						!0)
					);
				}
			}),
			(e.vakata = {}),
			(e.vakata.attributes = function (t, i) {
				t = e(t)[0];
				var r = i ? {} : [];
				return (
					t &&
						t.attributes &&
						e.each(t.attributes, function (t, s) {
							-1 ===
								e.inArray(s.name.toLowerCase(), [
									'style',
									'contenteditable',
									'hasfocus',
									'tabindex'
								]) &&
								null !== s.value &&
								'' !== e.vakata.trim(s.value) &&
								(i ? (r[s.name] = s.value) : r.push(s.name));
						}),
					r
				);
			}),
			(e.vakata.array_unique = function (e) {
				var i,
					r,
					s = [],
					a = {};
				for (i = 0, r = e.length; i < r; i++)
					a[e[i]] === t && (s.push(e[i]), (a[e[i]] = !0));
				return s;
			}),
			(e.vakata.array_remove = function (e, t) {
				return e.splice(t, 1), e;
			}),
			(e.vakata.array_remove_item = function (t, i) {
				var r = e.inArray(i, t);
				return -1 !== r ? e.vakata.array_remove(t, r) : t;
			}),
			(e.vakata.array_filter = function (e, t, i, r, s) {
				if (e.filter) return e.filter(t, i);
				for (s in ((r = []), e))
					~~s + '' == s + '' &&
						s >= 0 &&
						t.call(i, e[s], +s, e) &&
						r.push(e[s]);
				return r;
			}),
			(e.vakata.trim = function (e) {
				return String.prototype.trim
					? String.prototype.trim.call(e.toString())
					: e
							.toString()
							.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
			}),
			(e.vakata.is_function = function (e) {
				return 'function' == typeof e && 'number' != typeof e.nodeType;
			}),
			(e.vakata.is_array =
				Array.isArray ||
				function (e) {
					return (
						'[object Array]' === Object.prototype.toString.call(e)
					);
				}),
			Function.prototype.bind ||
				(Function.prototype.bind = function () {
					var e = this,
						t = arguments[0],
						i = Array.prototype.slice.call(arguments, 1);
					if ('function' != typeof e)
						throw new TypeError(
							'Function.prototype.bind - what is trying to be bound is not callable'
						);
					return function () {
						var r = i.concat(Array.prototype.slice.call(arguments));
						return e.apply(t, r);
					};
				}),
			(e.jstree.plugins.changed = function (e, t) {
				var i = [];
				(this.trigger = function (e, r) {
					var s, a;
					if (
						(r || (r = {}), 'changed' === e.replace('.jstree', ''))
					) {
						r.changed = { selected: [], deselected: [] };
						var n = {};
						for (s = 0, a = i.length; s < a; s++) n[i[s]] = 1;
						for (s = 0, a = r.selected.length; s < a; s++)
							n[r.selected[s]]
								? (n[r.selected[s]] = 2)
								: r.changed.selected.push(r.selected[s]);
						for (s = 0, a = i.length; s < a; s++)
							1 === n[i[s]] && r.changed.deselected.push(i[s]);
						i = r.selected.slice();
					}
					t.trigger.call(this, e, r);
				}),
					(this.refresh = function (e, r) {
						return (i = []), t.refresh.apply(this, arguments);
					});
			});
		var h,
			_,
			g = d.createElement('I');
		(g.className = 'jstree-icon jstree-checkbox'),
			g.setAttribute('role', 'presentation'),
			(e.jstree.defaults.checkbox = {
				visible: !0,
				three_state: !0,
				whole_node: !0,
				keep_selected_style: !0,
				cascade: '',
				tie_selection: !0,
				cascade_to_disabled: !0,
				cascade_to_hidden: !0
			}),
			(e.jstree.plugins.checkbox = function (i, r) {
				(this.bind = function () {
					r.bind.call(this),
						(this._data.checkbox.uto = !1),
						(this._data.checkbox.selected = []),
						this.settings.checkbox.three_state &&
							(this.settings.checkbox.cascade =
								'up+down+undetermined'),
						this.element
							.on(
								'init.jstree',
								function () {
									(this._data.checkbox.visible = this.settings.checkbox.visible),
										this.settings.checkbox
											.keep_selected_style ||
											this.element.addClass(
												'jstree-checkbox-no-clicked'
											),
										this.settings.checkbox.tie_selection &&
											this.element.addClass(
												'jstree-checkbox-selection'
											);
								}.bind(this)
							)
							.on(
								'loading.jstree',
								function () {
									this[
										this._data.checkbox.visible
											? 'show_checkboxes'
											: 'hide_checkboxes'
									]();
								}.bind(this)
							),
						-1 !==
							this.settings.checkbox.cascade.indexOf(
								'undetermined'
							) &&
							this.element.on(
								'changed.jstree uncheck_node.jstree check_node.jstree uncheck_all.jstree check_all.jstree move_node.jstree copy_node.jstree redraw.jstree open_node.jstree',
								function () {
									this._data.checkbox.uto &&
										clearTimeout(this._data.checkbox.uto),
										(this._data.checkbox.uto = setTimeout(
											this._undetermined.bind(this),
											50
										));
								}.bind(this)
							),
						this.settings.checkbox.tie_selection ||
							this.element.on(
								'model.jstree',
								function (e, t) {
									var i,
										r,
										s = this._model.data,
										a = (s[t.parent], t.nodes);
									for (i = 0, r = a.length; i < r; i++)
										(s[a[i]].state.checked =
											s[a[i]].state.checked ||
											(s[a[i]].original &&
												s[a[i]].original.state &&
												s[a[i]].original.state
													.checked)),
											s[a[i]].state.checked &&
												this._data.checkbox.selected.push(
													a[i]
												);
								}.bind(this)
							),
						(-1 === this.settings.checkbox.cascade.indexOf('up') &&
							-1 ===
								this.settings.checkbox.cascade.indexOf(
									'down'
								)) ||
							this.element
								.on(
									'model.jstree',
									function (t, i) {
										var r,
											s,
											a,
											n,
											o,
											d,
											c = this._model.data,
											l = c[i.parent],
											h = i.nodes,
											_ = [],
											g = this.settings.checkbox.cascade,
											u = this.settings.checkbox
												.tie_selection;
										if (-1 !== g.indexOf('down'))
											if (
												l.state[
													u ? 'selected' : 'checked'
												]
											) {
												for (
													s = 0, a = h.length;
													s < a;
													s++
												)
													c[h[s]].state[
														u
															? 'selected'
															: 'checked'
													] = !0;
												this._data[
													u ? 'core' : 'checkbox'
												].selected = this._data[
													u ? 'core' : 'checkbox'
												].selected.concat(h);
											} else
												for (
													s = 0, a = h.length;
													s < a;
													s++
												)
													if (
														c[h[s]].state[
															u
																? 'selected'
																: 'checked'
														]
													) {
														for (
															n = 0,
																o =
																	c[h[s]]
																		.children_d
																		.length;
															n < o;
															n++
														)
															c[
																c[
																	h[s]
																].children_d[n]
															].state[
																u
																	? 'selected'
																	: 'checked'
															] = !0;
														this._data[
															u
																? 'core'
																: 'checkbox'
														].selected = this._data[
															u
																? 'core'
																: 'checkbox'
														].selected.concat(
															c[h[s]].children_d
														);
													}
										if (-1 !== g.indexOf('up')) {
											for (
												s = 0, a = l.children_d.length;
												s < a;
												s++
											)
												c[l.children_d[s]].children
													.length ||
													_.push(
														c[l.children_d[s]]
															.parent
													);
											for (
												n = 0,
													o = (_ = e.vakata.array_unique(
														_
													)).length;
												n < o;
												n++
											)
												for (
													l = c[_[n]];
													l && l.id !== e.jstree.root;

												) {
													for (
														r = 0,
															s = 0,
															a =
																l.children
																	.length;
														s < a;
														s++
													)
														r +=
															c[l.children[s]]
																.state[
																u
																	? 'selected'
																	: 'checked'
															];
													if (r !== a) break;
													(l.state[
														u
															? 'selected'
															: 'checked'
													] = !0),
														this._data[
															u
																? 'core'
																: 'checkbox'
														].selected.push(l.id),
														(d = this.get_node(
															l,
															!0
														)) &&
															d.length &&
															d
																.attr(
																	'aria-selected',
																	!0
																)
																.children(
																	'.jstree-anchor'
																)
																.addClass(
																	u
																		? 'jstree-clicked'
																		: 'jstree-checked'
																),
														(l = this.get_node(
															l.parent
														));
												}
										}
										this._data[
											u ? 'core' : 'checkbox'
										].selected = e.vakata.array_unique(
											this._data[u ? 'core' : 'checkbox']
												.selected
										);
									}.bind(this)
								)
								.on(
									this.settings.checkbox.tie_selection
										? 'select_node.jstree'
										: 'check_node.jstree',
									function (t, i) {
										var r,
											s,
											a,
											n,
											o = i.node,
											d = this._model.data,
											c = this.get_node(o.parent),
											l = this.settings.checkbox.cascade,
											h = this.settings.checkbox
												.tie_selection,
											_ = {},
											g = this._data[
												h ? 'core' : 'checkbox'
											].selected;
										for (r = 0, s = g.length; r < s; r++)
											_[g[r]] = !0;
										if (-1 !== l.indexOf('down')) {
											var u = this._cascade_new_checked_state(
													o.id,
													!0
												),
												f = o.children_d.concat(o.id);
											for (
												r = 0, s = f.length;
												r < s;
												r++
											)
												u.indexOf(f[r]) > -1
													? (_[f[r]] = !0)
													: delete _[f[r]];
										}
										if (-1 !== l.indexOf('up'))
											for (
												;
												c && c.id !== e.jstree.root;

											) {
												for (
													a = 0,
														r = 0,
														s = c.children.length;
													r < s;
													r++
												)
													a +=
														d[c.children[r]].state[
															h
																? 'selected'
																: 'checked'
														];
												if (a !== s) break;
												(c.state[
													h ? 'selected' : 'checked'
												] = !0),
													(_[c.id] = !0),
													(n = this.get_node(
														c,
														!0
													)) &&
														n.length &&
														n
															.attr(
																'aria-selected',
																!0
															)
															.children(
																'.jstree-anchor'
															)
															.addClass(
																h
																	? 'jstree-clicked'
																	: 'jstree-checked'
															),
													(c = this.get_node(
														c.parent
													));
											}
										for (r in ((g = []), _))
											_.hasOwnProperty(r) && g.push(r);
										this._data[
											h ? 'core' : 'checkbox'
										].selected = g;
									}.bind(this)
								)
								.on(
									this.settings.checkbox.tie_selection
										? 'deselect_all.jstree'
										: 'uncheck_all.jstree',
									function (t, i) {
										var r,
											s,
											a,
											n = this.get_node(e.jstree.root),
											o = this._model.data;
										for (
											r = 0, s = n.children_d.length;
											r < s;
											r++
										)
											(a = o[n.children_d[r]]) &&
												a.original &&
												a.original.state &&
												a.original.state.undetermined &&
												(a.original.state.undetermined = !1);
									}.bind(this)
								)
								.on(
									this.settings.checkbox.tie_selection
										? 'deselect_node.jstree'
										: 'uncheck_node.jstree',
									function (t, i) {
										var r,
											s,
											a,
											n = i.node,
											o =
												(this.get_node(n, !0),
												this.settings.checkbox.cascade),
											d = this.settings.checkbox
												.tie_selection,
											c = this._data[
												d ? 'core' : 'checkbox'
											].selected,
											l = n.children_d.concat(n.id);
										if (-1 !== o.indexOf('down')) {
											var h = this._cascade_new_checked_state(
												n.id,
												!1
											);
											c = e.vakata.array_filter(
												c,
												function (e) {
													return (
														-1 === l.indexOf(e) ||
														h.indexOf(e) > -1
													);
												}
											);
										}
										if (
											-1 !== o.indexOf('up') &&
											-1 === c.indexOf(n.id)
										) {
											for (
												r = 0, s = n.parents.length;
												r < s;
												r++
											)
												((a = this._model.data[
													n.parents[r]
												]).state[
													d ? 'selected' : 'checked'
												] = !1),
													a &&
														a.original &&
														a.original.state &&
														a.original.state
															.undetermined &&
														(a.original.state.undetermined = !1),
													(a = this.get_node(
														n.parents[r],
														!0
													)) &&
														a.length &&
														a
															.attr(
																'aria-selected',
																!1
															)
															.children(
																'.jstree-anchor'
															)
															.removeClass(
																d
																	? 'jstree-clicked'
																	: 'jstree-checked'
															);
											c = e.vakata.array_filter(
												c,
												function (e) {
													return (
														-1 ===
														n.parents.indexOf(e)
													);
												}
											);
										}
										this._data[
											d ? 'core' : 'checkbox'
										].selected = c;
									}.bind(this)
								),
						-1 !== this.settings.checkbox.cascade.indexOf('up') &&
							this.element
								.on(
									'delete_node.jstree',
									function (t, i) {
										for (
											var r,
												s,
												a,
												n,
												o = this.get_node(i.parent),
												d = this._model.data,
												c = this.settings.checkbox
													.tie_selection;
											o &&
											o.id !== e.jstree.root &&
											!o.state[
												c ? 'selected' : 'checked'
											];

										) {
											for (
												a = 0,
													r = 0,
													s = o.children.length;
												r < s;
												r++
											)
												a +=
													d[o.children[r]].state[
														c
															? 'selected'
															: 'checked'
													];
											if (!(s > 0 && a === s)) break;
											(o.state[
												c ? 'selected' : 'checked'
											] = !0),
												this._data[
													c ? 'core' : 'checkbox'
												].selected.push(o.id),
												(n = this.get_node(o, !0)) &&
													n.length &&
													n
														.attr(
															'aria-selected',
															!0
														)
														.children(
															'.jstree-anchor'
														)
														.addClass(
															c
																? 'jstree-clicked'
																: 'jstree-checked'
														),
												(o = this.get_node(o.parent));
										}
									}.bind(this)
								)
								.on(
									'move_node.jstree',
									function (t, i) {
										var r,
											s,
											a,
											n,
											o,
											d = i.is_multi,
											c = i.old_parent,
											l = this.get_node(i.parent),
											h = this._model.data,
											_ = this.settings.checkbox
												.tie_selection;
										if (!d)
											for (
												r = this.get_node(c);
												r &&
												r.id !== e.jstree.root &&
												!r.state[
													_ ? 'selected' : 'checked'
												];

											) {
												for (
													s = 0,
														a = 0,
														n = r.children.length;
													a < n;
													a++
												)
													s +=
														h[r.children[a]].state[
															_
																? 'selected'
																: 'checked'
														];
												if (!(n > 0 && s === n)) break;
												(r.state[
													_ ? 'selected' : 'checked'
												] = !0),
													this._data[
														_ ? 'core' : 'checkbox'
													].selected.push(r.id),
													(o = this.get_node(
														r,
														!0
													)) &&
														o.length &&
														o
															.attr(
																'aria-selected',
																!0
															)
															.children(
																'.jstree-anchor'
															)
															.addClass(
																_
																	? 'jstree-clicked'
																	: 'jstree-checked'
															),
													(r = this.get_node(
														r.parent
													));
											}
										for (
											r = l;
											r && r.id !== e.jstree.root;

										) {
											for (
												s = 0,
													a = 0,
													n = r.children.length;
												a < n;
												a++
											)
												s +=
													h[r.children[a]].state[
														_
															? 'selected'
															: 'checked'
													];
											if (s === n)
												r.state[
													_ ? 'selected' : 'checked'
												] ||
													((r.state[
														_
															? 'selected'
															: 'checked'
													] = !0),
													this._data[
														_ ? 'core' : 'checkbox'
													].selected.push(r.id),
													(o = this.get_node(
														r,
														!0
													)) &&
														o.length &&
														o
															.attr(
																'aria-selected',
																!0
															)
															.children(
																'.jstree-anchor'
															)
															.addClass(
																_
																	? 'jstree-clicked'
																	: 'jstree-checked'
															));
											else {
												if (
													!r.state[
														_
															? 'selected'
															: 'checked'
													]
												)
													break;
												(r.state[
													_ ? 'selected' : 'checked'
												] = !1),
													(this._data[
														_ ? 'core' : 'checkbox'
													].selected = e.vakata.array_remove_item(
														this._data[
															_
																? 'core'
																: 'checkbox'
														].selected,
														r.id
													)),
													(o = this.get_node(
														r,
														!0
													)) &&
														o.length &&
														o
															.attr(
																'aria-selected',
																!1
															)
															.children(
																'.jstree-anchor'
															)
															.removeClass(
																_
																	? 'jstree-clicked'
																	: 'jstree-checked'
															);
											}
											r = this.get_node(r.parent);
										}
									}.bind(this)
								);
				}),
					(this.get_undetermined = function (i) {
						if (
							-1 ===
							this.settings.checkbox.cascade.indexOf(
								'undetermined'
							)
						)
							return [];
						var r,
							s,
							a,
							n,
							o = {},
							d = this._model.data,
							c = this.settings.checkbox.tie_selection,
							l = this._data[c ? 'core' : 'checkbox'].selected,
							h = [],
							_ = this,
							g = [];
						for (r = 0, s = l.length; r < s; r++)
							if (d[l[r]] && d[l[r]].parents)
								for (
									a = 0, n = d[l[r]].parents.length;
									a < n && o[d[l[r]].parents[a]] === t;
									a++
								)
									d[l[r]].parents[a] !== e.jstree.root &&
										((o[d[l[r]].parents[a]] = !0),
										h.push(d[l[r]].parents[a]));
						for (
							this.element
								.find('.jstree-closed')
								.not(':has(.jstree-children)')
								.each(function () {
									var i,
										c = _.get_node(this);
									if (c)
										if (c.state.loaded) {
											for (
												r = 0, s = c.children_d.length;
												r < s;
												r++
											)
												if (
													!(i = d[c.children_d[r]])
														.state.loaded &&
													i.original &&
													i.original.state &&
													i.original.state
														.undetermined &&
													!0 ===
														i.original.state
															.undetermined
												)
													for (
														o[i.id] === t &&
															i.id !==
																e.jstree.root &&
															((o[i.id] = !0),
															h.push(i.id)),
															a = 0,
															n =
																i.parents
																	.length;
														a < n;
														a++
													)
														o[i.parents[a]] === t &&
															i.parents[a] !==
																e.jstree.root &&
															((o[
																i.parents[a]
															] = !0),
															h.push(
																i.parents[a]
															));
										} else if (
											c.original &&
											c.original.state &&
											c.original.state.undetermined &&
											!0 === c.original.state.undetermined
										)
											for (
												o[c.id] === t &&
													c.id !== e.jstree.root &&
													((o[c.id] = !0),
													h.push(c.id)),
													a = 0,
													n = c.parents.length;
												a < n;
												a++
											)
												o[c.parents[a]] === t &&
													c.parents[a] !==
														e.jstree.root &&
													((o[c.parents[a]] = !0),
													h.push(c.parents[a]));
								}),
								r = 0,
								s = h.length;
							r < s;
							r++
						)
							d[h[r]].state[c ? 'selected' : 'checked'] ||
								g.push(i ? d[h[r]] : h[r]);
						return g;
					}),
					(this._undetermined = function () {
						if (null !== this.element) {
							var e,
								t,
								i,
								r = this.get_undetermined(!1);
							for (
								this.element
									.find('.jstree-undetermined')
									.removeClass('jstree-undetermined'),
									e = 0,
									t = r.length;
								e < t;
								e++
							)
								(i = this.get_node(r[e], !0)) &&
									i.length &&
									i
										.children('.jstree-anchor')
										.children('.jstree-checkbox')
										.addClass('jstree-undetermined');
						}
					}),
					(this.redraw_node = function (e, t, i, s) {
						if ((e = r.redraw_node.apply(this, arguments))) {
							var a,
								n,
								o = null,
								d = null;
							for (a = 0, n = e.childNodes.length; a < n; a++)
								if (
									e.childNodes[a] &&
									e.childNodes[a].className &&
									-1 !==
										e.childNodes[a].className.indexOf(
											'jstree-anchor'
										)
								) {
									o = e.childNodes[a];
									break;
								}
							o &&
								(!this.settings.checkbox.tie_selection &&
									this._model.data[e.id].state.checked &&
									(o.className += ' jstree-checked'),
								(d = g.cloneNode(!1)),
								this._model.data[e.id].state
									.checkbox_disabled &&
									(d.className +=
										' jstree-checkbox-disabled'),
								o.insertBefore(d, o.childNodes[0]));
						}
						return (
							i ||
								-1 ===
									this.settings.checkbox.cascade.indexOf(
										'undetermined'
									) ||
								(this._data.checkbox.uto &&
									clearTimeout(this._data.checkbox.uto),
								(this._data.checkbox.uto = setTimeout(
									this._undetermined.bind(this),
									50
								))),
							e
						);
					}),
					(this.show_checkboxes = function () {
						(this._data.core.themes.checkboxes = !0),
							this.get_container_ul().removeClass(
								'jstree-no-checkboxes'
							);
					}),
					(this.hide_checkboxes = function () {
						(this._data.core.themes.checkboxes = !1),
							this.get_container_ul().addClass(
								'jstree-no-checkboxes'
							);
					}),
					(this.toggle_checkboxes = function () {
						this._data.core.themes.checkboxes
							? this.hide_checkboxes()
							: this.show_checkboxes();
					}),
					(this.is_undetermined = function (t) {
						t = this.get_node(t);
						var i,
							r,
							s = this.settings.checkbox.cascade,
							a = this.settings.checkbox.tie_selection,
							n = this._data[a ? 'core' : 'checkbox'].selected,
							o = this._model.data;
						if (
							!t ||
							!0 === t.state[a ? 'selected' : 'checked'] ||
							-1 === s.indexOf('undetermined') ||
							(-1 === s.indexOf('down') && -1 === s.indexOf('up'))
						)
							return !1;
						if (
							!t.state.loaded &&
							!0 === t.original.state.undetermined
						)
							return !0;
						for (i = 0, r = t.children_d.length; i < r; i++)
							if (
								-1 !== e.inArray(t.children_d[i], n) ||
								(!o[t.children_d[i]].state.loaded &&
									o[t.children_d[i]].original.state
										.undetermined)
							)
								return !0;
						return !1;
					}),
					(this.disable_checkbox = function (t) {
						var i, r, s;
						if (e.vakata.is_array(t)) {
							for (i = 0, r = (t = t.slice()).length; i < r; i++)
								this.disable_checkbox(t[i]);
							return !0;
						}
						if (!(t = this.get_node(t)) || t.id === e.jstree.root)
							return !1;
						(s = this.get_node(t, !0)),
							t.state.checkbox_disabled ||
								((t.state.checkbox_disabled = !0),
								s &&
									s.length &&
									s
										.children('.jstree-anchor')
										.children('.jstree-checkbox')
										.addClass('jstree-checkbox-disabled'),
								this.trigger('disable_checkbox', { node: t }));
					}),
					(this.enable_checkbox = function (t) {
						var i, r, s;
						if (e.vakata.is_array(t)) {
							for (i = 0, r = (t = t.slice()).length; i < r; i++)
								this.enable_checkbox(t[i]);
							return !0;
						}
						if (!(t = this.get_node(t)) || t.id === e.jstree.root)
							return !1;
						(s = this.get_node(t, !0)),
							t.state.checkbox_disabled &&
								((t.state.checkbox_disabled = !1),
								s &&
									s.length &&
									s
										.children('.jstree-anchor')
										.children('.jstree-checkbox')
										.removeClass(
											'jstree-checkbox-disabled'
										),
								this.trigger('enable_checkbox', { node: t }));
					}),
					(this.activate_node = function (t, i) {
						return (
							!e(i.target).hasClass('jstree-checkbox-disabled') &&
							(this.settings.checkbox.tie_selection &&
								(this.settings.checkbox.whole_node ||
									e(i.target).hasClass('jstree-checkbox')) &&
								(i.ctrlKey = !0),
							this.settings.checkbox.tie_selection ||
							(!this.settings.checkbox.whole_node &&
								!e(i.target).hasClass('jstree-checkbox'))
								? r.activate_node.call(this, t, i)
								: !this.is_disabled(t) &&
								  (this.is_checked(t)
										? this.uncheck_node(t, i)
										: this.check_node(t, i),
								  void this.trigger('activate_node', {
										node: this.get_node(t)
								  })))
						);
					}),
					(this._cascade_new_checked_state = function (e, t) {
						var i,
							r,
							s,
							a = this.settings.checkbox.tie_selection,
							n = this._model.data[e],
							o = [],
							d = [];
						if (
							(!this.settings.checkbox.cascade_to_disabled &&
								n.state.disabled) ||
							(!this.settings.checkbox.cascade_to_hidden &&
								n.state.hidden)
						)
							(s = this.get_checked_descendants(e)),
								n.state[a ? 'selected' : 'checked'] &&
									s.push(n.id),
								(o = o.concat(s));
						else {
							if (n.children)
								for (i = 0, r = n.children.length; i < r; i++) {
									var c = n.children[i];
									(s = this._cascade_new_checked_state(c, t)),
										(o = o.concat(s)),
										s.indexOf(c) > -1 && d.push(c);
								}
							var l = this.get_node(n, !0),
								h =
									d.length > 0 &&
									d.length < n.children.length;
							n.original &&
								n.original.state &&
								n.original.state.undetermined &&
								(n.original.state.undetermined = h),
								h
									? ((n.state[
											a ? 'selected' : 'checked'
									  ] = !1),
									  l
											.attr('aria-selected', !1)
											.children('.jstree-anchor')
											.removeClass(
												a
													? 'jstree-clicked'
													: 'jstree-checked'
											))
									: t && d.length === n.children.length
									? ((n.state[
											a ? 'selected' : 'checked'
									  ] = t),
									  o.push(n.id),
									  l
											.attr('aria-selected', !0)
											.children('.jstree-anchor')
											.addClass(
												a
													? 'jstree-clicked'
													: 'jstree-checked'
											))
									: ((n.state[
											a ? 'selected' : 'checked'
									  ] = !1),
									  l
											.attr('aria-selected', !1)
											.children('.jstree-anchor')
											.removeClass(
												a
													? 'jstree-clicked'
													: 'jstree-checked'
											));
						}
						return o;
					}),
					(this.get_checked_descendants = function (t) {
						var i = this,
							r = i.settings.checkbox.tie_selection,
							s = i._model.data[t];
						return e.vakata.array_filter(
							s.children_d,
							function (e) {
								return i._model.data[e].state[
									r ? 'selected' : 'checked'
								];
							}
						);
					}),
					(this.check_node = function (t, i) {
						if (this.settings.checkbox.tie_selection)
							return this.select_node(t, !1, !0, i);
						var r, s, a;
						if (e.vakata.is_array(t)) {
							for (s = 0, a = (t = t.slice()).length; s < a; s++)
								this.check_node(t[s], i);
							return !0;
						}
						if (!(t = this.get_node(t)) || t.id === e.jstree.root)
							return !1;
						(r = this.get_node(t, !0)),
							t.state.checked ||
								((t.state.checked = !0),
								this._data.checkbox.selected.push(t.id),
								r &&
									r.length &&
									r
										.children('.jstree-anchor')
										.addClass('jstree-checked'),
								this.trigger('check_node', {
									node: t,
									selected: this._data.checkbox.selected,
									event: i
								}));
					}),
					(this.uncheck_node = function (t, i) {
						if (this.settings.checkbox.tie_selection)
							return this.deselect_node(t, !1, i);
						var r, s, a;
						if (e.vakata.is_array(t)) {
							for (r = 0, s = (t = t.slice()).length; r < s; r++)
								this.uncheck_node(t[r], i);
							return !0;
						}
						if (!(t = this.get_node(t)) || t.id === e.jstree.root)
							return !1;
						(a = this.get_node(t, !0)),
							t.state.checked &&
								((t.state.checked = !1),
								(this._data.checkbox.selected = e.vakata.array_remove_item(
									this._data.checkbox.selected,
									t.id
								)),
								a.length &&
									a
										.children('.jstree-anchor')
										.removeClass('jstree-checked'),
								this.trigger('uncheck_node', {
									node: t,
									selected: this._data.checkbox.selected,
									event: i
								}));
					}),
					(this.check_all = function () {
						if (this.settings.checkbox.tie_selection)
							return this.select_all();
						var t, i;
						this._data.checkbox.selected.concat([]);
						for (
							this._data.checkbox.selected = this._model.data[
								e.jstree.root
							].children_d.concat(),
								t = 0,
								i = this._data.checkbox.selected.length;
							t < i;
							t++
						)
							this._model.data[this._data.checkbox.selected[t]] &&
								(this._model.data[
									this._data.checkbox.selected[t]
								].state.checked = !0);
						this.redraw(!0),
							this.trigger('check_all', {
								selected: this._data.checkbox.selected
							});
					}),
					(this.uncheck_all = function () {
						if (this.settings.checkbox.tie_selection)
							return this.deselect_all();
						var e,
							t,
							i = this._data.checkbox.selected.concat([]);
						for (
							e = 0, t = this._data.checkbox.selected.length;
							e < t;
							e++
						)
							this._model.data[this._data.checkbox.selected[e]] &&
								(this._model.data[
									this._data.checkbox.selected[e]
								].state.checked = !1);
						(this._data.checkbox.selected = []),
							this.element
								.find('.jstree-checked')
								.removeClass('jstree-checked'),
							this.trigger('uncheck_all', {
								selected: this._data.checkbox.selected,
								node: i
							});
					}),
					(this.is_checked = function (t) {
						return this.settings.checkbox.tie_selection
							? this.is_selected(t)
							: !(
									!(t = this.get_node(t)) ||
									t.id === e.jstree.root
							  ) && t.state.checked;
					}),
					(this.get_checked = function (t) {
						return this.settings.checkbox.tie_selection
							? this.get_selected(t)
							: t
							? e.map(
									this._data.checkbox.selected,
									function (e) {
										return this.get_node(e);
									}.bind(this)
							  )
							: this._data.checkbox.selected.slice();
					}),
					(this.get_top_checked = function (t) {
						if (this.settings.checkbox.tie_selection)
							return this.get_top_selected(t);
						var i,
							r,
							s,
							a,
							n = this.get_checked(!0),
							o = {};
						for (i = 0, r = n.length; i < r; i++) o[n[i].id] = n[i];
						for (i = 0, r = n.length; i < r; i++)
							for (s = 0, a = n[i].children_d.length; s < a; s++)
								o[n[i].children_d[s]] &&
									delete o[n[i].children_d[s]];
						for (i in ((n = []), o))
							o.hasOwnProperty(i) && n.push(i);
						return t
							? e.map(
									n,
									function (e) {
										return this.get_node(e);
									}.bind(this)
							  )
							: n;
					}),
					(this.get_bottom_checked = function (t) {
						if (this.settings.checkbox.tie_selection)
							return this.get_bottom_selected(t);
						var i,
							r,
							s = this.get_checked(!0),
							a = [];
						for (i = 0, r = s.length; i < r; i++)
							s[i].children.length || a.push(s[i].id);
						return t
							? e.map(
									a,
									function (e) {
										return this.get_node(e);
									}.bind(this)
							  )
							: a;
					}),
					(this.load_node = function (t, i) {
						var s, a, n;
						if (
							!e.vakata.is_array(t) &&
							!this.settings.checkbox.tie_selection &&
							(n = this.get_node(t)) &&
							n.state.loaded
						)
							for (s = 0, a = n.children_d.length; s < a; s++)
								this._model.data[n.children_d[s]].state
									.checked &&
									(!0,
									(this._data.checkbox.selected = e.vakata.array_remove_item(
										this._data.checkbox.selected,
										n.children_d[s]
									)));
						return r.load_node.apply(this, arguments);
					}),
					(this.get_state = function () {
						var e = r.get_state.apply(this, arguments);
						return (
							this.settings.checkbox.tie_selection ||
								(e.checkbox = this._data.checkbox.selected.slice()),
							e
						);
					}),
					(this.set_state = function (t, i) {
						var s = r.set_state.apply(this, arguments);
						if (s && t.checkbox) {
							if (!this.settings.checkbox.tie_selection) {
								this.uncheck_all();
								var a = this;
								e.each(t.checkbox, function (e, t) {
									a.check_node(t);
								});
							}
							return delete t.checkbox, this.set_state(t, i), !1;
						}
						return s;
					}),
					(this.refresh = function (e, t) {
						return (
							this.settings.checkbox.tie_selection &&
								(this._data.checkbox.selected = []),
							r.refresh.apply(this, arguments)
						);
					});
			}),
			(e.jstree.defaults.conditionalselect = function () {
				return !0;
			}),
			(e.jstree.plugins.conditionalselect = function (e, t) {
				this.activate_node = function (e, i) {
					if (
						this.settings.conditionalselect.call(
							this,
							this.get_node(e),
							i
						)
					)
						return t.activate_node.call(this, e, i);
				};
			}),
			(e.jstree.defaults.contextmenu = {
				select_node: !0,
				show_at_node: !0,
				items: function (t, i) {
					return {
						create: {
							separator_before: !1,
							separator_after: !0,
							_disabled: !1,
							label: 'Create',
							action: function (t) {
								var i = e.jstree.reference(t.reference),
									r = i.get_node(t.reference);
								i.create_node(r, {}, 'last', function (e) {
									try {
										i.edit(e);
									} catch (t) {
										setTimeout(function () {
											i.edit(e);
										}, 0);
									}
								});
							}
						},
						rename: {
							separator_before: !1,
							separator_after: !1,
							_disabled: !1,
							label: 'Rename',
							/*!
					"shortcut"			: 113,
					"shortcut_label"	: 'F2',
					"icon"				: "glyphicon glyphicon-leaf",
					*/
							action: function (t) {
								var i = e.jstree.reference(t.reference),
									r = i.get_node(t.reference);
								i.edit(r);
							}
						},
						remove: {
							separator_before: !1,
							icon: !1,
							separator_after: !1,
							_disabled: !1,
							label: 'Delete',
							action: function (t) {
								var i = e.jstree.reference(t.reference),
									r = i.get_node(t.reference);
								i.is_selected(r)
									? i.delete_node(i.get_selected())
									: i.delete_node(r);
							}
						},
						ccp: {
							separator_before: !0,
							icon: !1,
							separator_after: !1,
							label: 'Edit',
							action: !1,
							submenu: {
								cut: {
									separator_before: !1,
									separator_after: !1,
									label: 'Cut',
									action: function (t) {
										var i = e.jstree.reference(t.reference),
											r = i.get_node(t.reference);
										i.is_selected(r)
											? i.cut(i.get_top_selected())
											: i.cut(r);
									}
								},
								copy: {
									separator_before: !1,
									icon: !1,
									separator_after: !1,
									label: 'Copy',
									action: function (t) {
										var i = e.jstree.reference(t.reference),
											r = i.get_node(t.reference);
										i.is_selected(r)
											? i.copy(i.get_top_selected())
											: i.copy(r);
									}
								},
								paste: {
									separator_before: !1,
									icon: !1,
									_disabled: function (t) {
										return !e.jstree
											.reference(t.reference)
											.can_paste();
									},
									separator_after: !1,
									label: 'Paste',
									action: function (t) {
										var i = e.jstree.reference(t.reference),
											r = i.get_node(t.reference);
										i.paste(r);
									}
								}
							}
						}
					};
				}
			}),
			(e.jstree.plugins.contextmenu = function (i, r) {
				(this.bind = function () {
					r.bind.call(this);
					var t,
						i,
						s = 0,
						a = null;
					this.element
						.on(
							'init.jstree loading.jstree ready.jstree',
							function () {
								this.get_container_ul().addClass(
									'jstree-contextmenu'
								);
							}.bind(this)
						)
						.on(
							'contextmenu.jstree',
							'.jstree-anchor',
							function (e, t) {
								'input' !== e.target.tagName.toLowerCase() &&
									(e.preventDefault(),
									(s = e.ctrlKey ? +new Date() : 0),
									(t || a) && (s = +new Date() + 1e4),
									a && clearTimeout(a),
									this.is_loading(e.currentTarget) ||
										this.show_contextmenu(
											e.currentTarget,
											e.pageX,
											e.pageY,
											e
										));
							}.bind(this)
						)
						.on(
							'click.jstree',
							'.jstree-anchor',
							function (t) {
								this._data.contextmenu.visible &&
									(!s || +new Date() - s > 250) &&
									e.vakata.context.hide(),
									(s = 0);
							}.bind(this)
						)
						.on(
							'touchstart.jstree',
							'.jstree-anchor',
							function (r) {
								r.originalEvent &&
									r.originalEvent.changedTouches &&
									r.originalEvent.changedTouches[0] &&
									((t =
										r.originalEvent.changedTouches[0]
											.clientX),
									(i =
										r.originalEvent.changedTouches[0]
											.clientY),
									(a = setTimeout(function () {
										e(r.currentTarget).trigger(
											'contextmenu',
											!0
										);
									}, 750)));
							}
						)
						.on('touchmove.vakata.jstree', function (r) {
							a &&
								r.originalEvent &&
								r.originalEvent.changedTouches &&
								r.originalEvent.changedTouches[0] &&
								(Math.abs(
									t -
										r.originalEvent.changedTouches[0]
											.clientX
								) > 10 ||
									Math.abs(
										i -
											r.originalEvent.changedTouches[0]
												.clientY
									) > 10) &&
								(clearTimeout(a), e.vakata.context.hide());
						})
						.on('touchend.vakata.jstree', function (e) {
							a && clearTimeout(a);
						}),
						/*!
			if(!('oncontextmenu' in document.body) && ('ontouchstart' in document.body)) {
				var el = null, tm = null;
				this.element
					.on("touchstart", ".jstree-anchor", function (e) {
						el = e.currentTarget;
						tm = +new Date();
						$(document).one("touchend", function (e) {
							e.target = document.elementFromPoint(e.originalEvent.targetTouches[0].pageX - window.pageXOffset, e.originalEvent.targetTouches[0].pageY - window.pageYOffset);
							e.currentTarget = e.target;
							tm = ((+(new Date())) - tm);
							if(e.target === el && tm > 600 && tm < 1000) {
								e.preventDefault();
								$(el).trigger('contextmenu', e);
							}
							el = null;
							tm = null;
						});
					});
			}
			*/
						e(d).on(
							'context_hide.vakata.jstree',
							function (t, i) {
								(this._data.contextmenu.visible = !1),
									e(i.reference).removeClass(
										'jstree-context'
									);
							}.bind(this)
						);
				}),
					(this.teardown = function () {
						this._data.contextmenu.visible &&
							e.vakata.context.hide(),
							e(d).off('context_hide.vakata.jstree'),
							r.teardown.call(this);
					}),
					(this.show_contextmenu = function (i, r, s, a) {
						if (!(i = this.get_node(i)) || i.id === e.jstree.root)
							return !1;
						var n = this.settings.contextmenu,
							o = this.get_node(i, !0).children('.jstree-anchor'),
							d = !1,
							c = !1;
						(n.show_at_node || r === t || s === t) &&
							((d = o.offset()),
							(r = d.left),
							(s = d.top + this._data.core.li_height)),
							this.settings.contextmenu.select_node &&
								!this.is_selected(i) &&
								this.activate_node(i, a),
							(c = n.items),
							e.vakata.is_function(c) &&
								(c = c.call(
									this,
									i,
									function (e) {
										this._show_contextmenu(i, r, s, e);
									}.bind(this)
								)),
							e.isPlainObject(c) &&
								this._show_contextmenu(i, r, s, c);
					}),
					(this._show_contextmenu = function (t, i, r, s) {
						var a = this.get_node(t, !0).children('.jstree-anchor');
						e(d).one(
							'context_show.vakata.jstree',
							function (t, i) {
								var r =
									'jstree-contextmenu jstree-' +
									this.get_theme() +
									'-contextmenu';
								e(i.element).addClass(r),
									a.addClass('jstree-context');
							}.bind(this)
						),
							(this._data.contextmenu.visible = !0),
							e.vakata.context.show(a, { x: i, y: r }, s),
							this.trigger('show_contextmenu', {
								node: t,
								x: i,
								y: r
							});
					});
			}),
			(function (e) {
				var t = !1,
					i = {
						element: !1,
						reference: !1,
						position_x: 0,
						position_y: 0,
						items: [],
						html: '',
						is_visible: !1
					};
				(e.vakata.context = {
					settings: { hide_onmouseleave: 0, icons: !0 },
					_trigger: function (t) {
						e(d).triggerHandler('context_' + t + '.vakata', {
							reference: i.reference,
							element: i.element,
							position: { x: i.position_x, y: i.position_y }
						});
					},
					_execute: function (t) {
						return (
							!(
								!(t = i.items[t]) ||
								(t._disabled &&
									(!e.vakata.is_function(t._disabled) ||
										t._disabled({
											item: t,
											reference: i.reference,
											element: i.element
										}))) ||
								!t.action
							) &&
							t.action.call(null, {
								item: t,
								reference: i.reference,
								element: i.element,
								position: { x: i.position_x, y: i.position_y }
							})
						);
					},
					_parse: function (t, r) {
						if (!t) return !1;
						r || ((i.html = ''), (i.items = []));
						var s,
							a = '',
							n = !1;
						return (
							r && (a += '<ul>'),
							e.each(t, function (t, r) {
								if (!r) return !0;
								i.items.push(r),
									!n &&
										r.separator_before &&
										(a +=
											"<li class='vakata-context-separator'><a href='#' " +
											(e.vakata.context.settings.icons
												? ''
												: 'class="vakata-context-no-icons"') +
											'>&#160;</a></li>'),
									(n = !1),
									(a +=
										"<li class='" +
										(r._class || '') +
										(!0 === r._disabled ||
										(e.vakata.is_function(r._disabled) &&
											r._disabled({
												item: r,
												reference: i.reference,
												element: i.element
											}))
											? ' vakata-contextmenu-disabled '
											: '') +
										"' " +
										(r.shortcut
											? " data-shortcut='" +
											  r.shortcut +
											  "' "
											: '') +
										'>'),
									(a +=
										"<a href='#' rel='" +
										(i.items.length - 1) +
										"' " +
										(r.title
											? "title='" + r.title + "'"
											: '') +
										'>'),
									e.vakata.context.settings.icons &&
										((a += '<i '),
										r.icon &&
											(-1 !== r.icon.indexOf('/') ||
											-1 !== r.icon.indexOf('.')
												? (a +=
														' style=\'background:url("' +
														r.icon +
														'") center center no-repeat\' ')
												: (a +=
														" class='" +
														r.icon +
														"' ")),
										(a +=
											"></i><span class='vakata-contextmenu-sep'>&#160;</span>")),
									(a +=
										(e.vakata.is_function(r.label)
											? r.label({
													item: t,
													reference: i.reference,
													element: i.element
											  })
											: r.label) +
										(r.shortcut
											? ' <span class="vakata-contextmenu-shortcut vakata-contextmenu-shortcut-' +
											  r.shortcut +
											  '">' +
											  (r.shortcut_label || '') +
											  '</span>'
											: '') +
										'</a>'),
									r.submenu &&
										(s = e.vakata.context._parse(
											r.submenu,
											!0
										)) &&
										(a += s),
									(a += '</li>'),
									r.separator_after &&
										((a +=
											"<li class='vakata-context-separator'><a href='#' " +
											(e.vakata.context.settings.icons
												? ''
												: 'class="vakata-context-no-icons"') +
											'>&#160;</a></li>'),
										(n = !0));
							}),
							(a = a.replace(
								/<li class\='vakata-context-separator'\><\/li\>$/,
								''
							)),
							r && (a += '</ul>'),
							r ||
								((i.html = a),
								e.vakata.context._trigger('parse')),
							a.length > 10 && a
						);
					},
					_show_submenu: function (i) {
						if ((i = e(i)).length && i.children('ul').length) {
							var r = i.children('ul'),
								s = i.offset().left,
								a = s + i.outerWidth(),
								n = i.offset().top,
								o = r.width(),
								d = r.height(),
								c = e(window).width() + e(window).scrollLeft(),
								l = e(window).height() + e(window).scrollTop();
							t
								? i[
										a - (o + 10 + i.outerWidth()) < 0
											? 'addClass'
											: 'removeClass'
								  ]('vakata-context-left')
								: i[
										a + o > c && s > c - a
											? 'addClass'
											: 'removeClass'
								  ]('vakata-context-right'),
								n + d + 10 > l && r.css('bottom', '-1px'),
								i.hasClass('vakata-context-right')
									? s < o && r.css('margin-right', s - o)
									: c - a < o &&
									  r.css('margin-left', c - a - o),
								r.show();
						}
					},
					show: function (r, s, a) {
						var n, o, c, l, h, _, g, u;
						switch (
							(i.element &&
								i.element.length &&
								i.element.width(''),
							!0)
						) {
							case !s && !r:
								return !1;
							case !!s && !!r:
								(i.reference = r),
									(i.position_x = s.x),
									(i.position_y = s.y);
								break;
							case !s && !!r:
								(i.reference = r),
									(n = r.offset()),
									(i.position_x = n.left + r.outerHeight()),
									(i.position_y = n.top);
								break;
							case !!s && !r:
								(i.position_x = s.x), (i.position_y = s.y);
						}
						r &&
							!a &&
							e(r).data('vakata_contextmenu') &&
							(a = e(r).data('vakata_contextmenu')),
							e.vakata.context._parse(a) &&
								i.element.html(i.html),
							i.items.length &&
								(i.element.appendTo(d.body),
								(o = i.element),
								(c = i.position_x),
								(l = i.position_y),
								(h = o.width()),
								(_ = o.height()),
								(g =
									e(window).width() + e(window).scrollLeft()),
								(u =
									e(window).height() + e(window).scrollTop()),
								t &&
									(c -= o.outerWidth() - e(r).outerWidth()) <
										e(window).scrollLeft() + 20 &&
									(c = e(window).scrollLeft() + 20),
								c + h + 20 > g && (c = g - (h + 20)),
								l + _ + 20 > u && (l = u - (_ + 20)),
								i.element
									.css({ left: c, top: l })
									.show()
									.find('a')
									.first()
									.trigger('focus')
									.parent()
									.addClass('vakata-context-hover'),
								(i.is_visible = !0),
								e.vakata.context._trigger('show'));
					},
					hide: function () {
						i.is_visible &&
							(i.element
								.hide()
								.find('ul')
								.hide()
								.end()
								.find(':focus')
								.trigger('blur')
								.end()
								.detach(),
							(i.is_visible = !1),
							e.vakata.context._trigger('hide'));
					}
				}),
					e(function () {
						t = 'rtl' === e(d.body).css('direction');
						var r = !1;
						(i.element = e("<ul class='vakata-context'></ul>")),
							i.element
								.on('mouseenter', 'li', function (t) {
									t.stopImmediatePropagation(),
										e.contains(this, t.relatedTarget) ||
											(r && clearTimeout(r),
											i.element
												.find('.vakata-context-hover')
												.removeClass(
													'vakata-context-hover'
												)
												.end(),
											e(this)
												.siblings()
												.find('ul')
												.hide()
												.end()
												.end()
												.parentsUntil(
													'.vakata-context',
													'li'
												)
												.addBack()
												.addClass(
													'vakata-context-hover'
												),
											e.vakata.context._show_submenu(
												this
											));
								})
								.on('mouseleave', 'li', function (t) {
									e.contains(this, t.relatedTarget) ||
										e(this)
											.find('.vakata-context-hover')
											.addBack()
											.removeClass(
												'vakata-context-hover'
											);
								})
								.on('mouseleave', function (t) {
									e(this)
										.find('.vakata-context-hover')
										.removeClass('vakata-context-hover'),
										e.vakata.context.settings
											.hide_onmouseleave &&
											(r = setTimeout(function () {
												e.vakata.context.hide();
											}, e
												.vakata.context.settings.hide_onmouseleave));
								})
								.on('click', 'a', function (t) {
									t.preventDefault(),
										e(this)
											.trigger('blur')
											.parent()
											.hasClass(
												'vakata-context-disabled'
											) ||
											!1 ===
												e.vakata.context._execute(
													e(this).attr('rel')
												) ||
											e.vakata.context.hide();
								})
								.on('keydown', 'a', function (t) {
									var r = null;
									switch (t.which) {
										case 13:
										case 32:
											(t.type = 'click'),
												t.preventDefault(),
												e(t.currentTarget).trigger(t);
											break;
										case 37:
											i.is_visible &&
												(i.element
													.find(
														'.vakata-context-hover'
													)
													.last()
													.closest('li')
													.first()
													.find('ul')
													.hide()
													.find(
														'.vakata-context-hover'
													)
													.removeClass(
														'vakata-context-hover'
													)
													.end()
													.end()
													.children('a')
													.trigger('focus'),
												t.stopImmediatePropagation(),
												t.preventDefault());
											break;
										case 38:
											i.is_visible &&
												((r = i.element
													.find('ul:visible')
													.addBack()
													.last()
													.children(
														'.vakata-context-hover'
													)
													.removeClass(
														'vakata-context-hover'
													)
													.prevAll(
														'li:not(.vakata-context-separator)'
													)
													.first()).length ||
													(r = i.element
														.find('ul:visible')
														.addBack()
														.last()
														.children(
															'li:not(.vakata-context-separator)'
														)
														.last()),
												r
													.addClass(
														'vakata-context-hover'
													)
													.children('a')
													.trigger('focus'),
												t.stopImmediatePropagation(),
												t.preventDefault());
											break;
										case 39:
											i.is_visible &&
												(i.element
													.find(
														'.vakata-context-hover'
													)
													.last()
													.children('ul')
													.show()
													.children(
														'li:not(.vakata-context-separator)'
													)
													.removeClass(
														'vakata-context-hover'
													)
													.first()
													.addClass(
														'vakata-context-hover'
													)
													.children('a')
													.trigger('focus'),
												t.stopImmediatePropagation(),
												t.preventDefault());
											break;
										case 40:
											i.is_visible &&
												((r = i.element
													.find('ul:visible')
													.addBack()
													.last()
													.children(
														'.vakata-context-hover'
													)
													.removeClass(
														'vakata-context-hover'
													)
													.nextAll(
														'li:not(.vakata-context-separator)'
													)
													.first()).length ||
													(r = i.element
														.find('ul:visible')
														.addBack()
														.last()
														.children(
															'li:not(.vakata-context-separator)'
														)
														.first()),
												r
													.addClass(
														'vakata-context-hover'
													)
													.children('a')
													.trigger('focus'),
												t.stopImmediatePropagation(),
												t.preventDefault());
											break;
										case 27:
											e.vakata.context.hide(),
												t.preventDefault();
									}
								})
								.on('keydown', function (e) {
									e.preventDefault();
									var t = i.element
										.find(
											'.vakata-contextmenu-shortcut-' +
												e.which
										)
										.parent();
									t
										.parent()
										.not('.vakata-context-disabled') &&
										t.trigger('click');
								}),
							e(d)
								.on('mousedown.vakata.jstree', function (t) {
									i.is_visible &&
										i.element[0] !== t.target &&
										!e.contains(i.element[0], t.target) &&
										e.vakata.context.hide();
								})
								.on(
									'context_show.vakata.jstree',
									function (e, r) {
										i.element
											.find('li:has(ul)')
											.children('a')
											.addClass('vakata-context-parent'),
											t &&
												i.element
													.addClass(
														'vakata-context-rtl'
													)
													.css('direction', 'rtl'),
											i.element.find('ul').hide().end();
									}
								);
					});
			})(e),
			(e.jstree.defaults.dnd = {
				copy: !0,
				open_timeout: 500,
				is_draggable: !0,
				check_while_dragging: !0,
				always_copy: !1,
				inside_pos: 0,
				drag_selection: !0,
				touch: !0,
				large_drop_target: !1,
				large_drag_target: !1,
				use_html5: !1
			}),
			(e.jstree.plugins.dnd = function (t, i) {
				(this.init = function (e, t) {
					i.init.call(this, e, t),
						(this.settings.dnd.use_html5 =
							this.settings.dnd.use_html5 &&
							'draggable' in d.createElement('span'));
				}),
					(this.bind = function () {
						i.bind.call(this),
							this.element.on(
								this.settings.dnd.use_html5
									? 'dragstart.jstree'
									: 'mousedown.jstree touchstart.jstree',
								this.settings.dnd.large_drag_target
									? '.jstree-node'
									: '.jstree-anchor',
								function (t) {
									if (
										this.settings.dnd.large_drag_target &&
										e(t.target).closest(
											'.jstree-node'
										)[0] !== t.currentTarget
									)
										return !0;
									if (
										'touchstart' === t.type &&
										(!this.settings.dnd.touch ||
											('selected' ===
												this.settings.dnd.touch &&
												!e(t.currentTarget)
													.closest('.jstree-node')
													.children('.jstree-anchor')
													.hasClass(
														'jstree-clicked'
													)))
									)
										return !0;
									var i = this.get_node(t.target),
										r =
											this.is_selected(i) &&
											this.settings.dnd.drag_selection
												? this.get_top_selected().length
												: 1,
										s =
											r > 1
												? r +
												  ' ' +
												  this.get_string('nodes')
												: this.get_text(
														t.currentTarget
												  );
									if (
										(this.settings.core.force_text &&
											(s = e.vakata.html.escape(s)),
										i &&
											i.id &&
											i.id !== e.jstree.root &&
											(1 === t.which ||
												'touchstart' === t.type ||
												'dragstart' === t.type) &&
											(!0 ===
												this.settings.dnd
													.is_draggable ||
												(e.vakata.is_function(
													this.settings.dnd
														.is_draggable
												) &&
													this.settings.dnd.is_draggable.call(
														this,
														r > 1
															? this.get_top_selected(
																	!0
															  )
															: [i],
														t
													))))
									) {
										if (
											((h = {
												jstree: !0,
												origin: this,
												obj: this.get_node(i, !0),
												nodes:
													r > 1
														? this.get_top_selected()
														: [i.id]
											}),
											(_ = t.currentTarget),
											!this.settings.dnd.use_html5)
										)
											return (
												this.element.trigger(
													'mousedown.jstree'
												),
												e.vakata.dnd.start(
													t,
													h,
													'<div id="jstree-dnd" class="jstree-' +
														this.get_theme() +
														' jstree-' +
														this.get_theme() +
														'-' +
														this.get_theme_variant() +
														' ' +
														(this.settings.core
															.themes.responsive
															? ' jstree-dnd-responsive'
															: '') +
														'"><i class="jstree-icon jstree-er"></i>' +
														s +
														'<ins class="jstree-copy">+</ins></div>'
												)
											);
										e.vakata.dnd._trigger('start', t, {
											helper: e(),
											element: _,
											data: h
										});
									}
								}.bind(this)
							),
							this.settings.dnd.use_html5 &&
								this.element
									.on('dragover.jstree', function (t) {
										return (
											t.preventDefault(),
											e.vakata.dnd._trigger('move', t, {
												helper: e(),
												element: _,
												data: h
											}),
											!1
										);
									})
									.on(
										'drop.jstree',
										function (t) {
											return (
												t.preventDefault(),
												e.vakata.dnd._trigger(
													'stop',
													t,
													{
														helper: e(),
														element: _,
														data: h
													}
												),
												!1
											);
										}.bind(this)
									);
					}),
					(this.redraw_node = function (e, t, r, s) {
						if (
							(e = i.redraw_node.apply(this, arguments)) &&
							this.settings.dnd.use_html5
						)
							if (this.settings.dnd.large_drag_target)
								e.setAttribute('draggable', !0);
							else {
								var a,
									n,
									o = null;
								for (a = 0, n = e.childNodes.length; a < n; a++)
									if (
										e.childNodes[a] &&
										e.childNodes[a].className &&
										-1 !==
											e.childNodes[a].className.indexOf(
												'jstree-anchor'
											)
									) {
										o = e.childNodes[a];
										break;
									}
								o && o.setAttribute('draggable', !0);
							}
						return e;
					});
			}),
			e(function () {
				var i = !1,
					r = !1,
					s = !1,
					a = !1,
					n = e('<div id="jstree-marker">&#160;</div>').hide();
				e(d)
					.on('dragover.vakata.jstree', function (t) {
						_ &&
							e.vakata.dnd._trigger('move', t, {
								helper: e(),
								element: _,
								data: h
							});
					})
					.on('drop.vakata.jstree', function (t) {
						_ &&
							(e.vakata.dnd._trigger('stop', t, {
								helper: e(),
								element: _,
								data: h
							}),
							(_ = null),
							(h = null));
					})
					.on('dnd_start.vakata.jstree', function (e, t) {
						(i = !1),
							(s = !1),
							t && t.data && t.data.jstree && n.appendTo(d.body);
					})
					.on('dnd_move.vakata.jstree', function (o, d) {
						var c = d.event.target !== s.target;
						if (
							(a &&
								((d.event &&
									'dragover' === d.event.type &&
									!c) ||
									clearTimeout(a)),
							d &&
								d.data &&
								d.data.jstree &&
								(!d.event.target.id ||
									'jstree-marker' !== d.event.target.id))
						) {
							s = d.event;
							var l,
								h,
								_,
								g,
								u,
								f,
								p,
								m,
								v,
								j,
								k,
								b,
								y,
								x,
								w,
								C,
								N,
								T = e.jstree.reference(d.event.target),
								O = !1,
								A = !1,
								S = !1;
							if (T && T._data && T._data.dnd)
								if (
									(n.attr(
										'class',
										'jstree-' +
											T.get_theme() +
											(T.settings.core.themes.responsive
												? ' jstree-dnd-responsive'
												: '')
									),
									(w =
										d.data.origin &&
										(d.data.origin.settings.dnd
											.always_copy ||
											(d.data.origin.settings.dnd.copy &&
												(d.event.metaKey ||
													d.event.ctrlKey)))),
									d.helper
										.children()
										.attr(
											'class',
											'jstree-' +
												T.get_theme() +
												' jstree-' +
												T.get_theme() +
												'-' +
												T.get_theme_variant() +
												' ' +
												(T.settings.core.themes
													.responsive
													? ' jstree-dnd-responsive'
													: '')
										)
										.find('.jstree-copy')
										.first()
										[w ? 'show' : 'hide'](),
									(d.event.target !== T.element[0] &&
										d.event.target !==
											T.get_container_ul()[0]) ||
										0 !==
											T.get_container_ul().children()
												.length)
								) {
									if (
										(O = T.settings.dnd.large_drop_target
											? e(d.event.target)
													.closest('.jstree-node')
													.children('.jstree-anchor')
											: e(d.event.target).closest(
													'.jstree-anchor'
											  )) &&
										O.length &&
										O.parent().is(
											'.jstree-closed, .jstree-open, .jstree-leaf'
										) &&
										((A = O.offset()),
										(S =
											(d.event.pageY !== t
												? d.event.pageY
												: d.event.originalEvent.pageY) -
											A.top),
										(_ = O.outerHeight()),
										(f =
											S < _ / 3
												? ['b', 'i', 'a']
												: S > _ - _ / 3
												? ['a', 'i', 'b']
												: S > _ / 2
												? ['i', 'a', 'b']
												: ['i', 'b', 'a']),
										e.each(f, function (t, s) {
											switch (s) {
												case 'b':
													(l = A.left - 6),
														(h = A.top),
														(g = T.get_parent(O)),
														(u = O.parent().index()),
														(N = 'jstree-below');
													break;
												case 'i':
													(y =
														T.settings.dnd
															.inside_pos),
														(x = T.get_node(
															O.parent()
														)),
														(l = A.left - 2),
														(h = A.top + _ / 2 + 1),
														(g = x.id),
														(u =
															'first' === y
																? 0
																: 'last' === y
																? x.children
																		.length
																: Math.min(
																		y,
																		x
																			.children
																			.length
																  )),
														(N = 'jstree-inside');
													break;
												case 'a':
													(l = A.left - 6),
														(h = A.top + _),
														(g = T.get_parent(O)),
														(u =
															O.parent().index() +
															1),
														(N = 'jstree-above');
											}
											for (
												p = !0,
													m = 0,
													v = d.data.nodes.length;
												m < v;
												m++
											)
												if (
													((j =
														d.data.origin &&
														(d.data.origin.settings
															.dnd.always_copy ||
															(d.data.origin
																.settings.dnd
																.copy &&
																(d.event
																	.metaKey ||
																	d.event
																		.ctrlKey)))
															? 'copy_node'
															: 'move_node'),
													(k = u),
													'move_node' === j &&
														'a' === s &&
														d.data.origin &&
														d.data.origin === T &&
														g ===
															T.get_parent(
																d.data.nodes[m]
															) &&
														((b = T.get_node(g)),
														k >
															e.inArray(
																d.data.nodes[m],
																b.children
															) && (k -= 1)),
													!(p =
														p &&
														((T &&
															T.settings &&
															T.settings.dnd &&
															!1 ===
																T.settings.dnd
																	.check_while_dragging) ||
															T.check(
																j,
																d.data.origin &&
																	d.data
																		.origin !==
																		T
																	? d.data.origin.get_node(
																			d
																				.data
																				.nodes[
																				m
																			]
																	  )
																	: d.data
																			.nodes[
																			m
																	  ],
																g,
																k,
																{
																	dnd: !0,
																	ref: T.get_node(
																		O.parent()
																	),
																	pos: s,
																	origin:
																		d.data
																			.origin,
																	is_multi:
																		d.data
																			.origin &&
																		d.data
																			.origin !==
																			T,
																	is_foreign: !d
																		.data
																		.origin
																}
															))))
												) {
													T &&
														T.last_error &&
														(r = T.last_error());
													break;
												}
											var o, S;
											if (
												('i' === s &&
													O.parent().is(
														'.jstree-closed'
													) &&
													T.settings.dnd
														.open_timeout &&
													((d.event &&
														'dragover' ===
															d.event.type &&
														!c) ||
														(a && clearTimeout(a),
														(a = setTimeout(
															((o = T),
															(S = O),
															function () {
																o.open_node(S);
															}),
															T.settings.dnd
																.open_timeout
														)))),
												p)
											)
												return (
													(C = T.get_node(
														g,
														!0
													)).hasClass(
														'.jstree-dnd-parent'
													) ||
														(e(
															'.jstree-dnd-parent'
														).removeClass(
															'jstree-dnd-parent'
														),
														C.addClass(
															'jstree-dnd-parent'
														)),
													(i = {
														ins: T,
														par: g,
														pos:
															'i' !== s ||
															'last' !== y ||
															0 !== u ||
															T.is_loaded(x)
																? u
																: 'last'
													}),
													n
														.css({
															left: l + 'px',
															top: h + 'px'
														})
														.show(),
													n
														.removeClass(
															'jstree-above jstree-inside jstree-below'
														)
														.addClass(N),
													d.helper
														.find('.jstree-icon')
														.first()
														.removeClass(
															'jstree-er'
														)
														.addClass('jstree-ok'),
													d.event.originalEvent &&
														d.event.originalEvent
															.dataTransfer &&
														(d.event.originalEvent.dataTransfer.dropEffect = w
															? 'copy'
															: 'move'),
													(r = {}),
													(f = !0),
													!1
												);
										}),
										!0 === f)
									)
										return;
								} else {
									for (
										p = !0, m = 0, v = d.data.nodes.length;
										m < v &&
										(p =
											p &&
											T.check(
												d.data.origin &&
													(d.data.origin.settings.dnd
														.always_copy ||
														(d.data.origin.settings
															.dnd.copy &&
															(d.event.metaKey ||
																d.event
																	.ctrlKey)))
													? 'copy_node'
													: 'move_node',
												d.data.origin &&
													d.data.origin !== T
													? d.data.origin.get_node(
															d.data.nodes[m]
													  )
													: d.data.nodes[m],
												e.jstree.root,
												'last',
												{
													dnd: !0,
													ref: T.get_node(
														e.jstree.root
													),
													pos: 'i',
													origin: d.data.origin,
													is_multi:
														d.data.origin &&
														d.data.origin !== T,
													is_foreign: !d.data.origin
												}
											));
										m++
									);
									if (p)
										return (
											(i = {
												ins: T,
												par: e.jstree.root,
												pos: 'last'
											}),
											n.hide(),
											d.helper
												.find('.jstree-icon')
												.first()
												.removeClass('jstree-er')
												.addClass('jstree-ok'),
											void (
												d.event.originalEvent &&
												d.event.originalEvent
													.dataTransfer &&
												(d.event.originalEvent.dataTransfer.dropEffect = w
													? 'copy'
													: 'move')
											)
										);
								}
							e('.jstree-dnd-parent').removeClass(
								'jstree-dnd-parent'
							),
								(i = !1),
								d.helper
									.find('.jstree-icon')
									.removeClass('jstree-ok')
									.addClass('jstree-er'),
								d.event.originalEvent &&
									d.event.originalEvent.dataTransfer,
								n.hide();
						}
					})
					.on('dnd_scroll.vakata.jstree', function (e, t) {
						t &&
							t.data &&
							t.data.jstree &&
							(n.hide(),
							(i = !1),
							(s = !1),
							t.helper
								.find('.jstree-icon')
								.first()
								.removeClass('jstree-ok')
								.addClass('jstree-er'));
					})
					.on('dnd_stop.vakata.jstree', function (t, o) {
						if (
							(e('.jstree-dnd-parent').removeClass(
								'jstree-dnd-parent'
							),
							a && clearTimeout(a),
							o && o.data && o.data.jstree)
						) {
							n.hide().detach();
							var d,
								c,
								l = [];
							if (i) {
								for (d = 0, c = o.data.nodes.length; d < c; d++)
									l[d] = o.data.origin
										? o.data.origin.get_node(
												o.data.nodes[d]
										  )
										: o.data.nodes[d];
								i.ins[
									o.data.origin &&
									(o.data.origin.settings.dnd.always_copy ||
										(o.data.origin.settings.dnd.copy &&
											(o.event.metaKey ||
												o.event.ctrlKey)))
										? 'copy_node'
										: 'move_node'
								](l, i.par, i.pos, !1, !1, !1, o.data.origin);
							} else
								(d = e(o.event.target).closest('.jstree'))
									.length &&
									r &&
									r.error &&
									'check' === r.error &&
									(d = d.jstree(!0)) &&
									d.settings.core.error.call(this, r);
							(s = !1), (i = !1);
						}
					})
					.on('keyup.jstree keydown.jstree', function (t, o) {
						(o = e.vakata.dnd._get()) &&
							o.data &&
							o.data.jstree &&
							('keyup' === t.type && 27 === t.which
								? (a && clearTimeout(a),
								  (i = !1),
								  (r = !1),
								  (s = !1),
								  (a = !1),
								  n.hide().detach(),
								  e.vakata.dnd._clean())
								: (o.helper
										.find('.jstree-copy')
										.first()
										[
											o.data.origin &&
											(o.data.origin.settings.dnd
												.always_copy ||
												(o.data.origin.settings.dnd
													.copy &&
													(t.metaKey || t.ctrlKey)))
												? 'show'
												: 'hide'
										](),
								  s &&
										((s.metaKey = t.metaKey),
										(s.ctrlKey = t.ctrlKey),
										e.vakata.dnd._trigger('move', s))));
					});
			}),
			(function (e) {
				e.vakata.html = {
					div: e('<div></div>'),
					escape: function (t) {
						return e.vakata.html.div.text(t).html();
					},
					strip: function (t) {
						return e.vakata.html.div
							.empty()
							.append(e.parseHTML(t))
							.text();
					}
				};
				var i = {
					element: !1,
					target: !1,
					is_down: !1,
					is_drag: !1,
					helper: !1,
					helper_w: 0,
					data: !1,
					init_x: 0,
					init_y: 0,
					scroll_l: 0,
					scroll_t: 0,
					scroll_e: !1,
					scroll_i: !1,
					is_touch: !1
				};
				e.vakata.dnd = {
					settings: {
						scroll_speed: 10,
						scroll_proximity: 20,
						helper_left: 5,
						helper_top: 10,
						threshold: 5,
						threshold_touch: 10
					},
					_trigger: function (i, r, s) {
						s === t && (s = e.vakata.dnd._get()),
							(s.event = r),
							e(d).triggerHandler('dnd_' + i + '.vakata', s);
					},
					_get: function () {
						return {
							data: i.data,
							element: i.element,
							helper: i.helper
						};
					},
					_clean: function () {
						i.helper && i.helper.remove(),
							i.scroll_i &&
								(clearInterval(i.scroll_i), (i.scroll_i = !1)),
							(i = {
								element: !1,
								target: !1,
								is_down: !1,
								is_drag: !1,
								helper: !1,
								helper_w: 0,
								data: !1,
								init_x: 0,
								init_y: 0,
								scroll_l: 0,
								scroll_t: 0,
								scroll_e: !1,
								scroll_i: !1,
								is_touch: !1
							}),
							(_ = null),
							e(d).off(
								'mousemove.vakata.jstree touchmove.vakata.jstree',
								e.vakata.dnd.drag
							),
							e(d).off(
								'mouseup.vakata.jstree touchend.vakata.jstree',
								e.vakata.dnd.stop
							);
					},
					_scroll: function (t) {
						if (!i.scroll_e || (!i.scroll_l && !i.scroll_t))
							return (
								i.scroll_i &&
									(clearInterval(i.scroll_i),
									(i.scroll_i = !1)),
								!1
							);
						if (!i.scroll_i)
							return (
								(i.scroll_i = setInterval(
									e.vakata.dnd._scroll,
									100
								)),
								!1
							);
						if (!0 === t) return !1;
						var r = i.scroll_e.scrollTop(),
							s = i.scroll_e.scrollLeft();
						i.scroll_e.scrollTop(
							r + i.scroll_t * e.vakata.dnd.settings.scroll_speed
						),
							i.scroll_e.scrollLeft(
								s +
									i.scroll_l *
										e.vakata.dnd.settings.scroll_speed
							),
							(r === i.scroll_e.scrollTop() &&
								s === i.scroll_e.scrollLeft()) ||
								e.vakata.dnd._trigger('scroll', i.scroll_e);
					},
					start: function (t, r, s) {
						'touchstart' === t.type &&
							t.originalEvent &&
							t.originalEvent.changedTouches &&
							t.originalEvent.changedTouches[0] &&
							((t.pageX =
								t.originalEvent.changedTouches[0].pageX),
							(t.pageY = t.originalEvent.changedTouches[0].pageY),
							(t.target = d.elementFromPoint(
								t.originalEvent.changedTouches[0].pageX -
									window.pageXOffset,
								t.originalEvent.changedTouches[0].pageY -
									window.pageYOffset
							))),
							i.is_drag && e.vakata.dnd.stop({});
						try {
							(t.currentTarget.unselectable = 'on'),
								(t.currentTarget.onselectstart = function () {
									return !1;
								}),
								t.currentTarget.style &&
									((t.currentTarget.style.touchAction =
										'none'),
									(t.currentTarget.style.msTouchAction =
										'none'),
									(t.currentTarget.style.MozUserSelect =
										'none'));
						} catch (e) {}
						return (
							(i.init_x = t.pageX),
							(i.init_y = t.pageY),
							(i.data = r),
							(i.is_down = !0),
							(i.element = t.currentTarget),
							(i.target = t.target),
							(i.is_touch = 'touchstart' === t.type),
							!1 !== s &&
								(i.helper = e("<div id='vakata-dnd'></div>")
									.html(s)
									.css({
										display: 'block',
										margin: '0',
										padding: '0',
										position: 'absolute',
										top: '-2000px',
										lineHeight: '16px',
										zIndex: '10000'
									})),
							e(d).on(
								'mousemove.vakata.jstree touchmove.vakata.jstree',
								e.vakata.dnd.drag
							),
							e(d).on(
								'mouseup.vakata.jstree touchend.vakata.jstree',
								e.vakata.dnd.stop
							),
							!1
						);
					},
					drag: function (t) {
						if (
							('touchmove' === t.type &&
								t.originalEvent &&
								t.originalEvent.changedTouches &&
								t.originalEvent.changedTouches[0] &&
								((t.pageX =
									t.originalEvent.changedTouches[0].pageX),
								(t.pageY =
									t.originalEvent.changedTouches[0].pageY),
								(t.target = d.elementFromPoint(
									t.originalEvent.changedTouches[0].pageX -
										window.pageXOffset,
									t.originalEvent.changedTouches[0].pageY -
										window.pageYOffset
								))),
							i.is_down)
						) {
							if (!i.is_drag) {
								if (
									!(
										Math.abs(t.pageX - i.init_x) >
											(i.is_touch
												? e.vakata.dnd.settings
														.threshold_touch
												: e.vakata.dnd.settings
														.threshold) ||
										Math.abs(t.pageY - i.init_y) >
											(i.is_touch
												? e.vakata.dnd.settings
														.threshold_touch
												: e.vakata.dnd.settings
														.threshold)
									)
								)
									return;
								i.helper &&
									(i.helper.appendTo(d.body),
									(i.helper_w = i.helper.outerWidth())),
									(i.is_drag = !0),
									e(i.target).one('click.vakata', !1),
									e.vakata.dnd._trigger('start', t);
							}
							var r = !1,
								s = !1,
								a = !1,
								n = !1,
								o = !1,
								c = !1,
								l = !1,
								h = !1,
								_ = !1,
								g = !1;
							return (
								(i.scroll_t = 0),
								(i.scroll_l = 0),
								(i.scroll_e = !1),
								e(
									e(t.target)
										.parentsUntil('body')
										.addBack()
										.get()
										.reverse()
								)
									.filter(function () {
										return (
											/^auto|scroll$/.test(
												e(this).css('overflow')
											) &&
											(this.scrollHeight >
												this.offsetHeight ||
												this.scrollWidth >
													this.offsetWidth)
										);
									})
									.each(function () {
										var r = e(this),
											s = r.offset();
										if (
											(this.scrollHeight >
												this.offsetHeight &&
												(s.top + r.height() - t.pageY <
													e.vakata.dnd.settings
														.scroll_proximity &&
													(i.scroll_t = 1),
												t.pageY - s.top <
													e.vakata.dnd.settings
														.scroll_proximity &&
													(i.scroll_t = -1)),
											this.scrollWidth >
												this.offsetWidth &&
												(s.left + r.width() - t.pageX <
													e.vakata.dnd.settings
														.scroll_proximity &&
													(i.scroll_l = 1),
												t.pageX - s.left <
													e.vakata.dnd.settings
														.scroll_proximity &&
													(i.scroll_l = -1)),
											i.scroll_t || i.scroll_l)
										)
											return (i.scroll_e = e(this)), !1;
									}),
								i.scroll_e ||
									((r = e(d)),
									(s = e(window)),
									(a = r.height()),
									(n = s.height()),
									(o = r.width()),
									(c = s.width()),
									(l = r.scrollTop()),
									(h = r.scrollLeft()),
									a > n &&
										t.pageY - l <
											e.vakata.dnd.settings
												.scroll_proximity &&
										(i.scroll_t = -1),
									a > n &&
										n - (t.pageY - l) <
											e.vakata.dnd.settings
												.scroll_proximity &&
										(i.scroll_t = 1),
									o > c &&
										t.pageX - h <
											e.vakata.dnd.settings
												.scroll_proximity &&
										(i.scroll_l = -1),
									o > c &&
										c - (t.pageX - h) <
											e.vakata.dnd.settings
												.scroll_proximity &&
										(i.scroll_l = 1),
									(i.scroll_t || i.scroll_l) &&
										(i.scroll_e = r)),
								i.scroll_e && e.vakata.dnd._scroll(!0),
								i.helper &&
									((_ = parseInt(
										t.pageY +
											e.vakata.dnd.settings.helper_top,
										10
									)),
									(g = parseInt(
										t.pageX +
											e.vakata.dnd.settings.helper_left,
										10
									)),
									a && _ + 25 > a && (_ = a - 50),
									o &&
										g + i.helper_w > o &&
										(g = o - (i.helper_w + 2)),
									i.helper.css({
										left: g + 'px',
										top: _ + 'px'
									})),
								e.vakata.dnd._trigger('move', t),
								!1
							);
						}
					},
					stop: function (t) {
						if (
							('touchend' === t.type &&
								t.originalEvent &&
								t.originalEvent.changedTouches &&
								t.originalEvent.changedTouches[0] &&
								((t.pageX =
									t.originalEvent.changedTouches[0].pageX),
								(t.pageY =
									t.originalEvent.changedTouches[0].pageY),
								(t.target = d.elementFromPoint(
									t.originalEvent.changedTouches[0].pageX -
										window.pageXOffset,
									t.originalEvent.changedTouches[0].pageY -
										window.pageYOffset
								))),
							i.is_drag)
						)
							t.target !== i.target &&
								e(i.target).off('click.vakata'),
								e.vakata.dnd._trigger('stop', t);
						else if (
							'touchend' === t.type &&
							t.target === i.target
						) {
							var r = setTimeout(function () {
								e(t.target).trigger('click');
							}, 100);
							e(t.target).one('click', function () {
								r && clearTimeout(r);
							});
						}
						return e.vakata.dnd._clean(), !1;
					}
				};
			})(e),
			(e.jstree.defaults.massload = null),
			(e.jstree.plugins.massload = function (t, i) {
				(this.init = function (e, t) {
					(this._data.massload = {}), i.init.call(this, e, t);
				}),
					(this._load_nodes = function (t, r, s, a) {
						var n,
							o,
							d,
							c = this.settings.massload,
							l = [],
							h = this._model.data;
						if (!s) {
							for (n = 0, o = t.length; n < o; n++)
								(h[t[n]] &&
									(h[t[n]].state.loaded ||
										h[t[n]].state.failed) &&
									!a) ||
									(l.push(t[n]),
									(d = this.get_node(t[n], !0)) &&
										d.length &&
										d
											.addClass('jstree-loading')
											.attr('aria-busy', !0));
							if (((this._data.massload = {}), l.length)) {
								if (e.vakata.is_function(c))
									return c.call(
										this,
										l,
										function (e) {
											var n, o;
											if (e)
												for (n in e)
													e.hasOwnProperty(n) &&
														(this._data.massload[
															n
														] = e[n]);
											for (
												n = 0, o = t.length;
												n < o;
												n++
											)
												(d = this.get_node(t[n], !0)) &&
													d.length &&
													d
														.removeClass(
															'jstree-loading'
														)
														.attr('aria-busy', !1);
											i._load_nodes.call(
												this,
												t,
												r,
												s,
												a
											);
										}.bind(this)
									);
								if ('object' == typeof c && c && c.url)
									return (
										(c = e.extend(!0, {}, c)),
										e.vakata.is_function(c.url) &&
											(c.url = c.url.call(this, l)),
										e.vakata.is_function(c.data) &&
											(c.data = c.data.call(this, l)),
										e
											.ajax(c)
											.done(
												function (e, n, o) {
													var c, l;
													if (e)
														for (c in e)
															e.hasOwnProperty(
																c
															) &&
																(this._data.massload[
																	c
																] = e[c]);
													for (
														c = 0, l = t.length;
														c < l;
														c++
													)
														(d = this.get_node(
															t[c],
															!0
														)) &&
															d.length &&
															d
																.removeClass(
																	'jstree-loading'
																)
																.attr(
																	'aria-busy',
																	!1
																);
													i._load_nodes.call(
														this,
														t,
														r,
														s,
														a
													);
												}.bind(this)
											)
											.fail(
												function (e) {
													i._load_nodes.call(
														this,
														t,
														r,
														s,
														a
													);
												}.bind(this)
											)
									);
							}
						}
						return i._load_nodes.call(this, t, r, s, a);
					}),
					(this._load_node = function (t, r) {
						var s,
							a = this._data.massload[t.id],
							n = null;
						return a
							? ((n = this[
									'string' == typeof a
										? '_append_html_data'
										: '_append_json_data'
							  ](
									t,
									'string' == typeof a
										? e(e.parseHTML(a)).filter(function () {
												return 3 !== this.nodeType;
										  })
										: a,
									function (e) {
										r.call(this, e);
									}
							  )),
							  (s = this.get_node(t.id, !0)) &&
									s.length &&
									s
										.removeClass('jstree-loading')
										.attr('aria-busy', !1),
							  delete this._data.massload[t.id],
							  n)
							: i._load_node.call(this, t, r);
					});
			}),
			(e.jstree.defaults.search = {
				ajax: !1,
				fuzzy: !1,
				case_sensitive: !1,
				show_only_matches: !1,
				show_only_matches_children: !1,
				close_opened_onclear: !0,
				search_leaves_only: !1,
				search_callback: !1
			}),
			(e.jstree.plugins.search = function (i, r) {
				(this.bind = function () {
					r.bind.call(this),
						(this._data.search.str = ''),
						(this._data.search.dom = e()),
						(this._data.search.res = []),
						(this._data.search.opn = []),
						(this._data.search.som = !1),
						(this._data.search.smc = !1),
						(this._data.search.hdn = []),
						this.element
							.on(
								'search.jstree',
								function (t, i) {
									if (this._data.search.som && i.res.length) {
										var r,
											s,
											a,
											n,
											o = this._model.data,
											d = [];
										for (
											r = 0, s = i.res.length;
											r < s;
											r++
										)
											if (
												o[i.res[r]] &&
												!o[i.res[r]].state.hidden &&
												(d.push(i.res[r]),
												(d = d.concat(
													o[i.res[r]].parents
												)),
												this._data.search.smc)
											)
												for (
													a = 0,
														n =
															o[i.res[r]]
																.children_d
																.length;
													a < n;
													a++
												)
													o[
														o[i.res[r]].children_d[
															a
														]
													] &&
														!o[
															o[i.res[r]]
																.children_d[a]
														].state.hidden &&
														d.push(
															o[i.res[r]]
																.children_d[a]
														);
										(d = e.vakata.array_remove_item(
											e.vakata.array_unique(d),
											e.jstree.root
										)),
											(this._data.search.hdn = this.hide_all(
												!0
											)),
											this.show_node(d, !0),
											this.redraw(!0);
									}
								}.bind(this)
							)
							.on(
								'clear_search.jstree',
								function (e, t) {
									this._data.search.som &&
										t.res.length &&
										(this.show_node(
											this._data.search.hdn,
											!0
										),
										this.redraw(!0));
								}.bind(this)
							);
				}),
					(this.search = function (i, r, s, a, n, o) {
						if (!1 === i || '' === e.vakata.trim(i.toString()))
							return this.clear_search();
						(a = (a = this.get_node(a)) && a.id ? a.id : null),
							(i = i.toString());
						var d,
							c,
							l = this.settings.search,
							h = !!l.ajax && l.ajax,
							_ = this._model.data,
							g = null,
							u = [],
							f = [];
						if (
							(this._data.search.res.length &&
								!n &&
								this.clear_search(),
							s === t && (s = l.show_only_matches),
							o === t && (o = l.show_only_matches_children),
							!r && !1 !== h)
						)
							return e.vakata.is_function(h)
								? h.call(
										this,
										i,
										function (t) {
											t && t.d && (t = t.d),
												this._load_nodes(
													e.vakata.is_array(t)
														? e.vakata.array_unique(
																t
														  )
														: [],
													function () {
														this.search(
															i,
															!0,
															s,
															a,
															n,
															o
														);
													}
												);
										}.bind(this),
										a
								  )
								: ((h = e.extend({}, h)).data || (h.data = {}),
								  (h.data.str = i),
								  a && (h.data.inside = a),
								  this._data.search.lastRequest &&
										this._data.search.lastRequest.abort(),
								  (this._data.search.lastRequest = e
										.ajax(h)
										.fail(
											function () {
												(this._data.core.last_error = {
													error: 'ajax',
													plugin: 'search',
													id: 'search_01',
													reason:
														'Could not load search parents',
													data: JSON.stringify(h)
												}),
													this.settings.core.error.call(
														this,
														this._data.core
															.last_error
													);
											}.bind(this)
										)
										.done(
											function (t) {
												t && t.d && (t = t.d),
													this._load_nodes(
														e.vakata.is_array(t)
															? e.vakata.array_unique(
																	t
															  )
															: [],
														function () {
															this.search(
																i,
																!0,
																s,
																a,
																n,
																o
															);
														}
													);
											}.bind(this)
										)),
								  this._data.search.lastRequest);
						if (
							(n ||
								((this._data.search.str = i),
								(this._data.search.dom = e()),
								(this._data.search.res = []),
								(this._data.search.opn = []),
								(this._data.search.som = s),
								(this._data.search.smc = o)),
							(g = new e.vakata.search(i, !0, {
								caseSensitive: l.case_sensitive,
								fuzzy: l.fuzzy
							})),
							e.each(
								_[a || e.jstree.root].children_d,
								function (e, t) {
									var r = _[t];
									r.text &&
										!r.state.hidden &&
										(!l.search_leaves_only ||
											(r.state.loaded &&
												0 === r.children.length)) &&
										((l.search_callback &&
											l.search_callback.call(
												this,
												i,
												r
											)) ||
											(!l.search_callback &&
												g.search(r.text).isMatch)) &&
										(u.push(t), (f = f.concat(r.parents)));
								}
							),
							u.length)
						) {
							for (
								d = 0,
									c = (f = e.vakata.array_unique(f)).length;
								d < c;
								d++
							)
								f[d] !== e.jstree.root &&
									_[f[d]] &&
									!0 === this.open_node(f[d], null, 0) &&
									this._data.search.opn.push(f[d]);
							n
								? ((this._data.search.dom = this._data.search.dom.add(
										e(
											this.element[0].querySelectorAll(
												'#' +
													e
														.map(u, function (t) {
															return -1 !==
																'0123456789'.indexOf(
																	t[0]
																)
																? '\\3' +
																		t[0] +
																		' ' +
																		t
																			.substr(
																				1
																			)
																			.replace(
																				e
																					.jstree
																					.idregex,
																				'\\$&'
																			)
																: t.replace(
																		e.jstree
																			.idregex,
																		'\\$&'
																  );
														})
														.join(', #')
											)
										)
								  )),
								  (this._data.search.res = e.vakata.array_unique(
										this._data.search.res.concat(u)
								  )))
								: ((this._data.search.dom = e(
										this.element[0].querySelectorAll(
											'#' +
												e
													.map(u, function (t) {
														return -1 !==
															'0123456789'.indexOf(
																t[0]
															)
															? '\\3' +
																	t[0] +
																	' ' +
																	t
																		.substr(
																			1
																		)
																		.replace(
																			e
																				.jstree
																				.idregex,
																			'\\$&'
																		)
															: t.replace(
																	e.jstree
																		.idregex,
																	'\\$&'
															  );
													})
													.join(', #')
										)
								  )),
								  (this._data.search.res = u)),
								this._data.search.dom
									.children('.jstree-anchor')
									.addClass('jstree-search');
						}
						this.trigger('search', {
							nodes: this._data.search.dom,
							str: i,
							res: this._data.search.res,
							show_only_matches: s
						});
					}),
					(this.clear_search = function () {
						this.settings.search.close_opened_onclear &&
							this.close_node(this._data.search.opn, 0),
							this.trigger('clear_search', {
								nodes: this._data.search.dom,
								str: this._data.search.str,
								res: this._data.search.res
							}),
							this._data.search.res.length &&
								((this._data.search.dom = e(
									this.element[0].querySelectorAll(
										'#' +
											e
												.map(
													this._data.search.res,
													function (t) {
														return -1 !==
															'0123456789'.indexOf(
																t[0]
															)
															? '\\3' +
																	t[0] +
																	' ' +
																	t
																		.substr(
																			1
																		)
																		.replace(
																			e
																				.jstree
																				.idregex,
																			'\\$&'
																		)
															: t.replace(
																	e.jstree
																		.idregex,
																	'\\$&'
															  );
													}
												)
												.join(', #')
									)
								)),
								this._data.search.dom
									.children('.jstree-anchor')
									.removeClass('jstree-search')),
							(this._data.search.str = ''),
							(this._data.search.res = []),
							(this._data.search.opn = []),
							(this._data.search.dom = e());
					}),
					(this.redraw_node = function (t, i, s, a) {
						if (
							(t = r.redraw_node.apply(this, arguments)) &&
							-1 !== e.inArray(t.id, this._data.search.res)
						) {
							var n,
								o,
								d = null;
							for (n = 0, o = t.childNodes.length; n < o; n++)
								if (
									t.childNodes[n] &&
									t.childNodes[n].className &&
									-1 !==
										t.childNodes[n].className.indexOf(
											'jstree-anchor'
										)
								) {
									d = t.childNodes[n];
									break;
								}
							d && (d.className += ' jstree-search');
						}
						return t;
					});
			}),
			(function (e) {
				(e.vakata.search = function (t, i, r) {
					(r = r || {}),
						!1 !==
							(r = e.extend({}, e.vakata.search.defaults, r))
								.fuzzy && (r.fuzzy = !0),
						(t = r.caseSensitive ? t : t.toLowerCase());
					var s,
						a,
						n,
						o,
						d = r.location,
						c = r.distance,
						l = r.threshold,
						h = t.length;
					return (
						h > 32 && (r.fuzzy = !1),
						r.fuzzy &&
							((s = 1 << (h - 1)),
							(a = (function () {
								var e = {},
									i = 0;
								for (i = 0; i < h; i++) e[t.charAt(i)] = 0;
								for (i = 0; i < h; i++)
									e[t.charAt(i)] |= 1 << (h - i - 1);
								return e;
							})()),
							(n = function (e, t) {
								var i = e / h,
									r = Math.abs(d - t);
								return c ? i + r / c : r ? 1 : i;
							})),
						(o = function (e) {
							if (
								((e = r.caseSensitive ? e : e.toLowerCase()),
								t === e || -1 !== e.indexOf(t))
							)
								return { isMatch: !0, score: 0 };
							if (!r.fuzzy) return { isMatch: !1, score: 1 };
							var i,
								o,
								c,
								_,
								g,
								u,
								f,
								p,
								m,
								v = e.length,
								j = l,
								k = e.indexOf(t, d),
								b = h + v,
								y = 1,
								x = [];
							for (
								-1 !== k &&
									((j = Math.min(n(0, k), j)),
									-1 !== (k = e.lastIndexOf(t, d + h)) &&
										(j = Math.min(n(0, k), j))),
									k = -1,
									i = 0;
								i < h;
								i++
							) {
								for (c = 0, _ = b; c < _; )
									n(i, d + _) <= j ? (c = _) : (b = _),
										(_ = Math.floor((b - c) / 2 + c));
								for (
									b = _,
										u = Math.max(1, d - _ + 1),
										f = Math.min(d + _, v) + h,
										(p = new Array(f + 2))[f + 1] =
											(1 << i) - 1,
										o = f;
									o >= u;
									o--
								)
									if (
										((m = a[e.charAt(o - 1)]),
										(p[o] =
											0 === i
												? ((p[o + 1] << 1) | 1) & m
												: (((p[o + 1] << 1) | 1) & m) |
												  ((g[o + 1] | g[o]) << 1) |
												  1 |
												  g[o + 1]),
										p[o] & s && (y = n(i, o - 1)) <= j)
									) {
										if (
											((j = y),
											(k = o - 1),
											x.push(k),
											!(k > d))
										)
											break;
										u = Math.max(1, 2 * d - k);
									}
								if (n(i + 1, d) > j) break;
								g = p;
							}
							return { isMatch: k >= 0, score: y };
						}),
						!0 === i ? { search: o } : o(i)
					);
				}),
					(e.vakata.search.defaults = {
						location: 0,
						distance: 100,
						threshold: 0.6,
						fuzzy: !1,
						caseSensitive: !1
					});
			})(e),
			(e.jstree.defaults.sort = function (e, t) {
				return this.get_text(e) > this.get_text(t) ? 1 : -1;
			}),
			(e.jstree.plugins.sort = function (e, t) {
				(this.bind = function () {
					t.bind.call(this),
						this.element
							.on(
								'model.jstree',
								function (e, t) {
									this.sort(t.parent, !0);
								}.bind(this)
							)
							.on(
								'rename_node.jstree create_node.jstree',
								function (e, t) {
									this.sort(t.parent || t.node.parent, !1),
										this.redraw_node(
											t.parent || t.node.parent,
											!0
										);
								}.bind(this)
							)
							.on(
								'move_node.jstree copy_node.jstree',
								function (e, t) {
									this.sort(t.parent, !1),
										this.redraw_node(t.parent, !0);
								}.bind(this)
							);
				}),
					(this.sort = function (e, t) {
						var i, r;
						if (
							(e = this.get_node(e)) &&
							e.children &&
							e.children.length &&
							(e.children.sort(this.settings.sort.bind(this)), t)
						)
							for (i = 0, r = e.children_d.length; i < r; i++)
								this.sort(e.children_d[i], !1);
					});
			});
		var u = !1;
		(e.jstree.defaults.state = {
			key: 'jstree',
			events:
				'changed.jstree open_node.jstree close_node.jstree check_node.jstree uncheck_node.jstree',
			ttl: !1,
			filter: !1,
			preserve_loaded: !1
		}),
			(e.jstree.plugins.state = function (t, i) {
				(this.bind = function () {
					i.bind.call(this);
					var e = function () {
						this.element.on(
							this.settings.state.events,
							function () {
								u && clearTimeout(u),
									(u = setTimeout(
										function () {
											this.save_state();
										}.bind(this),
										100
									));
							}.bind(this)
						),
							this.trigger('state_ready');
					}.bind(this);
					this.element.on(
						'ready.jstree',
						function (t, i) {
							this.element.one('restore_state.jstree', e),
								this.restore_state() || e();
						}.bind(this)
					);
				}),
					(this.save_state = function () {
						var t = this.get_state();
						this.settings.state.preserve_loaded ||
							delete t.core.loaded;
						var i = {
							state: t,
							ttl: this.settings.state.ttl,
							sec: +new Date()
						};
						e.vakata.storage.set(
							this.settings.state.key,
							JSON.stringify(i)
						);
					}),
					(this.restore_state = function () {
						var t = e.vakata.storage.get(this.settings.state.key);
						if (t)
							try {
								t = JSON.parse(t);
							} catch (e) {
								return !1;
							}
						return (
							!(
								t &&
								t.ttl &&
								t.sec &&
								+new Date() - t.sec > t.ttl
							) &&
							(t && t.state && (t = t.state),
							t &&
								e.vakata.is_function(
									this.settings.state.filter
								) &&
								(t = this.settings.state.filter.call(this, t)),
							!!t &&
								(this.settings.state.preserve_loaded ||
									delete t.core.loaded,
								this.element.one(
									'set_state.jstree',
									function (i, r) {
										r.instance.trigger('restore_state', {
											state: e.extend(!0, {}, t)
										});
									}
								),
								this.set_state(t),
								!0))
						);
					}),
					(this.clear_state = function () {
						return e.vakata.storage.del(this.settings.state.key);
					});
			}),
			(function (e, t) {
				e.vakata.storage = {
					set: function (e, t) {
						return window.localStorage.setItem(e, t);
					},
					get: function (e) {
						return window.localStorage.getItem(e);
					},
					del: function (e) {
						return window.localStorage.removeItem(e);
					}
				};
			})(e),
			(e.jstree.defaults.types = { default: {} }),
			(e.jstree.defaults.types[e.jstree.root] = {}),
			(e.jstree.plugins.types = function (i, r) {
				(this.init = function (i, s) {
					var a, n;
					if (s && s.types && s.types.default)
						for (a in s.types)
							if (
								'default' !== a &&
								a !== e.jstree.root &&
								s.types.hasOwnProperty(a)
							)
								for (n in s.types.default)
									s.types.default.hasOwnProperty(n) &&
										s.types[a][n] === t &&
										(s.types[a][n] = s.types.default[n]);
					r.init.call(this, i, s),
						(this._model.data[e.jstree.root].type = e.jstree.root);
				}),
					(this.refresh = function (t, i) {
						r.refresh.call(this, t, i),
							(this._model.data[e.jstree.root].type =
								e.jstree.root);
					}),
					(this.bind = function () {
						this.element.on(
							'model.jstree',
							function (i, r) {
								var s,
									a,
									n,
									o = this._model.data,
									d = r.nodes,
									c = this.settings.types,
									l = 'default';
								for (s = 0, a = d.length; s < a; s++) {
									if (
										((l = 'default'),
										o[d[s]].original &&
											o[d[s]].original.type &&
											c[o[d[s]].original.type] &&
											(l = o[d[s]].original.type),
										o[d[s]].data &&
											o[d[s]].data.jstree &&
											o[d[s]].data.jstree.type &&
											c[o[d[s]].data.jstree.type] &&
											(l = o[d[s]].data.jstree.type),
										(o[d[s]].type = l),
										!0 === o[d[s]].icon &&
											c[l].icon !== t &&
											(o[d[s]].icon = c[l].icon),
										c[l].li_attr !== t &&
											'object' == typeof c[l].li_attr)
									)
										for (n in c[l].li_attr)
											if (
												c[l].li_attr.hasOwnProperty(n)
											) {
												if ('id' === n) continue;
												o[d[s]].li_attr[n] === t
													? (o[d[s]].li_attr[n] =
															c[l].li_attr[n])
													: 'class' === n &&
													  (o[d[s]].li_attr.class =
															c[l].li_attr.class +
															' ' +
															o[d[s]].li_attr
																.class);
											}
									if (
										c[l].a_attr !== t &&
										'object' == typeof c[l].a_attr
									)
										for (n in c[l].a_attr)
											if (c[l].a_attr.hasOwnProperty(n)) {
												if ('id' === n) continue;
												o[d[s]].a_attr[n] === t
													? (o[d[s]].a_attr[n] =
															c[l].a_attr[n])
													: 'href' === n &&
													  '#' === o[d[s]].a_attr[n]
													? (o[d[s]].a_attr.href =
															c[l].a_attr.href)
													: 'class' === n &&
													  (o[d[s]].a_attr.class =
															c[l].a_attr.class +
															' ' +
															o[d[s]].a_attr
																.class);
											}
								}
								o[e.jstree.root].type = e.jstree.root;
							}.bind(this)
						),
							r.bind.call(this);
					}),
					(this.get_json = function (t, i, s) {
						var a,
							n,
							o = this._model.data,
							d = i ? e.extend(!0, {}, i, { no_id: !1 }) : {},
							c = r.get_json.call(this, t, d, s);
						if (!1 === c) return !1;
						if (e.vakata.is_array(c))
							for (a = 0, n = c.length; a < n; a++)
								(c[a].type =
									c[a].id && o[c[a].id] && o[c[a].id].type
										? o[c[a].id].type
										: 'default'),
									i &&
										i.no_id &&
										(delete c[a].id,
										c[a].li_attr &&
											c[a].li_attr.id &&
											delete c[a].li_attr.id,
										c[a].a_attr &&
											c[a].a_attr.id &&
											delete c[a].a_attr.id);
						else
							(c.type =
								c.id && o[c.id] && o[c.id].type
									? o[c.id].type
									: 'default'),
								i && i.no_id && (c = this._delete_ids(c));
						return c;
					}),
					(this._delete_ids = function (t) {
						if (e.vakata.is_array(t)) {
							for (var i = 0, r = t.length; i < r; i++)
								t[i] = this._delete_ids(t[i]);
							return t;
						}
						return (
							delete t.id,
							t.li_attr && t.li_attr.id && delete t.li_attr.id,
							t.a_attr && t.a_attr.id && delete t.a_attr.id,
							t.children &&
								e.vakata.is_array(t.children) &&
								(t.children = this._delete_ids(t.children)),
							t
						);
					}),
					(this.check = function (i, s, a, n, o) {
						if (!1 === r.check.call(this, i, s, a, n, o)) return !1;
						(s = s && s.id ? s : this.get_node(s)),
							(a = a && a.id ? a : this.get_node(a));
						var d,
							c,
							l,
							h,
							_ =
								s && s.id
									? o && o.origin
										? o.origin
										: e.jstree.reference(s.id)
									: null;
						switch (
							((_ =
								_ && _._model && _._model.data
									? _._model.data
									: null),
							i)
						) {
							case 'create_node':
							case 'move_node':
							case 'copy_node':
								if (
									'move_node' !== i ||
									-1 === e.inArray(s.id, a.children)
								) {
									if (
										(d = this.get_rules(a)).max_children !==
											t &&
										-1 !== d.max_children &&
										d.max_children === a.children.length
									)
										return (
											(this._data.core.last_error = {
												error: 'check',
												plugin: 'types',
												id: 'types_01',
												reason:
													'max_children prevents function: ' +
													i,
												data: JSON.stringify({
													chk: i,
													pos: n,
													obj: !(!s || !s.id) && s.id,
													par: !(!a || !a.id) && a.id
												})
											}),
											!1
										);
									if (
										d.valid_children !== t &&
										-1 !== d.valid_children &&
										-1 ===
											e.inArray(
												s.type || 'default',
												d.valid_children
											)
									)
										return (
											(this._data.core.last_error = {
												error: 'check',
												plugin: 'types',
												id: 'types_02',
												reason:
													'valid_children prevents function: ' +
													i,
												data: JSON.stringify({
													chk: i,
													pos: n,
													obj: !(!s || !s.id) && s.id,
													par: !(!a || !a.id) && a.id
												})
											}),
											!1
										);
									if (_ && s.children_d && s.parents) {
										for (
											c = 0,
												l = 0,
												h = s.children_d.length;
											l < h;
											l++
										)
											c = Math.max(
												c,
												_[s.children_d[l]].parents
													.length
											);
										c = c - s.parents.length + 1;
									}
									(c <= 0 || c === t) && (c = 1);
									do {
										if (
											d.max_depth !== t &&
											-1 !== d.max_depth &&
											d.max_depth < c
										)
											return (
												(this._data.core.last_error = {
													error: 'check',
													plugin: 'types',
													id: 'types_03',
													reason:
														'max_depth prevents function: ' +
														i,
													data: JSON.stringify({
														chk: i,
														pos: n,
														obj:
															!(!s || !s.id) &&
															s.id,
														par:
															!(!a || !a.id) &&
															a.id
													})
												}),
												!1
											);
										(a = this.get_node(a.parent)),
											(d = this.get_rules(a)),
											c++;
									} while (a);
								}
						}
						return !0;
					}),
					(this.get_rules = function (e) {
						if (!(e = this.get_node(e))) return !1;
						var i = this.get_type(e, !0);
						return (
							i.max_depth === t && (i.max_depth = -1),
							i.max_children === t && (i.max_children = -1),
							i.valid_children === t && (i.valid_children = -1),
							i
						);
					}),
					(this.get_type = function (t, i) {
						return (
							!!(t = this.get_node(t)) &&
							(i
								? e.extend(
										{ type: t.type },
										this.settings.types[t.type]
								  )
								: t.type)
						);
					}),
					(this.set_type = function (i, r) {
						var s,
							a,
							n,
							o,
							d,
							c,
							l,
							h,
							_ = this._model.data;
						if (e.vakata.is_array(i)) {
							for (a = 0, n = (i = i.slice()).length; a < n; a++)
								this.set_type(i[a], r);
							return !0;
						}
						if (
							((s = this.settings.types),
							(i = this.get_node(i)),
							!s[r] || !i)
						)
							return !1;
						if (
							((l = this.get_node(i, !0)) &&
								l.length &&
								(h = l.children('.jstree-anchor')),
							(o = i.type),
							(d = this.get_icon(i)),
							(i.type = r),
							(!0 === d ||
								!s[o] ||
								(s[o].icon !== t && d === s[o].icon)) &&
								this.set_icon(i, s[r].icon === t || s[r].icon),
							s[o] &&
								s[o].li_attr !== t &&
								'object' == typeof s[o].li_attr)
						)
							for (c in s[o].li_attr)
								if (s[o].li_attr.hasOwnProperty(c)) {
									if ('id' === c) continue;
									'class' === c
										? ((_[i.id].li_attr.class = (
												_[i.id].li_attr.class || ''
										  ).replace(s[o].li_attr[c], '')),
										  l && l.removeClass(s[o].li_attr[c]))
										: _[i.id].li_attr[c] ===
												s[o].li_attr[c] &&
										  ((_[i.id].li_attr[c] = null),
										  l && l.removeAttr(c));
								}
						if (
							s[o] &&
							s[o].a_attr !== t &&
							'object' == typeof s[o].a_attr
						)
							for (c in s[o].a_attr)
								if (s[o].a_attr.hasOwnProperty(c)) {
									if ('id' === c) continue;
									'class' === c
										? ((_[i.id].a_attr.class = (
												_[i.id].a_attr.class || ''
										  ).replace(s[o].a_attr[c], '')),
										  h && h.removeClass(s[o].a_attr[c]))
										: _[i.id].a_attr[c] ===
												s[o].a_attr[c] &&
										  ('href' === c
												? ((_[i.id].a_attr[c] = '#'),
												  h && h.attr('href', '#'))
												: (delete _[i.id].a_attr[c],
												  h && h.removeAttr(c)));
								}
						if (
							s[r].li_attr !== t &&
							'object' == typeof s[r].li_attr
						)
							for (c in s[r].li_attr)
								if (s[r].li_attr.hasOwnProperty(c)) {
									if ('id' === c) continue;
									_[i.id].li_attr[c] === t
										? ((_[i.id].li_attr[c] =
												s[r].li_attr[c]),
										  l &&
												('class' === c
													? l.addClass(
															s[r].li_attr[c]
													  )
													: l.attr(
															c,
															s[r].li_attr[c]
													  )))
										: 'class' === c &&
										  ((_[i.id].li_attr.class =
												s[r].li_attr[c] +
												' ' +
												_[i.id].li_attr.class),
										  l && l.addClass(s[r].li_attr[c]));
								}
						if (s[r].a_attr !== t && 'object' == typeof s[r].a_attr)
							for (c in s[r].a_attr)
								if (s[r].a_attr.hasOwnProperty(c)) {
									if ('id' === c) continue;
									_[i.id].a_attr[c] === t
										? ((_[i.id].a_attr[c] = s[r].a_attr[c]),
										  h &&
												('class' === c
													? h.addClass(s[r].a_attr[c])
													: h.attr(
															c,
															s[r].a_attr[c]
													  )))
										: 'href' === c &&
										  '#' === _[i.id].a_attr[c]
										? ((_[i.id].a_attr.href =
												s[r].a_attr.href),
										  h && h.attr('href', s[r].a_attr.href))
										: 'class' === c &&
										  ((_[i.id].a_attr.class =
												s[r].a_attr.class +
												' ' +
												_[i.id].a_attr.class),
										  h && h.addClass(s[r].a_attr[c]));
								}
						return !0;
					});
			}),
			(e.jstree.defaults.unique = {
				case_sensitive: !1,
				trim_whitespace: !1,
				duplicate: function (e, t) {
					return e + ' (' + t + ')';
				}
			}),
			(e.jstree.plugins.unique = function (i, r) {
				(this.check = function (t, i, s, a, n) {
					if (!1 === r.check.call(this, t, i, s, a, n)) return !1;
					if (
						((i = i && i.id ? i : this.get_node(i)),
						!(s = s && s.id ? s : this.get_node(s)) || !s.children)
					)
						return !0;
					var o,
						d,
						c,
						l = 'rename_node' === t ? a : i.text,
						h = [],
						_ = this.settings.unique.case_sensitive,
						g = this.settings.unique.trim_whitespace,
						u = this._model.data;
					for (o = 0, d = s.children.length; o < d; o++)
						(c = u[s.children[o]].text),
							_ || (c = c.toLowerCase()),
							g &&
								(c = c.replace(
									/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
									''
								)),
							h.push(c);
					switch (
						(_ || (l = l.toLowerCase()),
						g &&
							(l = l.replace(
								/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
								''
							)),
						t)
					) {
						case 'delete_node':
							return !0;
						case 'rename_node':
							return (
								(c = i.text || ''),
								_ || (c = c.toLowerCase()),
								g &&
									(c = c.replace(
										/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
										''
									)),
								(o =
									-1 === e.inArray(l, h) ||
									(i.text && c === l)) ||
									(this._data.core.last_error = {
										error: 'check',
										plugin: 'unique',
										id: 'unique_01',
										reason:
											'Child with name ' +
											l +
											' already exists. Preventing: ' +
											t,
										data: JSON.stringify({
											chk: t,
											pos: a,
											obj: !(!i || !i.id) && i.id,
											par: !(!s || !s.id) && s.id
										})
									}),
								o
							);
						case 'create_node':
							return (
								(o = -1 === e.inArray(l, h)) ||
									(this._data.core.last_error = {
										error: 'check',
										plugin: 'unique',
										id: 'unique_04',
										reason:
											'Child with name ' +
											l +
											' already exists. Preventing: ' +
											t,
										data: JSON.stringify({
											chk: t,
											pos: a,
											obj: !(!i || !i.id) && i.id,
											par: !(!s || !s.id) && s.id
										})
									}),
								o
							);
						case 'copy_node':
							return (
								(o = -1 === e.inArray(l, h)) ||
									(this._data.core.last_error = {
										error: 'check',
										plugin: 'unique',
										id: 'unique_02',
										reason:
											'Child with name ' +
											l +
											' already exists. Preventing: ' +
											t,
										data: JSON.stringify({
											chk: t,
											pos: a,
											obj: !(!i || !i.id) && i.id,
											par: !(!s || !s.id) && s.id
										})
									}),
								o
							);
						case 'move_node':
							return (
								(o =
									(i.parent === s.id &&
										(!n || !n.is_multi)) ||
									-1 === e.inArray(l, h)) ||
									(this._data.core.last_error = {
										error: 'check',
										plugin: 'unique',
										id: 'unique_03',
										reason:
											'Child with name ' +
											l +
											' already exists. Preventing: ' +
											t,
										data: JSON.stringify({
											chk: t,
											pos: a,
											obj: !(!i || !i.id) && i.id,
											par: !(!s || !s.id) && s.id
										})
									}),
								o
							);
					}
					return !0;
				}),
					(this.create_node = function (i, s, a, n, o) {
						if (!s || s.text === t) {
							if (
								(null === i && (i = e.jstree.root),
								!(i = this.get_node(i)))
							)
								return r.create_node.call(this, i, s, a, n, o);
							if (
								!(a = a === t ? 'last' : a)
									.toString()
									.match(/^(before|after)$/) &&
								!o &&
								!this.is_loaded(i)
							)
								return r.create_node.call(this, i, s, a, n, o);
							s || (s = {});
							var d,
								c,
								l,
								h,
								_,
								g,
								u = this._model.data,
								f = this.settings.unique.case_sensitive,
								p = this.settings.unique.trim_whitespace,
								m = this.settings.unique.duplicate;
							for (
								c = d = this.get_string('New node'),
									l = [],
									h = 0,
									_ = i.children.length;
								h < _;
								h++
							)
								(g = u[i.children[h]].text),
									f || (g = g.toLowerCase()),
									p &&
										(g = g.replace(
											/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
											''
										)),
									l.push(g);
							for (
								h = 1,
									g = c,
									f || (g = g.toLowerCase()),
									p &&
										(g = g.replace(
											/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
											''
										));
								-1 !== e.inArray(g, l);

							)
								(g = c = m.call(this, d, ++h).toString()),
									f || (g = g.toLowerCase()),
									p &&
										(g = g.replace(
											/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
											''
										));
							s.text = c;
						}
						return r.create_node.call(this, i, s, a, n, o);
					});
			});
		var f = d.createElement('DIV');
		if (
			(f.setAttribute('unselectable', 'on'),
			f.setAttribute('role', 'presentation'),
			(f.className = 'jstree-wholerow'),
			(f.innerHTML = '&#160;'),
			(e.jstree.plugins.wholerow = function (t, i) {
				(this.bind = function () {
					i.bind.call(this),
						this.element
							.on(
								'ready.jstree set_state.jstree',
								function () {
									this.hide_dots();
								}.bind(this)
							)
							.on(
								'init.jstree loading.jstree ready.jstree',
								function () {
									this.get_container_ul().addClass(
										'jstree-wholerow-ul'
									);
								}.bind(this)
							)
							.on(
								'deselect_all.jstree',
								function (e, t) {
									this.element
										.find('.jstree-wholerow-clicked')
										.removeClass('jstree-wholerow-clicked');
								}.bind(this)
							)
							.on(
								'changed.jstree',
								function (e, t) {
									this.element
										.find('.jstree-wholerow-clicked')
										.removeClass('jstree-wholerow-clicked');
									var i,
										r,
										s = !1;
									for (
										i = 0, r = t.selected.length;
										i < r;
										i++
									)
										(s = this.get_node(
											t.selected[i],
											!0
										)) &&
											s.length &&
											s
												.children('.jstree-wholerow')
												.addClass(
													'jstree-wholerow-clicked'
												);
								}.bind(this)
							)
							.on(
								'open_node.jstree',
								function (e, t) {
									this.get_node(t.node, !0)
										.find('.jstree-clicked')
										.parent()
										.children('.jstree-wholerow')
										.addClass('jstree-wholerow-clicked');
								}.bind(this)
							)
							.on(
								'hover_node.jstree dehover_node.jstree',
								function (e, t) {
									('hover_node' === e.type &&
										this.is_disabled(t.node)) ||
										this.get_node(t.node, !0)
											.children('.jstree-wholerow')
											[
												'hover_node' === e.type
													? 'addClass'
													: 'removeClass'
											]('jstree-wholerow-hovered');
								}.bind(this)
							)
							.on(
								'contextmenu.jstree',
								'.jstree-wholerow',
								function (t) {
									if (this._data.contextmenu) {
										t.preventDefault();
										var i = e.Event('contextmenu', {
											metaKey: t.metaKey,
											ctrlKey: t.ctrlKey,
											altKey: t.altKey,
											shiftKey: t.shiftKey,
											pageX: t.pageX,
											pageY: t.pageY
										});
										e(t.currentTarget)
											.closest('.jstree-node')
											.children('.jstree-anchor')
											.first()
											.trigger(i);
									}
								}.bind(this)
							)
							/*!
				.on("mousedown.jstree touchstart.jstree", ".jstree-wholerow", function (e) {
						if(e.target === e.currentTarget) {
							var a = $(e.currentTarget).closest(".jstree-node").children(".jstree-anchor");
							e.target = a[0];
							a.trigger(e);
						}
					})
				*/ .on(
								'click.jstree',
								'.jstree-wholerow',
								function (t) {
									t.stopImmediatePropagation();
									var i = e.Event('click', {
										metaKey: t.metaKey,
										ctrlKey: t.ctrlKey,
										altKey: t.altKey,
										shiftKey: t.shiftKey
									});
									e(t.currentTarget)
										.closest('.jstree-node')
										.children('.jstree-anchor')
										.first()
										.trigger(i)
										.trigger('focus');
								}
							)
							.on(
								'dblclick.jstree',
								'.jstree-wholerow',
								function (t) {
									t.stopImmediatePropagation();
									var i = e.Event('dblclick', {
										metaKey: t.metaKey,
										ctrlKey: t.ctrlKey,
										altKey: t.altKey,
										shiftKey: t.shiftKey
									});
									e(t.currentTarget)
										.closest('.jstree-node')
										.children('.jstree-anchor')
										.first()
										.trigger(i)
										.trigger('focus');
								}
							)
							.on(
								'click.jstree',
								'.jstree-leaf > .jstree-ocl',
								function (t) {
									t.stopImmediatePropagation();
									var i = e.Event('click', {
										metaKey: t.metaKey,
										ctrlKey: t.ctrlKey,
										altKey: t.altKey,
										shiftKey: t.shiftKey
									});
									e(t.currentTarget)
										.closest('.jstree-node')
										.children('.jstree-anchor')
										.first()
										.trigger(i)
										.trigger('focus');
								}.bind(this)
							)
							.on(
								'mouseover.jstree',
								'.jstree-wholerow, .jstree-icon',
								function (e) {
									return (
										e.stopImmediatePropagation(),
										this.is_disabled(e.currentTarget) ||
											this.hover_node(e.currentTarget),
										!1
									);
								}.bind(this)
							)
							.on(
								'mouseleave.jstree',
								'.jstree-node',
								function (e) {
									this.dehover_node(e.currentTarget);
								}.bind(this)
							);
				}),
					(this.teardown = function () {
						this.settings.wholerow &&
							this.element.find('.jstree-wholerow').remove(),
							i.teardown.call(this);
					}),
					(this.redraw_node = function (t, r, s, a) {
						if ((t = i.redraw_node.apply(this, arguments))) {
							var n = f.cloneNode(!0);
							-1 !== e.inArray(t.id, this._data.core.selected) &&
								(n.className += ' jstree-wholerow-clicked'),
								this._data.core.focused &&
									this._data.core.focused === t.id &&
									(n.className += ' jstree-wholerow-hovered'),
								t.insertBefore(n, t.childNodes[0]);
						}
						return t;
					});
			}),
			window.customElements && Object && Object.create)
		) {
			var p = Object.create(HTMLElement.prototype);
			p.createdCallback = function () {
				var t,
					i = { core: {}, plugins: [] };
				for (t in e.jstree.plugins)
					e.jstree.plugins.hasOwnProperty(t) &&
						this.attributes[t] &&
						(i.plugins.push(t),
						this.getAttribute(t) &&
							JSON.parse(this.getAttribute(t)) &&
							(i[t] = JSON.parse(this.getAttribute(t))));
				for (t in e.jstree.defaults.core)
					e.jstree.defaults.core.hasOwnProperty(t) &&
						this.attributes[t] &&
						(i.core[t] =
							JSON.parse(this.getAttribute(t)) ||
							this.getAttribute(t));
				e(this).jstree(i);
			};
			try {
				window.customElements.define('vakata-jstree', function () {}, {
					prototype: p
				});
			} catch (e) {}
		}
	}
});
