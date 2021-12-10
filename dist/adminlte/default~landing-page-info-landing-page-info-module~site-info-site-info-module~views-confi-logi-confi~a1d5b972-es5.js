(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~landing-page-info-landing-page-info-module~site-info-site-info-module~views-confi-logi-confi~a1d5b972"], {
    /***/
    "5eqV": function eqV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutosizeDirective", function () {
        return AutosizeDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutosizeModule", function () {
        return AutosizeModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return WindowRef;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var WindowRef = /*#__PURE__*/function () {
        function WindowRef() {
          _classCallCheck(this, WindowRef);
        }

        _createClass(WindowRef, [{
          key: "nativeWindow",
          get:
          /**
           * @return {?}
           */
          function get() {
            return window;
          }
        }]);

        return WindowRef;
      }();

      WindowRef.ɵfac = function WindowRef_Factory(t) {
        return new (t || WindowRef)();
      };

      WindowRef.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: WindowRef,
        factory: WindowRef.ɵfac,
        providedIn: 'root'
      });
      /** @nocollapse */

      WindowRef.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function WindowRef_Factory() {
          return new WindowRef();
        },
        token: WindowRef,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindowRef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var MAX_LOOKUP_RETRIES = 3;

      var AutosizeDirective = /*#__PURE__*/function () {
        /**
         * @param {?} element
         * @param {?} _window
         * @param {?} _zone
         */
        function AutosizeDirective(element, _window, _zone) {
          _classCallCheck(this, AutosizeDirective);

          this.element = element;
          this._window = _window;
          this._zone = _zone;
          this.onlyGrow = false;
          this.useImportant = false;
          this.resized = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.retries = 0;
          this._destroyed = false;

          if (this.element.nativeElement.tagName !== 'TEXTAREA') {
            this._findNestedTextArea();
          } else {
            this.textAreaEl = this.element.nativeElement;
            this.textAreaEl.style.overflow = 'hidden';

            this._onTextAreaFound();
          }
        }
        /**
         * @param {?} value
         * @return {?}
         */


        _createClass(AutosizeDirective, [{
          key: "minRows",
          set: function set(value) {
            this._minRows = value;

            if (this.textAreaEl) {
              this.textAreaEl.rows = value;
            }
          }
        }, {
          key: "onInput",
          value:
          /**
           * @param {?} textArea
           * @return {?}
           */
          function onInput(textArea) {
            this.adjust();
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed = true;

            if (this._windowResizeHandler) {
              this._window.nativeWindow.removeEventListener('resize', this._windowResizeHandler, false);
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            this.adjust();
          }
          /**
           * @param {?} changes
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this.adjust(true);
          }
          /**
           * @return {?}
           */

        }, {
          key: "_findNestedTextArea",
          value: function _findNestedTextArea() {
            var _this = this;

            this.textAreaEl = this.element.nativeElement.querySelector('TEXTAREA');

            if (!this.textAreaEl && this.element.nativeElement.shadowRoot) {
              this.textAreaEl = this.element.nativeElement.shadowRoot.querySelector('TEXTAREA');
            }

            if (!this.textAreaEl) {
              if (this.retries >= MAX_LOOKUP_RETRIES) {
                console.warn('ngx-autosize: textarea not found');
              } else {
                this.retries++;
                setTimeout(
                /**
                * @return {?}
                */
                function () {
                  _this._findNestedTextArea();
                }, 100);
              }

              return;
            }

            this.textAreaEl.style.overflow = 'hidden';

            this._onTextAreaFound();
          }
          /**
           * @return {?}
           */

        }, {
          key: "_onTextAreaFound",
          value: function _onTextAreaFound() {
            var _this2 = this;

            this._addWindowResizeHandler();

            setTimeout(
            /**
            * @return {?}
            */
            function () {
              _this2.adjust();
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "_addWindowResizeHandler",
          value: function _addWindowResizeHandler() {
            var _this3 = this;

            this._windowResizeHandler = Debounce(
            /**
            * @return {?}
            */
            function () {
              _this3._zone.run(
              /**
              * @return {?}
              */
              function () {
                _this3.adjust();
              });
            }, 200);

            this._zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              _this3._window.nativeWindow.addEventListener('resize', _this3._windowResizeHandler, false);
            });
          }
          /**
           * @param {?=} inputsChanged
           * @return {?}
           */

        }, {
          key: "adjust",
          value: function adjust() {
            var inputsChanged = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (!this._destroyed && this.textAreaEl && this.textAreaEl.parentNode) {
              /** @type {?} */
              var currentText = this.textAreaEl.value;

              if (inputsChanged === false && currentText === this._oldContent && this.textAreaEl.offsetWidth === this._oldWidth) {
                return;
              }

              this._oldContent = currentText;
              this._oldWidth = this.textAreaEl.offsetWidth;
              /** @type {?} */

              var clone = this.textAreaEl.cloneNode(true);
              /** @type {?} */

              var parent = this.textAreaEl.parentNode;
              clone.style.width = this.textAreaEl.offsetWidth + 'px';
              clone.style.visibility = 'hidden';
              clone.style.position = 'absolute';
              clone.textContent = currentText;
              parent.appendChild(clone);
              clone.style.overflow = 'hidden';
              clone.style.height = 'auto';
              /** @type {?} */

              var height = clone.scrollHeight; // add into height top and bottom borders' width

              /** @type {?} */

              var computedStyle = this._window.nativeWindow.getComputedStyle(clone, null);

              height += parseInt(computedStyle.getPropertyValue('border-top-width'));
              height += parseInt(computedStyle.getPropertyValue('border-bottom-width')); // add into height top and bottom paddings width

              height += parseInt(computedStyle.getPropertyValue('padding-top'));
              height += parseInt(computedStyle.getPropertyValue('padding-bottom'));
              /** @type {?} */

              var oldHeight = this.textAreaEl.offsetHeight;
              /** @type {?} */

              var willGrow = height > oldHeight;

              if (this.onlyGrow === false || willGrow) {
                /** @type {?} */
                var lineHeight = this._getLineHeight();
                /** @type {?} */


                var rowsCount = height / lineHeight;

                if (this._minRows && this._minRows >= rowsCount) {
                  height = this._minRows * lineHeight;
                } else if (this.maxRows && this.maxRows <= rowsCount) {
                  // never shrink the textarea if onlyGrow is true

                  /** @type {?} */
                  var maxHeight = this.maxRows * lineHeight;
                  height = this.onlyGrow ? Math.max(maxHeight, oldHeight) : maxHeight;
                  this.textAreaEl.style.overflow = 'auto';
                } else {
                  this.textAreaEl.style.overflow = 'hidden';
                }
                /** @type {?} */


                var heightStyle = height + 'px';
                /** @type {?} */

                var important = this.useImportant ? 'important' : '';
                this.textAreaEl.style.setProperty('height', heightStyle, important);
                this.resized.emit(height);
              }

              parent.removeChild(clone);
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_getLineHeight",
          value: function _getLineHeight() {
            /** @type {?} */
            var lineHeight = parseInt(this.textAreaEl.style.lineHeight, 10);

            if (isNaN(lineHeight) && this._window.nativeWindow.getComputedStyle) {
              /** @type {?} */
              var styles = this._window.nativeWindow.getComputedStyle(this.textAreaEl);

              lineHeight = parseInt(styles.lineHeight, 10);
            }

            if (isNaN(lineHeight)) {
              /** @type {?} */
              var fontSize = this._window.nativeWindow.getComputedStyle(this.textAreaEl, null).getPropertyValue('font-size');

              lineHeight = Math.floor(parseInt(fontSize.replace('px', ''), 10) * 1.5);
            }

            return lineHeight;
          }
        }]);

        return AutosizeDirective;
      }();

      AutosizeDirective.ɵfac = function AutosizeDirective_Factory(t) {
        return new (t || AutosizeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](WindowRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      AutosizeDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: AutosizeDirective,
        selectors: [["", "autosize", ""]],
        hostBindings: function AutosizeDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AutosizeDirective_input_HostBindingHandler($event) {
              return ctx.onInput($event.target);
            });
          }
        },
        inputs: {
          onlyGrow: "onlyGrow",
          useImportant: "useImportant",
          minRows: "minRows",
          maxRows: "maxRows"
        },
        outputs: {
          resized: "resized"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /** @nocollapse */

      AutosizeDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: WindowRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      AutosizeDirective.propDecorators = {
        minRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onlyGrow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        useImportant: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        resized: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['input', ['$event.target']]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutosizeDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[autosize]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: WindowRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, {
          onlyGrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          useImportant: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          resized: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          minRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],

          /**
           * @param {?} textArea
           * @return {?}
           */
          onInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['input', ['$event.target']]
          }],
          maxRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @param {?} func
       * @param {?} wait
       * @param {?=} immediate
       * @return {?}
       */


      function Debounce(func, wait) {
        var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        /** @type {?} */
        var timeout;
        return (
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var context = this;
            /** @type {?} */

            var args = arguments;
            /** @type {?} */

            var later =
            /**
            * @return {?}
            */
            function later() {
              timeout = null;

              if (!immediate) {
                func.apply(context, args);
              }
            };
            /** @type {?} */


            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);

            if (callNow) {
              func.apply(context, args);
            }
          }
        );
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var AutosizeModule = function AutosizeModule() {
        _classCallCheck(this, AutosizeModule);
      };

      AutosizeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AutosizeModule
      });
      AutosizeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AutosizeModule_Factory(t) {
          return new (t || AutosizeModule)();
        },
        providers: [WindowRef],
        imports: [[]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AutosizeModule, {
          declarations: [AutosizeDirective],
          exports: [AutosizeDirective]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutosizeModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [AutosizeDirective],
            imports: [],
            providers: [WindowRef],
            exports: [AutosizeDirective]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ngx-autosize.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~landing-page-info-landing-page-info-module~site-info-site-info-module~views-confi-logi-confi~a1d5b972-es5.js.map