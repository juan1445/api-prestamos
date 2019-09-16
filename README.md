# api-prestamos
Se ha creado una API de un Sistema de prestamos que Manda, Obtiene, Edita y Elimina información a través de MongoAtlas

Con este enlace se ingresa a la base de datos: http://localhost:3000/api/prestamo/ si agregarmos el ID luego del / nos muestra el deudor con ese ID

{
	"nombre":"Alexis",
	"celular": "3104551236",
	"apodo":"guerra",
	"valorPrestamo":"250",
	"interes":"20",
	"calularInteres":"20"
}
 estos son los valores a pasar por postman, puede eliminar, agregar y editar cualquier usuario o deudor a traves de POST, GET y DELETE
 
 no se prestan mas de 200usd y el %de interes minimo es de 20, si se aplica otro valor no se hara el prestado y el programa hara esta validación
