import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import '../Record/Record.css'
import Swal from 'sweetalert2'

export function Record () {
  const [cantidad, setCantidad] = useState(0)
  const [messages, setMessages] = useState()

  const handleCantidadChange = (event) => {
    const newCantidad = parseInt(event.target.value)
    if (!isNaN(newCantidad) && newCantidad >= 0 && newCantidad <= 4) {
      setCantidad(newCantidad)
    } else {
      setCantidad(0)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const integrantes = []

    for (let i = 0; i < formData.getAll('nomParticipante[]').length; i++) {
      const integrante = {
        // campos del integrante aquí
        nomParticipante: formData.getAll('nomParticipante[]')[i],
        apePaterno: formData.getAll('apePaterno[]')[i],
        apeMaterno: formData.getAll('apeMaterno[]')[i],
        curp: formData.getAll('curp[]')[i],
        edad: formData.getAll('edad[]')[i],
        sexo: formData.getAll('sexo[]')[i],
        telefono: formData.getAll('telefono[]')[i],
        correo: formData.getAll('correo[]')[i],
        rol: formData.getAll('rol[]')[i],
        grado: formData.getAll('grado[]')[i],
        soyLider: formData.getAll('soyLider[]')[i],
        claveRfc: formData.getAll('claveRfc[]')[i]
      }
      integrantes.push(integrante)
    }
    const team = {
      // campos generales aquí
      nombreEquipo: formData.get('nombreEquipo'),
      nombreEscuela: formData.get('nombreEscuela'),
      centroTrabajo: formData.get('centroTrabajo'),
      delegacion: formData.get('delegacion'),
      municipio: formData.get('municipio'),
      nivelAcademico: formData.get('nivelAcademico'),
      categoria: formData.get('categoria'),
      sedeParticipacion: formData.get('sedeParticipacion'),
      canIntegrantes: formData.get('canIntegrantes'),
      requerimiento: formData.get('requerimiento')
    }

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ integrantes, team })
    }

    // VALIDA QUE HAYA AL MENOS UN PARTICIPANTE DE CADA SEXO
    const sexos = formData.getAll('sexo[]')
    const tieneMasculino = sexos.includes('m')
    const tieneFemenino = sexos.includes('f')

    if (!tieneMasculino || !tieneFemenino) {
      setMessages('Debe haber al menos un participante masculino y uno femenino.')
    } else {
      try {
        const response = await fetch('https://hfmexico.mx/MTech/backend/registrar.php', requestOptions)
        // const response = await fetch('http://localhost/backend/registrar.php', requestOptions)// RUTA PARA PRUEBA LOCAL
        const responseData = await response.json()
        if (responseData.status) {
          setMessages(responseData.message)
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: responseData.message,
            showConfirmButton: false,
            timer: 2000
          })
          document.getElementById('transactionForm').reset()
          setCantidad(0)
        } else {
          setMessages(responseData.message)
        }
      } catch (error) {
        console.log(error)
        setMessages('Lo siento no pudimos procesar la información intenta mas tarde.')
      }
      setTimeout(() => {
        setMessages('')
      }, '6000')
    }
  }

  const formularios = []
  for (let i = 1; i <= cantidad; i++) {
    formularios.push(
      <div className='row g-4 part-form2' key={i}>
        <h3 className='title'>INTEGRANTE {i}</h3> <br /><br />
        <div className='col-md-4'>
          <label className='form-label text-light'>Nombre (s) </label>
          <input type='text' className='form-control' id='inputAddress' required name='nomParticipante[]' />
        </div>
        <div className='col-md-4'>
          <label className='form-label text-light'>Apellido Paterno</label>
          <input type='text' className='form-control' id='inputAddress' required name='apePaterno[]' />
        </div>
        <div className='col-md-4'>
          <label className='form-label text-light'>Apellido Materno</label>
          <input type='text' className='form-control' id='inputAddress' name='apeMaterno[]' />
        </div>
        <div className='col-md-4'>
          <label className='form-label text-light'>Edad </label>
          <input type='number' className='form-control' placeholder='Edad' required name='edad[]' />
        </div>
        <div className='col-md-8'>
          <label className='form-label text-light'>Clave Única de Registro de Población - CURP </label>
          <input type='text' className='form-control' id='inputAddress' placeholder=' dígitos' required name='curp[]' />
        </div>
        <div className='col-md-6'>
          <label className='form-label text-light'>Sexo</label>
          <select className='form-select' id='autoSizingSelect' required name='sexo[]'>
            <option value=''>Selecciona una opción...</option>
            <option value='f'>Femenino</option>
            <option value='m'>Masculino</option>
          </select>
        </div>
        <div className='col-md-6'>
          <label className='form-label text-light'>Télefono</label>
          <input
            type='text' className='form-control' id='inputAddress' maxLength='10' placeholder='Máximo 10 caracteres'
            name='telefono[]'
          />
        </div>
        <div className='col-md-6'>
          <label className='form-label text-light'>Correo Electrónico </label>
          <div className='input-group has-validation'>
            <span className='input-group-text' id='inputGroupPrepend'>@</span>
            <input
              type='email' className='form-control' id='validationCustomUsername'
              aria-describedby='inputGroupPrepend' name='correo[]'
            />
            <div className='invalid-feedback'>
              Captura un correo valido.
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <label className='form-label text-light'>Rol</label>
          <select className='form-select' id='autoSizingSelect' required name='rol[]'>
            <option value=''>Selecciona una opción...</option>
            <option value='estudiante'>Estudiante</option>
            <option value='coach'>Coach</option>
          </select>
        </div>
        <div className='col-md-6'>
          <label className='form-label text-light'>Grado escolar</label>
          <select className='form-select' id='autoSizingSelect' name='grado[]'>
            <option value='0'>Selecciona una opción...</option>
            <option value='1'>1°</option>
            <option value='2'>2°</option>
            <option value='3'>3°</option>
          </select>
        </div>
        <div className='col-md-6'>
          <label className='form-label text-light'>¿Eres el líder?</label>
          <select className='form-select' id='autoSizingSelect' name='soyLider[]'>
            <option value=''>Selecciona una...</option>
            <option value='0'>No</option>
            <option value='1'>Si</option>
          </select>
        </div>
        <div className='col-md-6'>
          <input className='form-check-input' type='checkbox' id={`codeRfc${i}`} onClick={() => deseleccionarRFC(i)} onChange={() => habilitarRFC(i)} value='1' name='checkRfc[]' />
          <label className='form-check-label text-light' htmlFor={`codeRfc${i}`} style={{ padding: '0px 10px' }}> Cuento con RFC</label>
        </div>
        <div className='col-md-6' id={`divRFC${i}`} style={{ display: 'none' }}>
          <label htmlFor={`rfc${i}`} className='form-label text-light'>Registro Federal de Contribuyentes(RFC)</label>
          <input type='text' className='form-control rfc-input' id={`rfc${i}`} name='claveRfc[]' placeholder='Captura RFC' />
        </div>
      </div>
    )
  }

  // EJECUTA AL CARGAR LA PAGINA
  // window.onload = function () {
  //   mostrarMunicipios()
  // }

  // HABILITA UN CHECK BOX (TENGO RFC) AL VEZ
  function deseleccionarRFC (checkboxIndex) {
    const checkboxes = document.querySelectorAll('input[id^="codeRfc"]')
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].id !== `codeRfc${checkboxIndex}`) {
        checkboxes[i].checked = false
      }
    }
  }

  // // MUESTRA EL CAMPO RFC AL HABILITAR EL CKECK BOX
  function habilitarRFC (checkboxIndex) {
    const checkbox = document.getElementById(`codeRfc${checkboxIndex}`)
    const rfcInput = document.getElementById(`divRFC${checkboxIndex}`)
    if (checkbox.checked) {
      rfcInput.style.display = 'block' // Mostrar el campo de texto
    } else {
      rfcInput.style.display = 'none' // Ocultar el campo de texto
    }
  }

  // MUESTRA EL TEXT AREA CUANDO SE SELECCIÓNA LA CATEGORIA "MTech Innovation
  function mostrarTextArea () {
    const selectElement = document.getElementById('comboCategoria')
    const categoriaSeleccionada = selectElement.options[selectElement.selectedIndex].value
    const textareaElement = document.getElementById('miTextArea')

    if (categoriaSeleccionada === 'MTech Innovation') {
      textareaElement.style.display = 'block'
    } else {
      textareaElement.style.display = 'none'
    }
  }

  useEffect(() => {
    const nivelAcademicoSelector = document.querySelector('#cbmNivenAcademico')
    const categoriaSelector = document.querySelector('#comboCategoria')

    const handleChange = () => {
      const nivelAcademicoSeleccionado = nivelAcademicoSelector.value
      categoriaSelector.disabled = false

      if (nivelAcademicoSeleccionado === 'media superior') {
        categoriaSelector.querySelector('option[value="Sumo Autonomo"]').disabled = true
      } else {
        categoriaSelector.querySelectorAll('option').forEach(option => {
          option.disabled = false
        })
      }
    }

    nivelAcademicoSelector.addEventListener('change', handleChange)
  })

  return (
    <>
      <div className='equipo-form'>
        <h2 className='title-form text-center px-5'>REGISTRA A TU EQUIPO</h2>
      </div>
      <Container className='w-100 h-100'>
        <div className='text-center des_limit'>
          <p>Antes de registrar tu equipo, considera la siguiente información</p>
          <ul className='des_lim_list'>
            <li>- Máximo 4 integrantes por equipo (considerando a tu coach) - </li>
            <li> - El equipo debe de ser mixto - </li>
            <li> - El equipo sólo pude participar en una sola categoría y sede - </li>
          </ul>
        </div>
        <br /><br />
        <div className='form-padre'>
          <div className='form-hijo hijo-1' />
          <div className='form-hijo hijo-2'>
            <form className='row g-3 mb-5 transactionForm' id='transactionForm' onSubmit={handleSubmit}>
              <div className='row g-3 part-form'>
                <center><h3 className='title'>INFORMACIÓN DEL EQUIPO</h3></center>
                <div className='col-md-12'>
                  <label className='form-label text-light'>Nombre del equipo</label>
                  <input type='text' className='form-control' id='inputAddress' placeholder='Nombra a tu equipo de forma original' required name='nombreEquipo' />
                </div>
                <div className='col-md-6'>
                  <label className='form-label text-light'>Escuela/Academia</label>
                  <input type='text' className='form-control' id='inputAddress' placeholder='Captura el nombre completo de tu escuela' required name='nombreEscuela' />
                </div>
                <div className='col-md-6'>
                  <label className='form-label text-light'>Clave de Centro de Trabajo
                    (CTT)
                  </label>
                  <input type='text' className='form-control' id='inputAddress' placeholder='Clave del plantel educativo(Opcional)' required name='centroTrabajo' />
                </div>
                <div className='col-md-6'>
                  <label className='form-label text-light'>Delegación/Subsistema</label>
                  <input type='text' className='form-control' id='inputAddress' required name='delegacion' />
                </div>
                <div className='col-md-6'>
                  <label className='form-label text-light'>Municipio</label>
                  <input type='text' className='form-control' id='municipiosGTO' required name='municipio' />
                </div>

                <div className='col-md-4'>
                  <label className='form-label text-light'>Nivel Académico</label>
                  <select className='form-select' id='cbmNivenAcademico' required name='nivelAcademico'>
                    <option value=''>Selecciona una opción...</option>
                    <option value='secundaria'>Secundaria</option>
                    <option value='media superior'>Media Superior</option>
                  </select>
                </div>
                <div className='col-md-4'>
                  <label className='form-label text-light'>Categoría</label>
                  <select className='form-select' id='comboCategoria' required name='categoria' onChange={mostrarTextArea}>
                    <option value=''>Selecciona una categoría...</option>
                    <option value='Sumo Autonomo'>Sumo Autónomo</option>
                    <option value='MTech Innovation'>M-Tech Innovations</option>
                    <option value='Rally Roboinsectos'>Rally de Roboinsectos</option>
                  </select>
                </div>
                <div className='col-md-4'>
                  <label className='form-label text-light'>Sede de particiación</label>
                  <select className='form-select' id='autoSizingSelect' required name='sedeParticipacion'>
                    <option value=''>Selecciona una opción...</option>
                    {/* <option value='silao-14-sep'>Silao - 14 SEP</option> */}
                    <option value='cortazar-19-sep'>Cortazar - 19 SEP</option>
                    <option value='dolores hidalgo-26-sep'>Dolores Hidalgo - 26 SEP</option>
                  </select>
                </div>
                <div className='col-md-8'>
                  <label className='form-label text-light'>Número de Integrantes (Considera a tu Coach):</label>
                  <select className='form-select' id='cbmNivenAcademico' required name='canIntegrantes' onChange={handleCantidadChange}>
                    <option value='0'>Selecciona una opción...</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                  </select>
                </div>
                <div className='mb-3' id='miTextArea' style={{ display: 'none' }}>
                  <label className='form-label text-light'>Describe las características físicas (dimensiones de tu proyecto): </label>
                  <textarea className='form-control' id='exampleFormControlTextarea1' rows='3' name='requerimiento' />
                </div>
              </div>
              <div className='row formularios' id='formularios'>{formularios}</div>
              <div className='container-btn row g-4'>
                <button className='btn-registrar' type='submit' value='Registrar' name='registrar'>REGISTRAR EQUIPO</button>
              </div>
              <div className='container-msj text-center'>
                <div className='msj-error'>{messages}</div>
              </div>
            </form>

          </div>
          <div className='form-hijo hijo-1' />
        </div>
      </Container>
    </>
  )
}
