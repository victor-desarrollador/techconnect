# Modelo de datos

### 1. **Categoria**

La Categoria agrupa productos bajo una categoría específica, cada una con un nombre y una imagen representativa.

- **Campos**:
  - `nombre`: Cadena de texto obligatoria que contiene el nombre de la Categoria.
  - `url_imagen`: Cadena de texto obligatoria que contiene la URL de la imagen representativa de la Categoria.
  - **Timestamps**: Se genera automáticamente para registrar la fecha de creación y actualización del documento.


### 2. **Producto**

El producto define los detalles de los bienes que se pueden comprar, incluyendo variantes como colores, tamaños, etc.

- **Campos**:
  - `nombre`: Cadena de texto obligatoria con el nombre del producto.
  - `precio`: Número obligatorio con el precio base del producto.
  - `clasificacion`: Objeto ID que hace referencia a un documento de Categoria, obligatorio.
  - `url_imagen`: Cadena de texto obligatoria que contiene la URL de la imagen del producto.
  - `detalle`: Cadena de texto obligatoria con la descripción o detalles del producto.
  - `cantidad`: Número obligatorio que define la cantidad en stock del producto.
  - `variantes`: Array opcional de objetos, donde cada objeto contiene:
    - `nombre`: Cadena de texto obligatoria con el nombre de la variante (ej. "color").
    - `valores`: Array de objetos que contiene los valores de la variante, cada objeto tiene:
      - `valor`: Cadena de texto obligatoria (ej. "rojo", "azul").
      - `aumento`: Número obligatorio que especifica el aumento del precio si se selecciona esta variante.
  - **Timestamps**: Se genera automáticamente para registrar la fecha de creación y actualización del documento.


### 3. **Compra**

La compra representa una transacción realizada por un cliente, donde se almacenan los productos adquiridos, el estado de la compra y el cliente que realizó la transacción.

- **Campos**:
  - `fecha`: Fecha en la que se realizó la compra (por defecto, la fecha actual).
  - `items`: Array de objetos, cada objeto representa un producto comprado:
    - `productoId`: Objeto ID que hace referencia a un documento de Producto, obligatorio.
    - `cantidad`: Número obligatorio que indica la cantidad del producto comprado.
    - `precio`: Número obligatorio que contiene el precio del producto al momento de la compra.
    - `variante`: Mapa opcional que describe las variantes seleccionadas (ej. color, tamaño).
  - `cliente`: Objeto ID que hace referencia a un documento de Cliente, obligatorio.
  - `estado`: Cadena de texto obligatoria que indica el estado de la compra, con valores posibles:
    - `pendiente`
    - `pagado`
    - `enviado`
  - **Timestamps**: Se genera automáticamente para registrar la fecha de creación y actualización del documento.

### 4. **Cliente**

El cliente contiene los datos personales del comprador, incluyendo la información de contacto y los datos de su domicilio.

- **Campos**:
  - `domicilio`: Objeto que contiene la dirección del cliente:
    - `calle`: Cadena de texto obligatoria con la calle y número.
    - `localidad`: Cadena de texto obligatoria con la localidad o ciudad.
    - `cp`: Número obligatorio que indica el código postal.
  - `email`: Cadena de texto obligatoria con la dirección de correo electrónico.
  - `telefono`: Cadena de texto obligatoria con el número de teléfono del cliente.
  - `tarjeta`: Cadena de texto obligatoria que contiene el número de tarjeta de crédito del cliente.
  - **Timestamps**: Se genera automáticamente para registrar la fecha de creación y actualización del documento.


### **Resumen**:

- **Categoria**: Categorización de productos con nombre e imagen.
- **Producto**: Detalles del producto, incluyendo variantes como colores o tamaños.
- **Compra**: Transacción que registra los productos adquiridos, el cliente y el estado de la compra.
- **Cliente**: Información personal y de contacto del comprador. 

