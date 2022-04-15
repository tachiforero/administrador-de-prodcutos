import React from 'react';
import {Link} from "react-router-dom";

const Productlist = (props) => {
    return (
        <div>
            {props.product.map((product,i)=>{
                return (
                <div>
                    <p key={i} className ={`otroClass ${product?.firstName.length > 8 &&"masde8"}`}>{product.lastName}, {product.firstName}</p>
                    <Link to={`/detalle/${product._id}`}>Más información</Link>
                </div>
            )})}

            <div>
            <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.product.map((product,i)=>{
                            return (
                            <tr key= {i}>
                                <th scope="row">{product._id}</th>
                                <td>{product.firstName}</td>
                                <td>{product.lastName}</td>
                            </tr>
                            )
                        })}
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Productlist;


