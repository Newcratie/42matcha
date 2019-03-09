import React from 'react';
import RegisterForm from './react-form/register-form'

export const Register = withRouter(() => {
    return <RegisterForm/>
});

const mapStateToProps = (state) => {
    return {
        login: state.login
    };
};

import {withRouter} from "react-router-dom"
import {connect} from "react-redux";
export default withRouter(connect(mapStateToProps)(Register))