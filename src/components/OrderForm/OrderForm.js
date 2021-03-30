import React, { useState, useEffect, useRef } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import classes from './OrderForm.module.css';

export default function OrderForm() {

    const [fields, setFields] = useState({});
    const [errors, setErrors] = useState({})

    const name = useRef(null)

    const handleValidation = () => {
        // let validationField = fields;
        let validationErrors = {};
        let formIsValid = true;

        //Name
        if (!fields["name"]) {
            formIsValid = false;
            validationErrors["name"] = "Cannot be empty";
        }

        if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["name"] = "Only letters";
            }
        }

        //Number
        if (!fields["number"]) {
            formIsValid = false;
            errors["number"] = "Cannot be empty";
        }
        if (fields["number"].length > 14) {
            formIsValid = false;
            errors["number"] = "Number format not correct.";
        }

        setErrors((prevErrors) => {
            return {
                ...prevErrors,
                ...validationErrors
            }
        })

        return formIsValid;
    }



    const contactSubmit = (e) => {
        e.preventDefault();

        if (handleValidation()) {
            alert("Form submitted");
        } else {
            console.log(errors);
            alert("Form has errors.")
        }

    }

    const handleChange = (field, e) => {
        let fieldValue = e.target.value;
        setFields(prevField => {
            return {
                ...prevField,
                [field]: fieldValue
            }
        })
    }

    let autoComplete;

    const loadScript = (url, callback) => {
        let script = document.createElement("script");
        script.type = "text/javascript";

        if (script.readyState) {
            script.onreadystatechange = function () {
                if (script.readyState === "loaded" || script.readyState === "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {
            script.onload = () => callback();
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    };

    function handleScriptLoad(updateQuery, autoCompleteRef) {
        autoComplete = new window.google.maps.places.Autocomplete(
            autoCompleteRef.current,
            { 
                types: ["address"], componentRestrictions: { country: "ca" } 
            }
        );
        autoComplete.setFields(["address_components", "formatted_address"]);
        autoComplete.addListener("place_changed", () =>
            handlePlaceSelect(updateQuery)
        );
    }

    async function handlePlaceSelect(updateQuery) {
        const addressObject = autoComplete.getPlace();
        const query = addressObject.formatted_address;
        updateQuery(query);
        console.log(addressObject);
    }

    const [query, setQuery] = useState("");
    const autoCompleteRef = useRef(null);

    useEffect(() => {
        loadScript(
            `https://maps.googleapis.com/maps/api/js?key=AIzaSyA6kfj3kSE0sXCC8XMh8bSJ5el0dVIEc6M&libraries=places`,
            () => handleScriptLoad(setQuery, autoCompleteRef)
        );
    }, []);

    return (
        <div className={classes.Form_container}>
            <p className={classes.OrderForm_title} >Enter Delivery Details</p>
            <Form onSubmit={contactSubmit.bind(this)}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={name} type="text" placeholder="Enter Name" onChange={handleChange.bind(this, "name")} />
                </Form.Group>

                <Form.Group controlId="formPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Enter Mobile Number" onChange={handleChange.bind(this, "number")} />
                </Form.Group>

                <Form.Group controlId="formPhone">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        ref={autoCompleteRef}
                        onChange={event => setQuery(event.target.value)}
                        type="text"
                        placeholder="Enter Address" />
                </Form.Group>
                <div className={classes.OrderForm_button_div}>
                    <Button variant="primary" type="submit">Submit Order</Button>
                    <Link to="/vancouver_bawarchi_react_app/"><Button variant="danger" type="submit">Cancel Order</Button></Link>
                </div>
            </Form>
        </div>
    )
}
