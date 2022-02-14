import "./App.css";

import React from "react";
import Layout from "./components/layoutScreens/Layout";
import { ErrorBoundary } from "react-error-boundary";
import FallbackError from "./FallbackError";

// import { FallbasckError } from "./FallbackError";
function App() {
  const errorHandler = (error, errInfo) => {
    console.log("APP ERROR BOUND::: ", error, errInfo)
  }

  return (
    <>
      <ErrorBoundary FallbackComponent={FallbackError} onError={errorHandler}>
        <Layout />
      </ErrorBoundary>
    </>
  );
}


export default App;
