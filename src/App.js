import useForm from "./utility/useForm";

function App() {
  const { inputs,clearForm, handleChange } = useForm({
    nombre: "Insertar nombre",
    apellido: "Insertar apodo",
    Apodo: "insertar apodo",
    
    
  });

  return (
    <div style={{ padding: "40px" }}>
      <h2>Formulario sencillo con datos</h2>
      <form>
        <label htmlFor="nombre">Nombre</label>
        <br />
        <input type="text"
          name="nombre"
          value={inputs.nombre}
          onChange={handleChange} />
        <br />
        <label htmlFor="apellido">Apellido</label>
        <br />
        <input type="text"
          name="apellido"
          value={inputs.apellido}
          onChange={handleChange} />
        <br />
        <label htmlFor="Apodo">Apodo</label>
        <br />
        <input type="string"
          name="Apodo"
        value={inputs.Apodo}
        onChange={handleChange} />
        <br />
       

        <button type="button"  >Enviar</button>
        <button type="button" onClick={clearForm}>Limpiar</button>
      </form>
    </div>
  );
}

export default App;