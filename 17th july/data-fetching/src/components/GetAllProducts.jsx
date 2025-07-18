import axios from "axios";
import React , {useEffect, useState} from "react";

export default function GetAllProducts() {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        async function getProducts() {
            let response = await axios.get('https://dummyjson.com/products');
            console.log(response)
            setProducts(response.data.products)
        }
        getProducts();
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row row-col-4">
                    {products.map((product, index) => {
                        return (
                        <div key={index} className="col">
                            <div className="card" style={{ width: "18rem" }}>
                            <img src={product.thumbnail} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                                <a href="#" className="btn btn-primary">
                                Go somewhere
                                </a>
                            </div>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}