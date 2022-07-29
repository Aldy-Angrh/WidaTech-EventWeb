import React from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'

function CardTask() {
  return (
    <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
        <Card  className="list-card">
            <Card.Body style={{backgroundColor:'#14162D', borderRadius:20}}>
                <div style={{flexDirection:'row', display:'flex'}}>
                <div style={{width:'20%',  height:'20vh'}}>
                    <Form>
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            
          />

        </div>
      ))}
    </Form>
                </div>
                <div style={{width:'80%',height:'20vh'}}>
                    <text className="list-Link">Update The UI Kit On the Project </text>
                    <text>Design - Project</text>
                </div>
                </div>
            </Card.Body>
         </Card>
         <Card  className="list-card">
            <Card.Body style={{backgroundColor:'#14162D', borderRadius:20}}>
                <div style={{flexDirection:'row', display:'flex'}}>
                <div style={{width:'20%',  height:'20vh'}}>
                    <Form>
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            
          />

        </div>
      ))}
    </Form>
                </div>
                <div style={{width:'80%',height:'20vh'}}>
                    <text className="list-Link">Update The UI Kit On the Project </text>
                    <text>Design - Project</text>
                </div>
                </div>
            </Card.Body>
         </Card>
         <Card  className="list-card">
            <Card.Body style={{backgroundColor:'#14162D', borderRadius:20}}>
                <div style={{flexDirection:'row', display:'flex'}}>
                <div style={{width:'20%',  height:'20vh'}}>
                    <Form>
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            
          />

        </div>
      ))}
    </Form>
                </div>
                <div style={{width:'80%',height:'20vh'}}>
                    <text className="list-Link">Update The UI Kit On the Project </text>
                    <text>Design - Project</text>
                </div>
                </div>
            </Card.Body>
         </Card>
         
         <Card  className="list-card">
            <Card.Body style={{backgroundColor:'#14162D', borderRadius:20}}>
                <div style={{flexDirection:'row', display:'flex'}}>
                <div style={{width:'20%',  height:'20vh'}}>
                    <Form>
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            
          />

        </div>
      ))}
    </Form>
                </div>
                <div style={{width:'80%',height:'20vh'}}>
                    <text className="list-Link">Update The UI Kit On the Project </text>
                    <text>Design - Project</text>
                </div>
                </div>
            </Card.Body>
         </Card>
    </div>
  )
}

export default CardTask