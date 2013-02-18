# Debounce multiple clicks for Backbone.Views.

## When to use?

In case you need prevent double (multiple) clicks on view or modals, typically once that perform save or update operations. It applies `_.debounce()` function for all clicks in view. More information about click debouncing is [here](http://eng.wealthfront.com/2012/12/using-underscorejss-debounce-to-filter.html).

## How to use?

Apply the `Backbone.ClickDebounce` decorator to your view.

```js
    var View = Backbone.ClickDebounce(Backbone.View.extend({
        initialize: function () {

        },

        events: {
            'click .click-me': 'onClick'
        },

        onClick: function () {
        },

        render: function () {
            return this;
        }
    }));
```

De-bounced view will prevent clicking during the *wait* period. By default, wait period is 1 sec. 

## Versions / Changes

### v.0.0.1, 17 Feb 2013 

* Initial version implemented

# Legal Info (MIT License)

Copyright (c) 2012 Alexander Beletsky

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
