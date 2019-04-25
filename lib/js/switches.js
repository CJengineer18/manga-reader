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

/* Enable navbar's buttons */

/* Require jQuery */
/* Require "core.js" */
/* Require "constants.js" */

function tooltipSwitch(active) {
    var selector = '#first-navbar-section > li';
    var dot = 'data-original-title';

    if (active) {
        $(selector).attr('data-toggle', 'tooltip');
        $(selector).attr('data-placement', 'bottom');
        $(selector).attr('title', '');
        $(selector + ':eq(0)').attr(dot, 'Primera página');
        $(selector + ':eq(1)').attr(dot, 'Página anterior');
        $(selector + ':eq(2)').attr(dot, 'Página siguiente');
        $(selector + ':eq(3)').attr(dot, 'Última página');
    } else {
        $(selector).removeAttr('data-toggle');
        $(selector).removeAttr('data-placement');
        $(selector).removeAttr('title');
        $(selector).removeAttr(dot);
    }
}

function buttonSwitch(index, buttons) {
    var rw = buttons['rw'];
    var b = buttons['b'];
    var f = buttons['f'];
    var ff = buttons['ff'];

    switch (index) {
        case 0:
            $('#rw').replaceWith(pl + " id='rw'>" + rw + pfl);
            $('#b').replaceWith(pl + " id='b'>" + b + pfl);
            $('#f').replaceWith(al + ' onclick="forward()" id="f">' + f + afl);
            $('#ff').replaceWith(
                al + ' onclick="lastPage()" id="ff">' + ff + afl
            );
            break;
        case core.n_ - 1:
            $('#ff').replaceWith(pl + " id='ff'>" + ff + pfl);
            $('#f').replaceWith(pl + " id='f'>" + f + pfl);
            $('#b').replaceWith(al + ' onclick="backward()" id="b">' + b + afl);
            $('#rw').replaceWith(
                al + ' onclick="firstPage()" id="rw">' + rw + afl
            );
            break;
        case end:
            $('#rw').replaceWith(pl + " id='rw'>" + rw + pfl);
            $('#b').replaceWith(pl + " id='b'>" + b + pfl);
            $('#f').replaceWith(pl + " id='f'>" + f + pfl);
            $('#ff').replaceWith(pl + " id='ff'>" + ff + pfl);
            break;
        default:
            $('#rw').replaceWith(
                al + ' onclick="firstPage()" id="rw">' + rw + afl
            );
            $('#b').replaceWith(al + ' onclick="backward()" id="b">' + b + afl);
            $('#f').replaceWith(al + ' onclick="forward()" id="f">' + f + afl);
            $('#ff').replaceWith(
                al + ' onclick="lastPage()" id="ff">' + ff + afl
            );
            break;
    }
}
