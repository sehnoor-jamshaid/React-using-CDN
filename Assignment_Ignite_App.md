IGNITING OUR APP:

Package.json is configuration of npm and is not called node package manager it do manages packages but it isnt called node package manager but anything.

There are two types of dependencies when making an application if we write npm install -D parcel (means we need this parcel for development phase) parcel is basically a bundler like webpack but using diff algo.

Why there is caret?

Tilde (~): When you specify a version using the tilde symbol, you are allowing minor version updates but not major updates. In semantic versioning (SemVer), a version number consists of three parts: MAJOR.MINOR.PATCH.
Example: If you specify ~1.2.3, it means you're willing to accept updates up to 1.2.x (where x is any patch version), but you will not accept updates that change the first digit (major version).
Caret (^): The caret symbol allows both minor and patch updates, but not major updates that introduce breaking changes. It provides more flexibility compared to the tilde symbol.
Example: If you specify ^1.2.3, it means you're willing to accept updates up to 1.x.x (any minor and patch versions), but you will not accept updates that change the first digit (major version).
In summary:
Tilde (~): Allows only patch updates.
Caret (^): Allows both minor and patch updates.


Package.lock.json: It has a record of exact version of each package installed and more info of each package and has a hash in it if we install a newer version the lock file check decrypting its hash and checking if its same or not.

Node Module:

A dependency has its dependencies and it has its own dependency and is called transitive dependencies. Basically node  modules pulls all the code in its packages and we are able to use thats why it is heaviest object.

NPm VS Npx:

Npm basically manages packages and npx is the executor of js packages.
Note: normal js scripts do not have imports.

Hot Module Replacement:

As soon as you change anything in your app it refreshes and same reflect on server. Parcel is written in C++

Parcel:

Making build
HMR
Caching
File Watching Algo in C++
Image Optimization
Minification
Optimization
Bundling
Code Splitting
Consistent Hashing
Differential Bundling– support on older browsers
Diagnostics
Error Handling
HTTPS 
Tree Shaking (Parcel will remove extra random code from your application)

Note: Need to remove main entry point information in package.jsn because it is conflicting between app.js main entry point defined and the one you gave index.html.

Assignment:

1- NPM:

npm is basically package manager that installs and manages packages used for building react app. It is a cmd tool comes bundled with nodejs installation time.

2- Webpack/Parcel:

Webpack and parcel are buil development tools both are powerful tools to build our project.
Parcel:
Parcel needs no or very less configuration and it optimizes the code perform minification, optimizes images, HMR, Tree shaking and caching ability.

The diff between parcel and webpack is:

Webpack configuration is quite expensive and complex while parcel focus on simplicity

3-.parcel_cache
Just like memoization technique where we focus on retrieving data in less time it applies the same technique and cache data in parcel-cache so it is easy to retrieve in some few ms in this way speed is optimized.

4-NPX

Npx is a driver of npm the packages basically it is the executor of packages. Npx comes along with nodejs and it runs binaries from nodejs and it is cmd tool which executes command provided by npm.Its primary purpose is to execute command-line tools that are not globally installed or are not part of your project's dependencies.npm install packages in your node_modules folders as dependencies whereas npx use command line tools from packages that are not part of your project or not globally installed.


5-Dependencies vs DevDependencies

Dependencies are such requirement that is required for the app to function properly for example 
1- libraries , env like nodejs and api connections that is must for an app to run properly.
DevDependencies are required only for development purpose they are not required in production for example:
Linting Eslint, Webpack, Testing tools like jest.

6-Tree Shaking

As app grows the bundle size grows as well so tree shaking is a technique which removes the unused or redundant code from the app for eg: if a subtract function is  not used it(the bundler used in app) will remove it.

7-HMR

HMR is a feature provided by modern JavaScript bundlers like Webpack. It allows developers to update, or "hot swap," individual modules in the application without requiring a full page reload or losing the application's current state. It provides a more seamless and faster development experience by reflecting changes in the codebase immediately in the browser.
This is a development feature and it isnt used in production.

8- Parcel Super Powers:

1- parcel has the super power to refresh the content change like a speed of light.

When a change is detected in a module, the HMR module sends an update signal to the browser.
The browser requests the updated module from the server.
The updated module is then loaded and injected into the application on-the-fly, without a full page reload.
Any affected parts of the application that use the updated module are re-rendered, but the overall application state is preserved.

2- Tree Shaking is a technique in which unused and redundant code is remove when the build is minified so that the build would lightweight and efficient.

3-  Parcels handles error efficiently. It displays errors whether caused in development and runtime in the console and also provides an overlay in the browser in a fancy manner. Because of that one does not have to open the console to check errors.

4- Image Optimization is a super power of parcel: it compresses the image and converts it into WebP format. It generates responsive images as well.

5- Differential Bundling:
Based on browserList a parcel can create diff versions of build.This allows you to target specific browser versions and optimize your application's performance and compatibility for different users.


9- .GitIgnore

The processes that can be regenerated are kept in .ignore file. For eg: node modules as package.json is enough for it

10- Pkg.json & Pkg.lock.json

Package .json has the configuration of npm where all the information of our project is stored.
Package.lock.json has the exact version ofd the packages installed it has integrity field which has hash in it when installing packages it countercheck decrypting hash if the packages are same or not else it provides error.

11- Modifying Pkg-lock.json:

Manually modifying the package-lock.json file can lead to dependency inconsistencies and unexpected issues in your project. It's best to let npm manage this file automatically to ensure reproducible and consistent builds.

12- Node Modules

Node modules can be installed using npm i so no need to push it on git as it is a regenerated file.

13- Dist Folder

Dist folder is created when build is made which is used in production it goes in dist folder it has minified forms of files and some binary formatted ones which serves in production.

14- BrowserLists:

Browser List are the browsers versions which would help in incompatibility issues when added in package.json file. Parcel makes multiple version builds according to the requirement  and they serve the end users.






