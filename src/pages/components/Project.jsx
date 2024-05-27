import React from 'react'
import  Card  from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
const Project = ({classNames="", title, image, description, githubLink, websiteLink}) => {
  return (
    <div className={`${classNames} h-100`}>
      <Card className='h-100'>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <div className="d-flex justify-content-evenly">
            <Button className='text-decoration-none text-blue'href = {githubLink} variant="link">GitHub</Button>
            <Button className='text-decoration-none text-blue'href = {websiteLink} variant="link">Website</Button>
          </div>
          
        </Card.Body>
      </Card>

    </div>
  )
}

export default Project