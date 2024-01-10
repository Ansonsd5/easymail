import LandingPage from './container/LandingPage'
import './App.css';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import TemplateView from './container/TemplateViewPage';

function App() {

  const appRouter = createBrowserRouter([{
    path : "/",
    element : <LandingPage/>,

  },
  {path : "/templates",
  element : <TemplateView />
}
])
  return (
    <div className="App">
     
     <RouterProvider  router={appRouter}/>
      
      
     
    </div>
  );
}

export default App;
