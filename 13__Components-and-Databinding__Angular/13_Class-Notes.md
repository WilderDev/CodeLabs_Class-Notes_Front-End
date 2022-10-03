# Class 13 - Components & Databinding Deep Dive && Course Project

[Class 13 Course Content](https://pro.academind.com/courses/765847/lectures/13901530)

## Lesson Outline

Today we will learn more about:

1. Event-binding
2. Property-binding
3. Sending data from component to component. (Parent to child and child to parent)
4. Writing functions
5. Taking in data using `@Input()` and outputting data using `@Output()`
6. Conditionally displaying data based on a variable's state

---

---

## Lesson Notes (Review)

- **Component:** A _component_ is a section or feature of your application. Every component has its own template, style, and logic. The benefit of components is that they are reusable and controllable.

- **Data-Binding:** _Data-Binding_ is how we automatically update our pages template when our application state changes. It is a way to coordinate DOM object properties with data object properties.

- **View Encapsulation:** _View Encapsulation_ is a build-in Angular feature where a component's CSS is locally scoped. Changing the paragraph styles inside a child component will not affect any sibling or parent components.

- **Component Lifecycle:** Angular offers many different _Lifecycle Hooks_ to run logic at specific points along the _Component Lifecycle_. Every component, once instantiated, will run through a few phases; this is the "lifecycle" of the component.

---

---

## Course Project Steps

### STEP 1: Conditionally Rendering Pages (Using \*ngIf)

_shared/navigation/navigation.component.html_:

- Add a `(click)="onSelectPage('bookshelf')"` listener as a property on the anchor tag with the content: "Bookshelf".

- Add a `(click)="onSelectPage('library')"` listener as a property on the anchor tag with the content: "Library".

```html
<ul class="navbar-nav mr-auto mt-2 mt-lg-0">
  <li class="nav-item">
    <a class="nav-link" href="#" (click)="onSelectPage('bookshelf')"
      >Bookshelf</a
    >
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" (click)="onSelectPage('library')">Library</a>
  </li>
</ul>
```

_shared/navigation/navigation.component.ts_:

- Create a new variable `@Output() currentPage = new EventEmitter<string>()`. (Make sure to `import { EventEmitter, Output } from "@angular/core"`.)

- _Note_: The `Output()` and `EventEmitter()` are used to send variables to the parent component.

- Add the `onSelectPage(page: string)` function. This function should emit our `featureSelected` variable.

```typescript
export class NavigationComponent implements OnInit {
  @Output() currentPage = new EventEmitter<string>();
  collapsed: boolean = true;
  show: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSelectPage(page: string) {
    // Page Change Logic - Pass Page to Parent
    // console.log("NAV:", page);
    this.currentPage.emit(page);
  }
}
```

_app.component.html file_:

- We now want to listen to our outputted `currentPage` variable by using "event-binding" on the `<app-navigation>` component tag. This event should trigger a new function we will create `onNavigatePage($event)`. We use the `$event` shortcut to access the data passing through the `currentPage` variable.

```html
<app-navigation (currentPage)="onNavigatePage($event)"></app-navigation>
```

_app.component.ts file_:

- Create the `onNavigatePage(page: string)` function. This function should update a local variable that we will use to render sections of our application conditionally.

- Create the `pageDisplayed = "bookshelf"` variable with a default value equal to "bookshelf" because that is the page we want to render when the user first renders the page.

```typescript
pageDisplayed = "bookshelf"

onNavigatePage(page: string) {
    // console.log("APP COMP:", page)
    this.pageDisplayed = page;
}
```

_app.component.html file_:

- Now, we can use our `pageDisplayed` variable, paired with an `*ngIf` statement, to render our pages/features conditionally.

```html
<app-bookshelf *ngIf="pageDisplayed === 'bookshelf'"></app-bookshelf>
<hr />
<app-library *ngIf="pageDisplayed === 'library'"></app-library>
```

---

### STEP 2: Passing Bookshelf Data via Property Binding

_bookshelf/book-list/book-list.component.html_:

- Cut the anchor tag with everything inside of it. (This will represent one book.)

- Replace the code we cut with an `<app-book>` tag.

- Move the `*ngFor` loop to the `<app-book>` tag.

```html
<div class="row mb-3">
  <div class="col-md-12">
    <app-book *ngFor="let book of myBooks"></app-book>
  </div>
</div>
<!-- . . . -->
```

_shared/book/book.component.html_:

- Delete all the content and paste the singular book representation we just cut from the `book-list.component.html` file.

- _Note_: To access the book data, we must pass it down from the `book-list.component.html`.

```html
<a href="#" class="list-group-item clearfix">
  <div class="float-left">
    <h4 class="list-group-item-heading">{{ book.title }}</h4>
    <p class="list-group-item-text mb-0">{{ book.genre }}</p>
  </div>
  <div class="float-right">
    <img
      src="{{ book.coverImagePath }}"
      alt="{{ book.title }}"
      class="img-responsive rounded"
      style="max-height: 50px"
    />
  </div>
</a>
```

_shared/book/book.component.ts_:

- Add an `@Input()` decorator to take in the "book" variable coming from the "book-list.component.html" file. It should be named `book` of type `Book`. (Make sure to import )

```typescript
@Input() book: Book;
```

_bookshelf/book-list/book-list.component.html_:

- Now, we can bind to the book variable in the `book.component.ts` file and pass down the singular `book` variable data.

```html
<app-book *ngFor="let bookEl of myBooks" [book]="bookEl"></app-book>
```

---

### STEP 3: Passing Data via Event & Property Binding

_shared/book/book.component.html file_:

- Create a click listener on the book anchor tag that fires a `onBookSelected()` function.

```html
<a href="#" class="list-group-item clearfix" (click)="onBookSelected()">
  <!-- . . . -->
</a>
```

_shared/book/book.component.ts file_:

- Add the `onBookSelected()` function that updates a local `bookSelected` EventEmitter output variable. Doing this will allow us to "listen" to the current `bookSelected` coming from the parent component.

```typescript
// . . .
@Output() bookSelected = new EventEmitter<void>();

// . . .

onBookSelected() {
    // Tell App that someone clicked on a book!
    this.bookSelected.emit();
}
```

_bookshelf/book-list/book-list.component.html_:

- Create an event-binding for the `onBookSelected()` function and run a new local function inside the `book-list.component.html` file.

```html
<app-book
  *ngFor="let bookEl of myBooks"
  [book]="bookEl"
  (bookSelected)="handleBookSelected(bookEl)"
></app-book>
```

_bookshelf/book-list/book-list.component.ts_:

- Create the `handleBookSelected(book: Book)` function. This function should update a local output variable to emit the new book that was selected.

```typescript
export class BookListComponent {
  @Output() currentSelectedBook = new EventEmitter<Book>();

  // . . .

  handleBookSelected(book: Book) {
    // console.log('BOOK:', book);
    this.currentSelectedBook.emit(book);
  }
}
```

_bookshelf/bookshelf.component.html file_:

- Create an event listener for the variable the `handleBookSelected()` function changes, which we defined in the `book-list.component.ts` file. This listener should bind to a local variable set to the book emitted from that `@Output`.

```html
<app-book-list (currentSelectedBook)="selectedBook=$event"></app-book-list>
```

_bookshelf/bookshelf.component.ts file_:

- Create the `selectedBook: Book` variable.

```typescript
selectedBook: Book;
```

---

### STEP 4: Conditionally Displaying Components

_bookshelf/bookshelf.component.html file_:

- Add an `*ngIf` directive on the `<app-book-details>` tag to only render if we have a `selectedBook`.

- Use an `<ng-template>` to render some text if we do no't have a `selectedBook`. (This is one way we can simulate "if/then" statements in Angular HTML files.)

- Bind to a variable `book` that we will create in the `book-details.component.ts` file, and pass down the `selectedBook`.

```html
<!-- . . . -->
<div class="col-md-5">
  <app-book-details
    *ngIf="selectedBook; else infoText"
    [book]="selectedBook"
  ></app-book-details>
  <ng-template #infoText><p>Please select a Book!</p></ng-template>
</div>
```

_bookshelf/book-details/book-details.component.ts_:

- Add an `@Input() book: Book` decorator because we expect to get a book passed down to display.

```typescript
@Input() book: Book;
```

_bookshelf/book-details/book-details.component.html_:

- Use the data we have stored in the local `book` variable to show more details for a specific book.

```html
<div class="row">
  <div class="col-md-12">
    <h2>{{ book.title }}</h2>
  </div>
</div>

<div class="row">
  <div class="col-md-12">
    <h3>{{ book.author }}</h3>
  </div>
</div>

<div class="row">
  <div class="col-md-12">
    <p>{{ book.genre }}</p>
  </div>
</div>

<div class="row">
  <div class="col-md-12">
    <img
      [src]="book.coverImagePath"
      [alt]="book.title"
      class="img-responsive"
    />
  </div>
</div>
<!-- . . . -->
```

- Test the application and walk through the logic one more time.!

---

---

## Additional Notes

### Class Exercise

1. Create a new Angular application.

2. Generate three components using the CLI:

   - `order-dashboard`: a component that displays all customer orders.
   - `first-five-orders`: a component that displays content for the first five orders.
   - `all-other-orders`: a component that displays content for any order that isn't in the first five group.

3. The `OrderDashboardComponent` should contain a list of all orders, a button that starts the workday, and a button that ends the workday.

   - When the workday begins, a new order should be created every 2 seconds. (Orders should be an incrementing number starting from 1.)
   - When the workday ends, no more orders should be placed.

4. The `FirstFiveOrdersComponent` & the `AllOtherOrdersComponent` should be styled differently using colors, sizes, and content.

   - `FirstFiveOrdersComponent` should only show the first five orders.
   - `AllOtherOrdersComponent` should display all orders past the first five.

5. Publish your project to GitHub!

**Bonus**: Create a third component, `lottery-winning-order`, with a gold background and display this component every seventh order.

<!-- **Super-Bonus**: The lottery winning number should now display randomly on 5% of all orders. When this occurs. The work day should end and the user should receive an alert message: "You won our companies lottery. Your number was _output their number_. (You may have to restructure your code to complete this... but it can be done using what you already know in Angular.) -->

---

### Component Lifecycle

**ngOnChanges(changes: Simple Changes)**: Called after a bound input property changes.

**ngOnInit()**: Called once the component is initialized.

**ngDoCheck()**: Called during every change detection run.

**ngAfterContentInit()**: Called after content (ng-content) has been projected into view.

**ngAfterContentChecked()**: Called every time the projected content has been checked.

**ngAfterViewInit()**: Called after the component's view (and child views) have been initialized.

**ngAfterViewChecked()**: Called every time the view (and child views) have been checked.

**ngOnDestroy()**: Called once the component is about to be destroyed.

---

### Resources

- [Angular Guide - View Encapsulation](https://angular.io/guide/view-encapsulation)

- [Angular Guide - Component Lifecycle](https://angular.io/guide/lifecycle-hooks)
