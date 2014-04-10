Feedback = new Meteor.Collection("feedback");
CrediCard = new Meteor.Collection("creditcard");
Customer = new Meteor.Collection("customer");
if (Meteor.isServer) {
    Meteor.startup(function () {
        // emptyCollection();
    	Meteor.methods({
    		"sendcardinformation" : function(token){
                var username = Meteor.user().username;
                console.log(cardjson);
                var cursorCustomer = Customer.findOne({"username":username});
                if(cursorCustomer){
                    Customer.update({"_id":cursorCustomer._id},{$set:{"username":username,"cardToken":token}});
                }
                else{
                    var insertId = null;
                    insertId = Customer.insert({"username":username,"cardToken":token});
                    cursorCustomer = {"_id":insertId};
                }
                var response = stripe.charges.create({
                  amount: 10,
                  currency: "usd",
                  card: token, // obtained with Stripe.js
                  description: "Charge for test@example.com"
                });
                console.log(response);
                // CrediCard.insert({"username":username,"name":cardjson.cardname,"number":cardjson.cardnumber,"cvc":cardjson.cardcvc,"expiry":cardjson.cardexpiry});
    		},
            "feedback" : function(feedback){
                console.log(feedback);
                var username = Meteor.user().username;
                console.log(Meteor.user());
                Feedback.insert({"username":username,"feedback":feedback});
            }
    	});
        // createCustomer();
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

function createCustomer(){
  stripe.customers.create(
  { email: 'nicolsondsouza@gmail.com' },
    function(err, customer) {
      console.log(err);
      console.log(customer);
      // err; // null if no error occurred
      // customer; // the created customer object
    }
  );
}

// { object: 'customer',
// I20140407-16:21:45.739(5.5)?   created: 1396867905,
// I20140407-16:21:45.740(5.5)?   id: 'cus_3oClNbND0HKSzu',
// I20140407-16:21:45.740(5.5)?   livemode: false,
// I20140407-16:21:45.740(5.5)?   description: null,
// I20140407-16:21:45.741(5.5)?   email: 'nicolsondsouza@gmail.com',
// I20140407-16:21:45.741(5.5)?   delinquent: false,
// I20140407-16:21:45.741(5.5)?   metadata: {},
// I20140407-16:21:45.742(5.5)?   subscriptions: 
// I20140407-16:21:45.742(5.5)?    { object: 'list',
// I20140407-16:21:45.742(5.5)?      total_count: 0,
// I20140407-16:21:45.742(5.5)?      has_more: false,
// I20140407-16:21:45.743(5.5)?      url: '/v1/customers/cus_3oClNbND0HKSzu/subscriptions',
// I20140407-16:21:45.743(5.5)?      data: [] },
// I20140407-16:21:45.744(5.5)?   discount: null,
// I20140407-16:21:45.744(5.5)?   account_balance: 0,
// I20140407-16:21:45.745(5.5)?   currency: null,
// I20140407-16:21:45.745(5.5)?   cards: 
// I20140407-16:21:45.745(5.5)?    { object: 'list',
// I20140407-16:21:45.745(5.5)?      total_count: 0,
// I20140407-16:21:45.746(5.5)?      has_more: false,
// I20140407-16:21:45.747(5.5)?      url: '/v1/customers/cus_3oClNbND0HKSzu/cards',
// I20140407-16:21:45.747(5.5)?      data: [] },
// I20140407-16:21:45.748(5.5)?   default_card: null }