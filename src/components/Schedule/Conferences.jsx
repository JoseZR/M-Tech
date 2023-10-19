import { useState } from 'react'
import { Container, Nav, Tab, Tabs } from 'react-bootstrap'
import './Program.css'

export function Schedule () {
  const [activeTab, setActiveTab] = useState('day4')

  const handleTabSelect = (key) => {
    setActiveTab(key)
  }

  return (
    <>
      <div className='program-wrapper' id='programa'>
        <Container className='pt-5 py-5'>
          <center>
            <h1 className='text-light fw-font title-conferencias'>
              <strong>CRONOGRAMA DE ACTIVIDADES</strong>
            </h1>
          </center>
          <div className='program-dates mt-5'>
            <Nav className='menu-cronograma' variant='tabs' activeKey={activeTab}>
              <Nav.Item>
                <Nav.Link eventKey='day1' onClick={() => handleTabSelect('day1')}>
                  <h4 className='text-light'>
                    <strong>SILAO</strong>
                  </h4>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='day2' onClick={() => handleTabSelect('day2')}>
                  <h4 className='text-light'>
                    <strong>CORTAZAR</strong>
                  </h4>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='day3' onClick={() => handleTabSelect('day3')}>
                  <h4 className='text-light'>
                    <strong>DOLORES HIDALGO</strong>
                  </h4>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='day4' onClick={() => handleTabSelect('day4')}>
                  <h4 className='text-light'>
                    <strong>LEÓN</strong>
                  </h4>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <Tabs
            defaultActiveKey='day1'
            activeKey={activeTab}
            id='fill-tab-example'
            className='mb-3'
            onSelect={(key) => handleTabSelect(key)}
          >
            <Tab eventKey='day1'>
              <Container>
                <div className='container mt-3'>
                  <div className='table-responsive custom-table-container'>
                    <table className='custom-table'>
                      <thead>
                        <tr>
                          <th />
                          <th colSpan='3' className='text-center'>Categoría</th>
                        </tr>
                        <tr>
                          <th>Actividades</th>
                          <th>Sumo Autónomo</th>
                          <th>M-Tech Innovations</th>
                          <th>Rally de Roboinsectos</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Inicio Registro</td>
                          <td>08:30 a.m - 08:45 a.m</td>
                          <td>09:00 a.m - 09:15 a.m</td>
                          <td>10:30 a.m - 10:45 a.m</td>
                        </tr>
                        <tr>
                          <td>Inicio Zona Técnica</td>
                          <td>08:45 a.m - 09:10 a.m</td>
                          <td>09:15 a.m - 09:40 a.m</td>
                          <td>10:45 a.m - 11:10 a.m</td>
                        </tr>
                        <tr>
                          <td>Inicio Zona Homologación</td>
                          <td>09:10 a.m - 09:35 a.m</td>
                          <td />
                          <td>11:10 a.m - 11:35 a.m</td>
                        </tr>
                        <tr>
                          <td>Inauguración M-Tech</td>
                          <td colSpan='3' className='text-center'>10:00 a.m - 10:30 a.m</td>
                        </tr>
                        <tr>
                          <td>Inicio de Competencias</td>
                          <td>10:30 a.m - 12:00 p.m</td>
                          <td>10:30 a.m - 12:00 p.m</td>
                          <td>12:00 p.m - 13:30 p.m</td>
                        </tr>
                        <tr>
                          <td>Pase a la Final</td>
                          <td>13:30 p.m - 13:55 p.m</td>
                          <td>14:00 p.m - 14:25 p.m</td>
                          <td>14:30 p.m - 14:55 p.m</td>
                        </tr>
                        <tr>
                          <td>Premiación y Cierre</td>
                          <td colSpan='3' className='text-center'>15:00 p.m - 15:30 p.m</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Container>
            </Tab>
            <Tab eventKey='day2'>
              <Container style={{ color: '#ffff' }}>
                <div className='container mt-3'>
                  <div className='table-responsive custom-table-container'>
                    <table className='custom-table'>
                      <thead>
                        <tr>
                          <th />
                          <th colSpan='3' className='text-center'>Categoría</th>
                        </tr>
                        <tr>
                          <th>Actividades</th>
                          <th>Sumo Autónomo</th>
                          <th>M-Tech Innovations</th>
                          <th>Rally de Roboinsectos</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Inicio Registro</td>
                          <td>09:00 a.m - 09:10 a.m</td>
                          <td>09:00 a.m - 09:10 a.m</td>
                          <td>09:20 a.m - 09:35 a.m</td>
                        </tr>
                        <tr>
                          <td>Inicio Zona Técnica</td>
                          <td>09:10 a.m - 09:35 a.m</td>
                          <td>09:10 a.m - 09:35 a.m</td>
                          <td>09:35 a.m - 10:00 a.m</td>
                        </tr>
                        <tr>
                          <td>Inicio Zona Homologación</td>
                          <td>09:35 a.m - 09:55 a.m</td>
                          <td />
                          <td>10:00 a.m - 10:20 a.m</td>
                        </tr>
                        <tr>
                          <td>Inauguración M-Tech</td>
                          <td colSpan='3' className='text-center'>10:30 a.m - 11:00 a.m</td>
                        </tr>
                        <tr>
                          <td>Inicio de Competencias</td>
                          <td>11:00 a.m - 12:30 a.m</td>
                          <td>11:00 a.m - 12:30p.m</td>
                          <td>11:00 a.m – 12:30 p.m</td>
                        </tr>
                        <tr>
                          <td>Pase a la Final</td>
                          <td>12:40 a.m - 13:05 a.m</td>
                          <td>13:10 p.m - 13:35 p.m</td>
                          <td>13:40 p.m - 14:05 p.m</td>
                        </tr>
                        <tr>
                          <td>Premiación y Cierre</td>
                          <td colSpan='3' className='text-center'>14:05 p.m - 14:30 p.m</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Container>
            </Tab>
            <Tab eventKey='day3'>
              <Container style={{ color: '#ffff' }}>
                <div className='container mt-3'>
                  <div className='table-responsive custom-table-container'>
                    <table className='custom-table'>
                      <thead>
                        <tr>
                          <th />
                          <th colSpan='3' className='text-center'>Categoría</th>
                        </tr>
                        <tr>
                          <th>Actividades</th>
                          <th>Sumo Autónomo</th>
                          <th>M-Tech Innovations</th>
                          <th>Rally de Roboinsectos</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Inicio Registro</td>
                          <td>09:00 a.m - 09:10 a.m</td>
                          <td>09:00 a.m - 09:10 a.m</td>
                          <td>09:20 a.m - 09:35 a.m</td>
                        </tr>
                        <tr>
                          <td>Inicio Zona Técnica</td>
                          <td>09:10 a.m - 09:35 a.m</td>
                          <td>09:10 a.m - 09:35 a.m</td>
                          <td>09:35 a.m - 10:00 a.m</td>
                        </tr>
                        <tr>
                          <td>Inicio Zona Homologación</td>
                          <td>09:35 a.m - 09:55 a.m</td>
                          <td />
                          <td>10:00 a.m - 10:20 a.m</td>
                        </tr>
                        <tr>
                          <td>Inauguración M-Tech</td>
                          <td colSpan='3' className='text-center'>10:30 a.m - 11:00 a.m</td>
                        </tr>
                        <tr>
                          <td>Inicio de Competencias</td>
                          <td>11:00 a.m - 12:30 a.m</td>
                          <td>11:00 a.m - 12:30p.m</td>
                          <td>11:00 a.m – 12:30 p.m</td>
                        </tr>
                        <tr>
                          <td>Pase a la Final</td>
                          <td>12:40 a.m - 13:05 a.m</td>
                          <td>13:10 p.m - 13:35 p.m</td>
                          <td>13:40 p.m - 14:05 p.m</td>
                        </tr>
                        <tr>
                          <td>Premiación y Cierre</td>
                          <td colSpan='3' className='text-center'>14:05 p.m - 14:30 p.m</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Container>
            </Tab>
            <Tab eventKey='day4'>
              <Container style={{ color: '#ffff' }}>
                <div className='container mt-3'>
                  <div className='table-responsive custom-table-container'>
                    <table className='custom-table'>
                      <thead>
                        <tr>
                          <th />
                          <th colSpan='3' className='text-center'>Categoría</th>
                        </tr>
                        <tr>
                          <th>Actividades</th>
                          <th>Sumo Autónomo</th>
                          <th>M-Tech Innovations</th>
                          <th>Rally de Roboinsectos</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Inicio Registro</td>
                          <td>09:00 a.m - 09:10 a.m</td>
                          <td>09:10 a.m - 09:20 a.m</td>
                          <td>09:20 a.m - 09:30 a.m</td>
                        </tr>
                        <tr>
                          <td>Inicio Zona Técnica</td>
                          <td>09:10 a.m - 09:30 a.m</td>
                          <td>09:20 a.m - 09:50 a.m</td>
                          <td>09:30 a.m - 09:50 a.m</td>
                        </tr>
                        <tr>
                          <td>Inicio Zona Homologación</td>
                          <td>09:30 a.m - 09:45 a.m</td>
                          <td />
                          <td>09:50 a.m - 10:05 a.m</td>
                        </tr>
                        <tr>
                          <td>Inauguración M-Tech</td>
                          <td colSpan='3' className='text-center'>10:15 a.m - 10:45 a.m</td>
                        </tr>
                        <tr>
                          <td>Inicio de Competencias</td>
                          <td>10:50 a.m - 11:50 a.m</td>
                          <td>10:50 a.m - 11:50 a.m</td>
                          <td>11:55 a.m – 13:00 p.m</td>
                        </tr>
                        <tr>
                          <td>Pase a la Final</td>
                          <td>13:00 a.m - 13:30 a.m</td>
                          <td>13:30 p.m - 14:00 p.m</td>
                          <td>14:00 p.m - 14:30 p.m</td>
                        </tr>
                        <tr>
                          <td>Premiación y Cierre</td>
                          <td colSpan='3' className='text-center'>14:30 p.m - 15:00 p.m</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Container>
            </Tab>
          </Tabs>
        </Container>
      </div>
    </>
  )
}
