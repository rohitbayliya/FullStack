import React, {useEffect, useState} from "react";
import axios from "axios";

export default function GetSingleProduct() {

    const [product, setProduct] = useState({})
    const [id, getId] = useState(1);

    useEffect(()=>{
        async function getProduct() {
            let res = await axios.get(`https://dummyjson.com/products/${id}`);
            console.log(res.data);
            setProduct(res.data);
        }
        getProduct()
    }, [id])
 
    return (
        <div>
            <div style={{ width: "300px" }} className="my-1 mx-auto">
                <input
                type="number"
                onChange={(e) => setId(e.target.value)}
                value={id}
                />
            </div>
            <div className="card mx-auto" style={{ width: "18rem" }}>
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
    )
}