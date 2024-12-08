import React from "react";

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      search: ''
    }

    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
  }

  onSearchChangeHandler(event){
    this.setState({ search: event.target.value });
    this.props.onSearchChange(event);
  }

  render(){
    return (
      <input type="text" className="note-search" placeholder="Cari Catatan..." onChange={this.onSearchChangeHandler} />
    );
  }
}

export default Search;