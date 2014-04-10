Feedback = new Meteor.Collection("feedback");
CrediCard = new Meteor.Collection("creditcard");

// Reload package
modifyReload();
var providers = [];
function modifyReload(){
    var reloading = false;                                                                       // 117
Package.reload.Reload._reload = function () {                                                               // 118
  if (reloading)                                                                             // 119
    return;                                                                                  // 120
  reloading = true;                                                                          // 121
                                                                                             // 122
  var tryReload = function () {};                                                                                     // 155
                                                                                             // 156
  tryReload();                                                                               // 157
};
}
// Reload ends

if (Meteor.isClient) {
    Meteor.startup(function () {
      Stripe.setPublishableKey('pk_test_L5CNcYobo8Z2yl2vQayMeM7W');
        // code to run on server at startup
        jQuery(document).ready(function() {
            documentReady();
        })
        
        
        console.log(token)
    });
}

function documentReady(){
    // jQuery(document).ready(function() {    
        
    // });
}
Deps.autorun(function(){
    Meteor.userId()
    if(Meteor.user()){
        // if(window.location.pathname != "/index")
        //     window.location.href = "/index"
    }  
    else{
        // if(window.location.pathname != "/login")
        //     window.location.href = "/login"
    }
})

