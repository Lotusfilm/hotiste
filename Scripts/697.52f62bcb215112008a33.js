document&&document.currentScript&&document.currentScript.src,(self.webpackJsonpruntime=self.webpackJsonpruntime||[]).push([[697],{7697:(t,e,i)=>{"use strict";i.r(e),i.d(e,{clean:()=>D,getCurrentGallery:()=>U,init:()=>B,initGallery:()=>H,insert:()=>N});var a=i(5861),s=i(3493),n=i.n(s),o=i(2077),r=i(7491);const{THUMBNAIL:l}=r.WidthConsts,h=/(-)\d+(w\.[^\.]*?$)/;var g=i(9201),c=i(7664),d=i(6892),u=i(3816),m=i(3850),y=i(6732);class p{constructor(t){this.images=void 0,this.gallery=void 0,this.wrapImage=t=>{const e=t.find(">");return e.is(".thumbnailInnerWrapper")||e.wrapAll('<div class="thumbnailInnerWrapper" style="opacity:0"/>'),t},this.add=(t,e)=>{const i=e?0:this.images.length;return this.images.splice(i,0,this.wrapImage(t)),this.images},this.get=()=>this.images,this.getAsJQuery=()=>{const t=this.get();return $(t).map((function(){return this.toArray()}))},this.clear=()=>{this.images=[]},this.swap=(t,e)=>{const i=this.images[e];return this.images.splice(e,1),this.images.splice(t,0,i),this.images},this.remove=t=>(this.images=this.images.filter((e=>e.attr("id")!==t)),this.images),this.getImageAt=t=>t<this.images.length?this.images[t]:null,this.getNextImage=t=>{const e=t.attr("id"),i=Array.from(this.images).findIndex((t=>t.attr("id")===e));return i<0||i===this.images.length-1?null:this.images[i+1]},this.gallery=t;let e=Array.from(this.gallery.find("li.photoGalleryThumbs"));e.length&&e[0].hasAttribute("data-index")&&(e=e.sort(((t,e)=>(Number(t.dataset.index)||-1)>(Number(e.dataset.index)||-1)?1:-1))),this.images=e.map((t=>this.wrapImage($(t))))}}p.displayName="ImagesStack";const{SQUARE:f,VERTICAL:w,PINTEREST:v,PANORAMIC:I,ASYMETRIC:S,ASYMETRIC2:C,ASYMETRIC3:b,CLASSIC_ROUNDED:A,CLASSIC_DROPS:T,PINTEREST_ROUNDED:k,VERTICAL_ROUNDED:x}=c.PhotoGalleryLayouts;class L{constructor(t,e){this.layout=void 0,this.gallery=void 0,this.textLayout=void 0,this.imagesStack=void 0,this.layoutContainer=void 0,this.viewAll=void 0,this.galleryHolder=void 0,this.updateCaptionAlignment=()=>"captionAlignment-"+this.gallery.attr(`data-${this.device}-caption-alignment`)||0,this.updateTextLayout=()=>{let t=this.gallery.attr(`data-${this.device}-text-layout`);return t||this.gallery.hasClass("upgradedGallery")&&(t=this.gallery.attr("data-text-layout")),t||c.Ic.BOTTOM},this.getNumberOfRow=(t,e)=>{const i=this.layout.numberOfImagesPerColumn,a=Math.floor(e/i);return 1===t?a:Math.floor(a/t)},this.setLayout=t=>{t&&(this.gallery.attr("data-"+this.device+"-layout",t),this.layout=t)},this.get=()=>this.layout,this.getTextLayout=()=>this.textLayout,this.generateRow=(t,e="")=>$(`<div class='photogallery-row ${e}' data-index='${t}'/>`),this.generateColumn=(t,e="")=>$(`<div class='photogallery-column ${e}' data-index='${t}'/>`),this.generateImage=(t,e,i)=>(t.removeClass().addClass("photoGalleryThumbs "+(i||"")),t.attr("data-index",e),t),this.appendColumnsToRow=(t,e,i="")=>{for(let a=0;a<e;a++)t.append(this.generateColumn(a,`${i} column-${e}`))},this.getMaxHeight=t=>{let e=0;return t.each(((t,i)=>{const a=$(i).height();a>e&&(e=a)})),e},this.generateLayoutContainer=()=>$('<div class="layout-container '+this.layout+'" />'),this.clearCaptionInlineHeight=t=>{this.getRows(t).find(".photogallery-column .caption-container").css("height","")},this.getRows=t=>t?t.closest(".photogallery-row"):this.gallery.find(".photogallery-row"),this.equalCaptionsHeight=t=>{const e=this.getRows(t);if(this.textLayout===c.Ic.OVER)e.find(".photogallery-column .caption-container").css("height","100%");else if(this.textLayout===c.Ic.FIXED)e.find(".photogallery-column .caption-container").css("height","auto");else switch(this.layout){case v:case k:e.each(((t,e)=>{const i=$(e).find(".photogallery-column >:first-child .caption-container");i.css("height",""),i.height(this.getMaxHeight(i));const a=$(e).find(".photogallery-column >:last-child .caption-container");a.height(this.getMaxHeight(a))}));break;case C:case b:e.each(((t,e)=>{const i=$(e).find(".caption-container");i.css("height","");let a=0;i.each(((t,e)=>{const i=$(e).height();i>a&&(a=i)})),i.height(a),$(e).find(".asymetric-big-image .caption-container").height(2*a)}));break;default:e.each(((t,e)=>{const i=$(e).find(".photogallery-column .caption-container");i.css("height",""),i.height(this.getMaxHeight(i))}))}},this.isEven=t=>t%2==0,this.findColumnByIndex=(t,e)=>t.find('.photogallery-column[data-index="'+e+'"]'),this.drawSquare=()=>{const t=this.imagesStack.get(),e=this.getNumberOfColumns();let i;for(let a=0;a<t.length;a++){const s=this.generateImage(t[a],a);a%e==0&&(i=this.generateRow(Math.floor(a/e)),this.layoutContainer.append(i),this.appendColumnsToRow(i,e));const n=a%e;this.findColumnByIndex(i,n).append(s)}},this.calculateImageHeight=t=>{const e=t.find("img"),i=e.attr("data-src");let a=t.attr("data-ratio");if(a)this.updateImageHeightByRatio(a,t);else{const s=e.attr("irh"),n=e.attr("irw");if(s&&n)a=s/n,this.updateImageHeightByRatio(a,t);else{const e=new Image;e.onload=()=>{const i=e.naturalHeight,s=e.naturalWidth;a=i/s,this.updateImageHeightByRatio(a,t)},e.src=i}}},this.updateImageHeightByRatio=(t,e)=>{const i=e.find("a");i.css("padding","inherit"),i.css("height",t*e.width())},this.drawPinterest=()=>{const t=this.imagesStack.get(),e=1*this.getNumberOfColumns();let i,a,s,n=0;const o=0===this.isEven(e),r=1===e?e:2*e;for(let l=0;l<t.length;l++){let h;l%r==0&&(a=Math.floor(l/e),i=this.generateRow(a),this.layoutContainer.append(i),this.appendColumnsToRow(i,e)),n=l%e,s=this.findColumnByIndex(i,n),h=this.isEven(l)&&this.isEven(n)&&0===s.children().length||(!this.isEven(l)||!o)&&!this.isEven(n)&&1===s.children().length?this.generateImage(t[l],l,"pinterest-low"):this.generateImage(t[l],l,"pinterest-high"),s.append(h)}},this.drawPanoramic=()=>{const t=this.imagesStack.get();let e;for(let i=0;i<t.length;i++){const a=this.generateImage(t[i],i,"panoramic-height");e=this.generateRow(Math.floor(i)),this.layoutContainer.append(e),e.append(this.generateColumn(0,"column-1")),e.find(".photogallery-column").append(a)}},this.drawVertical=()=>{const t=this.imagesStack.get(),e=this.getNumberOfColumns();let i;for(let a=0;a<t.length;a++){const s=this.generateImage(t[a],a,"vertical-height");a%e==0&&(i=this.generateRow(Math.floor(a/e)),this.layoutContainer.append(i),this.appendColumnsToRow(i,e));const n=a%e;this.findColumnByIndex(i,n).append(s)}},this.calculateAsymetricsColumns=()=>{const t=1*this.getNumberOfColumns();if(1===t||this.layout!==C&&this.layout!==b)return;const e=this.layout===b?2:1.5;let i;const a=100/t,s=Math.ceil(t/2),n=40/Math.floor(t/2),o=60/s,r=this.gallery.find(".photogallery-column"),l=r.eq(0).find("li").css("padding")||"0px";r.each(((t,s)=>{const r=$(s),h=r.find(".image-container a");r.hasClass("row-direction")?(r.css("width",o+"%"),i=a/o*100+"%",h.css("padding-top",i),this.layout===b&&r.find(".asymetric3-long-image .image-container a").css("padding-top",a/o*50+"%")):(r.css("width",n+"%"),i=`calc(${a/n*100}% + ${l.replace("px","")*e}px)`,h.css("padding-top",i))}))},this.drawAsymetric2=()=>{const t=this.imagesStack.get(),e=this.getNumberOfColumns();let i,a=0,s=this.generateRow(a),n=0,o=0,r=this.isEven(a);for(let l=0;l<t.length;l++){if(0===o){n===1*e&&(a++,s=this.generateRow(a),r=this.isEven(a),n=0),r=!r,o=r?1:4;const t=(r?"":"row-direction ")+"column-"+e;i=this.generateColumn(n,t),s.append(i),this.layoutContainer.append(s),n++}const h=r?"asymetric-big-image":"flex column width-50",g=this.generateImage(t[l],l,h);i.append(g),o--}},this.drawAsymetric3=()=>{const t=this.imagesStack.get(),e=this.getNumberOfColumns();let i,a=0,s=this.generateRow(a),n=0,o=0,r=!this.isEven(a);for(let l=0;l<t.length;l++){if(0===o){n===1*e&&(a++,s=this.generateRow(a),r=!this.isEven(a),n=0),r=!r,o=r?1:3;const t=(r?"":"row-direction ")+"column-"+e;i=this.generateColumn(n,t),s.append(i),this.layoutContainer.append(s),n++}let h;h=r?"asymetric-big-image":1===o?"flex column asymetric3-long-image":"flex column width-50";const g=this.generateImage(t[l],l,h);i.append(g),o--}},this.getNumberOfColumns=({ignoreAutoAdjust:t}={})=>{let e=this.gallery.attr("data-"+this.device+"-columns");const i="true"===this.gallery.attr("data-auto-adjust-columns");if(this.device===c.AS.MOBILE&&(this.layout===C||this.layout===b))return"1";if(!e)if(this.device===c.AS.DESKTOP)e="4";else if(this.device===c.AS.TABLET)e=this.gallery.attr("data-desktop-columns")||"4";else{const t=1*(this.gallery.attr("data-desktop-columns")||4);e=Math.min(2,t).toString()}const a=t||this.layout===C||this.layout===b||this.layout===I;if(i&&!a){const t=this.imagesStack.images.length,i=parseInt(e,10);return""+this.getAutoAdjustedNumberOfColumns(t,i)}return e},this.getAutoAdjustedNumberOfColumns=(t,e)=>{if(t<=e)return t;if(0==t%e)return e;let i=1;for(i=1;i<3;i++){if(e-i>1&&t%(e-i)==0)return e-i;if(t%(e+i)==0)return e+i}return e},this.draw=()=>{var t;this.layoutContainer&&this.layoutContainer.remove(),this.layoutContainer=this.generateLayoutContainer();const e=this.imagesStack.getAsJQuery();switch(e.css("background-image",""),e.find("a").attr("style",""),this.layout){case f:case A:case T:case S:this.drawSquare();break;case v:case k:this.drawPinterest();break;case I:this.drawPanoramic();break;case w:case x:this.drawVertical();break;case C:this.drawAsymetric2();break;case b:this.drawAsymetric3()}this.viewAll.length?this.layoutContainer.insertBefore(this.viewAll):this.layoutContainer.insertAfter(this.galleryHolder),this.calculateAsymetricsColumns();const i=(a=this.gallery)?a.jquery?a.get(0):a:null;var a;null==i||null===(t=i.classList)||void 0===t||t.forEach((t=>{t.startsWith("text-layout-")&&this.gallery.removeClass(t)})),this.gallery.removeClass(this.captionAlignment),this.textLayout=this.updateTextLayout(),this.captionAlignment=this.updateCaptionAlignment(),this.gallery.addClass("text-layout-"+this.textLayout),this.gallery.addClass(this.captionAlignment),this.gallery.addClass("photo-gallery-done"),this.layoutContainer.find(".photogallery-row").addClass("photogallery-hidden-row")},this.isCaptionElementVisible=(t,e)=>{const i=t.find(".caption-inner"),a=t.find(".caption-container");return i.length>0&&"none"!==i.css("display")&&"none"!==a.css("display")&&"none"!==t.find(e).css("display")},this.gallery=t,this.layout=this.gallery.attr("data-"+this.device+"-layout")||this.gallery.attr("data-desktop-layout")||f,this.textLayout=this.updateTextLayout(),this.captionAlignment=this.updateCaptionAlignment(),this.imagesStack=e,this.viewAll=this.gallery.find(".photoGalleryViewAll"),this.galleryHolder=this.gallery.find(".dmPhotoGalleryHolder"),this.gallery.find(".layout-container").length&&this.gallery.find(".layout-container").remove()}get device(){return m.vL()}}L.displayName="LayoutProvider";const{inEditorMode:P,inPreviewMode:E,inRuntimeMode:R}=m;class O{constructor(t){var e=this;this.layoutProvider=void 0,this.imagesStack=void 0,this.gallery=void 0,this.galleryType=void 0,this.galleryId=void 0,this.rowsToShow=void 0,this.rows=void 0,this.imagesToUnveil=void 0,this.viewImagesButton=void 0,this.animationDelay=0,this.enableLazyLoading=void 0,this.unveilThreshold=void 0,this.init=t=>{this.getElementDimensions=this.getElementDimensions.bind(this),this.gallery=t,this.galleryId=this.gallery.attr("id"),this.galleryType=this.gallery.attr("data-link-gallery")&&"true"===this.gallery.attr("data-link-gallery")?"link":"photoSwipe",this.rowsToShow=this.getRowsToShow(),this.enableLazyLoading=this.getLazyLoading(),this.viewImagesButton=this.gallery.find(".photoGalleryViewAll"),this.imagesStack=new p(this.gallery),this.imagesToUnveil=[],this.animation=this.gallery.attr("data-image-animation")||"none",this.layoutProvider=new L(this.gallery,this.imagesStack),this.initLayout()},this.initLayout=(t,e)=>{this.unveilThreshold=this.animation?0:500,this.cleanAnchors(),this.layoutProvider.setLayout(t),this.layoutProvider.draw(),this.rows=this.gallery.find(".photogallery-row"),this.manageRowsVisibility(),this.initUnveilImages({skipAnimation:e}),this.addEvents(e),this.initLinks()},this.getLazyLoading=()=>{const t=this.gallery.attr("data-enable-lazy-loading");return!t||"true"===t},this.initLinks=()=>{this.imagesStack.get().forEach((t=>{const e=$(t).find(".image-container a"),i=e.find("img"),a=e.attr("href")||"",s=i.attr("data-src")||"";a&&s===a&&a.length&&e.attr("href","")}))},this.changeRowsToShow=t=>{const e=this.isInstagramConnected()?"data-"+this.device+"-rows-to-show":"data-rows-to-show";this.gallery.attr(e,t),this.rowsToShow=t,this.initLayout()},this.getRowsToShow=()=>this.isInstagramConnected()?this.gallery.attr("data-"+this.device+"-rows-to-show"):this.gallery.attr("data-rows-to-show")||"4",this.manageRowsVisibility=()=>{let t;const e=this.gallery.attr(g.H.VIEW_MORE_VISIBILITY_ATTRIBUTE);"100"===this.rowsToShow?t=this.rows:"all"===(this.viewImagesButton.attr("data-mode")||"all")?(t=this.rows.slice(0,this.rowsToShow),this.viewImagesButton.text(this.viewImagesButton.attr("data-viewall"))):(t=this.rows,this.viewImagesButton.text(this.viewImagesButton.attr("data-viewless"))),"false"!==e&&this.rows.length>this.rowsToShow?this.viewImagesButton.show():this.viewImagesButton.hide(),t.removeClass("photogallery-hidden-row")},this.handleViewMoreVisibleChange=t=>{"false"===t&&this.viewImagesButton.attr("data-mode","all"),this.initLayout()},this.onUnveil=t=>{if(!this.enableLazyLoading)return this.imagesToUnveil=[],void this.revealElements(this.imagesStack.getAsJQuery(),t);if(!(0,o.PZ)(this.gallery[0],this.unveilThreshold))return;const e=this.imagesToUnveil.filter(((t,e)=>(0,o.PZ)(e,this.unveilThreshold)));e.length&&(this.imagesToUnveil=this.imagesToUnveil.not(e),this.revealElements(this.isInPopup()?this.imagesStack.getAsJQuery():e,t))},this.initUnveilImages=(t={})=>{const e=m.$q(this.device),i=8===e||7===e?$("#iscrollBody"):$(window);this.imagesToUnveil=this.imagesStack.getAsJQuery();const a=`touchmove.unveil-${this.galleryId}\n        scroll.unveil-${this.galleryId}\n        resize.unveil-${this.galleryId}\n        lookup.unveil-${this.galleryId} `;return i.off(a).on(a,n()((()=>this.onUnveil(t.skipAnimation)),500)),this.onUnveil(t.skipAnimation),this},this.getImagePhotoswipeObject=t=>{if(!t.length)return null;const e=t.find("img"),i=t.find(".caption-title"),a=e.attr("data-src");let s="";this.layoutProvider.isCaptionElementVisible(t,".caption-text")&&t.find(".caption-text").contents().filter((t=>3!==t.nodeType)).each(((t,e)=>{s+=e.textContent.trim()+" "}));const n=new Image;return n.decoding="async",n.src=a,{w:n.width,h:n.height,src:a,el:t,author:i.length?i.text().trim():"",title:s||""}},this.getImagesAsPhotoswipeItems=t=>t.map((t=>this.getImagePhotoswipeObject($(t)))),this.initPhotoSwipeFromDOM=t=>{this.imagesStack.getAsJQuery().off("click.photoSwipe").on("click.photoSwipe",(t=>{t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation();const e=t.target||t.srcElement,i=$(e).closest("li"),a=i.attr("data-index");this.openPhotoSwipe(a,i)}))},this.openPhotoSwipe=(t,e)=>{const i=document.querySelectorAll(".pswp")[0],a={galleryUID:this.galleryId,index:1*t,shareEl:!this.gallery.attr("data-hide-share")},s=this.getImagesAsPhotoswipeItems(this.imagesStack.get());this.photoSwipeGallery=new window.PhotoSwipe(i,window.PhotoSwipeUI_Default,s,a),this.photoSwipeGallery.listen("gettingData",((t,e)=>{if(e.w<1||e.h<1){const t=new Image,i=this.photoSwipeGallery;t.onload=function(){e.w=this.width,e.h=this.height,e.needsUpdate=!0,i.updateSize(!0)},t.src=e.src}})),this.photoSwipeGallery.init()},this.revealElements=(t,i)=>{let s=100;Array.from(t).filter((t=>t.querySelector("[data-src]"))).forEach(function(){var t=(0,a.Z)((function*(t){const i=$(t);if(e.animation&&(t.style.setProperty("animation-delay",`${s}ms`),s+=100),!t.querySelector("[data-src]").getAttribute("data-src"))return;const a=t.querySelector(".image-container");a.querySelectorAll("a").forEach((t=>{const a=t.querySelector("[data-src]").getAttribute("data-src");if(!a)return;const s=e.getSourceByDevice(a,i);requestAnimationFrame((()=>{t.style.setProperty("background-image",`url('${s}')`)}))})),yield u.po($(a),{background:!0}),a.classList.add("revealed"),e.layoutProvider.get()===c.PhotoGalleryLayouts.ASYMETRIC&&e.oldLayoutFix({thumb:i})&&(yield e.waitForTransition(a)),a.closest(".thumbnailInnerWrapper").style.setProperty("opacity","1")}));return function(e){return t.apply(this,arguments)}}()),this.layoutProvider.getTextLayout()===c.Ic.BOTTOM?this.layoutProvider.equalCaptionsHeight(t):this.layoutProvider.clearCaptionInlineHeight(t),i||(t.removeClass("animated "+this.animation),t.addClass("animated "+this.animation))},this.getSourceByDevice=(t,e)=>{if(P()&&!E()||"true"===this.gallery.attr("data-dm-multisize-skip-opt"))return t;{if(this.isSignedUrl(t))return t;const{width:i,height:a}=this.getElementDimensions(e);if((0,d.i)("feature.flag.photo.gallery.exact.size")){const e=i>=a,s=(e?i:a)+(e?a/4:i/4);return this.replaceSourcePath(t,s)}return i>=a?i<=160&&a<=90?this.replaceSourcePath(t,"thumbnail"):i<=640?this.replaceSourcePath(t,"mobile"):i<=1280?this.replaceSourcePath(t,"tablet"):t:i<=160&&a<=90?this.replaceSourcePath(t,"thumbnail"):"mobile"===this.device?this.replaceSourcePath(t,"mobile"):i<=1280?this.replaceSourcePath(t,"tablet"):t}},this.updateLazyLoading=t=>{this.enableLazyLoading=t},this.changeTextLayout=t=>{this.gallery.attr("data-desktop-text-layout",t),this.initLayout()},this.changeNumberOfColumns=t=>{this.gallery.attr("data-desktop-columns",this.numberOfColumns),this.initLayout()},this.onViewImagesClicked=t=>{t.preventDefault(),t.stopPropagation();const e=this.viewImagesButton.attr("data-mode")||"all";this.viewImagesButton.attr("data-mode","all"===e?"less":"all"),this.initLayout()},this.cleanAnchors=()=>{this.imagesStack.getAsJQuery().find(".image-container a").css("background-image","")},this.addEvents=t=>{const e=this.gallery.find(".caption-button");if(this.viewImagesButton.off("click.viewallbutton").on("click.viewallbutton",this.onViewImagesClicked),E()||R()){const t=this.gallery.find(".image-container > a");if(t.off("click.photogallery").on("click.photogallery",(function(t){this.getAttribute("href")&&this.getAttribute("href")!==this.getAttribute("data-image-url")||t.preventDefault()})),E()?y.d6(e):e.on("click",(t=>{t.stopPropagation()})),"photoSwipe"===this.galleryType){if(P()&&!E())return void this.imagesStack.getAsJQuery().off("click.photoSwipe");this.initPhotoSwipeFromDOM()}else this.imagesStack.getAsJQuery().off("click.photoSwipe");y.zK(t),y.zK(e)}if(P()){const e=setInterval((()=>{var i;const a=null===(i=window)||void 0===i||null===(i=i.parent)||void 0===i||null===(i=i.$)||void 0===i?void 0:i.dmx;a&&(clearInterval(e),a.events&&(window.parent.$.dmx.events.on("siteHeightChange",(()=>{this.onUnveil(t)})),window.parent.$.dmx.events.on("previewMobileOrientationRotated.photogallery-"+this.galleryId,(()=>{this.initLayout()}),!0,{scope:"page"}),window.parent.$.dmx.events.off("onePreviewToggle.photogallery-"+this.galleryId).on("onePreviewToggle.photogallery-"+this.galleryId,(t=>{this.photoSwipeGallery&&this.photoSwipeGallery.close(),t&&t.preview?this.initLayout():this.imagesStack.getAsJQuery().off("click.photoSwipe")}))))}),300)}},this.getNumberOfColumns=()=>this.layoutProvider.getNumberOfColumns(),this.equalCaptionsHeight=t=>{this.layoutProvider.equalCaptionsHeight(t)},this.setLinkGallery=t=>{t?(this.galleryType="link",this.imagesStack.get().forEach((t=>{const e=$(t).find(".image-container a"),i=e.attr("data-link-url")||"";e.attr("href",i)}))):(this.imagesStack.get().forEach((t=>{const e=$(t).find(".image-container a"),i=e.attr("href");e.attr("data-link-url",i)})),this.galleryType="photoSwipe"),this.initLayout()},this.initAnimation=(t,e)=>{this.gallery.find("li.photoGalleryThumbs").removeClass("animated "+e).addClass("animated "+t).css("animation-name",""),this.gallery.attr("data-image-animation",t),this.animation=t,this.initLayout()},this.getNextImage=t=>this.imagesStack.getNextImage(t),this.getId=()=>this.gallery[0].id,this.swapImages=(t,e)=>{this.imagesStack.swap(t,e),this.initLayout()},this.getImages=()=>this.imagesStack.get(),this.addImage=(t,e)=>{this.imagesStack.add($(t),e),this.initLayout()},this.removeImage=t=>{this.imagesStack.remove(t)},this.isInPopup=()=>this.gallery.closest("#dmPopup"),this.init(t)}get device(){return m.vL()}get animation(){return this._animation}set animation(t){this._animation!==t&&(this._animation="none"!==t?t:null)}isInstagramConnected(){return this.gallery.attr(g.H.INSTAGRAM_USERNAME_ATTRIBUTE)}oldLayoutFix({thumb:t}){this.layoutProvider.calculateImageHeight(t);const e=this.gallery.attr("data-image-hover-effect");return this.animation&&e&&"false"!==e&&"none"!==e}waitForTransition(t){return new Promise((e=>{$(t).one("transitionend",e)}))}getElementDimensions(t){const e=t.length?t[0]:t;try{const t=e.getBoundingClientRect();return{width:t.width,height:t.height}}catch(t){return{width:0,height:0}}}isSignedUrl(t){if(!t)return!1;try{const e=new URL(t);return e&&e.pathname&&e.pathname.startsWith("/s/")}catch(t){return!1}}replaceSourcePath(t,e){return t.includes("/multi/opt/")||"number"==typeof e?function(t,e=l){const i="number"==typeof e?Math.round(e):r.D0[e]||160;return t.replace(h,`$1${i}$2`)}(t,e):t.replace(/\/multi\/(?:desktop\/|tablet\/|thumbnail\/|mobile\/)?/gi,`/multi/${e}/`)}}O.displayName="PhotoGallery";let M=[];function B(t={}){var e;const i=$(".dmPhotoGallery"),a=i.length;M=[],$.dmrt.components.photogallery={load(){},default:{ready(){},load(){}}},null!==(e=$.dmrt)&&void 0!==e&&null!==(e=e.photogallery)&&void 0!==e&&e.oldComponent&&($.dmrt.components.photogallery.oldComponent=Object.assign({},$.dmrt.photogallery.oldComponent));for(let e=0;e<a;e++)N(i.eq(e),t)}function N(t,e={}){var i;let a;t.hasClass("newPhotoGallery")?(t.data("initialized")&&!e.force?a=t.data("initialized"):(e.disableLazyLoading&&t.attr("data-enable-lazy-loading","false"),e.disableAnimation&&t.removeAttr("data-image-animation"),a=new O(t),t.data("initialized",a)),M.push(a)):null!==(i=$.dmrt.components)&&void 0!==i&&i.photogallery.oldComponent&&$.dmrt.components.photogallery.oldComponent.default.ready()}function D(){}function U(t){for(let e=0;e<M.length;e++)if(M[e].getId()===t)return M[e];return null}function H(t){M||(M=[]);const e=new O(t);t.data("initialized",e),M.push(e)}},7561:(t,e,i)=>{var a=i(7990),s=/^\s+/;t.exports=function(t){return t?t.slice(0,a(t)+1).replace(s,""):t}},7990:t=>{var e=/\s/;t.exports=function(t){for(var i=t.length;i--&&e.test(t.charAt(i)););return i}},3279:(t,e,i)=>{var a=i(3218),s=i(7771),n=i(4841),o=Math.max,r=Math.min;t.exports=function(t,e,i){var l,h,g,c,d,u,m=0,y=!1,p=!1,f=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function w(e){var i=l,a=h;return l=h=void 0,m=e,c=t.apply(a,i)}function v(t){var i=t-u;return void 0===u||i>=e||i<0||p&&t-m>=g}function I(){var t=s();if(v(t))return S(t);d=setTimeout(I,function(t){var i=e-(t-u);return p?r(i,g-(t-m)):i}(t))}function S(t){return d=void 0,f&&l?w(t):(l=h=void 0,c)}function C(){var t=s(),i=v(t);if(l=arguments,h=this,u=t,i){if(void 0===d)return function(t){return m=t,d=setTimeout(I,e),y?w(t):c}(u);if(p)return clearTimeout(d),d=setTimeout(I,e),w(u)}return void 0===d&&(d=setTimeout(I,e)),c}return e=n(e)||0,a(i)&&(y=!!i.leading,g=(p="maxWait"in i)?o(n(i.maxWait)||0,e):g,f="trailing"in i?!!i.trailing:f),C.cancel=function(){void 0!==d&&clearTimeout(d),m=0,l=u=h=d=void 0},C.flush=function(){return void 0===d?c:S(s())},C}},3448:(t,e,i)=>{var a=i(4239),s=i(7005);t.exports=function(t){return"symbol"==typeof t||s(t)&&"[object Symbol]"==a(t)}},7771:(t,e,i)=>{var a=i(5639);t.exports=function(){return a.Date.now()}},3493:(t,e,i)=>{var a=i(3279),s=i(3218);t.exports=function(t,e,i){var n=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return s(i)&&(n="leading"in i?!!i.leading:n,o="trailing"in i?!!i.trailing:o),a(t,e,{leading:n,maxWait:e,trailing:o})}},4841:(t,e,i)=>{var a=i(7561),s=i(3218),n=i(3448),o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,l=/^0o[0-7]+$/i,h=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(n(t))return NaN;if(s(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=s(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=a(t);var i=r.test(t);return i||l.test(t)?h(t.slice(2),i?2:8):o.test(t)?NaN:+t}}}]);