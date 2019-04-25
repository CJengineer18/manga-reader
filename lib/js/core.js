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

/* Load the core where stores the manga information */

var core = undefined;

function downloadCore(url, after, errorHandler) {
    if (Promise) {
        return new Promise(function(resolve, reject) {
            ajax(url, resolve, reject);
        });
    } else ajax(url, after, errorHandler);
}

function ajax(url, after, errorHandler) {
    $.ajax({
        url: url,
        success: function(response, status, xhr) {
            if (typeof response === 'string') core = JSON.parse(response);
            else if (typeof response === 'object') core = response;
            else if (errorHandler) errorHandler('Invalid core');
            if (after) after();
        },
        error: function(xhr, status, errorMessage) {
            var errorInfo = [xhr.status, errorMessage];
            if (errorHandler) {
                errorHandler(errorInfo.join(' - '));
            }
        }
    });
}
