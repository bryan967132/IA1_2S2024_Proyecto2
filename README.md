*Universidad de San Carlos de Guatemala*  
*Facultad de Ingenieria*  
*Escuela de Ciencias y Sistemas*  
*Inteligencia Artificial 1*  
*Segundo Semestre 2024.*  

**Proyecto 2**  
**Machine Learning**  
___
**201908355 - Danny Hugo Bryan Tejaxún Pichiyá**  

# Manual De Usuario

# Modelos
Para todos los modelos es necesario cargar un archivo en formato csv con los datos necesarios para el entrenamiento, predicción y, según sea el caso, mostrar una gráfica o tabla de resultados.

## KMeans 2D
![KMeans](./Img/KMeans.png)

Para este modelo se habilitan 2 input text para ingresar la `cantidad de clusters` y el `número de iteraciones` para evaluar.

Para el entrenamiento y predicción, el botón en la sección de `Actions` cambiará dependiendo de la acción que se ha realizado con anterioridad. Puede ser para Entrenamiento (`Train`), Predicción (`Predict`) o Mostrar Gráfico de resultados (`Graphic`).

![KMeans](./Img/KMeans1.png)

Los resultados se muestran en un agráfica de puntos.

![KMeans](./Img/KMeans2.png)

## Linear Regression
![LinearRegression](./Img/LinearRegression.png)

Para el entrenamiento y predicción, el botón en la sección de `Actions` cambiará dependiendo de la acción que se ha realizado con anterioridad. Puede ser para Entrenamiento (`Train`), Predicción (`Predict`) o Mostrar Gráfico de resultados (`Graphic`).

![LinearRegression](./Img/LinearRegression1.png)

Los resultados se mostrarán en las respectivas secciones, que corresponden a cada acción que realiza el botón en la sección de `Actions` (`Train`, `Predict`, `Graphic`).

![LinearRegression](./Img/LinearRegression2.png)

## Naive Bayes
![NaiveBayes](./Img/NaiveBayes.png)

* Se habilita una sección donde se muestra la tabla para el Entrenamiento (`Train`) con los datos que se leen del archivo de entrada correspondiente.
* En la sección de Predicción (`Predict`) se habilita un Combo Box (`Select`) donde se se lecciona el parámetro de la predicción.
* En la sección de Condicionamiento (`When`) se establecen los parámetros que condicionan un estado o combinación de valores.

![NaiveBayes](./Img/NaiveBayes1.png)

Al dar click en el botón de predicción (`Predict`) se muestra en la sección de resultados (`Result`) el porcentaje de probabilidad del valor del parámetro con mayor probabilidad que podría ocurrir.

![NaiveBayes](./Img/NaiveBayes2.png)