// Knockout Extent JavaScript library v0.1
// (c) 2011 Green Luo
// License: Ms-Pl (http://www.opensource.org/licenses/ms-pl.html)

ko.b=function(f,d){for(var a=f.split("."),c=window,b=0;b<a.length-1;b++)c=c[a[b]];c[a[a.length-1]]=d};ko.e=function(f,d,a){f[d]=a};ko.b("KO",ko.observable);ko.b("KOA",ko.observableArray);ko.b("KOD",ko.dependentObservable);
(function(f){var d=function(){var a=ko.utils;return{a:a.unwrapObservable,c:a.registerEventHandler,d:a.toggleDomNodeCssClass}}();f.html={update:function(a,c){var b=d.a(c());if(b===null||b===undefined)b="";a.innerHTML=b}};f.event={init:function(a,c,b,e){c=d.a(c());for(var g in c)if(typeof g=="string"){var j=d.a(c[g]);d.c(a,g,function(h){var i;try{i=j.call(e,a)}finally{if(!i)if(h.preventDefault)h.preventDefault();else h.returnValue=false}})}}};f.attr={update:function(a,c){var b=d.a(c()||{}),e;for(e in b)if(typeof e==
"string"){var g=d.a(b[e]);a.setAttribute(e,g)}}};f.clazz={update:function(a,c){var b=c();d.a(b);b=b.split(" ");for(var e=0,g=b.length;e<g;++e)d.d(a,d.a(b[e]),true)}}})(ko.bindingHandlers);
ko.b=function(f,d){for(var a=f.split("."),c=window,b=0;b<a.length-1;b++)c=c[a[b]];c[a[a.length-1]]=d};ko.e=function(f,d,a){f[d]=a};ko.b("KO",ko.observable);ko.b("KOA",ko.observableArray);ko.b("KOD",ko.dependentObservable);
(function(f){var d=function(){var a=ko.utils;return{a:a.unwrapObservable,c:a.registerEventHandler,d:a.toggleDomNodeCssClass}}();f.html={update:function(a,c){var b=d.a(c());if(b===null||b===undefined)b="";a.innerHTML=b}};f.event={init:function(a,c,b,e){c=d.a(c());for(var g in c)if(typeof g=="string"){var j=d.a(c[g]);d.c(a,g,function(h){var i;try{i=j.call(e,a)}finally{if(!i)if(h.preventDefault)h.preventDefault();else h.returnValue=false}})}}};f.attr={update:function(a,c){var b=d.a(c()||{}),e;for(e in b)if(typeof e==
"string"){var g=d.a(b[e]);a.setAttribute(e,g)}}};f.className={update:function(a,c){var b=c();d.a(b);b=b.split(" ");for(var e=0,g=b.length;e<g;++e)d.d(a,d.a(b[e]),true)}}})(ko.bindingHandlers);
