# Data Lovers

## Índice

* [1. Definición del producto](#1-Definición-del-producto)
* [2. Historias de usuario](#2-Historias-de-usuario)
* [3. Diseño de prototipo](#3-Diseño-de-prototipo)
* [4. Especificaciones técnicas](#4-Especificaciones-técnicas)
* [5. Requisitos de instalación](#5-Requisitos-de-instalación)

***

## 1. Definición del producto

En este proyecto se realizó una página inspirada en el juego League of Legends, donde el usuario podrá ver los campeones con su respectivo nombre, imagen, nivel de dificultad y rol, de una manera ordenada mediante filtros fáciles de entender e intuitivos.
Es totalmente responsive, donde el usuario podrá visualizarlo tanto en una laptop, tablet o dispositivos móviles. 

![IMAGEN DEL PROTOTIPO RESPONSIVE](https://raw.githubusercontent.com/Luisa006/BOG004-data-lovers/main/interfaz-responsive.png)

## 2. Historias de usuario
Se realizó un estudio previo con usuarios reales del juego para saber cuales eran sus intereses o necesidades a la hora de consultar por los campeones pertenecientes al juego. Con base a ello se establecieron 3 historias de usuario:
  1.Yo como interesado en jugar lol quiero ver todos los campeones y los roles a los que pertenecen para poder elegir la línea del mapa en la que quiero empezar a jugar.
  2.Yo como jugador quisiera tener una idea visual del campeón para poder elegir el que me llame la atención (imagen del campeón).
  3.Yo como jugador de lol quisiera ver la dificultad de juego de los campeones para que al comprar o querer jugar un nuevo champ saber si me tomará más tiempo de practica.
  4.Yo como jugador de lol quisiera una página en fondo oscuro porque la página oficial de Lol es de fondo claro y siento que así es más agotador para la vista.

## 3. Diseño de prototipo
El proceso de diseño se realizó considerando las historias y el estudio previo de los usuarios, se realizaron test de usabilidad frente a los prototipos iniciales y se fué iterando a medida que se recibiía feedback. Se detectaron pequeños problemas de usabilidad y diseño de la interfaz, como por ejemplo modificar el fondo y darle textura.

![IMAGEN DEL PROTOTIPO DE BAJA FIDELIDAD](https://raw.githubusercontent.com/Luisa006/BOG004-data-lovers/main/prototipo-dibujo.jpeg)

![IMAGEN DEL PROTOTIPO DE ALTA FIDELIDAD](https://raw.githubusercontent.com/Luisa006/BOG004-data-lovers/main/figma.png)

## 4. Especificaciones técnicas
En este proyecto se utilizó HTML, CSS y Vanilla JavaScript. En el caso de JS, hay dos archivos:#### A. data.js

#### A. data.js
En este archivo se encuentran todas las funciones que permiten filtrar la data por su rol (tags), calcular el porcentaje de cada rol dentro del total de los campeones, y aquellas funciones que ordenan los campeones por nombre y nivel de dificultad.
#### B. main.js
En este archivo se realiza toda la manipulación del DOM, modificación de estilo y creación de eventos, como por ejemplo los eventos de click en los botones, colores de botones activos.
#### C. data.spec.js
En este archivo se encuentran todas las pruebas unitarias, cubriendo el 100% del código.

## 5. Requisitos de instalación
Si usted quiere instalar este repositorio en su local y probar o revisar el código, deberá instalar git, un interpretador de lineas de comando y node.js. Deberá instalar las dependencias del proyecto con el comando npm install en la carpeta del proyecto, y podrá realizar las pruebas univarias usando el comando npm test.
Para ver el proyecto debe ejecutar el comando npm start
Podrá ver la interfaz del proyecto en su navegador utilizando la url https://localhost:3000
