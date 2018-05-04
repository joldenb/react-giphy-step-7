import React, {Component} from 'react'

class Search extends Component {

	constructor(props){
		super(props)

		this.state = {
			query: ""
		}

		// making sure that the "this" variable equals the actual component within the
		// definition of these function	
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);

	}

	onInputChange(event) {
		this.setState({
			query : event.target.value
		})
	}

	onFormSubmit(event) {
		event.preventDefault()

		this.props.search(this.state.query)
	}

	render() {
		return (
			<div>
				<h2>Add a new giphy search here</h2>
				<form onSubmit={this.onFormSubmit}>

					<input type="text" 
						name="todo"
						placeholder="dinosaurs love archery"
						onChange={this.onInputChange}
					/>
					<button type="submit">search</button>

				</form>

			</div>			
		)
	}

}

export default Search