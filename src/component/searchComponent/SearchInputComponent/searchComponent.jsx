import React, { Component } from 'react';

class SearchComponent extends Component {
    constructor(props) {
        super(props);
        

    }
    handleChange(event) {
        this.setState({ item: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        let item = this.state.item;
        if (item === null || item === "" || item === undefined) {
            return alert('Preencha os campos');
        } else {
            this.setState({ list: { id: 1, item: item } });
            const newItem = this.state.list;
            const list = [];
            const newList = list.push(newItem);
            this.loadList(newList);
        }
    }
    render() {
        return (
            <div>
                <input type="text" />
                <input type="button" value="searchbox" />
            </div>
        );
    }
}

export default SearchComponent;