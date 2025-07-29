# <img src="https://pages.git.generalassemb.ly/modular-curriculum-all-courses/universal-resources-internal/static/v2/assets/hero-logo.png" alt="General Assembly Logo" width="30"> Intro to React Lab

Welcome to your first React assignment! 

In this task, you’ll build a simple app using **only the concepts we’ve learned so far**. That means **one component**, written as a **function**, with **JSX**, **inline JavaScript**, and some **conditional rendering** — all inside a project scaffolded with **Vite**.

---

## What You’ve Learned So Far

Here’s what you **can** use in this assignment:
- Vite setup
- Functional components (App)
- JSX syntax (HTML-like code in return)
- Inline JavaScript inside JSX (`{}` brackets)
- `map()` to loop through arrays and output elements
- Conditional rendering (`? :`, `&&`)
- Conditional logic inside loops

**No props, no state, no useEffect, no CSS modules, no extra components just yet!**

---

### Assignment: Build a **"Guest List" App**

You will create an app that displays a list of guests invited to a party. Each guest has:
- A **name**
- An **RSVP status** (true or false)

You’ll display a list of guests and:
- Show their **name**
- If they’ve RSVPed (`rsvp === true`), display "✅ Attending"
- If not, display "❌ Not attending"

### Bonus challenge:
- If the list is empty, display a message like: `"No guests yet."`

---

## Example Data

In your `App` component, start with an array like this:

```js
const guests = [
  { name: "Alice", rsvp: true },
  { name: "Bob", rsvp: false },
  { name: "Charlie", rsvp: true }
];
```

---

## Example output

On the screen, you should see something like:

```
Alice - ✅ Attending  
Bob - ❌ Not attending  
Charlie - ✅ Attending
```

---

## Remember

- **Write your code inside the `App` component**.
- Keep **all your logic inside JSX or the function body**.
- Make sure the server is running to see your results, and view it on the specified port. You cannot open the index.html file directly! (usually, it's on http://localhost:5173)

You'll be marked on:
- Clear use of JSX and inline JavaScript
- Using `map()` to loop through the guest list
- Correct conditional rendering
- Clean, readable code and formatting

---

## Setup Guide

I recommend trying to remember these parts and taking good notes on them, as you will need to know how to do this for yourself in the future! For now though, here are the steps to follow to get started:

1. Create a new React project with Vite (you’ve done this before!):
   ```bash
   npm create vite@latest guest-list --template react
   cd guest-list
   npm install
   npm run dev
   ```
2. Open the project in your editor.
3. Replace the content in `App.jsx` with your code.
4. Run the dev server and test your guest list!

---

## Optional Extras

Want to go a little further? Try:
- Showing a count of how many are attending.
- Showing only guests who RSVPed (by filtering the list before mapping).

*These are completely optional and just for fun!*