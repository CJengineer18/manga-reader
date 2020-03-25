# MangaReader

An online manga reader created for use in manga and anime pages. Using jQuery can load faster the required images for a better reading and reducing bandwidth. The UI uses Bootstrap 3's theme as base.

## How it works

Normally a reader is a server-side page that loads the manga's page as an image. Hovewer, to change the image, it sends a request to the same page with the required image id, recreating (and reloading) everything just to change an image, consuming unnecesary bandwidth and server resources. This reader only changes the image url in the dom, maintaining the rest of page intact.

## How to install

-   Put the files in any path in your directory.
-   Create a js file named `url.js` in the same level to `manga_reader.html`.
-   In `url.js` you must add two global variables: `coreUrl` and `backUrl`:

    -   The first contains the url that returns a JSON with the information of the manga to load, following this structure:

    ```
    {
       "t_":"series_title",
       "ch_":"chapter_title, if no title you can use an generic title",
       "pages_":[
           ... All urls to the pages (images) ...
        ],
       "n_":1 // number of pages,
       "exit_":"the url to back (generally to chapters list)",
       "host_":"Page's name",
       "hostIndex_":"Page's url"
    }
    ```

    I recommend generate this in server-side.

    -   The second variable has the same value as `exit_` in JSON.

-   To load the manga, redirect to `manga_reader.html` adding two "get" parameters:

    -   `manga`: the internal id of the book.
    -   `serverParam`: The internal name id in the server.

    Assuming you have a database, the url should look like this: `http://manga.com/read/manga_reader.html?manga=1&serverParam=manga_book`, this calls the url in `coreUrl` and send the information in a GET request, like this: `http://manga.com/core/book?manga_book=1`.

## Customization

You can add custom styles or importing stylesheets using the file `custom.css`.

## Coming soon

In the future, I want to rebuild this project using new technologies (particularly using React) so this project will remain as a legacy version. But, by now, this is the current project.

## Changelog

-   06/05/2019 - Rewrite `buttonSwitch()` in `switches.js`. Added utility module. Some minor fixes.
-   28/04/2019 - Fix english locale, change `locale.json` url. Fixed styles in `skin.css`.
-   25/04/2019 - First public version (beta).

## Known issues

-   The project as is still unstable. Consider this a beta version until first release.
-   Slots for ads unavailable (yet).
-   Support only for two languages: English (default) and Spanish (Español). You can add new locales modifying the file `locale.json` in the "resources" folder.
-   Untested on Chrome, Edge/IE, Safari.
-   Demo unavailable (yet).

## License

MIT
