import { configureStore } from "@reduxjs/toolkit";
import ShowBooksReducer from "./Services/ShowBooksSlice";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    showBooksReducer: ShowBooksReducer,
  },
});

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
export default StoreProvider;
