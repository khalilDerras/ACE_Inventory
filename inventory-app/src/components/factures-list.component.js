import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Product = props => (
    <tr>
        <td>{props.facture.date}</td>
        <td>{props.facture.total}</td>
        <td>
            <Link to={"/edit/"+props.facture._id}>Edit </Link>
            <Link to="/" onClick={() => deleteItem(props.facture._id)}>Delete</Link>
        </td>
    </tr>
)

function deleteItem (id){
    axios.post('http://localhost:4000/factures/delete/'+id);
    this.setState({
        factures: this.state.factures.filter(facture => facture._id !== id)
      });
}
export default class ProductsList extends Component {

    constructor(props) {
        super(props);
        this.state = {factures: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/factures/')
            .then(response => {
                this.setState({ factures: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    factureList() {
        return this.state.factures.map(function(currentProduct, i){
            return <Product facture={currentProduct} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Factures List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.factureList() }
                    </tbody>
                </table>
            </div>
        )
    }
}