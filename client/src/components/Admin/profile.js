import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfileGen } from '../../actions';

class Profile extends Component {

    componentWillMount(){
        this.props.dispatch(getProfileGen(this.props.user.login.genId)) 
    }

    componentWillReceiveProps(nextProps){

        if( nextProps.user.profileGen[0] === undefined ){
            
           console.log('Herere!!!');

        } else {

            console.log(nextProps);
            console.log(nextProps.user.profileGen[0]);
            nextProps.user.profileGen[0].rule_0 === null ? nextProps.user.profileGen[0].rule_0 = 'н' : null 
            nextProps.user.profileGen[0].rule_1 === null ? nextProps.user.profileGen[0].rule_1 = 'н' : null 
            nextProps.user.profileGen[0].rule_2 === null ? nextProps.user.profileGen[0].rule_2 = 'н' : null 
            nextProps.user.profileGen[0].rule_3 === null ? nextProps.user.profileGen[0].rule_3 = 'н' : null 
            nextProps.user.profileGen[0].rule_4 === null ? nextProps.user.profileGen[0].rule_4 = 'н' : null
            nextProps.user.profileGen[0].rule_5 === null ? nextProps.user.profileGen[0].rule_5 = 'н' : null
            nextProps.user.profileGen[0].rule_6 === null ? nextProps.user.profileGen[0].rule_6 = 'н' : null
            nextProps.user.profileGen[0].rule_7 === null ? nextProps.user.profileGen[0].rule_7 = 'н' : null
            nextProps.user.profileGen[0].rule_8 === null ? nextProps.user.profileGen[0].rule_8 = 'н' : null
            nextProps.user.profileGen[0].rule_9 === null ? nextProps.user.profileGen[0].rule_9 = 'н' : null
            nextProps.user.profileGen[0].rule_10 === null ? nextProps.user.profileGen[0].rule_10 = 'н' : null
            nextProps.user.profileGen[0].rule_11 === null ? nextProps.user.profileGen[0].rule_11 = 'н' : null
            nextProps.user.profileGen[0].rule_12 === null ? nextProps.user.profileGen[0].rule_12 = 'н' : null
            nextProps.user.profileGen[0].rule_13 === null ? nextProps.user.profileGen[0].rule_13 = 'н' : null
            nextProps.user.profileGen[0].rule_14 === null ? nextProps.user.profileGen[0].rule_14 = 'н' : null
            nextProps.user.profileGen[0].rule_15 === null ? nextProps.user.profileGen[0].rule_15 = 'н' : null
            nextProps.user.profileGen[0].rule_16 === null ? nextProps.user.profileGen[0].rule_16 = 'н' : null
            nextProps.user.profileGen[0].rule_17 === null ? nextProps.user.profileGen[0].rule_17 = 'н' : null
            nextProps.user.profileGen[0].rule_18 === null ? nextProps.user.profileGen[0].rule_18 = 'н' : null
            nextProps.user.profileGen[0].rule_19 === null ? nextProps.user.profileGen[0].rule_19 = 'н' : null
            nextProps.user.profileGen[0].rule_20 === null ? nextProps.user.profileGen[0].rule_20 = 'н' : null
            nextProps.user.profileGen[0].rule_21 === null ? nextProps.user.profileGen[0].rule_21 = 'н' : null
            nextProps.user.profileGen[0].rule_22 === null ? nextProps.user.profileGen[0].rule_22 = 'н' : null
            nextProps.user.profileGen[0].rule_23 === null ? nextProps.user.profileGen[0].rule_23 = 'н' : null
            nextProps.user.profileGen[0].rule_24 === null ? nextProps.user.profileGen[0].rule_24 = 'н' : null
            nextProps.user.profileGen[0].rule_25 === null ? nextProps.user.profileGen[0].rule_25 = 'н' : null
            nextProps.user.profileGen[0].rule_26 === null ? nextProps.user.profileGen[0].rule_26 = 'н' : null
            nextProps.user.profileGen[0].rule_27 === null ? nextProps.user.profileGen[0].rule_27 = 'н' : null
            nextProps.user.profileGen[0].rule_28 === null ? nextProps.user.profileGen[0].rule_28 = 'н' : null
            nextProps.user.profileGen[0].rule_29 === null ? nextProps.user.profileGen[0].rule_29 = 'н' : null
        }
    }

    showUserPosts = (user) => (
        user.profileGen ? 
                        
            user.profileGen.map(item => (
                <tr key={item._id}>
                    <td>№ 1</td>
                    <td>CFTR: 3944delGT: {item.rule_0}</td>
                </tr>
            ))
        :null
    )

    showUserPosts2 = (user) => (
        user.profileGen ? 
                        
            user.profileGen.map(item => (
                <tr key={item._id}>
                    <td>№ 2</td>
                    <td>CFTR: 3944delGT: {item.rule_1}</td>
                </tr>
            ))
        :null
    )

    showUserPosts3 = (user) => (
        user.profileGen ? 
                        
            user.profileGen.map(item => (
                <tr key={item._id}>
                    <td>№ 3</td>
                    <td>CFTR: 3944delGT: {item.rule_0}</td>
                </tr>
            ))
        :null
    )

    showUserPosts4 = (user) => (
        user.profileGen ? 
                        
            user.profileGen.map(item => (
                <tr key={item._id}>
                    <td>№ 4</td>
                    <td>CFTR: 3944delGT: {item.rule_0}</td>
                </tr>
            ))
        :null
    )

    showUserPosts5 = (user) => (
        user.profileGen ? 
                        
            user.profileGen.map(item => (
                <tr key={item._id}>
                    <td>№ 5</td>
                    <td>CFTR: 3944delGT: {item.rule_0}</td>
                </tr>
            ))
        :null
    )

    showUserPosts6 = (user) => (
        user.profileGen ? 
                        
            user.profileGen.map(item => (
                <div key={item._id}>
                <tr>
                    <td>№ 6</td>
                    <td>CFTR: 3944delGT: {item.rule_0}</td>
                </tr>
                <tr>
                    <td>№ 16</td>
                    <td>16: 3944delGT: {item.rule_0}</td>
                </tr>
                </div>
            ))
        :null
    )

    render() {

        let user = this.props.user;
        //let user = this.props.user.login;

        //console.log(this.props);
    // var author = this.props.data.author,

    return (

        <div className="user_container">
            <div className="nfo">
                <h2>Данные о ваших мутациях:</h2>
    
                <div>
                <span> Замечание:</span>
                </div>
                <p>  Значение 0 в поле мутации означает отсутствие отклонения </p>
                <p>Если у вас одно из полей равно значению 1, это говорит о том, что вам необходимо проконсультироваться с врачом.
                Так как возможно , что у вас обнаружено нежелательная генетическая мутация</p>
                <p>Значение 'н', это значение по умолчанию. Ожидайте, в ближайшем времени поле будет заполено администратором</p>
                <p>Также слежует отметить, что если у вас и вашего "партнера", существует одна и та же  нежелательная мутация
                (у одной и тоже мутации стоят единицы), это означает высокую вероятность проявления этой мутации в "плохой" форме у ребёнка данной пары</p>

                <div>
                <span>Ваши результаты:</span>
                </div>

                <h4>Таблица мутаций:</h4>
                <table>
                    <tbody>
                        {this.showUserPosts(user)}
                        {this.showUserPosts2(user)}
                        {this.showUserPosts3(user)}
                        {this.showUserPosts4(user)}
                        {this.showUserPosts5(user)}
                        {this.showUserPosts6(user)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
}

//export default Profile;


function mapStateProps(state) {
    return {
        user:state.user
    }
}

export default connect(mapStateProps)(Profile);

