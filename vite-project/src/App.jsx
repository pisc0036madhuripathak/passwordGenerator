import { useState } from "react";
import "./App.css";
import Card from "./components/Cards";

function App() {
  let myObj = {
    username: "madhuri pathak",
    age: 23,
    mobileNo: 8957940532,
  };
  let myArray = [1, 2, 3, 4, 5];
  return (
    <>
      <h1 className="bg-green-400 text-black mb-4">Tailwind test</h1>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p dark:bg-slate-800 mb-4">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://images.pexels.com/photos/21370919/pexels-photo-21370919/free-photo-of-flowers-around-woman-standing-with-books.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div className="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
      <Card username="madhuriLab" someObje={myObj} />
    </>
  );
}

export default App;
