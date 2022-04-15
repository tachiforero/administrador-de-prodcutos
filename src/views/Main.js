import React, {useEffect, useState} from 'react';
import axios from "axios"
import Productform from '../components/ProductForm';
import Productlist from '../components/ProductList';


const Main = () => {

const [product, setProduct] = useState([]);
const [errors, setErrors] = useState([]);

useEffect(() => {
axios.get("http://localhost:8000/api/product")
.then(res=>setProduct(res.data))
.catch(err=>console.log("Error:", err))
}, []);

const crearProducto = values => {
    axios.post("http://localhost:8000/api/product", values)
        .then(res=>console.log("Response:", res))
        .catch(err=>{
            console.log(err.response.data.errors)
            const errorResponse = err.response.data.errors;
            const errorArr=[];
            for(const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)}
                setErrors(errorArr)
        })
}

    return (
        <div>
            <div className="Primero">            
                <Productform onSubmitProp = {crearProducto}></Productform>
                {errors.map((err)=><div className="alert alert-danger">{err} </div>)}
            </div>

            <div className="Segundo">
                <Productlist product= {product}></Productlist>
            </div>

            
        </div>
    );
}

export default Main;