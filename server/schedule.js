
if (Meteor.isServer) {
    Meteor.startup(function () {

    });
}

Accounts.validateNewUser(function(user){
    console.log(user);
    if(user.username == "nicolsondsouza" || user.username == "scott" || user.username == "hastenf")
    	return true;
})