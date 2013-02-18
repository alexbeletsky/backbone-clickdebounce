// Click Debouncer for Backbone.Views, v0.0.1
// Copyright (c)2013 alexander.beletsky@gmail.com
// Distributed under MIT license
// http://github.com/alexander.beletsky/backbone.clickdebounce
Backbone.ClickDebounce = (function(Backbone, _) {
    var defaultWaitPeriod = 1000;

    return function(ctor) {
        var view = ctor.prototype;
        var events = view.events;

        if (!events) {
            return ctor;
        }

        var debouncedClicks = _.reduce(events, function(memo, handler, event) {
            if (event.indexOf('click') === 0) {
                memo[handler] = _.debounce(view[handler], defaultWaitPeriod, true);
            }
            return memo;
        }, {});

        return ctor.extend(debouncedClicks);
    };
})(Backbone, _);