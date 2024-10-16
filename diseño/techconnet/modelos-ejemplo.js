// Estructura de datos

const categoria = {
    id: 1,
    nombre: 'Celulares',
    url_imagen: 'img/0001.jpg',
}

const producto = {
    id: 1,
    nombre: 'Samsung Galaxy S10',
    precio: 1000,
    categoria_id: categoria,
    url_imagen: 'img/0001.jpg',
    detalle: `Lo que tenés que saber de este producto
Dispositivo liberado para que elijas la compañía telefónica que prefieras.
Pantalla Super AMOLED de 6.5".
Tiene 3 cámaras traseras de 50Mpx/5Mpx/2Mpx.
Cámara delantera de 13Mpx.
Procesador MediaTek Helio G99 Octa-Core de 2.2GHz con 4GB de RAM.`,
    cantidad: 10,
    variantes: [
        {
            nombre: 'Memoria',
            valores: [
                { valor: '64GB',  aumento: 1000 },
                { valor: '128GB', aumento: 1200 }
            ]
        },
        {
            nombre: 'Color',
            valores: [
                {valor: 'Azul',  aumento: 0},
                {valor: 'Negro', aumento: 0}
            ]
        }
    ]
}

compra = {
    id: 1000,
    fecha: '10-10-2024 12:00',
    items: [
        {
            productoId: 11, 
            cantidad: 1, 
            precio: 10000, 
            variante: {'Memoria': '128 GB', 'Color': 'rojo'}
        },
        {
            productoId: 12, 
            cantidad: 1,
            precio: 2000
        },
    ],
    cliente_id: 10,
    estado: 'pendiente|pagado|enviado'
}

cliente = {
    id: 10,
    domicilio:{
        calle: 'Jujuy 330',
        localidad: 'San Miguel de Tucuman',
        cp: 4000
    }, 
    email: 'j@p.com',
    telefono: '232-2323',
    tarjeta: 122303020202,
}