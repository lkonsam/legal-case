import React from "react";
import ClaimForm from "./components/ClaimForm";
import Banner from "./components/Banner";
import Topic from "./components/Topic";

function App() {
  return (
    <div className="bg-[url('./assets/Rectangle.png')] bg-cover bg-center bg-no-repeat  min-h-screen p-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-4 md:p-8 ">
        <div className="flex flex-col-reverse md:flex-col  items-center justify-between gap-6">
          <Banner />
          <Topic />
        </div>
        <ClaimForm />
      </div>
    </div>
  );
}

export default App;
