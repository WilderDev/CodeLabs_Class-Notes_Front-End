# Class 20 - Review Day

## Concepts

- **Directives:** A _directive_ is how we give instructions to the DOM to control certain elements in Angular.

- **Attribute Directives:** An _attribute directive_ is what we use to change the behavior or appearance of _elements_. (Built-in Structural Directives: `ngClass`, `ngStlye`, `ngModel`).

- **Structural Directives:** A _structural directive_ is what we use to change the _DOM_ layout by adding, removing, or altering elements. (Built-in Structural Directives: `ngIf`, `ngFor`, `ngSwitch`).

- **Services:** A _Service_ in the context of Angular is a centralized store where you can place code so multiple other components can use it. Services allow our app to have better "communication". (This drastically reduces the complexity of the application state because we no longer need to pass a variable through two or more levels of folders using `@Input()` and `@Output()`.)

- **Dependency Injection:** _Dependency Injection_ is when a class uses code from another class or service instead of writing it locally. You "inject" the code from one part of your app into another.

- **D.R.Y. Code:** _D.R.Y. Code_ stands for "Don't Repeat Yourself". This meta-programming philosophy advises you to abstract away any logic you use in multiple components to a shared place.

- **Router Outlet:** The `<router-outlet>` tag is how we dynamically render the component we want based on the URL path.

- **Router Link:** Every link needs to point to a route. The "_routerLink_" is used instead of an anchor tag to support the SPA methodology. The page will not refresh, even when you change routes!

- **Asynchronous:** _Asynchronous_ code is any piece of logic that does not execute right away because it needs to wait for something else to happen first. You can understand asynchronous code better by knowing how Javascript works under the hood. Javascript is a "Single-Threaded-Language," meaning that it can only execute one piece of code at a time. So when it runs into, let us say, an HTTP Request... it will be held up for 5-10 seconds! Waiting this long to respond would be a horrible user experience, so what happens is that the Javascript Evaluator says: "This might take a bit. I will put a note over here and insert myself when I finish this complex task". Javascript knows to do this when we write _Asynchronous_ code.

- **Observable:** An _Observable_ is an interface used to handle various everyday asynchronous or event operations. They provide support for passing messages between different sections of your application. Observables are a stream of data that you "subscribe" to receive info when that data changes.

- **Observer:** An _Observer_ is a way to "subscribe" to Observable events. Depending on where the Observable is placed, you can write code to handle the data, handle the error, and handle the completion.

- **Subjects:** _Subjects_ are unique _Observables_ that act as both the "observer" and the "observable." Subjects allow us to emit new values to the subscription stream using the `next()` method.

- **Template Driven Approach:** The _template driven approach_ to forms is the more intuitive and simpler way to implement form functionality in Angular. This method infers the structure of the "form" object from the DOM.

- **Reactive Driven Approach:** The _reactive driven approach_ to forms is more explicit. This way of handling forms is more complicated, but, you have gain more fine-tuned control and flexibility.

- **Pipes:** In Angular, _Pipes_ are simple functions you can use in HTML template expressions, that accept an initial value and return a transformed value.

---

---

## Classes

### CLASS 15 - DIRECTIVES & SERVICES - ANGULAR

[Class 15 Content - Course Link](https://pro.academind.com/courses/765847/lectures/13902112)

[Class 15 Notes - GitHub Link](https://github.com/WilderDev/CodeLabs_Class-Notes_Front-End/blob/main/15__Directives-Deep-Dive__Angular/15_Class-Notes.md)

By the end of this lesson, we were able to learn:

1. **The difference between attribute & structural directives**
2. **How to implement fundamental attributes & structural directives**
3. **How to use the Renderer2 Package**
4. **How to react to user events in custom directives**
5. **How to build custom directives**
6. **How to set up Angular Services**
7. **How to use Services for cross-component communication**
8. **How to "Inject" Services into other Services**

---

### CLASS 16 - CHANGING PAGES WITH ROUTING - ANGULAR

[Class 16 Content - Course Link](https://pro.academind.com/courses/765847/lectures/13902399)

[Class 16 Notes - GitHub Link](https://github.com/WilderDev/CodeLabs_Class-Notes_Front-End/blob/main/16__Changing-Pages-Routing__Angular/16_Class-Notes.md)

By the end of this lesson, we were able to learn:

1. **How to add base routes for our application**
2. **How to add child routes**
3. **How to configure route parameters**
4. **How to pass dynamic parameters through links**
5. **How to programmatically edit our book links**

---

### CLASS 17 - UNDERSTANDING OBSERVABLES - ANGULAR

[Class 17 Content - Course Link](https://pro.academind.com/courses/765847/lectures/13902630)

[Class 17 Notes - GitHub Link](https://github.com/WilderDev/CodeLabs_Class-Notes_Front-End/blob/main/17__Understanding-Observables__Angular/17_Class-Notes.md)

By the end of this lesson, we were able to learn:

1. **What Asynchronous code is**
2. **What an Observable is**
3. **How to subscribe to Observables**
4. **What RxJS Operators are**
5. **How to map over code**
6. **The basics of Pipes**
7. **What a Subject is in Angular**

---

### CLASS 18 - HANLDING FORMS - ANGULAR

[Class 18 Content - Course Link](https://pro.academind.com/courses/765847/lectures/13902806)

[Class 18 Notes - GitHub Link](https://github.com/WilderDev/CodeLabs_Class-Notes_Front-End/blob/main/18__Handling-Forms__Angular/18_Class-Notes.md)

By the end of this lesson, we were able to learn:

1. **Two ways we can handle forms in Angular Applications**
2. **The differences between both approaches**
3. **How to implement a Template Driven Approach**
4. **How to implement a Reactive Driven Approach**

---

---

### CLASS 19 - FORMS COURSE PROJECT && PIPES - ANGULAR

[Class 19 Content - Course Link](https://pro.academind.com/courses/765847/lectures/13902992)

[Class 19 Notes - GitHub Link](https://github.com/WilderDev/CodeLabs_Class-Notes_Front-End/blob/main/19__Course-Project-Forms-and-Pipes__Angular/19_Class-Notes.md)

By the end of this lesson, we were able to learn:

1. **How to implement a Template Driven Approach**
2. **How to implement a Reactive Driven Approach**
3. How to create and use a custom "Pipe".

---

---

## Resources

### ARTICLES & DOCUMENTATION

[Attribute Directives _(Documentation)_](https://angular.io/guide/attribute-directives)

[Structural Directives _(Documentation)_](https://angular.io/guide/structural-directives)

[What are 'Directives' in Angular _(Article)_](https://vmar76.medium.com/what-are-directives-in-angular-d0dd76f53568)

[Intro to Services & Dependency Injection _(Documentation)_](https://angular.io/guide/architecture-services)

[Dependency Injection in Angular _(Article)_](https://angular.io/guide/dependency-injection)

[Router Reference _(Documentation)_](https://angular.io/guide/router-reference)

[Common Routing Tasks _(Documentation)_](https://angular.io/guide/router)

[Routing Tutorial App _(Article)_](https://www.positronx.io/angular-router-tutorial/)

[Observables in Angular _(Documentation)_](https://angular.io/guide/observables-in-angular)

[Using Observables to Pass Values _(Documentation)_](https://angular.io/guide/observables)

[Built in HTML Validators _(Documentation)_](https://angular.io/api/forms/Validators)

[Introduction to Forms _(Documentation)_](https://angular.io/guide/formsoverview)

[Guide/Tutorial on Pipes _(Documentation)_](https://angular.io/guide/pipes)

[Angular Pipes _(Article)_](https://www.ngdevelop.tech/angular/pipes/)

---

### OTHER

- [Reactive Forms _(Tutorial)_](https://angular.io/guide/reactive-forms)
