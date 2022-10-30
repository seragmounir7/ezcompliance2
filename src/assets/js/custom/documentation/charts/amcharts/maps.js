'use strict';
var KTGeneralAmChartsMaps = (function () {
	const e = getComputedStyle(document.documentElement).getPropertyValue(
			'--kt-body-color'
		),
		t = getComputedStyle(document.documentElement).getPropertyValue(
			'--kt-body-bg'
		);
	return {
		init: function () {
			am5.ready(function () {
				var e = am5.Root.new('kt_amcharts_1');
				e.setThemes([am5themes_Animated.new(e)]);
				var t = e.container.children.push(
						am5map.MapChart.new(e, {
							panX: 'translateX',
							panY: 'translateY',
							projection: am5map.geoMercator()
						})
					),
					a = t.series.push(
						am5map.MapPolygonSeries.new(e, {
							geoJSON: am5geodata_worldLow,
							exclude: ['AQ']
						})
					);
				a.mapPolygons.template.setAll({
					tooltipText: '{name}',
					toggleKey: 'active',
					interactive: !0
				}),
					a.mapPolygons.template.states.create('hover', {
						fill: e.interfaceColors.get('primaryButtonHover')
					}),
					a.mapPolygons.template.states.create('active', {
						fill: e.interfaceColors.get('primaryButtonHover')
					});
				var o = t.series.push(
					am5map.MapPolygonSeries.new(e, {
						geoJSON: am5geodata_usaLow
					})
				);
				o.mapPolygons.template.setAll({
					tooltipText: '{name}',
					toggleKey: 'active',
					interactive: !0
				});
				var n = am5.ColorSet.new(e, {});
				o.mapPolygons.template.set('fill', n.getIndex(3)),
					o.mapPolygons.template.states.create('hover', {
						fill: e.interfaceColors.get('primaryButtonHover')
					}),
					o.mapPolygons.template.states.create('active', {
						fill: e.interfaceColors.get('primaryButtonHover')
					}),
					t.set('zoomControl', am5map.ZoomControl.new(e, {})),
					t.chartContainer
						.get('background')
						.events.on('click', function () {
							t.goHome();
						}),
					t.appear(1e3, 100);
			}),
				am5.ready(function () {
					var a = am5.Root.new('kt_amcharts_2');
					a.setThemes([am5themes_Animated.new(a)]);
					var o = a.container.children.push(
							am5map.MapChart.new(a, {
								panX: 'rotateX',
								panY: 'translateY',
								projection: am5map.geoMercator(),
								homeGeoPoint: { latitude: 2, longitude: 2 }
							})
						),
						n = o.children.push(
							am5.Container.new(a, {
								layout: a.horizontalLayout,
								x: 20,
								y: 40
							})
						);
					n.children.push(
						am5.Label.new(a, {
							centerY: am5.p50,
							text: 'Map',
							fill: e
						})
					);
					var r = n.children.push(
						am5.Button.new(a, {
							themeTags: ['switch'],
							centerY: am5.p50,
							icon: am5.Circle.new(a, { themeTags: ['icon'] })
						})
					);
					r.on('active', function () {
						r.get('active')
							? (o.set('projection', am5map.geoOrthographic()),
							  o.set('panY', 'rotateY'),
							  l.mapPolygons.template.set('fillOpacity', 0.1))
							: (o.set('projection', am5map.geoMercator()),
							  o.set('panY', 'translateY'),
							  o.set('rotationY', 0),
							  l.mapPolygons.template.set('fillOpacity', 0));
					}),
						n.children.push(
							am5.Label.new(a, {
								centerY: am5.p50,
								text: 'Globe',
								fill: e
							})
						);
					var l = o.series.push(am5map.MapPolygonSeries.new(a, {}));
					l.mapPolygons.template.setAll({
						fill: a.interfaceColors.get('alternativeBackground'),
						fillOpacity: 0,
						strokeOpacity: 0
					}),
						l.data.push({
							geometry: am5map.getGeoRectangle(90, 180, -90, -180)
						}),
						o.series.push(
							am5map.MapPolygonSeries.new(a, {
								geoJSON: am5geodata_worldLow
							})
						);
					var i = o.series.push(am5map.MapLineSeries.new(a, {}));
					i.mapLines.template.setAll({
						stroke: e,
						strokeOpacity: 0.3
					});
					var s = o.series.push(am5map.MapPointSeries.new(a, {}));
					s.bullets.push(function () {
						var e = am5.Circle.new(a, {
							radius: 7,
							tooltipText: 'Drag me!',
							cursorOverStyle: 'pointer',
							tooltipY: 0,
							fill: am5.color(16759296),
							stroke: t,
							strokeWidth: 2,
							draggable: !0
						});
						return (
							e.events.on('dragged', function (t) {
								var a = t.target.dataItem,
									n =
										(o.get('projection'),
										o.invert({ x: e.x(), y: e.y() }));
								a.setAll({
									longitude: n.longitude,
									latitude: n.latitude
								});
							}),
							am5.Bullet.new(a, { sprite: e })
						);
					});
					var p = v({ latitude: 48.8567, longitude: 2.351 }, 'Paris'),
						m = v(
							{ latitude: 43.8163, longitude: -79.4287 },
							'Toronto'
						),
						c = v(
							{ latitude: 34.3, longitude: -118.15 },
							'Los Angeles'
						),
						u = v({ latitude: 23, longitude: -82 }, 'Havana'),
						g = i.pushDataItem({ pointsToConnect: [p, m, c, u] }),
						d = o.series.push(am5map.MapPointSeries.new(a, {})),
						h = am5.Graphics.new(a, {
							svgPath:
								'm2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47',
							scale: 0.06,
							centerY: am5.p50,
							centerX: am5.p50,
							fill: t
						});
					d.bullets.push(function () {
						var e = am5.Container.new(a, {});
						return (
							e.children.push(h), am5.Bullet.new(a, { sprite: e })
						);
					});
					var y = d.pushDataItem({
						lineDataItem: g,
						positionOnLine: 0,
						autoRotate: !0
					});
					function v(e, t) {
						return s.pushDataItem({
							latitude: e.latitude,
							longitude: e.longitude
						});
					}
					y.animate({
						key: 'positionOnLine',
						to: 1,
						duration: 1e4,
						loops: 1 / 0,
						easing: am5.ease.yoyo(am5.ease.linear)
					}),
						y.on('positionOnLine', function (e) {
							e >= 0.99
								? h.set('rotation', 180)
								: e <= 0.01 && h.set('rotation', 0);
						}),
						o.appear(1e3, 100);
				}),
				am5.ready(function () {
					var e = am5.Root.new('kt_amcharts_3');
					e.setThemes([am5themes_Animated.new(e)]);
					var t = e.container.children.push(
							am5map.MapChart.new(e, {
								panX: 'rotateX',
								panY: 'rotateY',
								projection: am5map.geoOrthographic(),
								paddingBottom: 20,
								paddingTop: 20,
								paddingLeft: 20,
								paddingRight: 20
							})
						),
						a = t.series.push(
							am5map.MapPolygonSeries.new(e, {
								geoJSON: am5geodata_worldLow
							})
						);
					a.mapPolygons.template.setAll({
						tooltipText: '{name}',
						toggleKey: 'active',
						interactive: !0
					}),
						a.mapPolygons.template.states.create('hover', {
							fill: e.interfaceColors.get('primaryButtonHover')
						});
					var o = t.series.push(am5map.MapPolygonSeries.new(e, {}));
					o.mapPolygons.template.setAll({
						fill: e.interfaceColors.get('alternativeBackground'),
						fillOpacity: 0.1,
						strokeOpacity: 0
					}),
						o.data.push({
							geometry: am5map.getGeoRectangle(90, 180, -90, -180)
						}),
						t.series
							.push(am5map.GraticuleSeries.new(e, {}))
							.mapLines.template.setAll({
								strokeOpacity: 0.1,
								stroke: e.interfaceColors.get(
									'alternativeBackground'
								)
							}),
						t.animate({
							key: 'rotationX',
							from: 0,
							to: 360,
							duration: 3e4,
							loops: 1 / 0
						}),
						t.appear(1e3, 100);
				}),
				am5.ready(function () {
					var t = am5.Root.new('kt_amcharts_4');
					t.setThemes([am5themes_Animated.new(t)]);
					var a = t.container.children.push(
							am5map.MapChart.new(t, {
								panX: 'translateX',
								panY: 'translateY',
								projection: am5map.geoMercator()
							})
						),
						o = am5.ColorSet.new(t, {}),
						n = a.series.push(
							am5map.MapPolygonSeries.new(t, {
								geoJSON: am5geodata_worldTimeZoneAreasLow
							})
						),
						r = n.mapPolygons.template;
					r.setAll({ fillOpacity: 0.6 }),
						r.adapters.add('fill', function (e, t) {
							return am5.Color.saturate(
								o.getIndex(n.mapPolygons.indexOf(t)),
								0.5
							);
						}),
						r.states.create('hover', { fillOpacity: 0.8 });
					var l = a.series.push(
						am5map.MapPolygonSeries.new(t, {
							geoJSON: am5geodata_worldTimeZonesLow
						})
					);
					l.mapPolygons.template.setAll({
						fill: am5.color(0),
						fillOpacity: 0.08
					});
					var i = l.mapPolygons.template;
					i.setAll({ interactive: !0, tooltipText: '{id}' }),
						i.states.create('hover', { fillOpacity: 0.3 });
					var s = a.series.push(am5map.MapPointSeries.new(t, {}));
					s.bullets.push(() =>
						am5.Bullet.new(t, {
							sprite: am5.Label.new(t, {
								text: '{id}',
								populateText: !0,
								centerX: am5.p50,
								centerY: am5.p50,
								fontSize: '0.7em',
								fill: e
							})
						})
					),
						l.events.on('datavalidated', () => {
							am5.array.each(l.dataItems, (e) => {
								var t = e.get('mapPolygon').visualCentroid();
								s.pushDataItem({
									id: e.get('id'),
									geometry: {
										type: 'Point',
										coordinates: [t.longitude, t.latitude]
									}
								});
							});
						}),
						a.set('zoomControl', am5map.ZoomControl.new(t, {}));
					var p = a.children.push(
						am5.Container.new(t, {
							layout: t.horizontalLayout,
							x: 20,
							y: 40
						})
					);
					p.children.push(
						am5.Label.new(t, {
							centerY: am5.p50,
							text: 'Map',
							fill: e
						})
					);
					var m = p.children.push(
						am5.Button.new(t, {
							themeTags: ['switch'],
							centerY: am5.p50,
							icon: am5.Circle.new(t, { themeTags: ['icon'] })
						})
					);
					m.on('active', function () {
						m.get('active')
							? (a.set('projection', am5map.geoOrthographic()),
							  a.set('panX', 'rotateX'),
							  a.set('panY', 'rotateY'))
							: (a.set('projection', am5map.geoMercator()),
							  a.set('panX', 'translateX'),
							  a.set('panY', 'translateY'));
					}),
						p.children.push(
							am5.Label.new(t, {
								centerY: am5.p50,
								text: 'Globe',
								fill: e
							})
						),
						a.appear(1e3, 100);
				});
		}
	};
})();
KTUtil.onDOMContentLoaded(function () {
	KTGeneralAmChartsMaps.init();
});
