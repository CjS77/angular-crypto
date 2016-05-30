'use strict';
describe('angular-crypto', function() {
    // load the service's module
    beforeEach(module('cjs77.crypto'));

    // instantiate service
    var Crypto;
    const msg = 'The quick brown fox jumped over the lazy dog.';
    const msg_b64 = 'VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wZWQgb3ZlciB0aGUgbGF6eSBkb2cu';
    const key = '12345';
    const hmac = 'CMAe8uBGIFUCPgJihXWijwhlvnrj8f3xtAjy+4lwNt8=';
    beforeEach(inject(function(_Crypto_) {
        Crypto = _Crypto_;
    }));

    it('is loaded', () => {
        expect(!!Crypto).toBe(true);
    });

    it('crypto functions are available', () => {
        expect(Crypto._crypto.algo.HMAC).toBeDefined();
        expect(Crypto._crypto.algo.SHA256).toBeDefined();
        expect(Crypto._crypto.enc.Base64).toBeDefined();
    });

    it('encodes to base64', () => {
        expect(Crypto.toBase64(msg)).toBe(msg_b64);
    });

    it('decodes from base64', () => {
        expect(Crypto.fromBase64(msg_b64)).toBe(msg);
    });

    it('creates an HMAC signature', () => {
        expect(Crypto.sign(key, msg)).toBe(hmac)
    });
});
