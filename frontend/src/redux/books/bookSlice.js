import axios from "axios";
import createBookWithID from "../../utils/createBookWithID";
import { addBook } from "./actionCreators";

export const thunkFunction = async (dispatch, getState) => {
  try {
    const res = await axios.get("http://localhost:4000/random-book");
    if (res.data && res.data.title && res.data.author)
      dispatch(addBook(createBookWithID(res.data, "API")));
  } catch (error) {
    console.log("Error fetching random book", error);
  }
};
