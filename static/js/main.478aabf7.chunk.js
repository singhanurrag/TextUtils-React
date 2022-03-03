(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(3),r=a.n(o),c=(a(9),a(1));a(11);function m(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"mx-3 navbar-brand",href:"#"},"TextUtils"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"}),l.a.createElement("label",{className:"my-1 mx-2 text-".concat("light"===e.mode?"dark":"light")}),l.a.createElement("div",{className:""},l.a.createElement("button",{type:"button",onClick:function(){e.bgtoggle("success"),e.showalert("Go Green!")},className:"btn btn-success mx-1 my-2 rounded-circle border border-dark"}," "),l.a.createElement("button",{type:"button",onClick:function(){e.bgtoggle("danger"),e.showalert("Shade of Red!")},className:"btn btn-danger mx-1 my-2 rounded-circle border border-dark"}," "),l.a.createElement("button",{type:"button",onClick:function(){e.bgtoggle("info"),e.showalert("All Cyan!")},className:"btn btn-info mx-1 my-2 rounded-circle border border-dark"}," "),l.a.createElement("button",{type:"button",onClick:function(){e.bgtoggle("warning"),e.showalert("How lovely Yellow is!")},className:"btn btn-warning mx-1 my-2 rounded-circle border border-dark"}," ")),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input mx-1",onClick:e.togglemode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label mx-1",htmlFor:"flexSwitchCheckDefault"},e.btntext)))))}function s(e){var t=Object(n.useState)(" "),a=Object(c.a)(t,2),o=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h4",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",placeholder:"Enter your text here",value:o,style:{backgroundColor:"dark"===e.mode?"#3d5266":"white",color:"dark"===e.mode?"white":"black"},onChange:function(e){r(e.target.value)},id:"mybox",rows:"8"})),l.a.createElement("button",{className:"btn btn-".concat(e.btn," mx-2 my-1"),onClick:function(){var t=o.toUpperCase();r(t),0!==o.trim().length&&e.showalert("Converted to Uppercase")}},"UPPERCASE"),l.a.createElement("button",{className:"btn btn-".concat(e.btn," mx-2 my-1"),onClick:function(){var t=o.toLowerCase();r(t),0!==o.trim().length&&e.showalert("Converted to lowercase")}},"lowercase"),l.a.createElement("button",{className:"btn btn-".concat(e.btn," mx-2 my-1"),onClick:function(){for(var t=o.toLowerCase().split(" "),a=0;a<t.length;a++)t[a]=t[a].charAt(0).toUpperCase()+t[a].slice(1);var n=t.join(" ");r(n),0!==o.trim().length&&e.showalert("Converted to Title Case!")}},"TitleCase"),l.a.createElement("button",{className:"btn btn-".concat(e.btn," mx-2 my-1"),onClick:function(){navigator.clipboard.writeText(o),0!==o.trim().length&&e.showalert("Copied to clipboard!")}},"Copy"),l.a.createElement("button",{className:"btn btn-".concat(e.btn," mx-2 my-1"),onClick:function(){r(""),o.trim().length>0&&e.showalert("Cleared all Text!")}},"Clear"),l.a.createElement("button",{className:"btn btn-".concat(e.btn," mx-2 my-1"),onClick:function(){var t=o.split(/[ ]+/);r(t.join(" ")),0!==o.trim().length&&e.showalert("Extra spaces removed!")}},"Space")),l.a.createElement("center",null,l.a.createElement("div",{className:"container my-5",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h3",null,"Your Text Summary"),l.a.createElement("p",null,o.trim().length," characters ",o.replace(/\n/g," ").split(" ").filter(function(e){return""!==e}).length," words ",o.split(". ").length-1," Sentences"))))}function i(e){return e.alert&&l.a.createElement("div",{class:"alert alert-transparent alert-dismissible fade show ",role:"alert"},l.a.createElement("h5",null,l.a.createElement("center",null,e.alert.msg)))}var d=function(){var e=Object(n.useState)("light"),t=Object(c.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)("Dark Mode"),d=Object(c.a)(r,2),b=d[0],u=d[1],g=Object(n.useState)(null),h=Object(c.a)(g,2),E=h[0],p=h[1],f=Object(n.useState)("primary"),v=Object(c.a)(f,2),k=v[0],y=v[1],w=function(e){p({msg:e}),setTimeout(function(){p(null)},1e3)},C=function(){document.body.classList.remove("bg-light"),document.body.classList.remove("bg-info"),document.body.classList.remove("bg-success"),document.body.classList.remove("bg-danger"),document.body.classList.remove("bg-warning")};return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,{mode:a,togglemode:function(){C(),"light"===a?(o("dark"),document.body.style.backgroundColor="#3d5266",u("Dark Mode Enabled"),document.title="TextUtils - DarkMode",y("dark")):(o("light"),document.body.style.backgroundColor="white",u("Dark Mode"),document.title="TextUtils - Home",y("primary"))},btntext:b,bgtoggle:function(e){C(),document.body.classList.add("bg-"+e),document.title="TextUtils - Home",u("dark"===a?"Hybrid Mode Enabled":"Dark Mode")},showalert:w}),l.a.createElement(i,{alert:E}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(s,{heading:"Enter the text to analyze",mode:a,showalert:w,btn:k})))},b=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,14)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),l(e),o(e),r(e)})};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root")),b()},4:function(e,t,a){e.exports=a(13)},9:function(e,t,a){}},[[4,3,2]]]);
//# sourceMappingURL=main.478aabf7.chunk.js.map