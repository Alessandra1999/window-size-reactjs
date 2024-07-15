import { useState, useEffect } from 'react';

function WindowSize() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        const resize = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        }

    window.addEventListener('resize', resize);
    
    return() => {
        window.removeEventListener('resize', resize);
    }
    })

    return (
        <div>
            <h1>A largura da Tela é de {windowWidth}px</h1>
            <h1>A altura da tela é de {windowHeight}px</h1>
        </div>
    )
}

export default WindowSize


