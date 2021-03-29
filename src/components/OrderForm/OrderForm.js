import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import classes from './OrderForm.module.css';

export default function OrderForm() {
    return (
        <div className={classes.Form_container}>
            <p className={classes.OrderForm_title} >Enter Delivery Details</p>
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
                <div className={classes.OrderForm_button_div}>
                    <Button variant="primary" type="submit">Submit Order</Button>
                    <Link to="/"><Button variant="danger" type="submit">Cancel Order</Button></Link>
                </div>
            </Form>
        </div>
    )
}
