import React from 'react'

export const Header = () => {
	return (
		<nav>
			<div className="logo">Logo</div>
				<ul>
					<li>
						Home
					</li>
					<li>
						Nuestros Productos
					</li>
					<li>
						Nosotros
					</li>
					<li>
						Contacto
					</li>
				</ul>
				<div className="search">
					<i className="fa fa-search"></i>
					<i className="fa fa-shopping-basket"></i>
				</div>		
			
		</nav>
	)
}
