webpackJsonp([10],{"3H5M":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("CJJO"),o={data:function(){return{testText:"初始",testArr:"",testRes:"暂无数据",tip:"",userId:"",totalPrice:"",blankQrCodeId:""}},created:function(){var e=this;console.log("created-qrcode"),this.blankQrCodeId=this.$route.query.id,Object(s.i)(this.blankQrCodeId).then(function(t){console.log(t),e.userId=t.obj.userId,e.totalPrice=t.obj.totalPrice,e.storeId=t.obj.storeId;var r=e.userId;null!=r&&""!=r&&"null"!=r&&r&&sessionStorage.setItem("userId",r);var o=e.totalPrice;null!=o&&""!=o&&"null"!=o&&o&&sessionStorage.setItem("totalPrice",o);var n=e.storeId;null!=n&&""!=n&&"null"!=n&&"undefined"!=n&&n&&sessionStorage.setItem("storeId",n);var i=window.navigator.userAgent.toLowerCase();"micromessenger"!=i.match(/MicroMessenger/i)?"alipayclient"!=i.match(/AlipayClient/i)?e.tip="请用对应程序进行扫码":e.$router.push({path:"/zfb/paySuccess",query:{}}):window.location.href=s.a+"/order/app/wx_login?userId="+e.userId}).catch(function(e){console.log(e)})},methods:{}},n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("p",{staticClass:"lf-tip"},[this._v(this._s(this.tip))])])},staticRenderFns:[]};var i=r("VU/8")(o,n,!1,function(e){r("S7qe")},null,null);t.default=i.exports},S7qe:function(e,t){}});
//# sourceMappingURL=10.def6881797702c9f08f0.js.map