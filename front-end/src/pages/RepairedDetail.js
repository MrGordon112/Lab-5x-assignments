import React,{useState,useEffect} from 'react'
import  {
  useParams
} from 'react-router-dom'

const RepairedDetail = ({match})  => {
    
    const { id } = useParams()
    let repairedId = id
    let [repaired,setRepaired]=useState(null)
    
    useEffect(()=>{
        getRepaired()
    }, [repairedId] )
    
    let getRepaired = async()=>{ 
        let response =await fetch('/first_app/repaireds/'+ repairedId)
        let data = await response.json()
        setRepaired(data)        
        }
    
	return (
		<div>
		<p>{repaired?.date}</p>
			
		</div>
		)
};

export default RepairedDetail