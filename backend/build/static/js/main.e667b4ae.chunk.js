(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{158:function(e,t,c){},372:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(26),r=c.n(a),l=(c(158),c(81)),i=c.n(l),o=c(143),j=c(7),d=(c(86),c(11)),b=c(16),u=c(14),h=c(3),O=c(9),m=c.n(O),x={development:"http://localhost:".concat(5e3),production:"https://round4.herokuapp.com"},g="localhost"===window.location.hostname?x.development:x.production,p=c(30),f=c(22),v=c(2),y=(f.a({name:f.b().required("Enter your Name please"),email:f.b().required("Enter your email please").email("example@example.com"),password:f.b().required("Enter your passwor please!!").min(8,"must be more than 8").max(20,"whatEver")}),/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/g);function N(){var e=Object(u.g)(),t=Object(n.useState)({name:"",email:"",password:""}),c=Object(j.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)([]),l=Object(j.a)(r,2),i=l[0],o=l[1],O=function(e){var t=e.target,c=t.name,n=t.value;a(Object(b.a)(Object(b.a)({},s),{},Object(d.a)({},c,n))),console.log(s)};function x(){var e=[];for(var t in s)"email"==t&&""!=s.email&&(console.log("check email regex",y.test(s.email)),console.log("check email regex",y.test("ali@ali.com")),y.test(s.email)?e.filter((function(e){return"email"==e.name})):e.push({name:"email",msg:"Please enter a valid Email"})),""==s[t]?e.push({name:t,msg:"Please fill this field"}):e.filter((function(e){return e.name==t}));return o(e),e}return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{children:Object(v.jsx)(h.E,{children:Object(v.jsx)(h.k,{style:{height:"100%",width:"100%",paddingTop:"5rem"},className:" d-flex justify-content-center align-items-center",children:Object(v.jsx)(h.j,{md:"6",xl:"5",className:"mb-4",children:Object(v.jsx)(h.c,{type:"fadeInRight",delay:".3s",children:Object(v.jsxs)(h.e,{id:"classic-card",children:[Object(v.jsx)("h1",{className:"text-center mt-5",children:"\ud835\udd4a\ud835\udd40\ud835\udd3e\u2115 \ud835\udd4c\u2119"}),Object(v.jsxs)(h.f,{className:"white-text",children:[Object(v.jsx)(h.r,{label:"Enter your name",icon:"user",name:"name",onChange:function(e){return O(e)}}),i.map((function(e){if("name"==e.name)return Object(v.jsx)("p",{style:{color:"red"},children:e.msg},e.name)})),Object(v.jsx)(h.r,{label:"Enter your email",icon:"envelope",name:"email",onChange:function(e){return O(e)}}),i.map((function(e){if("email"==e.name)return Object(v.jsx)("p",{style:{color:"red"},children:e.msg},e.name)})),Object(v.jsx)(h.r,{label:"Enter your password",icon:"lock",type:"password",name:"password",onChange:function(e){return O(e)}}),i.map((function(e){if("password"==e.name)return Object(v.jsx)("p",{style:{color:"red"},children:e.msg},e.name)})),Object(v.jsx)("div",{className:"text-center mt-4 black-text",children:Object(v.jsx)(h.d,{gradient:"deep-blue",onClick:function(t){return c=t,console.log(s),c.preventDefault(),console.log(x()),x(),console.log(s),void(x().length>0||m.a.post("".concat(g,"/api/user/signup"),s).then((function(t){t.data.user?e.push("/home"):alert("Error! check your information and try again")})).catch((function(e){return console.log(e)})));var c},children:"Sign Up"})})]})]})})})})})})})}function w(e){var t=Object(u.g)();return Object(v.jsx)("div",{children:Object(v.jsx)("header",{children:Object(v.jsxs)(h.x,{style:{backgroundColor:"#a9dceb"},dark:!0,expand:"md",children:["                    ",Object(v.jsx)(h.y,{href:"/",children:Object(v.jsx)("strong",{})}),Object(v.jsxs)(h.z,{left:!0,style:{fontSize:"25px"},children:[Object(v.jsx)(h.v,{active:!0,children:Object(v.jsxs)(h.w,{to:"/",style:{color:"black"},children:[Object(v.jsx)(h.p,{icon:"home"})," \u210d\ud835\udd60\ud835\udd5e\ud835\udd56"]})}),Object(v.jsx)(h.v,{children:Object(v.jsxs)(h.w,{to:"/aboutus",style:{color:"black"},children:[" ",Object(v.jsx)(h.p,{icon:"info"})," \ud835\udd38\ud835\udd53\ud835\udd60\ud835\udd66\ud835\udd65 \ud835\udd66\ud835\udd64"]})})]}),e.isLoggedIn?Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(h.z,{right:!0,style:{fontSize:"25px"},children:[Object(v.jsx)(h.v,{children:Object(v.jsxs)(h.w,{to:"/profile",style:{color:"black"},children:[Object(v.jsx)(h.p,{far:!0,icon:"user"})," \u2119\ud835\udd63\ud835\udd60\ud835\udd57\ud835\udd5a\ud835\udd5d\ud835\udd56 "]})}),Object(v.jsx)(h.v,{onClick:function(){return console.log("Logging Out!"),localStorage.removeItem("jwtToken"),e.loginCallback(),void t.push("/")},children:Object(v.jsxs)(h.w,{to:"/logout",style:{color:"black"},children:[" ",Object(v.jsx)(h.p,{icon:"sign-out-alt"})," \ud835\udd43\ud835\udd60\ud835\udd58\ud835\udd60\ud835\udd66\ud835\udd65 "]})})]})}):Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(h.z,{right:!0,style:{fontSize:"25px"},children:[Object(v.jsx)(h.v,{children:Object(v.jsxs)(h.w,{to:"/signup",style:{color:"black"},children:[Object(v.jsx)(h.p,{icon:"user-plus"})," \ud835\udd4a\ud835\udd5a\ud835\udd58\ud835\udd5f\ud835\udd66\ud835\udd61 "]})}),Object(v.jsx)(h.v,{children:Object(v.jsxs)(h.w,{to:"/login",style:{color:"black"},children:[" ",Object(v.jsx)(h.p,{icon:"sign-in-alt"})," \ud835\udd43\ud835\udd60\ud835\udd58\ud835\udd5a\ud835\udd5f "]})})]})})]})})})}function C(e){var t=Object(n.useState)(!0),c=Object(j.a)(t,2),s=c[0],a=c[1],r=Object(u.g)(),l=Object(n.useState)({email:"",password:""}),i=Object(j.a)(l,2),o=i[0],O=i[1],x=function(e){var t=e.target,c=t.name,n=t.value;O(Object(b.a)(Object(b.a)({},o),{},Object(d.a)({},c,n)))};return Object(v.jsxs)(v.Fragment,{children:[!s&&Object(v.jsx)(h.b,{color:"danger",children:"The email address or password is incorrect. Please retry..."}),Object(v.jsx)("div",{children:Object(v.jsx)(h.k,{style:{height:"100%",width:"100%",paddingTop:"5rem"},className:" d-flex justify-content-center align-items-center",children:Object(v.jsx)(h.j,{md:"6",xl:"5",className:"mb-4",children:Object(v.jsx)(h.c,{type:"fadeInRight",delay:".3s",children:Object(v.jsxs)(h.e,{id:"classic-card",children:[Object(v.jsx)("h1",{className:"text-center mt-5",children:"\ud835\udd43\ud835\udd60\ud835\udd58 \ud835\udd40\ud835\udd5f"}),Object(v.jsxs)(h.f,{className:"white-text",children:[Object(v.jsx)("hr",{className:"hr-light"}),Object(v.jsx)(h.r,{label:"Your email",icon:"envelope",type:"email",name:"email",onChange:function(e){return x(e)}}),Object(v.jsx)(h.r,{label:"Your password",icon:"lock",type:"password",name:"password",onChange:function(e){return x(e)}}),Object(v.jsx)("div",{className:"text-center mt-4 black-text ",children:Object(v.jsx)(h.d,{gradient:"deep-blue",onClick:function(t){return t.preventDefault(),void m.a.post("".concat(g,"/api/user/login"),o).then((function(t){console.log("Express backend /login response",t);var c=t.data.token,n=t.data.msg;c?(localStorage.setItem("jwtToken",c),e.loginCallback(),alert("Logged in successfully, Welcome"),r.push("/profile")):(console.log("Login error: ",n),a(!1))}))},children:" Log In"})}),Object(v.jsxs)("div",{className:"text-center",children:[Object(v.jsx)("h4",{children:"New User?"}),Object(v.jsx)(h.s,{to:"/signup",children:"Sign Up"})]})]})]})})})})})]})}var S=c(60),k=c.n(S),E=(c(300),c(10)),P=function(e){var t,c,s,a=Object(n.useState)([]),r=Object(j.a)(a,2),l=r[0],i=r[1],o=Object(n.useState)(!1),b=Object(j.a)(o,2),u=b[0];b[1];Object(n.useEffect)((function(){m.a.get("".concat(g,"/api/place")).then((function(e){i(e.data.result),console.log("place info:",l)}))}),[u]);var O=l.map((function(e){return Object(v.jsx)(h.j,{className:"",md:"4",style:{maxWidth:"40rem"},children:Object(v.jsxs)(h.e,{reverse:!0,className:"cardPadding",children:[Object(v.jsx)(h.g,{cascade:!0,style:{height:"20rem",width:"100%"},src:e.image}),Object(v.jsxs)(h.f,{cascade:!0,className:"text-center",children:[Object(v.jsx)(h.i,{children:e.name}),Object(v.jsx)(E.b,{to:"/edit/".concat(e._id),children:Object(v.jsxs)(h.d,{style:{fontSize:"15px",fontWeight:"bold",color:"black"},gradient:"deep-blue",children:[Object(v.jsx)(h.p,{icon:"edit",className:"iconsStyle "}),"Edit"]})}),Object(v.jsxs)(h.d,{onClick:function(){return t=e._id,console.log("Delete",t),m.a.delete("".concat(g,"/api/place/").concat(t)).then((function(e){console.log("delete data ",e)})),void i(l.filter((function(e){return e._id!==t})));var t},style:{fontSize:"15px",fontWeight:"bold",color:"black"},gradient:"deep-blue",children:[Object(v.jsx)(h.p,{icon:"trash-alt",className:"iconsStyle "})," Delete"]})]})]})})}));return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(h.k,{children:"admin@admin.com"===e.user.email?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("h2",{className:"headerStyleAdmin",children:[Object(v.jsx)(h.p,{icon:"user-secret",className:"iconsStyle mb-3"}),"Admin Profile"]}),Object(v.jsx)(h.C,{className:"styleProfile",children:Object(v.jsxs)(E.c,(t={to:"/create",activeClassName:"activeClass",style:{fontSize:"40px"}},Object(d.a)(t,"style",{color:"#a9dceb"}),Object(d.a)(t,"className","createHover"),Object(d.a)(t,"children",[Object(v.jsx)(h.p,{far:!0,icon:"plus-square",className:"iconsStyle fixPadding iconsCreateStyle"}),Object(v.jsx)("span",{className:"iconsCreateStyle",children:"Create"})]),t))}),Object(v.jsx)(h.C,{children:O})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("h2",{className:"headerStyleAdmin",children:[Object(v.jsx)(h.p,{icon:"user-circle",className:"iconsStyle mb-3"}),"User Profile : ",e.userProfile.name]}),Object(v.jsxs)(h.C,{className:"styleProfile stylePaddingUser",children:[Object(v.jsxs)(E.c,(c={to:"/tovisit",activeClassName:"activeClass",style:{fontSize:"40px"}},Object(d.a)(c,"style",{color:"#a9dceb"}),Object(d.a)(c,"className","createHover styleBorder"),Object(d.a)(c,"children",[Object(v.jsx)(h.p,{fab:!0,icon:"gratipay",className:"iconsStyle fixPadding iconsCreateStyle"}),Object(v.jsx)("span",{className:"iconsCreateStyle styleText",children:"Place To Visit"})]),c)),Object(v.jsxs)(E.c,(s={to:"/edituserinfo/".concat(e.user._id),activeClassName:"activeClass",style:{fontSize:"40px"}},Object(d.a)(s,"style",{color:"#a9dceb"}),Object(d.a)(s,"className","createHover"),Object(d.a)(s,"children",[Object(v.jsx)(h.p,{icon:"user-edit",className:"iconsStyle fixPadding iconsCreateStyle"}),Object(v.jsx)("span",{className:"iconsCreateStyle",children:"Edit User Information"})]),s))]})]})})})};c(87);function I(e){console.log(e);Object(u.g)();var t=Object(n.useState)(new Date),c=Object(j.a)(t,2),s=(c[0],c[1],Object(n.useState)({name:"",description:"",image:"",category:"Choose the place",location:"",workingHours:""})),a=Object(j.a)(s,2);a[0],a[1]}var T=c(153),U=c.n(T),L=function(e){var t=Object(n.useState)([]),c=Object(j.a)(t,2),s=c[0],a=c[1],r=Object(u.h)().id,l=Object(n.useState)(),i=Object(j.a)(l,2),o=(i[0],i[1]),O=Object(n.useState)({}),x=Object(j.a)(O,2),p=(x[0],x[1],Object(n.useState)(!1)),f=Object(j.a)(p,2),y=f[0],N=f[1],w=Object(n.useState)(5),C=Object(j.a)(w,2),S=C[0],k=C[1],E=Object(n.useState)(!0),P=Object(j.a)(E,2),I=P[0],T=P[1],L=Object(n.useState)({}),F=Object(j.a)(L,2),_=F[0],A=F[1];Object(n.useEffect)((function(){m.a.get("".concat(g,"/api/place/").concat(r)).then((function(e){a(e.data.pros),console.log("place info for comment",s);var t=e.data.pros;console.log(t);var c=t.reviews.reduce((function(e,t){return e+(t.score||0)}),0);t.reviews.length>0&&k(c/t.reviews.length),console.log("place info",t)}))}),[]);var D=s.comments&&s.comments.map((function(e){return Object(v.jsx)("p",{children:e.text})}));return Object(v.jsxs)("div",{children:[!I&&Object(v.jsx)(h.b,{color:"danger",children:"adedd to place List"}),Object(v.jsx)(h.k,{style:{height:"100%",width:"100%",paddingTop:"10rem"},className:"mt-5  d-flex justify-content-center align-items-center",children:Object(v.jsxs)(h.C,{children:[Object(v.jsx)(h.j,{style:{maxWidth:"40rem"},children:Object(v.jsxs)(h.e,{reverse:!0,children:[Object(v.jsx)(h.g,{style:{height:"20rem",width:"100%"},className:"cardPhoto",cascade:!0,src:s.image}),Object(v.jsxs)(h.f,{cascade:!0,className:"text-center",children:[Object(v.jsx)(h.i,{children:s.name}),Object(v.jsx)("h5",{className:"indigo-text",children:Object(v.jsx)("strong",{children:s.category})}),Object(v.jsx)(h.h,{children:s.description}),Object(v.jsx)(h.h,{children:s.location}),Object(v.jsx)(h.h,{children:s.workingHours}),Object(v.jsx)(h.h,{children:s.date}),Object(v.jsxs)(h.d,{outline:!0,color:"dark",onClick:function(){console.log(e.user._id,s._id),m.a.put("".concat(g,"/api/tovisit/"),{userId:e.user._id,placeId:s._id}).then((function(e){console.log("added to list",e),o(e.data)})),T(!1),setTimeout((function(){T(!0)}),3e3)},children:[" ","Add To List"]}),y&&Object(v.jsxs)("div",{style:{color:"#C70039"},children:["Error! already reviewed",Object(v.jsx)("span",{class:"gradient"}),Object(v.jsx)("span",{class:"spotlight"})]}),Object(v.jsx)(U.a,{count:5,value:S,onChange:function(e){k(e)},size:24,color2:"#ffd700"}),Object(v.jsx)(h.d,{style:{backgroundColor:"black",margin:"10px"},size:"md",onClick:function(){if(e.isLoggedIn){var t={userId:e.user._id,score:S,userName:e.user.name,productId:r};m.a.post("".concat(g,"/api/place/review"),t).then((function(e){console.log(e),console.log("reviewd done"),"Error! you already reviewed"==e.data&&N(!0)}))}else console.log("Login first")},children:"Review"})]})]})}),Object(v.jsxs)(h.j,{lg:"6",style:{width:"900px"},children:[Object(v.jsx)("h2",{children:"Join the Discussion!"}),Object(v.jsxs)("form",{children:[Object(v.jsx)("div",{className:"grey-text",children:Object(v.jsx)(h.r,{type:"textarea",rows:"2",label:"Your Comment",name:"text",icon:"pencil-alt",onChange:function(e){return function(e){var t=e.target,c=t.name,n=t.value;A(Object(b.a)(Object(b.a)({},_),{},Object(d.a)({},c,n))),console.log("comment",_)}(e)}})}),Object(v.jsxs)("div",{className:"text-center",children:[Object(v.jsxs)(h.d,{outline:!0,color:"secondary",onClick:function(t){t.preventDefault(),m.a.post("".concat(g,"/api/comment/").concat(s._id,"/").concat(e.user._id),_).then((function(e){console.log("comment info",e)})).catch((function(e){return console.log(e)}))},children:["Comment",Object(v.jsx)(h.p,{far:!0,icon:"paper-plane",className:"ml-1"})]}),Object(v.jsx)("div",{className:"grey-text",children:D})]})]})]})]})})]})};function F(e){var t=Object(n.useState)([]),c=Object(j.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)([]),l=Object(j.a)(r,2),i=l[0],o=l[1],d=Object(n.useState)(),b=Object(j.a)(d,2),u=(b[0],b[1]),O=Object(n.useState)([]),x=Object(j.a)(O,2),p=x[0],f=x[1];Object(n.useEffect)((function(){m.a.get("".concat(g,"/api/place")).then((function(e){a(e.data.result),f(e.data.result),console.log("Places info:",s);var t=e.data.result.map((function(e){return e.category}));t.unshift("All Places"),o(Array.from(new Set(t))),console.log("What is going on? ++++++")}))}),[]);var y=p.map((function(e){return Object(v.jsx)(E.b,{to:"/show/".concat(e._id),children:Object(v.jsx)(h.j,{className:"placeItem",md:"4",style:{maxWidth:"20rem"},children:Object(v.jsxs)(h.e,{reverse:!0,children:[Object(v.jsx)(h.g,{className:"cardPhoto",cascade:!0,style:{height:"20rem",width:"100%"},src:e.image}),Object(v.jsxs)(h.f,{cascade:!0,className:"text-center",children:[Object(v.jsx)(h.i,{children:e.name}),Object(v.jsxs)("p",{children:["Read more",Object(v.jsx)(h.p,{icon:"angle-double-right",className:"ml-2"})]})]})]})})})})),N=i.map((function(e){return Object(v.jsx)(h.m,{onClick:function(){return function(e){console.log("onChangeHandler");var t=e;if(console.log(t),u(t),"All Places"==t)f(s);else{var c=s.filter((function(e){return e.category==t}));f(c)}}(e)},children:e})}));return console.log("all category(s) - allSelect ",N),Object(v.jsxs)("div",{className:"home",children:[Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("h1",{className:"dark-text mt-3  d-flex justify-content-center align-items-center ",children:"\u211d\ud835\udd46\ud835\udd4c\u2115\ud835\udd3b"}),Object(v.jsxs)(h.l,{style:{height:"100%",width:"100%",paddingTop:"10rem"},className:"mt-5  d-flex justify-content-center align-items-center ",children:[Object(v.jsx)(h.o,{caret:!0,className:"mt-3",gradient:"deep-blue",style:{color:"black"},children:"Where - 2 - Go"}),Object(v.jsxs)(h.n,{basic:!0,children:[Object(v.jsx)(h.m,{header:!0,children:" Jeddah Places"}),N]})]}),Object(v.jsx)(h.C,{className:"placesContainer",style:{margin:"0 auto"},children:y})]})}function _(e){return e.auth.isLoggedIn?Object(v.jsx)(u.b,{children:Object(v.jsx)(P,{setAuth:e.setAuth,auth:e.auth,user:e.user,userProfile:e.userProfile,setUserProfile:e.setUserProfile})}):Object(v.jsx)(u.b,{children:Object(v.jsx)(u.a,{to:"/"})})}var A=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("br",{}),Object(v.jsxs)("h1",{children:[" ",Object(v.jsx)("strong",{children:"About Us"})]}),Object(v.jsx)("br",{}),Object(v.jsxs)("h2",{children:[" ",Object(v.jsx)("strong",{children:"Created by Final-Battle Team"})]})]})},D=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"footer",children:Object(v.jsxs)("footer",{className:"footer-txt",children:["\xa9 Copyright 2021. ",Object(v.jsx)("a",{href:"https://git.generalassemb.ly/Finall-Battle/final_battle",children:"Final-Battle "})," Team"]})})})};f.a({name:f.b().required("Name is required"),email:f.b().email("Email is invalid").required("Email is required"),password:f.b(),confirmPassword:f.b().test("passwords-match","Passwords must match ",(function(e){return this.parent.password===e})),img:f.b().required("This Field is Required")});function z(e){Object(u.g)();var t=Object(n.useState)(e.user),c=Object(j.a)(t,2),s=c[0],a=c[1],r=Object(u.h)().id;console.log(e);var l={name:s.name,email:s.email,password:"",confirmPassword:"",img:s.img};console.log("User const ==>",l);return Object(v.jsx)(v.Fragment,{children:s.name&&"admin@admin.com"==s.email?Object(v.jsx)(E.b,{to:"/create",children:"\u2102\u211d\ud835\udd3c\ud835\udd38\ud835\udd4b\ud835\udd3c"}):Object(v.jsx)(p.d,{initialValues:s,onSubmit:function(t){return function(t){m.a.post("".concat(g,"/api/user/edituserinfo/").concat(r),t).then((function(c){console.log("res.data.user from profile update: ",c.data.user),e.setUserProfile(t);var n={name:t.name,email:t.email};a(n)})).catch((function(e){return console.log(e)}))}(t)},children:Object(v.jsx)(p.c,{className:"mt-5",style:{color:"black"},children:Object(v.jsxs)(h.C,{children:[Object(v.jsx)(h.j,{lg:"4",md:"12",className:"mb-lg-0 mb-4",children:Object(v.jsx)(h.e,{testimonial:!0,children:Object(v.jsxs)(h.f,{children:[Object(v.jsxs)(h.i,{children:["  ",Object(v.jsx)("h4",{className:"font-weight-bold mb-4",children:(s.name,s.name)})]}),Object(v.jsx)("hr",{}),Object(v.jsxs)(h.h,{children:["  ",Object(v.jsxs)("p",{className:"dark-grey-text mt-4",children:[Object(v.jsx)(h.p,{icon:"quote-left",className:"pr-2"}),(s.name,s.email)]})]})]})})}),Object(v.jsx)(h.j,{lg:"4",md:"12",className:"mb-lg-0 mb-4",children:Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"formGroupExampleInput",children:" Change Name : "}),Object(v.jsx)(p.b,{type:"text",name:"name",className:"form-control",id:"formGroupExampleInput"}),Object(v.jsx)(p.a,{name:"name",render:function(e){return Object(v.jsx)(h.b,{color:"danger",children:e})}}),Object(v.jsx)("label",{htmlFor:"formGroupExampleInput",children:"Change Email : "}),Object(v.jsx)(p.b,{type:"text",name:"email",className:"form-control",id:"formGroupExampleInput"}),Object(v.jsx)(p.a,{name:"email",render:function(e){return Object(v.jsx)(h.b,{color:"danger",children:e})}}),Object(v.jsx)("label",{htmlFor:"formGroupExampleInput",children:" Change password : "}),Object(v.jsx)(p.b,{type:"Password",name:"password",className:"form-control",id:"formGroupExampleInput"}),Object(v.jsx)(h.d,{type:"submit",style:{margin:"20px 0px 20px 140px",color:"black"},gradient:"deep-blue",children:"Save"})]})})]})})})})}var q=c(61);function H(e){var t=Object(u.h)().placeId,c=Object(u.g)(),s=Object(n.useState)(new Date),a=Object(j.a)(s,2),r=a[0],l=a[1],i=Object(n.useState)(!1),o=Object(j.a)(i,2),O=(o[0],o[1]),x=Object(n.useState)({name:"",description:"",image:"",category:"Choose the place",location:"",workingHours:""}),p=Object(j.a)(x,2),f=p[0],y=p[1];Object(n.useEffect)((function(){console.log(t),m.a.get("".concat(g,"/api/place/").concat(t)).then((function(e){y(e.data.pros),console.log(e.data.pros)})).catch((function(e){return console.log(e)}))}),[]);var N=function(e){var t=e.target,c=t.name,n=t.value;y(Object(b.a)(Object(b.a)({},f),{},Object(d.a)({},c,n)))};return Object(v.jsx)("div",{className:"classicformpage",children:Object(v.jsx)(h.k,{style:{height:"100%",width:"100%",paddingTop:"10rem"},className:"mt-5  d-flex justify-content-center align-items-center",children:Object(v.jsx)(h.j,{md:"6",xl:"5",className:"mb-4",children:Object(v.jsx)(h.c,{type:"fadeInRight",delay:".3s",children:Object(v.jsxs)(h.e,{id:"classic-card",children:[Object(v.jsxs)("h1",{className:"text-center mt-5",children:[Object(v.jsx)(h.p,{icon:""}),"\ud835\udd3c\ud835\udd55\ud835\udd5a\ud835\udd65"]}),Object(v.jsxs)(h.f,{className:"white-text",children:[Object(v.jsx)("hr",{className:"hr-light"}),Object(v.jsx)(h.r,{label:"Name",name:"name",onChange:function(e){return N(e)},value:f.name}),Object(v.jsx)(h.r,{label:"Description",name:"description",onChange:function(e){return N(e)},value:f.description}),Object(v.jsx)(h.r,{label:"Image",name:"image",value:f.image,onChange:function(e){return N(e)}}),Object(v.jsx)(h.r,{label:"Location",name:"location",onChange:function(e){return N(e)},value:f.location}),Object(v.jsx)(h.r,{label:"working Hours",name:"workingHours",value:f.workingHours,onChange:function(e){return N(e)}}),Object(v.jsx)(k.a,{name:"date",selected:r,value:f.date,onChange:function(e){return function(e){l(e),y((function(t){return Object(b.a)(Object(b.a)({},t),{},{date:e})}))}(e)}}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsxs)("select",{className:"browser-default custom-select",name:"category",value:f.category,onChange:function(e){return N(e)},children:[Object(v.jsx)("option",{children:"Choose the place"}),Object(v.jsx)("option",{children:"cafe"}),Object(v.jsx)("option",{children:"restaurant"}),Object(v.jsx)("option",{children:"entertainment"}),Object(v.jsx)("option",{children:"concert"})]}),Object(v.jsx)("div",{className:"text-center mt-4 black-text",children:Object(v.jsx)(h.d,{onClick:function(){return function(e){m.a.put("".concat(g,"/api/place/").concat(e),f).then((function(e){console.log(e)})).catch((function(e){return console.log(e)})),alert("Edited successfully"),c.push("/profile"),O((function(e){return!e}))}(t)},children:"Edit"})})]})]})})})})})}function R(e){return Object(v.jsxs)("div",{children:[Object(v.jsx)("br",{}),Object(v.jsx)(h.k,{children:Object(v.jsx)(h.t,{style:{width:"22rem"},children:Object(v.jsx)(h.u,{children:Object(v.jsxs)("table",{class:"table",children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{scope:"col",children:"#"}),Object(v.jsx)("th",{scope:"col",children:"Name"}),Object(v.jsx)("th",{scope:"col",children:"category"}),Object(v.jsx)("th",{scope:"col"})]})}),Object(v.jsx)("tbody",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{scope:"row",children:"1"}),Object(v.jsx)("td",{children:e.onePlace.name}),Object(v.jsx)("td",{children:e.onePlace.category}),Object(v.jsxs)("td",{children:[Object(v.jsx)(h.p,{far:!0,icon:"trash-alt",onClick:function(){return e.deleteplace(e.onePlace._id)}})," "]})]})})]})})})})]})}var W=function(e){var t=Object(n.useState)([]),c=Object(j.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(e.auth.currentUser._id),l=Object(j.a)(r,2),i=l[0],o=(l[1],Object(n.useState)(!1)),d=Object(j.a)(o,2),b=d[0],u=d[1];Object(n.useEffect)((function(){return m.a.get("".concat(g,"/api/tovisit/").concat(i)).then((function(e){console.log("data.data.placesToVisit ----",e.data.placesToVisit),a(e.data.placesToVisit)}))}),[]);return Object(v.jsxs)(v.Fragment,{children:[b&&Object(v.jsx)(h.b,{color:"danger",dismiss:!0,children:"deleted"}),s.length>0?Object(v.jsx)("div",{className:"padding",children:Object(v.jsx)(h.C,{className:"justify-content-md-center",children:s.map((function(e,t){return Object(v.jsx)(R,{onePlace:e,delete:!0,deleteplace:function(){return t=e._id,m.a.delete("".concat(g,"/api/tovisit/").concat(i,"/").concat(t)).then((function(e){return console.log(e)})),u(!0),void a(s.filter((function(e){return e._id!=t})));var t}})}))})}):Object(v.jsx)(h.b,{color:"danger",dismiss:!0,children:"nothing here"})]})};var G=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=(t[0],t[1],Object(n.useState)({currentUser:null,isLoggedIn:!1})),s=Object(j.a)(c,2),a=s[0],r=s[1],l=Object(n.useState)({}),d=Object(j.a)(l,2),b=d[0],h=d[1],O=Object(n.useState)(!1),x=Object(j.a)(O,2),p=(x[0],x[1]),f=Object(n.useState)({currentDataUser:null}),y=Object(j.a)(f,2),S=y[0],k=(y[1],function(){if(localStorage.jwtToken){var e=localStorage.jwtToken,t=Object(q.a)(e,"SECRET").user;Object(q.a)(e,"SECRET").place,Object(q.a)(e,"SECRET").user;r({currentUser:t,isLoggedIn:!0}),P(t)}else r({currentUser:null,isLoggedIn:!1});p(!0),console.log("The current User is: ",a.currentUser),console.log("The current DATA User  ",S.currentDataUser)}),P=function(){var e=Object(o.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("get profile in App.js ======",t),e.next=3,m.a.get("".concat(g,"/api/user/profile/").concat(t._id));case 3:c=e.sent,console.log("Loaded user profile: ",c),h(c.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)(k,[]),Object(n.useEffect)((function(){b.name&&p(!0)}),[b]),Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"classicformpage",children:Object(v.jsxs)(E.a,{children:[Object(v.jsx)(w,{loginCallback:k,isLoggedIn:a.isLoggedIn}),Object(v.jsxs)(u.d,{children:[Object(v.jsx)(u.b,{path:"/profile",children:Object(v.jsx)(_,{setAuth:r,auth:a,user:a.currentUser,userProfile:b})}),Object(v.jsx)(u.b,{exact:!0,path:"/",children:Object(v.jsx)(F,{})}),Object(v.jsx)(u.b,{path:"/login",children:Object(v.jsx)(C,{loginCallback:k})}),Object(v.jsx)(u.b,{exact:!0,path:"/edit/:placeId",children:Object(v.jsx)(H,{user:a.currentUser})}),Object(v.jsx)(u.b,{path:"/show/:id",children:Object(v.jsx)(L,{user:a.currentUser,isLoggedIn:a.isLoggedIn})}),Object(v.jsx)(u.b,{path:"/edituserinfo/:id",children:Object(v.jsx)(z,{setAuth:r,auth:a,user:a.currentUser,userProfile:b,setUserProfile:h})}),Object(v.jsx)(u.b,{path:"/create",children:Object(v.jsx)(I,{user:a.currentUser,isLoggedIn:a.isLoggedIn})}),a.isLoggedIn&&Object(v.jsx)(u.b,{exact:!0,path:"/tovisit",children:Object(v.jsx)(W,{auth:a,user:S.currentDataUser,setAuth:r})}),Object(v.jsx)(u.b,{path:"/signup",children:Object(v.jsx)(N,{})}),Object(v.jsx)(u.b,{path:"/aboutus",children:Object(v.jsx)(A,{})})]}),Object(v.jsx)(D,{})]})})})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,375)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};c(369),c(370),c(371);r.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(G,{})}),document.getElementById("root")),B()},86:function(e,t,c){}},[[372,1,2]]]);
//# sourceMappingURL=main.e667b4ae.chunk.js.map