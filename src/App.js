import React, {useState, useEffect} from 'react';
import Cotizacion from './components/Cotizacion'
import TipoDeDolar from './components/TipoDeDolar';
import Resultado from './components/Resultado';

function App() {
  

  const [valorDolarOficial, setValorDolarOficial] = useState()
  const [valorDolarBlue, setValorDolarBlue] = useState()

  
  
    const consultarApi = async (e) => {


      
        
        const api = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales');
        const result = await api.json();
        let resultado1 = result[0].casa.compra;
        let resultado2 = result[1].casa.compra;
        setValorDolarOficial(resultado1);
        setValorDolarBlue(resultado2);
        return;
        
        

     }
     
     consultarApi();





  
  return (
    
    
    
    <>

    <Cotizacion 

    valorOficial = {valorDolarOficial}
    valorBlue = {valorDolarBlue}



    />
    
    <TipoDeDolar

    dolarOficialApi = {valorDolarOficial}
    dolarBlueApi= {valorDolarBlue}


    
    
    
    
    />
    


    


    </>


  );
}

export default App;
