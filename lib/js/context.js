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

/* Configure the page */

/* Require jQuery */
/* Require "constants.js" */
/* Require "getters.js" */
/* Require "evolution.js" */
/* Require "core.js" */

function loadLastReadPage() {
    var lastReadPage = getCurrentIndex();
    $('#viewport')
        .attr('src', core.pages_[lastReadPage])
        .addClass('manga-page');
    $('#page-selector').prop('disabled', false);
    mutate();
    pageCounter(lastReadPage + 1);
}

function pageCounter(currentPage) {
    $('#page-counter > p').replaceWith(
        [
            pl,
            '>',
            currentLocale.pages[0],
            ' ',
            currentPage,
            ' ',
            currentLocale.pages[1],
            ' ',
            core.n_,
            pfl
        ].join('')
    );
}

function restartPosition() {
    window.scrollTo(0, 0);
}
