import React,{Component} from 'react';
import "./product.css";

class Product extends Component{
    render(){
        return(
            <div className="card">
                <img className="card-img-top" alt="product"></img>
                <div className="card-block">
                    <h4 className="card-title"></h4>
                    <p className="card-text">price: $</p>
                    <a href="#" className="btn btn-primary">add to wishlist</a>
                </div>
            </div>
        );
    }
}
export default Product;