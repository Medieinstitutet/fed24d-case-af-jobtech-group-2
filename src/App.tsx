import { RouterProvider } from 'react-router';
import { router } from './Router';
import { AdProvider } from './contexts/AdProvider';

function App() {
  return (
    <AdProvider>
      <RouterProvider router={router}></RouterProvider>
    </AdProvider>
  );
}

export default App;
