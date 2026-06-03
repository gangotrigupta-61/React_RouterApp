import { useEffect, useState} from "react";
import { useLoaderData } from "react-router-dom";

export default function Github(){

    //  let[data,setdata]=useState([])

    //     useEffect(  ()=>{
    //         fetch("https://api.github.com/users/gangotrigupta-61")
    //         .then(response=> response.json())
    //         .then(data=>{
    //             console.log(data);
    //             setdata(data);
    //         })

    //     },[])


     let data= useLoaderData()


    return(
       
        <>
        <p className="text-5xl">GithubFollowers:{data.followers}</p>
        <img src={data.avatar_url}></img> 
        </>
    )
};


export const githubinfoloader = async()=>{
    const response = await fetch("https://api.github.com/users/gangotrigupta-61")
    return response.json()
}