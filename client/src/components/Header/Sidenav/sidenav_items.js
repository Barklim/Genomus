import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';

const SidenavItems = ({user}) => {

//componentWillMount() {
//    this.props.dispatch(getUserRoleTest(${user}))
//}

/*
let response = axios.get(`/api/getUser?id=5bdff2418f4ec721b41264e0`)
            .then(response =>{
                //sconsole.log(user.login.id);
                response.data.role
            })
*/
//var testOfUndef = user.login.id;
//console.log(user.login);
//console.log(this.props.user);
        
    const items = [
        {
            type:'navItem',
            icon:'home',
            text:'Домой',
            link:'/',
            restricted:false
        },
        {
            type:'navItem',
            icon:'user-circle',
            text:'Мой профиль',
            link:'/user/user',
            restricted:true
        },
        {
            type:'navItem',
            icon:'venus-mars',
            text:'Совместимость',
            link:'/user/compat',
            restricted:true
        },
        {
            type:'navItem',
            icon:'address-card',
            text:'Пользователи',
            link:'/user/register',
            restricted:true,
            exclude_for_user: true
        },
        {
            type:'navItem',
            icon:'angle-right',
            text:'Войти',
            link:'/login',
            restricted:false,
            exclude:true,
            exclude_for_user: true
        },
        {
            type:'navItem',
            icon:'envelope-open',
            text:'Регистрация',
            link:'/user/registerScreen',
            restricted:false,
            exclude:true,
            exclude_for_user: true
        },
        {
            type:'navItem',
            icon:'copy',
            text:'Анкеты',
            link:'/user/user-reviews',
            restricted:true,
            exclude_for_user: true
        },
        {
            type:'navItem',
            icon:'edit',
            text:'Гены',
            link:'/user/user-gens',
            restricted:true,
            exclude_for_user: true
        },
        {
            type:'navItem',
            icon:'plus-circle',
            text:'Добавить анкету',
            link:'/user/add',
            restricted:true,
            exclude_for_user: true
        },
        {
            type:'navItem',
            icon:'plus-circle',
            text:'Добавить мутацию',
            link:'/gen/add',
            restricted:true,
            exclude_for_user: true
        },
        {
            type:'navItem',
            icon:'share-square',
            text:'Выйти',
            link:'/user/logout',
            restricted:true,
        },
        {
            type:'navItem',
            icon:'question-circle',
            text:'О нас',
            link:'/about',
            restricted:false,
        }
    ]

    const element = (item,i) => (
        <div key={i} className={item.type}>
            <NavLink to={item.link}>
                <FontAwesome name={item.icon}/>
                {item.text}
            </NavLink>
        </div>
    )

/*
    const showItems = () => (
        user.login ?
            items.map((item,i)=>{
                if(user.login.isAuth) {
                    return !item.exclude ?
                        element(item,i)
                    :null
                } else { 
                    return !item.restricted ?
                        element(item,i)
                    :null
                }
            })
        :null
    )
    */
    const showItems = () => (
        user.login ?
            items.map((item,i)=>{
                if(user.login.isAuth) {
                    //console.log(user.login.role);
                    if (user.login.role === 0) {
                        return !item.exclude ?
                            element(item,i)
                        :null
                    } else { 
                        return !item.exclude_for_user ?
                            element(item,i)
                        :null
                    }
                } else { 
                    return !item.restricted ?
                        element(item,i)
                    :null
                } 
            })
        :null
    )
    return (
        <div>
            {showItems()}
        </div>
    );
};

function mapStateToProps(state){
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(SidenavItems)

