import React,{useState,useEffect} from 'react'
import  {
  useParams
} from 'react-router-dom'

const DetailCar = ({match})  => {
    
    const { id } = useParams();
    let carId = id
    let [car,setCar]=useState(null)
    
    useEffect(()=>{
        getCar()
    }, [carId] )
    
    let getCar = async()=>{ 
        let response =await fetch('/first_app/cars/'+ carId)
        let data = await response.json()
        setCar(data)        
        }
    
	return (
		<div>
		<ul id="list-item">
    		<li>id :{car?.id}</li>
    		<li>name :{car?.name}</li>
    		<li>price :{car?.price}</li>
    		<li>year :{car?.year}</li>
    		<li>carType: {car?.carType}</li>
    		<li>description: {car?.description}</li>
		</ul>
		</div>
		)
};

export default DetailCar