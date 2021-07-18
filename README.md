# Lemonie

This is a project made in 48 hours for the [ShowCode Level-Up Society Hack 2021](https://www.showcode.io/level-up-hack/). To find out more about the project, visit our [DevPost page](https://devpost.com/software/team-awesome-force). 

---

Lemonie is a web-app made to simplify the process of accessing DBT (Dialectical Behavior Therapy) skills worksheets and exercises, particularly for those suffering from BPD (Borderline Personality Disorder), through a friendly and easy to use interface, supported by a gamification.

---

Lemonie uses Firebase **Cloud Firestore** for the back-end, and **Vue.js** and **Tailwind CSS** for the front-end (as well as some static pages using **Bootstrap**). There is an instace of the app hosted with Firebase Hosting [here](https://awesome-dbt.web.app/).

## Building the project

The pages are designed using Tailwind CSS and using Vue.js to fill in the content. In the interest of simplicity, this is not in the usual Vue.js project setup but rather as self-contained web pages. Each page is in the `/build/` folder (which is the website root directory) and can be modified by editing the HTML files.

However, there is a build process if you wish to make changes to the CSS, as the project is set up to purge the CSS file of unused classes.
If you want to make any changes to the design, you need to have `npm` installed. Simply open the project root folder and type

```npm run build```

which will place the latest version of the style sheet into the `/build/` folder.
