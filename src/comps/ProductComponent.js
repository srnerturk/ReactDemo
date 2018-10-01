import React, { Component } from 'react';

class ProductComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [
                { Id: 0, Name: "iPhone XS", Price: 999, Stock: 14, Category: "Electronic" },
                { Id: 1, Name: "iPhone XS MAX", Price: 1199, Stock: 32, Category: "Electronic" },
                { Id: 2, Name: "Macbook Pro", Price: 1699, Stock: 4, Category: "Notebooks" }
            ],
            pname: '',
            price: '',
            stock: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    handleSubmit(event) {
        const obj = {
            Name: this.state.pname,
            Price: this.state.price,
            Stock: this.state.stock,
            Category: "Electronic"

        }
        var elements = this.state.products.slice();
        elements.push(obj);
        this.setState({
            products: elements
        });
        //console.log(obj);

        this.state.pname="";
        this.state.price="";
        this.state.stock="";
        event.preventDefault();


    }
    validateForm() {
        return this.state.pname.length > 0 && this.state.price.length > 0 && this.state.stock.length > 0;
    }
    createTable() {
        const items = this.state.products.map((todo, index) =>
            <tr>
                <td>{todo.Name}</td>
                <td>{todo.Price}£</td>
                <td>{todo.Stock} Pc.</td>
                <td>{todo.Category}</td>
            </tr>

        );
        return items;
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="ui form">
                    <h4 className="ui dividing header">new product</h4>
                    <div className="four fields">
                        <div className="field">
                            <input type="text" id="pname" placeholder="Product name" value={this.state.pname} onChange={this.handleChange}></input>
                        </div>

                        <div className="field">
                            <input type="text" id="price" placeholder="price" value={this.state.price} onChange={this.handleChange}></input>
                        </div>

                        <div className="field">
                            <input type="text" id="stock" placeholder="stock" value={this.state.stock} onChange={this.handleChange}></input>
                        </div>
                        <div className="field">
                            <button disabled={!this.validateForm()} className="ui primary button">
                                Save
                                </button>
                        </div>
                    </div>
                </form>
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.createTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductComponent;
