import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserPosts } from '../../actions';

class User extends Component {

    state = {
        visible: ''
    }

    componentDidMount(){
        this.props.dispatch(getUserPosts(this.props.user.login.id));
    }

    componentDidUpdate(){

    }

    componentWillReceiveProps(nextProps){
        console.log('nextProps');
        console.log( nextProps.user.userPosts.length );
        if ( nextProps.user.userPosts.length === 0 ) {
            this.setState({visible: ''}); 
        }  else {
            this.setState({visible: 'none'});  
        }
    }

    showUserConfig = (user) => (
        user.userPosts ? 
            
            user.userPosts.map(item => (
                <div key={item._id}>
                    <Link to={
                        `/user/edit-post/${item._id}`
                    }>
                    <button type="submit">
                        Настройки и редактирование анкеты
                    </button>

                    </Link>
                </div>
            ))
        :null
    )


    render() {
        let user = this.props.user;
        let user2 = this.props.user.login;

        console.log(this.props);
        console.log(this.props.user.userPosts);
        console.log(this.state);

        console.log(user.userPosts === true );

    return (
        <div className="user_container">
            <div className="nfo">
                <div className="formattext">
                    <div><span>Name:</span> {user2.name}</div>
                    <div><span>Lastname:</span> {user2.lastname}</div>
                    <div><span>Email:</span> {user2.email}</div>
                    <div><span>GenId:</span> {user2.genId}</div>
                </div>
                    <div className="rl_container article">

                <Link to={`/user/profile`}>
                    <div>
                    <button type="submit">Профиль</button>
                    </div>
                </Link>

                {this.showUserConfig(user)}

                <Link to={`/user/add`}>        
                    <div className={this.state.visible}>
                        <button type="submit">Создать анкету</button>
                    </div>
                </Link>
    
                </div>
            </div>
        </div>
    );
};
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(User)