import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";

// images
import TextField from "@material-ui/core/TextField";

import './style.scss';
import Button from "@material-ui/core/Button";
import {toast} from "react-toastify";

import Joi from 'joi-browser';
import Hidden from "@material-ui/core/Hidden";
import SectionTitle from "../SectionTitle";

class ContactUs extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        error: {},
    };

    schema = {
        phone: Joi.string().allow(''),
        company: Joi.string().allow(''),
        name: Joi.string()
            .required(),
        email: Joi.string()
            .required()
            .email()
            .error(errors => {
                errors.forEach(err => {
                    switch (err.type) {
                        case 'string.email':
                            err.message = 'Email Must be Email Format';
                            break;
                        case 'any.required':
                            err.message = 'Email is Requared';
                            break;
                        default:
                            break;
                    }
                });
                return errors;
            }),
        message: Joi.string()
            .required()
            .error(errors => ({
                message: 'Please Provide a Message',
            })),
    };

    changeHandler = event => {
        const error = {...this.state.error};
        const errorMassage = this.validationProperty(event);
        if (errorMassage) {
            error[event.target.name] = errorMassage;
        } else {
            delete error[event.target.name];
        }
        this.setState({
            [event.target.name]: event.target.value,
            error,
        });
    };


    validationProperty = event => {
        const Obj = {[event.target.name]: event.target.value};
        const schema = {[event.target.name]: this.schema[event.target.name]};
        const {error} = Joi.validate(Obj, schema);
        return error ? error.details[0].message : null;
    };

    validate = () => {
        const options = {abortEarly: false};
        const form = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            company: this.state.phone,
            message: this.state.message,
        };
        const {error} = Joi.validate(form, this.schema, options);
        if (!error) return null;

        const errors = {};
        for (const item of error.details) errors[item.path[0]] = item.message;
        return errors;
    };

    submitHandler = event => {
        event.preventDefault();
        const error = this.validate();
        this.setState({
            error: error || {},
        });
        if (!error) {
            toast.success('Successfully Sended!');
            this.setState({
                name: '',
                email: '',
                phone: '',
                company: '',
                message: '',
            })
        }
    };

    render() {

        const {name, email, phone, company, message} = this.state;
        const {className = ''} = this.props;

        return (
            <Grid className={`contactUsWrapper ${className}`}>
                <SectionTitle
                    subtitle="LEARN MORE"
                    title="Get a Free Quote"
                />
                <Grid
                    className="container"
                    container
                    spacing={4}>
                    <Hidden smDown><Grid item xs={2}></Grid></Hidden>
                    <Grid item xs={12} md={8}>
                        <Grid className="contactForm">
                            <form onSubmit={this.submitHandler}>
                                <Grid
                                    spacing={2}
                                    container>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            name="name"
                                            value={name}
                                            helperText={
                                                this.state.error.name ? this.state.error.name : ''
                                            }
                                            placeholder="Full Name"
                                            className="inputStyleBasic"
                                            margin="normal"
                                            variant="outlined"
                                            onChange={this.changeHandler}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            name="email"
                                            helperText={
                                                this.state.error.email ? this.state.error.email : ''
                                            }
                                            value={email}
                                            placeholder="E-mail Address"
                                            className="inputStyleBasic"
                                            margin="normal"
                                            variant="outlined"
                                            onChange={this.changeHandler}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            name="phone"
                                            value={phone}
                                            helperText={
                                                this.state.error.phone ? this.state.error.phone : ''
                                            }
                                            placeholder="Phone Number"
                                            className="inputStyleBasic"
                                            margin="normal"
                                            variant="outlined"
                                            onChange={this.changeHandler}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            name="company"
                                            value={company}
                                            helperText={
                                                this.state.error.company ? this.state.error.company : ''
                                            }
                                            placeholder="Company Name *"
                                            className="inputStyleBasic"
                                            margin="normal"
                                            variant="outlined"
                                            onChange={this.changeHandler}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            multiline
                                            helperText={
                                                this.state.error.message ? this.state.error.message : ''
                                            }
                                            value={message}
                                            className="inputStyleBasic"
                                            name="message"
                                            placeholder="Message*"
                                            variant="outlined"
                                            onChange={this.changeHandler}
                                        />
                                    </Grid>
                                    <Grid item xs={12} className="textCenter">
                                        <Button type="submit"
                                                className="cBtn cBtnShadow mt-20 pr-50 pl-50">SUBMIT NOW</Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default ContactUs;