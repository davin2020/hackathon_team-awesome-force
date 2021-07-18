# Tailwind CSS and Vue.js Prototype

I have created the pages designed using Tailwind CSS and am using Vue.js to fill in the content. In the interest of simplicity, this is not in the usual Vue.js project setup but rather a self-contained website. Each page is in the `build` folder and can be simply changed by the html.

In order to make the files reasonably sized, the project is set-up to purge the CSS file in `build` of any unused styles - if you want to make any changes to the design, you need to have `npm` installed. Simply open the root folder and type

```npm run build```

which will place the latest version of the style sheet into the build folder.
