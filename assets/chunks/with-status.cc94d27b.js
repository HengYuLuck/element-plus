import{g as d,n as h,r as n,o as c,c as f,a as e,w as s,F as m,d as x,_ as r,f as a,u as i,y as S,ai as y,a3 as g,E as $}from"../app.7650a0c4.js";const T=x("Next step"),j=d({setup(l){const _=h(0),t=()=>{_.value++>2&&(_.value=0)};return(o,p)=>{const u=n("el-step"),v=n("el-steps"),b=n("el-button");return c(),f(m,null,[e(v,{active:_.value,"finish-status":"success"},{default:s(()=>[e(u,{title:"Step 1"}),e(u,{title:"Step 2"}),e(u,{title:"Step 3"})]),_:1},8,["active"]),e(b,{style:{"margin-top":"12px"},onClick:t},{default:s(()=>[T]),_:1})],64)}}});var H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:j});const z={};function M(l,_){const t=n("el-step"),o=n("el-steps");return c(),a(o,{active:2,"align-center":""},{default:s(()=>[e(t,{title:"Step 1",description:"Some description"}),e(t,{title:"Step 2",description:"Some description"}),e(t,{title:"Step 3",description:"Some description"}),e(t,{title:"Step 4",description:"Some description"})]),_:1})}var O=r(z,[["render",M]]),I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:O});const k=d({setup(l){return(_,t)=>{const o=n("el-step"),p=n("el-steps");return c(),f(m,null,[e(p,{space:200,active:1,simple:""},{default:s(()=>[e(o,{title:"Step 1",icon:i(S)},null,8,["icon"]),e(o,{title:"Step 2",icon:i(y)},null,8,["icon"]),e(o,{title:"Step 3",icon:i(g)},null,8,["icon"])]),_:1}),e(p,{active:1,"finish-status":"success",simple:"",style:{"margin-top":"20px"}},{default:s(()=>[e(o,{title:"Step 1"}),e(o,{title:"Step 2"}),e(o,{title:"Step 3"})]),_:1})],64)}}});var J=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:k});const w={},C={style:{height:"300px"}};function B(l,_){const t=n("el-step"),o=n("el-steps");return c(),f("div",C,[e(o,{direction:"vertical",active:1},{default:s(()=>[e(t,{title:"Step 1"}),e(t,{title:"Step 2"}),e(t,{title:"Step 3"})]),_:1})])}var F=r(w,[["render",B]]),K=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:F});const N={};function D(l,_){const t=n("el-step"),o=n("el-steps");return c(),a(o,{active:1},{default:s(()=>[e(t,{title:"Step 1",description:"Some description"}),e(t,{title:"Step 2",description:"Some description"}),e(t,{title:"Step 3",description:"Some description"})]),_:1})}var E=r(N,[["render",D]]),L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:E});const V=d({setup(l){return(_,t)=>{const o=n("el-step"),p=n("el-steps");return c(),a(p,{active:1},{default:s(()=>[e(o,{title:"Step 1",icon:i(S)},null,8,["icon"]),e(o,{title:"Step 2",icon:i($)},null,8,["icon"]),e(o,{title:"Step 3",icon:i(g)},null,8,["icon"])]),_:1})}}});var Q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:V});const P={};function q(l,_){const t=n("el-step"),o=n("el-steps");return c(),a(o,{space:200,active:1,"finish-status":"success"},{default:s(()=>[e(t,{title:"Done"}),e(t,{title:"Processing"}),e(t,{title:"Step 3"})]),_:1})}var A=r(P,[["render",q]]),R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:A});export{H as _,I as a,J as b,K as c,L as d,Q as e,R as f};