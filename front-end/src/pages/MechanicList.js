import React, {useState, useEffect} from 'react'
import ItemMechanic from '../components/ItemMechanic'


const MechanicList = ()  => {
    
	
	    let[mechanic,setMechanics] = useState([])
	    
	    useEffect(() => {
	        getMechanics( )
	   
	    }, [])
	    
	    let getMechanics = async () => {
	       let response = await fetch('/first_app/mechanics/')
	       let data = await response.json()
	       console.log('DATA:',data)
	       setMechanics(data)
	    }
	    return (
		<div className="notes">
		<h1>Mechanics</h1>
		<table>
		<tr>
				<th>id</th>
				<th>name</th>
				<th>experience</th>
				<th>price</th>
				<th>age</th>
			</tr>
		{mechanic.map((mechanic, index) =>
		(<ItemMechanic   key={index} mechanic={mechanic}/>))  }
		</table>
		</div>
		)
};
export default MechanicList  