"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "@/store/store";

interface IReduxProviderProps {
  children: React.ReactNode;
}

const ReduxProvider: React.FC<IReduxProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <body className="min-h-full flex flex-col">{children}</body>
    </Provider>
  );
};

export default ReduxProvider;
