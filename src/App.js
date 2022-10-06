import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import ColorSpace from './pages/ColorSpace';
import CustomError from './pages/CustomError';
import Difficulty from './pages/Difficulty';
import Game from './pages/Game';

function App() {
  const router = createMemoryRouter([
    {
      path: "/",
      errorElement: <CustomError/>,
      children: [
        {
          path: "/",
          element: <ColorSpace/>
        },
        {
          path: "difficulty",
          element: <Difficulty/>
        },
        {
          path: "game",
          element: <Game/>
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;