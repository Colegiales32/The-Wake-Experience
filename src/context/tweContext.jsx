import { createContext, useState,useEffect } from "react";

const TweContext = createContext();


export const TweProvider = ({children}) => {
    const [clicked,setClicked] = useState(false)

    useEffect(() => {
        if (clicked) {
            console.log("es true")
          document.body.style.overflowY = 'hidden';
          document.body.style.overflowX = '';
          document.documentElement.style.overflowX = '';
        } else {
            console.log('es false')
          document.body.style.overflowY = 'auto';
          document.body.style.overflowX = 'hidden';
          document.documentElement.style.overflowX = 'hidden';
      
        }
      }, [clicked]);


    return(
        <TweContext.Provider value={{clicked,setClicked}}>
            {children}
        </TweContext.Provider>
    ) 
}

export default TweContext