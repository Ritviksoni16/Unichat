(this["webpackJsonpunichat-template"]=this["webpackJsonpunichat-template"]||[]).push([[0],{116:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),i=a.n(r),o=(a(60),a(23)),u=a(4),l=a(17),s=a(13),p=a.n(s),d=(a(63),p.a.initializeApp({apiKey:"AIzaSyB-MILN_84Hsk-iK9YVWrI9kGBxc4eT5FM",authDomain:"unichat-778e0.firebaseapp.com",projectId:"unichat-778e0",storageBucket:"unichat-778e0.appspot.com",messagingSenderId:"388136547242",appId:"1:388136547242:web:edd3c6a482a9b2ef7131d3"}).auth()),E=c.a.createContext(),m=function(e){var t=e.children,a=Object(n.useState)(!0),r=Object(l.a)(a,2),i=r[0],o=r[1],s=Object(n.useState)(null),p=Object(l.a)(s,2),m=p[0],h=p[1],f=Object(u.f)();Object(n.useEffect)((function(){d.onAuthStateChanged((function(e){h(e),o(!1),e&&f.push("/chats")}))}),[m,f]);var _={user:m};return c.a.createElement(E.Provider,{value:_},!i&&t)},h=a(18),f=a.n(h),_=a(33),b=a(53),v=a(3),g=a.n(v),O=function(){var e=Object(u.f)(),t=Object(n.useContext)(E).user,a=Object(n.useState)(!0),r=Object(l.a)(a,2),i=r[0],o=r[1];console.log(t);var s=function(){var t=Object(_.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.signOut();case 2:e.push("/");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var e=Object(_.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.blob();case 5:return n=e.sent,e.abrupt("return",new File([n],"userPhoto.jpg",{type:"image/jpeg"}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){t?g.a.get("https://api.chatengine.io/users/me",{headers:{"project-id":Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_CHAT_ENGINE_KEY:"83c9af00-4e6d-497e-8ef0-aef10d24e35b",REACT_APP_CHAT_EGINE_ID:"388bc802-f12a-470f-9c71-a711b12a3c9e"}).REACT_APP_CHAT_ENGINE_ID,"user-name":t.email,"user-secret":t.uid}}).then((function(){o(!1)})).catch((function(){var e=new FormData;e.append("email",t.email),e.append("username",t.email),e.append("secret",t.uid),p(t.photoURL).then((function(t){e.append("avatar",t,t.name),g.a.post("https://api.chatengine.io/users/",e,{headers:{"private-key":"83c9af00-4e6d-497e-8ef0-aef10d24e35b"}}).then((function(){return o(!1)})).catch((function(e){return console.log(e)}))}))})):e.push("/")}),[t,e]),!t||i?"Loading ...":c.a.createElement("div",{className:"chats-page"},c.a.createElement("div",{className:"nav-bar"},c.a.createElement("div",{className:"logo-tab"},"Unichat"),c.a.createElement("div",{onClick:s,className:"logout-tab"},"LogOut")),c.a.createElement(b.d,{height:"calc(100vh - 66px)",projectID:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_CHAT_ENGINE_KEY:"83c9af00-4e6d-497e-8ef0-aef10d24e35b",REACT_APP_CHAT_EGINE_ID:"388bc802-f12a-470f-9c71-a711b12a3c9e"}).REACT_APP_CHAT_ENGINE_ID,userName:t.email,userSecret:t.uid}))},A=a(118),C=a(119),T=function(){return c.a.createElement("div",{id:"login-page"},c.a.createElement("div",{id:"login-card"},c.a.createElement("h2",null,"Welcome to the Unichat!!"),c.a.createElement("div",{className:"login-button google",onClick:function(){return d.signInWithRedirect(new p.a.auth.GoogleAuthProvider)}},c.a.createElement(A.a,null)," SignIn with Google"),c.a.createElement("br",null)," ",c.a.createElement("br",null),c.a.createElement("div",{className:"login-button facebook",onClick:function(){return d.signInWithRedirect(new p.a.auth.FacebookAuthProvider)}},c.a.createElement(C.a,null)," SignIn with Facebook")))};var I=function(){return c.a.createElement("div",{style:{fontFamily:"Avenir"}},c.a.createElement(o.a,null,c.a.createElement(m,null,c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/chats",component:O}),c.a.createElement(u.a,{path:"/",component:T})))))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(I,null)),document.getElementById("root"))},55:function(e,t,a){e.exports=a(116)},60:function(e,t,a){}},[[55,1,2]]]);
//# sourceMappingURL=main.bbb2fdf0.chunk.js.map