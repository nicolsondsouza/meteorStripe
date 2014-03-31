
if (Meteor.isServer) {
    Meteor.startup(function () {
    	Meteor.methods({
    		"sendcardinformation" : function(cardjson){
    			console.log(cardjson);
    		}
    	});
    });
}

Accounts.validateNewUser(function(user){
    console.log(user);
    if(user.username == "nicolsondsouza" || user.username == "scott" || user.username == "hastenf")
    	return true;
})