{
  // Progress: 4 out of 10 (see valueTypes and values)
  "progress": [4],
  // ...
  "tasks": [
    {
      "id": 1,
      // Type: (12) Defense
      "type": 12,
      // Value:(10) Planets total
      "values": [10, 0, 0, 0],
      // Type: (3) Target count
      "valueTypes": [3, 1, 11, 12],
      "assignmentId": 1,
      "createdAt": "2024-04-24T07:45:36.992Z",
      "updatedAt": "2024-04-24T07:45:36.992Z"
    }
  ]
}

## What is the task type?

The task type is a broader category for the mission type the major order is based around, so far we have encountered following types:

| Value | Description |
|-------|-------------|
| 3     | Eradication |
| 11    | Liberation  |
| 12    | Defense     |
| 13    | Control     |

## What are known value types?

So far we have encountered a few different value types and we will update this documentation as we encounter new ones.

| Value | Description |
|-------|-------------|
| 1     | Target faction index (1. Human, 2. Terminid, 3. Automaton, 4. Illuminate) |
| 3     | Target count (x >= 0) |
| 11    | Liberation needed (1 or 0) |
| 12    | Target planet index (0 for multiple planets) |


## What unit is time in?

seconds