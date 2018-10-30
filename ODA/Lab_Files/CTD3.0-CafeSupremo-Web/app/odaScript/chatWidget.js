!function(e,t,n,r){
    function s(){try{var e;if((e="string"==typeof this.response?JSON.parse(this.response):this.response).url){var n=t.getElementsByTagName("script")[0],r=t.createElement("script");r.async=!0,r.src=e.url,n.parentNode.insertBefore(r,n)}}catch(e){}}var o,p,a,i=[],c=[];e[n]={init:function(){o=arguments;var e={then:function(t){return c.push({type:"t",next:t}),e},catch:function(t){return c.push({type:"c",next:t}),e}};return e},on:function(){i.push(arguments)},render:function(){p=arguments},destroy:function(){a=arguments}},e.__onWebMessengerHostReady__=function(t){if(delete e.__onWebMessengerHostReady__,e[n]=t,o)for(var r=t.init.apply(t,o),s=0;s<c.length;s++){var u=c[s];r="t"===u.type?r.then(u.next):r.catch(u.next)}p&&t.render.apply(t,p),a&&t.destroy.apply(t,a);for(s=0;s<i.length;s++)t.on.apply(t,i[s])};var u=new XMLHttpRequest;u.addEventListener("load",s),u.open("GET",r+"/loader.json",!0),u.responseType="json",u.send()
}(window,document,"Bots", "http://localhost:3000/bots-client-sdk-js");

function loadBot(appId){
    return Bots.init({
        appId: appId,
        businessIconUrl:   '/images/oracle-o-logo.png',
        businessName:      'Cafe Supremo CoffeeBot',
        businessIconUrl:   './css/images/CafeSupremo-Logo.png',
        buttonIconUrl:     './css/images/CafeSupremo-Bot-Button2.png',
        backgroundImageUrl:'./css/images/CafeBackground10.png', 
        buttonWidth:       '80px',
        buttonHeight:      '80px',
        customColors:      {
                            brandColor:       'ffcccc', 
                            conversationColor:'519FF7', 
                            actionColor:      '0057B8'
                           },
        customText:        {
                            headerText:       'The Best in Tea & Coffee',
                            inputPlaceholder: 'Send me a message...',
                            introductionText: 'Your Virtual Barista'        
                            // locale:                           'en-US',
                            // soundNotificationEnabled:          true,
                            // imageUploadEnabled:                true,
                            // displayStyle:                      'button',
                            // actionPostbackError:               'An error occurred while processing your action. Please try again.',
                            // clickToRetry:                      'Message not delivered. Click to retry.',
                            // conversationTimestampHeaderFormat: 'MMMM D YYYY, h:mm A',
                            // fetchHistory:                      'Load more',
                            // fetchingHistory:                   'Retrieving history...',
                            // invalidFileError:                  'Only images are supported. Choose a file with a supported extension (jpg, jpeg, png, gif, or bmp).',
                            // locationNotSupported:              'Your browser does not support location services or it’s been disabled. Please type your location instead.',
                            // locationSecurityRestriction:       'This website cannot access your location. Please type your location instead.',
                            // locationSendingFailed:             'Could not send location',
                            // locationServicesDenied:            'This website cannot access your location. Allow access in your settings or type your location instead.',
                            // messageError:                      'An error occurred while sending your message. Please try again.',
                            // messageIndicatorTitlePlural:       '({count}) New messages',
                            // messageIndicatorTitleSingular:     '({count}) New message',
                            // messageRelativeTimeDay:            '{value}d ago',
                            // messageRelativeTimeHour:           '{value}h ago',
                            // messageRelativeTimeJustNow:        'just now',
                            // messageRelativeTimeMinute:         '{value}m ago',
                            // messageTimestampFormat:            'hh:mm A',
                            // messageSending:                    'Sending...',
                            // messageDelivered:                  'Delivered',
                            // sendButtonText:                    'Send',
                            // settingsHeaderText:                'Settings',
                            // tapToRetry:                        'Message not delivered. Tap to retry.',
                            // unsupportedMessageType:            'Unsupported message type.',
                            // unsupportedActionType:             'Unsupported action type.'
                           }
    }).then(function (res){
        Bots.updateUser(
            {
                "givenName":"Lucy", 
                "surname":  "Smith", 
                "email":    "lucy.smith@CoffeeClub.com",
                "userId":   "lsmith" 
            }
        ).catch(function (err) {
            console.error(err);
        });
    });




/*
function clearChat(e){
    alert("yes the button was pressed");
    e.preventDefault();
    var keys = Object.keys(localStorage);
    for(var i = 0; i < keys.length; i++){
        if(keys[i] === 'appId'){
            continue;
        }
        localStorage.removeItem(keys[i]);
    }
    location.reload();
};  
*/
  
}