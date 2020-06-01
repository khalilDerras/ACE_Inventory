import React, {Component} from 'react';
import axios from 'axios';

export default class CreateProduct extends Component {

    constructor(props) {
        super(props);

        this.onChangeNom= this.onChangeNom.bind(this);
        this.onChangeReference= this.onChangeReference.bind(this);
        this.onChangeEmplacement= this.onChangeEmplacement.bind(this);
        this.onChangePhoto= this.onChangePhoto.bind(this);
        this.onChangePrix= this.onChangePrix.bind(this);
        this.onChangeQuantity= this.onChangeQuantity.bind(this);
        this.onChangePrixDach= this.onChangePrixDach.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nom: '',
            reference: '',
            emplacement: '',
            photo: '',
            prix: 0,
            quantity: 0,
            prixDach: 0
        }
    }
    onChangeNom(e) {
        this.setState({
            nom: e.target.value
        });
    }
    onChangeReference(e) {
        this.setState({
            reference: e.target.value
        });
    }
    onChangeEmplacement(e) {
        this.setState({
            emplacement: e.target.value
        });
    }
    onChangePhoto(e) {
        this.setState({
            photo: e.target.value
        });
    }
    onChangePrix(e) {
        this.setState({
            prix: e.target.value
        });
    }
    onChangeQuantity(e) {
        this.setState({
            quantity: e.target.value
        });
    }
    onChangePrixDach(e) {
        this.setState({
            prixDach: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
             
        const newProduct = {
            nom: this.state.nom,
            reference: this.state.reference,
            emplacement: this.state.emplacement,
            photo: this.state.photo,
            prix:this.state.prix,
            quantity: this.state.quantity,
            prixDach: this.state.prixDach
        };

        axios.post('http://localhost:4000/products/add', newProduct)
            .then(res => console.log(res.data));

        this.setState({
            nom: '',
            reference: '',
            emplacement: '',
            photo: '',
            prix: 0,
            quantity: 0,
            prixDach: 0
        })
    }
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Create New Product</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nom: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.nom}
                                onChange={this.onChangeNom}
                                />
                    </div>
                    <div className="form-group">
                        <label>Reference: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.reference}
                                onChange={this.onChangeReference}
                                />
                    </div>
                    <div className="form-group">
                        <label>Emplacement: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.emplacement}
                                onChange={this.onChangeEmplacement}
                                />
                    </div>
                    <div className="form-group">
                        <label>Prix: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.prix}
                                onChange={this.onChangePrix}
                                />
                    </div>
                    <div className="form-group">
                        <label>Quantity: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.quantity}
                                onChange={this.onChangeQuantity}
                                />
                    </div>
                    <div className="form-group">
                        <label>prixDach: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.prixDach}
                                onChange={this.onChangePrixDach}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Product" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}