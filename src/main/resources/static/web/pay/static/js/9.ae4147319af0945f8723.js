webpackJsonp([9],{"2Imu":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("CJJO"),a={data:function(){return{htmlProportion:"",htmlWidth:"",htmlheight:"",isWxPay:!0,memberDetail:"",userId:"",merchantId:""}},created:function(){var t=this;this.htmlWidth=document.documentElement.clientWidth||document.body.clientWidth,this.htmlheight=document.documentElement.clientHeight||document.body.clientHeight,this.htmlProportion=this.htmlWidth/750;var e=sessionStorage.getItem("userId");null!=e&&""!=e&&"null"!=e&&e&&(this.userId=e);var s=this.$route.query.merchantId;null!=s&&""!=s&&"null"!=s&&s&&(this.merchantId=s),Object(i.f)(this.userId,this.merchantId).then(function(e){console.log(e),t.memberDetail=e.obj}).catch(function(t){console.log(t)})},methods:{}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-white member-detail-p"},[s("div",{staticClass:"lf-mat",style:{height:40*t.htmlProportion+"px"}}),t._v(" "),s("div",{staticClass:"lf-content"},[s("div",{staticClass:"lf-bottom-line",style:{height:70*t.htmlProportion+"px"}},[s("span",{staticClass:"text-md"},[t._v("会员卡详情")])]),t._v(" "),s("div",{staticClass:"lf-mat",style:{height:40*t.htmlProportion+"px"}}),t._v(" "),s("div",[s("span",{staticClass:"text-grey margin-right-10"},[t._v("特权说明")]),t._v(" "),s("span",{staticClass:"text-sm"},[t._v(t._s(t.memberDetail.privilegeExplain))])]),t._v(" "),s("div",{staticClass:"lf-mat",style:{height:50*t.htmlProportion+"px"}}),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"lf-mat",style:{height:50*t.htmlProportion+"px"}}),t._v(" "),s("div",[s("span",{staticClass:"text-grey margin-right-10"},[t._v("商家电话")]),t._v(" "),s("span",{staticClass:"text-sm"},[t._v(t._s(t.memberDetail.phone))])]),t._v(" "),s("div",{staticClass:"lf-mat",style:{height:50*t.htmlProportion+"px"}}),t._v(" "),s("div",[s("span",{staticClass:"text-grey margin-right-10"},[t._v("使用须知")]),t._v(" "),s("span",{staticClass:"text-sm"},[t._v(t._s(t.memberDetail.tip?t.memberDetail.tip:"无"))])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",{staticClass:"text-grey margin-right-10"},[this._v("有效日期")]),this._v(" "),e("span",{staticClass:"text-sm"},[this._v("永久有效")])])}]};var n=s("VU/8")(a,l,!1,function(t){s("pa1R")},null,null);e.default=n.exports},pa1R:function(t,e){}});
//# sourceMappingURL=9.ae4147319af0945f8723.js.map