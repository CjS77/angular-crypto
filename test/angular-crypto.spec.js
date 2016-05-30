'use strict';
describe('angular-crypto', function() {
    // load the service's module
    beforeEach(module('cjs77.crypto'));

    // instantiate service
    var Crypto;
    beforeEach(inject(function(_Crypto_) {
        Crypto = _Crypto_;
    }));

    it('is loaded', () => {
        expect(!!Crypto).toBe(true);
    });

    it('crypto functions are available', () => {
        expect(Crypto.algo).toBeDefined();
        expect(Crypto.enc).toBeDefined();
    });
});
