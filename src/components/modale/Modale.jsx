import React, { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Modale() {
    const [show, setShow] = useState(false);
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
  

    const inputNom = useRef();
    const inputPrenom = useRef();
    const inputEmail = useRef();
    const inputPassword = useRef();
    const inputPasswordConfirm = useRef();
    

    const handleSubmit = (e)=> {
        e.preventDefault()
        setNom(inputNom.current.value)
        setPrenom(inputPrenom.current.value)
        setEmail(inputEmail.current.value)
        setPassword(inputPassword.current.value)
        setPasswordConfirm(inputPasswordConfirm.current.value)
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let stylePassword = {border:'none'}
    // if (password.length < 8 && password.length > 0) {
    //   stylePassword.border = '1px solid red'
    // }
  return (
    // console.log(typeof inputRef),
    <>
      <Button variant="primary" onClick={handleShow} style={{backgroundColor:'#B300FF'}}>
        S'inscrire
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>S'enregistrer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 d-flex" >
              <Form.Control ref={inputNom} controlId="name"
                type="text"
                placeholder="Votre nom"
                autoFocus
                required
              />
              <Form.Control ref={inputPrenom} controlId="lastname"
                type="text"
                placeholder="votre prenoms"
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Control ref={inputEmail}
                type="email"
                placeholder="Votre email"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password" style={stylePassword}>
              <Form.Control ref={inputPassword} required
                type="password"
                placeholder="Votre mot de passe"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="pass">
              <Form.Control ref={inputPasswordConfirm} required
                type="password"
                placeholder="Retaper le mot de passe"
                autoFocus
              />
            </Form.Group>
            <Button type="submit" variant="primary">
            Enregistrer
          </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {password.length == passwordConfirm.length ? null : <p style={{color:'red'}}>Vous avez entrez un mauvais mot de passe</p> }
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modale;