import{a as M}from"./chunk-2Y3KQHW3.js";import{d as k}from"./chunk-K33V4NYV.js";import{a as U}from"./chunk-26SID46P.js";import{Ca as p,Ha as C,J as y,M as g,Nb as R,Ra as f,T as s,Ta as S,Y as x,Ya as u,Za as c,_a as b,ab as _,ea as w,gb as l,hb as D,jb as j,ka as m,lb as I,ua as a,zb as d}from"./chunk-OPU2NDAG.js";function h(t,i){let n=!i?.manualCleanup;n&&!i?.injector&&w(h);let r=n?i?.injector?.get(m)??s(m):null,e;i?.requireSync?e=p({kind:0}):e=p({kind:1,value:i?.initialValue});let v=t.subscribe({next:o=>e.set({kind:1,value:o}),error:o=>{if(i?.rejectErrors)throw o;e.set({kind:2,error:o})}});return r?.onDestroy(v.unsubscribe.bind(v)),d(()=>{let o=e();switch(o.kind){case 1:return o.value;case 2:throw o.error;case 0:throw new g(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}})}function O(t,i){if(t&1&&(u(0,"section"),b(1,"img",1),u(2,"div")(3,"h3"),l(4),c(),u(5,"p"),l(6),c()()()),t&2){let n,r,e=_();a(),f("srcset",e.user().avatar)("alt",e.user().first_name),a(3),j("",(n=e.user())==null?null:n.first_name," ",(n=e.user())==null?null:n.last_name,""),a(2),D((r=e.user())==null?null:r.email)}}function E(t,i){t&1&&(u(0,"p"),l(1,"Cargando informaci\xF3n"),c())}var W=(()=>{class t{constructor(){this.route=s(k),this.usersService=s(M),this.user=h(this.route.params.pipe(y(({id:n})=>this.usersService.getUserById(n)))),this.titleLabel=d(()=>this.user()?`Informaci\xF3n del usuario: ${this.user()?.first_name} ${this.user()?.last_name} `:"Informaci\xF3n del usuario")}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275cmp=x({type:t,selectors:[["ng-component"]],standalone:!0,features:[I],decls:3,vars:2,consts:[[3,"title"],[3,"srcset","alt"]],template:function(r,e){r&1&&(b(0,"app-title",0),C(1,O,7,5,"section")(2,E,2,0)),r&2&&(f("title",e.titleLabel()),a(),S(1,e.user()?1:2))},dependencies:[R,U],encapsulation:2})}}return t})();export{W as default};
