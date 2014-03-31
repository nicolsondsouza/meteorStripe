Template.index.rendered = function(){
    Timer();
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

var timerflag=true;
function Timer(){
    if(timerflag){
        console.log("timerflag"+timerflag)
        timerflag=false;
        $('#clock').countdown('2020/10/10', function(event) {
            $(this).html(event.strftime('%D days %H:%M:%S'));
            
        });
    } 
}