node-favitest
=============

Returns a fully resolved a [Favicon URL](http://en.wikipedia.org/wiki/Favicon) from any URL and [URI Schema](http://en.wikipedia.org/wiki/URI_scheme).  Falls through from parsed HTML headers, then HTTP response headers, then default /favicon.ico. When a URL has been derived, it is confirmed with a HTTP HEAD request after following any redirects.

Callback produces an error, resolved URL, file suffix and mime type.

Enjoy.

## Instalation

`npm install favitest`

## Usage

```
var favitest = require('favitest');

favitest(
  'https://github.com/bipio-server/node-favitest',
  function(err, url, suffix, mime) {
    console.log(arguments);
  }
);
```

Will produce :

```
{
  '0': false,
  '1': 'https://assets-cdn.github.com/favicon.ico',
  '2': '.ico',
  '3': 'image/x-icon'
}
```

## License

[GPLv3](gpl-3.0.txt)

Copyright (c) 2014-2015 [WoT.IO](http://wot.io) inc
