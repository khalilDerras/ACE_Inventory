import React, {Component} from 'react';
import axios from 'axios';

export default class EditProduct extends Component {

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

    componentDidMount() {
        axios.get('http://localhost:4000/products/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    nom: response.data.nom,
                    reference: response.data.reference,
                    emplacement: response.data.emplacement,
                    photo: response.data.photo,
                    prix:response.data.prix,
                    quantity: response.data.quantity,
                    prixDach: response.data.prixDach
                })
            })
            .catch(function(error) {
                console.log(error)
            })
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
        const obj = {
            nom: this.state.nom,
            reference: this.state.reference,
            emplacement: this.state.emplacement,
            photo: this.state.photo,
            prix:this.state.prix,
            quantity: this.state.quantity,
            prixDach: this.state.prixDach
        };
        axios.post('http://localhost:4000/products/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3>Update Product</h3>
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
                        <input type="submit" value="Update Product" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}