const initState = {
  tourisms: [
    { id: "1", name: "Rinjani", imageUrl: "Gunung Rinjani" },
    { id: "2", name: "Mandala", imageUrl: "Kolam Rinjani" },
    { id: "3", name: "Kolam", imageUrl: "Mandala Rinjani" },
  ],
  tourismError: null,
  data:null,

};

const tourReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_TOURISM":
      console.log("create Tourism", action.tourism);
      return state;
    case "CREATE_TOURISM_ERROR":
      console.log("create Tourism error", action.err);
      return state;
    case "UPDATE_TOURISM_SUCCESS":
      console.log("UPDATE Tourism success", action.data);
      return state;
    case "UPDATE_TOURISM_ERROR":
      console.log("UPDATE Tourism error");
      return state;

    default:
      return state;
  }
};

export default tourReducer;
