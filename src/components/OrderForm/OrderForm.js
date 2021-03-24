import React from 'react'
import {Form, Button} from 'react-bootstrap'
import classes from './OrderForm.module.css';

export default function OrderForm() {
    return (
        <div className={classes.Form_container}>
            <Form>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group controlId="formPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Enter Mobile Number" />
                </Form.Group>

                <Form.Group controlId="formPhone">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter Address" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
