/*
    Copyright (c) 2019 Cristian José Jiménez Diazgranados

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/

/* Custom responsive script */

/* Require jQuery */
/* Require "constants.js" */
/* Require "getters.js" */
/* Require "switches.js" */

function mutate() {
    var width = getWidth();
    var index = getCurrentIndex();

    if (width < mWdth) {
        $('body').css({ paddingTop: 60, paddingBottom: 10 });
        $('#main-screen')
            .removeClass()
            .addClass('col-sm-offset-1 col-sm-10');
    } else {
        $('body').removeAttr('style');
        $('#main-screen')
            .removeClass()
            .addClass('col-md-offset-1 col-md-10');
    }

    mutateNavbar(index, width);
}

function mutateNavbar(index, width) {
    var selector = '#collapsable-content > ul.nav.navbar-nav > li';

    if (width < mWdth) {
        $(selector).addClass('mobile');
        tooltipSwitch(false);
        buttonSwitch(index, text);
    } else {
        $(selector).removeClass();
        tooltipSwitch(true, text);
        buttonSwitch(index, icon);
    }
}
