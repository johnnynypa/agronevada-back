import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import '../../../styles/navbar.css';

import {secados, secado} from '../../../graphql/secado';

class TipoSecado extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			Infos : [],
			error : ""
		}
	}
	
	componentWillMount(){
		secados()
		.then(dat => {
			console.log(dat);
			console.log(dat.data.secados);
			this.setState({'Infos' : dat.data.secados});
		})
		.catch( err => {
			this.setState({'error' : err});
		})
	}
    render(){
    	const {Infos} = this.state;
        return(
            <div className="Container-working">
				<div>
					<button id="add" className="button-add" onClick={this.handleModalClick}>Agregar Tipo Secado</button>
				</div>
				<div className="container-table">
					<table>
						<thead>
							<tr>
								<th>Id</th>
								<th>Descripción</th>
								<th>Editar</th>
							</tr>
						</thead>
						<tbody>
							{  Infos && Infos.map((inf, key) =>
								<tr key={key}>
									<td>{inf.id}</td>
									<td>{inf.descripcion}</td>
									<td><button id="edit" className="button-edit" onClick={this.handleModalClick}>Editar</button></td>
								</tr>
							)}
						</tbody>
					</table>
				</div>	
            </div>
        )
    }
}

export default TipoSecado;
