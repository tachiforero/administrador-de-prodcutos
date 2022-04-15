import React from 'react';
import axios from 'axios';
import {Formik, Field, Form} from "formik"
import * as Yup from "yup";
import {Link} from "react-router-dom";

const Productform = (props) => { 
    
    const {onSubmitProp} = props

    return (
        <div>

        <div>
            <Formik
            initialValues = {{
                firstName: "",
                lastName: "",
            }}
            
            validationSchema = {Yup.object().shape ({
                firstName: Yup.string()
                .min(2, "Tu nombre es muy corto")
                .max(15,"Tu nombre es muy largo")
                .required("Obligatorio"),

                lastName: Yup.string()
                .min(2, "Tu apellido es muy corto")
                .max(15,"Tu apellido es muy largo")
                .required("Obligatorio"),
            })}

            onSubmit={(values,{setSubmitting})=>{
                        onSubmitProp(values);
                        console.log(values);
                    }}
        >
            {({errors,
        touched,
        handleSubmit})=>{

            return (
                <div className= "formularioformik">
                    <div>
                    <Link to="/segunda">Más información</Link>
                    </div>
                    <h2>Formulario Espe</h2>
                    <Form onSubmit={handleSubmit}>
                        <label htmlFor='firstName'>Nombre del producto</label>
                        <Field id="firstName" type="text" placeholder="Nombre" name="firstName" className="form-control"/>
                        {errors.firstName && touched.firstName && <p className='error'>{errors.firstName} </p>}

                        <label htmlFor='lastName'>Precio del producto</label>
                        <Field id="lastName" type="text" placeholder="lastName" name="lastName" className="form-control" />
                        {errors.lastName && touched.lastName && <p className='error'>{errors.lastName} </p>}

                        <button type="submit" disabled={Object.values(errors).length>0} className="btn btn-primary mt-3">Registrarse</button>
                        </Form>
                </div>
            )
        }}
            </Formik>
        </div>


        </div>
    );
}

export default Productform;
