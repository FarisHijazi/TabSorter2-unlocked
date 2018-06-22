# TabSorter2
Google Chrome Tab Management Extension - Merge, Sort, split and more :)

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

### Preview 

![Popup](/tabSorter2.png?raw=true "Popup view")
![Options](/tabSorter2-options.png?raw=true "Option view")
### Build quirks
 -> problem css imports ignored
   -> it's gulp-clean-css@2.4.x fault [fix Here](https://github.com/opensensorhub/osh-js/issues/36)

### TODO:
  - <s> Automatically suspend tab after a configurable delay to save memory ?? </s>
  - <s> Isolate a single domain in a separate windows </s>
  - <s> Unite - bring all tabs of a domain in the same current window </s>
  - <s> Close a domain </s>
  - <s> Backward compatible loading of previously saved Tabs </s>  **YASSS !!!**
  - Upgrade split function to split left on current tab  - split Here
  - <s>Stress test split function and memory management</s>
  - <s>Freeze - (Discard) remove all tabs in current window from memory but leaves the tab visible in the browser</s>

### versions
v0.0.5 - 06/22/18 - new features added and improved Icon for better visibility
   - fixed windows id bug on split
   - added tab recycling

v0.0.4 - 09/18/17 -  Completed the Option page with support for side by side split 

v0.0.3 - 04/08/17 - Updated UI - added Save & Deduplicate 

v0.0.2 - 03/23/17 - Fixed initialization issue.

v0.0.1 - 03/23/17 - Merge/split/shuffle functionality added.
