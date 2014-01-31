// iOS Test Harness

// open a single window
var win = Ti.UI.createWindow({
	title : 'Test Cookie Module'
});
win.open();

var monster = require('com.polancomedia.cookies');

var webview = Ti.UI.createWebView({
	url : 'http://github.com/adampax'
});

var monster = require('com.polancomedia.cookies');

webview.addEventListener('load', function(e) {
    var url = e.url;

    Ti.API.info('fetch cookie for: ' + url);
    var cookies = monster.getCookie(url);

    var count = 0;
    for(var key in cookies){
        Ti.API.info('name: ' + key + ' value: ' + cookies[key]);
        count++;
    }

    if(cookies.logged_in){
        Ti.API.info('logged_in: ' + cookies.logged_in);
    }

    alert('Found ' + count + ' name/values');

});

win.add(webview);
