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

/* Implements the manga's limits */

/* Require jQuery */
/* Require "constants.js" */
/* Require "context.js" */
/* Require "getters.js" */
/* Require "evolution.js" */
/* Require "locale.js" */
/* Require "core.js" */

function deadEnd(exit) {
    var width = getWidth();

    $('#main-screen').replaceWith(
        [
            "<div id='main-screen'><p class='text-center' id='dead-end'>",
            al,
            " class='btn btn-default' onclick='detour()'><span class='glyphicon glyphicon-repeat'></span> ",
            currentLocale.deadEnd.retry,
            afl,
            "<a href='",
            exit,
            "' class='btn btn-default'><span class='glyphicon glyphicon-list-alt'></span> ",
            currentLocale.deadEnd.exit,
            afl,
            pfl,
            '</div>'
        ].join('')
    );

    $('#main-screen').addClass('col-md-offset-3 col-md-6');

    if (width > mWdth) {
        $('#dead-end > a').addClass('btn-lg');
    }

    $('#page-selector').prop('disabled', true);
    mutateNavbar(end, width);
}

function detour() {
    $('#main-screen').replaceWith(
        [
            "<div id='main-screen'>",
            al,
            " onclick='forward()'><img id='viewport'>",
            afl,
            '</div>'
        ].join('')
    );
    $('#viewport')
        .attr({
            src: core.pages_[0],
            alt: core.t_
        })
        .addClass('manga-page');
    $('#page-selector').prop('disabled', false);
    $('#page-selector > option[value="0"]').prop('selected', true);
    mutate();
    pageCounter(1);
}
