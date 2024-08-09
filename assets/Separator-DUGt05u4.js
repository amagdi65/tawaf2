import{r as I,f as P,j as n,I as de,c as L,a as ue,b as S,d as Z,u as _,e as ge,g as W,w as R,A as xe,h as pe,i as he,o as ee,k as O,l as Ie,n as G,B as w,S as E,p as Y,_ as me,q as X,s as fe}from"./index-C0RYU_wp.js";function be(t){const e=Object.assign({},t);for(let o in e)e[o]===void 0&&delete e[o];return e}function z(t){const{viewBox:e="0 0 24 24",d:o,displayName:a,defaultProps:s={}}=t,i=I.Children.toArray(t.path),r=P((d,g)=>n.jsx(de,{ref:g,viewBox:e,...s,...d,children:i.length?i:n.jsx("path",{fill:"currentColor",d:o})}));return r.displayName=a,r}var[Ce,K]=L({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),[ve,te]=L({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),[ye,at,ke,Ae]=ue(),ne=P(function(e,o){const{getButtonProps:a}=te(),s=a(e,o),r={display:"flex",alignItems:"center",width:"100%",outline:0,...K().button};return n.jsx(S.button,{...s,className:Z("chakra-accordion__button",e.className),__css:r})});ne.displayName="AccordionButton";function je(t){const{value:e,defaultValue:o,onChange:a,shouldUpdate:s=(h,x)=>h!==x}=t,i=_(a),r=_(s),[d,g]=I.useState(o),l=e!==void 0,u=l?e:d,p=_(h=>{const c=typeof h=="function"?h(u):h;r(u,c)&&(l||g(c),i(c))},[l,i,u,r]);return[u,p]}function we(t){const{onChange:e,defaultIndex:o,index:a,allowMultiple:s,allowToggle:i,...r}=t;Ne(t),De(t);const d=ke(),[g,l]=I.useState(-1);I.useEffect(()=>()=>{l(-1)},[]);const[u,p]=je({value:a,defaultValue(){return s?o??[]:o??-1},onChange:e});return{index:u,setIndex:p,htmlProps:r,getAccordionItemProps:x=>{let c=!1;return x!==null&&(c=Array.isArray(u)?u.includes(x):u===x),{isOpen:c,onChange:m=>{if(x!==null)if(s&&Array.isArray(u)){const v=m?u.concat(x):u.filter(C=>C!==x);p(v)}else m?p(x):i&&p(-1)}}},focusedIndex:g,setFocusedIndex:l,descendants:d}}var[Pe,oe]=L({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"});function Se(t){const{isDisabled:e,isFocusable:o,id:a,...s}=t,{getAccordionItemProps:i,setFocusedIndex:r}=oe(),d=I.useRef(null),g=I.useId(),l=a??g,u=`accordion-button-${l}`,p=`accordion-panel-${l}`;Be(t);const{register:h,index:x,descendants:c}=Ae({disabled:e&&!o}),{isOpen:f,onChange:m}=i(x===-1?null:x);Me({isOpen:f,isDisabled:e});const v=()=>{m==null||m(!0)},C=()=>{m==null||m(!1)},A=I.useCallback(()=>{m==null||m(!f),r(x)},[x,r,f,m]),y=I.useCallback(T=>{const B={ArrowDown:()=>{const k=c.nextEnabled(x);k==null||k.node.focus()},ArrowUp:()=>{const k=c.prevEnabled(x);k==null||k.node.focus()},Home:()=>{const k=c.firstEnabled();k==null||k.node.focus()},End:()=>{const k=c.lastEnabled();k==null||k.node.focus()}}[T.key];B&&(T.preventDefault(),B(T))},[c,x]),j=I.useCallback(()=>{r(x)},[r,x]),b=I.useCallback(function(D={},B=null){return{...D,type:"button",ref:ge(h,d,B),id:u,disabled:!!e,"aria-expanded":!!f,"aria-controls":p,onClick:W(D.onClick,A),onFocus:W(D.onFocus,j),onKeyDown:W(D.onKeyDown,y)}},[u,e,f,A,j,y,p,h]),N=I.useCallback(function(D={},B=null){return{...D,ref:B,role:"region",id:p,"aria-labelledby":u,hidden:!f}},[u,f,p]);return{isOpen:f,isDisabled:e,isFocusable:o,onOpen:v,onClose:C,getButtonProps:b,getPanelProps:N,htmlProps:s}}function Ne(t){const e=t.index||t.defaultIndex,o=e!=null&&!Array.isArray(e)&&t.allowMultiple;R({condition:!!o,message:`If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof e},`})}function De(t){R({condition:!!(t.allowMultiple&&t.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"})}function Be(t){R({condition:!!(t.isFocusable&&!t.isDisabled),message:`Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `})}function Me(t){R({condition:t.isOpen&&!!t.isDisabled,message:"Cannot open a disabled accordion item"})}var se=P(function(e,o){const{children:a,className:s}=e,{htmlProps:i,...r}=Se(e),g={...K().container,overflowAnchor:"none"},l=I.useMemo(()=>r,[r]);return n.jsx(ve,{value:l,children:n.jsx(S.div,{ref:o,...i,className:Z("chakra-accordion__item",s),__css:g,children:typeof a=="function"?a({isExpanded:!!r.isOpen,isDisabled:!!r.isDisabled}):a})})});se.displayName="AccordionItem";var H={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]},U={enter:(t,e)=>({...t,delay:typeof e=="number"?e:e==null?void 0:e.enter}),exit:(t,e)=>({...t,delay:typeof e=="number"?e:e==null?void 0:e.exit})},Ze=t=>t!=null&&parseInt(t.toString(),10)>0,Q={exit:{height:{duration:.2,ease:H.ease},opacity:{duration:.3,ease:H.ease}},enter:{height:{duration:.3,ease:H.ease},opacity:{duration:.4,ease:H.ease}}},ze={exit:({animateOpacity:t,startingHeight:e,transition:o,transitionEnd:a,delay:s})=>{var i;return{...t&&{opacity:Ze(e)?1:0},height:e,transitionEnd:a==null?void 0:a.exit,transition:(i=o==null?void 0:o.exit)!=null?i:U.exit(Q.exit,s)}},enter:({animateOpacity:t,endingHeight:e,transition:o,transitionEnd:a,delay:s})=>{var i;return{...t&&{opacity:1},height:e,transitionEnd:a==null?void 0:a.enter,transition:(i=o==null?void 0:o.enter)!=null?i:U.enter(Q.enter,s)}}},ae=I.forwardRef((t,e)=>{const{in:o,unmountOnExit:a,animateOpacity:s=!0,startingHeight:i=0,endingHeight:r="auto",style:d,className:g,transition:l,transitionEnd:u,...p}=t,[h,x]=I.useState(!1);I.useEffect(()=>{const C=setTimeout(()=>{x(!0)});return()=>clearTimeout(C)},[]),R({condition:Number(i)>0&&!!a,message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});const c=parseFloat(i.toString())>0,f={startingHeight:i,endingHeight:r,animateOpacity:s,transition:h?l:{enter:{duration:0}},transitionEnd:{enter:u==null?void 0:u.enter,exit:a?u==null?void 0:u.exit:{...u==null?void 0:u.exit,display:c?"block":"none"}}},m=a?o:!0,v=o||a?"enter":"exit";return n.jsx(xe,{initial:!1,custom:f,children:m&&n.jsx(pe.div,{ref:e,...p,className:Z("chakra-collapse",g),style:{overflow:"hidden",display:"block",...d},custom:f,variants:ze,initial:a?"exit":!1,animate:v,exit:"exit"})})});ae.displayName="Collapse";var ie=P(function(e,o){const{className:a,motionProps:s,...i}=e,{reduceMotion:r}=oe(),{getPanelProps:d,isOpen:g}=te(),l=d(i,o),u=Z("chakra-accordion__panel",a),p=K();r||delete l.hidden;const h=n.jsx(S.div,{...l,__css:p.panel,className:u});return r?h:n.jsx(ae,{in:g,...s,children:h})});ie.displayName="AccordionPanel";var Te=P(function({children:e,reduceMotion:o,...a},s){const i=he("Accordion",a),r=ee(a),{htmlProps:d,descendants:g,...l}=we(r),u=I.useMemo(()=>({...l,reduceMotion:!!o}),[l,o]);return n.jsx(ye,{value:g,children:n.jsx(Pe,{value:u,children:n.jsx(Ce,{value:i,children:n.jsx(S.div,{ref:s,...d,className:Z("chakra-accordion",a.className),__css:i.root,children:e})})})})});Te.displayName="Accordion";var M=P((t,e)=>{const{icon:o,children:a,isRound:s,"aria-label":i,...r}=t,d=o||a,g=I.isValidElement(d)?I.cloneElement(d,{"aria-hidden":!0,focusable:!1}):null;return n.jsx(O,{padding:"0",borderRadius:s?"full":void 0,ref:e,"aria-label":i,...r,children:g})});M.displayName="IconButton";var F=P(function(e,o){const a=Ie("Text",e),{className:s,align:i,decoration:r,casing:d,...g}=ee(e),l=be({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return n.jsx(S.p,{ref:o,className:Z("chakra-text",e.className),...l,...g,__css:a})});F.displayName="Text";var re=P(function(e,o){const{direction:a,align:s,justify:i,wrap:r,basis:d,grow:g,shrink:l,...u}=e,p={display:"flex",flexDirection:a,alignItems:s,justifyContent:i,flexWrap:r,flexBasis:d,flexGrow:g,flexShrink:l};return n.jsx(S.div,{ref:o,__css:p,...u})});re.displayName="Flex";var V=t=>n.jsx(S.circle,{cx:50,cy:50,r:42,fill:"transparent",...t});V.displayName="Circle";function Re(t,e,o){return(t-e)*100/(o-e)}var He=G({"0%":{strokeDasharray:"1, 400",strokeDashoffset:"0"},"50%":{strokeDasharray:"400, 400",strokeDashoffset:"-100"},"100%":{strokeDasharray:"400, 400",strokeDashoffset:"-260"}}),Ee=G({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}});G({"0%":{left:"-40%"},"100%":{left:"100%"}});G({from:{backgroundPosition:"1rem 0"},to:{backgroundPosition:"0 0"}});function Fe(t){const{value:e=0,min:o,max:a,valueText:s,getValueText:i,isIndeterminate:r,role:d="progressbar"}=t,g=Re(e,o,a);return{bind:{"data-indeterminate":r?"":void 0,"aria-valuemax":a,"aria-valuemin":o,"aria-valuenow":r?void 0:e,"aria-valuetext":(()=>{if(e!=null)return typeof i=="function"?i(e,g):s})(),role:d},percent:g,value:e}}var le=t=>{const{size:e,isIndeterminate:o,...a}=t;return n.jsx(S.svg,{viewBox:"0 0 100 100",__css:{width:e,height:e,animation:o?`${Ee} 2s linear infinite`:void 0},...a})};le.displayName="Shape";var ce=P((t,e)=>{var o;const{size:a="48px",max:s=100,min:i=0,valueText:r,getValueText:d,value:g,capIsRound:l,children:u,thickness:p="10px",color:h="#0078d4",trackColor:x="#edebe9",isIndeterminate:c,...f}=t,m=Fe({min:i,max:s,value:g,valueText:r,getValueText:d,isIndeterminate:c}),v=c?void 0:((o=m.percent)!=null?o:0)*2.64,C=v==null?void 0:`${v} ${264-v}`,A=c?{css:{animation:`${He} 1.5s linear infinite`}}:{strokeDashoffset:66,strokeDasharray:C,transitionProperty:"stroke-dasharray, stroke",transitionDuration:"0.6s",transitionTimingFunction:"ease"},y={display:"inline-block",position:"relative",verticalAlign:"middle",fontSize:a};return n.jsxs(S.div,{ref:e,className:"chakra-progress",...m.bind,...f,__css:y,children:[n.jsxs(le,{size:a,isIndeterminate:c,children:[n.jsx(V,{stroke:x,strokeWidth:p,className:"chakra-progress__track"}),n.jsx(V,{stroke:h,strokeWidth:p,className:"chakra-progress__indicator",strokeLinecap:l?"round":void 0,opacity:m.value===0&&!c?0:void 0,...A})]}),u]})});ce.displayName="CircularProgress";var Ge=z({displayName:"RepeatIcon",path:n.jsxs("g",{fill:"currentColor",children:[n.jsx("path",{d:"M10.319,4.936a7.239,7.239,0,0,1,7.1,2.252,1.25,1.25,0,1,0,1.872-1.657A9.737,9.737,0,0,0,9.743,2.5,10.269,10.269,0,0,0,2.378,9.61a.249.249,0,0,1-.271.178l-1.033-.13A.491.491,0,0,0,.6,9.877a.5.5,0,0,0-.019.526l2.476,4.342a.5.5,0,0,0,.373.248.43.43,0,0,0,.062,0,.5.5,0,0,0,.359-.152l3.477-3.593a.5.5,0,0,0-.3-.844L5.15,10.172a.25.25,0,0,1-.2-.333A7.7,7.7,0,0,1,10.319,4.936Z"}),n.jsx("path",{d:"M23.406,14.1a.5.5,0,0,0,.015-.526l-2.5-4.329A.5.5,0,0,0,20.546,9a.489.489,0,0,0-.421.151l-3.456,3.614a.5.5,0,0,0,.3.842l1.848.221a.249.249,0,0,1,.183.117.253.253,0,0,1,.023.216,7.688,7.688,0,0,1-5.369,4.9,7.243,7.243,0,0,1-7.1-2.253,1.25,1.25,0,1,0-1.872,1.656,9.74,9.74,0,0,0,9.549,3.03,10.261,10.261,0,0,0,7.369-7.12.251.251,0,0,1,.27-.179l1.058.127a.422.422,0,0,0,.06,0A.5.5,0,0,0,23.406,14.1Z"})]})}),_e=z({displayName:"MinusIcon",path:n.jsx("g",{fill:"currentColor",children:n.jsx("rect",{height:"4",width:"20",x:"2",y:"10"})})}),We=z({displayName:"ChevronDownIcon",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),Ye=z({d:"M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z",displayName:"AddIcon"}),$=z({d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",displayName:"ArrowBackIcon"}),q=z({d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",displayName:"ArrowForwardIcon"});const Je=({count:t,setCount:e,dir:o,cardTitle:a,mode:s})=>{const i=()=>{t<7&&e(t+1)},r=()=>{t>0&&e(t-1)},d=()=>e(0),g=t/7*100,l={width:["30px","40px","50px"],height:["30px","40px","50px"],fontSize:["15px","20px","25px"]},u={color:"white",bgColor:"#BC9761",_hover:{color:"white",bgColor:"#BC9761"}},p={color:"#BC9761",bgColor:s==="dark"?"#232C35":"#EDEDED",_hover:{bgColor:s==="dark"?"#232C35":"#EDEDED"}},h={color:s==="dark"?"#38414C":"#C9C9C9",bgColor:s==="dark"?"#232C35":"#EDEDED",_hover:{color:s==="dark"?"#38414C":"#C9C9C9",bgColor:s==="dark"?"#232C35":"#EDEDED"},cursor:"not-allowed"};return n.jsxs(w,{padding:"20px",boxShadow:"md",borderRadius:"md",width:"100%",position:"relative",backgroundColor:s==="dark"?"#2C3743":"#f5f5f5",_before:{content:`"${a}"`,bgColor:s==="dark"?"#232C35":"#EBEBEB",position:"absolute",top:{base:"20px",md:"48px"},...o==="ltr"?{left:0}:{right:0},padding:"5px 10px",borderRadius:"5px 0px 0px 5px",fontSize:{base:"md",md:"lg"},fontWeight:"bold",textAlign:"center",color:s==="dark"?"white":"#1F2A37"},children:[n.jsx(E,{children:n.jsx(M,{position:"absolute",top:{base:"20px",md:"48px"},...o==="ltr"?{right:"16px"}:{left:"16px"},icon:n.jsx(Ge,{}),"aria-label":"Reset",onClick:d,size:"lg",...t===0?{...h,...l}:{...p,...l}})}),n.jsxs(E,{direction:"row",justifyContent:"center",alignItems:"center",spacing:8,mt:"80px",style:{direction:o},children:[n.jsx(M,{icon:n.jsx(Ye,{}),"aria-label":"Increment",onClick:i,...t===7?{...h,...l}:{...u,...l}}),n.jsxs(w,{position:"relative",display:"inline-flex",fontSize:100,children:[n.jsx(ce,{value:g,thickness:"8px",color:"#BC9761",size:"100%",...s==="dark"&&{trackColor:"#3D4652"}}),n.jsx(w,{position:"absolute",top:"0",left:"0",right:"0",bottom:"0",display:"flex",alignItems:"center",justifyContent:"center",fontSize:{base:"30px",md:"64px"},fontWeight:"bold",color:"#BC9761",children:t})]}),n.jsx(M,{icon:n.jsx(_e,{}),"aria-label":"Decrement",onClick:r,...t===0?{...h,...l}:{...p,...l}})]})]})},Oe="/assets/pause-lYBFIR7O.svg",Ve="/assets/play-7jP7hYoE.svg",Le="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KICA8ZyBpZD0iR3JvdXBfNTg1NzEiIGRhdGEtbmFtZT0iR3JvdXAgNTg1NzEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03OCAtMjkwKSI+CiAgICA8cmVjdCBpZD0iYmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgcng9IjgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc4IDI5MCkiIGZpbGw9IiNlZGVkZWQiLz4KICAgIDx0ZXh0IGlkPSLYuSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA4IDMxOC4yKSIgZmlsbD0iI2JjOTc2MSIgZm9udC1zaXplPSIyMyIgZm9udC1mYW1pbHk9IklCTVBsZXhTYW5zQXJhYmljLU1lZGl1bSwgSUJNIFBsZXggU2FucyBBcmFiaWMiIGZvbnQtd2VpZ2h0PSI1MDAiPjx0c3BhbiB4PSItMTQuMjM3IiB5PSIwIj7YuTwvdHNwYW4+PC90ZXh0PgogIDwvZz4KPC9zdmc+Cg==",Xe="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KICA8ZyBpZD0iR3JvdXBfNTg1NzIiIGRhdGEtbmFtZT0iR3JvdXAgNTg1NzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zOCAtMjkwKSI+CiAgICA8cmVjdCBpZD0iYmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgcng9IjgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM4IDI5MCkiIGZpbGw9IiNlZGVkZWQiLz4KICAgIDx0ZXh0IGlkPSLYuSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjcuMiAzMTkpIiBmaWxsPSIjYmM5NzYxIiBmb250LXNpemU9IjE2IiBmb250LWZhbWlseT0iSUJNUGxleFNhbnNBcmFiaWMtTWVkaXVtLCBJQk0gUGxleCBTYW5zIEFyYWJpYyIgZm9udC13ZWlnaHQ9IjUwMCI+PHRzcGFuIHg9Ii05LjkwNCIgeT0iMCI+2Lk8L3RzcGFuPjwvdGV4dD4KICA8L2c+Cjwvc3ZnPgo=",Ke="/assets/pauseBlack-zUvXjohe.svg",Ue="/assets/playBlack-C_N1KbUN.svg",Qe="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KICA8ZyBpZD0iR3JvdXBfNTg1NzEiIGRhdGEtbmFtZT0iR3JvdXAgNTg1NzEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03OCAtMjkwKSI+CiAgICA8cmVjdCBpZD0iYmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgcng9IjgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc4IDI5MCkiIGZpbGw9IiMyMzJDMzUiLz4KICAgIDx0ZXh0IGlkPSLYuSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA4IDMxOC4yKSIgZmlsbD0iI2JjOTc2MSIgZm9udC1zaXplPSIyMyIgZm9udC1mYW1pbHk9IklCTVBsZXhTYW5zQXJhYmljLU1lZGl1bSwgSUJNIFBsZXggU2FucyBBcmFiaWMiIGZvbnQtd2VpZ2h0PSI1MDAiPjx0c3BhbiB4PSItMTQuMjM3IiB5PSIwIj7YuTwvdHNwYW4+PC90ZXh0PgogIDwvZz4KPC9zdmc+Cg==",$e="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KICA8ZyBpZD0iR3JvdXBfNTg1NzIiIGRhdGEtbmFtZT0iR3JvdXAgNTg1NzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zOCAtMjkwKSI+CiAgICA8cmVjdCBpZD0iYmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgcng9IjgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM4IDI5MCkiIGZpbGw9IiMyMzJDMzUiLz4KICAgIDx0ZXh0IGlkPSLYuSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjcuMiAzMTkpIiBmaWxsPSIjYmM5NzYxIiBmb250LXNpemU9IjE2IiBmb250LWZhbWlseT0iSUJNUGxleFNhbnNBcmFiaWMtTWVkaXVtLCBJQk0gUGxleCBTYW5zIEFyYWJpYyIgZm9udC13ZWlnaHQ9IjUwMCI+PHRzcGFuIHg9Ii05LjkwNCIgeT0iMCI+2Lk8L3RzcGFuPjwvdGV4dD4KICA8L2c+Cjwvc3ZnPgo=",qe=({prayerData:t,lang:e,dir:o,cardTitle:a,mode:s,audioStart:i,audio:r})=>{const[d,g]=I.useState(0),[l,u]=I.useState("md"),[p,h]=I.useState(!0),x=(t==null?void 0:t.length)-1,c=I.useRef(null),[f,m]=I.useState("");I.useEffect(()=>{(async()=>{if(r&&i)try{const N=await me(()=>import(`${r}/${d+i}.wav`),[]);m(N.default)}catch(N){console.error("Error loading audio file:",N)}})()},[d,r,i]),I.useEffect(()=>{c.current&&c.current.load()},[f]);const v=async()=>{if(p)try{await c.current.play(),h(!1)}catch(b){console.error("Error playing audio:",b)}else c.current.pause(),h(!0)},C=b=>u(b),A=b=>{b==="next"&&d<x?g(d+1):b==="prev"&&d>0&&g(d-1),h(!0)},y=b=>{if(b==="playPause")return p?s==="dark"?Ue:Ve:s==="dark"?Ke:Oe;if(b==="fontInc")return s==="dark"?Qe:Le;if(b==="fontDec")return s==="dark"?$e:Xe},j={boxSize:8,color:"#BC9761"};return n.jsxs(w,{padding:"20px",boxShadow:"md",borderRadius:"md",width:"100%",height:"100%",position:"relative",backgroundColor:s==="dark"?"#2C3743":"#f5f5f5",display:"flex",flexDirection:"column",justifyContent:"space-between",_before:{content:`"${a}"`,bgColor:s==="dark"?"#232C35":"#EBEBEB",position:"absolute",top:{base:"20px",md:"48px"},...o==="ltr"?{left:0}:{right:0},padding:"5px 10px",borderRadius:"5px 0 0 5px",fontSize:{base:"11px",md:"lg"},fontWeight:"bold",height:{base:"24px",md:"32px"},textAlign:"center",color:s==="dark"?"white":"#1F2A37"},style:{direction:o},children:[n.jsx("audio",{ref:c,src:f,hidden:!0}),n.jsxs(E,{direction:"row-reverse",mb:3,mt:{base:0,md:5},spacing:2,style:{direction:o},children:[n.jsx(Y,{src:y("fontDec"),alt:"Decrease font size",onClick:()=>C("md"),cursor:"pointer",boxSize:{base:"28px",md:"42px"}}),n.jsx(Y,{src:y("fontInc"),alt:"Increase font size",onClick:()=>C("lg"),cursor:"pointer",boxSize:{base:"28px",md:"42px"}}),r&&n.jsx(Y,{src:y("playPause"),alt:"Toggle pause",onClick:v,cursor:"pointer",boxSize:{base:"28px",md:"42px"}})]}),n.jsx(E,{children:n.jsx(F,{margin:4,textAlign:o==="ltr"?"left":"right",color:s==="dark"?"white":"#1F2A37",fontSize:l,children:t&&t[d][e]})}),n.jsxs(w,{display:"flex",justifyContent:"space-between",alignItems:"center",style:{direction:o},children:[n.jsx(M,{icon:o==="ltr"?n.jsx($,{...j}):n.jsx(q,{...j}),"aria-label":"Previous",onClick:()=>A("prev"),size:"lg",isDisabled:d===0,...s==="dark"&&{backgroundColor:"transparent"}}),n.jsxs(F,{fontSize:"lg",color:s==="dark"?"white":"#333D49",children:[d+1," / ",x+1]}),n.jsx(M,{icon:o==="ltr"?n.jsx(q,{...j}):n.jsx($,{...j}),"aria-label":"Next",onClick:()=>A("next"),size:"lg",...s==="dark"&&{backgroundColor:"transparent"},isDisabled:d===x})]})]})},et="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='60.566'%20height='61.093'%20viewBox='0%200%2060.566%2061.093'%3e%3cg%20id='Group_58574'%20data-name='Group%2058574'%20transform='translate(-1659.718%20-9.454)'%3e%3cg%20id='pattern'%20transform='translate(1660%2010.019)'%3e%3cpath%20id='Path_224195'%20data-name='Path%20224195'%20d='M218.95,435.138l8.794,8.768v12.419h12.432l8.775,8.793,8.794-8.793h12.432V443.906'%20transform='translate(-218.95%20-405.157)'%20fill='none'%20stroke='%23bc9761'%20stroke-miterlimit='10'%20stroke-width='0.8'/%3e%3cpath%20id='Path_224196'%20data-name='Path%20224196'%20d='M224.341,437.946V425.527h12.432l8.775-8.768,8.794,8.768h12.432v12.419l8.774,8.794'%20transform='translate(-215.547%20-416.759)'%20fill='none'%20stroke='%23bc9761'%20stroke-miterlimit='10'%20stroke-width='0.8'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",tt=X.img`
  width: 48px;
  height: 48px;
`,nt=X.div`
  position: relative;
  &::before {
    content: "${t=>t.number}";
    position: absolute;
    left: 38%;
    top: 20%;
    font-size: 20px;
    font-weight: 400;
    color: #cbaf86;
  }
`,J={bgColor:"#BC9761",color:"white",border:"none"};function it({setIndex:t,index:e,title:o,number:a,prayerData:s,useCount:i,counterName:r,hidden:d,lang:g,dir:l,cardCounterTitle:u,cardPrayerTitle:p,prevButton:h,nextButton:x,mode:c,curIndex:f,audio:m,audioStart:v}){const[C,A]=fe(r,0),y=()=>n.jsxs(n.Fragment,{children:[n.jsx(nt,{number:a,dir:l,children:n.jsx(tt,{src:et})}),n.jsx(F,{fontSize:{base:"13px",md:"24px"},fontWeight:{base:"700",md:"400px"},...l==="ltr"?{ml:4}:{mr:4},color:e<=f+1?"#BC9761":c==="dark"?"white":"black",children:o})]}),j=()=>{e>2&&t(N=>N-1)},b=()=>{(C===7||!i)&&t(e)&&t(e)};return n.jsxs(se,{...c==="dark"&&{border:"1px solid #3A444F"},borderRadius:"10px",style:{display:d},backgroundColor:c==="dark"?"#28323F":"",children:[n.jsxs(ne,{justifyContent:"space-between",style:{direction:l},bgColor:c==="dark"?"#2C3743":"#F8F8F8",...c==="dark"&&{border:"1px solid #3A444F"},borderRadius:"10px",children:[n.jsx(w,{display:"flex",alignItems:"center",justifyContent:"center",children:y()}),n.jsx(We,{boxSize:"24px",fontWeight:"400",...c==="dark"&&{color:"white"}})]}),n.jsxs(ie,{children:[n.jsxs(re,{direction:{base:"column",md:"row"},align:"stretch",margin:10,gap:12,alignItems:"stretch",style:{direction:l},children:[i&&n.jsx(w,{flex:1,children:n.jsx(Je,{count:C,setCount:A,dir:l,cardTitle:u,mode:c})}),n.jsx(w,{flex:2,children:n.jsx(qe,{prayerData:s,lang:g,dir:l,cardTitle:p,mode:c,audio:m,audioStart:v})})]}),n.jsxs(w,{display:"flex",justifyContent:"space-between",margin:10,style:{direction:l},children:[n.jsx(O,{size:"lg",color:c==="dark"?"white":"#BC9761",border:c==="dark"?"1px solid #aaa":"1px solid #BC9761",bgColor:c==="dark"?"#1F2A37":"white",_hover:J,onClick:j,children:h}),n.jsx(O,{size:"lg",color:c==="dark"?"white":"#BC9761",border:c==="dark"?"1px solid #aaa":"1px solid #BC9761",bgColor:c==="dark"?"#1F2A37":"white",_hover:J,_active:J,isActive:(C===7||!i)&&"active",onClick:b,mb:{base:4,md:0},children:x})]})]})]})}const ot=X.div`
  color: #cbaf86;
  border-right: 1px solid #cbaf86;
  height: 48px;
  margin-right: 39px;
  margin-left: 39px;
  float: ${t=>t.dir==="ltr"?"left":""}

`;function rt({dir:t}){return n.jsx(ot,{dir:t})}export{Te as A,it as I,rt as S};
