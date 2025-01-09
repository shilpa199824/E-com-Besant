import './App.css';
import React from 'react';
import Cart2 from './Components/Cart2';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Samsung from './Components/Phones1/Samsung';
import Iphone from './Components/Phones1/Iphone';
import Oneplus from './Components/Phones1/Oneplus';
import Vivo from './Components/Phones1/Vivo';
import Redmi from './Components/Phones1/Redmi';
import Oppo from './Components/Phones1/Oppo';
import Google from './Components/Phones1/Google';
import Realme from './Components/Phones1/Realme';


function App() {
    return (
        <div>
      <Oneplus/>
      <Vivo/>
      <Redmi/>
      <Oppo/>
      <Google/>
      <Realme/>



        </div>
    )
}

export default App;