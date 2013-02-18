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
