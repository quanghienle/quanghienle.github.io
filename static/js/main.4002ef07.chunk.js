(this.webpackJsonpporfolio=this.webpackJsonpporfolio||[]).push([[0],{61:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(12),c=a.n(i),r=(a(61),a(9)),l=a(18),s=a(86),d=a(99),m=a(101),j=a(102),p=a(88),g=a(103),b=a(89),h=a(90),u=a(91),O=a(92),x=a(94),f=a(96),y=a(97),v=a(69),k=a(93),w=a(95),N=a(104),C=a(51),D=a.n(C),I=a(52),S=a.n(I),E=a(2),T=Object(s.a)((function(e){return{main:{padding:"20px",margin:0},paper:{padding:"6px 16px",width:"100%"},boldText:{fontWeight:"bold"},oppositeContent:{flex:"none",width:"150px"},timelineConnector:{backgroundColor:e.palette.primary.dark},timelineDot:{padding:0,backgroundColor:e.palette.primary.light}}}));function P(e){var t=T(),a=e.info,n=e.parentIndex,i=e.showDetails,c=o.a.useState(!!i),l=Object(r.a)(c,2),s=l[0],d=l[1],m=Object(E.jsx)("ul",{children:a.details.map((function(e,t){return Object(E.jsx)("li",{children:Object(E.jsx)(p.a,{align:"left",variant:"body1",color:"textSecondary",children:e})},"detail-".concat(n,"-").concat(t))}))});return Object(E.jsx)(g.a,{color:"primary",style:{width:"100%",textTransform:"none"},onClick:function(){d(!s)},children:Object(E.jsxs)(v.a,{elevation:5,className:t.paper,children:[Object(E.jsxs)(p.a,{align:"left",variant:"h5",className:t.boldText,children:[a.jobTitle,s?Object(E.jsx)(D.a,{}):Object(E.jsx)(S.a,{})]}),Object(E.jsx)(p.a,{align:"left",variant:"h6",color:"textSecondary",children:a.companyName}),s?m:""]})})}function W(e){var t=e.experiences,a=T(),n=o.a.useState(!1),i=Object(r.a)(n,2),c=i[0],s=i[1];return o.a.useEffect((function(){c||s(!0)}),[]),Object(E.jsx)(b.a,{className:a.main,children:t.map((function(e,n){var o=200*n,i=400*n,r=function(e){return{in:c,timeout:1e3,style:{transitionDelay:"".concat(e,"ms")}}},s=n!==t.length-1?Object(E.jsx)(h.a,{className:a.timelineConnector}):null;return Object(E.jsxs)(u.a,{children:[Object(E.jsx)(O.a,{className:a.oppositeContent,children:Object(E.jsx)(k.a,Object(l.a)(Object(l.a)({},r(i)),{},{children:Object(E.jsxs)(p.a,{variant:"body2",color:"textSecondary",children:["".concat(e.fromDate," - ").concat(e.toDate),Object(E.jsx)("br",{}),e.location]})}))}),Object(E.jsxs)(x.a,{children:[Object(E.jsx)(w.a,Object(l.a)(Object(l.a)({},r(o)),{},{children:Object(E.jsx)(f.a,{className:a.timelineDot,children:Object(E.jsx)(N.a,{alt:e.companyName,src:e.companyLogo})})})),s]}),Object(E.jsx)(k.a,Object(l.a)(Object(l.a)({},r(i)),{},{children:Object(E.jsx)(y.a,{children:Object(E.jsx)(P,{info:e,parentIndex:n,showDetails:0===n})})}))]},"timeline-item-".concat(n))}))})}var L=a(98),U=a(100),R=Object(s.a)((function(e){return{root:{height:"calc(100vh - 100px)"},info:{margin:"auto"},image:{maxHeight:"calc(100vh - 100px)",width:"100%",objectFit:"contain"},link:{padding:"10px"},linkContainer:{margin:"20px 60px"},profileName:{fontWeight:"bold",color:"#7717F6"}}}));function H(e){var t=R(),a=e.name,n=e.title,i=e.imageUrl,c=e.links,l=o.a.useState(!1),s=Object(r.a)(l,2),m=s[0],j=s[1];return o.a.useEffect((function(){m||j(!0)}),[]),Object(E.jsxs)(L.a,{className:t.root,container:!0,spacing:3,children:[Object(E.jsx)(L.a,{item:!0,xs:7,children:Object(E.jsx)(d.a,{direction:"right",in:m,timeout:1e3,children:Object(E.jsx)("img",{src:i,alt:"avatar",className:t.image})})}),Object(E.jsxs)(L.a,{className:t.info,item:!0,xs:5,children:[Object(E.jsx)(U.a,{in:m,timeout:1500,children:Object(E.jsx)(p.a,{variant:"h6",color:"textSecondary",children:" Hi there, "})}),Object(E.jsx)("br",{}),Object(E.jsx)(U.a,{in:m,timeout:1500,children:Object(E.jsxs)(p.a,{variant:"h2",children:["I am ",Object(E.jsxs)("span",{className:t.profileName,children:[" ",a," "]})]})}),Object(E.jsx)("br",{}),Object(E.jsx)(U.a,{in:m,timeout:1500,children:Object(E.jsxs)(p.a,{variant:"h5",children:[" ",n," "]})}),Object(E.jsx)("br",{}),Object(E.jsx)("div",{className:t.linkContainer,children:c.map((function(e,t){return Object(E.jsx)(w.a,{in:m,timeout:2e3,children:Object(E.jsx)(g.a,{href:e.link,children:e.icon})},"link-".concat(t))}))})]})]})}var z=a(53),F=a.n(z),J=a(54),M=a.n(J),A="/logo.png",q="HL",B="#7717F6",G={name:"Hien Le",title:"Software Developer",imageUrl:"/home-avatar.png",links:[{name:"LinkedIn",icon:Object(E.jsx)(F.a,{style:{fontSize:"60px",color:B}}),link:"https://www.linkedin.com/in/quanghienle/"},{name:"GitHub",icon:Object(E.jsx)(M.a,{style:{fontSize:"50px",color:B}}),link:"https://github.com/quanghienle"}]},X=Object(s.a)((function(e){return{root:{flexGrow:1,minHeight:"100vh"},appBar:{paddingRight:"50px",fontWeight:"bold"},title:{flexGrow:1,fontWeight:"bold"},pageIcon:{marginRight:e.spacing(2)},image:{height:"64px",objectFit:"contain",paddingRight:"10px"}}})),K=[{name:"HOME",backgroundImage:"url(".concat("/light-grey-wallpaper.jpeg",")"),page:Object(E.jsx)(H,Object(l.a)({},G))},{name:"ABOUT",backgroundImage:"url(".concat("/light-grey-wallpaper.jpeg",")"),page:""},{name:"EXPERIENCE",backgroundImage:"url(".concat("/light-grey-wallpaper.jpeg",")"),page:Object(E.jsx)(W,{experiences:[{fromDate:"May 2021",toDate:"Current",location:"Ottawa, ON",companyName:"CanadaWheels",companyLogo:"/canadawheels.jpeg",jobTitle:"Software Developer",details:["item 1","item 2","item 3"]},{fromDate:"Sep 2020",toDate:"Dec 2020",location:"Ottawa, ON (remote)",companyName:"Nokia",companyLogo:"/nokia.png",jobTitle:"Software Developer CO-OP",details:["Collaborated with back-end developers to add new features to the UI by using TypeScript, React and Redux.","Integrated and configured the backend\u2019s Java application to use log4j as logging mechanism."]},{fromDate:"May 2020",toDate:"Aug 2020",location:"Ottawa, ON (remote)",companyName:"Ericsson",companyLogo:"/ericsson.png",jobTitle:"Front-End Developer CO-OP",details:["Delivered a Proof of Concept and release of a new UI that configures the telecom network monitoring application at runtime.","Wrote a design doc and implemented shareable UI components and pages that increased reusability, testability, performance and consistency by using JavaScript and Web Components.","Identified, documented code quality issues and created stories for the productization of the new UI."]},{fromDate:"Jan 2020",toDate:"Apr 2020",location:"Ottawa, ON (remote)",companyName:"Carleton University",companyLogo:"/carleton.jpeg",jobTitle:"Teaching Assistant",details:["Conducted weekly study groups to guide students through the course materials (COMP3007 - Programming Paradigms).","Graded assignments and tests accurately and submitted students\u2019 marks punctually."]},{fromDate:"May 2019",toDate:"Dec 2019",location:"Ottawa, ON",companyName:"Ericsson",companyLogo:"/ericsson.png",jobTitle:"Front-End Developer CO-OP",details:["Researched for suitable third-party chart libraries to provide top quality design.","Implemented a customizable chart component that visualized the inventory data by using functional programming - ClojureScript.","Wrote automated test scripts for UI components using WebdriverIO framework."]}]})},{name:"PROJECTS",backgroundImage:"url(".concat("/light-grey-wallpaper.jpeg",")"),page:""},{name:"CONTACT",backgroundImage:"url(".concat("/light-grey-wallpaper.jpeg",")"),page:""}];function Q(){var e=X(),t=o.a.useState(K[0]),a=Object(r.a)(t,2),n=a[0],i=a[1],c=o.a.useState(!1),l=Object(r.a)(c,2),s=l[0],b=l[1];return o.a.useEffect((function(){s||b(!0)}),[]),o.a.useEffect((function(){s||b(!0)}),[]),Object(E.jsxs)("div",{className:e.root,style:{backgroundImage:n.backgroundImage},children:[Object(E.jsx)(d.a,{in:s,timeout:1500,children:Object(E.jsx)(m.a,{position:"static",color:"inherit",className:e.appBar,children:Object(E.jsxs)(j.a,{children:[Object(E.jsx)("img",{src:A,alt:"logo",className:e.image}),Object(E.jsx)(p.a,{variant:"h5",color:"textPrimary",className:e.title,children:q}),K.map((function(e,t){var a=e.name===n.name?{color:B,fontWeight:"bold"}:{color:"black"};return Object(E.jsx)(g.a,{color:"inherit",size:"large",style:a,onClick:function(){return i(e)},children:e.name},"app-bar-button-".concat(t))}))]})})}),n.page]})}c.a.render(Object(E.jsx)(o.a.StrictMode,{children:Object(E.jsx)(Q,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.4002ef07.chunk.js.map