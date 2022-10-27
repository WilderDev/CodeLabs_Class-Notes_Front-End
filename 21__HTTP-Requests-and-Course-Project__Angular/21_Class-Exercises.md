# HTTP Request Exercises

**Use Git or GitHub Desktop to push each exercise to GitHub**

_NOTE_: Make projects all non-strict mode

_NOTE_: You can use one project for all exercises

---

---

## Getting Started with HTTP requests exercises

- Create a Firebase project called movies-project
  - Refer to this markdown file on how to set up a firebase project
    reference: [Firebase Setup](https://github.com/cruzgerman216/CodeLabs-Angular-Exercises/blob/main/assets/resources/firebase-setup.md)

---

### Exercise 1.1: Send a Post request to firebase to add movie data

- Generate a new angular application called `basic-angular-http-request-exercises`
- Create an h1 element with content "My Movies"
- Create an h3 element with content "Add Movie"
- Create a form with inputs and labels corresponding to title and genre. Include a button with content 'create Movie'
  - Configure the form in the template-driven approach or the reactive approach
    - Note: Make sure you add the proper modules to your app module.
      - `FormsModule` (Template-driven)
      - `ReactiveFormsModule` (Reactive)
- Create a post request that allows you to add an object with properties title and genre using the firebase project you created from the start
  - Ensure you Inject the HttpClient to your component AND import the HttpClientModule to your app module. Include HttpClientModule to your imports array.

```typescript
import { HttpClientModule } from "@angular/common/http";
```

- When making a request, make sure you include "movies.json" at the end of the URL
  Example: `https://my-test580f1-default-rtdb.firebaseio.com/movies.json`
- Be sure to use the subscribe method as you are dealing with an observable(in the subscribe method, you will get back a response, log the response to the console)
- When sending a post request, you should see the values you input in the form and saved to the database. Go to firebase to confirm this.

- OPTIONAL: Install the [JSONView extension](https://chrome.google.com/webstore/search/json%20view) in google chrome to organize the view of API data in your browser.
  - If you, for example, enter "https://my-URL-ENDPOINT-yours-will-look-different.com/movies.json" in the URL search bar, you should see your movies data on the webpage in an organized way.

---

### Exercise 1.2: Send a get request to firebase to retrieve movie data

- Create an h3 element with content "List of Movies"
- Create a button with content "retrieve movies" and incorporate event binding to execute a method called onRecieveMovies()
- In the onRecieveMovies method, make a get request to access the movie data from firebase.
  - Use the pipe method and the map operator to change the response into an array. Refer to the reference as an example to access each value from the response. Of course, console log the data as well to see what exactly is the response.

Reference: Example

```typescript
for (const elem in data) {
  myArray.push(data[elem]);
}
```

- In the subscribe method, store the data that is being passed in, in a property called myMovies which is set to any empty array initially;
- Use ngFor to output the array of myMovies. You should see the data from firebase on your webpage after clicking the button.

---

### Exercise 1.3: Add a loading icon when sending a get request to firebase

- When fetching the movie data using a get request, use a loading icon to indicate that you are loading the movie data (refer to the reference for free icons)
- When you are finished getting the movie data, the icon should not be showing.

reference: https://loading.io/css/ (NOTE: you will have to change the colors in the CSS. By default, the colors applied to the CSS for these icons are white)

---

### Exercise 1.4: Send a delete request to delete all movie data

- Create a button with the content "clear movies". When clicking the button, use event binding to execute a method called "onClearMovies"
- In the onClearMovies method, send a delete request to delete all movie data.
- After deleting all movie data, make it so that you clear the myMovies array.

---

### Exercise 1.5: Output an error message when retrieving an error response

- Create a button with the content "Retrieve data from fake URL endpoint". When clicking the button, use event binding to execute " getFakeData " method.
- Send a get request to this URL endpoint `https://Im-a-fake-URL.com`.
- You will get an error. When checking for an error response, there should be a message property that exists. Store that value in a class property called error. When creating the class property error, set it to null initially.
- Use string interpolation to output the value of error. For example, error should not be showing when null.
- When clicking this button, you should get `Http failure response for https://Im-a-fake-URL.com: 0 Unknown Error` rendered onto the page.

---

### Exercise 1.6: Separate the logic of HTTP requests into a service

- Create a service called data-storage.service.ts.
- Instead of including the logic of making HTTP requests in an app component, abstract the logic into data-storage.service.ts and inject the service into your component to make HTTP requests. Of course, you would have to return an observable as Max did.
