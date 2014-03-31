Template.index.rendered = function(){
	App.init(); // initlayout and core plugins
    Index.init();
    Index.initJQVMAP(); // init index page's custom scripts
    Index.initCalendar(); // init index page's custom scripts
    Index.initCharts(); // init index page's custom scripts
    Index.initChat();
    Index.initMiniCharts();
    Index.initDashboardDaterange();
    Index.initIntro();
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
        })
    }
});
function Timer(){

}

function showCreditCardForm(){
    $("#creditcardcontent").show();
    $("#indexcontent").hide();
}