!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"9NQz":function(t,r,o){"use strict";o.d(r,"a",function(){return T});var l=o("fXoL"),a=o("lJxs"),i=o("0IaG"),c=o("PSD3"),s=o.n(c),d=o("3Pt+"),m=o("LefN"),f=o("zXlT"),u=o("ofXK");function p(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"p",12),l["\u0275\u0275text"](1," Add Role Management "),l["\u0275\u0275elementEnd"]())}function g(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"p",12),l["\u0275\u0275text"](1," Update Role Management "),l["\u0275\u0275elementEnd"]())}function b(e,t){if(1&e){var n=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"button",13),l["\u0275\u0275listener"]("click",function(){return l["\u0275\u0275restoreView"](n),l["\u0275\u0275nextContext"]().onSubmit()}),l["\u0275\u0275text"](1," Submit "),l["\u0275\u0275elementEnd"]()}if(2&e){var r=l["\u0275\u0275nextContext"]();l["\u0275\u0275property"]("disabled",r.addRole.invalid)}}function v(e,t){if(1&e){var n=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"button",13),l["\u0275\u0275listener"]("click",function(){return l["\u0275\u0275restoreView"](n),l["\u0275\u0275nextContext"]().onSubmit()}),l["\u0275\u0275text"](1," Update "),l["\u0275\u0275elementEnd"]()}if(2&e){var r=l["\u0275\u0275nextContext"]();l["\u0275\u0275property"]("disabled",r.addRole.invalid)}}var h,x,y=((h=function(){function t(n,r,o,l,a){e(this,t),this.fb=n,this.roleService=r,this.dialogRef=o,this.roleSharedService=l,this.data=a,this.addRole=this.fb.group({role:["",d.C.required]}),console.log("",a)}return n(t,[{key:"ngOnInit",value:function(){"edit"===this.data.action&&this.addRole.get("role").patchValue(this.data.role.role)}},{key:"onSubmit",value:function(){var e=this;"new"===this.data.action&&(console.log(this.addRole.value),this.roleService.addRole(this.addRole.value).subscribe(function(t){console.log("res",t),e.roleSharedService.sendRoleEvent("true"),s.a.fire("Added Successfully"),e.dialogRef.close()})),"edit"===this.data.action&&this.roleService.updateRole(this.data.role.roleId._id,this.addRole.value).subscribe(function(t){console.log("res",t),e.roleSharedService.sendRoleEvent(!0),s.a.fire("Update Successfully"),e.dialogRef.close("true")})}},{key:"close",value:function(){this.dialogRef.close()}}]),t}()).\u0275fac=function(e){return new(e||h)(l["\u0275\u0275directiveInject"](d.f),l["\u0275\u0275directiveInject"](m.a),l["\u0275\u0275directiveInject"](i.f),l["\u0275\u0275directiveInject"](f.a),l["\u0275\u0275directiveInject"](i.a))},h.\u0275cmp=l["\u0275\u0275defineComponent"]({type:h,selectors:[["app-add-role"]],decls:22,vars:5,consts:[[3,"formGroup"],["mat-dialog-title","",1,"dialog-title"],[1,"text-center","pt-2"],["style","text-align: center",4,"ngIf"],["type","button","aria-label","Close",1,"close",2,"font-size","30px",3,"click"],["aria-hidden","true"],[1,"row"],[1,"col-12","mt-2","mb-2"],["for","exampleFormControlInput1",1,"form-Label"],["type","text","formControlName","role","id","heading",1,"form-control",2,"height","50px"],[1,"col","d-flex","justify-content-center"],["class","btn btn-primary",3,"disabled","click",4,"ngIf"],[2,"text-align","center"],[1,"btn","btn-primary",3,"disabled","click"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"section"),l["\u0275\u0275elementStart"](1,"form",0),l["\u0275\u0275elementStart"](2,"div",1),l["\u0275\u0275elementStart"](3,"h2",2),l["\u0275\u0275template"](4,p,2,0,"p",3),l["\u0275\u0275template"](5,g,2,0,"p",3),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"button",4),l["\u0275\u0275listener"]("click",function(){return t.close()}),l["\u0275\u0275elementStart"](7,"span",5),l["\u0275\u0275text"](8,"\xd7"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](9,"hr"),l["\u0275\u0275elementStart"](10,"div"),l["\u0275\u0275elementStart"](11,"div",6),l["\u0275\u0275elementStart"](12,"div",7),l["\u0275\u0275elementStart"](13,"p",8),l["\u0275\u0275text"](14," Role "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](15,"input",9),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](16,"br"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](17,"br"),l["\u0275\u0275elementStart"](18,"div",6),l["\u0275\u0275elementStart"](19,"div",10),l["\u0275\u0275template"](20,b,2,1,"button",11),l["\u0275\u0275template"](21,v,2,1,"button",11),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("formGroup",t.addRole),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngIf","new"===t.data.action),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf","edit"===t.data.action),l["\u0275\u0275advance"](15),l["\u0275\u0275property"]("ngIf","new"===t.data.action),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf","edit"===t.data.action))},directives:[d.E,d.s,d.k,i.g,u.n,d.d,d.r,d.i],styles:[".dialog-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}"]}),h),C=o("yZxC"),w=o("bH0Y"),A=function t(){e(this,t),this.access="_NavigationAccess_",this.add="_Add_",this.view="_View_",this.edit="_Edit_",this.delete="_Delete_",this._id="_id",this.formName="formName"},S=function t(){e(this,t),this.access="Navigation Access",this.add="Add",this.view="View",this.edit="Edit",this.delete="Delete",this._id="_id",this.formName="formName"},k=o("Qu3c"),_=o("wZkO"),N=((x=function(){function t(){e(this,t)}return n(t,[{key:"transform",value:function(e){return e}}]),t}()).\u0275fac=function(e){return new(e||x)},x.\u0275pipe=l["\u0275\u0275definePipe"]({name:"changeType",type:x,pure:!0}),x);function E(e,t){if(1&e){var n=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"p",9),l["\u0275\u0275listener"]("click",function(){l["\u0275\u0275restoreView"](n);var e=t.index;return l["\u0275\u0275nextContext"]().handleClick(e)}),l["\u0275\u0275element"](1,"i",10),l["\u0275\u0275elementStart"](2,"span",11),l["\u0275\u0275text"](3),l["\u0275\u0275pipe"](4,"changeType"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"span",12),l["\u0275\u0275listener"]("click",function(){l["\u0275\u0275restoreView"](n);var e=t.index,r=l["\u0275\u0275nextContext"]();return r.deleteRole(r.roleArr[e].roleId)}),l["\u0275\u0275text"](6," delete "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()}if(2&e){var r=t.index,o=l["\u0275\u0275nextContext"]();l["\u0275\u0275classProp"]("active",o.roleArr[r].i),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](4,3,o.roleArr[r].roleId).role)}}function O(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"p"),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275nextContext"]().$implicit;l["\u0275\u0275classProp"]("textCapitaliza","dashboard"==n||"dynamicForm"==n),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"](" ",n," ")}}function I(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",25),l["\u0275\u0275element"](1,"input",26),l["\u0275\u0275elementStart"](2,"label",27),l["\u0275\u0275text"](3),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275nextContext"]().index,r=l["\u0275\u0275nextContext"](2).index,o=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](1),l["\u0275\u0275propertyInterpolate"]("formControlName",o.formNameArr[n]+o.accessName.add+(null==o.roleArr[r]?null:o.roleArr[r].role)),l["\u0275\u0275property"]("value",!0)("id",o.formNameArr[n]+o.accessName.add+(null==o.roleArr[r]?null:o.roleArr[r].role)),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("for",o.formNameArr[n]+o.accessName.add+(null==o.roleArr[r]?null:o.roleArr[r].role)),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](o.accessLabel.add)}}function P(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",25),l["\u0275\u0275element"](1,"input",26),l["\u0275\u0275elementStart"](2,"label",27),l["\u0275\u0275text"](3),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275nextContext"]().index,r=l["\u0275\u0275nextContext"](2).index,o=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](1),l["\u0275\u0275propertyInterpolate"]("formControlName",o.formNameArr[n]+o.accessName.edit+(null==o.roleArr[r]?null:o.roleArr[r].role)),l["\u0275\u0275property"]("value",!0)("id",o.formNameArr[n]+o.accessName.edit+(null==o.roleArr[r]?null:o.roleArr[r].role)),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("for",o.formNameArr[n]+o.accessName.edit+(null==o.roleArr[r]?null:o.roleArr[r].role)),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](o.accessLabel.edit)}}function M(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",25),l["\u0275\u0275element"](1,"input",26),l["\u0275\u0275elementStart"](2,"label",27),l["\u0275\u0275text"](3),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275nextContext"]().index,r=l["\u0275\u0275nextContext"](2).index,o=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](1),l["\u0275\u0275propertyInterpolate"]("formControlName",o.formNameArr[n]+o.accessName.delete+(null==o.roleArr[r]?null:o.roleArr[r].role)),l["\u0275\u0275property"]("value",!0)("id",o.formNameArr[n]+o.accessName.delete+(null==o.roleArr[r]?null:o.roleArr[r].role)),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("for",o.formNameArr[n]+o.accessName.delete+(null==o.roleArr[r]?null:o.roleArr[r].role)),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](o.accessLabel.delete)}}function j(e,t){if(1&e){var n=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"mat-tab"),l["\u0275\u0275template"](1,O,2,3,"ng-template",18),l["\u0275\u0275elementStart"](2,"div",19),l["\u0275\u0275elementStart"](3,"div",20),l["\u0275\u0275elementStart"](4,"span",21),l["\u0275\u0275text"](5),l["\u0275\u0275pipe"](6,"changeType"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"span",22),l["\u0275\u0275listener"]("click",function(){l["\u0275\u0275restoreView"](n);var e=l["\u0275\u0275nextContext"](2).index,t=l["\u0275\u0275nextContext"]();return t.openDialog(t.roleArr[e])}),l["\u0275\u0275text"](8," edit "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](9,"div",20),l["\u0275\u0275elementStart"](10,"label",23),l["\u0275\u0275text"](11),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](12,"div",24),l["\u0275\u0275elementStart"](13,"div",25),l["\u0275\u0275element"](14,"input",26),l["\u0275\u0275elementStart"](15,"label",27),l["\u0275\u0275text"](16),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](17,"div",25),l["\u0275\u0275element"](18,"input",26),l["\u0275\u0275elementStart"](19,"label",27),l["\u0275\u0275text"](20),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](21,I,4,5,"div",28),l["\u0275\u0275template"](22,P,4,5,"div",28),l["\u0275\u0275template"](23,M,4,5,"div",28),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()}if(2&e){var r=t.$implicit,o=t.index,a=l["\u0275\u0275nextContext"](2).index,i=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](5),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](6,15,i.roleArr[a].roleId).role),l["\u0275\u0275advance"](6),l["\u0275\u0275textInterpolate"](r),l["\u0275\u0275advance"](3),l["\u0275\u0275propertyInterpolate"]("formControlName",i.formNameArr[o]+i.accessName.access+(null==i.roleArr[a]?null:i.roleArr[a].role)),l["\u0275\u0275property"]("value",!0)("id",i.formNameArr[o]+i.accessName.access+(null==i.roleArr[a]?null:i.roleArr[a].role)),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("for",i.formNameArr[o]+i.accessName.access+(null==i.roleArr[a]?null:i.roleArr[a].role)),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](i.accessLabel.access),l["\u0275\u0275advance"](2),l["\u0275\u0275propertyInterpolate"]("formControlName",i.formNameArr[o]+i.accessName.view+(null==i.roleArr[a]?null:i.roleArr[a].role)),l["\u0275\u0275property"]("value",!0)("id",i.formNameArr[o]+i.accessName.view+(null==i.roleArr[a]?null:i.roleArr[a].role)),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("for",i.formNameArr[o]+i.accessName.view+(null==i.roleArr[a]?null:i.roleArr[a].role)),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](i.accessLabel.view),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf","dashboard"!==i.formNameArr[o]),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf","dashboard"!==i.formNameArr[o]),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf","dashboard"!==i.formNameArr[o])}}function R(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"mat-tab-group"),l["\u0275\u0275template"](1,j,24,17,"mat-tab",17),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275nextContext"](2);l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngForOf",n.formNameArr2)}}function L(e,t){if(1&e){var n=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"div",13),l["\u0275\u0275template"](1,R,2,1,"mat-tab-group",14),l["\u0275\u0275elementStart"](2,"div",15),l["\u0275\u0275elementStart"](3,"button",16),l["\u0275\u0275listener"]("click",function(){return l["\u0275\u0275restoreView"](n),l["\u0275\u0275nextContext"]().onSubmit()}),l["\u0275\u0275text"](4," Submit "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()}if(2&e){var r=t.index,o=l["\u0275\u0275nextContext"]();l["\u0275\u0275classProp"]("active",o.roleArr[r].i)("show",o.roleArr[r].i),l["\u0275\u0275property"]("formGroup",o.rolemanagment),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",o.formArr)}}var z,V=((z=function(){function t(n,r,o,a,i){var c=this;e(this,t),this.fb=n,this.roleService=r,this.dialog=o,this.roleSharedService=a,this.authService=i,this.roleLength=new l.EventEmitter,this.count=0,this.formArr=!1,this.accessName=new A,this.accessLabel=new S,this.formNameArr2=["Dashboard","WHS Forms","Company Information"],this.formNameArr=["dashboard","WHSForms","CompanyInformation"],this.roleSharedService.getRoleEvent.subscribe(function(e){e&&c.getAllRole()}),this.rolemanagment=this.fb.group({})}return n(t,[{key:"ngOnInit",value:function(){this.getAllRole()}},{key:"getAllRole",value:function(){var e=this;this.roleService.getAllAcess().subscribe(function(t){e.roleArr=t.data,e.roleLength.emit(e.roleArr.length),e.roleArr=e.roleArr.map(function(e,t){return e.i=0===t?1:0,e});for(var n=0;n<e.roleArr.length;n++)for(var r=0;r<e.formNameArr.length;r++)e.rolemanagment.addControl(e.formNameArr[r]+e.accessName.access+e.roleArr[n].role,new d.g("",d.C.required)),e.rolemanagment.addControl(e.formNameArr[r]+e.accessName.view+e.roleArr[n].role,new d.g("",d.C.required)),e.rolemanagment.addControl(e.formNameArr[r]+e.accessName.delete+e.roleArr[n].role,new d.g("",d.C.required)),e.rolemanagment.addControl(e.formNameArr[r]+e.accessName.edit+e.roleArr[n].role,new d.g("",d.C.required)),e.rolemanagment.addControl(e.formNameArr[r]+e.accessName.add+e.roleArr[n].role,new d.g("",d.C.required));e.setValue()})}},{key:"add2",value:function(){return this.rolemanagment.get("attendees")}},{key:"newAction2",value:function(e){return this.fb.group((t={},n="dashboard_Access_"+this.roleArr[e].role,r=["",d.C.required],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t));var t,n,r}},{key:"onSubmit",value:function(){for(var e,t=this,n=Object.keys(this.rolemanagment.value).map(function(e){var n=e.split("_"),r={form:n[0],role:n[2]};return r[n[1]]=""!==t.rolemanagment.get(e).value&&t.rolemanagment.get(e).value,r}),r=[],o=function(o){for(var l=function(l){e=n.filter(function(e){return e.form===t.formNameArr[l]&&e.role===t.roleArr[o].role}).reduce(function(e,t){return Object.assign(e,t)},{}),r.push(e)},a=0;a<t.formNameArr.length;a++)l(a)},l=0;l<this.roleArr.length;l++)o(l);for(var a=[],i=function(e){var n=[];(n=r.filter(function(n){return n.role===t.roleArr[e].role})).forEach(function(e){e.formName=e.form,delete e.form,delete e.role}),a.push({accessArr:n,roleId:t.roleArr[e].roleId._id})},c=0;c<this.roleArr.length;c++)i(c);this.roleService.updateAllAccess(a).subscribe(function(){s.a.fire({title:"Access Updated Successfully",showConfirmButton:!1,timer:1200})})}},{key:"setValue",value:function(){for(var e=this,t=function(t){for(var n=function(n){Object.keys(e.roleArr[t].access[n]).forEach(function(r){var o;"form"!==r&&"formName"!==r&&"_id"!==r&&e.rolemanagment.get(e.roleArr[t].access[n].form+"_".concat(r,"_")+e.roleArr[t].role).setValue(null===(o=e.roleArr[t])||void 0===o?void 0:o.access[n][r])})},r=0;r<e.roleArr[t].access.length;r++)n(r)},n=0;n<this.roleArr.length;n++)t(n);this.formArr=!0}},{key:"openDialog",value:function(e){var t=this;this.dialog.open(y,{height:"50%",width:"500px",data:{action:"edit",role:e}}).afterClosed().subscribe(function(e){"true"===e&&t.ngOnInit()})}},{key:"handleClick",value:function(e){this.count=e,this.roleArr.map(function(e){e.i=0}),this.roleArr[this.count].i=1}},{key:"deleteRole",value:function(e){var t=this;s.a.fire({title:"Are you sure?",text:"Do you want to delete ",icon:"warning",showCancelButton:!0,confirmButtonColor:"#00B96F",cancelButtonColor:"#d33",confirmButtonText:"Yes, Delete!"}).then(function(n){n.value&&t.roleService.deleteRole(e._id).subscribe(function(){s.a.fire({title:"Deleted successfully",showConfirmButton:!1,timer:1200}),t.getAllRole()})})}}]),t}()).\u0275fac=function(e){return new(e||z)(l["\u0275\u0275directiveInject"](d.f),l["\u0275\u0275directiveInject"](m.a),l["\u0275\u0275directiveInject"](i.b),l["\u0275\u0275directiveInject"](f.a),l["\u0275\u0275directiveInject"](w.a))},z.\u0275cmp=l["\u0275\u0275defineComponent"]({type:z,selectors:[["app-checkbox"]],outputs:{roleLength:"roleLength"},decls:13,vars:2,consts:[[1,"row"],[1,"col","ml-2","pt-3"],[1,""],[1,"col-md-3"],["id","v-pills-tab","role","tablist","aria-orientation","vertical",1,"nav","flex-column","nav-pills","nav-pills-custom"],["class","nav-link mb-3 p-3 shadow","id","v-pills-home-tab","data-toggle","pill","role","tab","aria-controls","v-pills-home","aria-selected","true",3,"active","click",4,"ngFor","ngForOf"],[1,"col-md-9"],["id","v-pills-tabContent",1,"tab-content"],["class","tab-pane fade shadow rounded bg-white","id","v-pills-home","role","tabpanel","aria-labelledby","v-pills-home-tab",3,"active","show","formGroup",4,"ngFor","ngForOf"],["id","v-pills-home-tab","data-toggle","pill","role","tab","aria-controls","v-pills-home","aria-selected","true",1,"nav-link","mb-3","p-3","shadow",3,"click"],[1,"fa","fa-user-circle-o","mr-2"],[1,"font-weight-bold","small","text-uppercase"],["matTooltip","Delete",1,"material-icons","float-right",2,"color","rgba(236, 65, 65, 0.842)",3,"click"],["id","v-pills-home","role","tabpanel","aria-labelledby","v-pills-home-tab",1,"tab-pane","fade","shadow","rounded","bg-white",3,"formGroup"],[4,"ngIf"],[1,"col","mt-2","mb-2"],["_ngcontent-hqi-c400","","type","button",1,"btn","btn-primary","mt-1","mr-5","float-md-right",3,"click"],[4,"ngFor","ngForOf"],["mat-tab-label",""],[1,"example-large-box","mat-elevation-z4","p-2","mt-4",2,"align-items","center"],[1,"row","d-flex","justify-content-center"],[1,"font-weight-bold","small","text-capitalize","float-right","col-4",2,"font-size","large","display","flex","justify-content","flex-end"],["matTooltip","Edit",1,"material-icons","ml-2","col-1",2,"font-size","20px",3,"click"],[1,"font-weight-bold","small","text-capitalize","mt-2","mb-1",2,"font-size","revert"],[1,"row","ml-2","mt-5","d-flex","justify-content-around"],[1,"col-3","mt-1"],["type","checkbox",3,"value","id","formControlName"],[1,"txtdefault","fs-16","text-center","label_2",2,"font-weight","400",3,"for"],["class","col-3 mt-1",4,"ngIf"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div",0),l["\u0275\u0275elementStart"](1,"div",1),l["\u0275\u0275elementStart"](2,"h1"),l["\u0275\u0275text"](3,"Role Management List"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](4,"section",2),l["\u0275\u0275elementStart"](5,"div",2),l["\u0275\u0275elementStart"](6,"div",0),l["\u0275\u0275elementStart"](7,"div",3),l["\u0275\u0275elementStart"](8,"div",4),l["\u0275\u0275template"](9,E,7,5,"p",5),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](10,"div",6),l["\u0275\u0275elementStart"](11,"div",7),l["\u0275\u0275template"](12,L,5,6,"div",8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](9),l["\u0275\u0275property"]("ngForOf",t.roleArr),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngForOf",t.roleArr))},directives:[u.m,k.a,d.s,d.k,u.n,_.c,_.a,_.d,d.a,d.r,d.i],pipes:[N],styles:['@import "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css";@import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";.row.ml-2.mt-5.d-flex.justify-content-around[_ngcontent-%COMP%] > div.col-3.mt-1[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:baseline}.viewBtn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#007bff;font-size:21px!important}  .mat-sort-header-container{margin-left:47%!important}table[_ngcontent-%COMP%]{width:100%}.select[_ngcontent-%COMP%]{width:100%!important}.pt-3[_ngcontent-%COMP%]{display:inline-block;font-size:32px;font-weight:700;word-break:break-word;font-family:Inter,sans-serif}td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%]{border:2px solid #eaeaea}[_ngcontent-%COMP%]::-webkit-scrollbar{width:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#f1f1f1}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#888}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#7a7a7a}.roleZIndex[_ngcontent-%COMP%]{z-index:200!important}button.link[_ngcontent-%COMP%]{background:none;border:none}button.link[_ngcontent-%COMP%]:hover{color:#007bff}.nav-pills-custom[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{color:#aaa;background:#fff;position:relative}.nav-pills-custom[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{color:#45b649;background:#fff;border:1px solid}.buttons[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}@media (min-width:992px){.nav-pills-custom[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:before{content:"";display:block;border-top:8px solid transparent;border-left:10px solid #45b649;border-bottom:8px solid transparent;position:absolute;top:50%;right:-10px;transform:translateY(-50%);opacity:0}}.nav-pills-custom[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]:before{opacity:1}body[_ngcontent-%COMP%]{min-height:100vh;background:linear-gradient(270deg,#dce35b,#45b649)}[_nghost-%COMP%]{display:flex;overflow:hidden}[_nghost-%COMP%], [_nghost-%COMP%]     .mat-tab-labels{flex-direction:column}mat-tab-group[_ngcontent-%COMP%]{flex-grow:1;display:flex;flex-direction:row}[_nghost-%COMP%]     .mat-tab-body-wrapper, mat-tab-body[_ngcontent-%COMP%]{flex-grow:1;display:flex;flex-direction:column}[_nghost-%COMP%]     mat-ink-bar{display:none}[_nghost-%COMP%]    .mat-tab-label.mat-tab-label-active{background-color:transparent;border-right:3px solid #45b649}[_nghost-%COMP%]    .mat-tab-label{background-color:transparent}.example-large-box[_ngcontent-%COMP%]{height:300px;width:450px}[_nghost-%COMP%]    .mat-tab-body-content{height:100%;overflow:auto;display:flex;justify-content:center}.textCapitaliza[_ngcontent-%COMP%]{text-transform:capitalize!important}']}),z);function D(e,t){if(1&e){var n=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"button",4),l["\u0275\u0275listener"]("click",function(){return l["\u0275\u0275restoreView"](n),l["\u0275\u0275nextContext"]().openDialog("")}),l["\u0275\u0275element"](1,"i",5),l["\u0275\u0275text"](2," Add Role "),l["\u0275\u0275elementEnd"]()}}var F,T=((F=function(){function t(n,r,o){e(this,t),this.setTitle=n,this.dialog=r,this.authService=o,this.isRoleInvaid=new l.EventEmitter,this.roleLength=0}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.authService.loginData$.pipe(Object(a.a)(function(e){return e.employeePurchased})).subscribe(function(t){return e.employeePurchased=t}),this.setTitle.setTitle("WHS-Role Management")}},{key:"openDialog",value:function(e){this.dialog.open(y,{height:"50%",width:"500px",data:{action:"new",userId:e}}).afterClosed().subscribe(function(e){console.log("AddRoleComponent -> openDialog -> result",e),console.log("The dialog was closed")})}}]),t}()).\u0275fac=function(e){return new(e||F)(l["\u0275\u0275directiveInject"](C.a),l["\u0275\u0275directiveInject"](i.b),l["\u0275\u0275directiveInject"](w.a))},F.\u0275cmp=l["\u0275\u0275defineComponent"]({type:F,selectors:[["app-role-management"]],outputs:{isRoleInvaid:"isRoleInvaid"},decls:4,vars:1,consts:[[1,"row"],[1,"col","mt-2","mb-2"],["type","button","class","btn btn-outline-primary mt-1 mr-2 float-right",3,"click",4,"ngIf"],[3,"roleLength"],["type","button",1,"btn","btn-outline-primary","mt-1","mr-2","float-right",3,"click"],[1,"fas","fa-plus"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div",0),l["\u0275\u0275elementStart"](1,"div",1),l["\u0275\u0275template"](2,D,3,0,"button",2),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](3,"app-checkbox",3),l["\u0275\u0275listener"]("roleLength",function(e){return t.roleLength=e,t.isRoleInvaid.emit(t.roleLength<t.employeePurchased)}),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngIf",t.roleLength<t.employeePurchased))},directives:[u.n,V],styles:["label[_ngcontent-%COMP%]:not(.form-check-label):not(.custom-file-label){font-weight:500}input[_ngcontent-%COMP%]:focus{border:2px solid #1e90ff}label[_ngcontent-%COMP%]{display:inline-block;font-size:14px;font-weight:500;word-break:break-word;font-family:Inter,sans-serif}.form-control[_ngcontent-%COMP%]:hover{border-color:rgba(46,105,255,.5);box-shadow:0 0 0 2px rgba(46,105,255,.25)}.pt-3[_ngcontent-%COMP%]{display:inline-block;font-size:32px;font-weight:700;word-break:break-word;font-family:Inter,sans-serif}.container[_ngcontent-%COMP%]{background-color:#fff}.form-Label[_ngcontent-%COMP%]{display:inline-block;font-size:14px;font-weight:500;word-break:break-word;font-family:Inter,sans-serif;width:100%;margin-left:2px;margin-bottom:14px}.sign[_ngcontent-%COMP%]{padding:10px;border:1px solid rgba(46,105,255,.5);width:500px;border-radius:5px}.sign[_ngcontent-%COMP%]:hover{border:1px solid rgba(46,105,255,.25098039215686274);box-shadow:0 0 0 3px rgba(46,105,255,.25)}.imgStyle[_ngcontent-%COMP%]{border:2px solid rgba(46,105,255,.25098039215686274);border-radius:10px}.dialog-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}"]}),F)},xd2E:function(t,n,r){"use strict";r.r(n),r.d(n,"RoleManagementModule",function(){return g});var o,l,a=r("ofXK"),i=r("PCNd"),c=r("3Pt+"),s=r("tyNb"),d=r("9NQz"),m=r("fXoL"),f=[{path:"",component:d.a}],u=((o=function t(){e(this,t)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:o}),o.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(e){return new(e||o)},imports:[[s.j.forChild(f)],s.j]}),o),p=r("Tnig"),g=((l=function t(){e(this,t)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:l}),l.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(e){return new(e||l)},imports:[[a.c,u,i.a,c.m,c.y,p.a]]}),l)}}])}();