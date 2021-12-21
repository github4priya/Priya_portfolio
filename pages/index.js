import React from 'react'
import { Row, Col } from 'react-bootstrap'
import LeftView from '../Components/LeftView/LeftView'
import MainContent from '../Components/MainContent'

export default function Home() {
  return (
    <>

      <Row>
        <Col sm={3}>
          <LeftView />
        </Col>
        <Col sm={9}>
          <MainContent />
        </Col>
      </Row>




    </>
  )
}
