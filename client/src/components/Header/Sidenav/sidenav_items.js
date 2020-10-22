import React from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import logo from './logo.png';
import igem from './igem4.png';
import mail from './mail1.png';
import versionObj from './../../../utils/version.js';

const SidenavItems = ({user}) => {

    const t = {
        ru: {
            home: 'Домой',
            profile: 'Анкета',
            comp: 'Совместимость',
            users: 'Пользователи',
            login: 'Войти',
            reg: 'Регистрация',
            gens: 'Гены',
            mutation: 'Добавить мутацию',
            logout: 'Выйти',
            about: 'О проекте',
            version: 'Версия'
        },
        en: {
            home: 'Home',
            profile: 'Profile',
            comp: 'Compatibility',
            users: 'Users',
            login: 'Login',
            reg: 'Registration',
            gens: 'Genes',
            mutation: 'Add mutation',
            logout: 'Logout',
            about: 'About',
            version: 'Version'
        }
    };

    const ruChangelog = 'https://github.com/Barklim/Genomus/blob/master/CHANGELOG_RU.md';
    const enChangelog = 'https://github.com/Barklim/Genomus/blob/master/CHANGELOG.md';

    let homeText = localStorage.getItem('genomusLang') === 'ru' ? t.ru.home : t.en.home;
    let profileText = localStorage.getItem('genomusLang') === 'ru' ? t.ru.profile : t.en.profile;
    let compText = localStorage.getItem('genomusLang') === 'ru' ? t.ru.comp : t.en.comp;
    let usersText = localStorage.getItem('genomusLang') === 'ru' ? t.ru.users : t.en.users;
    let loginText = localStorage.getItem('genomusLang') === 'ru' ? t.ru.login : t.en.login;
    let regText = localStorage.getItem('genomusLang') === 'ru' ? t.ru.reg : t.en.reg;
    let gensText = localStorage.getItem('genomusLang') === 'ru' ? t.ru.gens : t.en.gens;
    let mutationText = localStorage.getItem('genomusLang') === 'ru' ? t.ru.mutation : t.en.mutation;
    let logoutText = localStorage.getItem('genomusLang') === 'ru' ? t.ru.logout : t.en.logout;
    let aboutText = localStorage.getItem('genomusLang') === 'ru' ? t.ru.about : t.en.about;
    let versionText = localStorage.getItem('genomusLang') === 'ru' ? t.ru.version : t.en.version;
    let versionLink = localStorage.getItem('genomusLang') === 'ru' ? ruChangelog : enChangelog;
        
    const items = [
        {
            type:'navItem',
            icon:'home',
            text:homeText,
            link:'/',
            restricted:false
        },
        {
            type:'navItem',
            icon:'user-circle',
            text:profileText,
            link:'/user/user',
            restricted:true
        },
        {
            type:'navItem',
            icon:'venus-mars',
            text:compText,
            link:'/user/compat',
            restricted:true
        },
        {
            type:'navItem',
            icon:'address-card',
            text:usersText,
            link:'/user/register',
            restricted:true,
            exclude_for_user: true
        },
        {
            type:'navItem',
            icon:'angle-right',
            text:loginText,
            link:'/login',
            restricted:false,
            exclude:true,
            exclude_for_user: true
        },
        {
            type:'navItem',
            icon:'envelope-open',
            text:regText,
            link:'/user/registerScreen',
            restricted:false,
            exclude:true,
            exclude_for_user: true
        },
        // {
        //     type:'navItem',
        //     icon:'copy',
        //     text:'Анкеты',
        //     link:'/user/user-reviews',
        //     restricted:true,
        //     exclude_for_user: true
        // },
        {
            type:'navItem',
            icon:'edit',
            text:gensText,
            link:'/user/user-gens',
            restricted:true,
            exclude_for_user: true
        },
        // {
        //     type:'navItem',
        //     icon:'plus-circle',
        //     text:'Добавить анкету',
        //     link:'/user/add',
        //     restricted:true,
        //     exclude_for_user: true
        // },
        {
            type:'navItem',
            icon:'plus-circle',
            text:mutationText,
            link:'/gen/add',
            restricted:true,
            exclude_for_user: true
        },
        {
            type:'navItem',
            icon:'share-square',
            text:logoutText,
            link:'/user/logout',
            restricted:true,
        },
        {
            type:'navItem',
            icon:'question-circle',
            text:aboutText,
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

    const showItems = () => (
        user.login ?
            items.map((item,i)=>{
                if(user.login.isAuth) {
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
            <div className='navItem githubLink'>
                <a href='https://2020.igem.org/Team:Moscow-Russia/Attributions'>
                    <img 
                        alt='logoIgem' 
                        src={igem} 
                        className="logoIgem"
                    />
                </a>
                <a href='https://github.com/Barklim/Genomus'>
                    <img 
                        alt='logoGithub' 
                        src={logo} 
                        className="logoGithub"
                    />
                </a>
                <a href="mailto:igem.rsmu@gmail.com">
                    <img 
                        alt='mailTo' 
                        src={mail} 
                        className="mail"
                    />
                </a>

                <span>
                    <a 
                        href={versionLink}
                        className="version"
                    >
                        <div > 
                            {versionText} {versionObj.versionApp}
                        </div>
                    </a>
                </span>
            </div>
        </div>
    );
};

function mapStateToProps(state){
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(SidenavItems)