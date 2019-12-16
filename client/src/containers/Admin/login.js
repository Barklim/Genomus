import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';
import { Link } from 'react-router-dom';


class Login extends Component {

    state = {
        email:'',
        password:'',
        error:'',
        success:false
    }

    handleInputEmail = (event) => {
        this.setState({email:event.target.value})
    }
    handleInputPassword = (event) => {
        this.setState({password:event.target.value})
    }

    componentWillMount() {
        console.log('test')
        console.log(this.props)
        console.log(this.state)
        if (this.props.user.register !== undefined ) {
            this.setState({email: this.props.user.register.user.email}); 
            this.setState({password: this.props.user.register.user.genId});
        }
    }

    componentDidMount(){
        if(this.props.user.login.isAuth) {
            this.props.history.push('/user/user')
        }
        if(this.props.user.register !== undefined) {
            if (this.props.user.register.success === true) {
                setTimeout(this.props.dispatch(loginUser(this.state)), 2000);
            }
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.user.login.isAuth){
            this.props.history.push('/user/user');
        }
    }

    submitForm = (e) =>{
        e.preventDefault();
        this.props.dispatch(loginUser(this.state))
    }

    render() {
        let user = this.props.user;
        return (
            <div className="rl_container">
                <form onSubmit={this.submitForm}>
                    <h2>Войти:</h2>

                    <div className="form_element">
                        <input 
                            type="email"
                            placeholder="Введите email"
                            value={this.state.email}
                            onChange={this.handleInputEmail}
                        />
                    </div>

                    <div className="form_element">
                        <input 
                            type="password"
                            placeholder="Введите genId"
                            value={this.state.password}
                            onChange={this.handleInputPassword}
                        />
                    </div>

                    <button type="submit">Войти</button>

                    <div className="error">
                    {
                        user.login ? 
                            <div>{user.login.message}</div>
                        :null
                    }
                    </div>

                    <Link to={`/user/registerScreen`} >
                        <button type="">Регистрация</button>
                    </Link>

                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        user:state.user
    }
}

export default connect(mapStateToProps)(Login)





//  <h4 className="fixed">Забыли пароль?</h4>

