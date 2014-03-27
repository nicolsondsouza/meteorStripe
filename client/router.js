function LoginUser(){
    if(Meteor.user()){
        Meteor.Router.to('/index');
    }
}
Router.map(function () {
    
    this.route('login', {
        path: '/',
        template: 'login',
        "beforeRouting" : function(){
            LoginUser();
        }
    });

    this.route('index', {
        path: '/index',
        template: 'index',
        "beforeRouting" : function(){
            if(!Meteor.user()){
                Meteor.Router.to('/login');
            }
        }
    }); 

    this.route('indexhtml', {
        path: '/index.html',
        template: 'login',
        "beforeRouting" : function(){
            LoginUser();
        }
    });  
    this.route('indexstar', {
        path: '/*',
        template: 'login',
        "beforeRouting" : function(){
            LoginUser();
        }
    });  
     
    // this.route('index', {
    //     path: '/*',
    //     template: 'login'
    // }); 
});