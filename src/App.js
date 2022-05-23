import "./App.css";
import Home from "./components/Home";
// import Test from "./components/Test";
import Hero from "./components/Hero";
import Lessons from "./components/Lessons";
import Lesson from "./components/Lesson";
import Quiz from "./components/Quiz";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
// import GridLayoutPractice from "./components/GridLayoutPractice";
function App() {
  const [lessons, setLessons] = useState([]);
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} lessons={lessons} />
        <Route path="/#test" element={<Home />} />

        <Route path="/hero" element={<Hero />} />
        <Route
          path="/lessons"
          element={<Lessons lessons={lessons} setLessons={setLessons} />}
        />
        <Route path="/lesson/:id/quiz" element={<Quiz />} />
        <Route
          path="/lesson/:id"
          element={<Lesson lessons={lessons} setLessons={setLessons} />}
        />

        <Route path="/footer" element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;
