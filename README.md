# Hours Project

Hi! This is my Take Home Project in place of a technical interview for my Fiveable Hours Internship Application.

## Backend

The backend of this project uses Node.js and establishes a connection with a MongoDB database that stores session data (such as tasks, tasks completed, participants, id, name, and duration).

## Frontend

This frontend of this web app is made primarily in React.js and uses three main components as the three pages (home, join, and session pages).

### Home Page

The home page greets the user and displays a button that will allow the user to navigate to the join page. When the user clicks the button, a session is automatically created and a unique alphanumeric ID will be generated.

### Join Page

On the join page, the user can input their name in the textbox and click "Join Session" that will navigate them to the session. While navigating to the session page, the function sends over important data, like session's unique alphanumeric ID and the person's name.

### Session Page

The session page contains three main aspects: a task list, participants list, and timer. The task list is a checklist that the users can check off as they complete them. The participants list contains all the users currently in the session. Lastly, the timer keeps track of how long the session has been running and updates the session's duration in the database accordingly. When the user is satisfied with their progress, they can click the "Exit Session" button which will navigate them back to the home page and remove them from the participants list in the session.