import React, { useForm } from 'react-hook-form';

export const Contacto = () => {
    
    const{ register, handleSubmit } = useForm();
    const enviar = (data) => {
        console.log(data)
    }

    return (
        <div>
            <div className="container">
                <h1 className="main-title">Contacto</h1>
                <form className='formulario' onSubmit={handleSubmit(enviar)}>
                    <input type="text" placeholder='Introduce tu nombre' {...register("nombre")}/>

                    <input type="email" placeholder='Introduce tu e-mail' {...register("email")} />

                    <input type="phone" placeholder='Introduce tu teléfono' {...register("telefono")} />

                    <button type="submit" className='enviar'>Enviar</button>
                </form>
            </div>
        </div>
    );
};