(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2969],{74664:function(e,n,s){"use strict";s.d(n,{Z:function(){return z}});var a=s(85893),i=s(67294),t=s(72895),c=s(87361),r=s.n(c),l=s(20568),o=s(11163),d=s(5152),h=s.n(d),x=s(71562);function m(){let[e,n]=(0,i.useState)(!1),s=e=>{"Notification"in window&&!0==e&&"granted"!==Notification.permission&&Notification.requestPermission().then(e=>{}),n(!1),(0,x.d8)("nt",!1,5)};return(0,i.useEffect)(()=>{if("Notification"in window){let e=(0,x.ej)("nt");n("granted"!=Notification.permission&&"false"!=e)}},[]),(0,a.jsx)(a.Fragment,{children:e&&(0,a.jsx)("div",{className:"subscribeFrame",children:(0,a.jsxs)("div",{className:"subscribePopup",children:[(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("span",{className:"hz",children:(0,a.jsx)("svg",{children:(0,a.jsx)("use",{href:"/sprite.svg#hzIcon"})})}),(0,a.jsxs)("p",{children:[(0,a.jsx)("b",{children:"HerZindagi"})," wants to start sending you push notifications. Click ",(0,a.jsx)("b",{children:"Allow"})," to subscribe."]})]}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("button",{onClick:()=>s(!1),children:"I'll do this later"})}),(0,a.jsx)("li",{children:(0,a.jsx)("button",{onClick:()=>s(!0),children:"Allow"})})]})]})})})}var u=s(57632),_=s(81354),g=s(6154);let j=e=>{let{webComponent:n,mobileComponent:s}=e,[t,c]=(0,i.useState)("");return(0,i.useEffect)(()=>{let e=()=>{let e=window.innerWidth;c(e<=768?"mobile":"web")};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),(0,a.jsxs)(a.Fragment,{children:["mobile"===t&&s,"web"===t&&n]})},v=h()(()=>Promise.all([s.e(6068),s.e(892)]).then(s.bind(s,70892)),{loadableGenerated:{webpack:()=>[70892]},ssr:!1});function f(e){let n=(0,o.useRouter)(),{headerLink:s,topDealsNavigation:c,language:d,Pagetype:h,onLoginPage:f}=e,[p,b]=(0,i.useState)(!1);var w="hi_IN"==d?"hindi/":"ta_IN"==d?"tamil/":"",N="hi_IN"==d?"amp-stories":"ta_IN"==d?"tamil/web-stories":"web-stories/en",y="hi_IN"==d?"".concat(t.XL.BASE_URL):"ta_IN"==d?"".concat(t.XL.BASE_URL,"tamil"):"".concat(t.XL.BASE_URL,"en");let[k,C]=(0,i.useState)(""),S=e=>{e.preventDefault(),C(""),n.push({pathname:"/".concat(w,"search/")+k.replaceAll(" ","-").toLowerCase()+"-all"}),b(!1),localStorage.setItem("submit",k),setTimeout(()=>{n.reload(window.location.pathname)},3e3)},z=(0,i.useRef)(!0);(0,i.useEffect)(()=>{let e=()=>{z.current&&(z.current=!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]);let H=()=>{try{if(!(0,x.ej)("uid"))return"";{let e=atob((0,x.ej)("uid"));return JSON.parse(e).user_id}}catch(e){return""}},L=async()=>{try{var e,s;let a=(0,x.ej)("ppid"),i=H(),c=(null==document?void 0:null===(e=document.documentElement)||void 0===e?void 0:e.lang)||"hi",r="".concat(t.XL.DOMAIN_NAME).concat(n.asPath.replace("/",""));if(a&&null!=a&&""!==a)(0,x.d8)("ppid",a,365);else{let e=navigator.userAgent,n=navigator.userAgentData.platform||navigator.userAgent,s=(0,u.Z)(),i="".concat(n,"-").concat(e,"-").concat(s),t=(0,_.SHA256)(i).toString(_.enc.Hex);a=t,(0,x.d8)("ppid",a,365)}let l=(0,x.ej)("vu");if(l&&null!=l&&""!==l){let e=JSON.parse(atob(l));e[c].push(r);let n=(0,x.ej)("vud"),o=new Date(n),d=new Date,h=d.getTime()-o.getTime();if(Math.round(h/864e5)>=1)for(let n of((0,x.nJ)("vu"),(0,x.nJ)("vud"),Object.keys(e))){if(!e[n]||(null===(s=e[n])||void 0===s?void 0:s.length)==0)continue;let c={ppid:a,reqDomain:t.RY.lang[n].req_domain,url:e[n],browserUserAgent:navigator.userAgent,userId:i};await g.Z.post(t.RY.API_URL,c,{headers:{Authorization:"Bearer "+t.RY.lang[n].API_TOKEN,"Content-Type":"application/json"}})}else l=btoa(JSON.stringify(e)),(0,x.d8)("vu",l,365)}else{let e={hi:[],en:[],ta:[]};e[c].push(r),l=btoa(JSON.stringify(e)),(0,x.d8)("vu",l,365),(0,x.d8)("vud",new Date,365)}}catch(e){console.log("tracking error")}};(0,i.useEffect)(()=>{L()},[]);let B=s.visible.map((e,n)=>(0,a.jsx)("li",{className:e.menu_class,children:"_blank"===e.target?(0,a.jsx)("a",{href:e.url,title:e.menu_name,target:"_blank",onClick:()=>(0,l.K1)("navigation_interaction","".concat(e.alternate_menu_name),"na","header"),children:e.menu_name}):(0,a.jsx)("a",{href:"".concat(t.XL.BASE_URL).concat(e.url.replace("/","")),title:e.menu_name,onClick:()=>(0,l.K1)("navigation_interaction","".concat(e.alternate_menu_name),"na","header"),children:e.menu_name})},n)),E=s.more.map((e,n)=>(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"".concat(t.XL.BASE_URL).concat(e.url.replace("/","")),title:e.menu_name,onClick:()=>(0,l.K1)("navigation_interaction","".concat(e.alternate_menu_name),"more","header"),children:e.menu_name})},n)),[M,I]=(0,i.useState)(!1),[A,R]=(0,i.useState)(null),K=e=>{R(A===e?null:e)},[U,D]=(0,i.useState)(!1),T=(0,i.useRef)(null);(0,i.useEffect)(()=>{function e(e){T.current&&!T.current.contains(e.target)&&D(!1)}return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);let O=e=>{e.preventDefault(),D(!U)},[F,P]=(0,i.useState)(!1),X=(0,i.useRef)(null);(0,i.useEffect)(()=>{function e(e){X.current&&!X.current.contains(e.target)&&P(!1)}return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);let Z=e=>{e.preventDefault(),P(!F)},J=(0,a.jsxs)("a",{href:"".concat(t.XL.BASE_URL).concat("hi_IN"==d?"hindi/videos":"ta_IN"==d?"":"videos"),children:[(0,a.jsx)("svg",{children:(0,a.jsx)("use",{href:"/sprite.svg#videos"})}),(0,a.jsx)("span",{children:"Videos"})]}),Y=(0,a.jsxs)("a",{href:"".concat(t.XL.BASE_URL,"hindi/short-videos"),children:[(0,a.jsx)("svg",{children:(0,a.jsx)("use",{href:"/sprite.svg#shorts"})}),(0,a.jsx)("span",{children:"Shorts"})]}),[W,G]=(0,i.useState)(!1),V=()=>{G(!W),document.querySelector("body").classList.toggle("hidden")},[q,Q]=(0,i.useState)(!1);function $(e){dataLayer.push({event:"page_scroll",uid:"na",usertype:"guest",scroll_percent:e})}(0,i.useEffect)(()=>{var e=0;let n=(document.querySelector("taboolaGA")?document.querySelector("taboolaGA").getBoundingClientRect():"").top||document.body.offsetHeight,s=window.innerHeight;window.addEventListener("scroll",function(){let a=Math.round(100*(window.scrollY/(n-s)));25==a&&0==e&&($("25%"),e=1),50==a&&1==e&&($("50%"),e=2),75==a&&2==e&&($("75%"),e=3),100==a&&3==e&&($("100%"),e=4)})},[]);let[ee,en]=(0,i.useState)(0),[es,ea]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{let e=()=>{let e=window.pageYOffset;en(e),ea(ee>e||e<100)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[ee]),(0,a.jsxs)(a.Fragment,{children:[W&&(0,a.jsx)("div",{className:r().hamburger,children:(0,a.jsxs)("div",{className:r().navBarContainer,children:[(0,a.jsx)("div",{className:r().overlay,onClick:V}),(0,a.jsxs)("div",{className:r().navBarMain,children:[(0,a.jsxs)("div",{className:r().navTop,children:[(0,a.jsx)("a",{onClick:()=>(0,l.K1)("logo_click"),href:y,className:r().logo,alt:"logo",children:(0,a.jsx)("svg",{children:(0,a.jsx)("use",{href:"/sprite.svg#hzlogo"})})}),(0,a.jsx)("span",{className:r().menuClose,onClick:V,children:(0,a.jsx)("svg",{children:(0,a.jsx)("use",{href:"/sprite.svg#close"})})})]}),(0,a.jsxs)("div",{className:r().navBar,children:[" ",e.hamburger.map((e,n)=>(0,a.jsxs)("div",{className:r().nav,children:[(0,a.jsxs)("h4",{children:[(0,a.jsx)("a",{href:e.category_url,onClick:()=>(0,l.K1)("navigation_interaction","".concat(e.alternate_category_name),"na","hamburger"),children:e.category_name}),0!==e.categoryitems.length?(0,a.jsx)("i",{className:"".concat(r().navIcon," ").concat(A===n?"".concat(r().navIconActive):""),onClick:()=>K(n),children:A===n?"-":"+"}):""]}),0!==e.categoryitems.length?(0,a.jsx)("ul",{className:"".concat(r().navContent," ").concat(A===n?"".concat(r().activeNav):""),children:e.categoryitems.map(n=>(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:n.url,onClick:()=>(0,l.K1)("navigation_interaction","".concat(n.category_alternate_item_name),"".concat(e.alternate_category_name),"hamburger"),children:n.category_item_name})},n.category_item_name))}):""]},n))]}),(0,a.jsx)("div",{className:r().footerNav,onClick:()=>(0,l.K1)("download_app","move to herzindagi app","hamburger","android"),children:(0,a.jsxs)("a",{href:"https://play.google.com/store/apps/details?id=com.herzindagi.www.twa",target:"_blank",children:[(0,a.jsx)("span",{children:"Move to Herzindagi APP"}),(0,a.jsx)("svg",{children:(0,a.jsx)("use",{href:"/sprite.svg#download"})})]})})]})]})}),(0,a.jsxs)("div",{className:"languageModel",ref:T,style:{display:U?"flex":"none"},children:[(0,a.jsx)("div",{className:"overlay",onClick:O}),(0,a.jsxs)("div",{className:"langcol",children:[(0,a.jsx)("button",{onClick:O,className:"closeBtn",children:(0,a.jsx)("svg",{children:(0,a.jsx)("use",{href:"/sprite.svg#close"})})}),(0,a.jsx)("h3",{children:"Select Your Language"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:t.XL.BASE_URL,onClick:()=>(0,l.K1)("language_select","hindi"),className:"".concat("hi_IN"==d?"selected":""),children:"हिन्दी"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"".concat(t.XL.BASE_URL,"en"),onClick:()=>(0,l.K1)("language_select","english"),className:"".concat("en_US"==d?"selected":""),children:"English"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"".concat(t.XL.BASE_URL,"tamil"),onClick:()=>(0,l.K1)("language_select","tamil"),className:"".concat("ta_IN"==d?"selected":""),children:"தமிழ்"})})]})]})]}),(0,a.jsxs)("header",{className:"".concat(r().HeaderContainer," ").concat(r().headersticky," ").concat(es?r().visible:r().hidden),children:[(0,a.jsxs)("div",{className:r().header+" container",children:[(0,a.jsxs)("div",{className:r().ColLeft,children:[(0,a.jsx)("a",{onClick:()=>(0,l.K1)("logo_click"),href:y,className:r().logo,alt:"logo",children:(0,a.jsx)("svg",{children:(0,a.jsx)("use",{href:"/sprite.svg#hzlogo"})})}),(0,a.jsx)("div",{className:r().rhsnav,children:(0,a.jsx)("div",{className:r().language,children:(0,a.jsx)("span",{className:r().langicon,onClick:O,children:(0,a.jsx)("svg",{children:(0,a.jsx)("use",{href:"/sprite.svg#language"})})})})})]}),(0,a.jsx)("ul",{className:r().ColRight,children:(0,a.jsx)(v,{query:e.query,type:e.type,logoUrl:y,onLoginPage:f})})]}),(0,a.jsx)("nav",{className:"".concat(r().navigationMain),children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:r().navigation,children:[(0,a.jsxs)("ul",{className:r().menu+" menu "+("hi_IN"==d?"hindi":"ta_IN"==d?"tamil":"english"),children:[B,(0,a.jsx)(j,{mobileComponent:(0,a.jsx)(a.Fragment,{children:E}),webComponent:(0,a.jsx)(a.Fragment,{children:0!==E.length?(0,a.jsxs)("li",{ref:X,className:"moreNav",children:[(0,a.jsxs)("span",{onClick:Z,children:[(0,a.jsx)("span",{children:"More"})," ",(0,a.jsx)("svg",{children:(0,a.jsx)("use",{href:"/sprite.svg#dot"})})]}),(0,a.jsx)("ul",{style:{display:F?"block":"none"},className:"dropdown",children:E})]}):""})})]}),(0,a.jsx)(j,{webComponent:(0,a.jsxs)("ul",{className:r().sidenav,children:["hi_IN"==d?(0,a.jsx)("li",{onClick:()=>(0,l.K1)("navigation_interaction","shorts","na","header"),children:Y}):"en_US"==d?(0,a.jsx)("li",{onClick:()=>(0,l.K1)("navigation_interaction","shorts","na","header"),children:Y}):(0,a.jsx)(a.Fragment,{}),"hi_IN"==d?(0,a.jsx)("li",{onClick:()=>(0,l.K1)("navigation_interaction","videos","na","header"),children:J}):"en_US"==d?(0,a.jsx)("li",{onClick:()=>(0,l.K1)("navigation_interaction","videos","na","header"),children:J}):(0,a.jsx)(a.Fragment,{}),(0,a.jsx)("li",{children:(0,a.jsxs)("a",{href:"".concat(t.XL.BASE_URL).concat(N),onClick:()=>(0,l.K1)("navigation_interaction","Web Stories","na","header"),children:[(0,a.jsx)("svg",{className:r().ws,children:(0,a.jsx)("use",{href:"/sprite.svg#web-stories"})}),(0,a.jsx)("span",{children:"Web Stories"})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)("a",{href:"".concat(t.XL.BASE_URL).concat(w,"search"),children:[(0,a.jsx)("svg",{className:r().sm,children:(0,a.jsx)("use",{href:"/sprite.svg#search"})}),(0,a.jsx)("span",{children:"Search"})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)("a",{onClick:V,children:[(0,a.jsx)("svg",{className:r().sm,children:(0,a.jsx)("use",{href:"/sprite.svg#menu"})}),(0,a.jsx)("span",{children:"Menu"})]})})]})})]})})})]}),(0,a.jsx)(j,{mobileComponent:(0,a.jsx)("div",{className:r().footerSticy,children:(0,a.jsxs)("ul",{className:r().ColRight,children:[(0,a.jsx)("li",{children:(0,a.jsxs)("a",{href:"".concat(t.XL.BASE_URL).concat(N),onClick:()=>(0,l.K1)("navigation_interaction","Web Stories","na","bottom_sticky"),children:[(0,a.jsx)("svg",{className:r().ws,children:(0,a.jsx)("use",{href:"/sprite.svg#web-stories"})}),(0,a.jsx)("span",{children:"Web Stories "})]})}),"hi_IN"==d?(0,a.jsx)("li",{onClick:()=>(0,l.K1)("navigation_interaction","shorts","na","bottom_sticky"),children:Y}):"en_US"==d?(0,a.jsx)("li",{onClick:()=>(0,l.K1)("navigation_interaction","shorts","na","bottom_sticky"),children:Y}):(0,a.jsx)(a.Fragment,{}),"hi_IN"==d?(0,a.jsx)("li",{onClick:()=>(0,l.K1)("navigation_interaction","videos","na","bottom_sticky"),children:J}):"en_US"==d?(0,a.jsx)("li",{onClick:()=>(0,l.K1)("navigation_interaction","videos","na","bottom_sticky"),children:J}):(0,a.jsx)(a.Fragment,{}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"".concat(t.XL.BASE_URL).concat(w,"search"),children:(0,a.jsxs)("span",{children:[(0,a.jsx)("svg",{className:r().sm,children:(0,a.jsx)("use",{href:"/sprite.svg#search"})}),(0,a.jsx)("span",{children:"Search"})]})})}),(0,a.jsx)("li",{children:(0,a.jsxs)("span",{className:r().search,onClick:V,children:[(0,a.jsx)("svg",{className:r().sm,children:(0,a.jsx)("use",{href:"/sprite.svg#menu"})}),(0,a.jsx)("span",{children:"Menu"})]})})]})})}),(0,a.jsxs)("div",{className:"searchSec",style:{display:p?"block":"none",zIndex:"99"},children:[(0,a.jsx)("b",{className:"closeFeed",onClick:function(){b(!p)},children:(0,a.jsx)("span",{className:"close"})}),(0,a.jsx)("div",{className:"searchBox",children:(0,a.jsxs)("form",{onSubmit:S,children:[(0,a.jsx)("div",{className:"h1",children:"hi_IN"==d?"चाहिए कुछ ख़ास?":"ta_IN"==d?"எதையாவது தேடுகிறீர்களா?":"LOOKING FOR SOMETHING?"}),(0,a.jsx)("input",{value:k,type:"text",placeholder:"Search Your Keyword...",onChange:e=>{C(e.target.value)}})]})})]}),(0,a.jsx)(m,{})]})}var p=s(60357),b=s.n(p);s(89755);var w=s(73565),N=s(9008),y=s.n(N),k=s(27606);function C(e){let{lang:n,footer:s,language:c}=e,r="hi_IN"==c?"".concat(t.XL.BASE_URL):"ta_IN"==c?"".concat(t.XL.BASE_URL,"tamil"):"".concat(t.XL.BASE_URL,"en"),o=new Date().getFullYear(),[d,h]=(0,i.useState)(!1),[x,m]=(0,i.useState)(!1),[u,_]=(0,i.useState)(0),[g,j]=(0,i.useState)(!0);(0,i.useEffect)(()=>{if(void 0!=window){let e=function(e){for(var n=e+"=",s=document.cookie.split(";"),a=0;a<s.length;a++){for(var i=s[a];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(n))return i.substring(n.length,i.length)}return null}("hide");e?_("1"):(j(!1),_("2"))}},[]);let v=()=>{_("1"),function(e,n,s){if(s){var a=new Date;a.setTime(a.getTime()+864e5*s);var i="; expires="+a.toGMTString()}else var i="";document.cookie=e+"="+n+i+"; path=/"}("hide",!0,365),m(!0),j(!0)},f=[];f.push('\n   var _comscore = _comscore || [];\n   _comscore.push({\n       c1: "2",\n       c2: "13184768",\n       cs_ucfr: "'.concat(1==u?1:"",'" ,\n       options:{\n         enableFirstPartyCookie:true\n       }\n   });\n   (function() {\n       var s = document.createElement("script"),\n           el = document.getElementsByTagName("script")[0];\n       s.async = true;\n       s.src = "https://sb.scorecardresearch.com/cs/13184768/beacon.js";\n       el.parentNode.insertBefore(s, el);\n   })();\n   '));let p=s.policies.map((e,n)=>(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"".concat(e.url),title:e.menu_name,onClick:()=>(0,l.K1)("footer_interaction","".concat(e.alternate_menu_name)),children:e.menu_name})},n)),N=s.others.map((e,n)=>(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"".concat(e.url),title:e.menu_name,onClick:()=>(0,l.K1)("footer_interaction","".concat(e.alternate_menu_name)),children:e.menu_name})},n)),[C,S]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{let e=localStorage.getItem("isGdprHidden");e&&S(!1)},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(y(),{children:[x&&(0,a.jsx)("script",{type:"text/javascript",dangerouslySetInnerHTML:{__html:f}}),0!=u&&(0,a.jsx)("script",{strategy:"lazyOnload",type:"text/javascript",dangerouslySetInnerHTML:{__html:f}})]}),(0,a.jsx)("div",{className:"container linePart"}),(0,a.jsxs)(k.Z,{children:[!g&&(0,a.jsx)("div",{id:"gdprbx",style:{display:d?"none":"flex"},className:"jsx-d96bbc867afca9cf",children:(0,a.jsxs)("div",{className:"jsx-d96bbc867afca9cf cookiebox",children:["This website uses cookie or similar technologies, to enhance your browsing experience and provide personalised recommendations. By continuing to use our website, you agree to our ",(0,a.jsx)("a",{href:"https://www.herzindagi.com/hindi/privacy-policy",className:"jsx-d96bbc867afca9cf",children:"Privacy Policy"})," and ",(0,a.jsx)("a",{href:"https://www.herzindagi.com/hindi/cookie-policy",title:"Cookie Policy",className:"jsx-d96bbc867afca9cf",children:"Cookie Policy"}),".",(0,a.jsx)("div",{onClick:v,className:"jsx-d96bbc867afca9cf closegdper",children:"OK"})]})}),(0,a.jsx)(b(),{id:"d96bbc867afca9cf",children:"#gdprbx.jsx-d96bbc867afca9cf{display:none;padding:16px;position:fixed;left:10px;background:white;-webkit-box-shadow:0px 1px 10px rgb(0 0 0/26%);-moz-box-shadow:0px 1px 10px rgb(0 0 0/26%);box-shadow:0px 1px 10px rgb(0 0 0/26%);border:1px solid black;z-index:99;width:340px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;bottom:10px}#gdprbx.jsx-d96bbc867afca9cf .closegdper.jsx-d96bbc867afca9cf{background:black;font-weight:600;cursor:pointer;padding:8px 12px;color:white!important;width:70px;text-align:center;display:block;border:none;margin-top:20px}.cookiebox.jsx-d96bbc867afca9cf{padding:0;font-size:12px;line-height:17px}.cookiebox.jsx-d96bbc867afca9cf a.jsx-d96bbc867afca9cf{color:black;border-bottom:1px solid red}#gdprbx.show.jsx-d96bbc867afca9cf{display:block}@media(max-width:728px){#gdprbx.jsx-d96bbc867afca9cf{border-top:1px solid black!important;border:none;width:100%;bottom:0;left:0;z-index:999}}"})]}),(0,a.jsx)("div",{id:"target-7"}),(0,a.jsx)("div",{id:"target-15"}),(0,a.jsx)("footer",{className:"container",children:(0,a.jsxs)("div",{className:"footer",children:[(0,a.jsxs)("div",{className:"footBox",children:[(0,a.jsx)("div",{className:"footlogo",children:(0,a.jsx)("a",{href:r,className:"logo",onClick:()=>(0,l.K1)("logo_click"),children:(0,a.jsx)(w.Z,{webTitle:"HerZindagi",imageSrc:"https://images.herzindagi.info/Resources/lifestyle/images/herzindagi-logo.svg",width:"1137",height:"223"})})}),(0,a.jsxs)("div",{className:"footnav",children:[(0,a.jsx)("ul",{className:"footLink twoList",children:p}),(0,a.jsx)("ul",{className:"footLink",children:N})]})]}),(0,a.jsx)("div",{className:"footBox",children:(0,a.jsxs)("div",{className:"footSocial",children:[(0,a.jsx)("div",{className:"h5",children:"hi_IN"==c?"सोशल मीडिया पर हमसे जुड़ें":"ta_IN"==c?"சமூக ஊடகத்தில் எங்களோடு இணையவும":"Join us on Social"}),(0,a.jsxs)("ul",{className:"social",children:[(0,a.jsx)("li",{onClick:()=>(0,l.K1)("follow_us","facebook"),children:(0,a.jsx)("a",{rel:"noopener",href:"https://www.facebook.com/HerZindagi/",className:"face",target:"_blank",title:"Facebook",children:(0,a.jsx)("svg",{children:(0,a.jsx)("use",{href:"/sprite.svg#facebook"})})})}),(0,a.jsx)("li",{onClick:()=>(0,l.K1)("follow_us","twitter"),children:(0,a.jsx)("a",{rel:"noopener",href:"https://twitter.com/herzindagi",className:"twit",target:"_blank",title:"Twitter",children:(0,a.jsx)("svg",{children:(0,a.jsx)("use",{href:"/sprite.svg#twitter"})})})}),(0,a.jsx)("li",{onClick:()=>(0,l.K1)("follow_us","instagram"),children:(0,a.jsx)("a",{rel:"noopener",href:"https://www.instagram.com/herzindagi/",className:"inst",target:"_blank",title:"insta",children:(0,a.jsx)("svg",{children:(0,a.jsx)("use",{href:"/sprite.svg#instagram"})})})}),(0,a.jsx)("li",{onClick:()=>(0,l.K1)("follow_us","youtube"),children:(0,a.jsx)("a",{rel:"noopener",href:"https://www.youtube.com/channel/UC_yQL2cdSPkw_DxvIt8TBJw",className:"you",target:"_blank",title:"youtube",children:(0,a.jsx)("svg",{children:(0,a.jsx)("use",{href:"/sprite.svg#youtube"})})})})]}),(0,a.jsx)("p",{className:"appHide",children:(0,a.jsx)("a",{href:"https://play.google.com/store/apps/details?id=com.herzindagi.www.twa",target:"_blank",rel:"noopener noreferrer",onClick:()=>(0,l.K1)("download_app","android app on google play","footer","android"),children:(0,a.jsx)(w.Z,{webTitle:"HerZindagi",imageSrc:"https://images.herzindagi.info/Resources/lifestyle/images/hz-android-app-download.jpg",width:"140",height:"43"})})})]})}),(0,a.jsx)("div",{className:"footBox",children:(0,a.jsxs)("div",{className:"footCopy",children:[(0,a.jsxs)("p",{children:["Copyright \xa9 ",o," Her Zindagi"]}),(0,a.jsx)("p",{children:(0,a.jsx)("a",{target:"_blank",href:"".concat(t.XL.BASE_URL).concat("hi_IN"==c?"hindi/":"ta_IN"==c?"tamil/":"hindi/","code-of-ethics-for-digital-news-websites"),title:"This Website Follows The DNPA's Code Of Conduct",children:"This Website Follows The DNPA’s Code Of Conduct "})}),(0,a.jsxs)("p",{children:["For Any Feedback Or Complaint, Email To ",(0,a.jsx)("a",{href:"mailto:compliant_gro@jagrannewmedia.com",title:"compliant_gro@jagrannewmedia.com",children:"compliant_gro@jagrannewmedia.com"})]})]})})]})}),(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{display:"none"},children:[(0,a.jsx)("symbol",{id:"logout",viewBox:"0 0 6.35 6.35",children:(0,a.jsx)("path",{d:"M3.172.53a.265.266 0 0 0-.262.268v2.127a.265.266 0 0 0 .53 0V.798A.265.266 0 0 0 3.172.53zm1.544.532a.265.266 0 0 0-.026 0 .265.266 0 0 0-.147.47c.459.391.749.973.749 1.626 0 1.18-.944 2.131-2.116 2.131A2.12 2.12 0 0 1 1.06 3.16c0-.65.286-1.228.74-1.62a.265.266 0 1 0-.344-.404A2.667 2.667 0 0 0 .53 3.158a2.66 2.66 0 0 0 2.647 2.663 2.657 2.657 0 0 0 2.645-2.663c0-.812-.363-1.542-.936-2.03a.265.266 0 0 0-.17-.066z"})}),(0,a.jsx)("symbol",{id:"bookmark",viewBox:"28 28 24 24",children:(0,a.jsx)("path",{d:"M30.608,28v24l1.664-1.239L40,44.957l7.729,5.804L49.392,52V28H30.608z M32.696,30.087h14.609v17.739l-6.686-5.022 L40,42.348l-0.62,0.456l-6.685,5.022V30.087z"})}),(0,a.jsx)("symbol",{id:"bookmarkfill",viewBox:"28 28 24 24",children:(0,a.jsx)("path",{d:"M30.608,28v24l1.664-1.239L40,44.957l7.729,5.804L49.392,52V28H30.608z"})}),(0,a.jsx)("symbol",{id:"video-icon",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{d:"M16 16c0 1.104-.896 2-2 2h-12c-1.104 0-2-.896-2-2v-8c0-1.104.896-2 2-2h12c1.104 0 2 .896 2 2v8zm8-10l-6 4.223v3.554l6 4.223v-12z"})}),(0,a.jsx)("symbol",{id:"facebook",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{d:"M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"})}),(0,a.jsx)("symbol",{viewBox:"0 0 1668.56 1221.19",id:"twitter",children:(0,a.jsx)("path",{id:"path1009",d:"M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"})}),(0,a.jsx)("symbol",{id:"instagram",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})}),(0,a.jsx)("symbol",{id:"youtube",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{d:"M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"})}),(0,a.jsx)("symbol",{id:"whatsapp",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{d:"M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"})}),(0,a.jsx)("symbol",{id:"heart",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{d:"M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z"})}),(0,a.jsx)("symbol",{id:"heartfill",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{d:"M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"})}),(0,a.jsx)("symbol",{id:"music",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{d:"M22 13c-.027-5.497-4.497-10-10-10s-9.973 4.503-10 10h2.5c.828 0 1.5.672 1.5 1.5v7c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-8.5c.027-6.601 5.394-12 12-12s11.973 5.399 12 12v8.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-7c0-.828.672-1.5 1.5-1.5h2.5z"})}),(0,a.jsx)("symbol",{id:"comment",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{d:"M7 11c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5s-.671 1.5-1.5 1.5zm5 0c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5s-.671 1.5-1.5 1.5zm5 0c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5s-.671 1.5-1.5 1.5zm5-8v13h-11.643l-4.357 3.105v-3.105h-4v-13h20zm2-2h-24v16.981h4v5.019l7-5.019h13v-16.981z"})}),(0,a.jsx)("symbol",{id:"share-post",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{d:"M5 9c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.762 0-5 2.239-5 5s2.238 5 5 5 5-2.239 5-5-2.238-5-5-5zm15 9c-1.165 0-2.204.506-2.935 1.301l-5.488-2.927c-.23.636-.549 1.229-.944 1.764l5.488 2.927c-.072.301-.121.611-.121.935 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-22c-2.209 0-4 1.791-4 4 0 .324.049.634.121.935l-5.488 2.927c.395.536.713 1.128.944 1.764l5.488-2.927c.731.795 1.77 1.301 2.935 1.301 2.209 0 4-1.791 4-4s-1.791-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"})}),(0,a.jsxs)("symbol",{id:"awesome",viewBox:"0 0 24 24",children:[(0,a.jsx)("path",{d:"M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M12,2c3.7,0,6.9,2,8.6,5H3.4C5.1,4,8.3,2,12,2z M12,22C6.5,22,2,17.5,2,12c0-1,0.2-2.1,0.5-3h1.9c0.6,1.5,1.9,3,4,3c2.5,0,2.2-2.3,3.7-2.3s1.2,2.3,3.7,2.3c2.1,0,3.4-1.5,4-3h1.9c0.3,0.9,0.5,2,0.5,3C22,17.5,17.5,22,12,22z"}),(0,a.jsx)("path",{d:"M12,15.9c-2.3,0-4-0.7-5.5-1.9L6,14.4c1.1,1.7,3.2,3.6,6,3.6c2.8,0,4.9-1.8,6-3.6l-0.5-0.5C16,15.1,14.3,15.9,12,15.9z"})]}),(0,a.jsxs)("symbol",{id:"good",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{cx:"15.5",cy:"9.5",r:"1.5"}),(0,a.jsx)("path",{d:"M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M12,22C6.5,22,2,17.5,2,12S6.5,2,12,2s10,4.5,10,10S17.5,22,12,22z"}),(0,a.jsx)("path",{d:"M12,15.9c-2.3,0-4-0.7-5.5-1.9L6,14.4c1.1,1.7,3.2,3.6,6,3.6c2.8,0,4.9-1.8,6-3.6l-0.5-0.5C16,15.1,14.3,15.9,12,15.9z"}),(0,a.jsx)("circle",{cx:"8.5",cy:"9.5",r:"1.5"})]}),(0,a.jsxs)("symbol",{id:"ok",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{cx:"8.5",cy:"9.5",r:"1.5"}),(0,a.jsx)("path",{d:"M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M12,22C6.5,22,2,17.5,2,12S6.5,2,12,2s10,4.5,10,10S17.5,22,12,22z"}),(0,a.jsx)("rect",{x:"6.7",y:"15.3",width:"10.6",height:"1.5"}),(0,a.jsx)("circle",{cx:"15.5",cy:"9.5",r:"1.5"})]}),(0,a.jsx)("symbol",{id:"rgtArrow",viewBox:"0 0 512 512",children:(0,a.jsx)("path",{d:"m506.134 241.843-.018-.019-104.504-104c-7.829-7.791-20.492-7.762-28.285.068-7.792 7.829-7.762 20.492.067 28.284L443.558 236H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h423.557l-70.162 69.824c-7.829 7.792-7.859 20.455-.067 28.284 7.793 7.831 20.457 7.858 28.285.068l104.504-104 .018-.019c7.833-7.818 7.808-20.522-.001-28.314z"})}),(0,a.jsx)("symbol",{id:"edit",viewBox:"0 0 98 98",children:(0,a.jsx)("path",{d:"m 72.1,22.8 a 8.7,8.7 0 0 0 -2.5,-6.2 v 0 A 9,9 0 0 0 63.4,14 v 0 a 8.6,8.6 0 0 0 -6.1,2.5 l 12.3,12.4 a 8.2,8.2 0 0 0 2.5,-6.1 z M 66.8,31.7 54.5,19.4 26,47.9 38.3,60.2 Z M 24.4,51.9 21.6,64.6 34.3,61.8 Z M 82.5,80 h -67 a 2,2 0 0 0 0,4 h 67 a 2,2 0 0 0 0,-4 z"})}),(0,a.jsxs)("symbol",{id:"language",viewBox:"0 0 24 24",children:[(0,a.jsx)("path",{d:"M23.975,10.908v1.556h-2.156V23.99H19.98v-5.445l-2.438-0.018c0.117,0.343,0.176,0.701,0.176,1.079c0,1.024-0.329,1.851-0.989,2.476c-0.66,0.622-1.532,0.938-2.616,0.938c-0.778,0-1.471-0.153-2.079-0.46c-0.607-0.305-1.078-0.734-1.415-1.281c-0.335-0.547-0.503-1.174-0.503-1.882h1.732c0,0.59,0.197,1.074,0.591,1.457c0.396,0.383,0.911,0.575,1.547,0.575c0.624,0,1.119-0.184,1.484-0.548c0.365-0.365,0.548-0.847,0.548-1.449c0-0.341-0.064-0.642-0.193-0.903h-0.035V18.44c-0.377-0.67-1.042-1.008-1.998-1.008h-0.725v-1.5h0.725c0.647,0,1.153-0.174,1.513-0.522c0.357-0.349,0.538-0.764,0.538-1.246c0-0.555-0.18-0.999-0.538-1.334c-0.359-0.337-0.811-0.504-1.353-0.504c-0.566,0-1.041,0.163-1.424,0.485c-0.382,0.323-0.573,0.758-0.573,1.3h-1.714c0-0.674,0.157-1.26,0.469-1.769c0.312-0.506,0.751-0.897,1.316-1.174c0.566-0.276,1.208-0.417,1.928-0.417c1.059,0,1.917,0.289,2.571,0.866c0.653,0.579,0.981,1.344,0.981,2.3c0,0.671-0.178,1.245-0.531,1.722c-0.354,0.479-0.865,0.806-1.537,0.98v0.036c0.328,0.071,0.636,0.191,0.919,0.354h3.623v-6.102H23.975z"}),(0,a.jsx)("path",{d:"M11.202,10.747L7.361,0.01H4.82l-4.794,13.4h2.291l0.962-2.734h5.603l0.798,2.265c0.083-0.396,0.22-0.767,0.425-1.101C10.378,11.396,10.749,11.031,11.202,10.747z M3.896,8.885l2.195-6.218l2.174,6.218H3.896z"})]}),(0,a.jsx)("symbol",{viewBox:"0 0 16 16",id:"nativeshare",children:(0,a.jsx)("path",{d:"M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"})}),(0,a.jsx)("symbol",{id:"userIcon",viewBox:"0 0 512 512",children:(0,a.jsx)("g",{children:(0,a.jsx)("path",{d:"M230.432 239.282c65.829 0 119.641-53.812 119.641-119.641C350.073 53.812 296.261 0 230.432 0s-119.64 53.812-119.64 119.641 53.812 119.641 119.64 119.641zM435.755 334.89c-3.135-7.837-7.314-15.151-12.016-21.943-24.033-35.527-61.126-59.037-102.922-64.784-5.224-.522-10.971.522-15.151 3.657-21.943 16.196-48.065 24.555-75.233 24.555s-53.29-8.359-75.233-24.555c-4.18-3.135-9.927-4.702-15.151-3.657-41.796 5.747-79.412 29.257-102.922 64.784-4.702 6.792-8.882 14.629-12.016 21.943-1.567 3.135-1.045 6.792.522 9.927 4.18 7.314 9.404 14.629 14.106 20.898 7.314 9.927 15.151 18.808 24.033 27.167 7.314 7.314 15.673 14.106 24.033 20.898 41.273 30.825 90.906 47.02 142.106 47.02s100.833-16.196 142.106-47.02c8.359-6.269 16.718-13.584 24.033-20.898 8.359-8.359 16.718-17.241 24.033-27.167 5.224-6.792 9.927-13.584 14.106-20.898 2.611-3.135 3.133-6.793 1.566-9.927z",fill:"#ffffff","data-original":"#000000"})})})]})]})}var S=s(39332);function z(e){let{Pagetype:n,children:s,languageUrl:i,hamburger:t,footer:c,topDealNav:r,lang:l,headerLink:d,language:h,type:x,pageViews:m,onLoginPage:u,..._}=e,g="left"==r?"left":"center",j=(0,S.useSearchParams)();(0,o.useRouter)();let v=j.get("mobile");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(y(),{children:[(0,a.jsx)("meta",{name:"robots",content:"NOYDIR,NOODP"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})]}),(0,a.jsx)("noscript",{dangerouslySetInnerHTML:{__html:"\n    <iframe src='https://www.googletagmanager.com/ns.html?id=GTM-WWVXM33' height='0' width='0' style={{ display: 'none', visibility:'hidden' }}></iframe>\n  "}}),t&&g&&"true"!=v&&(0,a.jsx)(f,{Pagetype:n,headerLink:d,hamburger:t,topDealsNavigation:g,language:h,type:x,pageViews:m,onLoginPage:u}),(0,a.jsx)("article",{className:"layout",children:s}),(0,a.jsx)("div",{id:"modal-root"}),c&&"true"!=v&&(0,a.jsx)(C,{footer:c,language:h})]})}},30272:function(e,n,s){"use strict";var a=s(85893),i=s(67294);let t=e=>{let{webScrollDepth:n,mobileScrollDepth:s,children:t}=e,[c,r]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=()=>{let e=window.scrollY,a=window.innerWidth<=768;e>(a?s:n)&&r(!0)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[n,s]),(0,a.jsx)("div",{children:t&&c&&(0,a.jsx)("div",{children:t})})};n.Z=t},71562:function(e,n,s){"use strict";function a(e){if("undefined"!=typeof document){let n=document.cookie.split(";");for(let s=0;s<n.length;s++){let a=n[s].trim();if(a.startsWith(e+"="))return decodeURIComponent(a.substring(e.length+1))}}return null}function i(e,n,s){if("undefined"!=typeof document){let a=new Date(Date.now()+1e3*(86400*(s||365)));document.cookie=e+"="+n+"; expires="+a.toUTCString()+"; path=/"}}function t(e){document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"}s.d(n,{TX:function(){return l},Wv:function(){return c},a1:function(){return o},d8:function(){return i},ej:function(){return a},nJ:function(){return t},vC:function(){return r}}),s(72895);let c=()=>{var e;let n=(null==document?void 0:null===(e=document.documentElement)||void 0===e?void 0:e.lang)||"hi";return({hi:"hindi-herzindagi.com",en:"english-herzindagi.com",ta:"tamil-herzindagi.com"})[n]},r=()=>{i("pv_en",JSON.stringify({count:0})),i("pv_hi",JSON.stringify({count:0})),i("pv_ta",JSON.stringify({count:0}))},l=()=>{t("uid"),localStorage.setItem("uid_auth",""),window.location.href="/"},o=(e,n,s)=>e?e.map(e=>n.includes(e.id)?{...e,bookmark:!0}:{...e,bookmark:!1}):e},27606:function(e,n,s){"use strict";var a=s(85893),i=s(67294);let t=e=>{let{scrollDepth:n,children:s}=e,[t,c]=(0,i.useState)(!1);return n=void 0==n?"1":n,(0,i.useEffect)(()=>{let e=()=>{let e=window.scrollY;e>n&&c(!0)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[n]),(0,a.jsx)(a.Fragment,{children:t&&s})};n.Z=t},87361:function(e){e.exports={flex:"Header_flex__Du6mJ","flex-cc":"Header_flex-cc__F8Vbb",hamburger:"Header_hamburger__usN5f",navBarContainer:"Header_navBarContainer__gc8HI",navBarMain:"Header_navBarMain__7747J",navTop:"Header_navTop__3F2dh",user:"Header_user__aDdKo","flex-ccw":"Header_flex-ccw__H5oYg","flex-s":"Header_flex-s__DeDKU","flex-sc":"Header_flex-sc__ezEuQ","flex-scw":"Header_flex-scw__imxHD","flex-ss":"Header_flex-ss__IAV_j","flex-ssw":"Header_flex-ssw__t3Jia","flex-j":"Header_flex-j__kcbwq","flex-js":"Header_flex-js__DobTa","flex-jsw":"Header_flex-jsw__YwuDL","flex-jc":"Header_flex-jc__XArBx","flex-jcw":"Header_flex-jcw__f8NHU",btn:"Header_btn__8wRuq",btnDark:"Header_btnDark__mZ4zb",btnPrimary:"Header_btnPrimary__ot40D",btnOutline:"Header_btnOutline__xVrYK",s:"Header_s__Q_agQ",m:"Header_m__51uoW",l:"Header_l__e5gFh",HeaderContainer:"Header_HeaderContainer__efXQw",headersticky:"Header_headersticky__kkp4G",visible:"Header_visible__sGDS9",hidden:"Header_hidden__sNdru",nav:"Header_nav__dSGyd",header:"Header_header__5gUEb",ColLeft:"Header_ColLeft__DaEH8",logo:"Header_logo__RLDBz",rhsnav:"Header_rhsnav__OpaPp",profile:"Header_profile__EX_Yf",login:"Header_login__LG3xH",language:"Header_language__xOxU1",langicon:"Header_langicon__98Y5W",active:"Header_active__m39ru",ColRight:"Header_ColRight__ii_TY",search:"Header_search__fUdap",menu:"Header_menu__Lctk9",overlay:"Header_overlay__htyiL",navBar:"Header_navBar__83zuq",userInfo:"Header_userInfo__097F6",loginpage:"Header_loginpage__8dLQc",bookmark:"Header_bookmark__5Qbjb",menuClose:"Header_menuClose__EUz8B",footerNav:"Header_footerNav__GqrZJ",navIcon:"Header_navIcon__s2zDA",navIconActive:"Header_navIconActive__k1ucy",navContent:"Header_navContent__8xaZC",activeNav:"Header_activeNav__4Ahnh",navigationMain:"Header_navigationMain__d0Bl_",navigation:"Header_navigation__buMca",sidenav:"Header_sidenav__uPuN4",footerSticy:"Header_footerSticy__DLBkV"}},42480:function(){}}]);