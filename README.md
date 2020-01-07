# TabSorter2

A Tab Manager for Google Chrome; Merge, Sort, Split, and More :)

- Merge
  - merges all windows
- Sort
  - sort tabs by domain and titles
  - can sort all windows or just a single one
  - configurable in option window
- Split
  - splits a window in 2 ( by default )
  - can be change to 3 or 4 in option window
  - windows can be seen side by side if the option is checked
- Shuffle
  - will shuffle the tabs within the current window  (it's just fun xD)
- Unite (**new**)
  - bring all the tabs of a domain together at the most right of the current window
- Isolate (**new**)
  - extract all tabs of a domain into a new window
- Freeze (**new**)
  - Discard all open tabs to save on memory - **all pages will turn blank**
  - pages will remain open in your browser
- Close (**new**)
  - Closes all tabs under a domain
  - multiple subdomain are not currently supported
- Save
  - save current window to a text file
  - links are shortened using google URL Shortener
  - the file content is sorted by page title
- Load (**new**)
  - loads all the tabs previously saved in one new window and automatically freeze them
  - backward compatible
  - will load up to 2mb
- Deduplicate
  - remove deplicate open url tabs from current window
- Options
  - open the extension option window
  - options need to be saved to persist

## Preview
--New v1.1--
![Popup 1.1](/preview_v1.1.png?raw=true "Popup view")


--Old v0.1~0.5--
![Popup](/tabSorter2.png?raw=true "Popup view")
![Options](/tabSorter2-options.png?raw=true "Option view")

## Build quirks

- Problem CSS imports are ignored
- Fault with gulp-clean-css@2.4.x. [There is a fix here](https://github.com/opensensorhub/osh-js/issues/36).

## Ideas and Enhancements

- Auto-suspend tabs after configurable delay to save memory
- Time travel!

## Versions

### TODO: v0.0.6 - WIP  - 08/21/2019

#### Options Window

  - [ ] ignore params after special characters - #,&
  - [x] Improve sorting - add options to sort by regex pattern and parameters
  - [x] exclude merge list~~
  - [x] Upgrade split function to split left on current tab  - split Here
  - [x] auto sort tabs - sort as they are loaded

#### Main Background

  - [ ] Make loadfile backward compatible
  - [ ] Exclude merge list
  - [ ] useActive* function on start
  - [ ] split backgroundjs
  - [ ] Save pinned tabs
  - [ ] Transfer pinned tabs on-close
  - [ ] Ignore pinned tabs onClose
  - [ ] Create integration test
  - [ ] Deduplicate ignore after delimiter
  - [ ] Undo any steps
  - [x] Add Support for pinned Tabs ( this was suprisingly complicated 😅)
  - [x] Sort and pin tab separatly
  - [x] Merge the last 2 windows
  - [x] Subdomain subsorting - WIP
  - [x] Options to automatically sort the tabs by title
  - [x] Search my tabs ( 😁 - idk yet how it gonna happen lol ) (*Done but not added to TS2*)
- [ ] Improve the design :)

### v0.0.5 - 06/22/18 - Added new features and improved icon for visibility

- fixed windows id bug on split
- added tab recycling
- [x] Options to automatically sort the tabs by title
- [x] Isolate a single domain in a separate windows
- [x] Unite - bring all tabs of a domain in the same current window ~~
- [x] Close a domain
- [x] Backward compatible loading of previously saved Tabs **YASSS !!!**
- [x] Stress test split function and memory management
- [x] Freeze - (Discard) remove all tabs in current window from memory but leaves the tab visible in the browser

v0.0.4 - 09/18/17 - Completed the Option page with support for side by side split

v0.0.3 - 04/08/17 - Updated UI - added Save & Deduplicate

v0.0.2 - 03/23/17 - Fixed initialization issue.

v0.0.1 - 03/23/17 - Merge/split/shuffle functionality added.
