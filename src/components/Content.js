import React from 'react'
import {productos} from '../data/data.js'
export const Content = () => {
	
		const listItem = productos.map((item)=>
	<div className ="card" key={item.id}>
		<div className="card-img">
			<img src={item.img}  />
		</div>
		<div className="card_header">
			<h2>Tipo: {item.marca}</h2>	
			<p>Descripcion: {item.descripcion}</p>
			<p>Talla: {item.tallas}</p>
			<p className="price">
			 <span class="precio">
			 {item.precio}</span></p>

			<div className="btn">Comparar</div>
		</div>

	</div>

		)


	return (
		<div className="main_content">
		<h3>React Store</h3>
			{listItem}
		</div>
	)

}

