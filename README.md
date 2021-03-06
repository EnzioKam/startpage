# startpage-wave

Browser startpage originally inspired by startwave-page from https://github.com/Tobias-Schoch/startpage-wave/ with personal settings and changes. Some Javascript and CSS modifications for the help box are adapted from https://gitlab.com/Capuno/Decaux .

## Instructions

Original from https://www.reddit.com/r/startpages/comments/g3qndt/psa_how_to_set_a_custom_new_tab_page_in_firefox/ .

### For Firefox 79

1. Open the Firefox installation folder. You can check this with `whereis firefox`. Eg. `/usr/lib/firefox`
2. Create a file named `autoconfig.cfg` .

   ``` js
   //
   var {classes:Cc,interfaces:Ci,utils:Cu} = Components;

   /* set new tab page */
   try {
   Cu.import("resource:///modules/AboutNewTab.jsm");
   var newTabURL = "file:///PATH_TO_YOUR_START_PAGE.html";
   AboutNewTab.newTabURL = newTabURL;
   } catch(e){Cu.reportError(e);} // report errors in the Browser Console
   ```

3. Replace `"file:///PATH_TO_YOUR_START_PAGE.html"` with the path of the startpage html file. Eg. `"file:///home/enzio/.mozilla/firefox/<profile>/startpage/index.html"`
4. In the `".../defaults/pref/"` folder, create a file called `autoconfig.js` .

   ``` js
   //
   pref("general.config.filename", "autoconfig.cfg");
   pref("general.config.obscure_value", 0);
   pref("general.config.sandbox_enabled", false);
   ```

5. In Firefox, type `about:preferences#home` in the URL bar to access the homepage and newtab settings. Set the path in Step 3 under `Custom URLs...` for the homepage. Set the `New tabs` to `Blank Page` .

#### Some Notes
* Note that the `//` comment on the first line of both files are required to be included.
* The `autoconfig.js` file must use Unix end-of-line (LF), even on Windows. This can be done using a text editor such as VSCode.

