export const tasks = [
  {
    id: 1,
    description: `Create a task list that contain 3 tasks per a page. 
    Each task should contain a description, images, author's username and email. 
    Everybody can see all tasks and create new task. 
    Only admin can edit task.`,
    author: {
      id: 1,
      username: "Jerry Mouse",
      email: "jerry.mouse@example.com"
    }
  },
  {
    id: 2,
    description: "Catch the mouse",
    author: {
      id: 2,
      username: "Tom Cat",
      email: "tom.cat@example.com"
    },
    images: ["jerry_1.jpg", "jerry_2.png", "jerry_3.gif"]
  },
  {
    id: 3,
    description: `Don't let the mouse steal cheese`,
    author: {
      id: 2,
      username: "Tom Cat",
      email: "tom.cat@example.com"
    },
    images: ["jerry_1.jpg", "cheese_1.jpg"]
  }
  // {
  //   id: 4,
  //   description: `Don't let the cat sleeps well`,
  //   author: 1,
  //   images: ["tom_1.jpg"]
  // }
];

export const users = [
  {
    id: 1,
    username: "Jerry Mouse",
    email: "jerry.mouse@example.com"
  },
  {
    id: 2,
    username: "Tom Cat",
    email: "tom.cat@example.com"
  }
];

export default {
  tasks,
  users,
  editable: true
};
