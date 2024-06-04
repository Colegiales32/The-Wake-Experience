import { createContext, useState,useEffect } from "react";
import Home from "../pages/Home";

const TweContext = createContext();


export const TweProvider = ({children}) => {
    const [clicked,setClicked] = useState(false)
    const [expandidoId, setExpandidoId] = useState();
    const [abreExpandido, setAbreExpandido] = useState()

    useEffect(() => {
     console.log('abre expandido fuera es  ' + abreExpandido)
    }, [])
    

    useEffect(() => {
        if (clicked) {
          document.body.style.overflowY = 'hidden';
          document.body.style.overflowX = '';
          document.documentElement.style.overflowX = '';
        } else {
          document.body.style.overflowY = 'auto';
          document.body.style.overflowX = 'hidden';
          document.documentElement.style.overflowX = 'hidden';
      
        }
      }, [clicked]);



     

    return(
        <TweContext.Provider value={{clicked,setClicked,expandidoId, setExpandidoId,abreExpandido,setAbreExpandido}}>
            {children}
        </TweContext.Provider>
    ) 
}

export default TweContext