/*!CK:3056696895!*//*1456737271,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["AGHpB"]); }

__d('NotificationHiddenState',['NotificationUpdates','NotificationConstants','isEmpty'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k={};h.subscribe('update-notifications',function(m,n){var o=n.nodes,p=n.payloadsource;if(p===i.PayloadSourceType.LIVE_SEND&&o&&o.length){var q={};o.forEach(function(r){var s=r.alert_id;if(k[s])q[s]=false;});if(!j(q)){k=Object.assign(k,q);h.didUpdateHiddenState(Object.keys(q));}}});h.subscribe('update-hidden',function(m,n){if(n.hiddenState){k=Object.assign(k,n.hiddenState);h.didUpdateHiddenState(Object.keys(n.hiddenState));}});var l={isHidden:function(m){if(k[m])return k[m];return false;}};f.exports=l;},null);
__d('NotificationPhotoThumbnail',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j){if(!j.media||!j.style_list||!j.style_list.length)return null;switch(j.style_list[0]){case 'new_album':case 'album':case 'application':case 'photo':case 'video':case 'video_autoplay':case 'video_inline':return j.media.image;default:return null;}}var i={getThumbnail:function(j,k,l){var m;if(j&&j.length){j.some(function(q){m=h(q);if(m)return true;return false;});if(m)return m;}if(l){var n=l.relevant_comments;if(n&&n.length){var o=n[0].attachments;if(o&&o.length){m=h(o[0]);if(m)return m;}}}if(k){var p=k.attachments;if(p&&p.length)return h(p[0]);}return null;}};f.exports=i;},null);
__d('NotificationURI',['BusinessURI.brands','URI','isFacebookURI','VideoPermalinkURI'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l={localize:function(m){m=h(m);if(!j(m))return m.toString();var n=m.getSubdomain();return m.getUnqualifiedURI().getQualifiedURI().setSubdomain(n).toString();},snowliftable:function(m){if(!m)return false;m=new i(m);var n=m.getQueryData();return j(m)&&(k.isValid(m)||'fbid' in n);},isVaultSetURI:function(m){return this._areEquals(m,'/ajax/vault/sharer_preview.php');},isAlbumDraftRecoveryDialogURI:function(m){return this._areEquals(m,'/ajax/photos/upload/overlay/');},_areEquals:function(m,n){if(!m)return false;m=new i(m);return j(m)&&m.getPath()===n;},_startsWith:function(m,n){if(!m)return false;m=new i(m);return j(m)&&m.getPath().startsWith(n);}};f.exports=l;},null);
__d('NotificationList.react',['NotificationConstants','NotificationHiddenState','NotificationSeenState','NotificationStore','NotificationUpdates','NotificationUserActions','React','getObjectValues','isEmpty'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q=n.PropTypes,r=h.PayloadSourceType.LIVE_SEND,s=n.createClass({displayName:'NotificationList',propTypes:{businessID:q.string,hasEverBeenOpened:q.bool,maxHeight:q.number,negativeTracking:q.object,paused:q.bool,tracking:q.string,useChevron:q.bool,chevronType:q.string,numPerPage:q.number.isRequired,listRenderer:q.func.isRequired,upsell:q.object,endpoint:q.string},getInitialState:function(){this._currentlyFetching=false;this._pendingNotifs={};this._shouldScroll=false;return {canFetchMore:true,notifs:{},hiddenState:{},readState:{},showingChevron:false};},componentWillMount:function(){k.registerEndpoint(this.props.endpoint);k.setBusinessID(this.props.businessID);this._subscriptions=[l.subscribe('notifications-updated',function(t,u){if(u.source==r&&!p(u.updates)){this._shouldScroll=true;if(this.props.paused!==false)this._pendingNotifs=babelHelpers['extends']({},this._pendingNotifs,u.updates);return;}this._fetchAndUpdate(k.getCount(this.props.endpoint));}.bind(this)),l.subscribe(['hidden-state-updated','read-state-updated'],function(t,u){if(t=='hidden-state-updated'){if(u.source!==r||!this.props.paused){var v={};Object.keys(u.updates).forEach(function(x){v[x]=i.isHidden(x);});this.setState({hiddenState:babelHelpers['extends']({},this.state.hiddenState,v)});}}else{var w={};Object.keys(u.updates).forEach(function(x){w[x]=j.isRead(x);});this.setState({readState:babelHelpers['extends']({},this.state.readState,w)});}}.bind(this))];},componentWillUnmount:function(){if(this._subscriptions){while(this._subscriptions.length)this._subscriptions.pop().unsubscribe();this._subscriptions=null;}},_getNotifsWithCurrentOrder:function(t){var u=Object.keys(this.state.notifs),v=Object.keys(t).filter(function(x){return !this.state.notifs[x];}.bind(this));u=u.concat(v);var w={};u.forEach(function(x){if(this._pendingNotifs[x]){if(this.state.notifs[x])w[x]=this.state.notifs[x];}else w[x]=t[x];}.bind(this));return w;},_fetchAndUpdate:function(t){this._currentlyFetching=true;k.getNotifications(t,function(u){var v=p(this._pendingNotifs)?u:this._getNotifsWithCurrentOrder(u),w={},x={};o(v).forEach(function(y){var z=y.alert_id;if(!this.state||!this.state.readState[z])w[z]=j.isRead(z);if(!this.state||!this.state.hiddenState[z])x[z]=i.isHidden(z);});this._currentlyFetching=false;this.setState({notifs:v,canFetchMore:k.canFetchMore(this.props.endpoint)||k.getCount(this.props.endpoint)!==Object.keys(v).length,readState:babelHelpers['extends']({},this.state.readState,w),hiddenState:babelHelpers['extends']({},this.state.hiddenState,x)});}.bind(this),this.props.endpoint);},_fetchAndUpdateAll:function(){var t={};Object.keys(this._pendingNotifs).forEach(function(u){var v=i.isHidden(u);if(v!=this.state.hiddenState[u])t[u]=i.isHidden(u);}.bind(this));if(!p(t))this.setState({hiddenState:babelHelpers['extends']({},this.state.hiddenState,t)});this._pendingNotifs={};this._fetchAndUpdate(k.getCount(this.props.endpoint));},_fetchNextSet:function(){if(!this._currentlyFetching){var t=Object.keys(this.state.notifs).length;this._fetchAndUpdate(t+this.props.numPerPage);}},_onScrollAndUpdate:function(t){if(this._currentlyFetching||!this.state.canFetchMore)return;if(t)this._fetchNextSet();},_onChevronShow:function(){this.setState({showingChevron:true});},_onChevronHide:function(){this.setState({showingChevron:false});},_updateNotifInContainer:function(t){if(t.length>this.props.numPerPage){this._fetchAndUpdate(t.length);}else this._fetchNextSet();return;},componentDidUpdate:function(t){var u=j.getUnseenIDs();if(!p(this._pendingNotifs))u=u.filter(function(v){return !this._pendingNotifs[v];}.bind(this));if(u.length&&this.props.paused)m.markNotificationsAsSeen(u);if(!t.hasEverBeenOpened&&this.props.hasEverBeenOpened)this._updateNotifInContainer(u);if(t.paused&&!this.props.paused){this._shouldScroll=false;setTimeout(this._fetchAndUpdateAll,0);return;}},render:function(){var t=this.props.listRenderer;return (n.createElement(t,{hasEverBeenOpened:this.props.hasEverBeenOpened,paused:this.props.paused,tracking:this.props.tracking,negativeTracking:this.props.negativeTracking,shortenTimestamp:this.props.shortenTimestamp,businessID:this.props.businessID,maxHeight:this.props.maxHeight,useChevron:this.props.useChevron,chevronType:this.props.chevronType,notifs:this.state.notifs,afterScroll:this._onScrollAndUpdate,onChevronShow:this._onChevronShow,onChevronHide:this._onChevronHide,canFetchMore:this.state.canFetchMore,hiddenState:this.state.hiddenState,readState:this.state.readState,showingChevron:this.state.showingChevron,shouldScroll:this._shouldScroll,upsell:this.props.upsell||null,isRHC:this.props.isRHC}));}});f.exports=s;},null);
__d('FlexibleBlock.react',['LeftRight.react','React','cx','invariant','keyMirror'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=l({left:true,right:true});function n(p){!(p.flex&&p.flex in o.FLEX)?k(0):undefined;!(p.children&&p.children.length===2)?k(0):undefined;}var o=i.createClass({displayName:'FlexibleBlock',render:function(){n(this.props);var p,q=this.props.children[0],r=this.props.children[1],s=this.props.flex==m.left,t;if(s){t=q;p=h.DIRECTION.right;}else{t=r;p=h.DIRECTION.left;}var u=i.createElement('div',{className:"_42ef"},t);return (i.createElement(h,babelHelpers['extends']({},this.props,{direction:p}),s?u:this.props.children[0],s?this.props.children[1]:u));}});o.FLEX=m;f.exports=o;},null);
__d('ReadToggle.react',['React','cx','emptyFunction','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();var l=h.PropTypes,m=h.createClass({displayName:'ReadToggle',propTypes:{isRead:l.bool.isRequired,onClick:l.func,readLabel:l.node,unreadLabel:l.node},getDefaultProps:function(){return {onClick:j};},render:function(){if(this.props.isRead){return (h.createElement('div',{'aria-label':this.props.readLabel,className:this._getClasses(),'data-hover':'tooltip','data-tooltip-alignh':'center','data-tooltip-content':this.props.readLabel,onClick:this.props.onClick}));}else return (h.createElement('div',{'aria-label':this.props.unreadLabel,className:this._getClasses(),'data-hover':'tooltip','data-tooltip-alignh':'center','data-tooltip-content':this.props.unreadLabel,onClick:this.props.onClick,role:'button',tabIndex:'0'}));},_getClasses:function(){return k(this.props.className,(!this.props.isRead?"_5c9q":'')+(this.props.isRead?' '+"_5c9_":''));}});f.exports=m;},null);
__d('NotificationListItem.react',['AsyncResponse','Banzai','BanzaiLogger','BizSiteIdentifier.brands','Event','FlexibleBlock.react','Image.react','ImageBlock.react','Keys','List.react','NotificationPhotoThumbnail','NotificationTokens','NotificationURI','NotificationUserActions','PopoverMenu.react','React','ReadToggle.react','TextWithEntities.react','Timestamp.react','VaultBoxURI','ReactXUIMenu','cx','invariant','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea){if(c.__markCompiled)c.__markCompiled();var fa=ba.Item;function ga(ia,ja){return w.createElement('span',{className:'fwb'},ia);}var ha=w.createClass({displayName:'NotificationListItem',getInitialState:function(){return {showingOptions:false,negativeFeedbackConfirmation:null,canReportAsSpam:false,spamReportConfirmation:null,sendingFeedback:false,mayUndoHide:false,notifOptionConfirmation:null,isBizSite:k.isBizSite()};},_onKeyDownItem:function(ia){if(l.getKeyCode(ia.nativeEvent)==p.RETURN)this._markItemRead();},_markItemReadIfUnreadFromReadButton:function(){if(!this.props.isRead)u.setNextIsFromReadButton(true);this._markItemReadIfUnread();},_markItemReadIfUnread:function(){!this.props.isRead&&this._markItemRead();},_markItemRead:function(){u.markNotificationsAsRead([this.props.alert_id]);},_onFeedbackError:function(ia){h.defaultErrorHandler(ia);this.setState({sendingFeedback:false});},_onHideSuccess:function(ia){var ja=ia.getPayload();!ja.confirmation?da(0):undefined;this.setState({negativeFeedbackConfirmation:ja.confirmation,canReportAsSpam:ja.canReportAsSpam,sendingFeedback:false,showingOptions:true});},_onHideAppSuccess:function(ia){var ja=ia.getPayload(),ka=ja.confirmation,la=ja.canReportAsSpam;!ka?da(0):undefined;this.setState({negativeFeedbackConfirmation:ka,canReportAsSpam:la,mayUndoHide:true,sendingFeedback:false,showingOptions:true});},_onSpamReportSuccess:function(ia){var ja=ia.getPayload().spamReportConfirmation;this.setState({negativeFeedbackConfirmation:null,spamReportConfirmation:ja,sendingFeedback:false});},_onHide:function(){u.markNotificationAsHidden(this.props.alert_id,this._onHideSuccess,this._onFeedbackError);this.setState({sendingFeedback:true,mayUndoHide:true});},_onShowSuccess:function(){this.setState({notifOptionConfirmation:null,negativeFeedbackConfirmation:null,sendingFeedback:false,showingOptions:false});},_onShow:function(){var ia=this.props.negative?this.props.negative.subscription_level:null;u.markNotificationAsVisible(this.props.alert_id,ia,this._onShowSuccess,this._onFeedbackError);this.setState({sendingFeedback:true});},_onReportSpam:function(){u.markNotificationAsSpam(this.props.alert_id,this._onSpamReportSuccess,this._onFeedbackError);this.setState({sendingFeedback:true});},_markAppAsHidden:function(){u.markAppAsHidden(this.props.alert_id,this.props.application.id,this._onHideAppSuccess,this._onFeedbackError);this.setState({sendingFeedback:true});},_markAppAsVisible:function(){u.markAppAsVisible(this.props.alert_id,this.props.application.id,function(){this.setState({negativeFeedbackConfirmation:null,sendingFeedback:false,showingOptions:false,mayUndoHide:false});}.bind(this),this._onFeedbackError);this.setState({sendingFeedback:true});},_renderAttachedImage:function(ia){if(ia)return (w.createElement(n,{src:ia.uri,className:"_42td",'aria-hidden':true}));return w.createElement('span',null);},_getModifiedTrackingString:function(ia){return JSON.stringify(babelHelpers['extends']({},JSON.parse(this.props.tracking),ia));},_onCancelNegativeFeedback:function(){this.setState({showingOptions:false});},_getChevron:function(){if(!this.props.menu_options.length)return null;var ia="_1_0c"+(' '+"_55m9"),ja=w.createElement(ba,null,this.props.menu_options?this.props.menu_options.map(function(la){return (w.createElement(fa,{onclick:function(){this._onClickNotifOption(la.server_action);}.bind(this),key:la.client_action+la.server_action},w.createElement('div',{className:"_18qh"},la.text)));}.bind(this)):null),ka=w.createElement('a',null,w.createElement(v,{alignh:'right',menu:ja,className:ia,onShow:this._onChevronShow,onHide:this._onChevronHide},w.createElement('div',{className:"_1_0d"})));return ka;},shouldComponentUpdate:function(ia,ja){return (this.props.visible!==ia.visible||this.props.isRead!==ia.isRead||this.props.timestamp!==ia.timestamp||this.props.paused!==ia.paused||this.state.showingOptions!==ja.showingOptions||this.state.sendingFeedback!==ja.sendingFeedback||this.state.canReportAsSpam!==ja.canReportAsSpam||this.state.spamReportConfirmation!==ja.spamReportConfirmation);},componentWillReceiveProps:function(ia){if(this.props.paused&&!ia.paused&&!this.props.visible&&this.state.mayUndoHide)this.setState({mayUndoHide:false});},_onChevronHide:function(){this.props.onChevronHide();this._logChevronEvent('close');},_onChevronShow:function(){this.props.onChevronShow();this._logChevronEvent('open');var ia={notif_type:this.props.notif_type};i.post('notif_chevron_on_click',ia);},_logChevronEvent:function(ia){var ja={event:ia,notif_type:this.props.notif_type,notif_id:parseInt(s.untokenizeIDs([this.props.alert_id])[0],10)};j.log('NotifJewelMenuLoggerConfig',ja);},_onNotifOptionSuccess:function(ia){this.setState({showingOptions:true,sendingFeedback:false,notifOptionConfirmation:ia});},_onClickNotifOption:function(ia){this.setState({sendingFeedback:true,mayUndoHide:true});u.sendNotifOption(this.props.alert_id,this._onNotifOptionSuccess,this._onFeedbackError,ia);},_undoNotifOption:function(ia){this.setState({sendingFeedback:true});u.undoNotifOption(this.props.alert_id,this._onShowSuccess,this._onFeedbackError,ia);},render:function(){if(!this.props.visible&&!this.state.mayUndoHide)return w.createElement('li',{className:"_4_62"});var ia="_33c"+(!this.props.isRead?' '+"_4af":'')+(this.state.showingOptions?' '+"_4ag":'')+(this.state.sendingFeedback?' '+"_4m8s":'');if(this.state.negativeFeedbackConfirmation){var ja=this.state.negativeFeedbackConfirmation,ka=null,la=null;if(this.state.canReportAsSpam)la=w.createElement(q,{border:'none',spacing:'small',className:"_1v4c"},w.createElement('li',null,w.createElement('a',{href:'#',onClick:this._onReportSpam,className:'mls'},ea._("Signaler l\u2019application (messages ind\u00e9sirables)"))));return (w.createElement('li',{className:ia,'data-gt':this.props.tracking},w.createElement('div',{className:"_4ai"},w.createElement(y,{interpolator:ga,ranges:ja.ranges,aggregatedranges:ja.aggregated_ranges,text:ja.text}),ka),la));}var ma=this.state.spamReportConfirmation;if(ma)return (w.createElement('li',{className:ia,'data-gt':this.props.tracking},w.createElement('div',{className:"_4ai"},w.createElement(y,{interpolator:ga,ranges:ma.ranges,aggregatedranges:ma.aggregated_ranges,text:ma.text}))));if(this.state.notifOptionConfirmation){ja=this.state.notifOptionConfirmation;return (w.createElement('li',{className:ia,'data-gt':this.props.tracking},w.createElement('div',{className:"_4ai"},w.createElement(y,{interpolator:ga,ranges:ja.ranges,aggregatedranges:ja.aggregated_ranges,text:ja.text&&ja.text.text?ja.text.text:''}),w.createElement('a',{href:'#',onClick:function(){this._undoNotifOption(ja.undo_action);}.bind(this),className:'mls'},ea._("Annuler"))),w.createElement(q,{border:'none',spacing:'small',className:"_1v4c"},ja.follow_up_options.map?ja.follow_up_options.map(function(fb){return (w.createElement('li',{key:fb.client_action+fb.server_action},w.createElement('a',{onClick:function(){this._onClickNotifOption(fb.server_action);}.bind(this),href:'#',className:'mls'},fb.text)));}.bind(this)):null)));}var na=null;if(this.props.title)na=w.createElement(y,{interpolator:ga,ranges:this.props.title.ranges,aggregatedranges:this.props.title.aggregated_ranges,text:this.props.title.text,renderEmoji:true,renderEmoticons:true});var oa=null,pa=t.localize(this.props.url),qa=null;if(!this.props.noPhotoPreviews)qa=r.getThumbnail(this.props.attachments,this.props.attached_story,this.props.feedback_context);var ra=qa&&t.snowliftable(pa),sa=t.isVaultSetURI(pa),ta=t.isAlbumDraftRecoveryDialogURI(pa),ua="_55ma"+(' '+"_55m9"),va=w.createElement(x,{className:ua,isRead:!!this.props.isRead,onClick:this._markItemReadIfUnreadFromReadButton,readLabel:ea._("Lu"),unreadLabel:ea._("Marquer comme lu")}),wa=this._getChevron(),xa=ra||sa||ta?pa:this.props.ajaxify_url,ya=null,za=null,ab=sa?aa.getSyncedTabURI().toString():pa;if(ra){ya='theater';}else if(ta){ya='async-post';}else if(sa||xa)ya='dialog';var bb=null,cb=this.props.actors[0];if(cb)bb=w.createElement(n,{src:cb.profile_picture.uri,alt:'',className:(!this.props.isNotifsPage?"_33h":'')+(this.props.isNotifsPage?' '+"_12u1":'')});var db=false;this.props.attachments.forEach(function(fb){if(db)return;db=fb.style_list.indexOf('notification_target')>=0||fb.style_list.indexOf('question')>=0;if(db)return;});var eb=w.createElement('div',null,va,wa);return (w.createElement('li',{className:ia,'data-gt':this.props.tracking,onMouseLeave:oa},w.createElement('div',{className:'anchorContainer'},w.createElement('a',{href:ab,ajaxify:xa,className:"_33e"+(' '+"_1_0e"),rel:ya,onClick:za,onMouseDown:this._markItemRead,onKeyDown:this._onKeyDownItem},w.createElement(o,null,bb,w.createElement(m,{flex:m.FLEX.left},w.createElement('div',{className:"_4l_v"},na,w.createElement(o,{className:"_33f"+(this.state.isBizSite?' '+"_2g48":'')},w.createElement(n,{className:"_10cu",src:this.props.icon.uri}),w.createElement('span',null,w.createElement(z,{shorten:this.props.shortenTimestamp,time:this.props.timestamp.time,text:this.props.timestamp.text,verbose:this.props.timestamp.verbose,className:"_33g"})))),this._renderAttachedImage(qa)))),eb)));}});f.exports=ha;},null);
__d('NotificationListPropTypes',['React'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=h.PropTypes,j={negativeTracking:i.object,tracking:i.string,notifs:i.object,afterScroll:i.func,onChevronShow:i.func,onChevronHide:i.func,canFetchMore:i.bool,hiddenState:i.object,readState:i.object,showingChevron:i.bool,paused:i.bool,maxHeight:i.number,shouldScroll:i.bool};f.exports=j;},null);
__d('NotificationPageList.react',['Event','LoadingIndicator.react','NotificationListItem.react','NotificationListPropTypes','React','ReactDOM','Vector','cx','debounce','fbt','getObjectValues','isEmpty'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if(c.__markCompiled)c.__markCompiled();var t=l.createClass({displayName:'NotificationPageList',propTypes:k,_shouldKeepLoading:function(){var u=this.refs.loading;if(!u)return false;var v=n.getElementPosition(m.findDOMNode(u),'viewport').y;return v<n.getViewportDimensions().y;},_keepOnLoading:function(){this.props.afterScroll(this._shouldKeepLoading());},componentDidUpdate:function(){this._keepOnLoading();},componentDidMount:function(){h.listen(window,'scroll',p(this._keepOnLoading));this._keepOnLoading();},_renderItems:function(){return r(this.props.notifs).map(function(u){var v=u.alert_id;return (l.createElement(j,babelHelpers['extends']({key:v,visible:!this.props.hiddenState[v],isRead:this.props.readState[v],negativeTracking:this.props.negativeTracking,shortenTimestamp:this.props.shortenTimestamp,onChevronShow:this.props.onChevronShow,onChevronHide:this.props.onChevronHide,noPhotoPreviews:true,isNotifsPage:true,paused:this.props.paused},u)));}.bind(this));},render:function(){var u=null,v=null;if(!s(this.props.notifs)){u=l.createElement('ul',{'data-gt':this.props.tracking},this._renderItems());}else if(!this.props.canFetchMore)u=l.createElement('div',{className:"_44_s"},q._("Aucune nouvelle notification"));if(this.props.canFetchMore)v=l.createElement(i,{color:'white',size:'large',ref:'loading',className:"_44_t"});var w=null;if(this.props.upsell){var x=this.props.upsell.module;w=l.createElement(x,babelHelpers['extends']({isPage:true},this.props.upsell.props));}var y="_44_u"+(this.props.showingChevron?' '+"_44_v":'');return (l.createElement('div',{className:y},w,u,v));}});f.exports=t;},null);