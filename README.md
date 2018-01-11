# AngularOrdenes (FrontEnd)
Esta aplicación consiste en un sistema que permite realizar ordenes de productos para clientes. Cada cliente tiene asociados unos productos sobre los cuales puede hacer ordenes de compra de hasta maximo 5 productos. Entre las funciones del servicio web REST estan:
	
	Productos: Listar, Buscar, Crear, Editar, Eliminar. (Al crear o editar un producto se le indica el nombre y precio).
	
	Clientes:  Listar, Buscar, Crear, Editar, Eliminar. (Al crear o editar un cliente se le indica el nombre, email y productos).
	
	Ordenes: Crear, Buscar ordenes de un cliente, Buscar ordenes del ultimo mes de un cliente, Buscar ordenes de un cliente por un rango de fechas. (Al crear una orden se le indica cliente, dirección de entrega, fecha de creación, cantidad de cada producto asociado con máximo de 5 unidades totales).

- Proyecto Angular con uso de Material Design, w3.css, Responsive Design y conexion a proyecto JAVA con uso de Spring Framework y base de datos configurada desde hibernate. El backEnd esta disponible en: https://github.com/lmarcela/BackEnd-Ordenes. 
- En data.service.ts se encuentra la url del BackEnd: public url = 'http://localhost:8080/';

Secciones del README:
- <a href="https://github.com/lmarcela/FrontEnd-Ordenes#vistas">Vistas.</a> menú, clientes, productos, ordenes
- <a href="https://github.com/lmarcela/FrontEnd-Ordenes#angular-comands">ANGULAR COMANDS</a> 
- <a href="https://github.com/lmarcela/FrontEnd-Ordenes#comandos-para-git">COMANDOS PARA GIT</a> 

## Vistas

- **Vista del menu (Vista móvil y normal)**	
![Vista del menu](https://github.com/lmarcela/FrontEnd-Ordenes/blob/master/static/img/README/0.png)

- **Vista de clientes (http://localhost:4200/customers & http://localhost:4200/customer)**	

**Listar clientes**
![Vista de Listar clientes](https://github.com/lmarcela/FrontEnd-Ordenes/blob/master/static/img/README/1.png)

**Función de busqueda en clientes**
![Vista de Función de busqueda en clientes](https://github.com/lmarcela/FrontEnd-Ordenes/blob/master/static/img/README/2.png)

**Crear cliente**
![Vista de Crear cliente](https://github.com/lmarcela/FrontEnd-Ordenes/blob/master/static/img/README/3.png)

**Activación de editar cliente**
![Vista de Activación de editar cliente](https://github.com/lmarcela/FrontEnd-Ordenes/blob/master/static/img/README/5.png)

**Activación de eliminar cliente**
![Vista de Activación de eliminar cliente](https://github.com/lmarcela/FrontEnd-Ordenes/blob/master/static/img/README/6.png)

- **Vista de productos (http://localhost:4200/product)**	

**Listar productos con panel de edición < Móvil y normal >**
![Vista de Listar productos con panel de edición](https://github.com/lmarcela/FrontEnd-Ordenes/blob/master/static/img/README/7.png)

**Crear producto**
![Vista de Crear producto](https://github.com/lmarcela/FrontEnd-Ordenes/blob/master/static/img/README/8.png)

**Función de busqueda en productos**
![Vista de Función de busqueda en productos](https://github.com/lmarcela/FrontEnd-Ordenes/blob/master/static/img/README/9.png)

**Activación de editar producto**
![Vista de Activación de editar producto](https://github.com/lmarcela/FrontEnd-Ordenes/blob/master/static/img/README/10.png)

**Activación de eliminar producto**
![Vista de Activación de eliminar producto](https://github.com/lmarcela/FrontEnd-Ordenes/blob/master/static/img/README/11.png)


- **Vista de ordenes (http://localhost:4200/listarorder & http://localhost:4200/add)**	

**Listar ordenes**
![Vista de Listar ordenes](https://github.com/lmarcela/FrontEnd-Ordenes/blob/master/static/img/README/12.png)

**Crear orden**
![Vista de Crear orden](https://github.com/lmarcela/FrontEnd-Ordenes/blob/master/static/img/README/16.png)

**Buscar ordenes de un cliente**
![Vista de Buscar ordenes de un cliente](https://github.com/lmarcela/FrontEnd-Ordenes/blob/master/static/img/README/13.png)

**Buscar ordenes del ultimo mes de un cliente**
![Vista de Buscar ordenes del ultimo mes de un cliente](https://github.com/lmarcela/FrontEnd-Ordenes/blob/master/static/img/README/14.png)

**Buscar ordenes por rango de fechas de un cliente**
![Vista de Buscar ordenes por rango de fechas de un cliente](https://github.com/lmarcela/FrontEnd-Ordenes/blob/master/static/img/README/15.png)


## ANGULAR COMANDS

    INICIAR SERVIDOR (EN LA CARPETA DEL PROYECTO): ng serve -o
    CREAR COMPONENTE SIN ARCHIVOS CSS Y SPEC: ng g c components/product/list-products --spec false -is
    CREAR CLASE: ng g class model/customer
    CREAR SERVICIO SIN SPEC: ng g s services/product --spec false
    
    CREAR PROYECTO ANGULAR (RESTCLIENT): ng new nombreProyecto
    ABRIR PROYECTO EN VSCODE DESDE CONSOLA (Dentro de la carpeta del proyecto Angular): code .

- Para instalar Angular 4 hay que seguir las instrucciones de la pagina oficial: https://angular.io/guide/quickstart.
- Este ejercicio hace uso de Material Design, el cual fue instalado siguiendo las instrucciones de la pagina oficial: https://material.angular.io/guide/getting-started

- Recomendaciones en caso de actualizar package.json:

        npm install -d 
        npm install -g npm-check-updates
        ncu
        ncu -u
        npm install
        ng set warnings.typescriptMismatch=false
        ng serve -o
        eliminar carpeta node modules
        npm install
        ng serve -o


## COMANDOS PARA GIT
	VERSION: git --version
	USUARIO: git config --global user.name "Marcela Malaver"
	EMAIL: git config --global user.email "marcela9409@gmail.com"
	ALIAS PARA LOGIN: git config --global alias.lg "log --oneline --decorate --all --graph"
	ALIAS PARA STATUS: git config --global alias.s "status -s"
	VER URL REPOSITORIO: git remote -v
	PONER URL REPOSITORIO: git remote add origin https://github.com/lmarcela/FrontEnd-Ordenes.git
	SUBIR CAMBIOS: git push -u origin master
	
	VER ESTADO DE GIT: git s
	AÑADIR ARCHIVOS AL GIT: git add .
	CREAR COMMIT CON MENSAJE: git commit -m "ESTE ES MI MENSAJE"
	SUBIR AL REPOSITORIO (REVISAR PRIMERO URL DEL REPOSITORIO): git push -u origin master
	
	REVERSAR CAMBIOS EN EL GIT: git checkout -- .
