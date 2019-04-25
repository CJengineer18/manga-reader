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

/* Loads locale by navigator.language */
var currentLocale;

function loadLocale() {
    var default_ = function() {
        // FIXME: English
        currentLocale = {
            pages: ["Pagina", "de"],
            deadEnd: {
                retry: "Volver a leer",
                exit: "Ir al indice"
            },
            about: {
                title: "About",
                modal:
                    "Lector de Mangas creado por Cristian Jose Jimenez Diazgranados para"
            },
            tooltips: {
                firstPage: "Primera pagina",
                lastPage: "Ultima pagina",
                nextPage: "Pagina siguiente",
                prevPage: "Pagina anterior"
            }
        };
    };
    var ajax = function() {
        var language = navigator.language.split("-")[0];

        $.ajax({
            url:
                "https://dl.dropboxusercontent.com/s/ia2g04622d6q418/locale.json",
            success: function(response) {
                if (typeof response === "string")
                    currentLocale = JSON.parse(response)[language];
                else if (typeof response === "object")
                    currentLocale = response[language];
                else {
                    console.error("Invalid core");
                    default_();
                }
            },
            error: function(xhr, status, errorMessage) {
                console.error([xhr.status, errorMessage].join(" - "));
                default_();
            }
        });
    };

    if (Promise) {
        new Promise(ajax).then(function() {}, default_);
    } else {
        ajax();
    }
}
