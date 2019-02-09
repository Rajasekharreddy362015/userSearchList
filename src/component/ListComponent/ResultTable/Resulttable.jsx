import React, { Component } from 'react';
import axios from "axios";

class Resulttable extends Component {
    constructor(props){
        super(props);
        this.state = [{
            UserDetails : []
        }]

    }
    componentDidMount() {
    var th = this;
    this.serverRequest =
        axios.get(this.props.source)
            .then(function(result) {
                th.setState({
                    UserDetails: result.data.UserDetails
                });
            })
}

    componentWillUnmount() {
    this.serverRequest.abort();
}
    render() {
        const userdtls = this.state.UserDetails.map(usdtls => {
            return(
                <tr key={usdtls._id}>
                    <td>{usdtls._id}</td>
                    <td>{usdtls.name}</td>
                    <td>{usdtls.gender}</td>
                </tr>
            )
        });
        return (
            <div>
                <table>
                    <thead>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Gender</th>
                    </thead>
                    <tbody>
                        {userdtls}
                    </tbody>
                    
                </table>

            </div>
        );
    }
}

export default Resulttable;