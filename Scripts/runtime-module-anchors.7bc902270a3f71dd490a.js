document&&document.currentScript&&document.currentScript.src,(self.webpackJsonpruntime=self.webpackJsonpruntime||[]).push([[898],{1525:(e,t,r)=>{r.r(t),r.d(t,{clean:()=>m,init:()=>u,onPageChange:()=>d});var n=r(602);class s{constructor({elementsSelector:e,listener:t,threshold:r}){this.onIntersection=e=>{e.forEach((e=>{e.isIntersecting?this.currentIntersecting.add(e.target):this.currentIntersecting.delete(e.target)})),this.listener(this.currentIntersecting)},this.elementSelector=e,this.listener=t,this.threshold=r,this.observer=new IntersectionObserver(this.onIntersection,{threshold:this.threshold}),this._init()}destroy(){this.elementsToMonitor.forEach((e=>{this.observer.unobserve(e)}))}_init(){this.elementsToMonitor=document.querySelectorAll(this.elementSelector)||[],this.currentIntersecting=new Set([]),this.elementsToMonitor.forEach((e=>{this.observer.observe(e)}))}reinit(){this.destroy(),this._init()}}s.displayName="ElementIntersectionObserver";const i=".unifiednav",o="dmNavItemSelected";let c,l;class h{constructor(){this.onObserverUpdated=e=>{this.currentIntersecting=Array.from(e)},this.onScroll=()=>{if(document.querySelector(".layout-drawer_open"))return;if(!this.currentIntersecting)return;const e=this.currentIntersecting.filter((e=>{const t=document.scrollingElement||document.documentElement;return(e.offsetTop-t.scrollTop)/window.innerHeight<.35}));this.transitioning||(this.transitioning=!0,window.requestAnimationFrame((()=>{this.navigationWidgets.forEach((t=>{(t.querySelectorAll("a")||[]).forEach((t=>{t.classList.remove(o),function({intersectingElements:e,href:t}){return e[e.length-1]&&(null==t?void 0:t.includes(e[e.length-1].getAttribute("id")))}({href:t.getAttribute("href"),intersectingElements:e})&&function(e){e.classList.add(o),a(e,[]).forEach((t=>{const r=t.querySelector("a");e&&r.classList.add(o)}))}(t)})),this.transitioning=!1})),function(e){e.length||Array.from(document.querySelectorAll(".currentPage")||[]).forEach((e=>{e.href.includes("#")||e.classList.add(o)}))}(e)})))},this.destroy=()=>{this.observer.destroy()},this._init()}reInitMarkers(){this._init()}_init(){if(!document.querySelectorAll(i))return this.observer&&this.observer.destroy(),void document.removeEventListener("scroll",this.onScroll,{passive:!0});document.removeEventListener("scroll",this.onScroll,{passive:!0}),document.addEventListener("scroll",this.onScroll,{passive:!0}),this.observer=function({elementsSelector:e,listener:t=(()=>{}),threshold:r=.2}={}){return new s({elementsSelector:e,listener:t,threshold:r})}({elementsSelector:"[data-anchor]",threshold:.4,listener:this.onObserverUpdated}),this.navigationWidgets=Array.from(document.querySelectorAll(i))||[]}}function a(e,t){return e.matches("nav")?t:(e.matches(".unifiednav__item-wrap")&&t.push(e),a(e.parentNode,t))}function u(){return l=(0,n.m)("feature.flag.mark.anchors")?(c=new h,c):null,Promise.resolve()}function d(){l&&l.reInitMarkers()}function m(){l&&l.clean()}h.displayName="AnchorMarker"}}]);