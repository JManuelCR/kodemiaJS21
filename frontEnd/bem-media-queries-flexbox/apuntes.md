# Metodologia BEM
Es una metodologia CSS
- codigo modular
- codigo limpio
- mantiene la especifidad al minimo

BEM es una nomenclatura para nombrar los elementos en HTML por medio de clases, esto nos va a yudar a escribir el CSS más sencillo y claro 

Siempre se necesita el analizis previo de los componentes antes de darle clasesa los elementos o blques

Esta comformado por bloques, elementos y modificadores (BEM)

    - Que es un bloque:
        Es un componente independiente que no necesita de otros para existir, por ejemplo un header. Hace mensión a la funcionalidad el bloque.

            ejemplo:
                    header class="header"
                    nav class="nav"
                    card class="card"
                    section class="section"
                    article class="article"
    
    -Que es un elemento:
        Un elemento es aquel que se encuentra dentro del bloque y que depende del mismo 

        nombralo:
        [bloque_name]__[element_name]

        nav class="nav"
            a class="nav__link"

        form class="form"
            input class="form__input"
            button class="form__button"
        form class="form-2"
            input class="form-2__input"
            button class="form-2__button"


    -Que es un modificador
        Pueden referirse a un bloque o a un elemento
            [blok_or_element_name]--[modificador]
        
        ejemplo

            form class="form form--blue"
            input class="form__input"
            button class="form__button"

            nav class="nav"
                a class="nav__link"
                a class="nav__link nav__link--disabled"

            header class="header header--color-blue"
            header class="header header--color-gray"
            header class="header header--color-orange"


# Media queries
    En el heder de html el tercer meta hace referencia al nombre: viewport, contenido: width=device-width que hace referencia al ancho del contenido e initial-scale=1.0 hace refencia a la escala con la que se esta trabajando

        Si queremosque el usuario no haga zoomm
            user-scalable=no
            minimum-scale
            maximum-scale
        esto se puede agregar al content del tag meta

    viewport - es la parte visible del navegador sin contar la barra de navegacion

    Por medio de CSS vamos a preguntar que tamaño cumple, si es mayor aplica estos estilos, si es menor aplica estos estilos

    Dispositivos                Rango de medidas
        vertical - portrait     320px - 550px
        horizontal - ladscape 550px - 768px

    Tablet
        portrait    768px-1024px
        landscape   1024px-1200px
        laptop
        pc
    
    Desing high     >1200px

    los break points son los puntos de quiebre para el cambio de pantalla o resolucion
    mobile  320px-768px
    breakpoint  768px
    tablet  768px-1024px
    breakpoint  1024px
    laptop 1024px-1200px
    breakpoint 1200px
    high 1200
    breakpoint 1440px

    La filosofia Mobile-Firts es escribir los estilos primero en mobile para no escribir codigo de más, tambien esta el diseño de laptop first pero es recomendable hacer el diseño mobile first 


# Flexbox
    Flexbos es un modulo de CSS.
    Con felxbox podremos crear elementos adaptables.
    Tambien podemos encontrar  grid

    El flex container es el que envuelve  a los items, es un elemento padre.
    Los elementos hijos seran los flex items los hijos directos de el container seran los flex items
    
    Los ejes principales de flex dependen de su orientacion por defecto el eje principal (main-axis) es de izquierda a derecha y el eje secundario (cross-axis) que es de arriba abajo.
    EL direction por defecto de flex en row si lo cambiamos a column cambiamos los ejes como si rotaren 90 grados.

    Para decire a un contenedor que sera flexible tenemos que decircelo atraves de la propiedad display con valor display:flex
    
    Con el valor de flex-direction: column; combiamos la orientacion del main axis y del cross axis

        flex-direction: row-reverse;
        flex-direction: column-reverse;

    para modificar la alineacion de los elementos en el eje pricipal

    jsutify-content: 

    Para modificar la alineacion de los elementos en el eje secundarip

    aling-items:


    flex-container
        dipslay: flex
        flex-direction
        flex-wrap:nowrap
        justify-content: space-between
        align-items: flex-start
        flex-flow: center wrap

    flex-items
        Order: 0
        
            Por de defecto es 0, lo que significa es que tienen el orden que sigue dento del container.Acepta numeros positivos, negativos y lo acomoda de menor a mayor
            esto puede ir en cada item para ordenarlos en su disteibucion.
            puede repetirse un numero de order en dos elementos o más y seran acomodasdos en su orden de aparicion en el html. Esta propiedad order solo ordenan en el eje principal

        flex-grow:

            Su vlaor por defecto es 0 y basicamente flex grow es el factor de crecimeinto de los flx items de espacio disponible para que crescan. De los pixeles disponible dividirlo entre la suma de los valores de grow y despues multiplicar ese valor por cad uno de los valores dee grow de los elementos.
            Siempre y acuando haya espacio disponible



        flex-shrink:

            Su valor por defecto es 1. Este valor reduce el espacio del item cuando hay espacios faltantes en el contenedor, en otras palabras cuando los items sobrepasan los limites de la propiedad.
            El calculo se basa en dividir el espacio faltante entre la suma de su shrink y posterior mente restar ese valor por el numero de shrink que tiene el item.

        


    |





        

        

