(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{193:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"c",function(){return r}),a.d(t,"b",function(){return l});var n={mobile:767,laptop:960,desktop:1280},r={title:"Sabertazimi ' Blog",url:"https://tazimi.dev"},l={primary:"#1890ff",blue:"#2185d0",red:"#f03e3e",yellow:"#f59f00",green:"#37b24d",orange:"#f76707",violet:"#7048e8",light:"#f8f9fa",white:"#fff",dark:"#343a40",black:"#000",overlay:"rgba(0, 0, 0, 0.8)",transparent:"transparent"}},206:function(e,t,a){"use strict";var n=a(0),r=function(e){Object(n.useEffect)(function(){return function(e){var t=document.createElement("script");t.src=e+"/embed.js",t.setAttribute("data-timestamp",+new Date),document.getElementById("disqus_thread")&&(document.body||document.head).appendChild(t)}(e)},[e])},l=(a(338),a(26),function(e){var t=void 0===e?{}:e,a=t.maxWidth,r=t.minWidth,l=t.onUpdate,o=t.getWidth,i=0,c=!1,m=Object(n.useState)(!0),s=m[0],u=m[1],d=function(e){c||(c=!0,i=requestAnimationFrame(function(){return p(e)}))},p=function(e){var t=o?o():window.innerWidth||0,n=function(e,t){var a=t.maxWidth;return function(e,t){return!t||e>=t}(e,t.minWidth)&&function(e,t){return!t||e<=t}(e,a)}(t,{maxWidth:a,minWidth:r});s!==n&&u(n),l&&l(e,{maxWidth:a,minWidth:r,width:t}),c=!1};return Object(n.useEffect)(function(){return window.addEventListener("resize",d),p(),function(){window.removeEventListener("resize",d),cancelAnimationFrame(i)}}),s});a.d(t,"a",function(){return r}),a.d(t,"b",function(){return l})},215:function(e,t,a){"use strict";a(403);var n=a(491),r=a.n(n),l=(a(404),a(620)),o=a.n(l),i=(a(216),a(195)),c=a.n(i),m=(a(405),a(623)),s=a.n(m),u=(a(406),a(498)),d=a.n(u),p=a(0),f=a.n(p),E=a(56),g=a(647),h=a(652),A=a(660),b=(a(313),a(333)),y=a.n(b),v=(a(407),a(410)),k=a.n(v),w=(a(80),a(81),function(e){var t=e.posts,a=Object(p.useState)([]),n=a[0],r=a[1],l=Object(p.useCallback)(function(e){r(e?t.filter(function(t){return t.title.toLowerCase().includes(e.toLowerCase())}):[])},[t]);return f.a.createElement(k.a,{size:"large",style:{width:"100%"},dataSource:n.map(function(e){return f.a.createElement(k.a.Option,{key:e.title,text:e.title},f.a.createElement(E.Link,{to:""+e.slug},e.title))}),onSearch:l,placeholder:"Search Posts",optionLabelProp:"text"},f.a.createElement(y.a,{suffix:f.a.createElement(c.a,{type:"search"})}))}),x=a(206),C=a(193),z=a(171),W=a.n(z),B=a(490),O=a.n(B),I=function(e){var t=e.posts,a=Object(p.useState)(!1),n=a[0],l=a[1],i=Object(x.b)({minWidth:C.a.mobile});return f.a.createElement(h.a,{onBottomPassed:function(){return l(!0)},onBottomPassedReverse:function(){return l(!1)},once:!1},f.a.createElement(A.a,{style:{padding:0},textAlign:"center",vertical:!0},i?f.a.createElement(s.a,{className:W.a.headerMenu,mode:"horizontal",style:{position:"fixed",zIndex:9999,width:"100%",borderBottomColor:C.b.transparent,transition:"transform 0.2s ease-in-out, background 0.5s ease-in-out",transform:n?"scale(1)":"scale(1.1)",background:n?C.b.white:"linear-gradient(120deg,#2b488a,#ca3749)",color:n?C.b.dark:C.b.light,fontWeight:800,lineHeight:"64px"}},f.a.createElement(s.a.Item,null,f.a.createElement(g.a,{as:E.Link,to:"/",src:O.a,alt:"logo",size:"tiny",centered:!0})),f.a.createElement(s.a.Item,null,f.a.createElement(E.Link,{to:"/posts"},"Posts")),f.a.createElement(s.a.Item,null,f.a.createElement(E.Link,{to:"/tags"},"Tags")),f.a.createElement(s.a.Item,{as:E.Link,to:"/books"},f.a.createElement(E.Link,{to:"/books"},"Books")),f.a.createElement(s.a.Item,{as:E.Link,to:"/about"},f.a.createElement(E.Link,{to:"/about"},"About")),t&&f.a.createElement(s.a.Item,{style:{borderBottomColor:C.b.transparent}},f.a.createElement(w,{posts:t}))):f.a.createElement(r.a,{type:"flex",justify:"space-around",align:"middle"},f.a.createElement(d.a,{span:12,offset:6},f.a.createElement(g.a,{as:E.Link,to:"/",src:O.a,alt:"logo",size:"tiny"})),f.a.createElement(d.a,{span:6},f.a.createElement(o.a,{placement:"bottomRight",content:f.a.createElement(s.a,{mode:"vertical",style:{width:"100%",minWidth:"400px",textAlign:"center",fontWeight:800}},f.a.createElement(s.a.Item,null,f.a.createElement(E.Link,{to:"/posts"},"Posts")),f.a.createElement(s.a.Item,null,f.a.createElement(E.Link,{to:"/tags"},"Tags")),f.a.createElement(s.a.Item,{as:E.Link,to:"/books"},f.a.createElement(E.Link,{to:"/books"},"Books")),f.a.createElement(s.a.Item,{as:E.Link,to:"/about"},f.a.createElement(E.Link,{to:"/about"},"About"))),trigger:"click"},f.a.createElement(c.a,{type:"bars",style:{fontSize:"2em",color:C.b.primary}}))))))},L=a(627),Q=a(653),j=a(654),F=a(655),S=a(659),P=a(304),U=function(e){var t=e.type,a=e.url;return f.a.createElement(S.a,{as:"a",icon:!0,circular:!0,href:""+a,color:"black",style:{margin:"0 1em"}},f.a.createElement(P.a,{name:""+t,size:"big"}))},V=function(){return f.a.createElement(E.StaticQuery,{query:"1978225181",render:function(e){return f.a.createElement(A.a,{inverted:!0,style:{padding:"5em 0em"},vertical:!0},f.a.createElement(Q.a,{textAlign:"center",className:"blog-footer",style:{maxWidth:960}},f.a.createElement(U,{type:"rocket",url:"https://tazimi.dev"}),f.a.createElement(U,{type:"github",url:"https://github.com/sabertazimi"}),f.a.createElement(U,{type:"twitter",url:"https://twitter.com/sabertazimi"}),f.a.createElement(U,{type:"facebook",url:"https://facebook.com/sabertazimi"}),f.a.createElement(U,{type:"weibo",url:"https://weibo.com/sabertazimi"}),f.a.createElement(j.a,{inverted:!0,section:!0}),f.a.createElement(F.a,{horizontal:!0,inverted:!0,divided:!0,link:!0},f.a.createElement(F.a.Item,null,"Copyright ©"," ",f.a.createElement("a",{href:"https://github.com/sabertazimi/react-blog"},"sabertazimi")," ",(new Date).getFullYear()),f.a.createElement(F.a.Item,null,"Built with ",f.a.createElement("a",{href:"https://reactjs.org"},"React")," and"," ",f.a.createElement("a",{href:"https://gatsbyjs.org"},"Gatsby")),f.a.createElement(F.a.Item,null,"Last Updated at"," ",f.a.createElement("a",{href:"https://www.google.com/search?q=time"},new Date(e.site.buildTime).toLocaleString())))))},data:L})},N=(a(26),a(79)),T=a.n(N),D=function(e){var t=e.children,a=e.style,n=T()(e,["children","style"]);return f.a.createElement("div",Object.assign({style:Object.assign({maxWidth:C.a.laptop,position:"relative",display:"block",margin:"0 auto",padding:"1em 3em"},a)},n),t)},R=function(){return f.a.createElement("svg",{viewBox:"0 0 1024 1024","p-id":"8392",width:"2em",height:"2em",fill:"currentColor"},f.a.createElement("path",{d:"M563.8 512l262.5-312.9c4.4-5.2 0.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9c-4.4 5.2-0.7 13.1 6.1 13.1h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z","p-id":"8393"}))},X=function(){return f.a.createElement("svg",{viewBox:"0 0 1024 1024","p-id":"1097",width:"2em",height:"2em",fill:"currentColor"},f.a.createElement("path",{d:"M573 421c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40zM293 421c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40z","p-id":"1098"}),f.a.createElement("path",{d:"M894 345c-48.1-66-115.3-110.1-189-130v0.1c-17.1-19-36.4-36.5-58-52.1-163.7-119-393.5-82.7-513 81-96.3 133-92.2 311.9 6 439l0.8 132.6c0 3.2 0.5 6.4 1.5 9.4 5.3 16.9 23.3 26.2 40.1 20.9L309 806c33.5 11.9 68.1 18.7 102.5 20.6l-0.5 0.4c89.1 64.9 205.9 84.4 313 49l127.1 41.4c3.2 1 6.5 1.6 9.9 1.6 17.7 0 32-14.3 32-32V753c88.1-119.6 90.4-284.9 1-408zM323 735l-12-5-99 31-1-104-8-9c-84.6-103.2-90.2-251.9-11-361 96.4-132.2 281.2-161.4 413-66 132.2 96.1 161.5 280.6 66 412-80.1 109.9-223.5 150.5-348 102z m505-17l-8 10 1 104-98-33-12 5c-56 20.8-115.7 22.5-171 7l-0.2-0.1C613.7 788.2 680.7 742.2 729 676c76.4-105.3 88.8-237.6 44.4-350.4l0.6 0.4c23 16.5 44.1 37.1 62 62 72.6 99.6 68.5 235.2-8 330z","p-id":"1099"}),f.a.createElement("path",{d:"M433 421c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40z","p-id":"1100"}))},M=function(){return f.a.createElement("svg",{viewBox:"0 0 1024 1024","p-id":"7522",width:"2em",height:"2em",fill:"currentColor"},f.a.createElement("path",{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zM904 784H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zM904 472H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z","p-id":"7523"}))},Z={Close:function(e){return f.a.createElement(c.a,Object.assign({component:R},e))},Comment:function(e){return f.a.createElement(c.a,Object.assign({component:X},e))},Hamburger:function(e){return f.a.createElement(c.a,Object.assign({component:M},e))}},H=(a(312),a(302)),G=a.n(H),Y=a(157),q=a.n(Y),K=function(e){var t=e.title,a=e.to,n=e.children,r=Object(x.b)({maxWidth:C.a.mobile});return f.a.createElement(G.a,{placement:"left",title:t},f.a.createElement(E.Link,{to:a},f.a.createElement("span",{className:q.a.menuLink,style:{borderBottom:"5px solid "+C.b.light,fontSize:r?"2rem":"4rem",color:C.b.light}},n)))},J=function(e){var t=e.onExpand,a=Object(p.useState)(!1),n=a[0],r=a[1],l=Object(x.b)({maxWidth:C.a.mobile});return f.a.createElement(f.a.Fragment,null,f.a.createElement("nav",{className:q.a.menu,style:{transform:n?"translateX(0)":"translateX(-100%)"}},f.a.createElement(K,{title:"View Posts",to:"/posts"},"Posts"),f.a.createElement(K,{title:"View Tags",to:"/tags"},"Tags"),f.a.createElement(K,{title:"View Books",to:"/books"},"Books"),f.a.createElement(K,{title:"About Me",to:"/about"},"About")),f.a.createElement("div",{className:q.a.hamburger,onClick:function(){t&&t(!n),r(!n)}},n?f.a.createElement(Z.Close,{style:{fontWeight:800,fontSize:l?"1rem":"2rem",color:C.b.white}}):f.a.createElement(Z.Hamburger,{style:{fontWeight:800,fontSize:l?"1rem":"2rem",color:C.b.white}})),f.a.createElement("div",{className:q.a.overlay,style:{backgroundColor:n?C.b.overlay:C.b.transparent}}))},_=a(633),$=a.n(_),ee=function(e){var t=void 0===e?{}:e,a=t.titles,n=void 0===a?[]:a,r=t.speed,l=void 0===r?50:r,o=t.loop,i=void 0===o||o,c=t.style,m=void 0===c?{}:c,s=Object(x.b)({minWidth:C.a.laptop})?"5em":"2em";return Object(p.useEffect)(function(){var e={strings:[].concat(n),smartBackspace:!0,typeSpeed:l,backSpeed:l,backDelay:1e3,loop:i},t=new $.a(".typing-title",e);return function(){t.destroy()}},[n,l,i]),f.a.createElement("div",{className:"typing-title-container",style:Object.assign({width:"100%",height:"100%",marginTop:0,paddingTop:0,fontSize:s,fontWeight:800,textAlign:"center"},m)},f.a.createElement("span",{className:"typing-title"}))},te=(a(381),a(382)),ae=a.n(te),ne=a(246),re=(a(234),a(239)),le=a.n(re),oe=(a(634),a(635)),ie=a.n(oe),ce=function(e){var t=e.post;return f.a.createElement(D,null,f.a.createElement(ie.a,{paragraph:{rows:Math.min(Math.floor(t.timeToRead/2),10)}}),f.a.createElement(le.a,{type:"primary",shape:"circle",size:"large",style:{float:"right",width:"2.5em",height:"2.5em",margin:0,fontSize:"1.5em"}},f.a.createElement(E.Link,{to:""+t.slug,style:{color:C.b.light}},f.a.createElement(c.a,{type:"read"}))))},me=function(){return["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey"][Math.floor(11*Math.random())]},se=a(174),ue=a.n(se),de=function(e){var t=e.post,a=t.tags?t.tags[0]:"Computer Science",n=Object(ne.b)({from:{opacity:0,transform:"translateX(-200px)"},to:{opacity:1,transform:"translateX(0)"}});return f.a.createElement(ne.a.div,{style:Object.assign({},n,{width:"100%"})},f.a.createElement(D,{style:{marginTop:0,marginBottom:"3em",padding:"1em 1.2em"},className:ue.a.cell},f.a.createElement(ae.a,{key:a,color:me(),style:{marginBottom:"1rem"}},f.a.createElement(E.Link,{to:"/tags/"+a,style:{fontWeight:800}},a)),f.a.createElement("h2",{style:{marginTop:0,marginBottom:"1rem"}},t.title||"Article"),f.a.createElement(ae.a,{color:C.b.black,style:{marginBottom:"1rem",color:C.b.light,fontWeight:800}},"Posted on ",new Date(t.date).toDateString()||"Nowadays"," "),f.a.createElement(ce,{post:t})))},pe={display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"flex-start",flexWrap:"wrap",flex:1,width:"100%",maxWidth:"1280px",margin:"0 auto"},fe=Object.assign({},pe,{flexDirection:"column"}),Ee=Object.assign({},pe),ge=Object.assign({},pe,{flexDirection:"column",alignItems:"center",maxWidth:"60%"}),he=Object.assign({},ge,{maxWidth:"35%"}),Ae=function(e){var t=e.posts,a=t.slice(0,Math.ceil(t.length/2)),n=t.slice(Math.ceil(t.length/2)),r=Object(x.b)({maxWidth:C.a.mobile}),l=Object(x.b)({minWidth:C.a.desktop});return f.a.createElement("div",{style:{paddingTop:r?0:"11em"}},l?f.a.createElement("div",{style:Ee},f.a.createElement("div",{style:Object.assign({},ge,{marginRight:"2em"})},a.map(function(e,t){return f.a.createElement(de,{key:e.title||t,post:e})})),f.a.createElement("div",{style:he},n.map(function(e,t){return f.a.createElement(de,{key:e.title||t,post:e})}))):f.a.createElement("div",{style:fe},t.map(function(e,t){return f.a.createElement(de,{key:e.title||t,post:e})})))},be=function(e){var t=e.posts;return f.a.createElement(F.a,{divided:!0,animated:!0,relaxed:"very",size:"massive",verticalAlign:"middle",style:{marginTop:"2em"}},t.map(function(e,t){return f.a.createElement(F.a.Item,{key:e.title||t},f.a.createElement(F.a.Content,{floated:"right"},e.author),f.a.createElement(F.a.Content,null,f.a.createElement(F.a.Header,{as:E.Link,to:""+e.slug},e.title)))}))},ye=function(e){var t=e.post,a=Object(ne.b)({from:{opacity:0,transform:"translateX(-200px)"},to:{opacity:1,transform:"translateX(0)"}});return f.a.createElement("div",{style:{width:"100%",padding:"10em 8em",background:"linear-gradient(120deg,#2b488a,#ca3749)",backgroundSize:"cover",backgroundPosition:"center center",backgroundRepeat:"no-repeat"}},f.a.createElement(ne.a.div,{style:a},t.tags?t.tags.map(function(e){return f.a.createElement(ae.a,{key:e,color:C.b.primary,style:{marginBottom:"1em"}},f.a.createElement(E.Link,{to:"/tags/"+e,style:{fontWeight:800}},e))}):f.a.createElement(ae.a,{color:C.b.primary},f.a.createElement(E.Link,{to:"/tags/all"},"CS")),f.a.createElement("h1",{style:{color:C.b.light,fontSize:"4em",margin:"0.2em 0"}},t.title||"Article"),f.a.createElement(ae.a,{color:C.b.black,style:{marginBottom:"1em",color:C.b.light,fontWeight:800}},"Posted on ",new Date(t.date).toDateString()||"Nowadays"),f.a.createElement(ae.a,{color:C.b.black,style:{color:C.b.light,fontWeight:800}},"(",t.timeToRead," minutes)")))},ve=a(175),ke=a.n(ve),we=function(e){var t=e.post,a=Object(x.b)({maxWidth:C.a.mobile});return f.a.createElement("div",{className:ke.a.clearfix},f.a.createElement(le.a,{type:"primary",size:"large",style:{float:"left",width:a?"100%":"47%",height:"4em",marginBottom:a?"1em":0,padding:"0.3em 1em",borderRadius:0,fontSize:"1.5em",color:C.b.light}},f.a.createElement(c.a,{type:t.prevPost?"arrow-left":"home",style:{marginRight:"10px"}}),f.a.createElement(E.Link,{to:t.prevPost?""+t.prevPost.slug:"/posts",style:{fontWeight:800,color:C.b.light}},t.prevPost?""+t.prevPost.title:"Back to Home")),f.a.createElement(le.a,{size:"large",type:"primary",style:{float:"right",width:a?"100%":"47%",height:"4em",padding:"0.3em 1em",borderRadius:0,fontSize:"1.5em",color:C.b.light}},f.a.createElement(E.Link,{to:t.nextPost?""+t.nextPost.slug:"/posts",style:{fontWeight:800,color:C.b.light}},t.nextPost?""+t.nextPost.title:"Back to Home"),f.a.createElement(c.a,{type:t.nextPost?"arrow-right":"home",style:{marginLeft:"10px"}})))},xe=a(176),Ce=a.n(xe),ze=function(e){var t=e.content,a=Object(ne.b)({from:{opacity:0,transform:"translateY(-200px)"},to:{opacity:1,transform:"translateY(0)"},delay:1e3});return f.a.createElement(ne.a.div,{style:a,dangerouslySetInnerHTML:{__html:t},className:Ce.a.markdownBody})},We=(a(640),a(641)),Be=a.n(We),Oe=a(178),Ie=a.n(Oe),Le=function(e){var t=e.toc,a=Object(p.useState)(!1),n=a[0],r=a[1],l=function(){return r(!n)};return Object(x.b)({minWidth:C.a.mobile})?f.a.createElement("div",{className:Ie.a.tocContainer,style:{margin:0,backgroundColor:C.b.primary}},f.a.createElement(le.a,{type:"primary",shape:"circle",icon:n?"close":"menu-fold",size:"large",style:{color:C.b.light},onClick:l}),f.a.createElement(Be.a,{title:"Table of Contents",placement:"right",closable:!1,onClose:l,visible:n},f.a.createElement("div",{className:Ie.a.toc+" "+(n?Ie.a.tocExpanded:""),dangerouslySetInnerHTML:{__html:t}}))):null},Qe=(a(310),a(383)),je=a.n(Qe),Fe=function(e){var t=e.children;return f.a.createElement(je.a,{style:{margin:"2em 0",fontWeight:800}},t)},Se=a(179),Pe=a.n(Se),Ue=function(){return Object(x.a)("https://http-blog-hust-cf.disqus.com"),f.a.createElement("div",{id:"disqus_thread",className:Pe.a.disqus})},Ve=function(e){var t=e.post;return f.a.createElement("div",null,f.a.createElement(ye,{post:t}),f.a.createElement(D,null,f.a.createElement(Le,{toc:t.toc}),f.a.createElement(ze,{content:t.html}),f.a.createElement(Fe,null,t.subtitle||"Blog"),f.a.createElement(we,{post:t}),f.a.createElement(Fe,null,f.a.createElement(Z.Comment,{style:{color:C.b.primary}})),f.a.createElement(Ue,null),f.a.createElement(Re,null)))},Ne=function(e){var t=e.color,a=e.type,n=e.url;return f.a.createElement(S.a,{color:""+t,icon:""+a,style:{margin:0,padding:0,borderRadius:0,width:"50px",height:"50px",zIndex:999},size:"huge",onClick:function(){window.open(n,"_blank"),window.focus()}})},Te=a(180),De=a.n(Te),Re=function(){var e=Object(p.useState)(""),t=e[0],a=e[1];return Object(p.useEffect)(function(){return a(document.location.href)}),f.a.createElement("div",{style:{position:"fixed",display:"flex",flexDirection:"column",top:"50%",left:0},className:De.a.socialGroup},f.a.createElement(Ne,{color:"red",type:"weibo",url:"https://service.weibo.com/share/share.php?url="+t}),f.a.createElement(Ne,{color:"facebook",type:"facebook",url:"https://www.facebook.com/sharer.php?u="+t}),f.a.createElement(Ne,{color:"twitter",type:"twitter",url:"https://twitter.com/intent/tweet?url="+t}),f.a.createElement(Ne,{color:"linkedin",type:"linkedin",url:"https://www.linkedin.com/shareArticle?mini=true&url="+t}))},Xe=(a(82),a(60),a(40),a(642),a(644),a(385)),Me=function(e){var t=e.tags,a=e.activeTag,n=Object.keys(t).sort(function(e,a){return t[a]-t[e]});return a&&(n=n.filter(function(e){return e!==a})),f.a.createElement(Xe.a.Group,{tag:!0},a?f.a.createElement(Xe.a,{key:a,color:me(),as:E.Link,to:"/tags/"+a},a,"    ",t[a]):null,n.map(function(e){return f.a.createElement(Xe.a,{key:e,color:a?"grey":me(),as:E.Link,to:"/tags/"+e},e,"    ",t[e])}),a?f.a.createElement(Xe.a,{key:"all",color:me(),as:E.Link,to:"/tags"},"All"):null)},Ze=a(657),He=function(e){var t=e.title,a=e.url,n=e.author,r=e.description;return f.a.createElement(Ze.a,{fluid:!0,raised:!0},f.a.createElement(Ze.a.Content,{textAlign:"center"},f.a.createElement(Ze.a.Header,null,f.a.createElement("a",{href:a},f.a.createElement("h3",null,t))),f.a.createElement(Ze.a.Meta,null,f.a.createElement("span",{className:"date"},f.a.createElement(P.a,{name:"write"}),n)),f.a.createElement(Ze.a.Description,null,r)))},Ge=function(e){var t=e.booklist;return f.a.createElement(Ze.a.Group,{centered:!0},t.map(function(e,t){return f.a.createElement(He,Object.assign({key:t},e))}))},Ye=(a(338),a(656)),qe=function(e){var t=e.githubProfile,a=e.githubRepos;return t&&a?f.a.createElement(Ze.a,{centered:!0,fluid:!0},f.a.createElement(g.a,{centered:!0,size:"medium",src:t.avatar}),f.a.createElement(Ze.a.Content,null,f.a.createElement(Ze.a.Header,null,f.a.createElement("a",{href:t.url},f.a.createElement(P.a,{name:"github"}),t.username)),f.a.createElement(Ze.a.Meta,null,f.a.createElement("span",{className:"date"},"Joined in ",t.createDate)),f.a.createElement("br",null),f.a.createElement(Ze.a.Description,null,f.a.createElement(F.a,null,f.a.createElement(F.a.Item,null,f.a.createElement(P.a,{name:"info circle"}),t.bio||"No Description"),f.a.createElement(F.a.Item,null,f.a.createElement(P.a,{name:"marker"}),t.location||"Earth")))),f.a.createElement(Ze.a.Content,{extra:!0},f.a.createElement("a",{href:t.followersUrl},f.a.createElement(P.a,{name:"user circle"}),t.followers," Followers"),f.a.createElement("br",null),f.a.createElement("br",null),f.a.createElement("a",{href:t.followingUrl},f.a.createElement(P.a,{name:"user circle outline"}),t.following," Following"),f.a.createElement(Ye.a,{celled:!0,padded:!0},f.a.createElement(Ye.a.Body,null,a.map(function(e,t){return f.a.createElement(Ye.a.Row,{key:t},f.a.createElement(Ye.a.Cell,null,f.a.createElement("a",{href:e.repoUrl},e.name)),f.a.createElement(Ye.a.Cell,null,e.language),f.a.createElement(Ye.a.Cell,null,f.a.createElement(P.a,{name:"star"}),e.stars))}))))):f.a.createElement("div",{style:{margin:"0 auto",textAlign:"center"}},f.a.createElement("h1",null,"About me"),f.a.createElement("p",null,"Please mail to ",f.a.createElement("a",{href:"mailto:sabertazimi@gmail.com"},"me"),"."))},Ke=function(){var e=Object(p.useState)("down"),t=e[0],a=e[1],n=Object(x.b)({maxWidth:C.a.mobile});return Object(p.useEffect)(function(){var e=document.createElement("div");return e.id="scroll-top-anchor",e.style.position="absolute",e.style.top=0,document.body.appendChild(e),function(){e.remove()}},[]),f.a.createElement(h.a,{onUpdate:function(e,t){var n=t.calculations;return a(n.direction)},once:!1},f.a.createElement(le.a,{type:"primary",shape:"circle",icon:"down"===t?"arrow-up":"arrow-down",size:n?"small":"large",style:{position:"fixed",right:n?"10px":"30px",bottom:n?"2%":"3%",margin:0,zIndex:999,color:C.b.light},onClick:function(e){e.preventDefault(),e.stopPropagation();var a=document.querySelector("down"===t?"#scroll-top-anchor":".blog-footer");a&&a.scrollIntoView({behavior:"smooth",blcok:"start"})}}))},Je=a(9),_e=a.n(Je),$e=(a(658),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={hasError:!1,error:"",info:""},t}_e()(t,e);var a=t.prototype;return a.componentDidCatch=function(e,t){this.setState({hasError:!0,error:e,info:t})},a.render=function(){var e=this.state;e.hasError,e.error;return this.props.children},t}(f.a.Component));a.d(t,"h",function(){return I}),a.d(t,"e",function(){return V}),a.d(t,"c",function(){return D}),a.d(t,"i",function(){return Z}),a.d(t,"k",function(){return J}),a.d(t,"o",function(){return ee}),a.d(t,"g",function(){return Ae}),a.d(t,"j",function(){return be}),a.d(t,"a",function(){return Ve}),a.d(t,"m",function(){return Re}),a.d(t,"n",function(){return Me}),a.d(t,"b",function(){return Ge}),a.d(t,"f",function(){return qe}),a.d(t,"l",function(){return Ke}),a.d(t,"d",function(){return $e})},233:function(e,t,a){"use strict";a(310);var n=a(383),r=a.n(n),l=a(0),o=a.n(l),i=a(246),c=a(215),m=a(206),s=a(193),u=function(e){var t=e.banner,a=e.posts,n=e.children,l=Object(m.b)({minWidth:s.a.mobile}),u=Object(i.b)({from:{opacity:0,transform:"translateX(-200px)"},to:{opacity:1,transform:"translateX(0)"}});return o.a.createElement("div",null,o.a.createElement(c.h,{posts:a}),o.a.createElement("div",{style:{padding:(l?"7em":"0")+" 0em 3em 0"}},o.a.createElement(i.a.div,{style:u},o.a.createElement(c.c,{style:{maxWidth:960}},o.a.createElement(r.a,{style:{margin:"3em 0em",fontWeight:800}},t||"Life"),n,o.a.createElement(r.a,{style:{margin:"3em 0em",fontWeight:800}},t||"Life")))),o.a.createElement(c.e,null))},d=(a(26),a(646)),p=a.n(d),f=function(e){var t=e.children,a=Object(i.b)({from:{opacity:0,transform:"translateY(-200px)"},to:{opacity:1,transform:"translateY(0)"},delay:500});return o.a.createElement(i.a.div,{style:Object.assign({},a,{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"100%",height:"100vh",margin:0,padding:0,overflowX:"hidden",overflowY:"auto",background:'url("'+p.a+'") center no-repeat',backgroundSize:"cover",color:s.b.light})},t)},E=function(e){var t=e.posts,a=e.children;return o.a.createElement("div",null,o.a.createElement(c.h,{posts:t}),o.a.createElement("div",{style:{width:"100%",padding:"0 0 3em 0",overflow:"hidden"}},a,o.a.createElement(c.l,null)),o.a.createElement(c.e,null))};a.d(t,"b",function(){return u}),a.d(t,"a",function(){return f}),a.d(t,"c",function(){return E})},490:function(e,t){e.exports="data:image/png;base64,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"},627:function(e){e.exports={data:{site:{buildTime:"2020-09-01T10:59:05.066Z"}}}},646:function(e,t,a){e.exports=a.p+"static/landing-a3773ca23572ca8ac6d6837b93a6e529.jpg"}}]);
//# sourceMappingURL=2-15e2987c3b601e302832.js.map