/*!CK:672658788!*//*1456737271,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["A53Ha"]); }

__d('ChatSidebarSheetChatReconnectMsg.react',['ChannelConstants','Link.react','ReactComponentWithPureRenderMixin','React','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l){'use strict';if(c.__markCompiled)c.__markCompiled();var m=k.PropTypes,n=k.createClass({displayName:'ChatSidebarSheetChatReconnectMsg',mixins:[j],propTypes:{msecs:m.number,onManuallyConnectClick:m.func},render:function(){var o=this.props.msecs;if(o==null||false===navigator.onLine){return (k.createElement('div',null,l._("Impossible de se connecter \u00e0 la discussion instantan\u00e9e. V\u00e9rifiez votre connexion Internet.")));}else if(o>h.WARNING_COUNTDOWN_THRESHOLD_MSEC){return (k.createElement('div',null,l._("Impossible de se connecter \u00e0 la discussion instantan\u00e9e. {try-again-link}",[l.param('try-again-link',k.createElement(i,{className:'fbChatReconnectLink',onClick:this.props.onManuallyConnectClick},l._("Veuillez r\u00e9essayer")))])));}else if(o>1000){return (k.createElement('div',null,l._("Impossible de se connecter \u00e0 la discussion instantan\u00e9e. Reconnexion dans {seconds} secondes...",[l.param('seconds',Math.floor(o/1000))])));}else return (k.createElement('div',null,l._("Impossible de se connecter \u00e0 la discussion instantan\u00e9e. Reconnexion...")));}});f.exports=n;},null);