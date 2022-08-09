import React from 'react'

const Modal = ({ handleClose }) => {

    //Ver qué sucede sin el return

    //On escape it will close
    React.useEffect(() => {
        const handleEsc = (event) => {
            
            console.log(event) //Evento nativo del browser    
            if (event.keyCode === 27) {
                console.log('will close')
                handleClose()
            }
        };

        window.addEventListener('keydown', handleEsc);

        //Siempre que agreguemos eventos nativos con useEffect, al desmontar el componente debemos desrregistrarlo
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [handleClose])

    const onClose = (event) => {
        console.log(event);
        console.log("Se hizo click en close modal");
        handleClose()
    }

    //Desafio genérico
    const handleInput = (event) => {
        const vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
        console.log(event.key);
        if (vocales.includes(event.key)) event.preventDefault()
    }

    return (
        <div
            style={{
                display: 'flex',
                position: 'fixed',
                top: 0,
                left: 0,
                height: '100vh',
                width: '100vw',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgb(0,0,0,0.6)',
            }}
        >
            <div
                style={{
                    backgroundColor: 'beige',
                    width: '500px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <h1>This is the modal</h1>
                <input onKeyDown={handleInput}/>
                <button onClick={onClose}>Close modal</button>
            </div>
        </div>
    )
}

export default Modal