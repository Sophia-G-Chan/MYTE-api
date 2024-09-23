# <img src="public/logos/journeytask-white-logo-cropped.svg" width=25px height=25px > JourneyTask API - Sophia Chan Capstone Project
## Overview
MYTE is a task management app that combines time planning with your to-do list. Unlike regular to-do lists, JourneyTask allows you to assign time estimates for tasks and seamlessly adds them to your calendar. The app emphasizes the importance of the process over the outcome, highlighting that every step is part of the journey.


### Endpoints
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
