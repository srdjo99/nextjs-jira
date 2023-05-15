# Lite clone of Jira - NextJS 

## About
Jira, as you all probaby know, is a project management tool that helps teams track and organize tasks, issues, and workflows.

### [Jira - link](https://nextjs-jira.vercel.app/)

There are already added tasks which you can drag and drop to different sections. You can also create new tasks and add them too.

##### This is made without external drag&drop library --> using built-in HTML attributes

I've also used:
  - MongoDb to store data
  - Context API for state management
  - MUI 
  - Notistack for displaying notifications
  - Axios
  - date-fns




 ## To run it locally, database is necessary

```
docker-compose up -d
```
- MongoDB Local URL:
```
mongodb://localhost:27017/entriesdb
``` 
### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

