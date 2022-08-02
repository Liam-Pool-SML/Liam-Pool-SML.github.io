"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[884],{71625:function(e,n,t){var i=t(98064),o=t(2784),r=t(99256);n.Z=function(){var e=(0,i.I0)();return{state:(0,i.v9)((function(e){return e.homeSG.featurePopularListings}),i.wU),fetchPopularListings:(0,o.useCallback)((function(n){return e(r.yC(n))}),[e])}}},60884:function(e,n,t){t.r(n),t.d(n,{default:function(){return le}});var i=t(95235),o=t(2784),r=(t(28200),t(21469)),l=t(20406),a=t(12741),c=t(81333),s=t(7328),u=t(28526),d=t.n(u),f=t(76635),p=t(25237),v=t.n(p),m=t(36841),h=t(96938),g=t(79494),x=t(4853),b=t(98064),y=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{serializer:JSON.stringify,deserializer:JSON.parse},i=(0,o.useState)(n),r=i[0],l=i[1],a=t.serializer,c=t.deserializer;(0,o.useEffect)((function(){s()?l(u()):d(n)}),[]);var s=function(){return null!==localStorage.getItem(e)},u=function(){return c(localStorage.getItem(e))},d=function(n){localStorage.setItem(e,a(n)),l(n)};return[r,d]},k=t(26331),S=t(95328);function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var C,O,P,T,N=function(){var e=function(){var e=(0,l.Z)(d().mark((function e(n){var t,o,r,l,a,c,s,u,f;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query,o=n.sortBy,r=n.hitsPerPage,l=n.attributesToRetrieve,a=n.facetsToRetrieve,c={hitsPerPage:r||18,attributesToRetrieve:l||["inventory.make_model"],facets:a||["inventory.make_model","categories"]},e.prev=2,e.next=5,S.Z.search(o,t,c);case 5:return s=e.sent,u=s.facets,f=Object.entries(u).reduce((function(e,n){return j(j({},e),{},(0,i.Z)({},n[0],Object.keys(n[1])))}),{}),e.abrupt("return",f);case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0);case 14:return e.abrupt("return",{});case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(n){return e.apply(this,arguments)}}();return{getAutoCompleteListingTitle:e}},Z=t(26316),F=t(12913),_=t(84179),E=t(52322);function z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function B(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?z(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}v()((function(){return t.e(220).then(t.t.bind(t,55506,23))}),{ssr:!1,loadableGenerated:{webpack:function(){return[55506]}}});var I=m.ZP.div(C||(C=(0,s.Z)(["\n  width: 100%;\n  position: relative;\n\n  .floating-panel {\n    position: absolute;\n    background: white;\n    width: 100%;\n    border-radius: 12px;\n    box-shadow: 0px 4px 10px 0px #0000001a;\n    margin-top: 16px;\n    min-height: 60px;\n    transition: all 0.4s ease;\n    z-index: 998;\n    max-height: 500px;\n    overflow-y: auto;\n  }\n\n  .options-results {\n    text-align: left;\n    padding: 0 20px;\n\n    @media screen and (min-width: 576px) {\n      padding: 0 30px;\n    }\n    @media screen and (min-width: 768px) {\n      padding: 0 40px;\n    }\n    @media screen and (min-width: 1280px) {\n      padding: 0 20px;\n    }\n\n    &.desktop {\n      padding-top: 20px;\n    }\n\n    .clear-options {\n      font-size: 12px;\n      margin-bottom: 23px;\n    }\n\n    .clear-text-desc {\n      font-weight: 400;\n      max-width: 270px;\n      display: inline-flex;\n      color: #bababa;\n    }\n\n    .clear-text-btn {\n      border: none;\n      background: none;\n      font-weight: 700;\n      font-family: "," !important;\n      color: ",";\n    }\n\n    @media screen and (max-width: 575px) {\n      .clear-options {\n        display: flex;\n        align-items: flex-start;\n        justify-content: space-between;\n      }\n\n      .clear-text-desc {\n        max-width: 240px;\n      }\n\n      .clear-text-btn {\n        width: 150px;\n      }\n    }\n  }\n"])),(function(e){return e.theme.fontFamily}),(function(e){return e.theme.primaryColor})),H=(m.ZP.div(O||(O=(0,s.Z)(["\n  font-size: 12px;\n  font-weight: ",";\n  color: ",";\n  margin-bottom: 32px;\n"])),(function(e){return e.theme.fontWeightFamilyNormal}),(function(e){return e.theme.greyColor})),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=n.length>0,i=function(e){var i,o=null===(i=n.find((function(n){return n.value===e})))||void 0===i?void 0:i.label;return t&&!o?null:o||e};return e.map((function(e){return{label:i(e),value:e}})).filter((function(e){return null!==e.label}))}),A=function(e,n){var t,i,r,s,u,p,v=e.isMobile,m=e.content,x=void 0===m?{}:m,S=e.defaultPopular,w=void 0===S?[]:S,j=e.defaultCategories,C=void 0===j?[]:j,O=e.termToSearch,P=void 0===O?3:O,T=e.onClose,_=e.hasBackAction,z=e.searchOnOptionClick,A=void 0===z||z,D=e.onSearchSubmit,R=e.customSortBy,L=e.onSearchEvent,W=e.showQuickFilters,q=void 0!==W&&W,U=e.showPopularFilters,Q=void 0===U||U,J=e.disableCategoriesFacet,G=void 0!==J&&J,K=e.disableMakeModelsFacet,V=void 0!==K&&K,X=e.suggestionOptions,Y=void 0===X?{}:X,$=e.renderHitCardHorizontal,ee=N().getAutoCompleteListingTitle,ne=(0,F.Z)(),te=ne.filterState,ie=te.query,oe=te.selectedSearchQueries,re=te.sortBy,le=ne.setFilterSelectedOptions,ae=ne.setQuery,ce=ne.search,se=ne.setSelectedSearchQueries,ue=(0,o.useRef)(!1),de=(0,o.useRef)(!0),fe=(0,o.useState)(ie),pe=fe[0],ve=fe[1],me=(0,o.useState)([]),he=me[0],ge=me[1],xe=(0,o.useState)([]),be=xe[0],ye=xe[1],ke=(0,o.useState)([]),Se=ke[0],we=ke[1],je=(0,o.useState)(w),Ce=je[0],Oe=je[1],Pe=(0,o.useState)(C),Te=Pe[0],Ne=Pe[1],Ze=(0,o.useState)(!1),Fe=Ze[0],_e=Ze[1],Ee=(0,o.useState)(oe),ze=Ee[0],Be=Ee[1],Ie=(0,o.useState)(oe),He=Ie[0],Ae=Ie[1],De=(0,o.useState)(""),Re=De[0],Me=De[1],Le=(0,o.useState)(!1),We=Le[0],qe=Le[1],Ue=(0,o.useState)(!1),Qe=Ue[0],Je=Ue[1],Ge=R||re,Ke=Y||{},Ve=Ke.popularBrands,Xe=Ke.bodyTypes,Ye=Ke.quickSearch,$e=Ke.popularCars,en=(0,o.useState)((null===Ve||void 0===Ve?void 0:Ve.content)||[]),nn=en[0],tn=en[1],on=(0,o.useState)((null===Xe||void 0===Xe?void 0:Xe.content)||[]),rn=on[0],ln=on[1],an=y("user-search-history",[]),cn=(0,c.Z)(an,2),sn=cn[0],un=cn[1],dn=Boolean(!V&&he.length||!G&&be.length||!V&&Ce.length||(null===Ve||void 0===Ve||null===(t=Ve.content)||void 0===t?void 0:t.length)||(null===Xe||void 0===Xe||null===(i=Xe.content)||void 0===i?void 0:i.length)||(null===$e||void 0===$e||null===(r=$e.content)||void 0===r?void 0:r.length)||Se.length),fn=Boolean(pe||Q||q||(null===Y||void 0===Y||null===(s=Y.popularBrands)||void 0===s?void 0:s.isShow)||(null===Y||void 0===Y||null===(u=Y.bodyTypes)||void 0===u?void 0:u.isShow)||(null===Y||void 0===Y||null===(p=Y.popularCars)||void 0===p?void 0:p.isShow)),pn=(0,o.useMemo)((function(){return Boolean((We||Qe)&&fn&&dn)}),[We,Qe,fn,dn]),vn=(0,o.useCallback)((function(){(Qe||We)&&(Je(!1),qe(!1))}),[We,Qe]);(0,o.useEffect)((function(){var e=function(e){var n;e&&"touch"===e.pointerType&&(!(null!==(n=e.path)&&void 0!==n&&n.some((function(e){return"search-experience"===e.id})))&&vn())};return document.addEventListener("click",e,!1),function(){return document.removeEventListener("click",e,!1)}}),[vn]),(0,o.useEffect)((function(){Be(oe),Ae(oe),oe.length>0?Oe(An(Ce,oe)):Oe(w)}),[oe]),(0,o.useEffect)((function(){ve(ie)}),[ie]),(0,o.useEffect)((function(){var e=document.getElementById("floating-panel");pn&&e&&(e.scrollTop=0)}),[pn]);var mn=x.noResultsFoundText,hn=void 0===mn?"No results found":mn,gn=x.searchPlaceholderText,xn=void 0===gn?"What car are you searching for?":gn,bn=x.popularSearchText,yn=void 0===bn?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("span",{style:{marginRight:"8px"},children:"\ud83d\udd25"}),"Popular Searches"]}):bn,kn=x.clearAllText,Sn=void 0===kn?"Clear All Search":kn,wn=x.clearAllDesc,jn=void 0===wn?"Clear the active searches if you want to make new search input":wn,Cn=x.quickFiltersText,On=void 0===Cn?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("span",{style:{marginRight:"8px"},children:"\ud83d\udca1"}),"Quick Filters"]}):Cn,Pn=x.suggestionsSearchSuccessText,Tn=void 0===Pn?"Would you be interested in these?":Pn,Nn=x.recommendationsSearchSuccessText,Zn=void 0===Nn?"Recommendations":Nn,Fn=x.searchHistoryHeaderText,_n=void 0===Fn?"Search History":Fn,En=x.searchHistoryClearText,zn=void 0===En?"Delete All":En,Bn=x.viewAllCarText,In=void 0===Bn?"View all cars":Bn,Hn=function(){ve(""),ge([]),ye([]),Oe(w),Ne(C)},An=function(e,n){return e.map((function(e){return n.find((function(n){return n.value===e.value}))?null:e})).filter((function(e){return null!==e}))},Dn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;return e.find((function(e){return(null===n||void 0===n?void 0:n.toLowerCase())===(null===e||void 0===e?void 0:e.toLowerCase())}))?e:[n].concat((0,a.Z)(e))},Rn=(0,o.useRef)((0,f.debounce)(function(){var e=(0,l.Z)(d().mark((function e(n,t,i,o){var r,l,a,c;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ae(n),n||Hn(),Vn(n)){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,ee({query:n,hitsPerPage:5,sortBy:t,facetsToRetrieve:["inventory.make","inventory.make_model","inventory.car_type","categories"]});case 6:(r=e.sent)&&(V||ge(An(H(r["inventory.make_model"]||[]),i)),G||ye(An(H(r.categories||[],C),i)),tn(An((null===Ve||void 0===Ve?void 0:Ve.content)||[],i)),we(An(H(r["inventory.make"]||[]),i)),ge(An(H(r["inventory.make_model"]||[]),i)),n&&(null!==(l=r["inventory.make_model"])&&void 0!==l&&l.length||null!==(a=r["inventory.make"])&&void 0!==a&&a.length||null!==(c=r["inventory.make_model"])&&void 0!==c&&c.length)&&un(Dn(o,n))),ue.current||(ue.current=!0),_e(!1);case 10:case"end":return e.stop()}}),e)})));return function(n,t,i,o){return e.apply(this,arguments)}}(),500)),Mn=function(e){e||(Hn(),ve("")),ve(e),_e(!0),Rn.current(e,Ge,ze,sn)},Ln=function(e,n,t){var i=ze.find((function(e){return e.value===t}));if(i){var o=ze.filter((function(e){return e.value!==t}));return Be(ze.filter((function(e){return e.value!==t}))),void("make_model"===e?(Oe(An(w,o)),ge(An([].concat((0,a.Z)(he),[{name:e,label:n,value:t}]),o))):e===(null===Ve||void 0===Ve?void 0:Ve.name)?tn(An((null===Ve||void 0===Ve?void 0:Ve.content)||[],o)):e===(null===Xe||void 0===Xe?void 0:Xe.name)?ln(An((null===Xe||void 0===Xe?void 0:Xe.content)||[],o)):"make"===e?we(An([].concat((0,a.Z)(Se),[{name:e,label:n,value:t}]),o)):(Ne(An(C,o)),ye(An([].concat((0,a.Z)(be),[{name:e,label:n,value:t}]),o))))}var r=[].concat((0,a.Z)(ze),[{name:e,value:t,label:n}]);Oe(An(w,r)),ge(An(he,r)),ye(An(be,r)),Ne(An(C,r)),e===(null===Ve||void 0===Ve?void 0:Ve.name)?tn(An(nn,r)):we(An(Se,r)),ln(An(rn,r)),Be(r)},Wn=function(e,n,t){Mn(t)},qn=function(){(0,b.dC)((function(){ae(ze.length>0?"":pe),se(ze),G||le({settingName:"category",filterName:"categories",selectedOptions:ze.filter((function(e){return"category"===e.name}))}),V||le({settingName:"make_model",filterName:"inventory.make_model",selectedOptions:ze.filter((function(e){return"make_model"===e.name}))}),le({settingName:"make",filterName:"inventory.make",selectedOptions:ze.filter((function(e){return"make"===e.name}))}),null!==Ve&&void 0!==Ve&&Ve.isShow&&le({settingName:null===Ve||void 0===Ve?void 0:Ve.name,filterName:null===Ve||void 0===Ve?void 0:Ve.filterName,selectedOptions:ze.filter((function(e){return e.name===(null===Ve||void 0===Ve?void 0:Ve.name)}))}),null!==Xe&&void 0!==Xe&&Xe.isShow&&le({settingName:null===Xe||void 0===Xe?void 0:Xe.name,filterName:null===Xe||void 0===Xe?void 0:Xe.filterName,selectedOptions:ze.filter((function(e){return e.name===(null===Xe||void 0===Xe?void 0:Xe.name)}))})})),ce(),Ae(ze),Me(pe),T(),L(ze,pe,Ge)},Un=function(){Hn(),Be([])};(0,o.useEffect)((function(){de.current?de.current=!1:v||D||qn()}),[JSON.stringify(ze)]);var Qn=function(e){var n=nn;if(e&&(n=nn.filter((function(n){return null===e||void 0===e?void 0:e.find((function(e){var t,i;return(null===e||void 0===e||null===(t=e.value)||void 0===t?void 0:t.toLowerCase())===(null===n||void 0===n||null===(i=n.value)||void 0===i?void 0:i.toLowerCase())}))}))),n.length)return(0,E.jsx)(M,{name:null===Ve||void 0===Ve?void 0:Ve.name,header:null===Ve||void 0===Ve?void 0:Ve.headerText,renderOptions:function(){return(0,E.jsx)(k.Z,{item:B(B({},Ve),{},{content:n}),onSearchItemClick:function(e){var n=e.title,t=e.content;return Ln(null===Ve||void 0===Ve?void 0:Ve.name,n,null===t||void 0===t?void 0:t.value)}})}},"popular-brands")},Jn=function(){return pe&&Vn(pe)?0===he.length&&0===be.length&&0===Se.length?""!==pe&&ue.current&&!Fe?hn:(0,E.jsx)("div",{style:{marginLeft:"4px"},children:(0,E.jsx)(h.Z,{type:"ThreeDots",color:"#e5f1ff",height:15,width:45})}):(0,E.jsxs)(E.Fragment,{children:[he.length>0&&!V&&(0,E.jsx)(M,{name:"make_model",header:Tn,options:he,isTag:!1,onSelected:Ln,itemsToShow:6,isMobile:v},"make_model"),(null===Ve||void 0===Ve?void 0:Ve.isShow)&&Qn(Se),be.length>0&&!G&&(0,E.jsx)(M,{name:"category",header:Zn,options:be,onSelected:Ln},"recommedations"),!(null!==Ve&&void 0!==Ve&&Ve.isShow)&&Se.length>0&&(0,E.jsx)(M,{name:"make",header:In,options:Se,onSelected:Ln},"popular-brands")]}):(0,E.jsxs)(E.Fragment,{children:[!(null===sn||void 0===sn||!sn.length)&&(0,E.jsx)(M,{name:"make_model",header:_n,options:sn.map((function(e){return{label:e,value:e}})),onSelected:Wn,itemsToShow:20,isMobile:v,clearBtnText:zn,onClear:function(){return un([])}},"search_history"),(null===Ye||void 0===Ye?void 0:Ye.isShow)&&(0,E.jsx)(M,{name:null===Ye||void 0===Ye?void 0:Ye.name,header:null===Ye||void 0===Ye?void 0:Ye.headerText,renderOptions:function(){return(0,E.jsx)(k.Z,{item:Ye,onSearchItemClick:function(){v?T():Je(!1)}})}},"quick-search"),(null===Ve||void 0===Ve?void 0:Ve.isShow)&&Qn(),(null===Xe||void 0===Xe?void 0:Xe.isShow)&&!(null===rn||void 0===rn||!rn.length)&&(0,E.jsx)(M,{name:null===Xe||void 0===Xe?void 0:Xe.name,header:null===Xe||void 0===Xe?void 0:Xe.headerText,renderOptions:function(){return(0,E.jsx)(k.Z,{item:B(B({},Xe),{},{content:rn}),onSearchItemClick:function(e){var n=e.title,t=e.content;return Ln(null===Xe||void 0===Xe?void 0:Xe.name,n,null===t||void 0===t?void 0:t.value)}})}},"body-types"),Q&&!V&&!(null===Ce||void 0===Ce||!Ce.length)&&(0,E.jsx)(M,{name:"make_model",header:yn,options:Ce,onSelected:Ln},"popular-filters"),q&&!G&&(0,E.jsx)(M,{name:"category",header:On,options:Te,onSelected:Ln},"quick-filters"),(null===$e||void 0===$e?void 0:$e.isShow)&&(0,E.jsx)(M,{name:null===$e||void 0===$e?void 0:$e.name,header:null===$e||void 0===$e?void 0:$e.headerText,renderOptions:$},"popular-cars")]})},Gn=(0,o.useMemo)((function(){return Re!==pe||!(0,f.isEqual)(He,ze)}),[pe,ze,He,Re]),Kn=function(){D(ze,pe)};(0,o.useImperativeHandle)(n,(function(){return{forceSearchSubmit:function(){D?Kn():qn()}}}));var Vn=function(e){return(null===e||void 0===e?void 0:e.length)>=P};return(0,E.jsxs)(I,{id:"search-experience",children:[(0,E.jsx)(Z.Z,{className:null===x||void 0===x?void 0:x.className,clearText:Sn,selectedSearchOptions:ze,onSearchOptionSelected:Ln,isMobile:v,isButtonActive:Gn,hasBackAction:_,isAutoComplete:!1,placeholder:xn,value:pe,onChange:Mn,onBackClick:T,onSubmit:Boolean(D)&&Kn||qn,onInputBlur:function(){return qe(!1)},onInputFocus:function(){return qe(!0)},onClick:function(){pe&&A&&Rn.current(pe,Ge,ze,sn),qe(!0)},onClear:Un,onBackspace:function(){if(ze.length>0){var e=JSON.parse(JSON.stringify(ze)).pop(),n=e.name,t=e.value,i=e.label;Ln(n,i,t)}}}),v&&(0,E.jsxs)("div",{className:"options-results",children:[(null===ze||void 0===ze?void 0:ze.length)>0&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)("div",{className:"clear-options",children:[(0,E.jsx)("span",{className:"clear-text-desc",children:jn}),(0,E.jsx)("button",{className:"clear-text-btn",onClick:Un,children:Sn})]}),(0,E.jsx)(M,{name:"selected",header:"",options:ze,areOptionsSelected:!0,onSelected:Ln})]}),Jn()]}),!v&&(0,E.jsx)(g.pT,{duration:400,when:pn,children:(0,E.jsx)("div",{id:"floating-panel",className:"floating-panel",style:{display:pn?"block":"none"},onMouseEnter:function(){return Je(!0)},onMouseLeave:function(){return Je(!1)},children:(0,E.jsx)("div",{className:"options-results desktop",children:Jn()})})})]})},D=m.ZP.div(P||(P=(0,s.Z)(["\n  padding-bottom: 32px;\n\n  .header {\n    margin-bottom: 24px;\n\n    .header-title {\n      font-size: 12px;\n      font-weight: 700;\n      color: #212121;\n      line-height: 20px;\n      font-family: ",";\n    }\n\n    .clear-btn {\n      font-size: 14px;\n      font-weight: 700;\n      color: ",";\n      background-color: #fff;\n      border: none;\n      margin-left: 21px;\n      box-shadow: none;\n      text-transform: none;\n    }\n\n    .anticon-delete {\n      font-size: 21px;\n      float: right;\n    }\n  }\n\n  .options {\n    display: flex;\n  }\n"])),(function(e){return e.theme.fontFamilyMedium}),(function(e){return e.theme.primaryColor})),R=m.ZP.button(T||(T=(0,s.Z)(["\n  width: 100%;\n  text-align: center;\n  background-color: #fff;\n  border: none;\n  font-size: 12px;\n  font-family: ",";\n  font-weight: 600;\n  border: 1px solid ",";\n  border-radius: 12px;\n  padding: 12px 16px;\n"])),(function(e){return e.theme.fontFamily}),(function(e){return e.theme.greyColor})),M=function(e){var n=e.header,t=e.name,i=e.isTag,l=e.isMobile,a=e.options,c=void 0===a?[]:a,s=e.onSelected,u=e.areOptionsSelected,d=e.renderOptions,f=e.itemsToShow,p=e.seeMoreBtnText,v=void 0===p?"See More":p,m=e.clearBtnText,h=void 0===m?"Delete All":m,g=e.onClear,b=(0,o.useState)([]),y=b[0],k=b[1],S=(0,o.useState)(f>0&&f<c.length),w=S[0],j=S[1];(0,o.useEffect)((function(){w&&f&&f<c.length?k(c.slice(0,f)):(k(c),j(!1))}),[c.length]);return(0,E.jsxs)(D,{children:[n&&(0,E.jsxs)("div",{className:"header",children:[(0,E.jsx)("span",{className:"header-title",children:n}),g&&(l?(0,E.jsx)(x.Z,{onClick:g}):(0,E.jsx)(r.default,{className:"clear-btn",onClick:g,children:h}))]}),d&&d(),!d&&y.map((function(e){return(0,E.jsx)(_.Z,{isTag:i,isMobile:l,onClick:function(){return s(e.name||t,e.label,e.value)},isSelected:u,label:e.customLabel||e.label,value:e.value},e.value)})),w&&(0,E.jsx)(R,{onClick:function(){k(c),j(!1)},children:v})]})},L=(0,o.forwardRef)(A),W=t(42538),q=t(71625),U=t(36938),Q=t(96577),J=t.n(Q),G=t(75639),K=t(58210),V=t(58608),X=G.ZP.a.withConfig({displayName:"HitCardHorizontal__StyledWrapper",componentId:"sc-1ui5es3-0"})(["display:inline-block;cursor:pointer;margin-right:32px;.card-item{display:flex;align-items:center;margin-bottom:0;img{border-radius:12px;}.title{font-family:",";font-style:normal;font-weight:400;font-size:14px;color:",";width:225px;white-space:pre-line;margin-left:20px;line-height:22px;}}@media only screen and (max-width:992px){display:block;margin-left:0;.card-item{margin-bottom:36px;.title{width:100%;}}}"],(function(e){return e.theme.fontFamily}),(function(e){return e.theme.greyColor})),Y=function(e){var n,t,i,o=e.hit,r=e.imageUrl,l=e.href,a=e.onClick,c=(0,K.ZP)().photoUrlPrefix,s=(0,V.e)(r||(null===o||void 0===o||null===(n=o.listing)||void 0===n||null===(t=n.photos)||void 0===t?void 0:t[0])),u="".concat(c||"/").concat(s);return(0,E.jsx)(X,{href:l,onClick:function(){null===a||void 0===a||a(o)},children:(0,E.jsxs)("div",{className:"card-item",children:[(0,E.jsx)(J(),{width:100,height:54,src:u}),(0,E.jsx)("h3",{className:"title",children:(null===o||void 0===o?void 0:o.title)||(null===o||void 0===o||null===(i=o.listing)||void 0===i?void 0:i.title)})]})})};Y.defaultProps={onClick:function(){}};var $=Y,ee=t(46954),ne=function(e){var n=e.hit,t=e.onClick,i=(0,ee.Z)({hit:n}).listingUrl;return(0,E.jsx)($,{hit:n,href:i,onClick:t})};function te(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function ie(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?te(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):te(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var oe=[{label:"Honda Vezel",value:"Honda Vezel"},{label:"Toyota Altis",value:"Toyota Altis"},{label:"Toyota Wish",value:"Toyota Wish"},{label:"Honda Jazz",value:"Honda Jazz"},{label:"Honda Shuttle",value:"Honda Shuttle"}],re=function(e,n){var t=e.searchExtracontent,i=e.handleClose,r=void 0===i?function(){}:i,l=e.isMobile,a=e.hasBackAction,c=e.triggerOnOptionClick,s=e.onSearchSubmit,u=e.sortBy,d=e.allowClear,f=void 0===d||d,p=e.onSearchEvent,v=void 0===p?function(){}:p,m=e.showQuickFilters,h=e.showPopularFilters,g=void 0===h||h,x=e.suggestionOptions,b=void 0===x?{}:x,y=(0,U.fD)().pushGTMEvent,k=(0,q.Z)(),S=k.state,w=k.fetchPopularListings,j=S.loading,C=S.popularListings;(0,o.useEffect)((function(){j||C||w()}),[j,C]);var O=ie({noResultsFoundText:"No results found",searchPlaceholderText:"What car are you searching for?",popularSearchText:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("span",{style:{marginRight:"8px"},children:"\ud83d\udd25"}),"Popular Searches"]}),quickFiltersText:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("span",{style:{marginRight:"8px"},children:"\ud83d\udca1"}),"Quick Filters"]}),clearAllText:f?"Clear All Results":""},t),P=W.aA.map((function(e){return ie(ie({},e),{},{name:"category"})})),T=function(e){var n=e.id,t=e.objectSG;y({event:"clicked_buycar_popular_listing",page_name:"buy-car",listing_id:n,listing_slug:t})};return(0,E.jsx)(L,{ref:n,isMobile:l,hasBackAction:a,content:O,onClose:r,defaultCategories:P,defaultPopular:oe,triggerOnOptionClick:c,onSearchSubmit:s,customSortBy:u,onSearchEvent:v,showQuickFilters:m,showPopularFilters:g,suggestionOptions:b,renderHitCardHorizontal:function(){return null===C||void 0===C?void 0:C.map((function(e,n){return(0,E.jsx)(ne,{hit:e,onClick:T},n)}))}})},le=(0,o.forwardRef)(re)},26331:function(e,n,t){t(68871);var i=t(46041),o=t(95235),r=t(2784),l=t(75639),a=t(43511),c=t(93781),s=t(72960),u=t.n(s),d=t(5632),f=t(52322);function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var m=l.ZP.div.withConfig({displayName:"SearchRecommendItem__StyledCarouselWrapper",componentId:"sc-1k8gfma-0"})([".ant-carousel .slick-list .slick-slide{margin-right:",";}.ant-carousel .slick-list .slick-slide:last-child{margin-right:0;}.ant-carousel .slick-list .slick-slide{pointer-events:auto;}.ant-carousel .slick-next::before,.ant-carousel .slick-prev::before{content:'';}.ant-carousel .slick-list .slick-track{","}"," "," @media screen and (max-width:768px){.ant-carousel .slick-list .slick-slide{margin-right:",";}}@media screen and (max-width:576px){.ant-carousel .slick-list .slick-slide{margin-right:",";}}@media screen and (max-width:375px){.ant-carousel .slick-list .slick-slide{margin-right:",";}}"],(function(e){return e.isTag?"12px":"50px"}),(function(e){return e.alignLeft&&(0,l.iv)(["margin-left:0;"])}),(function(e){return!e.isHideNext&&(0,l.iv)(["padding-right:24px;"])}),(function(e){return!e.isHidePrev&&(0,l.iv)(["padding-left:26px;"])}),(function(e){return e.isTag?"12px":"40px"}),(function(e){return e.isTag?"10px":"24px"}),(function(e){return e.isTag?"8px":"18px"})),h=l.ZP.div.withConfig({displayName:"SearchRecommendItem__StyledSearchItem",componentId:"sc-1k8gfma-1"})(["min-width:max-content;cursor:pointer;height:",";&:hover,&:focus,&:active,&:visited{"," color:",";.item-title{color:inherit;}}.item-title{color:#a1a1a1;font-size:14px;line-height:140%;&:hover,&:focus,&:active,&:visited{color:",";}}.search-item{display:flex;align-items:center;justify-content:flex-end;flex-direction:column;height:100%;.img-wrapper{display:flex;align-items:center;justify-content:center;height:37px;margin-bottom:10px;}}"," "," "," @media screen and (min-width:1201px){","}@media screen and (max-width:768px){height:",";.item-title{font-size:12px;}.search-item{.item-img{width:64%;}.img-wrapper{height:20px;margin-bottom:6px;}}"," ","}"],(function(e){return e.height?e.height:"78px"}),(function(e){return!e.hasImage&&(0,l.iv)(["background:",";"],(function(e){return e.background?e.background:"#fff2eb"}))}),(function(e){return e.color?e.color:"#ff4c00"}),(function(e){return e.color?e.color:"#ff4c00"}),(function(e){return e.isTag&&(0,l.iv)(["height:auto;padding:16px 29px;background:#f7f7f7;border-radius:8px;.item-title{color:#000000;letter-spacing:0.2px;}"])}),(function(e){return e.isTag&&e.isPrimarySearch&&(0,l.iv)(["background:",";"],(function(e){return e.background?e.background:"#fff2eb"}))}),(function(e){return e.isPrimarySearch&&(0,l.iv)([".item-title{color:",";}.search-item{.item-img{width:auto !important;}}"],(function(e){return e.color?e.color:"#ff4c00"}))}),(function(e){return e.isTag&&e.btnPadding&&(0,l.iv)(["padding:",";"],(function(e){return e.btnPadding?e.btnPadding:"16px 29px"}))}),(function(e){return e.height?e.height:"50px"}),(function(e){return e.isUseDefaultWidthMb&&(0,l.iv)([".search-item{.item-img{width:auto;}}"])}),(function(e){return e.isTag&&(0,l.iv)(["height:auto;padding:12px 10px;"])})),g=l.ZP.div.withConfig({displayName:"SearchRecommendItem__StyledArrow",componentId:"sc-1k8gfma-2"})(["display:flex !important;align-items:center;justify-content:center;margin-top:0 !important;width:42px !important;height:60px !important;.anticon{font-size:20px;color:",";}"],(function(e){return e.theme.primaryColor})),x=(0,l.ZP)(g).withConfig({displayName:"SearchRecommendItem__StyledPrevArrow",componentId:"sc-1k8gfma-3"})(["left:-40px !important;",""],(function(e){return e.isHidePrev&&(0,l.iv)(["display:none !important;"])})),b=(0,l.ZP)(g).withConfig({displayName:"SearchRecommendItem__StyledNextArrow",componentId:"sc-1k8gfma-4"})(["right:-38px !important;",""],(function(e){return e.isHideNext&&(0,l.iv)(["display:none !important;"])})),y=function(e){var n=e.className,t=e.style,i=e.onClick,o=e.isHidePrev;return(0,f.jsx)(x,{className:n,isHidePrev:o,style:v({},t),onClick:i,children:(0,f.jsx)(a.Z,{})})},k=function(e){var n=e.className,t=e.style,i=e.onClick,o=e.isHideNext;return(0,f.jsx)(b,{className:n,isHideNext:o,style:v({},t),onClick:i,children:(0,f.jsx)(c.Z,{})})};n.Z=function(e){var n,t,o=e.item,l=e.onSearchItemClick,a=e.makesCount,c=(null===o||void 0===o?void 0:o.defaultSlidesToShow)||9,s=(null===o||void 0===o?void 0:o.defaultSlidesToScroll)||7,p=(0,r.useState)(!1),g=p[0],x=p[1],b=(0,r.useState)(!0),S=b[0],w=b[1],j=(0,r.useRef)(),C=(0,d.useRouter)();(0,r.useEffect)((function(){var e,n,t;j.current=u()(null===o||void 0===o?void 0:o.responsive,(function(e){return e.breakpoint>=window.innerWidth}));var i=(null===j||void 0===j||null===(e=j.current)||void 0===e||null===(n=e.settings)||void 0===n?void 0:n.slidesToShow)||(null===o||void 0===o?void 0:o.defaultSlidesToShow);x((null===o||void 0===o||null===(t=o.content)||void 0===t?void 0:t.length)===i)}),[null===o||void 0===o||null===(n=o.content)||void 0===n?void 0:n.length,null===o||void 0===o?void 0:o.defaultSlidesToShow,null===o||void 0===o?void 0:o.responsive]);var O=function(e){var n=e.url,t=e.title,i=e.gtmFilterName,o=e.type,r=e.content;l&&l({title:i||t,type:o,content:r}),n&&C.push(n)},P={arrows:!0,dots:!1,draggable:!0,infinite:!1,slidesToShow:c,slidesToScroll:s,variableWidth:!0,beforeChange:function(e,n){return function(e,n){var t,i,r,l,a=(null===j||void 0===j||null===(t=j.current)||void 0===t||null===(i=t.settings)||void 0===i?void 0:i.slidesToShow)||c;0===n?(x(!1),w(!0)):w(!1),n===(null===o||void 0===o||null===(r=o.content)||void 0===r?void 0:r.length)-a?(x(!0),w(!1)):x(!1),(n<0||0===n&&(null===o||void 0===o||null===(l=o.content)||void 0===l?void 0:l.length)===a)&&(x(!0),w(!0))}(0,n)},responsive:null===o||void 0===o?void 0:o.responsive,nextArrow:(0,f.jsx)(k,{isHideNext:g}),prevArrow:(0,f.jsx)(y,{isHidePrev:S})};return(0,f.jsx)(m,{isTag:null===o||void 0===o?void 0:o.isTag,alignLeft:null===o||void 0===o?void 0:o.alignLeft,isHidePrev:S,isHideNext:g,children:(0,f.jsx)(i.Z,v(v({},P),{},{children:null===o||void 0===o||null===(t=o.content)||void 0===t?void 0:t.map((function(e,n){var t=e||{},i=t.className,r=t.isPrimarySearch,l=t.color,c=t.background,s=t.url,u=t.image,d=t.title,p=t.imageStyle,m=t.gtmFilterName,g=t.algoliaFacetKey,x=t.skipFacetChecking;if(!(void 0!==x&&x)&&"car make"===(null===o||void 0===o?void 0:o.type)){var b=g||d.toUpperCase()||null,y=Object.keys(a).find((function(e){return e.toUpperCase()===b}));if(b&&(null===a||void 0===a||!a[y])||(null===a||void 0===a?void 0:a[y])<1)return null}return null!==o&&void 0!==o&&o.renderCustomItem?o.renderCustomItem(e,n,(function(){return O({url:s,title:d,gtmFilterName:m,type:null===o||void 0===o?void 0:o.type,content:e})})):(0,f.jsx)(h,{className:i,isPrimarySearch:r,color:l,background:c,isTag:null===o||void 0===o?void 0:o.isTag,height:null===o||void 0===o?void 0:o.height,isUseDefaultWidthMb:null===o||void 0===o?void 0:o.isUseDefaultWidthMb,btnPadding:null===o||void 0===o?void 0:o.btnPadding,hasImage:u,onClick:function(){return O({url:s,title:d,gtmFilterName:m,type:null===o||void 0===o?void 0:o.type,content:e})},children:(0,f.jsxs)("div",{className:"search-item",children:[u&&(0,f.jsx)("div",{className:"img-wrapper",children:(0,f.jsx)("img",{className:"item-img",src:u,alt:d,style:v({},p)})}),(0,f.jsx)("div",{className:"item-title",children:d})]})},n)}))}))})}},26316:function(e,n,t){var i,o,r,l,a,c,s=t(7328),u=t(2784),d=t(39264),f=t(43511),p=t(36841),v=t(75639),m=t(8689),h=t(84179),g=t(52322),x=p.ZP.div(i||(i=(0,s.Z)(["\n  background: white;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  box-shadow: 0px 4px 10px 0px #0000001a;\n  font-size: 14px;\n  border-radius: 12px;\n  min-height: 60px;\n  transition: all 1s ease;\n  font-family: ",";\n\n  ","\n\n  .selected-options {\n    padding: 4px 14px;\n    padding-bottom: 0;\n    text-align: left;\n  }\n\n  input {\n    border: none;\n    outline: none;\n    flex-grow: 1;\n    min-width: 30%;\n    font-family: ",";\n\n    ::placeholder {\n      color: #a1a1a1;\n      font-size: 14px;\n    }\n  }\n\n  .clear-button {\n    color: #878787;\n    font-size: 12px;\n    white-space: nowrap;\n    padding-right: 15px;\n    cursor: pointer;\n    user-select: none;\n    margin-left: auto;\n    margin-top: 4px;\n\n    :hover {\n      color: black;\n    }\n  }\n"])),(function(e){return e.theme.fontFamily}),(function(e){return e.customStyle&&(0,v.iv)(o||(o=(0,s.Z)(["\n      ","\n    "])),e.customStyle)}),(function(e){return e.theme.fontFamily})),b=(0,p.ZP)(d.Z)(r||(r=(0,s.Z)(["\n  color: #bababa;\n  padding-left: 17px;\n  font-size: 17px;\n"]))),y=p.ZP.div(l||(l=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 40px;\n  height: 48px;\n  padding-left: 20px;\n  box-shadow: 0px 4px 10px 0px #0000001a;\n  font-family: ",";\n\n  .back-icon {\n    color: #212121;\n    font-size: 15px;\n    margin-right: 14px;\n  }\n\n  .search-icon {\n    font-size: 17px;\n    color: #bababa;\n    margin: 7px;\n  }\n\n  .input {\n    font-family: ",";\n    border: none;\n    outline: none;\n    width: 100%;\n    background-color: unset;\n  }\n"])),(function(e){return e.theme.fontFamily}),(function(e){return e.theme.fontFamily})),k=function(e){var n=e.isButtonActive,t=void 0!==n&&n,i=e.isMobile,o=void 0!==i&&i,r=e.hasBackAction,l=void 0===r||r,p=e.isAutoComplete,k=void 0===p||p,S=e.placeholder,w=e.clearText,j=void 0===w?"Clear All Text":w,C=e.className,O=e.onSubmit,P=e.onChange,T=e.onBackClick,N=e.onClick,Z=e.value,F=e.selectedSearchOptions,_=void 0===F?[]:F,E=e.onSearchOptionSelected,z=e.onInputFocus,B=void 0===z?function(){}:z,I=e.onInputBlur,H=void 0===I?function(){}:I,A=e.onBackspace,D=void 0===A?function(){}:A,R=e.onClear,M=(0,u.useRef)();(0,u.useEffect)((function(){M.current&&o&&setTimeout((function(){M.current.focus()}),1)}),[]);var L=function(e){"Enter"===e.key&&(M.current&&setTimeout((function(){M.current.blur()}),1),O()),8===e.keyCode&&0===e.target.selectionStart&&D()};return o?(0,g.jsxs)(y,{className:C,children:[l&&(0,g.jsx)(f.Z,{className:"back-icon",onTouchStart:T,onClick:T}),(0,g.jsx)("input",{id:"search-experience-input",ref:M,type:"search",className:"input",value:Z,placeholder:S,autoComplete:k?"on":"off",onChange:function(e){return P(e.target.value)},onKeyPress:L}),(0,g.jsx)(m.Z,{type:"active",customStyles:(0,v.iv)(c||(c=(0,s.Z)(["\n          width: 60px;\n          height: 48px;\n          border-radius: 0;\n          box-shadow: 6px 4px 20px 0px #0000001a !important;\n          background: "," !important;\n          transition: all 0.4s ease;\n        "])),!t&&"#EDEDED"),onClick:O,children:(0,g.jsx)(d.Z,{style:{color:"white",fontSize:"17px"}})})]}):(0,g.jsxs)(x,{className:C,children:[(0,g.jsx)(b,{}),(0,g.jsx)("div",{className:"selected-options",children:_.map((function(e){return(0,g.jsx)(h.Z,{customCss:(0,v.iv)(a||(a=(0,s.Z)(["\n              margin-bottom: 4px;\n            "]))),onClick:function(){return E(e.name,e.label,e.value)},isSelected:!0,label:e.customLabel||e.label,value:e.value},e.value)}))}),(0,g.jsx)("input",{id:"search-experience-input",ref:M,placeholder:S,onFocus:B,onBlur:H,onClick:N,onChange:function(e){return P(e.target.value)},onKeyDown:L,value:Z,autoComplete:k?"on":"off"}),j&&(0,g.jsx)("div",{className:"clear-button",onClick:R,children:j})]})};n.Z=u.memo(k)},84179:function(e,n,t){var i,o,r=t(7328),l=t(7325),a=t(39264),c=t(76544),s=(t(2784),t(36841)),u=t(52322),d=s.ZP.div(i||(i=(0,r.Z)(["\n  color: #878787;\n  font-family: ",";\n  margin-bottom: 24px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  .anticon-arrow-up {\n    float: right;\n    transform: rotate(315deg);\n  }\n"])),(function(e){return e.theme.fontFamily})),f=s.ZP.button(o||(o=(0,r.Z)(["\n  border: none;\n  outline: none;\n  padding: 7px 9px;\n  font-size: 14px;\n  color: #878787;\n  background-color: #ededed;\n  margin-right: 8px;\n  margin-bottom: 8px;\n  white-space: nowrap;\n  border-radius: 4px;\n  cursor: pointer;\n  user-select: none;\n  font-family: ",";\n\n  &.selected {\n    background-color: #e5f1ff;\n    color: #0075ff;\n  }\n\n  ","\n"])),(function(e){return e.theme.fontFamily}),(function(e){return e.customCss}));n.Z=function(e){var n=e.isSelected,t=e.value,i=e.label,o=e.onClick,r=e.customCss,s=e.isTag,p=void 0===s||s,v=e.isMobile,m=void 0!==v&&v;return p?n?(0,u.jsxs)(f,{customCss:r,onClick:o,className:"selected",value:t,children:[i," ",(0,u.jsx)(l.Z,{style:{marginLeft:"3px"}})]}):(0,u.jsx)(f,{onClick:o,value:t,children:i}):(0,u.jsxs)(d,{onClick:o,children:[(0,u.jsx)(a.Z,{style:{fontSize:"16px",marginRight:"19px"}}),i,m&&(0,u.jsx)(c.Z,{})]},t)}}}]);