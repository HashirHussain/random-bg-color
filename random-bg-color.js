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
        var elementType = [];
        /*check if targetElements are given*/
        switch (typeof this.targetElements) {
            case 'string':
                if (this.targetElements.charAt(0) === '.') {
                    elementType[0] = 'class';
                } else if (this.targetElements.charAt(0) === '#') {
                    elementType[0] = 'id';
                } else {
                    elementType[0] = 'tag';
                }
                this.targetElements = [this.targetElements];
                break;
            case 'object':
                if (this.targetElements === null) {
                    elementType[0] = 'tag';
                    this.targetElements = ['body'];
                }
                break;
            case '':
            case 'null':
            case 'undefined':
            case undefined:
            case null:
                elementType[0] = 'tag';
                this.targetElements = ['body'];
                break;
        }
        if (this.colors) {
            color = this.colors[Math.floor(Math.random() * this.colors.length)];
            for (var j = 0; j < this.targetElements.length; j++) {
                if (this.targetElements[j].charAt(0) === '.') {
                    doc.getElementsByClassName(this.targetElements[j].slice(1)).style.background = color;
                } else if (this.targetElements[j].charAt(0) === '#') {
                    doc.getElementById(this.targetElements[j].slice(1)).style.background = color;
                } else {
                    var elem = document.getElementsByTagName(this.targetElements[j]);
                    for (var e = 0; e < elem.length; e++) {
                        elem[e].style.background = color;
                    }
                }
            }
        } else {
            color = makeRandomColor();
            doc.getElementById(this.targetElements[0]).style.background = color;
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
