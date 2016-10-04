/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'home3': '&#xe902;',
            'house3': '&#xe902;',
            'clock': '&#xe94e;',
            'time2': '&#xe94e;',
            'glass': '&#xe9a0;',
            'drink': '&#xe9a0;',
            'glass2': '&#xe9a1;',
            'drink2': '&#xe9a1;',
            'mug': '&#xe9a2;',
            'drink3': '&#xe9a2;',
            'spoon-knife': '&#xe9a3;',
            'food': '&#xe9a3;',
            'menu': '&#xe9bd;',
            'list3': '&#xe9bd;',
            'arrow-up2': '&#xea3a;',
            'up2': '&#xea3a;',
            'arrow-down2': '&#xea3e;',
            'down2': '&#xea3e;',
            'circle-up': '&#xea41;',
            'up3': '&#xea41;',
            'circle-down': '&#xea43;',
            'down3': '&#xea43;',
            'facebook': '&#xea90;',
            'brand10': '&#xea90;',
            'instagram': '&#xea92;',
            'brand12': '&#xea92;',
            'twitter': '&#xea96;',
            'brand16': '&#xea96;',
            'feed2': '&#xea9b;',
            'rss': '&#xea9b;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
