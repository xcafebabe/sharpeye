# sharpeye
Flat Search Sharpener

Description not provided yet...

Playing around with Angular and Google Maps.

# TODOS

0. DEV ENVIRONMENT
 * ~~Editar jshintrc~~
 * ~~Organizar angular module development~~
 * Revisar el error relacionado con main.css.map
 * Como desactivar $log en produccion.

1. CAJA DE BUSQUEDA
  * ~~Dar estilo a la caja de Busqueda~~
  * ~~Posicionar por defecto en Barcelona~~
  * ~~Cuando se selecciona la ciudad, el zoom que no sea el maximo.~~  
  * ~~Refactorizar codigo. Encapsular codigo de GMaps en otro controlador/servicio.~~
  * ~~Usar ng-Model en el searchbox~~. NO SE IMPLEMENTA

2. MARCADOR DE BUSQUEDA
  * ~~Cambiar el icono del marcador~~
  * ~~Permitir drag del marcador para cambiar la posicion~~. NO SE IMPLEMENTA
  * ~~Permitir click en el map para cambiar de posicion el marcador.~~  

3. RADIO DE BUSQUEDA
  * Permitir radio de busqueda. Habilitar con una slider la opcion
  de pintar radio de busqueda en el mapa.  
  * Agregar slider ionRangeSlider - Usar/Crear directive
  * Permitir a traves de slider/input el incremento/decremento del radio de busqueda.
  * Permitir a traves del radio de busqueda la actualizacion del slider.

4. SERVICIO PARA TRATAMIENTO INFO
  * Lista completa de propiedades. Definir valores por defecto
  * Tratamiento de informacion, proveer servicios. Tests.
  * .... El servicio debe retornar $promises... Con la data del proveedor ya tratada.
  * Devolver de momento un json con data dummy. Mocks
  * Comenzar hacer tests para los servicios.

5. MARCADOR DE RESULTADO
  * Usar un icono para cada tipo de resultado. (Por tipo de flat).  
  * Vista y Controlador para cada resultado. Al pulsar el marcador, mostrar foto e informacion.  

6. FORMULARIO
  * Crear formulario de datos
  * Obtener resultados y pintarlos.
  * Limitar el trigger de resultados a partir de cierto zoom in.
   Pensar en unos iconos para informar que debes hacer zoom in para activar las busquedas.
  * Tests para los servicios.

7. CONTACTAR IDEALISTA
  * Esperar por tokenApi ...
  * Hacer adaptaciones
  * Poner un mensajito. Search powered by Idealista.

8. SERVICIO LOCALSTORAGE
  * Guardar preferencias.

9. SERVICIO FAVORITOS
  * Seleccionar favoritos y tenerlos en una pestaña aparte. Uso de localstorage.

10. SERVICIO ESTADISTICAS
  * ??? Servicios en BackEnd ???
  * ??? Google Analitycs ???
