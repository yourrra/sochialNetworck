let state = {
  dialogsPage: {
    DialogsData: [
      { id: 1, name: "Yuri" },
      { id: 2, name: "Nick" },
      { id: 3, name: "Bob" },
      { id: 4, name: "Max" },
      { id: 5, name: "Igor" },
    ],
    MessagesData: [
      { id: 1, message: "Hello world!" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "What's up!" },
    ],
  },
  profilePage: {
    PostsData: [
      { id: 1, message: "How are you?", likeCounter: 12 },
      { id: 2, message: "I like bear!", likeCounter: 28 },
      { id: 3, message: "I'm batman", likeCounter: 5 },
      { id: 4, message: "I'm batman", likeCounter: 5 },
    ],
  },
};

export default state;
