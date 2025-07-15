import React from "react";
import ClaimForm from "./components/ClaimForm";
import Banner from "./components/Banner";
import Topic from "./components/Topic";

function App() {
  return (
    <div className="bg-[url('./assets/Rectangle.png')] bg-cover bg-center bg-no-repeat  min-h-screen lg:p-20">
      <div className="flex flex-col md:flex-row md:align-bottom  items-stretch justify-center gap-5 lg:gap-20 p-4 lg:p-8 ">
        <div className="flex flex-col-reverse md:flex-col items-center justify-between gap-5 md:gap-2">
          <Banner />
          <Topic />
        </div>
        <ClaimForm />
      </div>
    </div>
  );
}

export default App;
