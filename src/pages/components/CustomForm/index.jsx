import React from 'react'
import { useForm } from "react-hook-form";
import Styles from './style.module.css'

function CustomForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {

    const {
      nombreDelCurso,
      tipoDeDocumento,
      numeroDeDocumento,
      firstName,
      lastName,
      fechaDeNacimiento,
      edad,
      correoElectronico,
      pais,
      ciudad,
      telefono,
      estrato,
    } = data;

    fetch('https://ksy4i83g34.execute-api.us-east-2.amazonaws.com/crear-inscripcion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombreDelCurso,
        tipoDeDocumento,
        numeroDeDocumento,
        nombreCompleto: `${firstName} ${lastName}`,
        fechaDeNacimiento,
        edad,
        correoElectronico,
        pais,
        ciudad,
        telefono,
        estrato,
      })
    })

  };

  console.log(watch("example")); // ver el valor de entrada pasando su nombre
  return (
    <div className={Styles.containerCustomForm}>
      {/* "handleSubmit" validará las entradas antes de invocar "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className={Styles.containerItem}>
          <span className={Styles.labelInputText}>Seleccione un curso</span>
          <select className={Styles.inputElement} {...register("nombreDelCurso")}>
            <option value="">Curso</option>
            <option value="curso1">Curso Opción 1</option>
            <option value="curso2">Curso Opción 2</option>
            <option value="curso3">Curso Opción 3</option>
            <option value="curso4">Curso Opción 4</option>
          </select>
        </div>
        <div className={Styles.containerItem}>
          <span className={Styles.labelInputText}>Tipo y numero de documento</span>
          <div className={Styles.wrapperInput}>
            <select
              className={Styles.inputElement}
              style={{ flex: "1" }}
              {...register("tipoDeDocumento")}>
              <option value="">Seleccione el tipo de documento</option>
              <option value="cc">Cedula de ciudadanía</option>
              <option value="ti">Tarjeta de identidad</option>
              <option value="pasaporte">Pasaporte</option>
            </select>
            <input
             className={Styles.inputElement}
             style={{ flex: "2" }}
             type="text"
             placeholder="Número de documento"
             name="numeroDocumento"
             {...register("numeroDeDocumento")} />
          </div>
        </div>
        <div className={Styles.containerItem}>
          <span className={Styles.labelInputText}>Nombre completo</span>
          <div className={Styles.wrapperInput}>
            <input className={Styles.inputElement} style={{ flex: "1" }} type="text" placeholder="Nombres" name="firstName" {...register("firstName")} />
            <input className={Styles.inputElement} style={{ flex: "1" }} type="text" placeholder="Apellidos" name="lastName" {...register("lastName")} />
          </div>
        </div>
        <div className={Styles.containerItem}>
          <span className={Styles.labelInputText}>Fecha de nacimiento y edad</span>
          <div className={Styles.wrapperInput}>
            <input className={Styles.inputElement} style={{ flex: "1" }} type="date" placeholder="Fecha de nacimiento" name="birthDate" {...register("fechaDeNacimiento")} />
            <input className={Styles.inputElement} style={{ flex: "2" }} type="number" placeholder="Edad" name="age" {...register("edad")} />
          </div>
        </div>
        <div className={Styles.containerItem}>
          <span className={Styles.labelInputText}>Correo electrónico</span>
          <input className={Styles.inputElement} type="email" placeholder="Correo electrónico" name="email" {...register("correoElectronico")} />
        </div>
        <div className={Styles.containerItem}>
          <span className={Styles.labelInputText}>País y ciudad</span>
          <div className={Styles.wrapperInput}>
            <input className={Styles.inputElement} style={{ flex: "1" }} type="text" placeholder="País" name="country" {...register("pais")} />
            <input className={Styles.inputElement} style={{ flex: "1" }} type="text" placeholder="Ciudad" name="city" {...register("ciudad")} />
          </div>
        </div>
        <div className={Styles.containerItem}>
          <span className={Styles.labelInputText}>Numero de contacto y Estrato</span>
          <div className={Styles.wrapperInput}>
            <input
              className={Styles.inputElement}
              style={{ flex: "2" }}
              type="number"
              placeholder="Número de contacto"
              name="contactNumber" {...register("telefono")}
            />
            <input
              className={Styles.inputElement}
              style={{ flex: "1.25" }}
              type="text"
              placeholder="Estrato"
              name="street"
              {...register("estrato")} />
          </div>
        </div>

        {/* registre su entrada en el gancho invocando la función "register" */}
        {/* <input defaultValue="test" {...register("example")} /> */}

        {/* incluir validación con requerido u otras reglas de validación HTML estándar */}
        {/* <input {...register("exampleRequired", { required: true })} /> */}
        {/* se devolverán errores cuando falle la validación de campos */}
        {/* {errors.exampleRequired && <span>This field is required</span>} */}

        <button className={Styles.submitElement} type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default CustomForm