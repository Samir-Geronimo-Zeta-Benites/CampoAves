import  {db, usuario} from 'astro:db';


// https://astro.build/db/seed
export default async function seed() {
	// TODO
	db.insert(usuario).values([
		{
			id: 1,
			nombre: 'Juan',
			apellido: 'Perez',
			dni: '12345678',
			correo: 'jperez@gmail.com',
			contraseña: 'juanperez12',

		},
		{
			id: 2,
			nombre: 'Maria',
			apellido: 'Gomez',
			dni: '87654321',
			correo: 'mgomez@gmail.com',
			contraseña:'mariagomez12',

		}
	])
}
