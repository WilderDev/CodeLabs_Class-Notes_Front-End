# Class 26 - Review Day

## Concepts

- **HTTP:** _Hyper-Text Transfer Protocol_ is the webs standard for transfering data between networked devises. A typical flow using HTTP involves a client/user making an HTTP Request to a server in order to get an HTTP Response of the pages HTML, CSS & JS.

- **API:** An _Application Programming Interface_ is a set of data or functions that is accessible to third-party developers. This allows companies or individuals to communicate with each other and leverage each other's data through documentation. API's are critical to learn as a developer... you will use them a lot!

- **CRUD:** _Create | Read | Update | Delete_ are the features every application usually needs to implement to make a working application. We do this by sending specific HTTP requests to a server.

- **Firebase:** _Firebase_ is a "BaaS" (Backend as a Service) created by Google to make it easier to do all things backend. (Realtime Databases, File Storage, Authentication, Hosting. . .)

- **Authentication:** _Authentication_ is the process of verifying the identity of an individual. Authenticating a user results in user information and access to certain actions or pages that would be restricted otherwise.

- **RESTful API:** A _REST API_ (Representational State Transfer Architectural Application Programming Interface) is an architectural style and a set of rules for working with an API in a specific way. Using "RESTful Architecture", every incoming API request for the same source should ook the same, no matter where it is coming from.

- **JSON Web Token:** A _JSON Web Token_ is a compact and self-contained way for securely transmitting information between parties as a JSON Object. They are an encrypted tokens that can be sent from client to server safely.

- **Dynamic Components:** _Dynamic Components_ are components whose location isn't defined at buildtime and are loaded programmatically through code.

- **Modules:** In Angular, _Modules_ are a great way to organize an application and extend it's capabilities. They are cohesive blocks of functionality comprised of components, directives, and pipes to focus on a specific feature or area of an application.

- **Code-Splitting:** _Code-Splitting_ is the process of splitting code "chunks" into smaller bundles that can be loaded on demand or in parallel.

- **Lazy-Loading:** _Lazy-Loading_ is a strategy to identify non-critical resources and than load those features or assets only when needed.

- **Ahead-of-Time-Compliation:** _AOT Compliation_ is the act of compiling higher-level programming languages into a lower-level language before execution of a program to reduce the amount of work need to be performed at run time.

- **PWA:** A _Progressive Web App (PWA)_ is a web application that has the feel and functionality of an actual native/mobile phone app. PWA's are also enhanced with modern API's to deliver advanced features such as the ability for a user to install the website on any device.

- **Service Worker:** A _Service Worker_ is a script that the browser downloads and runs in the background, seperate from the main thread of the webpage, opening the door to features that don't need to work with the webpage or user interaction. These features include, but are not limited to, _push notifications_, _background sync_, and supporting offline experiences!

---

---

## Classes

### CLASS 21 - HTTP REQUESTS - ANGULAR

[Class 21 Content - Course Link](https://pro.academind.com/courses/765847/lectures/13906528)

[Class 21 Notes - GitHub Link](https://github.com/WilderDev/CodeLabs_Class-Notes_Front-End/blob/main/21__HTTP-Requests-and-Course-Project__Angular/21_Class-Notes.md)

By the end of this lesson, we were able to learn:

1. **The OpenLibrary API**
2. **How to create a search bar form**
3. **Sending HTTP Requets to an API**
4. **Updating our `Book Model` and saving API results**
5. **Popularing the Library page w/ API results**
6. **Setup a Firebase Project**
7. **Use the Angular HttpClientModule**
8. **Send and receive HTTP Requests**

---

### CLASS 22 - AUTHENTICATION & ROUTE PROTECTION - ANGULAR

[Class 22 Content - Course Link](https://pro.academind.com/courses/765847/lectures/13906564)

[Class 22 Notes - GitHub Link](https://github.com/WilderDev/CodeLabs_Class-Notes_Front-End/blob/main/22__Authentication-and-Route-Protection__Angular/22_Class-Notes.md)

By the end of this lesson, we were able to learn:

1. **Authenticate users using Firebase**
2. **Understand the `!!` operator**
3. **Work with Refresh Tokens & JWT**
4. **Create AuthGaurds and use HTTP Interceptors**
5. **Add Secret Enviornment Variables**
6. **Implement User Authentication in Angular**

---

### CLASS 23 - DYNAMIC COMPONENTS - ANGULAR

[Class 23 Content - Course Link](https://pro.academind.com/courses/765847/lectures/13906623)

[Class 23 Notes - GitHub Link](https://github.com/WilderDev/CodeLabs_Class-Notes_Front-End/blob/main/23__Dynamic-Components-Modules-and-Optimizations__Angular/23_Class-Notes.md)

By the end of this lesson, we were able to learn:

1. **What Dynamic Components are**
2. **How to create Dynamic Components**
3. **What Modules are in Angular**
4. **How to use Code-Splitting**
5. **How to utilize Lazy-Loading of Routes & Components**
6. **How to Preload your Components**
7. **A new way to load Services**
8. **About Ahead-of-Time-Compliation**

---

### CLASS 24 - DEPLOYING AN ANGULAR APPLICATION - ANGULAR

[Class 24 Content - Course Link](https://pro.academind.com/courses/765847/lectures/13906653)

[Class 24 Notes - GitHub Link](https://github.com/WilderDev/CodeLabs_Class-Notes_Front-End/blob/main/24__Deploying-Angular__Angular/24_Class-Notes.md)

By the end of this lesson, we were able to learn:

1. **How to deploy an Angular Application using Heroku**
2. **How to setup a deploy when you commit to Github**

---

### CLASS 25 - ANIMATIONS & WORKING OFFLINE WITH SERVICE WORKERS - ANGULAR

[Class 25 Content - Course Link](https://pro.academind.com/courses/765847/lectures/13906822)

[Class 25 Notes - GitHub Link](https://github.com/WilderDev/CodeLabs_Class-Notes_Front-End/blob/main/25__Animations-and-Service-Workers__Angular/25_Class-Notes.md)

By the end of this lesson, we were able to learn:

1. **How to add Animations to Angular Applications**
2. **How to create a service worker**
3. **How to add offline capabilities**

---

---

## Resources

### ARTICLES & DOCUMENTATION

[Communicating with Backend Services using HTTP _(Documentation)_](https://angular.io/guide/http)

[Get data from a server tutorial _(Documentation)_](https://angular.io/tutorial/toh-pt6)

[Make HTTP Requests in Angular 12 _(Article)_](https://www.positronx.io/make-http-requests-with-angular-httpclient-api/)

[RESTful API's _(Article)_](https://searchapparchitecture.techtarget.com/definition/RESTful-API)

[JSON Web Tokens - Introduction _(Article)_](https://jwt.io/introduction)

[Dynamic Components _(Documentation)_](https://angular.io/guide/dynamic-component-loader)

[NgModules _(Documentation)_](https://angular.io/guide/ngmodules)

[NgModule FAQ _(Documentation)_](https://angular.io/guide/ngmodule-faq)

[Getting Started w/ Service Workers _(Documentation)_](https://angular.io/guide/service-worker-getting-started)

[What is a PWA _(Article)_](https://www.freecodecamp.org/news/what-are-progressive-web-apps/)

---

### OTHER

[Javascript Client Side vs Server Side Validation _(StackOverflow)_](https://stackoverflow.com/questions/162159/javascript-client-side-vs-server-side-validation)

[Lazy-loading Feature Modules _(Tutorial)_](https://angular.io/guide/lazy-loading-ngmodules)
