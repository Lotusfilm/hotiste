document&&document.currentScript&&document.currentScript.src,(self.webpackJsonpruntime=self.webpackJsonpruntime||[]).push([[45],{1045:(t,e,i)=>{i.r(e),i.d(e,{changeState:()=>l,init:()=>c});var n=i(5861),o=i(5421),a=i(2461);const r=(0,o.Z)({BUTTON:"BUTTON",ICON:"ICON"}),s={};function c(t){return Array.from(document.querySelectorAll(".dmLoginBar")).forEach((t=>{s[t.id]&&s[t.id].removeEventListeners(),s[t.id]=new u({container:t})})),s[(t||{}).id]||{}}function l(t,e){s[t].changeState(e)}const h=function(){var t=(0,n.Z)((function*(){return(yield window.dmAPI.getLoggedInUser()).userInfo}));return function(){return t.apply(this,arguments)}}();class u{constructor({container:t}){this.STATES={empty:{},loginButton:{},profileBar:{}},this.updateText=({state:t,element:e,text:i})=>{this.STATES[t][e].textContent=i,"memberNameSpan"===e&&this.STATES[t][e].setAttribute("data-label",i)},this.container=t,this.bindMethods(),this.initStates()}changeState(t){this.hideAll(),this.STATES[t].div.style.display="flex",this.container.setAttribute("data-showstate",t)}hideAll(){for(const t in this.STATES)this.STATES[t].hasOwnProperty("div")&&null!==this.STATES[t].div&&(this.STATES[t].div.style.display="none")}hideMyAccountLink(){this.changeMyAccount("none")}showMyAccountLink(){this.changeMyAccount(null)}changeMyAccount(t){const{myAccountLink:e}=this.STATES.profileBar;e&&(e.style.display=t)}bindMethods(){this.changeState=this.changeState.bind(this),this.hideAll=this.hideAll.bind(this),this.initStates=this.initStates.bind(this),this.initInitialState=this.initInitialState.bind(this)}initStates(){this.initEmptyState(),this.initLoginButtonState(),this.initProfileBarState(),this.initInitialState()}initInitialState(){var t=this;return(0,n.Z)((function*(){t.changeState("empty");try{const e=t.container.getAttribute("data-layout"),i=yield h();e===r.BUTTON&&t.updateText({state:"profileBar",element:"memberNameSpan",text:`${i.firstname} ${i.lastname}`}),t.changeState("profileBar"),window.Snipcart&&t.showMyAccountLink(),document.addEventListener("snipcart.ready",(()=>{t.showMyAccountLink()}))}catch(e){t.changeState("loginButton")}}))()}initEmptyState(){this.STATES.empty.div=this.container.querySelector(".empty-state")}initLoginButtonState(){this.STATES.loginButton.div=this.container.querySelector(".login-button-state")}handleClickMyAccount(){window.location.assign(`${window.location.pathname}#/dashboard`)}handleClickLogout(){return(0,n.Z)((function*(){try{yield fetch("/rts/auth/public/users/logout",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"}}),window.location.reload()}catch(t){a.Gl.warn({dataString:{message:"Error logging out a user",error:t}})}}))()}initProfileBarState(){const t=this.container.querySelector(".profile-bar-state");this.STATES.profileBar.div=t,this.STATES.profileBar.memberNameSpan=t.querySelector("#member-name"),this.STATES.profileBar.logoutLink=t.querySelector(".logout-link"),this.STATES.profileBar.myAccountLink=t.querySelector(".my-account-link"),this.hideMyAccountLink(),this.STATES.profileBar.myAccountLink.addEventListener("click",this.handleClickMyAccount),this.STATES.profileBar.logoutLink.addEventListener("click",this.handleClickLogout)}removeEventListeners(){this.STATES.profileBar.logoutLink.removeEventListener("click",this.handleClickLogout)}}u.displayName="LoginBar"}}]);