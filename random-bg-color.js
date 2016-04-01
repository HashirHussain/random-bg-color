/**
 * Random-bg-color v1.0.0
 * (c) 2016 Hashir Hussain
 * License: MIT
 */
(function(win, doc) {
    'use strict';
    /**
     * [init Our class]
     * @return {undefined} []
     */
    function init() {}
    /**
     * [colors Holds list of colors to br applied]
     * @type {null}
     */
    init.prototype.colors = null;
    /**
     * [targetElements Holds list of target elements by classname and id name on which colors to be appliedd]
     * @type {null}
     */
    init.prototype.targetElements = null;

    /**
     * [targetElements if set true colors would autochage after particular interval]
     * @type {Boolean}
     */
    init.prototype.autoChange = false;
    /**
     * [targetElements if autoChange set true colors would autochage after particular delay]
     * @type {Number}
     * @Default 10000
     */
    init.prototype.autoChangeDelay = 1000;

    /**
     * [apply Apply colors to target elements]
     * @return {undefined} []
     */
    init.prototype.apply = function() {
        var color = null;

        /*check if targetElements are given*/
        switch (typeof this.targetElements) {
            case 'string':
                this.targetElements = this.targetElements ? [this.targetElements] : ['body'];
                break;
            case 'object':
                if (this.targetElements === null || this.targetElements.length === 0) {
                    this.targetElements = ['body'];
                }
                break;
            case '':
            case 'null':
            case 'undefined':
            case undefined:
            case null:
                this.targetElements = ['body'];
                break;
        }
        switch (typeof this.colors) {
            case 'string':
                this.colors = this.colors ? [this.colors] : null;
                break;
            case 'object':
                if (this.colors === null || this.colors.length < 0) {
                    var c = '';
                    while (c.length < 6) {
                        c += (Math.random()).toString(16).substr(-6).substr(-1);
                    }
                    this.colors = ['#' + c];
                }
                break;
        }
        if (this.autoChange) {
            var self = this;
            setInterval(function() {
                color = self.colors[Math.floor(Math.random() * self.colors.length)];
                applyColor(color, self.targetElements);
            }, self.autoChangeDelay);
        } else {
            color = this.colors[Math.floor(Math.random() * this.colors.length)];
            applyColor(color, this.targetElements);
        }

        return;
    };

    function applyColor(currentColor, targetElements) {
        var elem = null;
        var e = 0;
        for (var j = 0; j < targetElements.length; j++) {
            e = 0;
            if (targetElements[j].charAt(0) === '.') {
                elem = document.getElementsByClassName(targetElements[j].slice(1));
                for (; e < elem.length; e++) {
                    elem[e].style.background = currentColor;
                }
            } else if (targetElements[j].charAt(0) === '#') {
                doc.getElementById(targetElements[j].slice(1)).style.background = currentColor;
            } else {
                elem = document.getElementsByTagName(targetElements[j]);
                for (; e < elem.length; e++) {
                    elem[e].style.background = currentColor;
                }
            }
        }
    }
    win.bgColors = (typeof(win.bgColors) === "undefined") ? new init() : 'bgColors is already defined';
})(window, document);
