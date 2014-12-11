var fs = require('fs'),
  assert = require('assert'),
  should = require('should'),
  favitest = require(__dirname + '/../');

describe('favitest', function() {
  it('can resolve a favicon from 3rd party URL', function(done) {
    favitest('https://github.com/bipio-server/node-favitest', function(err, url, suffix, mime, domain) {
      err.should.be.false;
      url.should.equal('https://assets-cdn.github.com/favicon.ico');
      suffix.should.equal('.ico');
      mime.should.equal('image/x-icon');
      domain.should.equal('github.com');
      done();
    });
  });

  it('should resolve a favicon when no icon link header present', function(done) {
    favitest('https://bip.io/signup', function(err, url, suffix, mime, domain) {
      err.should.be.false;
      url.should.equal('https://bip.io/favicon.ico');
      suffix.should.equal('.ico');
      mime.should.equal('image/x-icon');
      domain.should.equal('bip.io');
      done();
    });
  });


  it('should resolve a favicon from an alternate URI scheme', function(done) {
    favitest('mailto://hello@bip.io', function(err, url, suffix, mime, domain) {
      err.should.be.false;
      url.should.equal('https://bip.io/favicon.ico');
      suffix.should.equal('.ico');
      mime.should.equal('image/x-icon');
      domain.should.equal('bip.io');
      done();
    });
  });

  // @todo
  xit('should resolve a favicon from an alternate URI scheme on a subdomain', function(done) {
    favitest('mailto://npm@m.bip.io', function(err, url, suffix, mime, domain) {
      err.should.be.false;
      url.should.equal('https://bip.io/favicon.ico');
      suffix.should.equal('.ico');
      mime.should.equal('image/x-icon');
      domain.should.equal('bip.io');
      done();
    });
  });
});