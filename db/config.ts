import {defineDb, defineTable, column} from 'astro:db';

const usuario = defineTable({
  columns:{
    id:column.number({ primaryKey:true, unique:true}),
    nombre: column.text(),
    apellido: column.text(),
    dni: column.text(),
    correo: column.text({unique:true}),
    contraseña: column.text(),
  },
})



// https://astro.build/db/config
export default defineDb({
  tables: { usuario },
});
