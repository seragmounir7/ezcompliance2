'use strict';
var KTFormsTagifyDemos = (function () {
	const e = () => {
			var e = new Tagify(document.querySelector('#kt_tagify_country'), {
					delimiters: null,
					templates: {
						tag: function (e) {
							const a =
								hostUrl +
								'media/flags/' +
								e.value.toLowerCase().replace(/\s+/g, '-') +
								'.svg';
							try {
								return `<tag title='${
									e.value
								}' contenteditable='false' spellcheck="false" class='tagify__tag ${
									e.class ? e.class : ''
								}' ${this.getAttributes(
									e
								)}>\n                                <x title='remove tag' class='tagify__tag__removeBtn'></x>\n                                <div class="d-flex align-items-center">\n                                    ${
									e.code
										? `<img onerror="this.style.visibility = 'hidden'" class="w-25px rounded-circle me-2" src='${a}' />`
										: ''
								}\n                                    <span class='tagify__tag-text'>${
									e.value
								}</span>\n                                </div>\n                            </tag>`;
							} catch (e) {}
						},
						dropdownItem: function (e) {
							const a =
								hostUrl +
								'media/flags/' +
								e.value.toLowerCase().replace(/\s+/g, '-') +
								'.svg';
							try {
								return `<div class='tagify__dropdown__item ${
									e.class ? e.class : ''
								}'>\n                                    <img onerror="this.style.visibility = 'hidden'" class="w-25px rounded-circle me-2"\n                                         src='${a}' />\n                                    <span>${
									e.value
								}</span>\n                                </div>`;
							} catch (e) {}
						}
					},
					enforceWhitelist: !0,
					whitelist: [
						{ value: 'Argentina', code: 'AR' },
						{
							value: 'Australia',
							code: 'AU',
							searchBy: 'beach, sub-tropical'
						},
						{ value: 'Austria', code: 'AT' },
						{ value: 'Brazil', code: 'BR' },
						{ value: 'China', code: 'CN' },
						{ value: 'Egypt', code: 'EG' },
						{ value: 'Finland', code: 'FI' },
						{ value: 'France', code: 'FR' },
						{ value: 'Germany', code: 'DE' },
						{ value: 'Hong Kong', code: 'HK' },
						{ value: 'Hungary', code: 'HU' },
						{ value: 'Iceland', code: 'IS' },
						{ value: 'India', code: 'IN' },
						{ value: 'Indonesia', code: 'ID' },
						{ value: 'Italy', code: 'IT' },
						{ value: 'Jamaica', code: 'JM' },
						{ value: 'Japan', code: 'JP' },
						{ value: 'Jersey', code: 'JE' },
						{ value: 'Luxembourg', code: 'LU' },
						{ value: 'Mexico', code: 'MX' },
						{ value: 'Netherlands', code: 'NL' },
						{ value: 'New Zealand', code: 'NZ' },
						{ value: 'Norway', code: 'NO' },
						{ value: 'Philippines', code: 'PH' },
						{ value: 'Singapore', code: 'SG' },
						{ value: 'South Korea', code: 'KR' },
						{ value: 'Sweden', code: 'SE' },
						{ value: 'Switzerland', code: 'CH' },
						{ value: 'Thailand', code: 'TH' },
						{ value: 'Ukraine', code: 'UA' },
						{ value: 'United Kingdom', code: 'GB' },
						{ value: 'United States', code: 'US' },
						{ value: 'Vietnam', code: 'VN' }
					],
					dropdown: { enabled: 1, classname: 'extra-properties' }
				}),
				a = e.settings.whitelist.slice(0, 2);
			e.addTags(a);
		},
		a = () => {
			var e = document.querySelector('#kt_tagify_users');
			var a,
				t = new Tagify(e, {
					tagTextProp: 'name',
					enforceWhitelist: !0,
					skipInvalid: !0,
					dropdown: {
						closeOnSelect: !1,
						enabled: 0,
						classname: 'users-list',
						searchKeys: ['name', 'email']
					},
					templates: {
						tag: function (e) {
							return `\n                <tag title="${
								e.title || e.email
							}"\n                        contenteditable='false'\n                        spellcheck='false'\n                        tabIndex="-1"\n                        class="${
								this.settings.classNames.tag
							} ${
								e.class ? e.class : ''
							}"\n                        ${this.getAttributes(
								e
							)}>\n                    <x title='' class='tagify__tag__removeBtn' role='button' aria-label='remove tag'></x>\n                    <div class="d-flex align-items-center">\n                        <div class='tagify__tag__avatar-wrap ps-0'>\n                            <img onerror="this.style.visibility='hidden'" class="rounded-circle w-25px me-2" src="${hostUrl}media/${
								e.avatar
							}">\n                        </div>\n                        <span class='tagify__tag-text'>${
								e.name
							}</span>\n                    </div>\n                </tag>\n            `;
						},
						dropdownItem: function (e) {
							return `\n                <div ${this.getAttributes(
								e
							)}\n                    class='tagify__dropdown__item d-flex align-items-center ${
								e.class ? e.class : ''
							}'\n                    tabindex="0"\n                    role="option">\n\n                    ${
								e.avatar
									? `\n                            <div class='tagify__dropdown__item__avatar-wrap me-2'>\n                                <img onerror="this.style.visibility='hidden'"  class="rounded-circle w-50px me-2" src="${hostUrl}media/${e.avatar}">\n                            </div>`
									: ''
							}\n\n                    <div class="d-flex flex-column">\n                        <strong>${
								e.name
							}</strong>\n                        <span>${
								e.email
							}</span>\n                    </div>\n                </div>\n            `;
						}
					},
					whitelist: [
						{
							value: 1,
							name: 'Emma Smith',
							avatar: 'avatars/300-6.jpg',
							email: 'e.smith@kpmg.com.au'
						},
						{
							value: 2,
							name: 'Max Smith',
							avatar: 'avatars/300-1.jpg',
							email: 'max@kt.com'
						},
						{
							value: 3,
							name: 'Sean Bean',
							avatar: 'avatars/300-5.jpg',
							email: 'sean@dellito.com'
						},
						{
							value: 4,
							name: 'Brian Cox',
							avatar: 'avatars/300-25.jpg',
							email: 'brian@exchange.com'
						},
						{
							value: 5,
							name: 'Francis Mitcham',
							avatar: 'avatars/300-9.jpg',
							email: 'f.mitcham@kpmg.com.au'
						},
						{
							value: 6,
							name: 'Dan Wilson',
							avatar: 'avatars/300-23.jpg',
							email: 'dam@consilting.com'
						},
						{
							value: 7,
							name: 'Ana Crown',
							avatar: 'avatars/300-12.jpg',
							email: 'ana.cf@limtel.com'
						},
						{
							value: 8,
							name: 'John Miller',
							avatar: 'avatars/300-13.jpg',
							email: 'miller@mapple.com'
						}
					]
				});
			t.on('dropdown:show dropdown:updated', function (e) {
				var n = e.detail.tagify.DOM.dropdown.content;
				t.suggestedListItems.length > 1 &&
					((a = t.parseTemplate('dropdownItem', [
						{
							class: 'addAll',
							name: 'Add all',
							email:
								t.settings.whitelist.reduce(function (e, a) {
									return t.isTagDuplicate(a.value)
										? e
										: e + 1;
								}, 0) + ' Members'
						}
					])),
					n.insertBefore(a, n.firstChild));
			}),
				t.on('dropdown:select', function (e) {
					e.detail.elm == a && t.dropdown.selectAll.call(t);
				});
		};
	return {
		init: function () {
			var t, n, i, o, l;
			(t = document.querySelector('#kt_tagify_1')),
				(n = document.querySelector('#kt_tagify_2')),
				new Tagify(t, { placeholder: 'Type something' }),
				new Tagify(n, { placeholder: 'Type something' }),
				(function (e) {
					var a = document.querySelector('#kt_tagify_3'),
						t = document.querySelector('#kt_tagify_4'),
						n = document.querySelector('#kt_tagify_5');
					new Tagify(a), new Tagify(t), new Tagify(n);
				})(),
				(function (e) {
					var a = document.querySelector('#kt_tagify_6'),
						t = document.querySelector('#kt_tagify_7');
					new Tagify(a, {
						whitelist: [
							'A# .NET',
							'A# (Axiom)',
							'A-0 System',
							'A+',
							'A++',
							'ABAP',
							'ABC',
							'ABC ALGOL',
							'ABSET',
							'ABSYS',
							'ACC',
							'Accent',
							'Ace DASL',
							'ACL2',
							'Avicsoft',
							'ACT-III',
							'Action!',
							'ActionScript',
							'Ada',
							'Adenine',
							'Agda',
							'Agilent VEE',
							'Agora',
							'AIMMS',
							'Alef',
							'ALF',
							'ALGOL 58',
							'ALGOL 60',
							'ALGOL 68',
							'ALGOL W',
							'Alice',
							'Alma-0',
							'AmbientTalk',
							'Amiga E',
							'AMOS',
							'AMPL',
							'Apex (Salesforce.com)',
							'APL',
							'AppleScript',
							'Arc',
							'ARexx',
							'Argus',
							'AspectJ',
							'Assembly language',
							'ATS',
							'Ateji PX',
							'AutoHotkey',
							'Autocoder',
							'AutoIt',
							'AutoLISP / Visual LISP',
							'Averest',
							'AWK',
							'Axum',
							'Active Server Pages',
							'ASP.NET',
							'B',
							'Babbage',
							'Bash',
							'BASIC',
							'bc',
							'BCPL',
							'BeanShell',
							'Batch (Windows/Dos)',
							'Bertrand',
							'BETA',
							'Bigwig',
							'Bistro',
							'BitC',
							'BLISS',
							'Blockly',
							'BlooP',
							'Blue',
							'Boo',
							'Boomerang',
							'Bourne shell (including bash and ksh)',
							'BREW',
							'BPEL',
							'B',
							'C--',
							'C++ – ISO/IEC 14882',
							'C# – ISO/IEC 23270',
							'C/AL',
							'Caché ObjectScript',
							'C Shell',
							'Caml',
							'Cayenne',
							'CDuce',
							'Cecil',
							'Cesil',
							'Céu',
							'Ceylon',
							'CFEngine',
							'CFML',
							'Cg',
							'Ch',
							'Chapel',
							'Charity',
							'Charm',
							'Chef',
							'CHILL',
							'CHIP-8',
							'chomski',
							'ChucK',
							'CICS',
							'Cilk',
							'Citrine (programming language)',
							'CL (IBM)',
							'Claire',
							'Clarion',
							'Clean',
							'Clipper',
							'CLIPS',
							'CLIST',
							'Clojure',
							'CLU',
							'CMS-2',
							'COBOL – ISO/IEC 1989',
							'CobolScript – COBOL Scripting language',
							'Cobra',
							'CODE',
							'CoffeeScript',
							'ColdFusion',
							'COMAL',
							'Combined Programming Language (CPL)',
							'COMIT',
							'Common Intermediate Language (CIL)',
							'Common Lisp (also known as CL)',
							'COMPASS',
							'Component Pascal',
							'Constraint Handling Rules (CHR)',
							'COMTRAN',
							'Converge',
							'Cool',
							'Coq',
							'Coral 66',
							'Corn',
							'CorVision',
							'COWSEL',
							'CPL',
							'CPL',
							'Cryptol',
							'csh',
							'Csound',
							'CSP',
							'CUDA',
							'Curl',
							'Curry',
							'Cybil',
							'Cyclone',
							'Cython',
							'Java',
							'Javascript',
							'M2001',
							'M4',
							'M#',
							'Machine code',
							'MAD (Michigan Algorithm Decoder)',
							'MAD/I',
							'Magik',
							'Magma',
							'make',
							'Maple',
							'MAPPER now part of BIS',
							'MARK-IV now VISION:BUILDER',
							'Mary',
							'MASM Microsoft Assembly x86',
							'MATH-MATIC',
							'Mathematica',
							'MATLAB',
							'Maxima (see also Macsyma)',
							'Max (Max Msp – Graphical Programming Environment)',
							'Maya (MEL)',
							'MDL',
							'Mercury',
							'Mesa',
							'Metafont',
							'Microcode',
							'MicroScript',
							'MIIS',
							'Milk (programming language)',
							'MIMIC',
							'Mirah',
							'Miranda',
							'MIVA Script',
							'ML',
							'Model 204',
							'Modelica',
							'Modula',
							'Modula-2',
							'Modula-3',
							'Mohol',
							'MOO',
							'Mortran',
							'Mouse',
							'MPD',
							'Mathcad',
							'MSIL – deprecated name for CIL',
							'MSL',
							'MUMPS',
							'Mystic Programming L'
						],
						maxTags: 10,
						dropdown: {
							maxItems: 20,
							classname: 'tagify__inline__suggestions',
							enabled: 0,
							closeOnSelect: !1
						}
					}),
						new Tagify(t, {
							whitelist: [
								'A# .NET',
								'A# (Axiom)',
								'A-0 System',
								'A+',
								'A++',
								'ABAP',
								'ABC',
								'ABC ALGOL',
								'ABSET',
								'ABSYS',
								'ACC',
								'Accent',
								'Ace DASL',
								'ACL2',
								'Avicsoft',
								'ACT-III',
								'Action!',
								'ActionScript',
								'Ada',
								'Adenine',
								'Agda',
								'Agilent VEE',
								'Agora',
								'AIMMS',
								'Alef',
								'ALF',
								'ALGOL 58',
								'ALGOL 60',
								'ALGOL 68',
								'ALGOL W',
								'Alice',
								'Alma-0',
								'AmbientTalk',
								'Amiga E',
								'AMOS',
								'AMPL',
								'Apex (Salesforce.com)',
								'APL',
								'AppleScript',
								'Arc',
								'ARexx',
								'Argus',
								'AspectJ',
								'Assembly language',
								'ATS',
								'Ateji PX',
								'AutoHotkey',
								'Autocoder',
								'AutoIt',
								'AutoLISP / Visual LISP',
								'Averest',
								'AWK',
								'Axum',
								'Active Server Pages',
								'ASP.NET',
								'B',
								'Babbage',
								'Bash',
								'BASIC',
								'bc',
								'BCPL',
								'BeanShell',
								'Batch (Windows/Dos)',
								'Bertrand',
								'BETA',
								'Bigwig',
								'Bistro',
								'BitC',
								'BLISS',
								'Blockly',
								'BlooP',
								'Blue',
								'Boo',
								'Boomerang',
								'Bourne shell (including bash and ksh)',
								'BREW',
								'BPEL',
								'B',
								'C--',
								'C++ – ISO/IEC 14882',
								'C# – ISO/IEC 23270',
								'C/AL',
								'Caché ObjectScript',
								'C Shell',
								'Caml',
								'Cayenne',
								'CDuce',
								'Cecil',
								'Cesil',
								'Céu',
								'Ceylon',
								'CFEngine',
								'CFML',
								'Cg',
								'Ch',
								'Chapel',
								'Charity',
								'Charm',
								'Chef',
								'CHILL',
								'CHIP-8',
								'chomski',
								'ChucK',
								'CICS',
								'Cilk',
								'Citrine (programming language)',
								'CL (IBM)',
								'Claire',
								'Clarion',
								'Clean',
								'Clipper',
								'CLIPS',
								'CLIST',
								'Clojure',
								'CLU',
								'CMS-2',
								'COBOL – ISO/IEC 1989',
								'CobolScript – COBOL Scripting language',
								'Cobra',
								'CODE',
								'CoffeeScript',
								'ColdFusion',
								'COMAL',
								'Combined Programming Language (CPL)',
								'COMIT',
								'Common Intermediate Language (CIL)',
								'Common Lisp (also known as CL)',
								'COMPASS',
								'Component Pascal',
								'Constraint Handling Rules (CHR)',
								'COMTRAN',
								'Converge',
								'Cool',
								'Coq',
								'Coral 66',
								'Corn',
								'CorVision',
								'COWSEL',
								'CPL',
								'CPL',
								'Cryptol',
								'csh',
								'Csound',
								'CSP',
								'CUDA',
								'Curl',
								'Curry',
								'Cybil',
								'Cyclone',
								'Cython',
								'Java',
								'Javascript',
								'M2001',
								'M4',
								'M#',
								'Machine code',
								'MAD (Michigan Algorithm Decoder)',
								'MAD/I',
								'Magik',
								'Magma',
								'make',
								'Maple',
								'MAPPER now part of BIS',
								'MARK-IV now VISION:BUILDER',
								'Mary',
								'MASM Microsoft Assembly x86',
								'MATH-MATIC',
								'Mathematica',
								'MATLAB',
								'Maxima (see also Macsyma)',
								'Max (Max Msp – Graphical Programming Environment)',
								'Maya (MEL)',
								'MDL',
								'Mercury',
								'Mesa',
								'Metafont',
								'Microcode',
								'MicroScript',
								'MIIS',
								'Milk (programming language)',
								'MIMIC',
								'Mirah',
								'Miranda',
								'MIVA Script',
								'ML',
								'Model 204',
								'Modelica',
								'Modula',
								'Modula-2',
								'Modula-3',
								'Mohol',
								'MOO',
								'Mortran',
								'Mouse',
								'MPD',
								'Mathcad',
								'MSIL – deprecated name for CIL',
								'MSL',
								'MUMPS',
								'Mystic Programming L'
							],
							maxTags: 10,
							dropdown: {
								maxItems: 20,
								classname: '',
								enabled: 0,
								closeOnSelect: !1
							}
						});
				})(),
				(function (e) {
					var a = document.querySelector('#kt_tagify_8');
					new Tagify(a);
				})(),
				(i = document.querySelector('#kt_tagify_custom')),
				(o = new Tagify(i, {
					whitelist: ['Bootstrap', 'Angular', 'React', 'Vue'],
					placeholder: 'Type something',
					enforceWhitelist: !0
				})),
				(l = document.querySelector('#kt_tagify_custom_suggestions')),
				KTUtil.on(
					l,
					'[data-kt-suggestion="true"]',
					'click',
					function (e) {
						o.addTags([this.innerText]);
					}
				),
				e(),
				a();
		}
	};
})();
KTUtil.onDOMContentLoaded(function () {
	KTFormsTagifyDemos.init();
});
