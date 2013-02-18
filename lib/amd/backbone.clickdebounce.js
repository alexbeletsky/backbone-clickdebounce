// Click Debouncer for Backbone.Views, v0.0.1
// Copyright (c)2013 alexander.beletsky@gmail.com
// Distributed under MIT license
// http://github.com/alexander.beletsky/backbone.clickdebounce
(function (root, factory) {
  if (typeof exports === 'object') {

    var underscore = require('underscore');
    var backbone = require('backbone');

    module.exports = factory(underscore, backbone);

  } else if (typeof define === 'function' && define.amd) {

    define(['underscore', 'backbone'], factory);

  } 
}(this, function (_, Backbone) {

  Backbone.ClickDebounce = (function(Backbone, _) {
      return function(ctor) {
          var view = ctor.prototype;
          var events = view.events;
  
          if (!events) {
              return ctor;
          }
  
          var debouncedClicks = _.reduce(events, function(memo, handler, event) {
              if (event.indexOf('click') === 0) {
                  memo[handler] = _.debounce(view[handler], 1000, true);
              }
              return memo;
          }, {});
  
          return ctor.extend(debouncedClicks);
      };
  })(Backbone, _);
  
  return Backbone.ClickDebounce; 

}));
