(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{467:function(t,n,e){"use strict";e.r(n);e(27);var o=e(266),r={name:"StepsFormZip",props:{value:[String,Number]},data:function(){return{}},mounted:function(){this.getZipFromLocation()},methods:{getZipFromLocation:function(){Object(o.a)(this.$axios).then((function(t){console.log(t)}))}}},l=e(11),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("BaseInput",{attrs:{value:t.value,outlined:"",type:"number",size:"large"},on:{input:function(n){return t.$emit("input",n)}}})],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{BaseInput:e(164).default})}}]);