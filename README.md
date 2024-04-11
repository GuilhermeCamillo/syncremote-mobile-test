# Welcome to the Sync Test!

You are going to create a very simple application to display a list of users.

Several objectives will be analyzed:

- Understanding project requirements
- Use of libraries
- Code cleanliness and understanding of lifecycle

**You have 1 hour to complete the project, good luck!**

---

## Step 1: Initial Setup

Once the project is cloned, you can run the command below to launch the project and start the exercises.

- Install dependencies:
  ```bash
  yarn
  ```

- Start the project in iOS:
  ```bash
  yarn ios
  ```
  or


- Start the project in Android:
  ```bash
  yarn android
  ```

## Step 2: Creating Pages

Create two pages named **"Home"** and **"Details"**.

You can use a custom router, your own router, or manage the navigation as you like!

## Step 3: Installing React Query

Install the **react-query** library in the project to perform an HTTP request.

Here are the necessary details to retrieve the information you will need in the next steps:

- **Method**: GET
- **URL**: `https://dev.api.syncremote.co/api/v1/admin/users`

## Step 4: Displaying Users

Once you've retrieved the data (in array form), you will need to use it by creating a component named **UsersList** to display this list on the "Home" page.

In this section, the minimum information display is:

- Name

We're calling on your creativity for the data display!

## Step 5: User Details

When we click on one of the lines in your list, we should be redirected to the "Details" page, displaying more information.

In this section, the minimum information display is:

- Name
- Interest

## Bonus Step

- Optimize the display of the list and your components.
- Set up a client cache for the HTTP request with react-query.
- Logical split of components

# Results

To send the results, please push on a public repository and send the link to the following email address: benjamin.boulin@syncremote.co
