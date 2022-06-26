

import React from 'react'
import { useParams } from 'react-router-dom'
import One from './One';

 const Params = () => {
 
 const params = useParams();
 console.log("params");
 
 const dynamicParams = () =>{
    const userId = params.userId;

    if(userId === "1"){
        <One/>
    }
    else if (list === "Kpop"){
        <Kpop/>
    }
    else if (list === "Technology"){
        <Technology/>
    }
    else if (list === "Movie"){
        <Movie/>
    }
    else if (list === "Food"){
        <Food/>
    }
    else{
        <h1>Page Not Found</h1>
    }


}

 
    return (
    <>
    {dynamicParams()}
    </>
  )
}


export default Params