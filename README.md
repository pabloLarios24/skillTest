# React Native skill-test by Pablo Larios

Aqui muestro mi app echa en react-native utilizando componentes con hooks y otros con clases, no entendí muy bien lo de paginación asi que puse un infinityScroll con flatList.

## Pasos para correr el proyecto

- Necesitaremos contar con el cli de React-Native, si no lo tienes te dejo la liga[prototipo](https://reactnative.dev/docs/environment-setup)
- Ubicarnos dentro de la raíz del proyecto y ejecutar:
    - npm install
- Si queremos correr en ios( necesitamos una mac )
    -   En la raiz del proyecto ejecutar:
        - cd ios && pod install & cd ..
    -   Abrir la ultima versión de xcode
    -   Abrir nuestro skillTest.xcworkspace ubicado en skillTest/ios/
    -   Dentro de xcode ejecutar play y listo
- Si queremos correr en android
    -   Abrir la ultima version de Android Studio
    -   Abrir projecto android ( abrir la carpeta android que se encuentra en skillTest/android) desde la opcion "Open an exist project)
    -   Esperar a que termine el build.
    -   Ejecturar run app

## Como usar skillTest

- En la venta login encontraremos que nos piden 2 datos los cuales son los siguientes:
    -   Correo electronico: lariosarci@hotmail.com
    -   Password: prueba
- Una ves pasado el login encontramos nuestro home:
    -   Buscador por nombre de personaje que funciona solo con escribir el nombre de nuestro personaje y danto aceptar o cerrando el teclado,
    -   Boton de filtro. Este botón nos lleva a la vista con filtros desplegables en los cual eligeremos el filtro que ocupemos y a continuación daremos en el botón "Buscar".
    -   Card de personaje. Encontraremos un listado con la información basica de los personajes, una images y un boton para dar like a los que nos gustem.
        -   Si pulsamos esta card nos llevara a una vista para poder visualizar de mejor manera la información del personaje.

#### Ahora si a disfrutar de Rick & Mortys