# TEST-PDG

BACKEND
1) Dentro de la carpeta backend ejecutar en la ventana de comandos: composer i (Instalará todas las dependencias del proyecto)
2) Renombre el archivo .env.example a .env
3) Cree una nueva base de datos con el nombre backend-pdg.
4) Ejecute las migraciones: php artisan migrate
5) Cree una llave para jwt: php artisan jwt:secret
6) Ejecutar el comando: php artisan serve (Abre un servicio en el puerto 8000 por defecto, en caso quiera usar otro puerto añada el tag --port=NUM_PUERTO)
*NOTA*
Si cambia el puerto en el backend procure cambiar también la URI del frontend.
7) Ver listado de rutas de la API: php artisan route:list (r:l)
8) Ejecutar Tests: vendor\bin\phpunit

FRONTEND
1) Dentro e la carpeta frontend ejecutar en una ventana de comandos: npm i (Instalará todas las dependencias del proyecto)
2) Ejecute el comando: ng s -o (Cuando se termine de cargar la app se cargará en el puerto 4200 por defecto, se puede cambiar el puerto también --port=NUM_PUERTO)
*NOTA*
Si cambia el puerto en el frontend procure cambiar también en el puerto de envío de email en el backend, ya que este cuando reseteas la contraseña, te manda un enlace al correo con el puerto configurado por defecto en angular.


*NOTA*
En el servidor SMTP para el envío de correos electrónicos para el reseteo de contraseñas, se recomienda usar sus credenciales, ya que como están actualmente en uso de manera local, puede ocasionar un error el intentar autenticarse desde otro lado.
