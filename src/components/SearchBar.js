import React from "react"

class SearchBar extends React.Component {
    state = {term: ""}
    
    onInputChange = (event) => {
         this.setState({ term: event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault()

        // make a callback from parent component
        this.props.forSearchBar(this.state.term)
    }

    render() {
        return (
            <div class="ui segment">
                <form class="ui form" onSubmit= {this.onFormSubmit}>
                <div class="field" >
                    <label >
                        <h2>Video Search</h2>
                        <input 
                        type="text" 
                        value = {this.state.term}
                        onChange= {this.onInputChange}
                        />
                    </label>
                </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
