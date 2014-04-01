Template.index.rendered = function(){
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
        Meteor.call("sendcardinformation",cardjson,function(){
            console.log("success");
            $(".page-content-wrapper").hide();
            $("#indexcontent").show();
        })
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
        alert("thanks for your feedback");
        // toastr["success"]("Thank you for your valuable feedback.", "Feedback")
        $(".page-content-wrapper").hide();
        $("#indexcontent").show();
    },
    

});
var timerflag = true;
function Timer(){
    if(timerflag){
        console.log("timerflag"+timerflag)
        timerflag=false;
        $('#clock').countdown('2014/4/2', function(event) {
            $(this).html(event.strftime('Trial period %H:%M:%S'));
            
        }).on('finish', function(){
            showCreditCard();
        });
    } 
}
function showCreditCard(){
    $(".page-content-wrapper").hide();
    $("#creditcardcontent").show();
}