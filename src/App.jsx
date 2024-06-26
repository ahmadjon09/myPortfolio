import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { RootLayout } from "./Layout/RootLayout"
import { Home } from "./Pages/Home"
import { About } from "./Pages/About"
import { MySkills } from "./Pages/MySkills"
import { Contact } from "./Pages/Contact"
import { Project } from "./Pages/Project"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "skills",
          element: <MySkills />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "project",
          element: <Project />
        },
      ]
    }
  ])
  return <RouterProvider router={router}></RouterProvider>
}

export default App