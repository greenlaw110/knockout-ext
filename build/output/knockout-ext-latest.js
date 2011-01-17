// Knockout Extent JavaScript library v0.1
// (c) 2011 Green Luo
// License: Ms-Pl (http://www.opensource.org/licenses/ms-pl.html)

ko.b=function(f,d){for(var b=f.split("."),c=window,a=0;a<b.length-1;a++)c=c[b[a]];c[b[b.length-1]]=d};ko.e=function(f,d,b){f[d]=b};ko.b("KO",ko.observable);ko.b("KOA",ko.observableArray);ko.b("KOD",ko.dependentObservable);
(function(f){var d=function(){var b=ko.utils;return{a:b.unwrapObservable,c:b.registerEventHandler,d:b.toggleDomNodeCssClass}}();f.html={update:function(b,c){var a=d.a(c());if(a===null||a===undefined)a="";b.innerHTML=a}};f.event={init:function(b,c,a,e){c=d.a(c());for(var g in c)if(typeof g=="string"){var j=d.a(c[g]);d.c(b,g,function(h){var i;try{i=j.call(e,b)}finally{if(!i)if(h.preventDefault)h.preventDefault();else h.returnValue=false}})}}};f.attr={update:function(b,c){var a=d.a(c()||{}),e;for(e in a)if(typeof e==
"string"){var g=d.a(a[e]);b.setAttribute(e,g)}}};f.className={update:function(b,c){var a=c();a=d.a(a);if(typeof a=="function")a=a();a=a.split(" ");for(var e=0,g=a.length;e<g;++e)d.d(b,d.a(a[e]),true)}}})(ko.bindingHandlers);
