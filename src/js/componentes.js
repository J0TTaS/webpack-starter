import '../css/componentes.css';

export const saludar = ( nombre ) => {
    console.log( 'Creando etiqueta h1' );

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}. Refresco de manera automática gracias al paquete webpack-dev-server!`;

    document.body.append( h1 );
}