import React from 'react'
import {Link} from 'react-router-dom'

const Header = ()  => {
	return (
		<div className="header-app">
			<ul>
  <li><Link to={'/'}>
			Cars
		</Link></li>
  <li>	<Link to={'/mechanics'}>
			Mechanics
		</Link></li>
  <li><Link to={'/repaireds'}>
			Repairs
		</Link></li>
  <li>	<Link to={'/carTypes'}>
			CarTypes
		</Link></li>
</ul>
		</div>
		)
};

export default Header
