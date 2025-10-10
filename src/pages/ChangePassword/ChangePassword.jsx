import { useState } from "react"

const ChangePassword = () => {
    const [clave, setClave] = useState(null);
    const enviarClave = async (e) => {
        e.preventDefault();
        const data = {
            codigo: clave
        };
        try {
            const conexion = await fetch('http://localhost:10000/api/usuario/validar-codigo', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data),
                credentials: 'include'
            });
            const respuesta = await conexion.json();
            alert(respuesta.message);
            if (conexion.ok) window.location.href ="cambiar-clave"
        } catch (e) {
            console.error(e.message);
        }
    }

    return (
        <main>
            <h1>Cambiar contra</h1>
            <form onSubmit={enviarClave}>
                <label htmlFor="clave">Digite el codigo enviado a su correo</label>
                <input type="number" id='clave' onChange={(e) => setClave(e.target.value)} />
                <button>Enviar</button>
            </form>
        </main>
    )
}

export default ChangePassword
