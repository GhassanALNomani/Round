(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{164:function(e,t,c){},380:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(23),r=c.n(a),l=(c(164),c(86)),i=c.n(l),o=c(147),j=c(9),d=(c(91),c(16)),b=c(388),u=c(385),h=c(386),m=c(154),O=c(389),x=c(387),g=c(12),p=c.n(g),f=c(21),y=c(26),v=c(2),N=y.a({name:y.b().required("Enter your Name please"),email:y.b().required("Enter your email please").email("example@example.com"),password:y.b().required("Enter your passwor please!!").min(8,"must be more than 8").max(20,"whatEver")});function w(e){var t=Object(d.g)(),c=Object(n.useState)({name:"",lastName:"",image:"",email:"",password:""}),s=Object(j.a)(c,2),a=s[0],r=(s[1],Object(n.useState)(!0)),l=Object(j.a)(r,2),i=l[0],o=l[1];return Object(v.jsxs)(v.Fragment,{children:[!i&&Object(v.jsx)(b.a,{variant:"danger",children:"The email is already in use. Please change the email"}),Object(v.jsx)(f.d,{initialValues:a,validationSchema:N,onSubmit:function(e){return function(e){p.a.post("http://localhost:5000/api/user/signup",e).then((function(e){e.data.user?t.push("/login"):(o(!1),setTimeout((function(){o(!0)}),3e3))})).catch((function(e){return console.log(e)}))}(e)},children:Object(v.jsx)(f.c,{className:"mt-5",children:Object(v.jsx)(u.a,{style:{width:"1000px",margin:"0 auto"},children:Object(v.jsx)(h.a,{className:"justify-content-center mt-5",children:Object(v.jsxs)(m.a,{md:8,children:[Object(v.jsx)(O.a.Row,{children:Object(v.jsxs)(m.a,{md:6,children:[Object(v.jsx)(O.a.Label,{children:"Name"}),Object(v.jsx)(O.a.Control,{as:f.b,placeholder:"Enter Your Name",name:"name"}),Object(v.jsx)(f.a,{name:"name",render:function(e){return Object(v.jsx)(b.a,{variant:"danger",children:e})}})]})}),Object(v.jsx)(O.a.Row,{children:Object(v.jsxs)(m.a,{md:6,children:[Object(v.jsx)(O.a.Label,{children:"Email"}),Object(v.jsx)(O.a.Control,{as:f.b,placeholder:"Enter Your Email",name:"email"}),Object(v.jsx)(f.a,{name:"email",render:function(e){return Object(v.jsx)(b.a,{variant:"danger",children:e})}})]})}),Object(v.jsx)(O.a.Row,{children:Object(v.jsxs)(m.a,{md:6,children:[Object(v.jsx)(O.a.Label,{children:"Password"}),Object(v.jsx)(O.a.Control,{as:f.b,placeholder:"Enter Your Password",name:"password",type:"password"}),Object(v.jsx)(f.a,{name:"password",render:function(e){return Object(v.jsx)(b.a,{variant:"danger",children:e})}})]})}),Object(v.jsx)(x.a,{variant:"info",type:"submit",style:{textAlign:"center"},children:"Submit"})]})})})})})]})}var C=c(18),S=c(19),k=c(4);function E(e){var t=Object(d.g)();return Object(v.jsx)("div",{children:Object(v.jsx)("header",{children:Object(v.jsxs)(k.v,{style:{backgroundColor:"#a9dceb"},dark:!0,expand:"md",children:["                    ",Object(v.jsx)(k.w,{href:"/",children:Object(v.jsx)("strong",{})}),Object(v.jsxs)(k.x,{left:!0,style:{fontSize:"25px"},children:[Object(v.jsx)(k.t,{active:!0,children:Object(v.jsxs)(k.u,{to:"/",style:{color:"black"},children:[Object(v.jsx)(k.p,{icon:"home"})," \u210d\ud835\udd60\ud835\udd5e\ud835\udd56"]})}),Object(v.jsx)(k.t,{children:Object(v.jsxs)(k.u,{to:"/aboutus",style:{color:"black"},children:[" ",Object(v.jsx)(k.p,{icon:"info"})," \ud835\udd38\ud835\udd53\ud835\udd60\ud835\udd66\ud835\udd65 \ud835\udd66\ud835\udd64"]})})]}),e.isLoggedIn?Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(k.x,{right:!0,style:{fontSize:"25px"},children:[Object(v.jsx)(k.t,{children:Object(v.jsxs)(k.u,{to:"/profile",style:{color:"black"},children:[Object(v.jsx)(k.p,{far:!0,icon:"user"})," \u2119\ud835\udd63\ud835\udd60\ud835\udd57\ud835\udd5a\ud835\udd5d\ud835\udd56 "]})}),Object(v.jsx)(k.t,{onClick:function(){return console.log("Logging Out!"),localStorage.removeItem("jwtToken"),e.loginCallback(),void t.push("/")},children:Object(v.jsxs)(k.u,{to:"/logout",style:{color:"black"},children:[" ",Object(v.jsx)(k.p,{icon:"sign-out-alt"})," \ud835\udd43\ud835\udd60\ud835\udd58\ud835\udd60\ud835\udd66\ud835\udd65 "]})})]})}):Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(k.x,{right:!0,style:{fontSize:"25px"},children:[Object(v.jsx)(k.t,{children:Object(v.jsxs)(k.u,{to:"/signup",style:{color:"black"},children:[Object(v.jsx)(k.p,{icon:"user-plus"})," \ud835\udd4a\ud835\udd5a\ud835\udd58\ud835\udd5f\ud835\udd66\ud835\udd61 "]})}),Object(v.jsx)(k.t,{children:Object(v.jsxs)(k.u,{to:"/login",style:{color:"black"},children:[" ",Object(v.jsx)(k.p,{icon:"sign-in-alt"})," \ud835\udd43\ud835\udd60\ud835\udd58\ud835\udd5a\ud835\udd5f "]})})]})})]})})})}function I(e){var t=Object(n.useState)(!0),c=Object(j.a)(t,2),s=c[0],a=c[1],r=Object(d.g)(),l=Object(n.useState)({email:"",password:""}),i=Object(j.a)(l,2),o=i[0],b=i[1],u=function(e){var t=e.target,c=t.name,n=t.value;b(Object(S.a)(Object(S.a)({},o),{},Object(C.a)({},c,n)))};return Object(v.jsxs)(v.Fragment,{children:[!s&&Object(v.jsx)(k.b,{color:"danger",children:"The email address or password is incorrect. Please retry..."}),Object(v.jsx)("div",{children:Object(v.jsx)(k.k,{style:{height:"100%",width:"100%",paddingTop:"10rem"},className:"mt-2  d-flex justify-content-center align-items-center",children:Object(v.jsx)(k.j,{md:"6",xl:"5",className:"mb-4",children:Object(v.jsx)(k.c,{type:"fadeInRight",delay:".3s",children:Object(v.jsxs)(k.e,{id:"classic-card",children:[Object(v.jsx)("h1",{className:"text-center mt-5",children:"\ud835\udd43\ud835\udd60\ud835\udd58 \ud835\udd40\ud835\udd5f"}),Object(v.jsxs)(k.f,{className:"white-text",children:[Object(v.jsx)("hr",{className:"hr-light"}),Object(v.jsx)(k.r,{label:"Your email",icon:"envelope",type:"email",name:"email",onChange:function(e){return u(e)}}),Object(v.jsx)(k.r,{label:"Your password",icon:"lock",type:"password",name:"password",onChange:function(e){return u(e)}}),Object(v.jsx)("div",{className:"text-center mt-4 black-text ",children:Object(v.jsx)(k.d,{gradient:"deep-blue",onClick:function(t){return t.preventDefault(),void p.a.post("http://localhost:5000/api/user/login",o).then((function(t){console.log("Express backend /login response",t);var c=t.data.token,n=t.data.msg;c?(localStorage.setItem("jwtToken",c),e.loginCallback(),alert("Logged in successfully, Welcome"),r.push("/profile")):(console.log("Login error: ",n),a(!1))}))},children:" Log In"})}),Object(v.jsxs)("div",{className:"text-center",children:[Object(v.jsx)("h4",{children:"New User?"}),Object(v.jsx)(k.s,{to:"/signup",children:"Sign Up"})]})]})]})})})})})]})}var P=c(63),L=c.n(P),T=(c(308),c(13)),U=function(e){var t,c,s,a=Object(n.useState)([]),r=Object(j.a)(a,2),l=r[0],i=r[1],o=Object(n.useState)(!1),d=Object(j.a)(o,2),b=d[0],u=d[1];Object(n.useEffect)((function(){p.a.get("http://localhost:5000/api/place").then((function(e){i(e.data.result),console.log("place info:",l)}))}),[b]);var h=l.map((function(e){return Object(v.jsx)(k.j,{className:"",md:"4",style:{maxWidth:"40rem"},children:Object(v.jsxs)(k.e,{reverse:!0,className:"cardPadding",children:[Object(v.jsx)(k.g,{cascade:!0,style:{height:"20rem",width:"100%"},src:e.image}),Object(v.jsxs)(k.f,{cascade:!0,className:"text-center",children:[Object(v.jsx)(k.i,{children:e.name}),Object(v.jsx)(T.b,{to:"/edit/".concat(e._id),children:Object(v.jsxs)(k.d,{style:{fontSize:"15px",fontWeight:"bold",color:"black"},gradient:"deep-blue",children:[Object(v.jsx)(k.p,{icon:"edit",className:"iconsStyle "}),"Edit"]})}),Object(v.jsxs)(k.d,{onClick:function(){return t=e._id,console.log("Delete",t),p.a.delete("http://localhost:5000/api/place/".concat(t)).then((function(e){console.log("delete data ",e),alert("Deleted successfully")})).catch((function(e){return console.log(e)})),void u((function(e){return!e}));var t},style:{fontSize:"15px",fontWeight:"bold",color:"black"},gradient:"deep-blue",children:[Object(v.jsx)(k.p,{icon:"trash-alt",className:"iconsStyle "})," Delete"]})]})]})})}));return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(k.k,{children:"admin@admin.com"===e.user.email?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("h2",{className:"headerStyleAdmin",children:[Object(v.jsx)(k.p,{icon:"user-secret",className:"iconsStyle mb-3"}),"Admin Profile"]}),Object(v.jsx)(k.A,{className:"styleProfile",children:Object(v.jsxs)(T.c,(t={to:"/create",activeClassName:"activeClass",style:{fontSize:"40px"}},Object(C.a)(t,"style",{color:"#a9dceb"}),Object(C.a)(t,"className","createHover"),Object(C.a)(t,"children",[Object(v.jsx)(k.p,{far:!0,icon:"plus-square",className:"iconsStyle fixPadding iconsCreateStyle"}),Object(v.jsx)("span",{className:"iconsCreateStyle",children:"Create"})]),t))}),Object(v.jsx)(k.A,{children:h})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("h2",{className:"headerStyleAdmin",children:[Object(v.jsx)(k.p,{icon:"user-circle",className:"iconsStyle mb-3"}),"User Profile : ",e.auth.currentUser.name]}),Object(v.jsxs)(k.A,{className:"styleProfile stylePaddingUser",children:[Object(v.jsxs)(T.c,(c={to:"/tables",activeClassName:"activeClass",style:{fontSize:"40px"}},Object(C.a)(c,"style",{color:"#a9dceb"}),Object(C.a)(c,"className","createHover styleBorder"),Object(C.a)(c,"children",[Object(v.jsx)(k.p,{fab:!0,icon:"gratipay",className:"iconsStyle fixPadding iconsCreateStyle"}),Object(v.jsx)("span",{className:"iconsCreateStyle styleText",children:"Favorite Place"})]),c)),Object(v.jsxs)(T.c,(s={to:"/edituserinfo/".concat(e.user._id),activeClassName:"activeClass",style:{fontSize:"40px"}},Object(C.a)(s,"style",{color:"#a9dceb"}),Object(C.a)(s,"className","createHover"),Object(C.a)(s,"children",[Object(v.jsx)(k.p,{icon:"user-edit",className:"iconsStyle fixPadding iconsCreateStyle"}),Object(v.jsx)("span",{className:"iconsCreateStyle",children:"Edit User Information"})]),s))]})]})})})};function F(e){var t=!0;for(var c in e)" "==e[c]&&(t=!1);return t}function A(e){console.log(e);var t=Object(d.g)(),c=Object(n.useState)(new Date),s=Object(j.a)(c,2),a=s[0],r=s[1],l=Object(n.useState)({name:" ",description:" ",image:" ",category:"Choose the place",location:" ",workingHours:" "}),i=Object(j.a)(l,2),o=i[0],b=i[1],u=function(e){var t=e.target,c=t.name,n=t.value;b(Object(S.a)(Object(S.a)({},o),{},Object(C.a)({},c,n))),console.log(o)};return Object(v.jsx)(v.Fragment,{children:null!=e.user&&"admin@admin.com"==e.user.email?Object(v.jsx)("div",{className:"classicformpage",children:Object(v.jsx)(k.k,{style:{height:"100%",width:"100%",paddingTop:"10rem"},className:"mt-5  d-flex justify-content-center align-items-center",children:Object(v.jsx)(k.j,{md:"6",xl:"5",className:"mb-4",children:Object(v.jsx)(k.c,{type:"fadeInRight",delay:".3s",children:Object(v.jsxs)(k.e,{id:"classic-card",children:[Object(v.jsxs)("h1",{className:"text-center mt-5",children:[Object(v.jsx)(k.p,{icon:""}),"\u2102\u211d\ud835\udd3c\ud835\udd38\ud835\udd4b\ud835\udd3c"]}),Object(v.jsxs)(k.f,{className:"white-text",children:[Object(v.jsx)("hr",{className:"hr-light"}),Object(v.jsx)(k.r,{label:"Name",name:"name",onChange:function(e){return u(e)}}),Object(v.jsx)(k.r,{label:"Description",name:"description",onChange:function(e){return u(e)}}),Object(v.jsx)(k.r,{label:"Image",name:"image",onChange:function(e){return u(e)}}),Object(v.jsx)(k.r,{label:"Location",name:"location",onChange:function(e){return u(e)}}),Object(v.jsx)(k.r,{label:"working Hours",name:"workingHours",onChange:function(e){return u(e)}}),Object(v.jsx)(L.a,{name:"date",selected:a,onChange:function(e){return function(e){r(e),b((function(t){return Object(S.a)(Object(S.a)({},t),{},{date:e})}))}(e)}}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsxs)("select",{className:"browser-default custom-select",name:"category",onChange:function(e){return u(e)},children:[Object(v.jsx)("option",{children:"Choose the place"}),Object(v.jsx)("option",{children:"cafe"}),Object(v.jsx)("option",{children:"restaurant"}),Object(v.jsx)("option",{children:"entertainment"}),Object(v.jsx)("option",{children:"concert"})]}),Object(v.jsx)("div",{className:"text-center mt-4 black-text",children:Object(v.jsx)(k.d,{gradient:"blue",onClick:function(e){return function(e){console.log(o),e.preventDefault(),console.log(F(o)),F(o)?p.a.post("http://localhost:5000/api/place/create",o).then((function(e){var c=e.data;console.log("response data: ",e.data),c?(alert("Place added successfully"),t.push("/")):alert("Error! check your information and try again")})).catch((function(e){return console.log(e)})):alert("somting is missing ! ")}(e)},children:"Submit"})})]})]})})})})}):Object(v.jsx)("div",{children:Object(v.jsx)(k.k,{children:Object(v.jsx)("h1",{className:"text-justify",style:{fontSize:"25px"},children:"Only the admin can access this page"})})})})}var D=c(159),_=c.n(D);function R(e){var t=Object(n.useState)([]),c=Object(j.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(!1),l=Object(j.a)(r,2),i=l[0],o=l[1],b=Object(n.useState)(5),u=Object(j.a)(b,2),h=u[0],m=u[1],O=Object(n.useState)(!0),x=Object(j.a)(O,2),g=x[0],f=(x[1],Object(n.useState)({})),y=Object(j.a)(f,2),N=y[0],w=y[1],E=Object(n.useState)(!1),I=Object(j.a)(E,2),P=I[0],L=I[1],T=Object(d.h)().id,U=e.selectPlace;Object(n.useEffect)((function(){p.a.get("http://localhost:5000/api/place/".concat(T)).then((function(e){a(e.data.pros),console.log("place info for comment",s);var t=e.data.pros;console.log(t);var c=t.reviews.reduce((function(e,t){return e+(t.score||0)}),0);t.reviews.length>0&&m(c/t.reviews.length),console.log("place info",t)}))}),[P]);var F=s.comments&&s.comments.map((function(e){return Object(v.jsx)("p",{children:e.text})}));return Object(v.jsxs)("div",{children:[!g&&Object(v.jsx)(k.b,{color:"danger",children:"adedd to place List"}),Object(v.jsx)(k.k,{style:{height:"100%",width:"100%",paddingTop:"10rem"},className:"mt-5  d-flex justify-content-center align-items-center",children:Object(v.jsxs)(k.A,{children:[Object(v.jsx)(k.j,{style:{maxWidth:"40rem"},children:Object(v.jsxs)(k.e,{reverse:!0,children:[Object(v.jsx)(k.g,{style:{height:"20rem",width:"100%"},className:"cardPhoto",cascade:!0,src:s.image}),Object(v.jsxs)(k.f,{cascade:!0,className:"text-center",children:[Object(v.jsx)(k.i,{children:s.name}),Object(v.jsx)("h5",{className:"indigo-text",children:Object(v.jsx)("strong",{children:s.category})}),Object(v.jsx)(k.h,{children:s.description}),Object(v.jsxs)(k.d,{outline:!0,color:"dark",onClick:function(){console.log("placeId = ",U._id),console.log("userId = ",e.user._id),p.a.post("http://localhost:5000/place/tovisit",{placeId:U._id,userId:e.user._id}).then((function(t){e.setAuth((function(e){return Object(S.a)(Object(S.a)({},e),{},{currentUser:Object(S.a)(Object(S.a)({},e.currentUser),{},{placesToVisit:t.data.placesToVisit})})})),console.log(t)}))},children:[" ","Add To List"]}),i&&Object(v.jsxs)("div",{style:{color:"#C70039"},children:["Error! already reviewed",Object(v.jsx)("span",{class:"gradient"}),Object(v.jsx)("span",{class:"spotlight"})]}),Object(v.jsx)(_.a,{count:5,value:h,onChange:function(e){m(e)},size:24,color2:"#ffd700"}),Object(v.jsx)(k.d,{style:{backgroundColor:"black",margin:"10px"},size:"md",onClick:function(){if(e.isLoggedIn){var t={userId:e.user._id,score:h,userName:e.user.name,productId:T};p.a.post("http://localhost:5000/api/place/review",t).then((function(e){console.log(e),console.log("reviewd done"),"Error! you already reviewed"==e.data&&o(!0)}))}else console.log("Login first")},children:"Review"})]})]})}),Object(v.jsxs)(k.j,{lg:"6",style:{width:"900px"},children:[Object(v.jsx)("h2",{children:"Join the Discussion!"}),Object(v.jsxs)("form",{children:[Object(v.jsx)("div",{className:"grey-text",children:Object(v.jsx)(k.r,{type:"textarea",rows:"2",label:"Your Comment",name:"text",icon:"pencil-alt",onChange:function(e){return function(e){var t=e.target,c=t.name,n=t.value;w(Object(S.a)(Object(S.a)({},N),{},Object(C.a)({},c,n))),console.log("comment",N)}(e)}})}),Object(v.jsxs)("div",{className:"text-center",children:[Object(v.jsxs)(k.d,{outline:!0,color:"secondary",onClick:function(t){t.preventDefault(),p.a.post("http://localhost:5000/api/comment/".concat(s._id,"/").concat(e.user._id),N).then((function(e){console.log("comment info",e)})).catch((function(e){return console.log(e)})),L((function(e){return!e}))},children:["Comment",Object(v.jsx)(k.p,{far:!0,icon:"paper-plane",className:"ml-1"})]}),Object(v.jsx)("div",{className:"grey-text",children:F})]})]})]})]})})]})}function q(e){var t=Object(n.useState)([]),c=Object(j.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)([]),l=Object(j.a)(r,2),i=l[0],o=l[1],d=Object(n.useState)(),b=Object(j.a)(d,2),u=(b[0],b[1]),h=Object(n.useState)([]),m=Object(j.a)(h,2),O=m[0],x=m[1];Object(n.useEffect)((function(){p.a.get("http://localhost:5000/api/place").then((function(e){a(e.data.result),x(e.data.result),console.log("Places info:",s);var t=e.data.result.map((function(e){return e.category}));t.unshift("All Places"),o(Array.from(new Set(t)))}))}),[]);var g=O.map((function(e){return Object(v.jsx)(T.b,{to:"/show/".concat(e._id),children:Object(v.jsx)(k.j,{className:"placeItem",md:"4",style:{maxWidth:"20rem"},children:Object(v.jsxs)(k.e,{reverse:!0,children:[Object(v.jsx)(k.g,{className:"cardPhoto",cascade:!0,style:{height:"20rem",width:"100%"},src:e.image}),Object(v.jsxs)(k.f,{cascade:!0,className:"text-center",children:[Object(v.jsx)(k.i,{children:e.name}),Object(v.jsxs)("p",{children:["Read more",Object(v.jsx)(k.p,{icon:"angle-double-right",className:"ml-2"})]})]})]})})})})),f=i.map((function(e){return Object(v.jsx)(k.m,{onClick:function(){return function(e){console.log("onChangeHandler");var t=e;if(console.log(t),u(t),"All Places"==t)x(s);else{var c=s.filter((function(e){return e.category==t}));x(c)}}(e)},children:e})}));return Object(v.jsxs)("div",{className:"home",children:[Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("h1",{className:"dark-text mt-3  d-flex justify-content-center align-items-center ",children:"\u211d\ud835\udd46\ud835\udd4c\u2115\ud835\udd3b"}),Object(v.jsxs)(k.l,{style:{height:"100%",width:"100%",paddingTop:"10rem"},className:"mt-5  d-flex justify-content-center align-items-center ",children:[Object(v.jsx)(k.o,{caret:!0,className:"mt-3",gradient:"deep-blue",style:{color:"black"},children:"Where - 2 - Go"}),Object(v.jsxs)(k.n,{basic:!0,children:[Object(v.jsx)(k.m,{header:!0,children:" Jeddah Places"}),f]})]}),Object(v.jsx)(k.A,{className:"placesContainer",style:{margin:"0 auto"},children:g})]})}function z(e){return e.auth.isLoggedIn?Object(v.jsx)(d.b,{children:Object(v.jsx)(U,{setAuth:e.setAuth,auth:e.auth,user:e.user,userProfile:e.userProfile,setUserProfile:e.setUserProfile})}):Object(v.jsx)(d.b,{children:Object(v.jsx)(d.a,{to:"/"})})}var H=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h1",{children:"About Us"}),Object(v.jsx)("br",{}),Object(v.jsx)("h2",{children:"Team Final-Battle"})]})},G=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"footer",children:Object(v.jsxs)("footer",{className:"footer-txt",children:["\xa9 Copyright 2021. ",Object(v.jsx)("a",{href:"https://git.generalassemb.ly/Finall-Battle/final_battle",children:"Final-Battle "})," Team"]})})})};y.a({name:y.b().required("Name is required"),email:y.b().email("Email is invalid").required("Email is required"),password:y.b(),confirmPassword:y.b().test("passwords-match","Passwords must match ",(function(e){return this.parent.password===e})),img:y.b().required("This Field is Required")});function W(e){Object(d.g)();var t=Object(n.useState)(e.user),c=Object(j.a)(t,2),s=c[0],a=c[1],r=Object(d.h)().id;console.log(e);var l={name:s.name,email:s.email,password:"",confirmPassword:"",img:s.img};console.log("User const ==>",l);return Object(v.jsx)(v.Fragment,{children:s.name&&"admin@admin.com"==s.email?Object(v.jsx)(T.b,{to:"/create",children:"\u2102\u211d\ud835\udd3c\ud835\udd38\ud835\udd4b\ud835\udd3c"}):Object(v.jsx)(f.d,{initialValues:s,onSubmit:function(t){return function(t){p.a.post("http://localhost:5000/api/user/edituserinfo/".concat(r),t).then((function(c){console.log("res.data.user from profile update: ",c.data.user),e.setUserProfile(t);var n={name:t.name,email:t.email};a(n)})).catch((function(e){return console.log(e)}))}(t)},children:Object(v.jsx)(f.c,{className:"mt-5",style:{color:"black"},children:Object(v.jsxs)(k.A,{children:[Object(v.jsx)(k.j,{lg:"4",md:"12",className:"mb-lg-0 mb-4",children:Object(v.jsx)(k.e,{testimonial:!0,children:Object(v.jsxs)(k.f,{children:[Object(v.jsxs)(k.i,{children:["  ",Object(v.jsx)("h4",{className:"font-weight-bold mb-4",children:(s.name,s.name)})]}),Object(v.jsx)("hr",{}),Object(v.jsxs)(k.h,{children:["  ",Object(v.jsxs)("p",{className:"dark-grey-text mt-4",children:[Object(v.jsx)(k.p,{icon:"quote-left",className:"pr-2"}),(s.name,s.email)]})]})]})})}),Object(v.jsx)(k.j,{lg:"4",md:"12",className:"mb-lg-0 mb-4",children:Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"formGroupExampleInput",children:" Change Name : "}),Object(v.jsx)(f.b,{type:"text",name:"name",className:"form-control",id:"formGroupExampleInput"}),Object(v.jsx)(f.a,{name:"name",render:function(e){return Object(v.jsx)(k.b,{color:"danger",children:e})}}),Object(v.jsx)("label",{htmlFor:"formGroupExampleInput",children:"Change Email : "}),Object(v.jsx)(f.b,{type:"text",name:"email",className:"form-control",id:"formGroupExampleInput"}),Object(v.jsx)(f.a,{name:"email",render:function(e){return Object(v.jsx)(k.b,{color:"danger",children:e})}}),Object(v.jsx)("label",{htmlFor:"formGroupExampleInput",children:" Change password : "}),Object(v.jsx)(f.b,{type:"Password",name:"password",className:"form-control",id:"formGroupExampleInput"}),Object(v.jsx)(k.d,{type:"submit",style:{margin:"20px 0px 20px 140px",color:"black"},gradient:"deep-blue",children:"Save"})]})})]})})})})}var B=c(65);function Y(e){var t=Object(d.h)().placeId,c=Object(d.g)(),s=Object(n.useState)(new Date),a=Object(j.a)(s,2),r=a[0],l=a[1],i=Object(n.useState)(!1),o=Object(j.a)(i,2),b=o[0],u=o[1],h=Object(n.useState)({name:"",description:"",image:"",category:"Choose the place",location:"",workingHours:""}),m=Object(j.a)(h,2),O=m[0],x=m[1];Object(n.useEffect)((function(){console.log(t),p.a.get("http://localhost:5000/api/place/".concat(t)).then((function(e){x(e.data.pros),console.log(e.data.pros)})).catch((function(e){return console.log(e)}))}),[b]);var g=function(e){var t=e.target,c=t.name,n=t.value;x(Object(S.a)(Object(S.a)({},O),{},Object(C.a)({},c,n)))};return Object(v.jsx)("div",{className:"classicformpage",children:Object(v.jsx)(k.k,{style:{height:"100%",width:"100%",paddingTop:"10rem"},className:"mt-5  d-flex justify-content-center align-items-center",children:Object(v.jsx)(k.j,{md:"6",xl:"5",className:"mb-4",children:Object(v.jsx)(k.c,{type:"fadeInRight",delay:".3s",children:Object(v.jsxs)(k.e,{id:"classic-card",children:[Object(v.jsxs)("h1",{className:"text-center mt-5",children:[Object(v.jsx)(k.p,{icon:""}),"\ud835\udd3c\ud835\udd55\ud835\udd5a\ud835\udd65"]}),Object(v.jsxs)(k.f,{className:"white-text",children:[Object(v.jsx)("hr",{className:"hr-light"}),Object(v.jsx)(k.r,{label:"Name",name:"name",onChange:function(e){return g(e)},value:O.name}),Object(v.jsx)(k.r,{label:"Description",name:"description",onChange:function(e){return g(e)},value:O.description}),Object(v.jsx)(k.r,{label:"Image",name:"image",value:O.image,onChange:function(e){return g(e)}}),Object(v.jsx)(k.r,{label:"Location",name:"location",onChange:function(e){return g(e)},value:O.location}),Object(v.jsx)(k.r,{label:"working Hours",name:"workingHours",value:O.workingHours,onChange:function(e){return g(e)}}),Object(v.jsx)(L.a,{name:"date",selected:r,value:O.date,onChange:function(e){return function(e){l(e),x((function(t){return Object(S.a)(Object(S.a)({},t),{},{date:e})}))}(e)}}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsxs)("select",{className:"browser-default custom-select",name:"category",value:O.category,onChange:function(e){return g(e)},children:[Object(v.jsx)("option",{children:"Choose the place"}),Object(v.jsx)("option",{children:"cafe"}),Object(v.jsx)("option",{children:"restaurant"}),Object(v.jsx)("option",{children:"entertainment"}),Object(v.jsx)("option",{children:"concert"})]}),Object(v.jsx)("div",{className:"text-center mt-4 black-text",children:Object(v.jsx)(k.d,{onClick:function(){return function(e){p.a.put("http://localhost:5000/api/place/".concat(e),O).then((function(e){console.log(e)})).catch((function(e){return console.log(e)})),alert("Edited successfully"),c.push("/profile"),u((function(e){return!e}))}(t)},children:"Edit"})})]})]})})})})})}var J=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=(t[0],t[1],Object(n.useState)({currentUser:null,isLoggedIn:!1})),s=Object(j.a)(c,2),a=s[0],r=s[1],l=Object(n.useState)({}),b=Object(j.a)(l,2),u=b[0],h=b[1],m=Object(n.useState)(!1),O=Object(j.a)(m,2),x=(O[0],O[1]),g=Object(n.useState)({currentDataUser:null}),f=Object(j.a)(g,2),y=f[0],N=(f[1],function(){if(localStorage.jwtToken){var e=localStorage.jwtToken,t=Object(B.a)(e,"SECRET").user;Object(B.a)(e,"SECRET").place,Object(B.a)(e,"SECRET").user;r({currentUser:t,isLoggedIn:!0}),C(t)}else r({currentUser:null,isLoggedIn:!1});x(!0),console.log("The current User is: ",a.currentUser),console.log("The current DATA User  ",y.currentDataUser)}),C=function(){var e=Object(o.a)(i.a.mark((function e(t){var c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://localhost:5000/api/users/profile/".concat(t._id));case 2:c=e.sent,n=c.data.user,console.log("Loaded user profile: ",n),h(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)(N,[]),Object(n.useEffect)((function(){u.name&&x(!0)}),[u]),Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"classicformpage",children:Object(v.jsxs)(T.a,{children:[Object(v.jsx)(E,{loginCallback:N,isLoggedIn:a.isLoggedIn}),Object(v.jsxs)(d.d,{children:[Object(v.jsx)(d.b,{path:"/profile",children:Object(v.jsx)(z,{setAuth:r,auth:a,user:a.currentUser})}),Object(v.jsx)(d.b,{exact:!0,path:"/",children:Object(v.jsx)(q,{})}),Object(v.jsx)(d.b,{path:"/login",children:Object(v.jsx)(I,{loginCallback:N})}),Object(v.jsx)(d.b,{exact:!0,path:"/edit/:placeId",children:Object(v.jsx)(Y,{user:a.currentUser})}),Object(v.jsx)(d.b,{path:"/show/:id",children:Object(v.jsx)(R,{user:a.currentUser,isLoggedIn:a.isLoggedIn})}),Object(v.jsx)(d.b,{path:"/edituserinfo/:id",children:Object(v.jsx)(W,{setAuth:r,auth:a,user:a.currentUser,userProfile:u,setUserProfile:h})}),Object(v.jsx)(d.b,{path:"/create",children:Object(v.jsx)(A,{user:a.currentUser,isLoggedIn:a.isLoggedIn})}),Object(v.jsx)(d.b,{path:"/signup",children:Object(v.jsx)(w,{})}),Object(v.jsx)(d.b,{path:"/aboutus",children:Object(v.jsx)(H,{})})]}),Object(v.jsx)(G,{})]})})})},V=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,390)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};c(377),c(378),c(379);r.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(J,{})}),document.getElementById("root")),V()},91:function(e,t,c){}},[[380,1,2]]]);
//# sourceMappingURL=main.ddd53036.chunk.js.map