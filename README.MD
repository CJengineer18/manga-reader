# MangaReader

An online manga reader created for use in manga and anime pages. Using jQuery can load faster the required images for a better
reading and reducing bandwidth.

## How to Use

* Put the files in any path in your directory.
* Create a js file named "url.js" in the same level to "manga_reader.html".
* In "url.js" you must add two global variables: ```coreUrl``` and ``` backUrl```.
* The first contains the url that returns a JSON with the information of the manga to load, following this structure:
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
  I recommend generate this via server-side.

* The second variable has the same value as "exit_" in JSON.
* To load the manga, redirect to "manga_reader.html" adding two "get" parameters:
    - ```manga```: the internal id of the book.
    - ```serverParam```: The internal name id in the server.
  
  Assuming you have a database, the url should look like this: ```http://manga.com/read/manga_reader.html?manga=1&serverParam=manga_book```, 
  this calls the url in ```coreUrl``` and send the information via get, like this: ```http://manga.com/core/book?manga_book=1```.
  
## Coming soon

In the future, I want to recreate this project using new technologies (particularly using React) so this project will remain as a
legacy version. But, by now, this is the current project.

## Versions

* v1.0 - First public version.

## Known issues

* Support only for two languages: English (default) and Spanish (Español). You can add new locales modifying
the file "locale.json" in the "resources" folder.

## Licence

MIT
