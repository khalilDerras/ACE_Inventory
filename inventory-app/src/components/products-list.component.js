import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Product = props => (
    <tr>
        <td>{props.product.nom}</td>
        <td>{props.product.reference}</td>
        <td>{props.product.emplacement}</td>
        <td>{props.product.prix}</td>
        <td>{props.product.quantity}</td>
        <td>{props.product.prixDach}</td>
        <td>
            <Link to={"/edit/"+props.product._id}>Edit </Link>
            <Link to="/" onClick={() => deleteItem(props.product._id)}>Delete</Link>
        </td>
    </tr>
)

function deleteItem (id){
    axios.post('http://localhost:4000/products/delete/'+id);
    this.setState({
        products: this.state.products.filter(product => product._id !== id)
      });
}
export default class ProductsList extends Component {

    constructor(props) {
        super(props);
        this.state = {products: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/products/')
            .then(response => {
                this.setState({ products: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    productList() {
        return this.state.products.map(function(currentProduct, i){
            return <Product product={currentProduct} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Products List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                        <th>Nom</th>
                        <th>Reference</th>
                        <th>Emplacement</th>
                        <th>Prix</th>
                        <th>Quantity</th>
                        <th>prixDach</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.productList() }
                    </tbody>
                </table>
            </div>
        )
    }
}