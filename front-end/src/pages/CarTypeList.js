import React, {useState, useEffect} from 'react'
import ItemCarType from '../components/ItemCarType'


const CarTypeList = ()  => {
    
	
	    let[carType,setCarType] = useState([])
	    
	    useEffect(() => {
	        getCarType()
	   
	    }, [])
	    
	    let getCarType = async () => {
	       let response = await fetch('/first_app/carTypes/')
	       let data = await response.json()
	       console.log('DATA:',data)
	       setCarType(data)
	    }
	    return (
		<div className="notes">
		<h1>CarTypes</h1>
		
		<table>
			<tr>
				<th>id</th>
				<th>name</th>
				<th>revenue</th>
				<th>nationality</th>
				<th>year</th>
			</tr>
			{carType.map((carType, index) =>
			(<ItemCarType   key={index} carType={carType}/>))  }
		</table>
		</div>
		)
};
export default CarTypeList  