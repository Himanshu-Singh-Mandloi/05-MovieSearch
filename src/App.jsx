import { apiKey } from "./Constants"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

// pages import
import Home from './pages/Home';
import Error from './pages/Error';
import SingleMovieDetails from './pages/SingleMovieDetails'
import Root from './pages/Root';

// loader import
import {loader as MovieLoader} from './pages/Home';
import {loader as SingleMovieLoader} from './pages/SingleMovieDetails'


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Root />} errorElement={<Error />}>
    <Route index element={<Home />} loader={MovieLoader}/>
    <Route path="/detail/:imdbId" element={<SingleMovieDetails />} loader={SingleMovieLoader}/>
</Route>)) 

function App() {

  return <RouterProvider router={router} />
    
  
}

export default App