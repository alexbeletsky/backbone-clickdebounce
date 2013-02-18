Backbone.ClickDebounce = (function(Backbone, _) {
    return function(ctor) {
        var view = ctor.prototype;
        var events = view.events;

        if (!events) {
            return ctor;
        }

        var clickHandlers = _.reduce(events, function(memo, handler, event) {
            if (event.indexOf('click') === 0) {
                memo[handler] = view[handler];
            }
            return memo;
        }, {});
        _.each(clickHandlers, function (handler, name, context) {
            context[name] = _.debounce(handler, 1000, true);
        }, clickHandlers);

        return ctor.extend(clickHandlers);
    };
})(Backbone, _);
