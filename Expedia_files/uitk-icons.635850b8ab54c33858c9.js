(self.webpackChunkblossom_flex_ui=self.webpackChunkblossom_flex_ui||[]).push([[7303],{27293:function(){},50051:function(){},22570:function(e,t,i){i.d(t,{fR:function(){return g},eZ:function(){return n},KQ:function(){return k}});var n,r=i(70655),a=i(50105),o=i(64418),s=i(67294),l=i(42157),c=i(68742),m=i(27293),u=i.n(m),d=new Map([["positive","uitk-icon-positive-theme"],["negative","uitk-icon-negative-theme"],["primary","uitk-icon-primary-theme"],["secondary","uitk-icon-secondary-theme"],["emphasis","uitk-icon-emphasis-theme"],["default","uitk-icon-default-theme"]]),p=new Map([["info","spotlight-container-info"],["standard","spotlight-container-standard"],["positive","spotlight-container-positive"],["warning","spotlight-container-warning"]]),f=l.A.bind(u());!function(e){e.EXTRA_SMALL="xsmall",e.SMALL="small",e.MEDIUM="medium",e.LARGE="large",e.XLARGE="xlarge"}(n||(n={}));var g=function(e){var t,i="uitk-icon",l=function(e){console.error("Invalid icon name prop: "+e)},m=e.className,u=e.description,g=e.id,k=e.name,v=e.size,h=e.theme,E=e.title,w=e.shadow,M=e.spotlight;k||l(k),!E&&!u||g||console.error("Icon "+k+" requires 'id' if 'title' or 'description' are provided");var b,x=Math.random().toString(36).substring(7),y="shadow-filter"+(g?"-"+g:"-"+x),L=k&&/_(?:back|forward|left|right|before|next|half)$/.test(k),A=f(i,m,((t={})["uitk-icon-directional"]=L,t["uitk-icon-"+v]=(0,c.l)(v,n)&&!M,t),M&&"uitk-icon-spotlight-icon uitk-icon-spotlight-icon-"+M,h&&!M&&d.get(h)),I=f(M&&"uitk-icon-spotlight uitk-icon-"+p.get(M)),N="function"==typeof SVGFEDropShadowElement,U=w&&N?{filter:"url(#"+y+")"}:void 0,_={"aria-describedby":u?g+"-description":void 0,"aria-hidden":!E&&!u||void 0,"aria-label":E||void 0,role:E||u?"img":void 0,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},D=(0,a.useBrand)().getIcon,S=s.createElement("svg",(0,r.pi)({ref:function(e){},className:A},_),E&&s.createElement("title",{id:g+"-title"},E),u&&s.createElement("desc",{id:g+"-description"},u),w&&s.createElement("defs",null,s.createElement("filter",{id:y},s.createElement("feDropShadow",(0,r.pi)({},{dx:0,dy:0,stdDeviation:1})))),s.createElement(o.Experiment,{name:"UITK_INLINE_SVG_SPRITE"},s.createElement(o.ExperimentControl,null,(b=D(k))?s.createElement(b,{style:U}):(l(k),!1)),s.createElement(o.ExperimentVariant,{bucket:1},s.createElement("use",{href:"#"+k,style:U})))),R=s.createElement("div",{className:I},S);return M?R:S},k=function(e){var t,i=function(e){if(!e)return console.error("Must pass something"),!1;if(!e.data)return console.error("Must pass name or data property"),!1;var t=e,i=t.data,n=(0,r.pi)({},e),a=(0,r.pi)({role:"icon",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},t.attrs);return Object.assign(a,{"aria-hidden":!0}),{iconData:i,iconProps:n,svgProps:a}}(e),n=i.svgProps,a=i.iconData;return"<svg "+(t=n,Object.keys(t).reduce((function(e,i){return e+(i+'="')+t[i]+'" '}),"").trim()+">")+a+"</svg>"};g.defaultProps={size:n.MEDIUM},g.displayName="UitkIcon"},36171:function(e,t,i){i.d(t,{FV:function(){return c},tH:function(){return u},jN:function(){return n}});var n,r=i(67294),a=i(42157),o=i(50051),s=i.n(o);!function(e){e.EXTRA_SMALL="xsmall",e.SMALL="small",e.MEDIUM="medium",e.MEDIUM_LARGE="mlarge",e.LARGE="large"}(n||(n={}));var l=a.A.bind(s()),c=function(e){var t,i,n=e.className,a=e.url,o=e.description,s=e.id,c=e.name,m=e.size,u=e.title,d=e.shadow,p=e.orientation,f=c+".svg",g="uitk-mark";c||a||console.error('Uitk-Mark must have "name" or "url" prop'),(u||d)&&console.error('The following props have been deprecated from Uitk-Mark: "title", "shadow"');var k=l(g,n,((t={})["uitk-mark-"+p+"-oriented"]=p,t)),v=((i={})["--uitk-mark-token-size"]="var(--mark-size-"+m+")",i),h=o||"";return r.createElement("img",{className:k,alt:h,src:a||"https://a.travel-assets.com/egds/marks/"+f,style:v,id:s})};c.defaultProps={orientation:"landscape",size:n.MEDIUM},c.displayName="UitkMark";var m=a.A.bind(s()),u=function(e){var t=e.className,i=e.description,n=e.id,a=e.name,o=(null==a?void 0:a.toLowerCase())+".svg",s=m("uitk-mark",t,"uitk-mark-flag");a||console.error('Uitk-Flag must have "name" prop');var l=i||"";return r.createElement("img",{className:s,alt:l,src:"https://a.travel-assets.com/egds/marks/flags/"+o,id:n})};u.displayName="UitkMarkFlag"}}]);
//# sourceMappingURL=uitk-icons.635850b8ab54c33858c9.js.map