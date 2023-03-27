document.querySelector("body").innerHTML = `
<p> *** ESTA ES CON JAVA SCRIPT *** </p>
<p>LISTA "NO ORDENADA"</p>
    <ul>Comprar Verduras
        <li>Lechuga</li>
        <li>Tomate</li>
        <li>Cebolla</li>
    </ul>
    <p>LISTA "ORDENADA"</p>
    <OL>Hacer Ensalada
        <Li>Lavar lechuga</Li>
        <li>Cortar lechuga y poner en ensaladera</li>
        <li>Lavar tomates, cortar y agregar</li>
        <li>Pelar, lavar, cortar cebolla y agregar</li>
        <li>Condimentar con sal, aceite y vinagre a gusto</li>
        <li>
            <img height=100 width=150 src="Fotos/Ensalada_lechu+tom+cebolla.jfif">
        </li>
        <li>
            <img src="https://cookpad.com/do/recetas/14464814-ensalada-de-lechuga-tomate-y-cebolla" 
            alt="Otra Ensaladaque NO funciona">
        </li>
    </OL>
    <p>LISTA "ORDENADA INVERTIDA"</p>
    <ol reversed>
        Mis 5 comidas favoritas de menos a más
        <li>Ravioles</li>
        <li>Pizza</li>
        <li>Milsnesas</li>
        <li>Sushi</li>
        <li>Asado</li>
    </ol>
    <p>AGREGAR ÍTEMS A LA LISTA INVERTIDA</p>
    <ol reversed start=7>
        Sumo 2 comidas más en orden
        <li>Puchero</li>
        <li>Estofado</li>
    </ol>
`