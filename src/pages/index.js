import { Inter } from "next/font/google";
import React from 'react'
import Navigation from './components/Navigation.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './components/Project.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Contact from './components/Contact.jsx';
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <>
      <Navigation/>

      <section id="title">
        <h1 className="text-center">Hi, I&apos;m Matthew McCulley.</h1>
      </section>

      <section>
        <Container className='w-90'>
          <Row>
            <Col xs={12} md={6}> 
              <Project 
                title="Sorting Visualizer" 
                image="/sorting-visualizer.jpeg" 
                description="Created a Sorting Visualizer using React and Redux to demonstrate how sorting algorithms like Merge Sort, Quick Sort, Heap Sort, and Bubble Sort work." 
                githubLink="https://github.com/Matthew-McCulley/Sorting-Visualizer" 
                websiteLink="https://matthew-mcculley.github.io/Sorting-Visualizer/" 
              /> 
            </Col>
            <Col xs={12} md={6}>            
              <Project 
                classNames="ms-md-5 mt-3 mt-md-0" 
                title="MERN Ecommerce Store" 
                image="/mern-site.jpeg"
                description="Created a MERN stack site where people can buy and sell graphic tees. Utilizes JWT and Redux for state management." 
                githubLink="https://github.com/Matthew-McCulley/Ecommerce-Store" 
                websiteLink="https://lively-reverence-production.up.railway.app/" 
              /> 
            </Col>
          </Row>
        </Container>
      </section>

      <section className = "my-5 w-100 d-flex flex-column align-items-center" id = "contact">
        <div className="py-3 w-75 border rounded d-flex flex-column align-items-center">
          <h1 className="text-center">Contact</h1>
          <Contact />  
        </div>          
      </section>


   </>
  );
}
