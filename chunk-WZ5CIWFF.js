import{a as x}from"./chunk-XZGYKAS5.js";import{b}from"./chunk-POJLYY4R.js";import{Fa as h,La as t,Ma as i,Na as d,O as c,Oa as u,Pa as S,V as p,Va as y,W as m,Wa as r,fa as f,pa as l,ya as g}from"./chunk-76RC743J.js";var a=class s{gifService=c(b);searchingGifs=f([]);onSearch(n){this.gifService.searchGifs(n).subscribe(e=>{this.searchingGifs.set(e)})}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=g({type:s,selectors:[["app-search-page"]],decls:9,vars:1,consts:[["txtSearch",""],[1,"text-2xl","font-bold","mt-5"],[1,"text-sm","text-gray-500"],[1,"flex","flex-col","gap-4"],["type","text","placeholder","Search Gifs",1,"mt-3","border","border-gray-300","rounded-md","p-2",3,"keyup.enter"],[1,"py-5"],[3,"gifs"]],template:function(e,o){if(e&1){let G=u();t(0,"h2",1),r(1,` Search Gifs
`),i(),t(2,"h3",2),r(3,` Search Gifs by name, description or tags
`),i(),t(4,"section",3)(5,"input",4,0),S("keyup.enter",function(){p(G);let C=y(6);return m(o.onSearch(C.value))}),i()(),t(7,"section",5),d(8,"gif-list",6),i()}e&2&&(l(8),h("gifs",o.searchingGifs()))},dependencies:[x],encapsulation:2})};export{a as default};
