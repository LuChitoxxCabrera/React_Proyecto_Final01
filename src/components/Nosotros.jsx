import React, { useEffect } from 'react'


export const Nosotros = () => {

    useEffect(() => {

        const clickear = () => {
            console.log("click");
        }
        window.addEventListener("click", clickear);
        
        return() => {
            window.removeEventListener("click",clickear);
        }

    }, [])    
    

return (
    <div className="container">
        <h1 className='main-title'>Nosotros</h1>
        <h3 className='h3-pedido'>Somos una empresa de implementos deportivos a tu alcance</h3>
    </div>
)
}


