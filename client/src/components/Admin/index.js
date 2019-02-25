import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserPosts } from '../../actions';

class User extends Component {

    state = {
        visible: '', 
        img_url: ''
    }

    componentDidMount(){
        this.props.dispatch(getUserPosts(this.props.user.login.id));
    }

    componentDidUpdate(){

    }

    componentWillReceiveProps(nextProps){
        console.log('nextProps');
        /*console.log(nextProps.user.userPosts[0].img_url);*/

        /*fetch('https://st2.depositphotos.com/2001755/5408/i/450/depositphotos_54081723-stock-photo-beautiful-nature-landscape.jpg');*/
        /*console.log('nextProps');
        console.log( nextProps.user.userPosts.length );*/

        if ( nextProps.user.userPosts.length === 0 ) {
            this.setState({visible: ''}); 
            this.setState({
                img_url: 'https://robohash.org/set_set1/bgset_bg1/${this.props.user.login.id}?200x200?3`'
            })
        }  else {
            this.setState({visible: 'none'});  
            this.setState({
                img_url: nextProps.user.userPosts[0].img_url
            })
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
        console.log(this.state);
/*       
        console.log(this.props.user.userPosts);
        console.log(this.state);
        console.log(user.userPosts === true );*/

    return (
        <div className="user_container">
            <div className="nfo">
                <div className="formattext">
                    <div className="formatImg">
                        <img src={this.state.img_url} />
                    </div>
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