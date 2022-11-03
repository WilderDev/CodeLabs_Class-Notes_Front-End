# Class 24 - Deploying an Angular App

[Class 24 Course Content](https://pro.academind.com/courses/765847/lectures/13906653)

[Firebase Deployment Documentation](https://firebase.google.com/docs/hosting)

## Lesson Outline

Today we will learn:

1. **How to deploy an Angular Application using Firebase**
2. **How to setup a deploy when you commit to Github**

---

---

## Deployment - Project Steps

### STEP 1: Build Project Locally

_package.json file_:

- Add "type": "module" to the top of your package.json file

```json
{
  "name": "book-app",
  "version": "0.0.0",
  "type": "module"
  // ...
}
```

_Terminal_:

- Build your project locally

- View the output folder and ensure you don't have any critical errors

```zsh
npm run build
```

---

### STEP 2: Firebase CLI Configuration

_terminal_:

- Install the firebase-tools package globally

```zsh
# Mac
sudo npm i -g firebase-tools@8.12

# Window
npm i -g firebase-tools@8.12
```

- Login to Firebase via the CLI

```zsh
firebase login
```

- Initialize Firebase Hosting

```zsh
firebase init hosting
```

- Follow the prompts:

```
Use an existing project

Select your project

public directory -> dist/your-project-name

Configure as single-page app -> Yes

Set up automatic builds and deployes with GitHub -> Yes

Enter your GitHubUsername followed by your repository name -> WilderDev/my-project-on-github

Set up the workflow to run a build script -> Yes -> Enter -> Yes -> Enter

```

- Deploy your application

```zsh
firebase deploy
```

- In the browser, head on over to your [Deployed Applications](https://cape-books-evening.web.app/library).

---

---
