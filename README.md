node-favitest
=============

Returns a fully resolved [Favicon URL](http://en.wikipedia.org/wiki/Favicon) from any URL and [URI Schema](http://en.wikipedia.org/wiki/URI_scheme).

Falls through from parsed HTML headers, then HTTP response headers, then default /favicon.ico. When a URL has been derived, it is confirmed with a HTTP HEAD request after following any redirects.  When all else fails,
does same for explicit domain name.

Callback produces an error, resolved URL, file suffix, mime type and domain name

Enjoy.

<img src="https://travis-ci.org/bipio-server/node-favitest.svg" />

## Installation

`npm install favitest`

## Usage

```
var favitest = require('favitest');

favitest(
  'https://github.com/bipio-server/node-favitest',
  function(err, url, suffix, mime, domain) {
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
  '3': 'image/x-icon',
  '4': 'github.com'
}
```

## License

[GPLv3](gpl-3.0.txt)

Copyright (c) 2014-2015 [WoT.IO](http://wot.io) inc
