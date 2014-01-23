## Me want cookies from Titanium Webview. Om nom nom.

[Compiled Module](https://github.com/adampax/titanium-cookies/tree/master/android/dist)

### Why

Get cookies from webview too hard, [evalJS](https://jira.appcelerator.org/browse/TIMOB-16082) too buggy.

```javascript

var monster = require('com.polancomedia.cookies');

myWebview.addEventListener('load', function(e) {
    var url = e.url;
    
    Ti.API.info('fetch cookie for: ' + url);
    var cookieString = monster.getCookie(url);

    Ti.API.info('cookieString: ' + cookieString);

    eatCookie(cookieString);
});

function eatCookie(str) {
    if (str !== null) {

        var list = str.split("; ");
        
        for (var i = 0; i < list.length; i++) {
            var cookie = list[i];
            var p = cookie.indexOf("=");
            
            var name = cookie.substring(0, p);
            var value = cookie.substring(p + 1);
            
            Ti.API.info('name: ' + name + ' value: ' + value);
        }
    }
}

```

See full example in the `example` folder.

### Methods

#### getCookie(url)
* url string for cookie to get


## About
* Me: [Adam Paxton](http://adampaxton.com) 
* Twitter: [@adampax](http://twitter.com/adampax)
* Work: [Polanco Media, LLC](http://polancomedia.com)

## License
MIT License
Copyright (c) 2014 Polanco Media, LLC
