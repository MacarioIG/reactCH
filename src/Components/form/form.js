import './form.css'

import { useForm } from "./useForm"

const initialForm = {
        name: '',
        email: '',
        surname: '',
        phone: ''
}

const validationsForm = (form) => {

    let errors = {}

    if(!form.name.trim()) {

        errors.name = "A name is required"
        
    } else if (!/^([a-zA-ZÀ-ÿ]{3,16})$/.test(form.name)) {

        errors.name = "Insert a valid name please"

    }     if (!form.email.trim()) {

        errors.email = "An email is required"

    } else if(!/^[a-zA-ZÀ-ÿ.-_]+@[a-zA-Z.-_]+\.[a-zA-Z-0-9-.]+$/.test(form.email)) {

        errors.email = "Insert a valid email please"
    }
    if(!form.surname.trim()) {

        errors.surname = "A surname is required"

    } else if(!/^([a-zA-ZÀ-ÿ]{3,16})$/.test(form.surname)) {

        errors.name = "Insert a valid surname please"

    }  if (!form.phone) {

        errors.phone = "A phone number is required"

    } else if (form.phone.length < 8 || form.phone.length > 15) {

        errors.phone = "Insert a valid phone number please"

    }



    return errors

}

const Form = () => {

    const { 
        form,
        errors,
        handleChange,
        handleBlur,
        handleSubmit} = useForm(initialForm,validationsForm)

    return(

        <>
        <form onSubmit={handleSubmit} >
            <div className="container-form">
                <p>Name</p>
                <input name="name"type="text" onChange = {handleChange} onBlur = {handleBlur} required value={form.name}/>
                {errors.name && <p>{errors.name}</p>}
                <p>E-mail</p>
                <input name="email"type="email" onChange = {handleChange} onBlur = {handleBlur} required value={form.email}/>
                {errors.email && <p>{errors.email}</p>}

                <p>Surname</p>
                <input name="surname"type="text" onChange = {handleChange} onBlur = {handleBlur} required value={form.surname}/>
                {errors.surname && <p>{errors.surname}</p>}

                <p>Phone</p>
                <input name="phone" type="number" onChange = {handleChange} onBlur = {handleBlur} required value={form.phone}/>
                {errors.phone && <p>{errors.phone}</p>}

                <input type="submit" value='Send and purchease!'/>
            </div>
        </form>

        </>
        

    )

}

export default Form