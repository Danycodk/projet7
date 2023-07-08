import Header from "./components/Header";
import ErrorPage from "./pages/errorPage/errorPage" ;
// import "./assets/styles/index.scss"
import { Routes , Route } from 'react-router-dom';
import Footer from "./components/Footer";


import {lazy} from "react";
import HomePages from "./pages/HomePages/HomePages.js";

const Apropos= lazy(()=> import("./pages/Apropos/Apropos"));
const Chambre  = lazy(()=>import("./pages/chambre/chambre"))

function App() {
  return (
    <>
    <Header />

<Routes>
  <Route  path= {'/'} element= {<HomePages />} />
  <Route path= {"/Apropos"} element={<Apropos />} />
  <Route path={"/chambre/:id"} element={<Chambre />} errorElement={<ErrorPage />} />
  <Route path= {"*"} element ={<ErrorPage />} />
</Routes>
  
  <Footer />
    </>
  );
}

export default App ;

