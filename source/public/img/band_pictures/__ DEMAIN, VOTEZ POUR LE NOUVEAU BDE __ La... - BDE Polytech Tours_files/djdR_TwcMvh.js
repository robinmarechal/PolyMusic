/*!CK:376064045!*//*1456519472,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["igFYw"]); }

__d('CarouselVideoPlayerController',['VideoAutoplayControllerX','VideoAutoplayPlayerBase','VideoPlayerLoggerEvent','VideoPlayerReason','getElementPosition','getViewportDimensions','tidyEvent'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p;if(c.__markCompiled)c.__markCompiled();o=babelHelpers.inherits(q,i);p=o&&o.prototype;function q(r){'use strict';p.constructor.call(this);this.$CarouselVideoPlayerController1=r.video_units;this.$CarouselVideoPlayerController2=r.carousel;this.$CarouselVideoPlayerController3=r.should_autoplay;this.$CarouselVideoPlayerController5=r.root;this.$CarouselVideoPlayerController4=this.$CarouselVideoPlayerController2.getVisibleIndex();this.$CarouselVideoPlayerController1.forEach(function(s,t){if(s)n(s.addListener('turnOffAutoplay',function(){return this.emit('turnOffAutoplay');}.bind(this)));}.bind(this),this);}q.registerCarousel=function(r){'use strict';var s=new q(r);h.registerVideoUnit(s);return s;};q.prototype.isVisible=function(){'use strict';var r=m().height,s=l(this.$CarouselVideoPlayerController5);if(s.height===0)return false;var t=s.y,u=s.y+s.height;return t>=0&&u<r;};q.prototype.getDistanceToViewport=function(){'use strict';var r=m().height,s=l(this.$CarouselVideoPlayerController5);if(s.height===0)return -Infinity;return s.y-r/2;};q.prototype.logDisplayed=function(){'use strict';if(this.$CarouselVideoPlayerController1[this.$CarouselVideoPlayerController4])this.$CarouselVideoPlayerController1[this.$CarouselVideoPlayerController4].logEvent(j.DISPLAYED);};q.prototype.playWithoutUnmute=function(r){'use strict';if(this.$CarouselVideoPlayerController1[this.$CarouselVideoPlayerController4])this.$CarouselVideoPlayerController1[this.$CarouselVideoPlayerController4].play(r);};q.prototype.pause=function(r){'use strict';if(this.$CarouselVideoPlayerController1[this.$CarouselVideoPlayerController4])this.$CarouselVideoPlayerController1[this.$CarouselVideoPlayerController4].pause(r);};q.prototype.isAutoplayable=function(){'use strict';return this.$CarouselVideoPlayerController3;};q.prototype.getDOMPosition=function(){'use strict';return l(this.$CarouselVideoPlayerController5);};q.prototype.isLooping=function(){'use strict';return !!this.$CarouselVideoPlayerController1[this.$CarouselVideoPlayerController4].getOption('Looping','isLooping');};q.prototype.preload=function(){'use strict';if(this.$CarouselVideoPlayerController1[this.$CarouselVideoPlayerController4])this.$CarouselVideoPlayerController1[this.$CarouselVideoPlayerController4].preload();};q.prototype.getIsInChannel=function(){'use strict';return false;};q.prototype.abortLoading=function(){'use strict';return;};q.prototype.slide=function(){'use strict';this.$CarouselVideoPlayerController4=this.$CarouselVideoPlayerController2.getVisibleIndex();this.$CarouselVideoPlayerController1.forEach(function(r,s){if(r)if(s===this.$CarouselVideoPlayerController4){if(this.$CarouselVideoPlayerController3)r.play(k.AUTOPLAY);}else r.pause(k.PAGE_VISIBILITY);}.bind(this));};f.exports=q;},null);
__d('ExtendedMultiShareCarouselPagerArrowsVisible',['Animation','Arbiter','CSS','DOMQuery','Ease','Event','Locale','Run','TidyArbiterMixin','TrackingNodes','TrackingNodeTypes','CarouselVideoPlayerController','cx','csx','mixin','tidyEvent'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){var x,y;if(c.__markCompiled)c.__markCompiled();var z=312,aa=176,ba=6,ca=1,da=350;x=babelHelpers.inherits(ea,v(p));y=x&&x.prototype;function ea(fa){'use strict';y.constructor.call(this);this.$ExtendedMultiShareCarouselPagerArrowsVisible1=fa.node;this.$ExtendedMultiShareCarouselPagerArrowsVisible2=fa.grid;this.$ExtendedMultiShareCarouselPagerArrowsVisible3=fa.prev_pager;this.$ExtendedMultiShareCarouselPagerArrowsVisible4=fa.next_pager;this.$ExtendedMultiShareCarouselPagerArrowsVisible5=fa.disable_pager_arrow_timeout;this.$ExtendedMultiShareCarouselPagerArrowsVisible6=fa.item_width||z;this.$ExtendedMultiShareCarouselPagerArrowsVisible7=fa.link_width||aa;this.$ExtendedMultiShareCarouselPagerArrowsVisible8=fa.num_visible_items||ca;this.$ExtendedMultiShareCarouselPagerArrowsVisible9=fa.edit_mode;this.$ExtendedMultiShareCarouselPagerArrowsVisible10=fa.video_units;this.$ExtendedMultiShareCarouselPagerArrowsVisible11=fa.should_autoplay;this.$ExtendedMultiShareCarouselPagerArrowsVisible12=null;this.$ExtendedMultiShareCarouselPagerArrowsVisible13=0;this.$ExtendedMultiShareCarouselPagerArrowsVisible14=12;this.$ExtendedMultiShareCarouselPagerArrowsVisible15=n.isRTL()?'right':'left';this.$ExtendedMultiShareCarouselPagerArrowsVisible2.style[this.$ExtendedMultiShareCarouselPagerArrowsVisible15]=this.$ExtendedMultiShareCarouselPagerArrowsVisible14+'px';this.$ExtendedMultiShareCarouselPagerArrowsVisible16();var ga={video_units:this.$ExtendedMultiShareCarouselPagerArrowsVisible10,carousel:this,should_autoplay:this.$ExtendedMultiShareCarouselPagerArrowsVisible11,root:this.$ExtendedMultiShareCarouselPagerArrowsVisible1};this.$ExtendedMultiShareCarouselPagerArrowsVisible17=s.registerCarousel(ga);fa.extensions.forEach(function(ha){ha.init(this);},this);this.subscribe('autoscroll',this.$ExtendedMultiShareCarouselPagerArrowsVisible18.bind(this));w([m.listen(this.$ExtendedMultiShareCarouselPagerArrowsVisible3,'click',this.$ExtendedMultiShareCarouselPagerArrowsVisible19.bind(this)),m.listen(this.$ExtendedMultiShareCarouselPagerArrowsVisible4,'click',this.$ExtendedMultiShareCarouselPagerArrowsVisible18.bind(this))]);this.init_pagers();if(this.$ExtendedMultiShareCarouselPagerArrowsVisible9)this.$ExtendedMultiShareCarouselPagerArrowsVisible12=i.subscribe(['carousel-composer/carousel_card_change'],this.$ExtendedMultiShareCarouselPagerArrowsVisible20.bind(this));o.onLeave(function(){this.$ExtendedMultiShareCarouselPagerArrowsVisible12&&this.$ExtendedMultiShareCarouselPagerArrowsVisible12.remove();}.bind(this));}ea.prototype.getVisibleIndex=function(){'use strict';return this.$ExtendedMultiShareCarouselPagerArrowsVisible13;};ea.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible20=function(){'use strict';this.$ExtendedMultiShareCarouselPagerArrowsVisible13=0;this.$ExtendedMultiShareCarouselPagerArrowsVisible14=12;this.$ExtendedMultiShareCarouselPagerArrowsVisible2.style[this.$ExtendedMultiShareCarouselPagerArrowsVisible15]=this.$ExtendedMultiShareCarouselPagerArrowsVisible14+'px';this.refresh();};ea.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible21=function(){'use strict';if(this.$ExtendedMultiShareCarouselPagerArrowsVisible9){return this.$ExtendedMultiShareCarouselPagerArrowsVisible22()-this.getLastVisibleIndex();}else return this.$ExtendedMultiShareCarouselPagerArrowsVisible2.childNodes.length-this.getLastVisibleIndex();};ea.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible23=function(){'use strict';return this.$ExtendedMultiShareCarouselPagerArrowsVisible13;};ea.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible24=function(){'use strict';return this.$ExtendedMultiShareCarouselPagerArrowsVisible23()>0;};ea.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible25=function(){'use strict';return this.$ExtendedMultiShareCarouselPagerArrowsVisible21()>0;};ea.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible18=function(){'use strict';if(!this.$ExtendedMultiShareCarouselPagerArrowsVisible25())return;this.$ExtendedMultiShareCarouselPagerArrowsVisible26(1,this.$ExtendedMultiShareCarouselPagerArrowsVisible24());this.$ExtendedMultiShareCarouselPagerArrowsVisible16();};ea.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible19=function(){'use strict';if(!this.$ExtendedMultiShareCarouselPagerArrowsVisible24())return;this.$ExtendedMultiShareCarouselPagerArrowsVisible26(-1,this.$ExtendedMultiShareCarouselPagerArrowsVisible25());this.$ExtendedMultiShareCarouselPagerArrowsVisible16();};ea.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible27=function(){'use strict';return this.$ExtendedMultiShareCarouselPagerArrowsVisible25()&&this.$ExtendedMultiShareCarouselPagerArrowsVisible24();};ea.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible16=function(){'use strict';if(this.$ExtendedMultiShareCarouselPagerArrowsVisible25())q.addDataAttribute(this.$ExtendedMultiShareCarouselPagerArrowsVisible4,r.MULTI_ATTACHMENT_PAGER_NEXT,this.getLastVisibleIndex()+1);};ea.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible28=function(fa){'use strict';var ga=fa?"_3dm4":"_3dm5",ha=fa?"_3rvy":"_3rv-",ia=fa?this.$ExtendedMultiShareCarouselPagerArrowsVisible24():this.$ExtendedMultiShareCarouselPagerArrowsVisible25(),ja=!this.$ExtendedMultiShareCarouselPagerArrowsVisible27()&&!ia;if(ja){j.addClass(this.$ExtendedMultiShareCarouselPagerArrowsVisible1,ha);setTimeout(function(){j.addClass(this.$ExtendedMultiShareCarouselPagerArrowsVisible1,ga);}.bind(this),this.$ExtendedMultiShareCarouselPagerArrowsVisible5);}else{j.removeClass(this.$ExtendedMultiShareCarouselPagerArrowsVisible1,ha);j.removeClass(this.$ExtendedMultiShareCarouselPagerArrowsVisible1,ga);}};ea.prototype.getLastVisibleIndex=function(){'use strict';return this.$ExtendedMultiShareCarouselPagerArrowsVisible13+this.$ExtendedMultiShareCarouselPagerArrowsVisible8;};ea.prototype.init_pagers=function(){'use strict';j.conditionClass(this.$ExtendedMultiShareCarouselPagerArrowsVisible1,"_3dm4",!this.$ExtendedMultiShareCarouselPagerArrowsVisible24());};ea.prototype.refresh=function(){'use strict';this.$ExtendedMultiShareCarouselPagerArrowsVisible28(true);this.$ExtendedMultiShareCarouselPagerArrowsVisible28(false);j.conditionClass(this.$ExtendedMultiShareCarouselPagerArrowsVisible1,"_3o-b",this.$ExtendedMultiShareCarouselPagerArrowsVisible27());};ea.prototype.getID=function(){'use strict';var fa=k.find(this.$ExtendedMultiShareCarouselPagerArrowsVisible1,"^._5pat");return fa.id;};ea.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible22=function(){'use strict';var fa=0,ga=0;for(;ga<this.$ExtendedMultiShareCarouselPagerArrowsVisible2.childNodes.length;ga++)if(!j.hasClass(this.$ExtendedMultiShareCarouselPagerArrowsVisible2.childNodes[ga],'hidden_elem'))fa++;return fa;};ea.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible26=function(fa,ga){'use strict';this.$ExtendedMultiShareCarouselPagerArrowsVisible13+=fa;var ha=(this.$ExtendedMultiShareCarouselPagerArrowsVisible7+ba)/2;if(ga&&this.$ExtendedMultiShareCarouselPagerArrowsVisible27())ha=ba;if(!ga&&!this.$ExtendedMultiShareCarouselPagerArrowsVisible27())ha=this.$ExtendedMultiShareCarouselPagerArrowsVisible7;ha*=-fa;var ia=fa*this.$ExtendedMultiShareCarouselPagerArrowsVisible6;this.$ExtendedMultiShareCarouselPagerArrowsVisible14-=ia+ha;var ja=this.$ExtendedMultiShareCarouselPagerArrowsVisible1;j.addClass(ja,"_3dm6");new h(this.$ExtendedMultiShareCarouselPagerArrowsVisible2).to(this.$ExtendedMultiShareCarouselPagerArrowsVisible15,this.$ExtendedMultiShareCarouselPagerArrowsVisible14).duration(da).ease(l.sineOut).ondone(function(){j.removeClass(ja,"_3dm6");this.refresh();}.bind(this)).go();this.$ExtendedMultiShareCarouselPagerArrowsVisible17.slide();};f.exports=ea;},null);