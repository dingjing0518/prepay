(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54d5cfe3"],{"5b5e":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"index-div"},[e._m(0),a("div",{staticClass:"divv-icon"},[a("p",[a("span",{staticClass:"span-icon"},[e._v("账号："+e._s(e.username))]),a("span",{staticStyle:{"margin-left":"60px"}},[e._v("权限名："+e._s(e.roleName))])]),a("p",[a("span",{staticClass:"span-icon"},[e._v("车场："+e._s(e.jpName))]),a("span",{staticStyle:{"margin-left":"60px"}},[e._v("地址："+e._s(e.site))])])])])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"divv"},[a("span",[e._v("金石停车欢迎您")])])}],i={data:function(){return{username:"",roleName:"",ownername:"",site:"",jpName:""}},created:function(){var e=this;this.username=localStorage.getItem("ms_username"),this.roleName=localStorage.getItem("roleName"),this.site=localStorage.getItem("site"),0==localStorage.getItem("site")&&(this.site=""),this.$axios({url:"parkingJinshi/selectParkByParkId",method:"post",data:{parkId:String(localStorage.getItem("parkId"))}}).then(function(t){console.log(t,"444444444444444"),e.jpName=t.data[0].jpName}).catch(function(e){console.log(e)})},methods:{goBack:function(){this.$router.go(-1)}}},o=i,c=(a("9022"),a("2877")),r=Object(c["a"])(o,s,n,!1,null,"032b12a4",null);t["default"]=r.exports},9022:function(e,t,a){"use strict";var s=a("ee4b"),n=a.n(s);n.a},ee4b:function(e,t,a){}}]);