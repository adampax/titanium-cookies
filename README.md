## Titanium Cookies
### Me want cookies from Titanium Webview. Om nom nom.

### Compiled Modules
* [Android](https://github.com/adampax/titanium-cookies/tree/master/android/dist)
* [iOS](https://github.com/adampax/titanium-cookies/tree/master/ios/dist)

### Why

Get cookies from webview too hard, [evalJS](https://jira.appcelerator.org/browse/TIMOB-16082) too buggy.

```javascript

var monster = require('com.polancomedia.cookies');

myWebview.addEventListener('load', function(e) {
    var url = e.url;
    
    Ti.API.info('fetch cookie for: ' + url);
    var cookies = monster.getCookie(url);

    for(var key in cookies){
        Ti.API.info('name: ' + key + ' value: ' + cookies[key]);
    }
});

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
