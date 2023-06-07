export const loadState = () => {
  try {
    const serializeState = localStorage.getItem("todoList");
    if (serializeState === null) {
      return [];
    }
    return JSON.parse(serializeState);
  } catch (err) {
    return [];
  }
};

export const saveState = (state) => {
  try {
    const serializeState = JSON.stringify(state);
    localStorage.setItem("todoList", serializeState);
  } catch (err) {
    console.log(err);
  }
};
