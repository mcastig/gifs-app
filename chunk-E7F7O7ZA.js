import{c as D,d as k,e as E}from"./chunk-ID3NPOMC.js";import{a as O,b as _}from"./chunk-3S6732Y7.js";import{Ea as u,Fa as C,Ga as S,Ha as x,Ia as g,Ja as n,Ka as i,La as r,O as y,Sa as s,Ta as p,Ua as M,Va as w,pa as a,xa as m}from"./chunk-VM3G7HVW.js";var P=t=>["/dashboard/history",t],I=(t,o)=>o.route;function L(t,o){if(t&1&&(n(0,"a",1)(1,"div"),r(2,"i"),i(),n(3,"div",2)(4,"span",3),s(5),i(),n(6,"span",4),s(7),i()()()),t&2){let e=o.$implicit;u("routerLink",e.route),a(2),C(e.icon),a(3),p(e.label),a(2),p(e.subLabel)}}function N(t,o){if(t&1&&(n(0,"a",1)(1,"div"),r(2,"i",5),i(),n(3,"div",2)(4,"span",3),s(5),i()()()),t&2){let e=o.$implicit;u("routerLink",w(2,P,e)),a(5),p(e)}}var d=class t{gifService=y(_);menuOptions=[{icon:"fa-solid fa-chart-line",label:"Trending",subLabel:"Popular Gifs",route:"/dashboard/trending"},{icon:"fa-solid fa-magnifying-glass",label:"Searcher",subLabel:"Popular Gifs",route:"/dashboard/search"}];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=m({type:t,selectors:[["gifs-side-menu-options"]],decls:5,vars:0,consts:[["id","nav",1,"w-full","px-6"],["routerLinkActive","bg-blue-800",1,"w-full","px-2","inline-flex","space-x-2","items-center","border-b","border-slate-700","py-3","hover:bg-white/5","transition","ease-linear","duration-150",3,"routerLink"],[1,"flex","flex-col"],[1,"text-lg","font-bold","leading-5","text-white"],[1,"text-sm","text-white/50","hidden","md:block"],[1,"fa-solid","fa-clock-rotate-left"]],template:function(e,l){e&1&&(n(0,"div",0),x(1,L,8,5,"a",1,I),x(3,N,6,4,"a",1,S),i()),e&2&&(a(),g(l.menuOptions),a(2),g(l.gifService.searchHistoryKeys()))},dependencies:[k,E],styles:["[_nghost-%COMP%]{display:block}"]})};var c=class t{envs=O;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=m({type:t,selectors:[["gifs-side-menu-header"]],decls:15,vars:3,consts:[["id","logo",1,"my-4","px-6"],[1,"text-lg","md:text-2xl","font-bold","text-white"],[1,"text-blue-500"],[1,"text-slate-500","text-sm"],["id","profile",1,"px-6","py-10"],[1,"text-slate-500"],["href","#",1,"inline-flex","space-x-2","items-center"],["src","https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80","alt","",1,"rounded-full","w-8","h-8"],[1,"text-sm","md:text-base","font-bold"]],template:function(e,l){e&1&&(n(0,"div",0)(1,"h1",1),s(2),n(3,"span",2),s(4),i()(),n(5,"p",3),s(6),i()(),n(7,"div",4)(8,"p",5),s(9,"Welcome Back,"),i(),n(10,"a",6)(11,"span"),r(12,"img",7),i(),n(13,"span",8),s(14," Edward Tompson "),i()()()),e&2&&(a(2),M(" ",l.envs.companyName,""),a(2),p(l.envs.companyLastName),a(2),p(l.envs.companySlogan))},styles:["[_nghost-%COMP%]{display:block}"]})};var f=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=m({type:t,selectors:[["gifs-side-menu"]],decls:3,vars:0,consts:[["id","menu",1,"w-[220px]","bg-gray-900","min-h-screen","z-10","text-slate-300","fixed","left-0","h-screen"]],template:function(e,l){e&1&&(n(0,"div",0),r(1,"gifs-side-menu-header")(2,"gifs-side-menu-options"),i())},dependencies:[d,c],styles:["[_nghost-%COMP%]{display:block}"]})};var h=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=m({type:t,selectors:[["app-dashboard-page"]],decls:5,vars:0,consts:[[1,"dw-screen","h-screen","antialiased","text-slate-300","selection:bg-blue-600","selection:text-white"],[1,"flex","flex-col","relative","w-screen"],[1,"ml-[220px]","px-4","flex","flex-col","flex-1","h-full","text-slate-800"]],template:function(e,l){e&1&&(n(0,"div",0)(1,"div",1)(2,"div",2),r(3,"gifs-side-menu")(4,"router-outlet"),i()()())},dependencies:[D,f],encapsulation:2})};export{h as default};
