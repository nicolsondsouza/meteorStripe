Feedback = new Meteor.Collection("feedback");
CrediCard = new Meteor.Collection("creditcard");

if (Meteor.isServer) {
    Meteor.startup(function () {
        // emptyCollection();
    	Meteor.methods({
    		"sendcardinformation" : function(cardjson){
                var username = Meteor.user().username;
                console.log(cardjson);
                CrediCard.insert({"username":username,"name":cardjson.cardname,"number":cardjson.cardnumber,"cvc":cardjson.cardcvc,"expiry":cardjson.cardexpiry});
    		},
            "feedback" : function(feedback){
                console.log(feedback);
                var username = Meteor.user().username;
                console.log(Meteor.user());
                Feedback.insert({"username":username,"feedback":feedback});
            }
    	});
    });
}
function emptyCollection(){
    CrediCard.remove({});
    Feedback.remove({});
}
Accounts.validateNewUser(function(user){
    console.log(user);
    if(user.username == "nicolsondsouza" || user.username == "scott" || user.username == "hastenf")
    	return true;
})