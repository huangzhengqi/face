webpackJsonp([6],{"2zbZ":function(e,a,n){var l=n("DBYV");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);n("rjj0")("37297dd8",l,!1,{})},DBYV:function(e,a,n){(e.exports=n("FZ+f")(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"submitZfb.vue",sourceRoot:""}])},"I19/":function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l,i=n("bOdI"),_=n.n(i),c=n("/vau"),r=n("OKQQ"),d=n("gyMJ"),u=n("VuIw"),t=n("5Ah4"),v=n("rWYZ"),h=n("u2g9"),m=n.n(h),s={components:{FzyCascaderTree:t.a},data:function(){return{isImagePreview:!1,openMenu:!1,detail:{},params:{companyId:u.a.getJSON().companyId,managerId:u.a.getJSON().userId,status:"1"},businessLevOneRules:[{validate:function(e){return!!e},message:""}],cascaderArr:[],cascaderTree:[],cooperationLevArr:[],cooperationLevTree:[]}},watch:{cooperationLevArr:function(e,a){e=e||[],this.params.businessLevOne=e[0]||"",this.params.businessLevTwo=e[1]||"",this.params.businessLevThree=e[2]||""},cascaderArr:function(e,a){e=e||[],this.params.province=e[0]||"",this.params.city=e[1]||"",this.params.area=e[2]||""}},filters:{loadImage:function(e){return e?c.b+"/fms/upload/resource/thumbnail/"+e:""},previewLoadImage:function(e){return e?c.b+"/fms/upload/resource/"+e:""}},created:function(){this.intiMerchantType(),this.id=JSON.parse(u.b.get()),this.id?(this.initDetail(),this.sourceData=Object(v.a)(),this.tmpSourceData=this.sourceData):this.$toast.error("详情数据丢失")},mounted:function(){},methods:(l={saveBtn:function(){var e=this,a={id:this.detail.id,mccCode:this.detail.mccCode,mccName:this.detail.mccName,aliAccountName:this.detail.aliAccountName,zfbRate:this.detail.zfbRate/100,specialQualificationPhotoIdZfb:this.detail.specialQualificationPhotoIdZfb};d.b.zfBAdd(a).then(function(a){console.log(a),200===a.code?e.$toast.success(a.msg):e.$toast.info(a.msg)},function(a){e.$toast.success(a.msg)})},intiMerchantType:function(){var e=this.loopSet(m.a);this.cooperationLevTree=e},loopSet:function(e){var a=this;return e.forEach(function(e){return a.$set(e,"id",e.name),e.children&&e.children.length&&(e.children=a.loopSet(e.children)),e}),e},onBack:function(){this.$router.push({name:r.j})},submitBtn:function(){var e=this,a={id:this.detail.id,aliAccountName:this.detail.aliAccountName,mccCode:this.detail.mccCode,mccName:this.detail.mccName,zfbRate:this.detail.zfbRate/100,specialQualificationPhotoIdZfb:this.detail.specialQualificationPhotoIdZfb};d.b.zfbInto(a).then(function(a){200===a.code&&(e.$toast.success("提交成功！请留意进件状态"),e.$router.push({name:r.j})),console.log(a)}),console.log(a)},initDetail:function(){this.detail=JSON.parse(u.c.get()),"SUBJECT_TYPE_INDIVIDUAL"==this.detail.subjectType?this.comTypeName="个体工商户":"SUBJECT_TYPE_ENTERPRISE"!=this.detail.subjectType||(this.comTypeName="企业"),this.detail.zfbRate=this.detail.zfbRate,this.merchantName=JSON.parse(u.d.get()),this.merchantName=this.merchantName.merchantName},previewImage:function(e){e&&(this.imgUrl=e,this.isImagePreview=!0)},callTakePhoto:function(e){this.photoTaker=+e,this.openMenu=!0},onFileChange:function(e){var a=this;if(e.target.files){var n=e.target.files[0];n&&d.b.uploadImage(n).then(function(e){if(200===e.code){a.$toast.success("图片上传成功");var n=e.obj;1===a.photoTaker?a.$set(a.detail,"specialQualificationPhotoIdZfb",n):a.$toast.error(e.msg)}})}},onTakePhoto:function(e){1==+e?this.$refs.fileCamera.click():2==+e&&this.$refs.file.click(),this.openMenu=!1},getImage:function(e){return e?c.b+"/fms/upload/resource/thumbnail/"+e:""},change1:function(e){console.log("##",e),e.forEach(function(e,a){}),this.detail.mccName=e[0].name+"/"+e[1].name+"/"+e[2].name,this.detail.mccCode=e[2].value}},_()(l,"intiMerchantType",function(){var e=this.loopSet(m.a);this.cooperationLevTree=e}),_()(l,"loopSet",function(e){var a=this;return e.forEach(function(e){return a.$set(e,"id",e.name),e.children&&e.children.length&&(e.children=a.loopSet(e.children)),e}),e}),l)},o=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",[n("div",{staticClass:"client-info-detail frame-container box"},[n("div",{staticClass:"client-info-detail__padding"}),e._v(" "),n("div",{staticClass:"client-info-detail__nav box plr-30 align-hor-bet",staticStyle:{position:"relative","z-index":"999"}},[n("div",{staticClass:"icon iconfont  iconreturn",on:{click:e.onBack}}),e._v(" "),n("div",{staticClass:"title"},[e._v("支付宝")]),e._v(" "),n("div",{staticClass:"text",staticStyle:{"background-color":"#4ba8ff",padding:"3px",color:"white","border-radius":"5px"},on:{click:e.saveBtn}},[e._v("保存")])]),e._v(" "),n("div",{staticClass:"client-info-detail__content"},[n("div",{staticClass:"match-width box align-default"},[n("div",{staticClass:"title"},[e._v("经营者信息")]),e._v(" "),n("div",{staticClass:"item"},[e._m(0),e._v(" "),n("div",{staticClass:"match-left-space align-right"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.detail.aliAccountName,expression:"detail.aliAccountName"}],attrs:{placeholder:"请填支付宝账号"},domProps:{value:e.detail.aliAccountName},on:{input:function(a){a.target.composing||e.$set(e.detail,"aliAccountName",a.target.value)}}})])]),e._v(" "),n("mu-form",[n("mu-form-item",{staticStyle:{margin:"0 10px",padding:"0"},attrs:{label:"",prop:"businessLevOne",rules:e.businessLevOneRules}},[n("FzyCascaderTree",{attrs:{dataTree:e.cooperationLevTree,label:"经营类别",placeholder:"请选择经营类别",modalLabel:"选择经营类别",required:!0},on:{change1:e.change1},model:{value:e.cooperationLevArr,callback:function(a){e.cooperationLevArr=a},expression:"cooperationLevArr"}}),e._v(" "),n("mu-text-field",{staticStyle:{display:"none"},model:{value:e.params.businessLevOne,callback:function(a){e.$set(e.params,"businessLevOne",a)},expression:"params.businessLevOne"}})],1)],1),e._v(" "),n("div",{staticClass:"item"},[e._m(1),e._v(" "),n("div",{staticClass:"match-left-space align-right"},[n("div",{staticClass:"match-left-space",on:{click:function(a){e.callTakePhoto(1)}}},[e._v(" ")]),e._v(" "),n("div",{staticClass:"input align-right",staticStyle:{width:"auto"}},[e.detail.specialQualificationPhotoIdZfb?n("img",{attrs:{src:e._f("loadImage")(e.detail.specialQualificationPhotoIdZfb)},on:{click:function(a){e.previewImage(e.detail.specialQualificationPhotoIdZfb)}}}):e._e(),e._v(" "),n("div",{staticClass:"icon iconfont iconenter ml-10",on:{click:function(a){e.callTakePhoto(1)}}})])])]),e._v(" "),n("div",{staticClass:"item"},[e._m(2),e._v(" "),n("div",{staticClass:"match-left-space align-right"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.detail.zfbRate,expression:"detail.zfbRate"}],attrs:{placeholder:"输入费率0.38~0.6"},domProps:{value:e.detail.zfbRate},on:{input:function(a){a.target.composing||e.$set(e.detail,"zfbRate",a.target.value)}}}),e._v("  %\r\n                ")])]),e._v(" "),n("div",{staticClass:"match-width box align-center"},[n("div",{staticClass:"next box align-center",on:{click:e.submitBtn}},[e._v("\r\n                    确认提交\r\n                ")])])],1)])]),e._v(" "),n("div",{staticClass:"file"},[n("input",{ref:"fileCamera",attrs:{type:"file",capture:"camera",accept:"image/*"},on:{change:e.onFileChange}}),e._v(" "),n("div",{staticClass:"cover"})]),e._v(" "),n("div",{staticClass:"file"},[n("input",{ref:"file",attrs:{type:"file",accept:"image/*"},on:{change:e.onFileChange}}),e._v(" "),n("div",{staticClass:"cover"})]),e._v(" "),e.isImagePreview?n("div",{staticClass:"cover-x align-default",on:{click:function(a){e.isImagePreview=!1}}},[n("div",{staticClass:"match-left-space"}),e._v(" "),n("div",{staticClass:"image-preview"},[n("img",{staticClass:"match-parent",attrs:{src:e._f("previewLoadImage")(e.imgUrl)}})]),e._v(" "),n("div",{staticClass:"match-left-space"})]):e._e(),e._v(" "),n("mu-bottom-sheet",{attrs:{open:e.openMenu},on:{"update:open":function(a){e.openMenu=a}}},[n("div",{staticClass:"action-sheet box align-default menu"},[n("div",{staticClass:"item align-center",on:{click:function(a){e.onTakePhoto(1)}}},[e._v("\r\n      拍照\r\n      ")]),e._v(" "),n("div",{staticClass:"item align-center",on:{click:function(a){e.onTakePhoto(2)}}},[e._v("\r\n      从手机相册选择\r\n      ")]),e._v(" "),n("div",{staticClass:"item align-center cancel",on:{click:function(a){e.onActionMenuShow(2)}}},[e._v("\r\n      取消\r\n      ")]),e._v(" "),n("div",{staticClass:"action-sheet__padding"})])])],1)};o._withStripped=!0;var S={render:o,staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"subtitle"},[a("span",{staticClass:"star"},[this._v("*")]),this._v("商家支付宝账号\r\n                    ")])},function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"subtitle"},[a("span",{staticClass:"star"}),this._v("特殊资质\r\n                ")])},function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"subtitle"},[a("span",{staticClass:"star"},[this._v("*")]),this._v("支付宝费率\r\n                ")])}]},C=S;var f=!1;var p=n("VU/8")(s,C,!1,function(e){f||n("2zbZ")},"data-v-fee5c7ce",null);p.options.__file="src\\pages\\clientInfo\\submitZfb.vue";a.default=p.exports},u2g9:function(e,a){e.exports=[{value:"航旅交通",name:"航旅交通",children:[{value:"公共交通",name:"公共交通",children:[{value:"A_A01_4121",name:"出租车服务（TAXI）",children:[]},{value:"A_A01_4457",name:"出租船只",children:[]},{value:"A_A01_4468",name:"船舶、海运服务提供商",children:[]},{value:"A_A01_4111",name:"公共交通",children:[]},{value:"A_A01_4119",name:"急救服务",children:[]},{value:"A_A01_4011",name:"铁路货运",children:[]},{value:"A_A01_4112",name:"铁路客运",children:[]},{value:"A_A01_4411",name:"游轮及巡游航线服务",children:[]},{value:"A_A01_4131",name:"长途公路客运",children:[]}]},{value:"航空票务",name:"航空票务",children:[{value:"A_A03_4511",name:"航空公司",children:[]},{value:"A_A03_4514",name:"航空系统商",children:[]},{value:"A_A03_4582",name:"机场服务",children:[]},{value:"A_A03_4512",name:"机票代理人",children:[]},{value:"A_A03_4513",name:"机票平台",children:[]}]},{value:"旅行住宿",name:"旅行住宿",children:[{value:"A_A04_4733",name:"大型旅游景点",children:[]},{value:"A_A04_7012",name:"度假用别墅服务",children:[]},{value:"A_A04_4723",name:"国际货运代理和报关行",children:[]},{value:"A_A04_7033",name:"活动房车场及野营场所",children:[]},{value:"A_A04_4784",name:"路桥通行费",children:[]},{value:"A_A04_4722",name:"旅行社和旅游服务",children:[]},{value:"A_A04_4789",name:"未列入其他代码的运输服务",children:[]},{value:"A_A04_7032",name:"运动和娱乐露营",children:[]},{value:"A_A04_7011",name:"住宿服务（旅馆、酒店、汽车旅馆、度假村等）",children:[]}]},{value:"物流仓储",name:"物流仓储",children:[{value:"A_A02_4225",name:"公共仓储、集装整理",children:[]},{value:"A_A02_4215",name:"快递服务",children:[]},{value:"A_A02_4214",name:"物流货运服务",children:[]}]}]},{value:"商业及生活服务",name:"商业及生活服务",children:[{value:"承包商（农业、建筑、出版）",name:"承包商（农业、建筑、出版）",children:[{value:"S_S01_1731",name:"电器承包商",children:[]},{value:"S_S01_1771",name:"混凝土承包商",children:[]},{value:"S_S01_1740",name:"建筑材料承包商",children:[]},{value:"S_S01_1761",name:"金属产品承包商",children:[]},{value:"S_S01_0780",name:"景观美化与园艺服务",children:[]},{value:"S_S01_1711",name:"空调类承包商",children:[]},{value:"S_S01_1750",name:"木工承包商",children:[]},{value:"S_S01_0763",name:"农业合作与农具",children:[]},{value:"S_S01_0743",name:"葡萄酒生产商",children:[]},{value:"S_S01_1799",name:"其他工程承包商",children:[]},{value:"S_S01_0744",name:"其他酒类生产商",children:[]},{value:"S_S01_0742",name:"兽医服务",children:[]}]},{value:"房地产",name:"房地产",children:[{value:"S_S02_7013",name:"不动产代理——房地产经纪",children:[]},{value:"S_S02_6513",name:"不动产管理－物业管理",children:[]},{value:"S_S02_1520",name:"房地产开发商",children:[]}]},{value:"公共事业",name:"公共事业",children:[{value:"S_S02_7013",name:"公共事业（电、气、水）",children:[]},{value:"S_S06_4901",name:"公共事业-电力缴费",children:[]},{value:"S_S06_4902",name:"公共事业-煤气缴费",children:[]},{value:"S_S06_4904",name:"公共事业-清洁服务缴费",children:[]},{value:"S_S06_4903",name:"公共事业-自来水缴费",children:[]}]},{value:"金融服务",name:"金融服务",children:[{value:"S_S04_6301",name:"保险代理",children:[]},{value:"S_S04_6300",name:"保险公司",children:[]},{value:"S_S04_5933",name:"典当行",children:[]},{value:"S_S04_4829",name:"电汇和汇票服务",children:[]},{value:"S_S04_6760",name:"个人资金借贷",children:[]},{value:"S_S04_6050",name:"贵金属投资",children:[]},{value:"S_S04_6012",name:"金融机构-其他服务",children:[]},{value:"S_S04_6010",name:"金融机构-商业银行服务",children:[]},{value:"S_S04_6011",name:"金融机构-自动现金服务",children:[]},{value:"S_S04_6051",name:"外币汇兑",children:[]},{value:"S_S04_6211",name:"证券期货基金",children:[]}]},{value:"汽车租赁和服务",name:"汽车租赁和服务",children:[{value:"S_S10_7519",name:"房车和娱乐车辆出租",children:[]},{value:"S_S10_7513",name:"卡车及拖车出租",children:[]},{value:"S_S10_7534",name:"轮胎翻新、维修",children:[]},{value:"S_S10_7512",name:"汽车出租",children:[]},{value:"S_S10_7538",name:"汽车改造等服务（非经销商）",children:[]},{value:"S_S10_7535",name:"汽车喷漆店",children:[]},{value:"S_S10_7531",name:"汽车维修、保养、美容装饰",children:[]},{value:"S_S10_7523",name:"停车服务",children:[]},{value:"S_S10_7549",name:"拖车服务",children:[]},{value:"S_S10_7542",name:"洗车",children:[]}]},{value:"商业服务",name:"商业服务",children:[{value:"S_S05_7393",name:"保安和监控服务",children:[]},{value:"S_S05_2741",name:"出版印刷服务",children:[]},{value:"S_S05_7338",name:"复印及绘图服务",children:[]},{value:"S_S05_7392",name:"公关和企业管理服务",children:[]},{value:"S_S05_7311",name:"广告服务",children:[]},{value:"S_S05_5935",name:"海上船只遇难救助",children:[]},{value:"S_S05_2791",name:"刻版排版服务",children:[]},{value:"S_S05_7361",name:"猎头、职业中介",children:[]},{value:"S_S05_7342",name:"灭虫及消毒服务",children:[]},{value:"S_S05_7399",name:"其他商业服务",children:[]},{value:"S_S05_7333",name:"商业摄影、设计、绘图服务",children:[]},{value:"S_S05_7395",name:"商业摄影摄像服务",children:[]},{value:"S_S05_7394",name:"设备、工具、家具和电器出租",children:[]},{value:"S_S05_7339",name:"文字处理/翻译速记",children:[]},{value:"S_S05_7322",name:"债务催收机构",children:[]},{value:"S_S05_7321",name:"征信和信用报告咨询服务",children:[]},{value:"S_S05_7349",name:"清洁、保养及门卫服务",children:[]},{value:"S_S05_2842",name:"清洁抛光服务",children:[]}]},{value:"生活服务",name:"生活服务",children:[{value:"S_S08_7297",name:"按摩服务",children:[]},{value:"S_S08_7276",name:"财务债务咨询",children:[]},{value:"S_S08_7278",name:"导购、经纪和拍卖服务",children:[]},{value:"S_S08_7296",name:"服装出租",children:[]},{value:"S_S08_7216",name:"干洗店",children:[]},{value:"S_S08_7273",name:"婚介服务",children:[]},{value:"S_S08_7277",name:"婚庆服务",children:[]},{value:"S_S08_7295",name:"家政服务",children:[]},{value:"S_S08_7230",name:"美容/美发服务",children:[]},{value:"S_S08_7298",name:"美容SPA和美体保健",children:[]},{value:"S_S08_7299",name:"其他生活服务",children:[]},{value:"S_S08_7261",name:"丧仪殡葬服务",children:[]},{value:"S_S08_7221",name:"摄影服务",children:[]},{value:"S_S08_7217",name:"室内清洁服务",children:[]},{value:"S_S08_7210",name:"洗衣服务",children:[]},{value:"S_S08_7211",name:"洗熨服务（自助洗衣服务）",children:[]},{value:"S_S08_7251",name:"鞋帽清洗",children:[]}]},{value:"团购",name:"团购",children:[{value:"S_S07_5310",name:"团购及折扣店",children:[]}]},{value:"维修服务",name:"维修服务",children:[{value:"S_S09_7629",name:"办公电器和小家电维修",children:[]},{value:"S_S09_7622",name:"电器维修",children:[]},{value:"S_S09_7699",name:"各类维修相关服务",children:[]},{value:"S_S09_7692",name:"焊接维修服务",children:[]},{value:"S_S09_7641",name:"家具维修、翻新",children:[]},{value:"S_S09_7623",name:"空调、制冷设备维修",children:[]},{value:"S_S09_7631",name:"手表、钟表和首饰维修店",children:[]}]},{value:"直销",name:"直销",children:[{value:"S_S03_5960",name:"保险直销（代扣）",children:[]},{value:"S_S03_5967",name:"电话接入直销",children:[]},{value:"S_S03_5966",name:"电话外呼直销",children:[]},{value:"S_S03_5968",name:"订阅订购服务",children:[]},{value:"S_S03_5962",name:"旅游相关服务直销",children:[]},{value:"S_S03_5964",name:"目录直销平台",children:[]},{value:"S_S03_5963",name:"上门直销（直销员）",children:[]},{value:"S_S03_5969",name:"直销",children:[]},{value:"S_S03_5965",name:"直销代理",children:[]}]}]},{value:"生活百货",name:"生活百货",children:[{value:"百货商城",name:"百货商城",children:[{value:"C_C04_5411",name:"超市（非平台类）",children:[]},{value:"C_C04_5914",name:"成人用品/避孕用品/情趣内衣",children:[]},{value:"C_C04_5309",name:"国外代购及免税店",children:[]},{value:"C_C04_5300",name:"会员制批量零售店",children:[]},{value:"C_C04_5311",name:"平台类综合商城",children:[]},{value:"C_C04_5999",name:"其他专业零售店",children:[]},{value:"C_C04_5399",name:"其他综合零售",children:[]},{value:"C_C04_5984",name:"烟花爆竹",children:[]},{value:"C_C04_5983",name:"油品燃料经销",children:[]},{value:"C_C04_5331",name:"杂货店",children:[]},{value:"C_C04_5998",name:"帐篷和遮阳篷商店",children:[]}]},{value:"服饰鞋包",name:"服饰鞋包",children:[{value:"C_C06_5697",name:"裁缝、修补、改衣制衣",children:[]},{value:"C_C06_5691",name:"高档时装及奢侈品",children:[]},{value:"C_C06_5699",name:"各类服装及饰物",children:[]},{value:"C_C06_5948",name:"行李箱包",children:[]},{value:"C_C06_5698",name:"假发等饰品",children:[]},{value:"C_C06_5611",name:"男性服饰",children:[]},{value:"C_C06_5651",name:"内衣/家居服",children:[]},{value:"C_C06_5621",name:"女性成衣",children:[]},{value:"C_C06_5631",name:"配饰商店",children:[]},{value:"C_C06_5681",name:"皮草皮具",children:[]},{value:"C_C06_5661",name:"鞋类",children:[]},{value:"C_C06_5139",name:"鞋类销售平台（批发商）",children:[]},{value:"C_C06_5137",name:"制服与商务正装定制",children:[]}]},{value:"家居家纺建材",name:"家居家纺建材",children:[{value:"C_C03_5718",name:"壁炉、屏风",children:[]},{value:"C_C03_5231",name:"玻璃、油漆涂料、墙纸",children:[]},{value:"C_C03_5131",name:"布料、缝纫用品和其他纺织品（批发商）",children:[]},{value:"C_C03_5261",name:"草坪和花园用品",children:[]},{value:"C_C03_5714",name:"窗帘、帷幕、室内装潢",children:[]},{value:"C_C03_5200",name:"大型仓储式家庭用品卖场",children:[]},{value:"C_C03_5713",name:"地板和地毯",children:[]},{value:"C_C03_5719",name:"各种家庭装饰专营",children:[]},{value:"C_C03_5193",name:"花木栽种用品、苗木和花卉（批发商）",children:[]},{value:"C_C03_5712",name:"家具/家庭摆设",children:[]},{value:"C_C03_5949",name:"家用纺织品",children:[]},{value:"C_C03_5251",name:"家用五金工具",children:[]},{value:"C_C03_5211",name:"木材与建材商店",children:[]},{value:"C_C03_5039",name:"未列入其他代码的建材（批发商）",children:[]},{value:"C_C03_5198",name:"油漆、清漆用品（批发商）",children:[]},{value:"C_C03_5996",name:"游泳、SPA、洗浴设备",children:[]}]},{value:"美妆珠宝配饰",name:"美妆珠宝配饰",children:[{value:"C_C01_5977",name:"化妆品",children:[]},{value:"C_C01_5997",name:"男士用品：剃须刀、烟酒具、瑞士军刀",children:[]},{value:"C_C01_5944",name:"钟表店",children:[]},{value:"C_C01_5094",name:"珠宝和金银饰品",children:[]}]},{value:"母婴玩具",name:"母婴玩具",children:[{value:"C_C02_5641",name:"母婴用品",children:[]},{value:"C_C02_5945",name:"玩具、游戏用品",children:[]}]},{value:"数码家电",name:"数码家电",children:[{value:"C_C07_5722",name:"家用电器C_C07_5045",children:[]},{value:"C_C07_5045",name:"商用计算机及服务器",children:[]},{value:"C_C07_4812",name:"手机、通讯设备销售",children:[]},{value:"C_C07_5732",name:"数码产品及配件",children:[]},{value:"C_C07_5946",name:"专业摄影器材",children:[]}]},{value:"图书音像",name:"图书音像",children:[{value:"C_C09_5994",name:"报纸、杂志",children:[]},{value:"C_C09_5192",name:"书、期刊和报纸（批发商）",children:[]},{value:"C_C09_5942",name:"书籍",children:[]},{value:"C_C09_5735",name:"音像制品",children:[]}]},{value:"文化玩乐宠物",name:"文化玩乐宠物",children:[{value:"C_C10_5995",name:"宠物及宠物用品",children:[]},{value:"C_C10_5950",name:"瓷器、玻璃和水晶摆件",children:[]},{value:"C_C10_5970",name:"工艺美术用品",children:[]},{value:"C_C10_5937",name:"古玩复制品（赝品）",children:[]},{value:"C_C10_5992",name:"花店",children:[]},{value:"C_C10_7993",name:"家用电子游戏",children:[]},{value:"C_C10_5931",name:"旧商品店、二手商品店",children:[]},{value:"C_C10_5733",name:"乐器",children:[]},{value:"C_C10_5947",name:"礼品、卡片、纪念品",children:[]},{value:"C_C10_5932",name:"文物古董",children:[]},{value:"C_C10_5971",name:"艺术品和画廊",children:[]},{value:"C_C10_5972",name:"邮票/纪念币",children:[]},{value:"C_C10_5973",name:"宗教物品",children:[]}]},{value:"饮食保健",name:"饮食保健",children:[{value:"C_C05_5467",name:"保健品",children:[]},{value:"C_C05_5812",name:"餐厅、订餐服务",children:[]},{value:"C_C05_5466",name:"茶叶",children:[]},{value:"C_C05_5813",name:"酒吧、舞厅、夜总会",children:[]},{value:"C_C05_5921",name:"酒类",children:[]},{value:"C_C05_5814",name:"快餐店",children:[]},{value:"C_C05_5462",name:"面包糕点",children:[]},{value:"C_C05_5499",name:"其他食品零售",children:[]},{value:"C_C05_5422",name:"肉、禽、蛋及水产品",children:[]},{value:"C_C05_5451",name:"乳制品/冷饮",children:[]},{value:"C_C05_5441",name:"糖果及坚果商店",children:[]},{value:"C_C05_5993",name:"烟草/雪茄",children:[]},{value:"C_C05_5811",name:"宴会提供商",children:[]}]},{value:"运动户外",name:"运动户外",children:[{value:"C_C08_5941",name:"体育用品/器材",children:[]},{value:"C_C08_5655",name:"运动服饰",children:[]},{value:"C_C08_5940",name:"自行车及配件",children:[]}]}]},{value:"网络虚拟",name:"网络虚拟",children:[{value:"彩票",name:"彩票",children:[{value:"D_D03_7995",name:"彩票",children:[]}]},{value:"电信通讯",name:"电信通讯",children:[{value:"D_D04_4814",name:"电信运营商",children:[]},{value:"D_D04_4899",name:"付费电视",children:[]},{value:"D_D04_4815",name:"话费充值与缴费",children:[]},{value:"D_D04_4821",name:"网络电话、传真",children:[]}]},{value:"互联网服务",name:"互联网服务",children:[{value:"D_D05_7409",name:"SNS社交网站",children:[]},{value:"D_D05_4816",name:"互联网IDC服务",children:[]},{value:"D_D05_5734",name:"计算机软件",children:[]},{value:"D_D05_7379",name:"计算机维护和修理服务",children:[]},{value:"D_D05_7374",name:"门户网站",children:[]},{value:"D_D05_7413",name:"其他在线应用或综合类",children:[]},{value:"D_D05_7372",name:"软件系统商",children:[]},{value:"D_D05_7414",name:"视频点播",children:[]},{value:"D_D05_7412",name:"手机图铃",children:[]},{value:"D_D05_7373",name:"网络论坛",children:[]},{value:"D_D05_7408",name:"网站设计、推广",children:[]},{value:"D_D05_7375",name:"信息检索服务（信息平台）",children:[]},{value:"D_D05_7410",name:"休闲游戏",children:[]},{value:"D_D05_7411",name:"在线文学类",children:[]}]},{value:"数娱网游",name:"数娱网游",children:[{value:"D_D02_7954",name:"网络游戏点卡、渠道代理",children:[]},{value:"D_D02_7958",name:"网游运营商（含网页游戏）",children:[]},{value:"D_D02_7957",name:"网游周边服务、交易平台",children:[]},{value:"D_D02_7956",name:"游戏系统商",children:[]}]},{value:"娱乐票务",name:"娱乐票务",children:[{value:"D_D01_7933",name:"保龄球",children:[]},{value:"D_D01_7994",name:"电玩娱乐场所",children:[]},{value:"D_D01_7832",name:"电影院及电影票",children:[]},{value:"D_D01_7998",name:"动物园、水族馆",children:[]},{value:"D_D01_7992",name:"高尔夫球场",children:[]},{value:"D_D01_7911",name:"歌舞厅/夜店",children:[]},{value:"D_D01_7997",name:"健身和运动俱乐部",children:[]},{value:"D_D01_7929",name:"乐队和文艺表演",children:[]},{value:"D_D01_7999",name:"其他娱乐服务",children:[]},{value:"D_D01_7941",name:"体育场馆",children:[]},{value:"D_D01_7922",name:"演出票务服务",children:[]},{value:"D_D01_7829",name:"艺术创作服务",children:[]},{value:"D_D01_7841",name:"音像制品出租",children:[]},{value:"D_D01_7996",name:"游乐园、马戏团、嘉年华",children:[]},{value:"D_D01_7991",name:"展览和艺术场馆",children:[]},{value:"D_D01_7932",name:"桌球/桌游",children:[]}]}]},{value:"专业服务",name:"专业服务",children:[{value:"教育服务",name:"教育服务",children:[{value:"P_P02_8220",name:"大学与学院",children:[]},{value:"P_P02_8351",name:"儿童保育服务（含学前教育）",children:[]},{value:"P_P02_8241",name:"函授学校（成人教育）",children:[]},{value:"P_P02_8299",name:"其他学校和教育服务",children:[]},{value:"P_P02_8244",name:"商业和文秘学校",children:[]},{value:"P_P02_8249",name:"职业技能培训",children:[]},{value:"P_P02_8211",name:"中小学校",children:[]}]},{value:"其他",name:"其他",children:[{value:"P_P06_9702",name:"GCAS紧急服务（仅限Visa使用）",children:[]},{value:"P_P06_9701",name:"Visa信任服务",children:[]},{value:"P_P06_9715",name:"档案",children:[]},{value:"P_P06_9752",name:"电子档案",children:[]},{value:"P_P06_9950",name:"站内清算",children:[]}]},{value:"社会组织",name:"社会组织",children:[{value:"P_P03_8398",name:"慈善和社会公益服务",children:[]},{value:"P_P03_8641",name:"行业协会和专业社团",children:[]},{value:"P_P03_8699",name:"其他会员组织",children:[]},{value:"P_P03_8675",name:"汽车协会",children:[]},{value:"P_P03_8651",name:"政府机构",children:[]},{value:"P_P03_8661",name:"宗教组织",children:[]}]},{value:"医疗服务",name:"医疗服务",children:[{value:"P_P01_8041",name:"按摩医生",children:[]},{value:"P_P01_8062",name:"公立医院",children:[]},{value:"P_P01_8050",name:"护理和照料服务",children:[]},{value:"P_P01_8099",name:"其他医疗保健服务",children:[]},{value:"P_P01_8011",name:"社区医疗服务机构、诊所等",children:[]},{value:"P_P01_8049",name:"手足病医疗服务",children:[]},{value:"P_P01_8021",name:"牙科医生",children:[]},{value:"P_P01_8043",name:"眼镜店",children:[]},{value:"P_P01_8042",name:"眼科医疗服务",children:[]},{value:"P_P01_8071",name:"医学及牙科实验室",children:[]},{value:"P_P01_8031",name:"正骨医生",children:[]}]},{value:"政府服务",name:"政府服务",children:[{value:"P_P05_9223",name:"保释金",children:[]},{value:"P_P05_9211",name:"法庭费用",children:[]},{value:"P_P05_9402",name:"国家邮政",children:[]},{value:"P_P05_9222",name:"行政费用和罚款",children:[]},{value:"P_P05_9399",name:"社会保障服务",children:[]},{value:"P_P05_9400",name:"使领馆",children:[]},{value:"P_P05_9311",name:"税务、海关",children:[]},{value:"P_P05_9405",name:"政府采购",children:[]},{value:"P_P05_9411",name:"政府贷款",children:[]}]},{value:"专业咨询",name:"专业咨询",children:[{value:"P_P04_8734",name:"测试实验服务",children:[]},{value:"P_P04_8111",name:"法律咨询和律师事务所",children:[]},{value:"P_P04_8931",name:"会计、审计、财务服务",children:[]},{value:"P_P04_8911",name:"建筑、工程和测量服务",children:[]},{value:"P_P04_8999",name:"其他专业服务",children:[]},{value:"P_P04_8912",name:"装修、装潢、园艺",children:[]}]}]},{value:"专业销售",name:"专业销售",children:[{value:"办公用品",name:"办公用品",children:[{value:"B_B01_5044",name:"办公、影印及微缩摄影器材（批发商）",children:[]},{value:"B_B01_5021",name:"办公及商务家具（批发商）",children:[]},{value:"B_B01_5978",name:"打字设备、打印复印机、扫描仪",children:[]},{value:"B_B01_5046",name:"未列入其他代码的商用器材",children:[]},{value:"B_B01_5111",name:"文具、办公用品、复印纸和书写纸（批发商）",children:[]},{value:"B_B01_5943",name:"文具及办公用品",children:[]}]},{value:"工业产品",name:"工业产品",children:[{value:"B_B02_5065",name:"电气产品和设备",children:[]},{value:"B_B02_5085",name:"工业设备和制成品",children:[]},{value:"B_B02_5074",name:"管道及供暖设备",children:[]},{value:"B_B02_5169",name:"化工产品",children:[]},{value:"B_B02_5051",name:"金属产品和服务（批发商）",children:[]},{value:"B_B02_5099",name:"其他工业耐用品",children:[]},{value:"B_B02_5199",name:"其他工业原料和消耗品",children:[]},{value:"B_B02_5172",name:"石油及石油产品（批发商）",children:[]},{value:"B_B02_5072",name:"五金器材及用品（批发商）",children:[]}]},{value:"汽车和运输工具",name:"汽车和运输工具",children:[{value:"B_B03_5551",name:"船舶及配件销售",children:[]},{value:"B_B03_5572",name:"电动车及配件",children:[]},{value:"B_B03_5521",name:"二手车销售",children:[]},{value:"B_B03_5565",name:"飞机及配件、航道设施",children:[]},{value:"B_B03_5564",name:"飞机及配件、航道设施",children:[]},{value:"B_B03_5271",name:"活动房车销售商",children:[]},{value:"B_B03_5013",name:"机动车供应及零配件（批发商）",children:[]},{value:"B_B03_5599",name:"机动车综合经营",children:[]},{value:"B_B03_5542",name:"加油卡、加油服务",children:[]},{value:"B_B03_5541",name:"加油站、服务站",children:[]},{value:"B_B03_5592",name:"露营及旅行汽车",children:[]},{value:"B_B03_5571",name:"摩托车及配件",children:[]},{value:"B_B03_5533",name:"汽车零配件",children:[]},{value:"B_B03_5532",name:"汽车轮胎经销",children:[]},{value:"B_B03_5511",name:"汽车销售",children:[]},{value:"B_B03_5561",name:"拖车、篷车及娱乐用车",children:[]},{value:"B_B03_5598",name:"雪车",children:[]},{value:"B_B03_5566",name:"运输搬运设备、起重装卸设备",children:[]}]},{value:"药品医疗",name:"药品医疗",children:[{value:"B_B04_5976",name:"康复和身体辅助用品",children:[]},{value:"B_B04_5122",name:"药品、药品经营者（批发商）",children:[]},{value:"B_B04_5912",name:"药物",children:[]},{value:"B_B04_5047",name:"医疗器械",children:[]},{value:"B_B04_5975",name:"助听器",children:[]}]}]},{value:"商业及生活服务",name:"商业及生活服务",children:[{value:"金融服务",name:"金融服务",children:[{value:"S_S04_6060",name:"小贷公司",children:[]},{value:"S_S04_6061",name:"消费金融公司",children:[]},{value:"S_S04_6062",name:"汽车金融公司",children:[]},{value:"S_S04_6063",name:"融资租赁公司",children:[]},{value:"S_S04_6064",name:"金融租赁公司",children:[]},{value:"S_S04_6065",name:"信托公司",children:[]},{value:"S_S04_6066",name:"支付机构",children:[]},{value:"S_S04_6067",name:"融资担保公司",children:[]},{value:"S_S04_6068",name:"借贷消费平台",children:[]}]}]}]}});
//# sourceMappingURL=6.b258f927f968923c54d8.js.map