import React from "react";
import { useParams } from "react-router-dom";



export default function User(){
    let {userid}=useParams()
    return(
        <>
        
        
      <div className="text-4xl">

        User:{userid}
        
      </div>
        
        
        </>
    )
}