import React from 'react';
import data from '../data';
import Rating from '../components/Rating';
import {Link} from 'react-router-dom';

export default function ProductScreen(props) {
    const product=data.products.find((x)=> x._id === props.match.params.id)
   
    if(!product) {
       return <div>Product Not Found</div>;
   }
    return(
        <div>
            <Link to="/">Back to home</Link>
            <div className="row">
            <div className="col-2"> 
                <img className="large" src={product.image} alt={product.name}></img>         
            </div> 

            <div className="col-1"></div>
            <ul>
                <li>
                    <h1>{product.name}</h1>
                </li>
                <li>
                    <Rating
                    rating ={product.rating}
                    numReview ={product.numReviews}
                    ></Rating>
                </li>
                <li>
                    Price : Rs. {product.price}
                </li>
                <li>
                    Description: <p>{product.description}</p>
                </li>
            </ul>
            <div className="col-1">
                <div className="card card-body">
                <ul>
                    <li>
                        <div className="row">
                        <div>Price</div>
                        <div className="price">Rs. {product.price}</div>
                        </div>
                    </li>
                    <li>
                    <div className="row">
                        <div>Status</div>
                        <div>{product.countInstock > 0 ? (
                            <span className="success">In Stock</span>
                        ) : (
                            <span className="error">No stock</span>
                        )}</div>
                    </div>
                    </li>
                    <li>
                        <button className="primary block">Add to cart</button>
                    </li>
                </ul>
                </div>

            </div>  
         </div>
         </div>
            
    );
}