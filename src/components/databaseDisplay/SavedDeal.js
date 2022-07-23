import React, { useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { MDBContainer } from 'mdbreact'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const axios = require('axios').default;

export default function SavedDeal() {
  const [building, setBuilding] = useState([])
  const [dataset, setDataset] = useState({})
  const [user] = useState('')



  useEffect(() => {
    axios.get(`http://localhost:2022/deals`)
    .then((res) =>  {
      setBuilding(res.data)
    })
  },[])
  

  return (
    <div>

        {building.map((property, i) => {
          return (
            <MDBContainer>
            <div className="w-responsive text-center mx-auto p-3 mt-2"> 
          <Row xs={1} md={2} className="g-4" is>
          <Col>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Assumptions</Card.Title>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Vacancy Rate</th>
                      <th>Capex (% NOI)</th>
                      <th>Exit Cap Rate</th>
                      <th>Cost of Capital</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{(property.vacancyRate*100).toFixed(1)}%</td>
                      <td>{(property.capex*100).toFixed(1)}%</td>
                      <td>{(property.capRate*100).toFixed(1)}%</td>
                      <td>{(property.costOfCapital*100).toFixed(1)}%</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
    
          <Col>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Projected Income</Card.Title>
                <Card.Text>
                <div>
                  <br/>
                    <div className='chart'>
                      <Bar
                      data={{
                        labels: building[i].years,
                        datasets: [
                            {
                                label: 'Operating Income less Capex',
                                backgroundColor: 'rgb(0, 139, 139, 1)',
                                data: building[i].propertyIncome
                            }
                        ]
                    }}
                      />
                    </div>
                </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
    
          <Col>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Net Present Value</Card.Title>
                <Card.Text>
    
                  Below is the profit (or loss) generated from this deal:
                  <br/><br/>
                  {property.propertyNpv?.toLocaleString('us-US', {style: 'currency', currency: 'USD'})}
    
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
    
          <Col>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Sale Price</Card.Title>
                <Card.Text>
    
                  Below is the estimated sale price at the end of your
                  holding period:
                  <br/><br/>
                  {property.salePrice?.toLocaleString('us-US', {style: 'currency', currency: 'USD'})}
    
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
    
        </Row>
    
        </div>
    </MDBContainer>
    
    
        )})}
    </div>
  )

}
