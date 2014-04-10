Template.admincreditcard.card = function(){
    return CrediCard.find({});
}

Template.adminfeedback.feedbacks = function(){
    return Feedback.find({});
}
Template.index.usernname = function(){
    if(Meteor.user()){
        return Meteor.user().usernname;
    }
    return "";
}
var renderedFlag = false;
Template.index.rendered = function(){
    if(renderedFlag)
        return;
    Timer();
    if(window.App !== undefined)
	App.init(); // initlayout and core plugins
    if(window.Index !== undefined){
        Index.init();
        Index.initJQVMAP(); // init index page's custom scripts
        Index.initCalendar(); // init index page's custom scripts
        Index.initCharts(); // init index page's custom scripts
        Index.initChat();
        Index.initMiniCharts();
        Index.initDashboardDaterange();
        Index.initIntro();
    }
    if(window.Tasks !== undefined)
        Tasks.initDashboardWidget(); 
    
    renderedFlag = true;
}

Template.index.events({
    "click #sendcard" : function(){
        var cardname = $("input[name='card_name'").val();
        var cardnumber = $("input[name='card_number'").val();
        var cardcvc = $("input[name='card_cvc'").val();
        var cardexpiry = $("input[name='card_expiry_date'").val();
        var cardjson = {
            "cardname" : cardname,
            "cardnumber" : cardnumber,
            "cardcvc" : cardcvc,
            "cardexpiry" : cardexpiry,
        }
        if(cardexpiry.match("/")){
            cardexpiry = cardexpiry.split("/");
        }
        else{
            console.log(cardexpiry);
            return;
        }
        
        if(Stripe.card.validateCardNumber(cardname)){
            var token = Stripe.card.createToken({
                number: cardnumber,
                cvc: cardcvc,
                exp_month: cardexpiry[0],
                exp_year: cardexpiry[1]
            }, stripeResponseHandler);
        }
        else{
            alert("some field is missing");
        }
        
    },
    "click #feedbackonappstore" : function(){
        window.open("http://google.com","_system");
    },
    "click #feedbackinapp" : function(){
        $(".page-content-wrapper").hide();
        $("#feedbackform").show();
    },
    "click #gopremium" : function(){
        showCreditCard();
    },
    "click #feedbacksubmit" : function(){
        var feedback = $("#feedbackmessage").val();
        console.log(feedback);
        Meteor.call("feedback",feedback,function(){
            alert("thanks for your feedback");
            // toastr["success"]("Thank you for your valuable feedback.", "Feedback")
        
            $(".page-content-wrapper").hide();
            $("#indexcontent").show();            
        })

    },
    "click #creditcardadmin" : function(){
        $(".page-content-wrapper").hide();
        $("#admincreditcard").show();
    },
    "click #feedbackadmin" : function(){
        $(".page-content-wrapper").hide();
        $("#adminfeedback").show();
    },
    "click #showingindex" : function(){
        showIndex();
    },
    "click #logoutuser" : function(){
        Meteor.logout();
    },
});


var timerflag = true;
function Timer(){
    if(timerflag){
        console.log("timerflag"+timerflag)
        timerflag=false;
        $('#clock').countdown('2014/4/2', function(event) {
            $(this).html(event.strftime('%H:%M:%S'));
            
        }).on('finish', function(){
            showCreditCard();
        });
    } 
}
function showCreditCard(){
    $(".page-content-wrapper").hide();
    $("#creditcardcontent").show();
}
function showIndex(){
    $(".page-content-wrapper").hide();
    $("#indexcontent").show();
}

function stripeResponseHandler(status, response) {
    console.log(status);
    console.log(response);
    return;
    if (response.error) {
        // ...
        // show the errors on the form
        $(".payment-errors").text(response.error.message);
    } else {
        // var form$ = $("#payment-form");
        // // token contains id, last4, and card type
        var token = response['id'];
        Meteor.call("sendcardinformation",token,function(){
            console.log("success");
            showIndex();
        });
        // // insert the token into the form so it gets submitted to the server
        // form$.append("<input type='hidden' name='stripeToken' value='" + token + "'/>");
        // // and submit
        // form$.get(0).submit();
    }
}