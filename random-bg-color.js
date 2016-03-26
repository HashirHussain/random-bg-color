/**
 * Random-bg-color v1.0.0S
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
     * [apply Apply colors to target elements]
     * @return {undefined} []
     */
    init.prototype.apply = function() {
        var color = null;
        if (this.colors) {
            color = this.colors[Math.floor(Math.random() * this.colors.length)];
            doc.getElementById(this.targetElements).style.background = color;
        } else {
            color = makeRandomColor();
            console.log('inside array', color);
            doc.getElementById(this.targetElements).style.background = color;
        }
        return;
    };

    function makeRandomColor() {
        var c = '';
        while (c.length < 6) {
            c += (Math.random()).toString(16).substr(-6).substr(-1);
        }
        return '#' + c;
    }
    win.bgColors = (typeof(win.bgColors) === "undefined") ? new init() : 'bgColors is already defined';
})(window, document);
