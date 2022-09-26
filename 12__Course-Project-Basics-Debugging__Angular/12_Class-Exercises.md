# Course Basics & Debugging Exercises

**Use Git or GitHub Desktop to push each exercise to GitHub**

_NOTE_: Make projects all non-strict mode

---

---

## Exercise 1: Use property binding to adjust the height and width of an image.

1. Create a new angular project called `property-binding-image-size`
2. In app.component.ts, create two instance properties called width and height. Both properties have a type of number and a value between 100 - 500 (you choose the number)
3. In app.component.html, create an img element (see reference for this exercise) and include its src attribute. Then, copy an image address link from google (make sure it has an image extension at the end of the link) and set src to the image link.
4. Now, add two more attributes: width and height, and use property binding to set it to the instance properties you made in your app.component.ts file.

Reference: https://www.w3schools.com/tags/att_height.asp

---

## Exercise 2: Click on a button to log to the console.log a message

1. Create a new angular project called `basic-event-binding-exercise`
2. In app.component.html, create a button element with the content "Click me to log to the console!"
3. Implement an event binding to the button element you created so that, whenever you click the button, it logs a message(could be anything) to the console.
4. run 'ng serve' and click on the button. You should be able to see something output to the console in your browser's dev tools.

---

## Exercise 3: Dynamically disable and enable the input field using event binding and property binding.

1. Create a new angular project called `dynamic-button-event-binding`
2. In app.component.ts, create a instance property called isDisabled of type boolean and set it to true.
3. In app.component.html, create an input element and incorporate property binding by disabling or enabling the input element depending on the value of the instance property isDisabled.
4. Create a button element with content "Click me to change the value of isDisabled!"
5. Use event binding for whenever you click the button, you set isDisabled to the opposite of its current value.
   Example: If isDisabled is true
   when I click on the button, isDisabled is set to false.
6. In the button element content, it currently has "Click me to change the value of isDisabled!", use the ternary operator and string interpolation to be able to output "Currenlty disabled" when the isDisabled property is true, and vice versa for when it is false.
7. run `ng serve`. You should be able to type into the input field when isDisabled is false and vice versa for when it is true.

---

## Exercise 4: Use ngModel to dynamically change the value of a instance property

1. Create a new angular project called `basic-ngmodel-exercise`
2. In app.component.ts, create a instance property called title of type string and set it equal to "header"
3. In app.component.html, create an h1 element and use string interpolation to output the value of the instance property header.
4. Create an input element that implements two-way data binding, ngModel, that will dynamically change the header's value for whenever you type into the input field.
5. run `ng serve` to confirm this works.

---

## Exercise 5: Dynamically change the value of a instance property without using ngModel

1. Create a new angular project called `input-event-binding-exercise`
2. In app.component.ts, create a instance property called title of type string and set it equal to "header"
3. In app.component.html, create an h1 element and use string interpolation to output the value of the instance property header.
4. Create an input element that implements event binding and property binding to get the same effect of ngModel
   Notes: You will need to use attributes `input` for event binding and `value` for property binding

Reference:
https://www.w3schools.com/tags/att_input_value.asp -> learn what `value` does to an input element
You can incorporate event binding to any event listener onClick,onMouseenter, OnInput(https://www.w3schools.com/jsref/dom_obj_event.asp)

The specific event listener we want to use is `input`; every time the user types, input will trigger an event. Be sure to use the \$event to get its value. log to the console the value. You will see that event.target.value will get you whatever the user type.

```html
<input (input)="" />
```

---

## Exercise 6: Use ngIf and a instance property to show the element; if the instance property is false, it should not show the element

1. Create a new angular project called `basic-ngif-exercise`
2. In app.component.ts, create a instance property called isShow of type boolean and set it to true.
3. In app.component.html, create a paragraph element with the content of "Show me when isShow is true! Otherwise, don't show me!"
4. Use ngIf to show the paragraph element for when isShow is true conditionally, otherwise don't show it if it's false.
5. run 'ng serve', isShow is set to true, so you should see your paragraph element there.
6. Set isShow to false, and it shouldn't show on the webpage.

---

## Exercise 7: Use ngIf and else to dynamically add certain elements to the webpage

1. Create a new angular project called `basic-ngif-else-exercise`
2. In app.component.ts, create a instance property called isShowContent of type boolean and set it to true
3. In app.component.html, create a paragraph element with content "If isShowContent is true, show me!" and
   another paragraph with content "Use else to show me!"
4. use ngIf and else to show either or depend on the value of isShowContent.
5. Create a button element with content "Click me to reverse the value of isShowContent!" Use event binding to reverse the value of isShowContent.

---

## Exercise 8: Use ngStyle to change the background color of an element

1. Create a new angular project called `basic-ngStyle-exercise`
2. In app.component.ts, create a instance property called myColor of type string and set it to "green"
3. In app.component.html, create a paragraph element with the content "This should change when we implement ngStyle!"
4. Implement ngStyle and use myColor to change the background color of the paragraph element.
5. run 'ng serve' The paragraph element should have the background color of green.

---

## Exercise 9: Use ngStyle and event binding to dynamically change an element's content and style.

1. Create a new angular project called `dynamically-change-content-ngstyle-exercise`
2. In the app.component.ts, create a instance property called changeColor, make it of type string and set it to 'green'
3. In app.component.html, create an input element. Whenever you type into this input field, it should dynamically change the value of changeColor to whatever you type. You can use either ngModel or event binding to do this.
4. Create a paragraph element. Use string interpolation to output the value of changeColor between the tags of the paragraph element.
5. Use ngStyle and changeColor to change the color of the content that the paragraph element holds.
6. run `ng serve`. So, for example, if you type in yellow, the color of the text should change to yellow.

---

## Exercise 10: Use ngFor to output each element of an Array

1. Create a new angular project called basic-ngFor-exercise
2. In app.component.ts, create a instance property called foods, make it type array of strings, and set its array to pre-set strings.
3. In app.component.html, use ngFor to output the array list of foods
4. run 'ng serve' you should be able to see each element of the array on the web page
