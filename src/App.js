import React from "react";
import Header from "./component/header";
import Headline from "./component/headline";
import "./app.scss";

const tempArr = [
  {
    fName: "Alex",
    lName: "Uryadov",
    email: "alex@gmail.com",
    age: 34,
    onlineStatus: true,
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          desc="Click the button to render the posts!"
          tempArr={tempArr}
        />
      </section>
    </div>
  );
}

export default App;
