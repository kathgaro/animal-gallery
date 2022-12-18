# Jsx & Webpack

## Sugar Sintax

### Template Strings 
 ```
 console.log (`${EstoEsUnTemplateString ? 'yes' : 'no' }`)
 ```
 - **String** que se declara con comillas invertidas y dentro  podemos usar codigo js.

 ### Sprate operator
 ```
 const arr = [1,2,2,2,3]
 conts arrUno = [...arr, 5]
 ```

 ### Destructuring
 ```
 const user = {nombre: 'kath', lastn: 'ruizo', age: 1}
 conts {nombre, lastn} = user
 ```
 - En el **array** va por posicion.
 ```
 const arr = [1,2,2]
 conts {arr1, arr2, arr3} = arr
 ```



 ## Polyfills y la retrocompatibilidad
 **Retrocompatible** : 
 https://caniuse.com/

 **Polyfill**: Bloque de codigo que agrega una funcionabilidad que no tenia al bloque de ejecución. Lo tenemos dentro del "node_modules" 
 https://github.com/zloirock/core-js

 ## Bungling con webpack
 Otro: Nextjs - Vite

 Webpack: 
 - Empaquetador de modulos. 
 - Nos ayuda a tener todo ordenador y que el navegador lea nuestro proyecto.
 - Nos los ofrece Fb
 - Para ejecutar comprime todos los js los pasa por bable y los traduce en un bundle.js 

 ## Transpiling
 - Proceso de convertir un codigo en otro lenguaje. Ejemplo: jsx en js

 ## JSX
 Extension de Js que se parece a html
 Para dar una clase, debemos usar *className*

 ## Style
 chacra
 material
 boots
 
