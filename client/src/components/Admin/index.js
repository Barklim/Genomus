import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserPosts } from '../../actions';

class User extends Component {

    state = {
        visible: ''
    }

    componentWillMount(){
        this.props.dispatch(getUserPosts(this.props.user.login.id));
        //this.setState({visible: this.props.user.userPosts});

        //this.setState({visible: this.props.user.userPosts});
    }

    componentDidMount(){
        //this.setState({visible: this.props.user.userPosts});

        //this.setState({visible: this.props.user.userPosts});
        console.log(this.props);
    }

    /*showButton = () => (
        this.state.visible  ? 

        <Link to={`/user/compat`}>  
            <button type="submit">Редактировать анкету</button>
        </Link>            
        : <Link to={`/user/compat`}>        
            <button type="submit">Создать анкету</button>
        </Link>
    )*/

    showUserConfig = (user) => (
        user.userPosts ? 
                        
            user.userPosts.map(item => (
                <div key={item._id}>
                    <Link to={
                        `/user/edit-post/${item._id}`
                    }>
                    <button type="submit">
                        Настройки 
                    </button>

                    </Link>
                </div>
            ))
        :null
    )

    render() {
    let user = this.props.user;
    let user2 = this.props.user.login;

    //console.log(this.props);
    //console.log(this.props.user.userPosts);
    //console.log(this.state);

    return (
        <div className="user_container">
            <div className="avatar">
                <img alt="avatar" src="/images/avatar.png"/>
            </div>
            <div className="nfo">
                <div className="formattext">
                    <div><span>Name:</span> {user2.name}</div>
                    <div><span>Lastname:</span> {user2.lastname}</div>
                    <div><span>Email:</span> {user2.email}</div>
                    <div><span>GenId:</span> {user2.genId}</div>
                </div>
                    <div className="rl_container article">
                <Link to={`/user/profile`}>
                    <button type="submit">Профиль</button>
                </Link>

                {this.showUserConfig(user)}
         
                <Link to={`/user/add`}>        
                    <button type="submit">Создать анкету</button>
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