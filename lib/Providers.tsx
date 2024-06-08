"use client";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Toaster } from "react-hot-toast";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <Toaster position="top-right" reverseOrder={false} />
      {children}
    </Provider>
  );
};

export default Providers;
