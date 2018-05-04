import React, {Component} from 'react'

class Results extends Component {




	render() {

		const listOfResults = this.props.results.map((dataObject, index) =>{
			return <li key={index}>{dataObject.source}</li>
		})

		return (
			<div>
			<h1>Heres results</h1>
			<ul>{listOfResults}</ul>
			</div>
		)
	}

}

export default Results