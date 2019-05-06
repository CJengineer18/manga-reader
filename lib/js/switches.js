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

function tooltipSwitch(active, tooltip) {
    var selector = '#first-navbar-section > li';
    var dot = 'data-original-title';

    if (active) {
        $(selector).attr('data-toggle', 'tooltip');
        $(selector).attr('data-placement', 'bottom');
        $(selector).attr('title', '');
        $(selector + ':eq(0)').attr(dot, tooltip['rw']);
        $(selector + ':eq(1)').attr(dot, tooltip['b']);
        $(selector + ':eq(2)').attr(dot, tooltip['f']);
        $(selector + ':eq(3)').attr(dot, tooltip['ff']);
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

    var link = [al, undefined, undefined, afl];
    var paragraph = [pl, undefined, undefined, pfl];

    var a1, a2, a3, a4;

    switch (index) {
        case 0:
            a1 = deepCopy(paragraph);
            a2 = deepCopy(paragraph);
            a3 = deepCopy(link);
            a4 = deepCopy(link);

            a1[1] = " id='rw'>";
            a1[2] = rw;
            a2[1] = " id='b'>";
            a2[2] = b;
            a3[1] = ' onclick="forward()" id="f">';
            a3[2] = f;
            a4[1] = ' onclick="lastPage()" id="ff">';
            a4[2] = ff;
            break;
        case core.n_ - 1:
            a1 = deepCopy(link);
            a2 = deepCopy(link);
            a3 = deepCopy(paragraph);
            a4 = deepCopy(paragraph);

            a4[1] = " id='ff'>";
            a4[2] = ff;
            a3[1] = " id='f'>";
            a3[2] = f;
            a2[1] = ' onclick="forward()" id="b">';
            a2[2] = b;
            a1[1] = ' onclick="lastPage()" id="rw">';
            a1[2] = rw;
            break;
        case end:
            a1 = deepCopy(paragraph);
            a2 = deepCopy(paragraph);
            a3 = deepCopy(paragraph);
            a4 = deepCopy(paragraph);

            a1[1] = " id='rw'>";
            a1[2] = rw;
            a2[1] = " id='b'>";
            a2[2] = b;
            a3[1] = " id='f'>";
            a3[2] = f;
            a4[1] = " id='ff'>";
            a4[2] = ff;
            break;
        default:
            a1 = deepCopy(link);
            a2 = deepCopy(link);
            a3 = deepCopy(link);
            a4 = deepCopy(link);

            a1[1] = ' onclick="lastPage()" id="rw">';
            a1[2] = rw;
            a2[1] = ' onclick="forward()" id="b">';
            a2[2] = b;
            a3[1] = ' onclick="forward()" id="f">';
            a3[2] = f;
            a4[1] = ' onclick="lastPage()" id="ff">';
            a4[2] = ff;
            break;
    }

    $('#rw').replaceWith(a1.join(''));
    $('#b').replaceWith(a2.join(''));
    $('#f').replaceWith(a3.join(''));
    $('#ff').replaceWith(a4.join(''));
}
