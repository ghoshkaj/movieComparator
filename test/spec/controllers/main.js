'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('movieComparatorApp'));

  var MainCtrl,
    scope;
  var $httpBackend = null;
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    MainCtrl = $rootScope.$new();
    $controller('MainCtrl', {$scope: MainCtrl});
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it("Test load json hitPoints", function() {
    $httpBackend.expectGET('test/mock/data.json')
      //.respond({
    //$httpBackend.expectGET('base/test/spec/controllers/data.json').respond({
    //  "name": "NPC01",
    //  "hitPoints": 37,
    //  "damage": 5});
    MainCtrl.loadJSON();
    $httpBackend.flush();
    expect(MainCtrl.data.hitPoints).toEqual(37);
  });
});
