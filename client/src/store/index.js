import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

export function fetchEvent(payload) {
  return async dispatch => {
    try {
      const response = await fetch("http://localhost:5000/event");
      const data = await response.json();
      await console.log(response, "store fetch");
      dispatch(setEvent(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function addEvent(payload) {
  return async dispatch => {
    try {
      const response = await fetch("http://localhost:5000/event", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(payload), // body data type must match "Content-Type" header)
      });
      // const data = response.json();
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
}

export function setEvent(payload) {
  return { type: "EVENT/SETEVENT", payload };
}

const initialState = {
  events: [],
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "EVENT/SETEVENT":
      return { ...state, events: payload };
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
