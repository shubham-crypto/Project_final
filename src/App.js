import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <Router>
      <Routes />
      <ToastContainer 
        position="top-center"
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={true}
        closeOnClick 
        pauseOnHover 
        draggable 
        theme="colored"
      />
    </Router>
  );
}

export default App;