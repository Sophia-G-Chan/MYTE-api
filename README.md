# <img src="public/logos/journeytask-white-logo-cropped.svg" width=25px height=25px > MYTE API - Sophia Chan Capstone Project
## Table of Contents
1. [Overview](#overview)
2. [Endpoints](#endpoints)
3. [Download & Run](#download-&-run)

## Overview
MYTE is a task management app that combines time planning with your to-do list. Unlike regular to-do lists, JourneyTask allows you to assign time estimates for tasks and seamlessly adds them to your calendar. The app emphasizes the importance of the process over the outcome, highlighting that every step is part of the journey.


## Endpoints
List endpoints that your server will implement, including HTTP methods, parameters, and example responses.
#### Get all tasks

```http
  GET /tasks
```

| Parameter | Type | Description    |
| :--------  | :-------- |  :------------------------ |
| `/tasks` | `return` |  This endpoint returns an array of objects |

#### Adds a new task

```http
  POST /tasks
```

| Parameter | Type | Description    |
| :--------  | :-------- |  :------------------------ |
| `tasks ` | `object` | This end point adds a new task. |

#### Edits a task

```http
  PUT /tasks/:id
```

| Parameter | Type | Description    |
| :--------  | :-------- |  :------------------------ |
| `taskId` | `number` |  **Required** Id of a task is needed to edit a task |

#### Removes a task from the task list

```http
  DELETE /tasks/:taskId
```

| Parameter | Type | Description    |
| :--------  | :-------- |  :------------------------ |
| `taskId` | `number` |  **Required** Id of a task is needed to delete a task |

#### Get all lists

```http
  GET /lists
```

| Parameter | Type | Description    |
| :--------  | :-------- |  :------------------------ |
| `/lists` | `return` |  This endpoint returns an array of objects |

#### Adds a new list

```http
  POST /lists
```

| Parameter | Type | Description    |
| :--------  | :-------- |  :------------------------ |
| `lists ` | `object` | This end point adds a new task. |

#### Edits a list

```http
  PUT /lists/:listId
```

| Parameter | Type | Description    |
| :--------  | :-------- |  :------------------------ |
| `listId` | `number` |  **Required** Id of a task is needed to edit a task |

#### Removes a task from the task list

```http
  DELETE /lists/:listId
```

| Parameter | Type | Description    |
| :--------  | :-------- |  :------------------------ |
| `id` | `number` |  **Required** Id of a task is needed to delete a task |

## Download & Run
Download the front end see front end README for instructions

1. Download the back end file
2. Install Node Modules by running:
```http
  npm i
```
3. Start mysql
```http
  mysql -u <YOUR_USER_NAME> -p
```
please change your username to what you have locally, for example it could be root.
```http
  mysql -u root -p
```

4. Create your own local database by running
```http
  CREATE DATABASE journeytask;
```

5. Check to see if the database was created by running
```http
  SHOW DATABASES;
```

6. Select the database you created by running
```http
  USE journeytask;
```

7. Leave mysql by typing
```http
  exitl
```

8. Now create tables in your database by running
```http
  npm run db:migrate
```

9. Now add data to your tables by running
```http
  npm run db:seed
```

10. Now your server is read to start but running:
```http
  npm run start
```
With your front end and back end database set up you will see tasks loaded on the front end and if you add, edit, or delete these will update in your backend.
