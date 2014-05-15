Template.login.rendered = function(){
	$("document").ready(function(){
		if(window.App !== undefined)
			App.init();
		if(window.App !== undefined)
	  		Login.init();	
	})
}
Template.login.events({
	"click #register-submit-btn" : function(){
		var username = $("input[name='susername']").val();
		var password = $("input[name='spassword'").val();
		var rpassword = $("input[name='rpassword'").val();
		console.log(username);
		if(password == rpassword){
			Accounts.createUser({"username":username,"password":password},function(err){
				if(err)
					console.log("login failure");
				else
					Meteor.Router.to('/index');
			})
		}
	},
	"click #loginbutton" : function(){
		var username = $("input[name='username'").val();
		var password = $("input[name='password'").val();
		Meteor.loginWithPassword(username, password,function(){
			console.log("loggedin");
			Meteor.Router.to('/index');
		});
	}
});