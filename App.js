// import Admin from "./Pages/Admin";
// import Home from "./Pages/Home";
// import Notfound from './Pages/Notfound';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Bot from './Components/Bot';
// import Hero from './Components/Hero';
// import About from './Components/About';
// import Skills from './Components/Skills';

// import { useEffect , useState } from 'react';
// import  axios  from 'axios';



// function App() {
//   return (
//    <div className='App'>
//      <BrowserRouter>
//      <Routes>

//     <Route exact path="/" element={<Home />} />
//     <Route exact path="/admindashboard" element={<Admin />} />
//     <Route exact path="*" element={<Notfound />} />

//      </Routes>
//      </BrowserRouter>
//    </div>
//   );
// }

// export default App;


import React from 'react';
import Code from './Components/Code';

const App = () => {
  return (
    <div>
      <Code />
    </div>
  );
};

export default App;








// import { useState, } from "react";
// import  Test  from "./Test";
// import {MyContext} from "./MyContext";

// function App() {
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <MyContext.Provider value={{ name, setName }}>
//         <Test />
//       </MyContext.Provider>
//     </div>
//   );
// }

// export default App;

