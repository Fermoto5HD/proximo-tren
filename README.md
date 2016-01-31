# Próximo tren (by FM5HD)
Es un proyecto que pretende ser la alternativa a "Trenes en vivo", la aplicación creada por el Ministerio del Transporte (ex-Ministerio del Interior y Transporte).

Este proyecto obtiene los datos directamente de la aplicación "Trenes en Vivo", no genera ni modifica esos datos. 

A diferencia de Trenes en Vivo, esta plataforma híbrida (lo considero de esa forma ya que se mezcla mi código con el código original) presenta mejoras en cuanto estética e información se refiere.

# Líneas y ramales disponibles 
Al contrario de la app oficial, acá se despliegan todos los datos de todos los ramales en donde se haya implementado la generación de datos en tiempo real. 
* Sarmiento. 
** Once-Moreno. 
** Merlo-Lobos. 
** Moreno-Mercedes. 
* Mitre. 
** Retiro-Tigre. 
** Retiro-J.L.Suárez/Bme.Mitre. 
** Victoria-Capilla del Señor (sólo cabeceras). 
** Zárate-Villa Ballester (sólo cabeceras). 
* Roca. 
** Constitución-La Plata. 
** Constitución Bosques/Gutiérrez (en pruebas). 
** Constitución Alejandro Korn (en pruebas). 
** Constitución Cañuelas (en pruebas). 
** Constitución Haedo-Temperley (en pruebas). 
* Belgrano Sur. 
** Buenos Aires-M.C.G.Belgrano. 
** Buenos Aires-González Catán. 
** Puente Alsina-Aldo Bonzi (sólo cabeceras). 
* San Martín. 
* Tren de la Costa. 
* Belgrano Norte (en pruebas). 
* Urquiza (en pruebas). 

# Mejoras con respecto a Trenes en Vivo
* Visualización de próximos servicios por estación y desde cabeceras en formato general como por andén. 
* Se incluyen los ramales que no han sido publicados (o están en pruebas). 
* Es responsive, adaptando la forma de mostrar la información según el tamaño del dispositivo. 
* Gráfica transparente que se adapta a cualquier paleta de colores. 
* Fondo diferente según el horario. 
* Facilidad de cambiar de línea y estación. 
* Los tiempos superiores a 60 minutos se traducen en horas y minutos. 
* Se admiten tiempos superiores a 99 minutos. 
* En caso de cortarse la conexión muestra un mensaje de error mientras reintenta conectarse para obtener los datos. 
* Reloj en pantalla. 
* El scroll del próximo tren rápido/semi-rápido/especial y de las alertas en pantalla no se interrumpe.
* Se usan los cuadros necesarios para mostrar los servicios que tengan datos, los que no muestran información no se muestran a la vista. 
* Se utilizan textos claros y concisos que respondan a lo que el usuario busca. 

| Antes | Después |
| ------------- | ------------- |
| Próximo tren en: Destino: Moreno. 5 minutos | El próximo hacia Moreno llega en 5 minutos |
| El tren es tuyo, cuidalo. | No hay información de los próximos servicios. Consultá la cartelera de horarios para más información. |

# Changelog
## v1.0
* Carga inicial del proyecto.


# Frameworks utilizados

* jQuery v2.1.4
* Modernizr 
* MomentJS 
* Moment-duration-format (plugin) 
* Unsemantic (fork de 960gs)
* Bootstrap v3.3.7