import{_ as y}from"./BuWX1mIm.js";import{d as _,r as v,o as x,j as f,t as r,v as n,W as k,x as a,y as d,Y as C,I as A,J as h,H as b,a0 as B,z as m,A as $,B as T}from"./Csrg57Ls.js";import{a as p}from"./dX97V-1V.js";import"./CHpJLr7V.js";const z=_({__name:"Tab",props:{title:{},text:{},isActive:{type:Boolean}},setup(c){const t=c,e=v(null),s=v(0);x(()=>{e.value&&(s.value=e.value.scrollHeight)});const i=f(()=>t.isActive?{height:`${s.value}px`,"margin-top":"16px"}:{height:"0px","margin-top":"0px"});return(o,l)=>(n(),r("div",{class:k(["our-advantages__tab",{"our-advantages__tab-active":o.isActive}])},[a("h4",null,d(o.title),1),a("div",{ref_key:"refText",ref:e,class:"our-advantages__wrapper-text",style:C(i.value)},[(n(!0),r(A,null,h(o.text,(u,g)=>(n(),r("p",{key:g},d(u),1))),128))],4)],2))}}),H={class:"our-advantages__tabs"},L=_({__name:"index",setup(c){const{t}=b(),e=v(0),s=f(()=>[{title:t("ourAdvantages.items[0].title"),text:[t("ourAdvantages.items[0].text[0]"),t("ourAdvantages.items[0].text[1]")]},{title:t("ourAdvantages.items[1].title"),text:[t("ourAdvantages.items[1].text")]},{title:t("ourAdvantages.items[2].title"),text:[t("ourAdvantages.items[2].text")]},{title:t("ourAdvantages.items[3].title"),text:[t("ourAdvantages.items[3].text")]},{title:t("ourAdvantages.items[4].title"),text:[t("ourAdvantages.items[4].text")]},{title:t("ourAdvantages.items[5].title"),text:[t("ourAdvantages.items[5].text")]}]);return(i,o)=>(n(),r("div",H,[(n(!0),r(A,null,h(s.value,(l,u)=>(n(),B(z,{key:u,title:l.title,text:l.text,"is-active":u===e.value,onClick:g=>e.value=u},null,8,["title","text","is-active","onClick"]))),128))]))}}),w=""+new URL("process.Cg7Kn5YU.svg",import.meta.url).href,I={id:"ourAdvantages",class:"our-advantages"},N={class:"our-advantages__container"},R={class:"our-advantages__title"},V={class:"our-advantages__subtitle"},O={class:"our-advantages__content"},D=_({name:"PartOurAdvantages",__name:"index",setup(c){const t=v(null),e=v(null);return x(()=>{t.value&&p(t.value,"fade-in-right"),e.value&&p(e.value,"fade-in-left")}),(s,i)=>{const o=y,l=L;return n(),r("section",I,[a("div",N,[m(o,null,{default:$(()=>[T(d(s.$t("badges.ourAdvantages")),1)]),_:1}),a("h1",R,d(s.$t("ourAdvantages.title")),1),a("p",V,d(s.$t("ourAdvantages.subtitle")),1),a("div",O,[a("div",{ref_key:"advantagesCardLeft",ref:e},[m(l)],512),a("div",{ref_key:"advantagesCardRight",ref:t,class:"our-advantages__img"},i[0]||(i[0]=[a("img",{loading:"lazy",src:w,alt:""},null,-1)]),512)])])])}}});export{D as default};
