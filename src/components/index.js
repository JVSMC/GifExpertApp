/**
 * Archivos de barril, estos archivos se localizan directamente
 * en la carpeta contenedora de los componentes, hooks y funciones 
 * de nuestro código, lo cual facilita la importacion de dichos 
 * elementos.
 * 
 * Es importante que el archivo de barril tenga por nombre ' index.js '
 * así nos permite cargar solo el nombre de la carpeta contenedora 
 * sin la necesidad de escribir el nombre del archivo
 * 
 * Aquí solo incluye el nombre de los archivos que se localizan dentro
 * de la carpeta components
 */

export * from './AddCategory';
export * from './GifGrid';
export * from './GifItem';