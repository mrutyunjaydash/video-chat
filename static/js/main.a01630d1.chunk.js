(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{154:function(e,t,n){},155:function(e,t,n){},156:function(e,t,n){},188:function(e,t){},190:function(e,t){},207:function(e,t,n){},211:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(19),s=n.n(i),o=(n(154),n(155),n(138)),r=n(15),l=n(89),d=n(17),u=Object(a.createContext)(),j=(n(156),n(213)),b=n(147),m=n(215),f=n(214),h=n.p+"static/media/video.fd3bc19f.svg",O=n.p+"static/media/video-off.bce3562a.svg",v=n.p+"static/media/msg_illus.ff502f13.svg",g=n.p+"static/media/msg.e50ac8a6.svg",p=n(216),x=n(217),y=n(130),C=n(102),_=n.n(C),w=n(4),S=Object(y.io)("https://video-chat-mrutyunjay.herokuapp.com/"),N=function(e){var t=e.children,n=Object(a.useState)(!1),c=Object(d.a)(n,2),i=c[0],s=c[1],o=Object(a.useState)(!1),r=Object(d.a)(o,2),j=r[0],b=r[1],m=Object(a.useState)(),f=Object(d.a)(m,2),h=f[0],O=f[1],v=Object(a.useState)([]),g=Object(d.a)(v,2),p=g[0],x=g[1],y=Object(a.useState)(""),C=Object(d.a)(y,2),N=C[0],k=C[1],M=Object(a.useState)({}),I=Object(d.a)(M,2),R=I[0],A=I[1],E=Object(a.useState)(""),V=Object(d.a)(E,2),U=V[0],D=V[1],B=Object(a.useState)(""),T=Object(d.a)(B,2),P=T[0],W=T[1],F=Object(a.useState)(""),L=Object(d.a)(F,2),z=L[0],J=L[1],H=Object(a.useState)(!0),X=Object(d.a)(H,2),Y=X[0],q=X[1],G=Object(a.useState)(),$=Object(d.a)(G,2),K=$[0],Q=$[1],Z=Object(a.useState)(!0),ee=Object(d.a)(Z,2),te=ee[0],ne=ee[1],ae=Object(a.useState)(),ce=Object(d.a)(ae,2),ie=ce[0],se=ce[1],oe=Object(a.useState)(""),re=Object(d.a)(oe,2),le=re[0],de=re[1],ue=Object(a.useRef)(),je=Object(a.useRef)(),be=Object(a.useRef)();Object(a.useEffect)((function(){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){O(e),ue.current.srcObject=e})),localStorage.getItem("name")&&k(localStorage.getItem("name")),S.on("me",(function(e){return D(e)})),S.on("endCall",(function(){window.location.reload()})),S.on("updateUserMedia",(function(e){var t=e.type,n=e.currentMediaStatus;if(null!==n||n!==[])switch(t){case"video":Q(n);break;case"mic":se(n);break;default:se(n[0]),Q(n[1])}})),S.on("callUser",(function(e){var t=e.from,n=e.name,a=e.signal;A({isReceivingCall:!0,from:t,name:n,signal:a})})),S.on("msgRcv",(function(e){e.name;var t=e.msg,n=e.sender;de({value:t,sender:n}),setTimeout((function(){de({})}),2e3)}))}),[]);return Object(w.jsx)(u.Provider,{value:{call:R,callAccepted:i,myVideo:ue,userVideo:je,stream:h,name:N,setName:k,callEnded:j,me:U,callUser:function(e){var t=new _.a({initiator:!0,trickle:!1,stream:h});J(e),t.on("signal",(function(t){S.emit("callUser",{userToCall:e,signalData:t,from:U,name:N})})),t.on("stream",(function(e){je.current.srcObject=e})),S.on("callAccepted",(function(e){var n=e.signal,a=e.userName;s(!0),W(a),t.signal(n),S.emit("updateMyMedia",{type:"both",currentMediaStatus:[te,Y]})})),be.current=t},leaveCall:function(){b(!0),be.current.destroy(),S.emit("endCall",{id:z}),window.location.reload()},answerCall:function(){s(!0),J(R.from);var e=new _.a({initiator:!1,trickle:!1,stream:h});e.on("signal",(function(e){S.emit("answerCall",{signal:e,to:R.from,userName:N,type:"both",myMediaStatus:[te,Y]})})),e.on("stream",(function(e){je.current.srcObject=e})),e.signal(R.signal),be.current=e},sendMsg:function(e){S.emit("msgUser",{name:N,to:z,msg:e,sender:N});var t={};t.msg=e,t.type="sent",t.timestamp=Date.now(),t.sender=N,x([].concat(Object(l.a)(p),[t]))},msgRcv:le,chat:p,setChat:x,setMsgRcv:de,setOtherUser:J,leaveCall1:function(){S.emit("endCall",{id:z})},userName:P,myVdoStatus:Y,setMyVdoStatus:q,userVdoStatus:K,setUserVdoStatus:Q,updateVideo:function(){q((function(e){return S.emit("updateMyMedia",{type:"video",currentMediaStatus:!e}),h.getVideoTracks()[0].enabled=!e,!e}))},myMicStatus:te,userMicStatus:ie,updateMic:function(){ne((function(e){return S.emit("updateMyMedia",{type:"mic",currentMediaStatus:!e}),h.getAudioTracks()[0].enabled=!e,!e}))}},children:t})},k=j.a.Search,M=function(){var e=Object(a.useContext)(u),t=e.call,n=e.callAccepted,c=e.myVideo,i=e.userVideo,s=e.stream,o=e.name,r=e.callEnded,j=e.sendMsg,y=e.msgRcv,C=e.chat,_=e.setChat,N=e.userName,M=e.myVdoStatus,I=e.userVdoStatus,R=e.updateVideo,A=e.myMicStatus,E=e.userMicStatus,V=e.updateMic,U=Object(a.useState)(""),D=Object(d.a)(U,2),B=D[0],T=D[1],P=Object(a.useState)(!1),W=Object(d.a)(P,2),F=W[0],L=W[1];S.on("msgRcv",(function(e){e.name;var t=e.msg,n=e.sender,a={};a.msg=t,a.type="rcv",a.sender=n,a.timestamp=Date.now(),_([].concat(Object(l.a)(C),[a]))}));var z=Object(a.useRef)();Object(a.useEffect)((function(){(null===z||void 0===z?void 0:z.current)&&z.current.scrollIntoView({behavior:"smooth"})}),[C]);var J=function(e){L(e)};return Object(a.useEffect)((function(){y.value&&!F&&b.a.open({message:"",description:"".concat(y.sender,": ").concat(y.value),icon:Object(w.jsx)(p.a,{style:{color:"#108ee9"}})})}),[y]),Object(w.jsxs)("div",{className:"grid",children:[s?Object(w.jsxs)("div",{style:{textAlign:"center"},className:"card",id:n&&!r?"video1":"video3",children:[Object(w.jsx)("div",{style:{height:"2rem"},children:Object(w.jsx)("h3",{children:M&&o})}),Object(w.jsxs)("div",{className:"video-avatar-container",children:[Object(w.jsx)("video",{playsInline:!0,muted:!0,ref:c,autoPlay:!0,className:"video-active",style:{opacity:"".concat(M?"1":"0"),transform:"scaleX(-1)"}}),Object(w.jsx)(m.a,{style:{backgroundColor:"#116",position:"absolute",opacity:"".concat(M?"-1":"2")},size:98,icon:!o&&Object(w.jsx)(x.a,{}),children:o})]}),Object(w.jsxs)("div",{className:"iconsDiv",children:[Object(w.jsx)("div",{className:"icons",onClick:function(){V()},tabIndex:"0",children:Object(w.jsx)("i",{className:"fa fa-microphone".concat(A?"":"-slash"),style:{transform:"scaleX(-1)"},"aria-label":"".concat(A?"mic on":"mic off"),"aria-hidden":"true"})}),n&&!r&&Object(w.jsx)("div",{className:"icons",onClick:function(){L(!F)},tabIndex:"0",children:Object(w.jsx)("img",{src:g,alt:"chat icon"})}),Object(w.jsxs)(f.a,{title:"Chat",footer:null,visible:F,onOk:function(){return J(!1)},onCancel:function(){return J(!1)},style:{maxHeight:"100px"},children:[C.length?Object(w.jsxs)("div",{className:"msg_flex",children:[C.map((function(e){return Object(w.jsx)("div",{className:"sent"===e.type?"msg_sent":"msg_rcv",children:e.msg})})),Object(w.jsx)("div",{ref:z,id:"no_border"})]}):Object(w.jsx)("div",{className:"chat_img_div",children:Object(w.jsx)("img",{src:v,alt:"msg_illus",className:"img_illus"})}),Object(w.jsx)(k,{placeholder:"your message",allowClear:!0,className:"input_msg",enterButton:"Send \ud83d\ude80",onChange:function(e){return T(e.target.value)},value:B,size:"large",onSearch:function(e){e&&e.length&&j(e),T("")}})]}),Object(w.jsx)("div",{className:"icons",onClick:function(){return R()},tabIndex:"0",children:M?Object(w.jsx)("img",{src:h,alt:"video on icon"}):Object(w.jsx)("img",{src:O,alt:"video off icon"})})]})]}):Object(w.jsxs)("div",{className:"bouncing-loader",children:[Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{})]}),n&&!r&&i&&Object(w.jsxs)("div",{className:"card2",style:{textAlign:"center"},id:"video2",children:[Object(w.jsx)("div",{style:{height:"2rem"},children:Object(w.jsx)("h3",{children:I&&(t.name||N)})}),Object(w.jsxs)("div",{className:"video-avatar-container",children:[Object(w.jsx)("video",{playsInline:!0,ref:i,autoPlay:!0,className:"video-active",style:{opacity:"".concat(I?"1":"0")}}),Object(w.jsx)(m.a,{style:{backgroundColor:"#116",position:"absolute",opacity:"".concat(I?"-1":"2")},size:98,icon:!(N||t.name)&&Object(w.jsx)(x.a,{}),children:N||t.name}),!E&&Object(w.jsx)("i",{style:{position:"absolute",top:"0",left:"0",padding:"0.3rem",backgroundColor:"#fefefebf"},className:"fad fa-volume-mute fa-2x","aria-hidden":"true","aria-label":"microphone muted"})]})]})]})},I=n(48),R=n(141),A=n(144),E=n.p+"static/media/phone.8cb1f203.gif",V=n.p+"static/media/teams.23d1d865.mp3",U=n(30),D=n(137),B=n.p+"static/media/hang.23b0f707.svg",T=n(218),P=n(94),W=n(219),F=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!1),s=Object(d.a)(i,2),o=s[0],r=s[1],l=Object(a.useRef)(),b=Object(a.useContext)(u),m=b.call,h=b.callAccepted,O=b.name,v=b.setName,g=b.callEnded,p=b.me,y=b.callUser,C=b.leaveCall,_=b.answerCall,S=(b.otherUser,b.setOtherUser),N=b.leaveCall1;Object(a.useEffect)((function(){var e,t;o?null===l||void 0===l||null===(t=l.current)||void 0===t||t.play():null===l||void 0===l||null===(e=l.current)||void 0===e||e.pause()}),[o]);return Object(a.useEffect)((function(){m.isReceivingCall&&!h?(r(!0),S(m.from)):r(!1)}),[m.isReceivingCall]),Object(w.jsxs)("div",{className:U.options,children:[Object(w.jsxs)("div",{style:{marginBottom:"0.5rem"},children:[Object(w.jsx)("h2",{children:"Account Info"}),Object(w.jsx)(j.a,{size:"large",placeholder:"Your name",prefix:Object(w.jsx)(x.a,{}),maxLength:15,suffix:Object(w.jsxs)("small",{children:[O.length,"/15"]}),value:O,onChange:function(e){v(e.target.value),localStorage.setItem("name",e.target.value)},className:U.inputgroup}),Object(w.jsx)("div",{className:U.share_options,children:Object(w.jsx)(D.CopyToClipboard,{text:p,children:Object(w.jsx)(I.a,{type:"primary",icon:Object(w.jsx)(T.a,{}),className:U.btn,tabIndex:"0",onClick:function(){return R.b.success("Code copied successfully!")},children:"Copy code"})})})]}),Object(w.jsxs)("div",{style:{marginBottom:"0.5rem"},children:[Object(w.jsx)("h2",{children:"Make a call"}),Object(w.jsx)(j.a,{placeholder:"Enter code to call",size:"large",className:U.inputgroup,value:n,onChange:function(e){return c(e.target.value)},style:{marginRight:"0.5rem",marginBottom:"0.5rem"},prefix:Object(w.jsx)(x.a,{className:"site-form-item-icon"}),suffix:Object(w.jsx)(A.a,{title:"Enter code of the other user",children:Object(w.jsx)(P.a,{style:{color:"rgba(0,0,0,.45)"}})})}),h&&!g?Object(w.jsxs)(I.a,{variant:"contained",onClick:C,className:U.hang,tabIndex:"0",children:[Object(w.jsx)("img",{src:B,alt:"hang up",style:{height:"15px"}}),"\xa0 Hang up"]}):Object(w.jsx)(I.a,{type:"primary",icon:Object(w.jsx)(W.a,{}),onClick:function(){O.length?y(n):R.b.error("Please enter your name to call!")},className:U.btn,tabIndex:"0",children:"Call"})]}),m.isReceivingCall&&!h&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("audio",{src:V,loop:!0,ref:l}),Object(w.jsxs)(f.a,{title:"Incoming Call",visible:o,onOk:function(){r(!1)},onCancel:function(){r(!1),N(),window.location.reload()},footer:null,children:[Object(w.jsx)("div",{style:{display:"flex",justifyContent:"space-around"},children:Object(w.jsxs)("h1",{children:[m.name," is calling you:"," ",Object(w.jsx)("img",{src:E,alt:"phone ringing",className:U.phone,style:{display:"inline-block"}})]})}),Object(w.jsxs)("div",{className:U.btnDiv,children:[Object(w.jsx)(I.a,{variant:"contained",className:U.answer,color:"#29bb89",icon:Object(w.jsx)(W.a,{}),onClick:function(){_(),l.current.pause()},tabIndex:"0",children:"Answer"}),Object(w.jsx)(I.a,{variant:"contained",className:U.decline,icon:Object(w.jsx)(W.a,{}),onClick:function(){r(!1),l.current.pause()},tabIndex:"0",children:"Decline"})]})]})]})]})},L=function(){return Object(a.useEffect)((function(){navigator.onLine||alert("Connect to internet!")}),[navigator]),Object(w.jsx)(N,{children:Object(w.jsxs)("div",{className:"App",style:{height:"100%",width:"100%"},children:[Object(w.jsx)(M,{}),Object(w.jsx)(F,{})]})})},z=(n(205),n(206),n(207),function(){return Object(w.jsx)("footer",{className:"footer",children:"Made with \u2764\ufe0f By Mrutyunjay Dash"})}),J=function(){return Object(w.jsxs)(o.a,{children:[Object(w.jsx)(r.c,{children:Object(w.jsx)(r.a,{path:"/",component:L})}),Object(w.jsx)(z,{})]})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,220)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))},X=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(J,{})}),document.getElementById("root")),H(),function(e){if("serviceWorker"in navigator){if(new URL("/video-chat",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/video-chat","/service-worker.js");X?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Y(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Y(t,e)}))}}()},30:function(e,t,n){e.exports={options:"Options_options__2a0J0",btn:"Options_btn__OywNB",inputgroup:"Options_inputgroup__1l-0O",btnDiv:"Options_btnDiv__3kllF",phone:"Options_phone__2v2cs",answer:"Options_answer__5FqDG",decline:"Options_decline__3Awip",hang:"Options_hang__1sObD",share_options:"Options_share_options__7hIVf",share_social:"Options_share_social__3yo-E",share_icon:"Options_share_icon__1JYen"}}},[[211,1,2]]]);
//# sourceMappingURL=main.a01630d1.chunk.js.map