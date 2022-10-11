import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import TopicDetails from "./components/TopicDetails/TopicDetails";
import Main from "./layouts/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/quiz/:topicId",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.topicId}`
            );
          },
          element: <TopicDetails></TopicDetails>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
