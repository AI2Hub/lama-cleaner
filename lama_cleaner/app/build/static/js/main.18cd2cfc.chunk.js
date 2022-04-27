(this["webpackJsonplama-cleaner"]=this["webpackJsonplama-cleaner"]||[]).push([[0],{36:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(18),r=n.n(i),o=(n(36),n(6)),s=n(2),l=n(42),u=n(4),d=n.n(u),j=n(9);var b=n(3),h=n(40),f=n(10),O=n(1);function v(e){var t=e.minWidth,n=e.chevronDirection,c=e.value,i=e.options,r=e.onChange,o=Object(a.useState)(!1),l=Object(s.a)(o,2),u=l[0],d=l[1],j=Object(a.useRef)(null);Object(h.a)(j,(function(){d(!1)}));return Object(O.jsxs)("div",{className:"selector",ref:j,style:{minWidth:t},children:[Object(O.jsxs)("div",{className:"selector-main",role:"button",onClick:function(){d((function(e){return!e}))},"aria-hidden":"true",children:[Object(O.jsx)("p",{children:c}),Object(O.jsx)("div",{className:"selector-icon",children:"up"===n?Object(O.jsx)(f.e,{}):Object(O.jsx)(f.d,{})})]}),u&&Object(O.jsx)("div",{className:"selector-options",children:i.map((function(e,t){return Object(O.jsx)("div",{className:"selector-option",role:"button",tabIndex:0,onClick:function(e){return function(e,t){var n=e.target.textContent.split("x");r(n[0]),d(!1)}(e)},"aria-hidden":"true",children:e},e)}))})]})}v.defaultProps={minWidth:128,chevronDirection:"down"};var p=v,x=n(5),g=["value","onValue"],m=c.a.forwardRef((function(e,t){var n=e.value,a=e.onValue,c=Object(x.a)(e,g);return Object(O.jsx)("input",Object(b.a)(Object(b.a)({value:n,onInput:function(e){var t=e.target.value.replace(/\D/g,"");null===a||void 0===a||a(t)},className:"number-input"},c),{},{ref:t,type:"text"}))}));var w=function(e){var t=e.title,n=e.desc,a=e.input,c=e.optionDesc,i=e.className;return Object(O.jsxs)("div",{className:"setting-block ".concat(i),children:[Object(O.jsxs)("div",{className:"setting-block-content",children:[Object(O.jsxs)("div",{className:"setting-block-content-title",children:[Object(O.jsx)("span",{children:t}),n&&Object(O.jsx)("span",{className:"setting-block-desc",children:n})]}),a]}),c&&Object(O.jsx)("div",{className:"option-desc",children:c})]})};var y,k=function(e){var t=e.title,n=e.value,a=e.suffix,c=e.onValue;return Object(O.jsx)(w,{className:"sub-setting-block",title:t,input:Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"8px"},children:[Object(O.jsx)(m,{style:{width:"80px"},value:"".concat(n),onValue:c}),a&&Object(O.jsx)("span",{children:a})]})})};!function(e){e.ORIGINAL="Original",e.RESIZE="Resize",e.CROP="Crop"}(y||(y={}));var S,C=function(){var e=Object(o.c)(D),t=Object(s.a)(e,2),n=t[0],a=t[1],c=function(e){a((function(t){return Object(b.a)(Object(b.a)({},t),{},{hdStrategy:e})}))},i=function(e){var t=0===e.length?0:parseInt(e,10);a((function(e){return Object(b.a)(Object(b.a)({},e),{},{hdStrategyResizeLimit:t})}))},r=function(e){var t=0===e.length?0:parseInt(e,10);a((function(e){return Object(b.a)(Object(b.a)({},e),{},{hdStrategyCropTrigerSize:t})}))},l=function(e){var t=0===e.length?0:parseInt(e,10);a((function(e){return Object(b.a)(Object(b.a)({},e),{},{hdStrategyCropMargin:t})}))},u=function(){return Object(O.jsxs)("div",{children:["Use the original resolution of the picture, suitable for picture size below 2K. Try"," ",Object(O.jsx)("div",{tabIndex:0,role:"button",className:"inline-tip",onClick:function(){return c(y.RESIZE)},children:"Resize Strategy"})," ","if you do not get good results on high resolution images."]})};return Object(O.jsx)(w,{className:"hd-setting-block",title:"High Resolution Strategy",input:Object(O.jsx)(p,{value:n.hdStrategy,options:Object.values(y),onChange:function(e){return c(e)}}),optionDesc:function(){switch(n.hdStrategy){case y.ORIGINAL:return u();case y.CROP:return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"Crop masking area from the original image to do inpainting, and paste the result back. Mainly for performance and memory reasons on high resolution image."}),Object(O.jsx)(k,{title:"Trigger size",value:"".concat(n.hdStrategyCropTrigerSize),suffix:"pixel",onValue:r}),Object(O.jsx)(k,{title:"Crop margin",value:"".concat(n.hdStrategyCropMargin),suffix:"pixel",onValue:l})]});case y.RESIZE:return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"Resize the longer side of the image to a specific size(keep ratio), then do inpainting on the resized image."}),Object(O.jsx)(k,{title:"Size limit",value:"".concat(n.hdStrategyResizeLimit),suffix:"pixel",onValue:i})]});default:return u()}}()})};!function(e){e.LAMA="lama",e.LDM="ldm"}(S||(S={}));var L,M=function(){var e=Object(o.c)(D),t=Object(s.a)(e,2),n=t[0],a=t[1],c=function(e,t,n){return Object(O.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[Object(O.jsx)("a",{className:"model-desc-link",href:t,target:"_blank",rel:"noreferrer noopener",children:e}),Object(O.jsx)("a",{className:"model-desc-link",href:n,target:"_blank",rel:"noreferrer noopener",children:n})]})};return Object(O.jsx)(w,{className:"model-setting-block",title:"Inpainting Model",input:Object(O.jsx)(p,{value:n.model,options:Object.values(S),onChange:function(e){return t=e,void a((function(e){return Object(b.a)(Object(b.a)({},e),{},{model:t})}));var t}}),optionDesc:function(){switch(n.model){case S.LAMA:return c("Resolution-robust Large Mask Inpainting with Fourier Convolutions","https://arxiv.org/abs/2109.07161","https://github.com/saic-mdal/lama");case S.LDM:return Object(O.jsxs)("div",{children:[c("High-Resolution Image Synthesis with Latent Diffusion Models","https://arxiv.org/abs/2112.10752","https://github.com/CompVis/latent-diffusion"),Object(O.jsx)(k,{title:"Steps",value:"".concat(n.ldmSteps),onValue:function(e){var t=0===e.length?0:parseInt(e,10);a((function(e){return Object(b.a)(Object(b.a)({},e),{},{ldmSteps:t})}))}})]});default:return Object(O.jsx)(O.Fragment,{})}}()})},N=Object(o.b)({key:"fileState",default:void 0}),z=Object(o.b)({key:"toastState",default:{open:!1,desc:"",state:"default",duration:3e3}}),E=Object(o.b)({key:"shortcutsState",default:!1}),I={show:!1,runInpaintingManually:!1,model:S.LAMA,ldmSteps:50,hdStrategy:y.RESIZE,hdStrategyResizeLimit:2048,hdStrategyCropTrigerSize:2048,hdStrategyCropMargin:128},D=Object(o.b)({key:"settingsState",default:I,effects:[(L="settingsState",function(e){var t=e.setSelf,n=e.onSet,a=localStorage.getItem(L);if(null!=a){var c=JSON.parse(a);c.show=!1,t(c)}n((function(e,t,n){return n?localStorage.removeItem(L):localStorage.setItem(L,JSON.stringify(e))}))})]}),R=n(8),Z=function(){var e=Object(a.useState)(window.innerWidth),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(a.useCallback)((function(){c(window.innerWidth)}),[]);return Object(a.useEffect)((function(){return window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}})),n<768?"mobile":n>=768&&n<1224?"tablet":n>=1224?"desktop":void 0};function H(e){var t=e.onSelection,n=Object(a.useState)(!1),c=Object(s.a)(n,2),i=c[0],r=c[1],o=Object(a.useState)("file-upload-".concat(Math.random().toString())),l=Object(s.a)(o,1)[0],u=Z();function b(e){if(e&&e.type.match("image.*"))try{if(e.size>20971520)throw new Error("file too large");t(e)}catch(n){alert("error: ".concat(n.message))}}function h(e){return f.apply(this,arguments)}function f(){return(f=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){t.file((function(t){return e(t)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return p.apply(this,arguments)}function p(){return(p=Object(j.a)(d.a.mark((function e(t){var n,a,c,i,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=[],a=[],c=0;c<t.length;c+=1)a.push(t[c].webkitGetAsEntry());case 3:if(!(a.length>0)){e.next=23;break}if(!(null===(i=a.shift())||void 0===i?void 0:i.isFile)){e.next=12;break}return e.next=8,h(i);case 8:r=e.sent,n.push(r),e.next=21;break;case 12:if(!(null===i||void 0===i?void 0:i.isDirectory)){e.next=21;break}return e.t0=a.push,e.t1=a,e.t2=R.a,e.next=18,x(i.createReader());case 18:e.t3=e.sent,e.t4=(0,e.t2)(e.t3),e.t0.apply.call(e.t0,e.t1,e.t4);case 21:e.next=3;break;case 23:return e.abrupt("return",n);case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return g.apply(this,arguments)}function g(){return(g=Object(j.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,m(t);case 3:a=e.sent;case 4:if(!(a.length>0)){e.next=11;break}return n.push.apply(n,Object(R.a)(a)),e.next=8,m(t);case 8:a=e.sent,e.next=4;break;case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return w.apply(this,arguments)}function w(){return(w=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){t.readEntries(e,n)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,v(t.dataTransfer.items);case 3:n=e.sent,r(!1),b(n[0]);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(O.jsx)("label",{htmlFor:l,className:"file-select-label",children:Object(O.jsxs)("div",{className:["file-select-container",i?"file-select-label-hover":""].join(" "),onDrop:function(e){return y.apply(this,arguments)},onDragOver:function(e){e.stopPropagation(),e.preventDefault(),r(!0)},onDragLeave:function(){return r(!1)},children:[Object(O.jsx)("input",{id:l,name:l,type:"file",onChange:function(e){var t,n=null===(t=e.currentTarget.files)||void 0===t?void 0:t[0];n&&b(n)},accept:"image/png, image/jpeg"}),Object(O.jsx)("p",{className:"file-select-message",children:"desktop"===u?"Click here or drag an image file":"Tap here to load your picture"})]})})}var T=function(){var e=Object(o.e)(N);return Object(O.jsxs)("div",{className:"landing-page",children:[Object(O.jsxs)("h1",{children:["Image inpainting powered by \ud83e\udd99",Object(O.jsx)("a",{href:"https://github.com/saic-mdal/lama",children:"LaMa"})]}),Object(O.jsx)("div",{className:"landing-file-selector",children:Object(O.jsx)(H,{onSelection:function(){var t=Object(j.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(n);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()})})]})},V=Object(o.b)({key:"themeState",default:"light"}),A=function(){var e=Object(o.c)(V),t=Object(s.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){window.matchMedia("(prefers-color-scheme: dark)").matches?c("dark"):c("light")}),[c]);return Object(O.jsx)("div",{className:"theme-toggle-ui",children:Object(O.jsx)("div",{className:"theme-btn",onClick:function(){c("light"===n?"dark":"light")},role:"button",tabIndex:0,"aria-hidden":"true",children:"light"===n?Object(O.jsx)(f.i,{}):Object(O.jsx)(f.j,{style:{color:"#ffcc00"}})})})},P=n(29),W=n(41),U=n(31);function B(e){for(var t=e.split(",")[0].split(":")[1].split(";")[0],n=atob(e.split(",")[1]),a=[],c=0;c<n.length;c+=1)a.push(n.charCodeAt(c));return new Blob([new Uint8Array(a)],{type:t})}function F(e,t){return new Promise((function(n,a){var c=e.src,i=e;i.onload=n,i.onerror=function(e){i.src=c,a(e)},i.src=t}))}var G="".concat("");function J(e,t,n,a){return K.apply(this,arguments)}function K(){return K=Object(j.a)(d.a.mark((function e(t,n,a,c){var i,r,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=new FormData).append("image",t),r=B(n),i.append("mask",r),i.append("ldmSteps",a.ldmSteps.toString()),i.append("hdStrategy",a.hdStrategy),i.append("hdStrategyCropMargin",a.hdStrategyCropMargin.toString()),i.append("hdStrategyCropTrigerSize",a.hdStrategyCropTrigerSize.toString()),i.append("hdStrategyResizeLimit",a.hdStrategyResizeLimit.toString()),void 0===c?i.append("sizeLimit","1080"):i.append("sizeLimit",c),e.next=12,fetch("".concat(G,"/inpaint"),{method:"POST",body:i}).then(function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.blob());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 12:return o=e.sent,e.abrupt("return",URL.createObjectURL(o));case 14:case"end":return e.stop()}}),e)}))),K.apply(this,arguments)}function _(e){var t=new FormData;return t.append("name",e),fetch("".concat(G,"/model"),{method:"POST",body:t})}function Y(){return fetch("".concat(G,"/model"),{method:"GET"})}var X=function(e){var t=e.children,n=e.className,a=e.disabled,c=e.icon,i=e.onKeyDown,r=e.onClick,o=e.onDown,s=e.onUp,l=e.style;return Object(O.jsxs)("div",{role:"button",style:l,onKeyDown:i,onClick:function(e){e.currentTarget.blur(),null===r||void 0===r||r()},onPointerDown:function(e){null===o||void 0===o||o(e.nativeEvent)},onPointerUp:function(e){null===s||void 0===s||s(e.nativeEvent)},tabIndex:-1,className:["btn-primary",t?"btn-primary-content":"",!0===a?"btn-primary-disabled":"",n].join(" "),children:[c,t?Object(O.jsx)("span",{children:t}):null]})};X.defaultProps={disabled:!1};var $=X;function Q(e){var t=e.value,n=e.onChange,a=e.label,c=e.min,i=e.max,r=((i||100)-(c||0))/100;return Object(O.jsxs)("div",{className:"editor-brush-slider",children:[Object(O.jsx)("span",{children:a}),Object(O.jsx)("input",{type:"range",step:r,min:c,max:i,value:t,onChange:function(e){e.preventDefault(),e.stopPropagation(),n(parseInt(e.currentTarget.value,10))}})]})}var q=["720","1080","2000","Original"];function ee(e){var t=e.originalHeight,n=e.originalWidth,c=e.onChange,i=Object(a.useState)(!1),r=Object(s.a)(i,2),o=r[0],l=r[1],u=Object(a.useRef)(null),d=Object(a.useState)("Original"),j=Object(s.a)(d,2),b=j[0],v=j[1],p=Math.max(n,t),x=Object(a.useCallback)((function(){for(var e=[],t=0;t<q.length;t+=1)"Original"===q[t]&&e.push(q[t]),parseInt(q[t],10)<p&&e.push(q[t]);return e}),[p]),g=Object(a.useCallback)((function(e){if("Original"===e)return"".concat(n,"x").concat(t);var a=parseInt(e,10)/p;if(n>t){var c=Math.ceil(t*a);return"".concat(e,"x").concat(c)}var i=Math.ceil(n*a);return"".concat(i,"x").concat(e)}),[n,t,p]);Object(h.a)(u,(function(){l(!1)}));var m=function(e){var a=e.target.textContent.split("x");n>t?(v(a[0]),c(a[0])):(v(a[1]),c(a[1])),l(!o)};return Object(O.jsxs)("div",{className:"editor-size-selector",ref:u,children:[Object(O.jsxs)("div",{className:"editor-size-selector-main",role:"button",tabIndex:0,onClick:function(){l((function(e){return!e}))},"aria-hidden":"true",children:[Object(O.jsx)("p",{children:g(b.toString())}),Object(O.jsx)("div",{className:"editor-size-selector-icon",children:Object(O.jsx)(f.e,{})})]}),o&&Object(O.jsx)("div",{className:"editor-size-options",children:x().map((function(e){return Object(O.jsx)("div",{className:"editor-size-option",role:"button",tabIndex:0,onClick:m,"aria-hidden":"true",children:g(e)},e)}))})]})}var te="#ffcc00bb";function ne(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:te;e.strokeStyle=n,e.lineCap="round",e.lineJoin="round",t.forEach((function(t){(null===t||void 0===t?void 0:t.pts.length)&&t.size&&(e.lineWidth=t.size,e.beginPath(),e.moveTo(t.pts[0].x,t.pts[0].y),t.pts.forEach((function(t){return e.lineTo(t.x,t.y)})),e.stroke())}))}function ae(e){var t=e.nativeEvent;return{x:t.offsetX,y:t.offsetY}}function ce(e){var t=e.file,n=Object(o.d)(D),c=Object(a.useState)(40),i=Object(s.a)(c,2),r=i[0],u=i[1],b=function(e){var t=Object(a.useState)(new Image),n=Object(s.a)(t,1)[0],c=Object(a.useState)(!1),i=Object(s.a)(c,2),r=i[0],o=i[1];return Object(a.useEffect)((function(){return n.onload=function(){o(!0)},o(!1),n.src=URL.createObjectURL(e),function(){n.onload=null}}),[e,n]),[n,r]}(t),h=Object(s.a)(b,2),v=h[0],p=h[1],x=Object(a.useState)([]),g=Object(s.a)(x,2),m=g[0],w=g[1],y=Object(a.useState)(),k=Object(s.a)(y,2),S=k[0],C=k[1],L=Object(a.useState)((function(){return document.createElement("canvas")})),M=Object(s.a)(L,1)[0],N=Object(a.useState)([]),z=Object(s.a)(N,2),E=z[0],I=z[1],Z=Object(a.useState)([]),H=Object(s.a)(Z,2),T=H[0],V=H[1],A=Object(a.useState)({x:-1,y:-1}),B=Object(s.a)(A,2),G=B[0],K=G.x,_=G.y,Y=B[1],X=Object(a.useState)(!1),q=Object(s.a)(X,2),te=q[0],ce=q[1],ie=Object(a.useState)(!1),re=Object(s.a)(ie,2),oe=re[0],se=re[1],le=Object(a.useState)(!1),ue=Object(s.a)(le,2),de=ue[0],je=ue[1],be=Object(a.useState)(!1),he=Object(s.a)(be,2),fe=he[0],Oe=he[1],ve=Object(a.useState)(1),pe=Object(s.a)(ve,2),xe=pe[0],ge=pe[1],me=Object(a.useState)(!1),we=Object(s.a)(me,2),ye=we[0],ke=we[1],Se=Object(a.useState)(1),Ce=Object(s.a)(Se,2),Le=Ce[0],Me=Ce[1],Ne=Object(a.useState)(1080),ze=Object(s.a)(Ne,2),Ee=ze[0],Ie=ze[1],De=Object(W.a)(),Re=Object(a.useRef)(),Ze=Object(a.useState)(!1),He=Object(s.a)(Ze,2),Te=He[0],Ve=He[1],Ae=Object(a.useState)(!1),Pe=Object(s.a)(Ae,2),We=Pe[0],Ue=Pe[1],Be=Object(a.useState)(!1),Fe=Object(s.a)(Be,2),Ge=Fe[0],Je=Fe[1],Ke=Object(a.useState)(0),_e=Object(s.a)(Ke,2),Ye=_e[0],Xe=_e[1],$e=Object(a.useCallback)((function(e,t){S&&(S.clearRect(0,0,S.canvas.width,S.canvas.height),S.drawImage(e,0,0,v.naturalWidth,v.naturalHeight),ne(S,t))}),[S,v]),Qe=function(e){if(!(null===S||void 0===S?void 0:S.canvas.width)||!(null===S||void 0===S?void 0:S.canvas.height))throw new Error("canvas has invalid size");M.width=null===S||void 0===S?void 0:S.canvas.width,M.height=null===S||void 0===S?void 0:S.canvas.height;var t=M.getContext("2d");if(!t)throw new Error("could not retrieve mask canvas");e.forEach((function(e){ne(t,e,"white")}))},qe=function(){var e=Object(j.a)(d.a.mark((function e(){var a,c,i,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(et()){e.next=2;break}return e.abrupt("return");case 2:return a=[].concat(Object(R.a)(E),[T]),I(a),V([]),Ue(!1),Oe(!0),Qe(a),e.prev=8,e.next=11,J(t,M.toDataURL(),n,Ee.toString());case 11:if(c=e.sent){e.next=14;break}throw new Error("empty response");case 14:return i=new Image,e.next=17,F(i,c);case 17:r=[].concat(Object(R.a)(m),[i]),w(r),$e(i,[]),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(8),alert(e.t0.message?e.t0.message:e.t0.toString());case 25:Oe(!1);case 26:case"end":return e.stop()}}),e,null,[[8,22]])})));return function(){return e.apply(this,arguments)}}(),et=function(){return 0!==T.length},tt=function(){return 0!==m.length},nt=Object(a.useCallback)((function(e){0===m.length?$e(v,e):$e(m[m.length-1],e)}),[v,m,$e]),at=function(e){return"Control"===e.key||"Meta"===e.key};Object(U.a)(at,(function(){Ge&&(fe||(Je(!1),n.runInpaintingManually||qe()))}),{event:"keyup"},[fe,Ge,et]),Object(U.a)(at,(function(){fe||Je(!0)}),{event:"keydown"},[fe]),Object(a.useEffect)((function(){if(p){var e=De.width/v.naturalWidth,t=(De.height-200)/v.naturalHeight,n=1;(e<1||t<1)&&(n=Math.min(e,t)),Me(n),ge(n);var a,c=Math.max(v.width,v.height);if(Ie(c),(null===S||void 0===S?void 0:S.canvas)&&(S.canvas.width=v.naturalWidth,S.canvas.height=v.naturalHeight,nt([])),!Te)null===(a=Re.current)||void 0===a||a.centerView(n,1),Ve(!0)}}),[null===S||void 0===S?void 0:S.canvas,Re,v,p,De,Te]);var ct=Object(a.useCallback)((function(){if(Le&&v&&De){var e=Re.current;if(!e)throw new Error("no viewport");var t=(De.width-v.width*Le)/2,n=(De.height-v.height*Le)/2;e.setTransform(t,n,Le,200,"easeOutQuad"),e.state.scale=Le,ge(Le),ke(!1)}}),[Re,Le,v,De]);Object(a.useEffect)((function(){return window.addEventListener("resize",(function(){ct()})),function(){window.removeEventListener("resize",(function(){ct()}))}}),[De,ct]);Object(U.a)("Escape",(function(){fe||(We||Ge?(Ue(!1),V([]),nt([])):ct())}),{event:"keydown"},[We,fe,Ge,ct,nt]);var it=Object(a.useCallback)((function(){if(0!==T.length){var e=T.slice(0,T.length-1);V(e),nt(e)}}),[T,nt]),rt=Object(a.useCallback)((function(){if(m.length){var e=E.slice(0,E.length-1);I(e),V([]),Ue(!1);var t=m.slice(0,m.length-1);w(t),0===t.length?$e(v,[]):$e(t[t.length-1],[])}}),[$e,m,E,v]),ot=function(){n.runInpaintingManually&&0!==T.length?it():rt()};Object(U.a)((function(e){var t=(e.metaKey||e.ctrlKey)&&"z"===e.key;return"Tab"===e.key&&e.preventDefault(),!!t&&(e.preventDefault(),!0)}),ot,void 0,[it,rt]);Object(l.a)("Tab",(function(e){null===e||void 0===e||e.preventDefault(),null===e||void 0===e||e.stopPropagation(),tt()&&je((function(){return window.setTimeout((function(){Xe(100)}),10),!0}))}),(function(e){null===e||void 0===e||e.preventDefault(),null===e||void 0===e||e.stopPropagation(),tt()&&(Xe(0),window.setTimeout((function(){je(!1)}),350))}));var st=function(e){e===te||oe||ce(e)},lt=Object(a.useCallback)((function(){return oe?"grab":te?"none":void 0}),[te,oe]);Object(l.a)("[",(function(){u((function(e){return e>10?e-10:e<=10&&e>0?e-5:e}))})),Object(l.a)("]",(function(){u((function(e){return e+10}))})),Object(l.a)(" ",(function(e){null===e||void 0===e||e.preventDefault(),null===e||void 0===e||e.stopPropagation(),ce(!1),se(!0)}),(function(e){null===e||void 0===e||e.preventDefault(),null===e||void 0===e||e.stopPropagation(),ce(!0),se(!1)}));return Object(O.jsxs)("div",{className:"editor-container","aria-hidden":"true",onMouseMove:function(e){var t=e.nativeEvent;Y({x:t.pageX,y:t.pageY})},onMouseUp:function(){oe||v.src&&(null===S||void 0===S?void 0:S.canvas)&&(fe||We&&(Ge||n.runInpaintingManually?Ue(!1):qe()))},children:[Object(O.jsx)(P.b,{ref:function(e){e&&(Re.current=e)},panning:{disabled:!oe,velocityDisabled:!0},wheel:{step:.05},centerZoomedOut:!0,alignmentAnimation:{disabled:!0},limitToBounds:!1,doubleClick:{disabled:!0},initialScale:Le,minScale:Le,onPanning:function(e){ye||ke(!0)},onZoom:function(e){ge(e.state.scale)},children:Object(O.jsx)(P.a,{contentClass:fe?"editor-canvas-loading":"",contentStyle:{visibility:Te?"visible":"hidden"},children:Object(O.jsxs)("div",{className:"editor-canvas-container",children:[Object(O.jsx)("canvas",{className:"editor-canvas",style:{cursor:lt(),clipPath:"inset(0 ".concat(Ye,"% 0 0)"),transition:"clip-path 350ms ease-in-out"},onContextMenu:function(e){e.preventDefault()},onMouseOver:function(){return st(!0)},onFocus:function(){return st(!0)},onMouseLeave:function(){return st(!1)},onMouseDown:function(e){if(!oe&&(v.src&&(null===S||void 0===S?void 0:S.canvas)&&!fe)){Ue(!0);var t=[];(Ge||n.runInpaintingManually)&&(t=Object(R.a)(T)),t.push({size:r,pts:[ae(e)]}),V(t),nt(t)}},onMouseMove:function(e){if(!oe&&We&&0!==T.length){var t=Object(R.a)(T);t[t.length-1].pts.push(ae(e)),V(t),nt(t)}},ref:function(e){if(e&&!S){var t=e.getContext("2d");t&&C(t)}}}),Object(O.jsxs)("div",{className:"original-image-container",style:{width:"".concat(v.naturalWidth,"px"),height:"".concat(v.naturalHeight,"px")},children:[de&&Object(O.jsx)("div",{className:"editor-slider",style:{marginRight:"".concat(Ye,"%")}}),Object(O.jsx)("img",{className:"original-image",src:v.src,alt:"original",style:{width:"".concat(v.naturalWidth,"px"),height:"".concat(v.naturalHeight,"px")}})]})]})})}),te&&!fe&&!oe&&Object(O.jsx)("div",{className:"brush-shape",style:function(){var e=function(){var e,t,n=Le;return void 0!==(null===(e=Re.current)||void 0===e?void 0:e.state.scale)&&(n=null===(t=Re.current)||void 0===t?void 0:t.state.scale),n}();return{width:"".concat(r*e,"px"),height:"".concat(r*e,"px"),left:"".concat(K,"px"),top:"".concat(_,"px"),transform:"translate(-50%, -50%)"}}()}),Object(O.jsxs)("div",{className:"editor-toolkit-panel",children:[Object(O.jsx)(ee,{onChange:function(e){Ie(e)},originalWidth:v.naturalWidth,originalHeight:v.naturalHeight}),Object(O.jsx)(Q,{label:"Brush",min:10,max:150,value:r,onChange:u}),Object(O.jsxs)("div",{className:"editor-toolkit-btns",children:[Object(O.jsx)($,{icon:Object(O.jsx)(f.b,{}),disabled:xe===Le&&!1===ye,onClick:ct}),Object(O.jsx)($,{icon:Object(O.jsx)("svg",{width:"19",height:"9",viewBox:"0 0 19 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(O.jsx)("path",{d:"M2 1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1H2ZM1 8H0V9H1V8ZM8 9C8.55228 9 9 8.55229 9 8C9 7.44771 8.55228 7 8 7V9ZM16.5963 7.42809C16.8327 7.92721 17.429 8.14016 17.9281 7.90374C18.4272 7.66731 18.6402 7.07103 18.4037 6.57191L16.5963 7.42809ZM16.9468 5.83205L17.8505 5.40396L16.9468 5.83205ZM0 1V8H2V1H0ZM1 9H8V7H1V9ZM1.66896 8.74329L6.66896 4.24329L5.33104 2.75671L0.331035 7.25671L1.66896 8.74329ZM16.043 6.26014L16.5963 7.42809L18.4037 6.57191L17.8505 5.40396L16.043 6.26014ZM6.65079 4.25926C9.67554 1.66661 14.3376 2.65979 16.043 6.26014L17.8505 5.40396C15.5805 0.61182 9.37523 -0.710131 5.34921 2.74074L6.65079 4.25926Z",fill:"currentColor"})}),onClick:ot,disabled:function(){if(m.length>0)return!1;if(n.runInpaintingManually){if(0===T.length)return!0}else if(0===m.length)return!0;return!1}()}),Object(O.jsx)($,{icon:Object(O.jsx)(f.h,{}),className:de?"eyeicon-active":"",onDown:function(e){e.preventDefault(),je((function(){return window.setTimeout((function(){Xe(100)}),10),!0}))},onUp:function(){Xe(0),window.setTimeout((function(){je(!1)}),350)},disabled:0===m.length}),Object(O.jsx)($,{icon:Object(O.jsx)(f.f,{}),disabled:!m.length,onClick:function(){var e=t.name.replace(/(\.[\w\d_-]+)$/i,"_cleanup$1");!function(e,t){var n=document.createElement("a");n.href=e,n.download=t,n.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window})),setTimeout((function(){n.remove()}),100)}(m[m.length-1].currentSrc,e)}}),n.runInpaintingManually&&Object(O.jsx)($,{icon:Object(O.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(O.jsx)("path",{d:"M2 13L1.34921 12.2407C1.16773 12.3963 1.04797 12.6117 1.01163 12.8479L2 13ZM22.5 4L23.49 4.14142C23.5309 3.85444 23.4454 3.5638 23.2555 3.3448C23.0655 3.1258 22.7899 3 22.5 3V4ZM12.5 4V3C12.2613 3 12.0305 3.08539 11.8492 3.24074L12.5 4ZM1 19.5L0.0116283 19.3479C-0.0327373 19.6363 0.051055 19.9297 0.241035 20.1511C0.431014 20.3726 0.708231 20.5 1 20.5V19.5ZM11.5 19.5V20.5C11.7373 20.5 11.9668 20.4156 12.1476 20.2619L11.5 19.5ZM21.5 11L22.1476 11.7619C22.3337 11.6038 22.4554 11.3831 22.49 11.1414L21.5 11ZM2 14H12.5V12H2V14ZM13.169 13.7433L23.169 4.74329L21.831 3.25671L11.831 12.2567L13.169 13.7433ZM22.5 3H12.5V5H22.5V3ZM11.8492 3.24074L1.34921 12.2407L2.65079 13.7593L13.1508 4.75926L11.8492 3.24074ZM1.01163 12.8479L0.0116283 19.3479L1.98837 19.6521L2.98837 13.1521L1.01163 12.8479ZM1 20.5H11.5V18.5H1V20.5ZM12.4884 19.6521L13.4884 13.1521L11.5116 12.8479L10.5116 19.3479L12.4884 19.6521ZM21.51 3.85858L20.51 10.8586L22.49 11.1414L23.49 4.14142L21.51 3.85858ZM20.8524 10.2381L10.8524 18.7381L12.1476 20.2619L22.1476 11.7619L20.8524 10.2381Z",fill:"currentColor"})}),disabled:!et()||fe,onClick:function(){!fe&&et()&&qe()}})]})]})]})}function ie(e){var t=e.show,n=e.children,c=e.onClose,i=e.className,r=e.title,o=Object(a.useRef)(null);return Object(h.a)(o,(function(){t&&(null===c||void 0===c||c())})),Object(l.a)("Escape",(function(e){t&&(null===c||void 0===c||c())})),Object(O.jsx)("div",{className:"modal-mask",style:{visibility:!0===t?"visible":"hidden"},children:Object(O.jsxs)("div",{ref:o,className:"modal ".concat(i),children:[Object(O.jsxs)("div",{className:"modal-header",children:[Object(O.jsx)("h2",{children:r}),Object(O.jsx)($,{icon:Object(O.jsx)(f.k,{}),onClick:c})]}),n]})})}function re(e){var t=e.children,n=e.content;return Object(O.jsxs)("div",{className:"shortcut-option",children:[Object(O.jsx)("div",{className:"shortcut-description",children:n}),Object(O.jsx)("div",{className:"shortcut-key",children:t})]})}function oe(){var e=Object(o.c)(E),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(O.jsx)(ie,{onClose:function(){a(!1)},title:"Hotkeys",className:"modal-shortcuts",show:n,children:Object(O.jsxs)("div",{className:"shortcut-options",children:[Object(O.jsx)(re,{content:"Enable multi-stroke mask drawing",children:Object(O.jsx)("p",{children:"Hold Cmd/Ctrl"})}),Object(O.jsx)(re,{content:"Undo inpainting",children:Object(O.jsx)("p",{children:"Cmd/Ctrl + Z"})}),Object(O.jsx)(re,{content:"Pan",children:Object(O.jsx)("p",{children:"Space & Drag"})}),Object(O.jsx)(re,{content:"View original image",children:Object(O.jsx)("p",{children:"Hold Tab"})}),Object(O.jsx)(re,{content:"Reset zoom/pan",children:Object(O.jsx)("p",{children:"Esc"})}),Object(O.jsx)(re,{content:"Cancel mask drawing",children:Object(O.jsx)("p",{children:"Esc"})}),Object(O.jsx)(re,{content:"Decrease Brush Size",children:Object(O.jsx)("p",{children:"["})}),Object(O.jsx)(re,{content:"Increase Brush Size",children:Object(O.jsx)("p",{children:"]"})}),Object(O.jsx)(re,{content:"Toggle Dark Mode",children:Object(O.jsx)("p",{children:"Shift + D"})}),Object(O.jsx)(re,{content:"Toggle Hotkeys Panel",children:Object(O.jsx)("p",{children:"H"})})]})})}var se=n(30),le=["className"],ue=["className"],de=c.a.forwardRef((function(e,t){var n=e.className,a=Object(x.a)(e,le);return Object(O.jsx)(se.a,Object(b.a)(Object(b.a)({},a),{},{ref:t,className:"switch-root ".concat(n)}))})),je=c.a.forwardRef((function(e,t){var n=e.className,a=Object(x.a)(e,ue);return Object(O.jsx)(se.b,Object(b.a)(Object(b.a)({},a),{},{ref:t,className:"switch-thumb ".concat(n)}))})),be=function(){var e=Object(o.c)(D),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(O.jsx)(w,{title:"Run inpainting manually",input:Object(O.jsx)(de,{checked:n.runInpaintingManually,onCheckedChange:function(e){a((function(t){return Object(b.a)(Object(b.a)({},t),{},{runInpaintingManually:e})}))},children:Object(O.jsx)(je,{})})})};function he(e){var t=e.onClose,n=Object(o.c)(D),a=Object(s.a)(n,2),c=a[0],i=a[1];return Object(O.jsxs)(ie,{onClose:function(){i((function(e){return Object(b.a)(Object(b.a)({},e),{},{show:!1})})),t()},title:"Settings",className:"modal-setting",show:c.show,children:[Object(O.jsx)(be,{}),Object(O.jsx)(M,{}),Object(O.jsx)(C,{})]})}var fe=n(23),Oe=["state","desc"],ve=function(){return Object(O.jsx)("span",{className:"loading-icon",children:Object(O.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(O.jsx)("line",{x1:"12",y1:"2",x2:"12",y2:"6"}),Object(O.jsx)("line",{x1:"12",y1:"18",x2:"12",y2:"22"}),Object(O.jsx)("line",{x1:"4.93",y1:"4.93",x2:"7.76",y2:"7.76"}),Object(O.jsx)("line",{x1:"16.24",y1:"16.24",x2:"19.07",y2:"19.07"}),Object(O.jsx)("line",{x1:"2",y1:"12",x2:"6",y2:"12"}),Object(O.jsx)("line",{x1:"18",y1:"12",x2:"22",y2:"12"}),Object(O.jsx)("line",{x1:"4.93",y1:"19.07",x2:"7.76",y2:"16.24"}),Object(O.jsx)("line",{x1:"16.24",y1:"7.76",x2:"19.07",y2:"4.93"})]})})},pe=a.forwardRef((function(e,t){var n=e.state,a=e.desc,c=Object(x.a)(e,Oe);return Object(O.jsxs)(fe.b,{children:[Object(O.jsxs)(fe.c,Object(b.a)(Object(b.a)({},c),{},{ref:t,className:"toast-root ".concat(n),children:[Object(O.jsx)("div",{className:"toast-icon",children:function(){switch(n){case"error":return Object(O.jsx)(f.g,{className:"error-icon"});case"success":return Object(O.jsx)(f.c,{className:"success-icon"});case"loading":return Object(O.jsx)(ve,{});default:return Object(O.jsx)(O.Fragment,{})}}()}),Object(O.jsx)(fe.a,{className:"toast-desc",children:a})]})),Object(O.jsx)(fe.d,{className:"toast-viewpoint"})]})}));pe.defaultProps={desc:"",state:"loading"};var xe=pe,ge=function(e){var t=e.file,n=Object(o.c)(D),c=Object(s.a)(n,2),i=c[0],r=c[1],l=Object(o.c)(z),u=Object(s.a)(l,2),h=u[0],f=u[1],v=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n,a,c,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y().then((function(e){return e.text()}));case 2:if((t=e.sent)!==i.model){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,(s=i.model,fetch("".concat(G,"/model_downloaded/").concat(s),{method:"GET"})).then((function(e){return e.text()}));case 7:n=e.sent,a=i.model,c="Switching to ".concat(a," model"),o=3e3,"False"===n&&(c="Downloading ".concat(a," model, this may take a while"),o=9999999999),f({open:!0,desc:c,state:"loading",duration:o}),_(a).then((function(e){if(!e.ok)throw new Error("Server error");f({open:!0,desc:"Switch to ".concat(a," model success"),state:"success",duration:3e3})})).catch((function(){f({open:!0,desc:"Switch to ".concat(a," model failed"),state:"error",duration:3e3}),r((function(e){return Object(b.a)(Object(b.a)({},e),{},{model:t})}))}));case 14:case"end":return e.stop()}var s}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){Y().then((function(e){return e.text()})).then((function(e){r((function(t){return Object(b.a)(Object(b.a)({},t),{},{model:e})}))}))}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(ce,{file:t}),Object(O.jsx)(he,{onClose:v}),Object(O.jsx)(oe,{}),Object(O.jsx)(xe,Object(b.a)(Object(b.a)({},h),{},{onOpenChange:function(e){f((function(t){return Object(b.a)(Object(b.a)({},t),{},{open:e})}))}}))]})},me=function(){var e=Object(o.c)(E),t=Object(s.a)(e,2),n=t[0],a=t[1],c=function(){a((function(e){return!e}))};return Object(l.a)("h",(function(e){null===e||void 0===e||e.preventDefault(),c()})),Object(O.jsx)("div",{className:"shortcuts",children:Object(O.jsx)($,{onClick:c,disabled:n,style:{border:0},icon:Object(O.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:"28",height:"28",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 16 16",children:[Object(O.jsx)("rect",{x:"0",y:"0",width:"16",height:"16",fill:"none",stroke:"none"}),Object(O.jsxs)("g",{fill:"currentColor",children:[Object(O.jsx)("path",{d:"M14 5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12zM2 4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2z"}),Object(O.jsx)("path",{d:"M13 10.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm0-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-5 0A.25.25 0 0 1 8.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 8 8.75v-.5zm2 0a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-.5zm1 2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-5-2A.25.25 0 0 1 6.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 6 8.75v-.5zm-2 0A.25.25 0 0 1 4.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 4 8.75v-.5zm-2 0A.25.25 0 0 1 2.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 2 8.75v-.5zm11-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-2 0a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-2 0A.25.25 0 0 1 9.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 9 6.75v-.5zm-2 0A.25.25 0 0 1 7.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 7 6.75v-.5zm-2 0A.25.25 0 0 1 5.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 5 6.75v-.5zm-3 0A.25.25 0 0 1 2.25 6h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5A.25.25 0 0 1 2 6.75v-.5zm0 4a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm2 0a.25.25 0 0 1 .25-.25h5.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-5.5a.25.25 0 0 1-.25-.25v-.5z"})]})]})})})},we=function(){var e=Object(o.c)(D),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(O.jsx)("div",{children:Object(O.jsx)($,{onClick:function(){a(Object(b.a)(Object(b.a)({},n),{},{show:!n.show}))},style:{border:0},icon:Object(O.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",role:"img",width:"28",height:"28",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:[Object(O.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),Object(O.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})})})},ye=function(){var e=Object(o.c)(N),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Z();return Object(O.jsxs)("header",{children:[Object(O.jsx)("div",{style:{visibility:n?"visible":"hidden"},children:Object(O.jsx)($,{icon:Object(O.jsx)(f.a,{}),onClick:function(){a(void 0)},style:{border:0},children:"desktop"===c?"Start New":void 0})}),Object(O.jsxs)("div",{className:"header-icons-wrapper",children:[Object(O.jsxs)("div",{className:"header-icons",style:{visibility:n?"visible":"hidden"},children:[Object(O.jsx)(we,{}),Object(O.jsx)(me,{})]}),Object(O.jsx)(A,{})]})]})};!function(){function e(){return e=Object(j.a)(d.a.mark((function e(){var t,n,a=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e.next=3,fetch(t,{method:"GET",cache:"no-cache"});case 3:return n=e.sent,e.abrupt("return",n.json());case 5:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}var t=function(){(function(){return e.apply(this,arguments)})(document.location+"/flaskwebgui-keep-server-alive").then((function(e){return e}))};document.addEventListener("DOMContentLoaded",(function(){t(),setInterval(t,3e3)}))}();var ke=function(){var e=Object(o.c)(N),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(o.c)(V),r=Object(s.a)(i,2),u=r[0],b=r[1],h=function(){var e=Object(a.useState)(),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(a.useCallback)((function(){var e=new Headers;e.append("pragma","no-cache"),e.append("cache-control","no-cache"),fetch("/inputimage",{headers:e}).then(function(){var e=Object(j.a)(d.a.mark((function e(t){var n,a,i,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null===(n=t.headers.get("content-disposition"))||void 0===n?void 0:n.split("filename=")[1].split(";")[0],e.next=3,t.blob();case 3:(i=e.sent)&&i.type.startsWith("image")&&(r=new File([i],void 0!==a?a:"inputImage"),c(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[c]);return Object(a.useEffect)((function(){i()}),[i]),n}();return Object(a.useEffect)((function(){c(h)}),[h,c]),Object(l.a)("D",(function(e){null===e||void 0===e||e.preventDefault(),b("light"===u?"dark":"light")})),Object(O.jsxs)("div",{className:"lama-cleaner","data-theme":u,children:[Object(O.jsx)(ye,{}),n?Object(O.jsx)(ge,{file:n}):Object(O.jsx)(T,{})]})};r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(o.a,{children:Object(O.jsx)(ke,{})})}),document.getElementById("root"))}},[[39,1,2]]]);