import React, { Component } from 'react';
import axios from 'axios';
class Product extends Component {
    render() {
        return (
            <tr>
            <td>{this.props.product.nom}</td>
            <td>{this.props.product.reference}</td>
            <td>{this.props.product.emplacement}</td>
            <td>{this.props.product.prix}</td>
            <td>
            <input
                  className="input"
                  style={{
                      marginRight: 10
                  }}
                  value={this.props.product.q}
                  type="text"
                  pattern="[0-9]*"
                  placeholder="Qte"
                  onChange={e => {
                    if (e.target.validity.valid) {
                        this.props.product.q=e.target.value;
                    }
                  }
                  }
                />
                <input type="submit" value="Ajouter" className="btn btn-primary" onClick={() => this.props.lista.addCart(this.props.product._id,this.props.product.q)}/>
            </td>
        </tr>
        )
    }
}
export default class ProductsList extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {products: [],cart: []};
    }
    addCart (id,qte){
        let prod = {
            prodId:id,
            qte:qte
        }
        this.setState({
            cart: [this.state.cart,prod]
          });
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
        let x = this;
        return this.state.products.map(function(currentProduct, i){
            return <Product product={currentProduct} key={i} lista={x}/>;
        })
    }
    
    onSubmit() {
        axios.post('http://localhost:4000/factures/add', {cart:this.state.cart , total: 50})
            .then(res => console.log(res.data));

        this.setState({cart : []
        })
    }
    render() {
        return (
            <div>
                <h3>Products List</h3>
                <input type="submit" value="Finaliser" className="btn btn-primary" onClick={this.onSubmit} />

                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                        <th>Nom</th>
                        <th>Reference</th>
                        <th>Emplacement</th>
                        <th>Prix</th>
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