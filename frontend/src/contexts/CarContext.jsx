import React, { createContext,useEffect,useState } from "react"

// Criação do Contexto
const CarContext = createContext()





// Criação do Provedor

export const CarProvider = ({ children }) => {
    // Valores a serem compartilhados pelo contexto
   const [carCounter,setCarCounter] = useState(null)

    
  return (
    <CarContext.Provider value={{ carCounter, setCarCounter }}>
      {children} {/* Passa os valores para os componentes filhos */}
    </CarContext.Provider>
  );
};

export default CarContext

