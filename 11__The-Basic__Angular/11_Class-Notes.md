# Class 11 - The Basics

[Class 11 Course Content](https://pro.academind.com/courses/765847/lectures/13901064)

[View Class 11 Demo Online Here](https://angular-class-12-demo.netlify.app/)

## Lesson Outline

Today we will learn:

1. How to Create Components from scratch
2. How to Create Components using the CLI
3. How to Style our Components
4. The Basics of Data-Binding
5. The Basics of Event-Binding
6. How to Use Two-Way-Binding
7. How to Use String Interpolation
8. The Basics of Structural Directives
9. The Basics of Attribute Directives

---

---

## Lesson Notes

- **Component:** A _component_ is a section or feature of your application. Every component has its own template, style, and logic. The benefit is that they are reusable and controllable.

- **Data-Binding:** _Data-Binding_ is how we automatically update our pages template when our application state changes.

- **Event-Binding:** _Event-Binding_ is a one-way connection from the view/template to the data source/logic.

- **Two-Way-Binding:** _Two-Way-Binding_ is when we connect the view/template to the source/logic, and when either of them changes, they both update.

---

---

## Components & Databinding Project Steps

### STEP 1: Creating a Component from Scratch

- _Note_: This begins with a new project w/ bootstrap hooked up.

_box/box.component.ts file_:

- Right-click on the "app" folder and create a new folder title "box".

- Inside the "box" folder, create a new file title "box.component.ts".

- Export a class titled "BoxComponent" (all words caps).

- Add the `Component({})` decorator. (Make sure to import this from "@angular/core").

- Add the configuration for the component by adding a "selector" property that points to a string value "app-box".

- Add another property in the "Component" decorator titled "templateUrl" that is a key to the value of "./box.component.html".

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-box",
  templateUrl: "./box.component.html"
})
export class BoxComponent {}
```

_box/box.component.html file_:

- Create the "box.component.html" file inside the "box" folder.

- Add a `<div class="card mt-3 box">` with a `<p class="text-center">I am a box!</p>` inside.

```html
<div class="card mt-3 box">
  <p class="text-center">I am a box!</p>
</div>
```

_app.module.ts file_:

- _Note_: To use this component in our app, we must import it and add it to the declarations array in our main "app.modules.ts" file.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { BoxComponent } from "./box/box.component";

@NgModule({
  declarations: [AppComponent, BoxComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

_app.component.html file_:

- First, create a container, row, and column that takes up the full width. Put an `<h1>` inside.

- Since we chose the string "app-box" for our selector, we can use that tag inside of our HTML.

```html
<div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-xs-12">
      <h1>Angular Boxes</h1>
      <app-box></app-boxes>
    </div>
  </div>
</div>
```

---

### STEP 2: Creating a Component Using the CLI

_Terminal_:

- Create a new component using the CLI that will hold multiple "app-box" components. Title it "boxes"

```zsh
ng g c boxes
```

- Delete the test file.

_boxes/boxes.component.html file_:

- Create three instances of the "app-box" component using the `<app-box></app-box>` tags.

```html
<app-box></app-box>
<app-box></app-box>
<app-box></app-box>
```

_app.component.html file_:

- Change the tag to render the `<app-boxes>` instead of a singular `<app-box>`.

---

### STEP 3: Styling the Components

_app.component.css file_:

- Style the `<h1>` tag to be "red", have a size of "4rem" and a margin-bottom of ".5em".

```css
h1 {
  color: crimson;
  font-size: 4rem;
  margin-bottom: 0.5em;
}
```

_box/box.component.css file_:

- Create the "box.component.css" file inside the "box" folder.

- Style the ".box" class by adding a background-color, color, font-size, height, and flex properties.

```css
.box {
  background-color: saddlebrown;
  color: white;
  font-size: 1.5rem;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

_box/box.component.ts file_:

- Link your newly created styles by adding another property in the "Component({})" Decorator.

```typescript
@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
```

---

### STEP 4: Outputting Dynamic Content (Databinding)

_box/box.component.ts file_:

- Create two new variables: `boxNumber = 2;` and `isEmpty = false;`

_box/box.component.html file_:

- Output these variables in the box markup inside two paragraph elements. (Walkthrough the ternary operator slowly)!

```html
<p class="text-center">I am box number {{ boxNumber }}!</p>
<p>I am {{ isEmpty ? "empty" : "full" }}.</p>
```

_boxes/boxes.component.ts file_:

- Create a new boolean variable: `canOpenMoreBoxes = false`.

- Inside the "ngOnInit", create a timeout function that sets the "canOpenMoreBoxes" boolean variable to true after 3 seconds.

```typescript
export class BoxesComponent implements OnInit {
  canOpenMoreBoxes = false;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.canOpenMoreBoxes = true;
    }, 3000);
  }
}
```

_boxes/boxes.component.html file_:

- Create a button above the boxes that allows us to create a new box. (This button should be disabled if "canOpenMoreBoxes" is false).

```html
<button class="btn btn-primary" [disabled]="!canOpenMoreBoxes">
  Open New Box
</button>
```

_boxes/boxes.component.ts file_:

- Create another variable: `boxMockText = "You should open a box man."`.

- Create a function that changes the "boxMockText" whenever you open a new box. Name this function accordingly.

```typescript
export class BoxesComponent implements OnInit {
  canOpenMoreBoxes = false;
  boxMockText = "You haven't opened a box in a while";

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.canOpenMoreBoxes = true;
    }, 3000);
  }

  onOpenBox() {
    this.boxMockText = "You just opened another box!";
  }
}
```

_boxes/boxes.component.html file_:

- Create a paragraph tag below the button that outputs the "boxMockText" variable string.

- Add a `(click)` event listener on the button that calls our "onOpenBox()" function.

- Remove the "boxNumber" paragraph.

```html
<button
  class="btn btn-primary"
  [disabled]="!canOpenMoreBoxes"
  (click)="onOpenBox()"
>
  Open New Box
</button>
<p>{{ boxMockText }}</p>
<hr />
<!-- . . . -->
```

_boxes/boxes.component.ts file_:

- Create a new variable: `boxName = "Default Box";`

- Inside the "onOpenBox()" function, change the string to a template literal (``) and add in the "boxName" variable.

```typescript
boxName = "Default Box"

// . . .

onOpenBox() {
  this.boxMockText = `You just opened a box called: ${this.boxName}`
}
```

_boxes/boxes.component.html file_:

- Create a label and input that binds to the "boxName" variable.

- _Note_: Make sure you have the { FormsModule } imported in your application.

```html
<label for="boxName">Box Name:</label>
<input type="text" class="form-control mb-3" [(ngModel)]="boxName" />
<button
  class="btn btn-primary"
  [disabled]="!canOpenMoreBoxes"
  (click)="onOpenBox()"
>
  Open New Box
</button>
<!-- . . . -->
```

---

### STEP 5: Using Angular Directives

_boxes/boxes.component.html file_:

- Add an `*ngIf` directive to the `{{ boxMockText }}` paragraph and bind it to a boolean varaible "haveOpenedABox".

```html
<p *ngIf="haveOpenedABox">{{boxMockText}}</p>
```

_boxes/boxes.component.ts file_:

- Create the "haveOpenedABox" variable and set it to initialize as false.

- In the "onOpenBox()" function, set the "haveOpenedABox" to true.

```typescript
haveOpenedABox = false;
// . . .
onOpenBox() {
  // . . .
  haveOpenedABox = true;
}
```

_box/box.component.ts file_:

- Create a constructor. Inside, set our "isEmpty" variable to be true half the time and false the other half using math.

- Create a function that gets a color depending on our "isEmpty" variable.

```typescript
constructor() {
  this.isEmpty = Math.random() > 0.5;
}

getColor() {
  return this.isEmpty === true ? 'red' : 'green';
}
```

_box/box.component.html file_:

- Using the "isEmpty" variable, display different text with a different class depending on the value.

```html
<p>
  I am
  <span [ngStyle]="{ color: getColor() }">{{ isEmpty ? "empty" : "full" }}</span
  >.
</p>
```

- We can do this in a different way using the `[ngClass]` Directive. We will show this by placing a "ngClass" attribute on the card div.

```html
<div class="card" [ngClass]="{ emptyBox: isEmpty === true }"></div>
```

_box/box.component.css file_:

- Create style for the ".emptyBox" class.

```css
.emptyBox {
  height: 100px;
  font-size: 1rem;
  opacity: 0.75;
}
```

_boxes/boxes.component.ts file_:

- Create an array called "boxes" and fill it with dummy data.

- Inside the "onOpenBox()" function, push the current boxName to the "boxes" array.

```typescript
export class BoxesComponent implements OnInit {
  canOpenMoreBoxes = false;
  hasOpenedABox = false;
  boxMockText = "";
  boxName = "";
  boxes = ["Box 1", "Box 2", "Box 3"];

  // . . .

  onOpenBox() {
    this.hasOpenedABox = true;
    this.boxes.push(this.boxName);
    this.boxMockText = `You just opened a box called: "${this.boxName}"!`;
  }
}
```

_boxes/boxes.component.html file_:

- Remove all but on `<app-box>` tag.

- Place an "\*ngFor" loop on the `<app-box>` that loops over all the boxes in the "boxes" array.

```html
<app-box *ngFor="let box of boxes"></app-box>
```

---

---

## Additional Notes

### Class Exercise

1. Generate a new Angular project (with strict mode disabled). Name it "angular-basics-exercise".

2. Manually create a component called "article".

3. In the article component, create variables `title: string = "Whatever you want"` and `content: string = "Some content goes here"`.

4. Use string interpolation to output the title in an h1 element and the content in a paragraph element. (Note: you can google 'lorem ipsum generator ' to generate dummy text).

5. Display the article component by adding it in the main "app.component.html" file.

6. In the article component, add another variable: `isTechRelated: boolean = true`.

7. Use "ngStyle" to change the background of the h1 element to blue when "isTechrelated" is true; Otherwise, it should be yellow.

8. Push your local repository to GitHub, call the repo 'angular-basics-exercise'.

**Bonus**: In the article component, create a button with the content "change isTechRelated". (Use event binding to reverse the variable "isTechRelated" value whenever a user clicks the button).

**Bonus**: In the article component, use "ngIf" to display a paragraph element with content "Tech Related" when the "isTechRelated" is true. When false, use the ng-template element to display "Not Tech Related".

---

### Resources

- [Angular Docs - Binding Syntax](https://angular.io/guide/binding-syntax)

- [Angular Docs - Built-in Directives](https://angular.io/guide/built-in-directives)

- [Angular Docs - Attribute Directives](https://angular.io/guide/attribute-directives)

- [Angular Docs - Structural Directives](https://angular.io/guide/structural-directives)
