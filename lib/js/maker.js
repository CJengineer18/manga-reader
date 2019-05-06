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

/* Make the page once */

/* Require jQuery */
/* Require custom script "url" */
/* Require "core.js" */
/* Require "context.js" */

function loadSelector() {
    for (var i = 0; i < core.n_; i++) {
        $('#page-selector').append(
            ["<option value='", i, "'>", i + 1, '</option>'].join('')
        );
    }
}

function loadHostName() {
    if (core.hostIndex_) {
        $('#host-name').replaceWith(
            [
                '<a href=',
                core.hostIndex_,
                "' class='host-link'>",
                core.host_,
                '</a>'
            ].join('')
        );
    } else {
        $('#host-name').replaceWith('<i>' + core.host_ + '</i>');
    }
}

function loadCore(after, error) {
    var params, mangaId, serverParameterName, response;

    if (window.URLSearchParams) {
        params = new URLSearchParams(location.search);
        mangaId = params.get('manga');
        serverParameterName = params.get('serverParam');
    } else {
        mangaId = getUrlParameter('manga');
        serverParameterName = getUrlParameter('serverParam');
    }
    if (serverParameterName)
        response = downloadCore(
            [coreUrl, '?', serverParameterName, '=', mangaId].join(""),
            after,
            error
        );
    else response = downloadCore(coreUrl, after, error);

    return response;
}

function loadPage() {
    $('#main-screen > #cover-spin').replaceWith(
        [
            '<a href="javascript:void(0)" onclick="forward()"><img id="viewport" alt="',
            core.t_,
            '"></a>'
        ].join('')
    );
    loadSelector();
    loadHostName();
    $('title').replaceWith('<title>' + core.ch_ + '</title>');
    $('#manga-title > p').replaceWith(
        "<p class='navbar-text'>" + core.ch_ + '</p>'
    );
    loadLastReadPage();
}

function load() {
    loadLocale();
    if (Promise) loadCore().then(loadPage, failure);
    else loadCore(loadPage, failure);
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');

    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);

    return results === null
        ? ''
        : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function failure(message) {
    alert("Manga can't be loaded!\nCause: " + message);
    location.replace(backUrl);
}
