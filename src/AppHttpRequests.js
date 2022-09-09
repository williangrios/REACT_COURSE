import React, {useEffect, useState} from 'react'
import './styles.css';

function AppHttpRequests() {

    const [nutri, setNutri] = useState([]);

    useEffect(() => {

        function loadAPI () {
            //olhar aos 6 minutos de novo
            let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
            fetch(url)
            .then((result)=> result.json())
            .then((data) => {
                setNutri(data);
            })
        }

        loadAPI();
    }, []);

  return (
    <div>
        <header>
        </header>
        <div className='container'>
            <strong>Table nutri</strong>
                {nutri.map((item) => {
                    return(
                        <article key={item.id} className='post'>
                            <strong className='titulo'>{item.titulo}</strong>                            
                            <img src={item.capa} className='capa'/>
                            <p className='subtitulo'>{item.subtitulo}</p>      
                            <a className='botao'>Ler mais</a>
                        </article>
                    )
                })}
        </div>
    </div>
  )
}

export default AppHttpRequests