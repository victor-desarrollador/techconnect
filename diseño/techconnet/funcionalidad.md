# Funcionalidad


##  Traer las categorias
### GET /categoria
 Traer todas las categorias
recibir [{
    id: 1,
    nombre: 'Celulares',
    url_imagen: 'img/0001.jpg',
}]

## Traer los productos de una categoria dada 
### GET /producto?categoria=celular
Trae todos los productos de la cotegoria indica
recibir:  [{
    id: 1,
    nombre: 'Samsung Galaxy S10',
    precio: 1000,
    categoria_id: categoria,
    url_imagen: 'img/0001.jpg',
    detalle: `Lo que tenés que saber de este producto`,     
    cantidad: 10,
    variantes: [
        {
            nombre: 'Memoria',
            valores: [
                { valor: '64GB',  aumento: 1000 },
                { valor: '128GB', aumento: 1200 }
            ]
        },
    ]
}
]

## Traer un producto dado
### GET producto/:id
Trae el producto especificado
recibir:  {
    id: 1,
    nombre: 'Samsung Galaxy S10',
    precio: 1000,
    categoria_id: categoria,
    url_imagen: 'img/0001.jpg',
    detalle: `Lo que tenés que saber de este producto`,     
    cantidad: 10,
    variantes: [
        {
            nombre: 'Memoria',
            valores: [
                { valor: '64GB',  aumento: 1000 },
                { valor: '128GB', aumento: 1200 }
            ]
        },
    ]
}

## Crear compra
### POST compra
Crear una compra nueva en estado pendiente
recibir: 
    {compra_id: 1}

## Agregar/Quitar producto al carrito
### POST /compra/:id
Agregar  un producto al carrito tomando en cuenta la variedad, si la cantidad es negativo lo resta. 

enviar: {
    producto_id: 10,
    cantidad: 1,
    variante: [{'memoria': '64GB'}]
}

## Borrar carrito
### DEL carrito/:id
Elimina el carrito indicado

## Confirmar compra
### POST carrito/:id
Cambia el estado del carrito a confirmado

## Agregar Datos cliente
### POST cliente
Agrega el registro de un cliente 

Enviar {
    domicilio:{
        calle: 'Jujuy 330',
        localidad: 'San Miguel de Tucuman',
        cp: 4000
    }, 
    email: 'j@p.com',
    telefono: '232-2323',
    tarjeta: 122303020202,
}
recibir:
{cliente_id: 1}

