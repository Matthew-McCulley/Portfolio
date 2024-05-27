import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Contact() {
  return (
    <Form className='w-50'>
      <ToastContainer/>
      <Form.Group className="mb-3" controlId="emailAddress">
        <Form.Label>Email address</Form.Label>
        <Form.Control  type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="subject">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="subject" placeholder="Subject" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={5} placeholder="Message..." />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="button" value="Submit" onClick={async () => {
            const res = await fetch('/api/send', {
              method:'PUT',
              headers: {accept: 'application/json', 'content-type': 'application/json'},
              body: JSON.stringify({
                subject: "Portfolio Website: " + document.getElementById('subject').value
                  + " From " + document.getElementById('emailAddress').value,
                message: document.getElementById('message').value,
              })
            });
            if(res.status==200){
              toast.success('Email Sent Successfully.');
            }else{
              toast.error('Email Sent Unsuccessfully.');
            }
        }} />
      </Form.Group>
      
    </Form>

  );
}

export default Contact;