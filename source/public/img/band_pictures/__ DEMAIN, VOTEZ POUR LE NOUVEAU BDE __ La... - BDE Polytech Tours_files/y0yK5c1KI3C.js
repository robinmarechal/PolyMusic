/*!CK:3796262937!*//*1456518198,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["FZ1M3"]); }

__d('MercuryVideoShareYoutubeAttachment.react',['MercuryFallbackShareAttachment.react','MercuryShareAttachmentRenderLocations','MercuryThirdPartyMediaAttachmentContent.react','MercuryYoutubeLinkParser','React','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n=l.PropTypes,o=l.createClass({displayName:'MercuryVideoShareYoutubeAttachment',propTypes:{attachment:n.object.isRequired,location:n.oneOf(i.getValues()).isRequired,maxWidth:n.number},render:function(){if(k._isValidYoutubeLink(this.props.location,this.props.attachment.uri))return (l.createElement(j,{attachment:this.props.attachment,location:this.props.location,media:this._getYoutubeMediaShape()}));return l.createElement(h,this.props);},_getYoutubeMediaShape:function(){var p={aspectRatio:9/16,height:0,lockHeight:false,width:0};return {chatImageDimensions:p,chatMediaDimensions:p,chatTextClasses:"_3rnp",mediaSrc:k._getVideoEmbedURI(this.props.location,this.props.attachment.uri),messengerImageDimensions:p,messengerMediaDimensions:p,messengerTextClasses:"_3rnq",showMediaWithText:true};}});f.exports=o;},null);