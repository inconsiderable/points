/*! For license information please see 255.514ff1b3.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkannotations=self.webpackChunkannotations||[]).push([[255],{7255:(t,e,n)=>{n.r(e),n.d(e,{startTapClick:()=>i});var o=n(3179),s=n(5315);const i=t=>{if(void 0===o.d)return;let e,n,i,f=10*-v,p=0;const h=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),L=new WeakMap,m=t=>{f=(0,s.u)(t),b(t)},w=()=>{i&&clearTimeout(i),i=void 0,e&&(C(!1),e=void 0)},E=t=>{e||k(a(t),t)},b=t=>{k(void 0,t)},k=(t,n)=>{if(t&&t===e)return;i&&clearTimeout(i),i=void 0;const{x:o,y:a}=(0,s.v)(n);if(e){if(L.has(e))throw new Error("internal error");e.classList.contains(d)||T(e,o,a),C(!0)}if(t){const e=L.get(t);e&&(clearTimeout(e),L.delete(t)),t.classList.remove(d);const n=()=>{T(t,o,a),i=void 0};r(t)?n():i=setTimeout(n,l)}e=t},T=(t,e,o)=>{if(p=Date.now(),t.classList.add(d),!h)return;const s=c(t);null!==s&&(g(),n=s.addRipple(e,o))},g=()=>{void 0!==n&&(n.then((t=>t())),n=void 0)},C=t=>{g();const n=e;if(!n)return;const o=u-Date.now()+p;if(t&&o>0&&!r(n)){const t=setTimeout((()=>{n.classList.remove(d),L.delete(n)}),u);L.set(n,t)}else n.classList.remove(d)};o.d.addEventListener("ionGestureCaptured",w),o.d.addEventListener("touchstart",(t=>{f=(0,s.u)(t),E(t)}),!0),o.d.addEventListener("touchcancel",m,!0),o.d.addEventListener("touchend",m,!0),o.d.addEventListener("pointercancel",w,!0),o.d.addEventListener("mousedown",(t=>{if(2===t.button)return;const e=(0,s.u)(t)-v;f<e&&E(t)}),!0),o.d.addEventListener("mouseup",(t=>{const e=(0,s.u)(t)-v;f<e&&b(t)}),!0)},a=t=>{if(void 0===t.composedPath)return t.target.closest(".ion-activatable");{const e=t.composedPath();for(let t=0;t<e.length-2;t++){const n=e[t];if(!(n instanceof ShadowRoot)&&n.classList.contains("ion-activatable"))return n}}},r=t=>t.classList.contains("ion-activatable-instant"),c=t=>{if(t.shadowRoot){const e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},d="ion-activated",l=100,u=150,v=2500}}]);