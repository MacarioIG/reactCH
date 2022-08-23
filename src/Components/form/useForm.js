import { useState } from "react"
import { collection, getFirestore,addDoc } from 'firebase/firestore'
import { useContext } from 'react'
import {CartContext} from '../../context/cartContext'
import swal from 'sweetalert'
import React from "react"
import { Navigate } from "react-router-dom"

export const useForm = (initialForm,validateForm) => {


    const [form, setForm] = useState(initialForm)
    const [errors,setErrors] = useState({})
    const {cart ,sum,deletAll} = useContext(CartContext)

    const order = {
        
        buyer: {
            name: form.name,
            email:form.email,
            surname:form.surname,
            phone:form.phone
        },
        items:cart.map(product => ({id:product.id,title:product.title,price:product.price,quantity:product.cantidad})),
        total:sum

    }
    
    
    
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({...form,[name]: value,});
    }
    const handleBlur = (e) => {
        handleChange(e)
        setErrors(validateForm(form))
    }

    const sweetAlert = (id) => {

        swal({
            title:`The purchase ${id} was succesfully completed!`,
            text:"Thank you for your trust!",
            button:"Acept",
            icon:"success",  
        })

    }

    const handleClick = () => {

        const db = getFirestore()
        const orderCollection = collection(db,'orders');
        addDoc(orderCollection,order)
        .then(({id}) => sweetAlert(id))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validateForm(form))
        if(Object.keys(errors).length === 0){
            handleClick()
            deletAll()
            setForm(initialForm)
        }else {
            return
        }
    }

    return {
        form,
        errors,
        handleChange,
        handleBlur,
        handleSubmit
    }

}