# AngularOrdenes (FrontEnd)

- Para instalar Angular 4 hay que seguir las instrucciones de la pagina oficial: https://angular.io/guide/quickstart.
- Este ejercicio hace uso de Material Design, el cual fue instalado siguiendo las instrucciones de la pagina oficial: https://material.angular.io/guide/getting-started
- Para iniciar angular el comando usado en la respectiva ubicacion del proyecto es: ng serve --open
- En data.service.ts se encuentra la url del BackEnd: public url = 'http://localhost:8080/';


# SpringOrdenes (BackEnd)

- Para hacer uso efectivo de hibernate y la conexion a mysql se debe modificar la url, nombre de usuario, contraseña y driver en src/main/resources. Actualmente tiene la siguiente configuracion:
spring.datasource.url=jdbc:mysql://localhost:3307/tienda
spring.datasource.username=root
spring.datasource.password=root
spring.datasource.driver-class-name=com.mysql.jdbc.Driver

- El proyecto es un spring boot. Para ejecutarlo en Spring Tools Suite se debe correr como Spring Boot App.
