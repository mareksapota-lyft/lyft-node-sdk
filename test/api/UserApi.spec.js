/**
 * Lyft API
 * Drive your app to success with Lyft's API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: api-support@lyft.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.lyft);
  }
}(this, function(expect, lyft) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new lyft.UserApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UserApi', function() {
    describe('cancelRide', function() {
      it('should call cancelRide successfully', function(done) {
        //uncomment below and update the code to test cancelRide
        //instance.cancelRide(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProfile', function() {
      it('should call getProfile successfully', function(done) {
        //uncomment below and update the code to test getProfile
        //instance.getProfile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRide', function() {
      it('should call getRide successfully', function(done) {
        //uncomment below and update the code to test getRide
        //instance.getRide(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRideReceipt', function() {
      it('should call getRideReceipt successfully', function(done) {
        //uncomment below and update the code to test getRideReceipt
        //instance.getRideReceipt(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRides', function() {
      it('should call getRides successfully', function(done) {
        //uncomment below and update the code to test getRides
        //instance.getRides(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('newRide', function() {
      it('should call newRide successfully', function(done) {
        //uncomment below and update the code to test newRide
        //instance.newRide(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setRideDestination', function() {
      it('should call setRideDestination successfully', function(done) {
        //uncomment below and update the code to test setRideDestination
        //instance.setRideDestination(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setRideRating', function() {
      it('should call setRideRating successfully', function(done) {
        //uncomment below and update the code to test setRideRating
        //instance.setRideRating(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
