import React, {useState} from "react";
import emailjs from '@emailjs/browser';
import { Form, FormGroup, Input, Label, Button, Container  } from "reactstrap";
import './connectForm.css';

const ContactForm = () => {
    const formFields = {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        phone: ''
    }

    const [formData, setFormData] = useState(formFields);

    const reset = (e) => {
        e.preventDefault();
        setFormData(formFields);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = 'service_qhlwdws';
        const templateId = 'template_2cgqg3x';
        const publicKey = 'qSSyvqIGs8EatjdnA';

        const templateParams = {
            f_name: formData.firstName,
            l_name: formData.lastName,
            message: formData.message,
            email: formData.email,
            phone: formData.phone
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('email sent', response);
                setFormData(formFields);
            })
            .catch((err) => {
                console.error('error:', err);
            });
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };


    return (
        <section className="contact_form">
                <h2>
                    Let's Connect! 
                </h2>
                <p>
                    If you'd like to contact me, please fill out the form below. I will be sure to respond as soon as possible. 
                </p>            
                <Form>
                <FormGroup>
                    <Label htmlFor="email">
                        Email
                    </Label>
                    <Input
                        onChange={handleChange}
                        value={formData.email}
                        id="email"
                        name="email"
                        placeholder="you@email.com"
                        type="email"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="firstName">
                        First Name
                    </Label>
                    <Input
                        onChange={handleChange}
                        value={formData.firstName}
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="l_name">
                        Last Name
                    </Label>
                    <Input
                        onChange={handleChange}
                        value={formData.lastName}
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="phone">
                        Phone Number
                    </Label>
                    <Input
                        onChange={handleChange}
                        value={formData.phone}
                        id="phone"
                        name="phone"
                        placeholder="Phone Number (optional)"
                        type="tel"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="message">
                        Message
                    </Label>
                    <Input
                        onChange={handleChange}
                        value={formData.message}
                        id="message"
                        name="message"
                        type="textarea"
                        placeholder="Send me a message!"
                        rows="5"
                        cols="30"
                    />
                 </FormGroup>
                 <Container className="btnArea" fluid="sm">
                     <Button 
                        type="submit" 
                        onClick={handleSubmit} 
                        outline 
                        className="submitBtn"
                    >
                        Submit
                    </Button>
                    <Button 
                        type="reset"
                        onClick={reset} 
                        outline 
                        className="restBtn"
                    >
                        Clear
                    </Button>
                 </Container>
                </Form>
            </section>
    )
}

export default ContactForm;

{/* 
    <label for="reason_for_contact">Reason for Contact:</label>
<select name="reason_for_contact" id="reason_for_contact">
    <option value=" ">Please Select an Option</option>
    <option value="open_position">Open Position</option>
    <option value="project_collab">To Colloborate on a Project</option>
    <option value="networking_opportunity">Let's Connect!</option>
</select> 

    <input type="checkbox" name="text_opt_in" id="text_opt_in" />
    <label for="text_opt_in">I consent to receiving text messages.</label>
*/}