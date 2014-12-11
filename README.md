node-favitest
=============

Returns a fully resolved a Favicon URL.  First by parsing HTML headers, then HTTP response headers, then default /favicon.ico, then finally by checking it can be fetched with a HTTP HEAD.

Callback produces an error, resolved URL, file suffix and mime type.

Enjoy.

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