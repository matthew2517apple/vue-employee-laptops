(function(e){function t(t){for(var n,l,p=t[0],i=t[1],s=t[2],m=0,c=[];m<p.length;m++)l=p[m],a[l]&&c.push(a[l][0]),a[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(c.length)c.shift()();return r.push.apply(r,s||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,p=1;p<o.length;p++){var i=o[p];0!==a[i]&&(n=!1)}n&&(r.splice(t--,1),e=l(l.s=o[0]))}return e}var n={},a={app:0},r=[];function l(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=n,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(o,n,function(t){return e[t]}.bind(null,n));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var p=window["webpackJsonp"]=window["webpackJsonp"]||[],i=p.push.bind(p);p.push=t,p=p.slice();for(var s=0;s<p.length;s++)t(p[s]);var u=i;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var n=o("64a9"),a=o.n(n);a.a},"4cb1":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("Navigation"),o("RouterView")],1)},r=[],l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"navigation"},[o("span",{staticClass:"p-2"},[o("router-link",{attrs:{to:"/employees"}},[e._v("Employee Management")])],1),o("span",{staticClass:"p-2"},[o("router-link",{attrs:{to:"/laptops"}},[e._v("Laptop Management")])],1)])},p=[],i={name:"Navigation"},s=i,u=(o("8c29"),o("2877")),m=Object(u["a"])(s,l,p,!1,null,"eee52b56",null),c=m.exports,d={name:"app",components:{Navigation:c}},h=d,f=(o("034f"),Object(u["a"])(h,a,r,!1,null,null,null)),v=f.exports,b=o("8c4f"),y=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h2",[e._v("Edit Employee")]),o("p",[e._v("Employee ID "+e._s(e.id))]),o("EmployeeForm",{attrs:{employee:e.employee},on:{employeeFormSubmit:e.employeeFormSubmit}},[e._v("\n        Edit\n    ")]),o("div",[o("h3",[e._v("Laptops")]),0==e.laptops.length?o("h4",[e._v(e._s(e.employee.name)+" has no laptops assigned.")]):o("ul",e._l(e.laptops,function(t){return o("li",{key:t.id},[o("router-link",{attrs:{to:{name:"laptop",params:{id:t.id}}}},[e._v("ID "+e._s(t.id))]),e._v("\n             "+e._s(t.brand)+" "+e._s(t.model)+" with serial number "+e._s(t.serialNumber)+" ")],1)}),0),o("router-link",{attrs:{to:"/laptops"}},[e._v("Assign laptops from a laptop's page")])],1),o("hr"),o("button",{staticClass:"btn btn-danger mt-3 mr-5",on:{click:e.deleteEmployee}},[e._v("Delete")])],1)},_=[],E=(o("7f7f"),o("cebc")),g=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("form",[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"employeeName"}},[e._v("Employee Name")]),o("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.name,expression:"name",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"employeeName"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),o("button",{staticClass:"btn btn-primary mt-3 mr-4",attrs:{type:"button"},on:{click:e.employeeFormSubmit}},[e._t("default")],2),o("button",{staticClass:"btn btn-outline-secondary mt-3",attrs:{type:"button"},on:{click:e.cancel}},[e._v("Cancel")])])])])},A=[],C={name:"CreateEmployee",props:{employee:Object},data:function(){return{id:"",name:""}},methods:{employeeFormSubmit:function(){this.name?this.$emit("employeeFormSubmit",{id:this.id,name:this.name}):alert("Please enter the employee's name.")},cancel:function(){this.$router.push("/employees")}},watch:{employee:function(){this.id=this.id,this.name=this.employee.name}}},$=C,L=Object(u["a"])($,g,A,!1,null,null,null),N=L.exports,w={name:"Employee",components:{EmployeeForm:N},data:function(){return{id:"",employee:{},disabled:!0,laptops:[]}},mounted:function(){var e=this;this.id=this.$route.params.id,this.$services.employees.getEmployee(this.id).then(function(t){e.employee=t,e.$services.employees.getEmployeeLaptops(e.id).then(function(t){e.laptops=t})})},methods:{employeeFormSubmit:function(e){var t=this;this.$services.employees.updateEmployee(Object(E["a"])({id:this.id},e)).then(function(e){t.$router.push("/employees")})},cancel:function(){this.$router.push("/employees")},deleteEmployee:function(){var e=this;confirm("Delete ".concat(this.employee.name,"?"))&&this.$services.employees.deleteEmployee(this.id).then(function(){e.$router.push("/employees")})}}},F=w,S=Object(u["a"])(F,y,_,!1,null,null,null),k=S.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"employee-list"},[n("h2",[e._v("Employees")]),n("router-link",{attrs:{to:"/create_employee"}},[n("button",{staticClass:"btn btn-secondary mt-2 mb-2"},[e._v("Create new employee")])]),n("table",{staticClass:"table table-hover"},[e._m(0),e._l(e.employees,function(t){return n("tr",{key:t.id},[n("td",[e._v(e._s(t.id))]),n("td",[e._v(e._s(t.name))]),n("td",[n("router-link",{attrs:{to:{name:"employee",params:{id:t.id}}}},[n("img",{attrs:{src:o("aa93")}})])],1)])})],2)],1)},O=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("tr",[o("th",[e._v("id")]),o("th",[e._v("Name")]),o("th",[e._v("Edit")])])}],j={name:"Footer",data:function(){return{employees:[]}},mounted:function(){var e=this;this.$services.employees.getAllEmployees().then(function(t){e.employees=t})}},D=j,M=Object(u["a"])(D,x,O,!1,null,"867b0498",null),P=M.exports,I=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h2",[e._v("Create New Employee")]),o("EmployeeForm",{on:{employeeFormSubmit:e.employeeFormSubmit}},[e._v("\n        Create\n    ")])],1)},Q=[],U={name:"CreateEmployee",components:{EmployeeForm:N},data:function(){return{name:""}},methods:{employeeFormSubmit:function(e){var t=this;this.$services.employees.addEmployee(e).then(function(e){t.$router.push("/employees")})},cancel:function(){this.$router.push("/employees")}}},H=U,B=Object(u["a"])(H,I,Q,!1,null,null,null),R=B.exports,G=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h2",[e._v("Laptop ID "+e._s(e.laptop.id))]),o("LaptopForm",{attrs:{laptop:e.laptop},on:{laptopFormSubmit:e.laptopFormSubmit}},[e._v("\n        Edit\n    ")]),e.laptop.employeeId?o("h2",[e._v("This laptop is assigned to employee \n        "),o("router-link",{attrs:{to:{name:"employee",params:{id:e.laptop.employeeId}}}},[e._v("#"+e._s(e.laptop.employeeId))])],1):o("h2",[e._v("This laptop is not assigned to an employee ")]),o("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedEmployee,expression:"selectedEmployee"}],on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selectedEmployee=t.target.multiple?o:o[0]}}},e._l(e.employees,function(t){return o("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.id)+" "+e._s(t.name))])}),0),o("br"),o("button",{staticClass:"btn btn-primary mt-2",on:{click:e.updateEmployee}},[e._v("Change employee")]),o("br"),o("button",{staticClass:"btn btn-secondary mt-2",on:{click:e.unassign}},[e._v("Unassign Laptop")]),o("hr"),o("button",{staticClass:"btn btn-danger mt-5",on:{click:e.deleteLaptop}},[e._v("Delete Laptop")])],1)},W=[],T=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"laptopBrand"}},[e._v("Brand")]),o("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.brand,expression:"brand",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"laptopBrand",required:""},domProps:{value:e.brand},on:{input:function(t){t.target.composing||(e.brand=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),o("label",{attrs:{for:"laptopModel"}},[e._v("Model")]),o("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.model,expression:"model",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"laptopNodel",required:""},domProps:{value:e.model},on:{input:function(t){t.target.composing||(e.model=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),o("label",{attrs:{for:"laptopSerialNumber"}},[e._v("Serial Number")]),o("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.serialNumber,expression:"serialNumber",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"laptopSerialNumber",required:""},domProps:{value:e.serialNumber},on:{input:function(t){t.target.composing||(e.serialNumber=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),o("button",{staticClass:"btn btn-primary mt-3 mr-4",on:{click:e.laptopFormSubmit}},[e._t("default")],2),o("button",{staticClass:"btn btn-outline-secondary mt-3",on:{click:e.cancel}},[e._v("Cancel")])])])},Y=[],J={name:"CreateLaptop",props:{laptop:Object},data:function(){return{id:"",brand:"",model:"",serialNumber:""}},watch:{laptop:function(){console.log("laopto",this.laptop),this.id=this.laptop.id,this.brand=this.laptop.brand,this.model=this.laptop.model,this.serialNumber=this.laptop.serialNumber}},methods:{laptopFormSubmit:function(){var e={id:this.id,brand:this.brand,model:this.model,serialNumber:this.serialNumber};this.brand&&this.model&&this.serialNumber?this.$emit("laptopFormSubmit",e):alert("Enter a brand, model, and serial number")},cancel:function(){this.$router.push("/laptops")}}},q=J,Z=Object(u["a"])(q,T,Y,!1,null,null,null),z=Z.exports,K={name:"Laptop",components:{LaptopForm:z},data:function(){return{laptop:{},employees:[],selectedEmployee:{}}},mounted:function(){this.id=this.$route.params.id,this.loadData()},methods:{loadData:function(){var e=this;this.$services.laptops.getLaptop(this.id).then(function(t){console.log(t),e.laptop=t,e.$services.employees.getAllEmployees().then(function(t){e.employees=t,e.selectedEmployee=e.laptop.employeeId})})},laptopFormSubmit:function(e){var t=this;this.$services.laptops.updateLaptop(e).then(function(e){t.$router.push("/laptops")})},cancel:function(){this.$router.push("/laptops")},updateEmployee:function(){var e=this;this.selectedEmployee?(console.log(this.selectedEmployee),this.$services.laptops.assignLaptop(this.laptop.id,this.selectedEmployee).then(function(t){e.loadData()})):alert("Select an employee")},unassign:function(){var e=this;this.$services.laptops.assignLaptop(this.laptop.id,null).then(function(t){e.loadData()})},deleteLaptop:function(){var e=this;confirm("Delete laptop with serial number ".concat(this.laptop.serialNumber,"? "))&&this.$services.laptops.deleteLaptop(this.laptop.id).then(function(){e.$router.push("/laptops")})}}},V=K,X=Object(u["a"])(V,G,W,!1,null,null,null),ee=X.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"laptop-list"},[n("h2",[e._v("Laptops")]),n("router-link",{attrs:{to:"/create_laptop"}},[n("button",{staticClass:"btn btn-secondary mt-2 mb-2"},[e._v("Create new laptop")])]),n("table",{staticClass:"table table-hover"},[e._m(0),e._l(e.laptops,function(t){return n("tr",{key:t.id},[n("td",[e._v(e._s(t.id))]),n("td",[e._v(e._s(t.brand))]),n("td",[e._v(e._s(t.model))]),n("td",[e._v(e._s(t.serialNumber))]),n("td",[t.employeeId?n("router-link",{attrs:{to:{name:"employee",params:{id:t.employeeId}}}},[e._v(" \n            "+e._s(t.employeeId)+"\n          ")]):e._e()],1),n("td",[n("router-link",{attrs:{to:{name:"laptop",params:{id:t.id}}}},[n("img",{attrs:{src:o("aa93")}})])],1)])})],2)],1)},oe=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("tr",[o("th",[e._v("id")]),o("th",[e._v("Brand")]),o("th",[e._v("Model")]),o("th",[e._v("Serial Number")]),o("th",[e._v("Employee ID")]),o("th",[e._v("Edit")])])}],ne={name:"Footer",data:function(){return{laptops:[]}},mounted:function(){var e=this;this.$services.laptops.getAllLaptops().then(function(t){e.laptops=t})}},ae=ne,re=Object(u["a"])(ae,te,oe,!1,null,"7d78a135",null),le=re.exports,pe=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h2",[e._v("Create new laptop")]),o("LaptopForm",{on:{laptopFormSubmit:e.laptopFormSubmit}},[e._v("\n        Create\n    ")])],1)},ie=[],se={name:"CreateLaptop",components:{LaptopForm:z},data:function(){return{brand:"",model:"",serialNumber:""}},methods:{laptopFormSubmit:function(e){var t=this;this.$services.laptops.addLaptop(e).then(function(e){t.$router.push("/laptops")}).catch(function(e){console.error(e),alert("Error creating laptop.")})},cancel:function(){this.$router.push("/laptops")}}},ue=se,me=Object(u["a"])(ue,pe,ie,!1,null,null,null),ce=me.exports,de=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},he=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("h1",[e._v("Employee Laptop Management App")]),o("p",[e._v("Welcome! Click on one of the links to start.")])])}],fe={name:"Home"},ve=fe,be=(o("8b71"),Object(u["a"])(ve,de,he,!1,null,null,null)),ye=be.exports,_e={Home:ye,Navigation:c,Employee:k,EmployeeList:P,CreateEmployee:R,Laptop:ee,LaptopList:le,CreateLaptop:ce},Ee=new b["a"]({routes:[{path:"/",component:_e.Home},{path:"/employees",component:_e.EmployeeList},{path:"/laptops",component:_e.LaptopList},{path:"/employee/:id",name:"employee",component:_e.Employee},{path:"/laptop/:id",name:"laptop",component:_e.Laptop},{path:"/create_employee",component:_e.CreateEmployee},{path:"/create_laptop",component:_e.CreateLaptop}]}),ge=o("9f7b"),Ae=o.n(ge),Ce=(o("f9e3"),o("2dd8"),o("bc3a")),$e=o.n(Ce),Le={getAllEmployees:function(){return $e.a.get("/api/employees").then(function(e){return e.data})},getEmployee:function(e){return $e.a.get("/api/employees/"+e).then(function(e){return e.data})},addEmployee:function(e){return $e.a.post("/api/employees",e).then(function(e){return e.data})},updateEmployee:function(e){return $e.a.patch("/api/employees/"+e.id,e).then(function(e){return e.data})},deleteEmployee:function(e){return $e.a.delete("/api/employees/"+e).then(function(e){return e.data})},getEmployeeLaptops:function(e){return $e.a.get("/api/employees/".concat(e,"/laptops")).then(function(e){return e.data})}},Ne={getAllLaptops:function(){return $e.a.get("/api/laptops").then(function(e){return e.data})},getLaptop:function(e){return $e.a.get("/api/laptops/"+e).then(function(e){return e.data})},addLaptop:function(e){return $e.a.post("/api/laptops",e).then(function(e){return e.data})},updateLaptop:function(e){return $e.a.patch("/api/laptops/"+e.id,e).then(function(e){return e.data})},deleteLaptop:function(e){return $e.a.delete("/api/laptops/"+e).then(function(e){return e.data})},assignLaptop:function(e,t){return $e.a.patch("/api/laptops/".concat(e,"/employee"),{employeeId:t}).then(function(e){return e.data})}},we={employees:Le,laptops:Ne};n["a"].use(b["a"]),n["a"].use(Ae.a),n["a"].prototype.$services=we,new n["a"]({render:function(e){return e(v)},router:Ee}).$mount("#app")},"64a9":function(e,t,o){},"8b71":function(e,t,o){"use strict";var n=o("e3a2"),a=o.n(n);a.a},"8c29":function(e,t,o){"use strict";var n=o("4cb1"),a=o.n(n);a.a},aa93:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAE/SURBVEhL7dUrSwRRHIbxI+JlFQyKGLxki8Fi8CsYTHbBZDGoQdYsVpsIghZB0CB47TY/gaAIJhERMdi8Pe/sHpDhnDnzn7j4wo/dWXbOExZmXWQduMWPwRfWYdoYQoelnME0H3rMrtKbQWuGTrOrxrqar4WrEnrFZHbl3Aa+sYd2fRCbNTQNH1mF7vUOEI1ZQ1oNOnAEd/gbUzw4a6gbVziEj93DhxYRnCWkH/0S/lAfG8UDttCG4MqGOnEBH8nHBhCNaGVCipwjH/GWkFwqlIocQ8/L5FKhE+QP90pHtKLQBJ6xAj0JKke0otAa9htvXR/091ApohWFrrGAXsziHUdQpAemxUL9+MQbPnCDOhQZxy5Mi4WGocPmMagPmtP3n/D/x9fCoRfMlbCJSqEh6EYrPZrMW8aOwTamEJhzv6sDthNDtXvwAAAAAElFTkSuQmCC"},e3a2:function(e,t,o){}});
//# sourceMappingURL=app.f2ec9cef.js.map