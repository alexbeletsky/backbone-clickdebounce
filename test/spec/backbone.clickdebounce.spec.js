describe('Backbone.ClickDebounce spec', function () {

    describe('when using non-debounced view', function () {
        var view;

        beforeEach(function () {
            var View = Backbone.View.extend({
                initialize: function () {
                    this.clickCounter = 0;
                },

                'events': {
                    'click .click-me': 'onClick'
                },

                render: function () {
                    this.$el.html('<a href="#" class="click-me">Click me</a>');
                },

                onClick: function () {
                    this.clickCounter++;
                }
            });

            view = new View();
            view.render();
        });

        it ('should view be created', function () {
            expect(view).to.be.ok;
        });
 
        describe('when user clicks to button', function () {
            beforeEach(function () {
                view.$el.find('.click-me').click();
            });

            it('should increase counter', function () {
                expect(view.clickCounter).to.equal(1);
            });

            describe('when clicking multiple times', function () {
                beforeEach(function () {
                    view.$el.find('.click-me').click();
                    view.$el.find('.click-me').click();
                    view.$el.find('.click-me').click();
                });

                it('should increase counter', function () {
                    expect(view.clickCounter).to.equal(4);
                });
            });

        });
    });

    describe('when using debounced view', function () {
        var view;

        beforeEach(function () {
            debugger;
            var View = Backbone.ClickDebounce(Backbone.View.extend({
                initialize: function () {
                    this.clickCounter = 0;
                },

                'events': {
                    'click .click-me': 'onClick'
                },

                render: function () {
                    this.$el.html('<a href="#" class="click-me">Click me</a>');
                },

                onClick: function () {
                    this.clickCounter++;
                }
            }));

            view = new View();
            view.render();
        });

        it ('should view be created', function () {
            expect(view).to.be.ok;
        });
    });
    
});