/* eslint-disable @next/next/google-font-display */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
// @ts-nocheck
import getConfig from "next/config"
import Link from "next/link"
import { useState } from "react"
import Navbar from "./Navbar"
export default function Workout({workouts}:any){
    const [formInput,setFormInput] = useState([])
    const [searchTerm,setSearchTerm]= useState("")
    const [oldworkouts, setWorkouts] = useState(workouts)
    
    const handleInput =(event:any)=>{
        let {name,value} = event.target
        setFormInput({...formInput,[name]:value})
        setSearchTerm(event.target.value)

    }
    const find= async(name) =>{
        let oneworkout=await fetch(`http://localhost:2000/api/workouts/all/${name}`)
        setWorkouts(oneworkout)
        console.log(oneworkout)
    }
    const search = async (event)=>{
        event.preventDefault()
        let newworkouts=await fetch(`http://localhost:2000/api/workouts/all/${formInput.searchTerm}`).then(response=>response.json())
        setWorkouts(newworkouts)
        console.log(newworkouts)
        
    }
   
    
    return(
       
            
        
        <div className="workouts">
            
           <form onSubmit={search}>
           <div className="content">
  <div className="search">
    <input type="text" className="search__input" aria-label="search" placeholder="enter your search" name="searchTerm" value={searchTerm} onChange={handleInput}/>
    <button className="search__submit" aria-label="submit search"><span className="material-symbols-outlined">
search
</span></button>
  </div>
</div>
</form>      
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
  <div className="buttons">
    <Link href="Workout/legs">
            <button className="custom-btn btn-16">legs</button>
             </Link>
             <Link href="Workout/push">
            <button className="custom-btn btn-16">push</button>
             </Link>
             
             <Link href="Workout/pull">
            <button className="custom-btn btn-16">pull</button>
             </Link>

             <Link href="Workout/core">
            <button className="custom-btn btn-16">core</button>
             </Link>
             </div>
          
            {oldworkouts.sort((a,b)=>a.week-b.week).map((workout:any,index:number)=>(
                <ul className="cards">
                <li className="cards__item">
                 <div className="card">
                    <h1>week {workout.week}</h1>
                    <img className="card__image card__image--fence" src={workout.img}/>
                    <div className="card__content">
                      <div className="card__title">{workout.name}</div>
                      <p className="card__text">{workout.description} </p>
                   
                      <Link href={`oneWorkout/${workout._id}`}><button className="btn btn--block card__btn">Button</button></Link>
                    </div>
                  </div>
                </li>
          </ul>   
            ))}
        </div>
        
    )
}


export async function  getStaticProps(){
    const workouts= await fetch("http://localhost:2000/api/workouts/all").then(response=>response.json())
    return {
        props:{
            workouts
        }
    }
}
