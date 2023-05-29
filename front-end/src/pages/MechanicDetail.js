import React,{useState,useEffect} from 'react'
import  {
  useParams
} from 'react-router-dom'

const MechanicDetail = ({match})  => {
    
    const { id } = useParams()
    let mechanicId = id
    let [mechanic,setMechanic]=useState(null)
    
    useEffect(()=>{
        getMechanic()
    }, [mechanicId] )
    
    let getMechanic = async()=>{ 
        let response =await fetch('/first_app/mechanics/'+ mechanicId)
        let data = await response.json()
        setMechanic(data)        
        }
    
	return (
		
		
				<div>
		<ul id="list-item">
    		<li>id :{mechanic?.id}</li>
    		<li>name :{mechanic?.name}</li>
    		<li>experience :{mechanic?.experience}</li>
    		<li>price :{mechanic?.price}</li>
    		<li>age: {mechanic?.age}</li>
    		<li>description: {mechanic?.description}</li>
		</ul>
		</div>
		)
};

export default MechanicDetail