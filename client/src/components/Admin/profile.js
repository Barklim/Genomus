import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfileGen } from '../../actions';

class Profile extends Component {

    componentWillMount(){
        this.props.dispatch(getProfileGen(this.props.user.login.genId)) 
    }

    componentWillReceiveProps(nextProps){

        if(nextProps.user.profileGen === undefined ){
            
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
                    <td>{item.rule_0}</td>
                    <td>{item.rule_1}</td>
                    <td>{item.rule_2}</td>
                    <td>{item.rule_3}</td>
                    <td>{item.rule_4}</td>
                </tr>
            ))
        :null
    )

    showUserPosts2 = (user) => (
        user.profileGen ? 
                        
            user.profileGen.map(item => (
                <tr key={item._id}>
                    <td>{item.rule_5}</td>
                    <td>{item.rule_6}</td>
                    <td>{item.rule_7}</td>
                    <td>{item.rule_8}</td>
                    <td>{item.rule_9}</td>
                </tr>
            ))
        :null
    )

    showUserPosts3 = (user) => (
        user.profileGen ? 
                        
            user.profileGen.map(item => (
                <tr key={item._id}>
                    <td>{item.rule_10}</td>
                    <td>{item.rule_11}</td>
                    <td>{item.rule_12}</td>
                    <td>{item.rule_13}</td>
                    <td>{item.rule_14}</td>
                </tr>
            ))
        :null
    )

    showUserPosts4 = (user) => (
        user.profileGen ? 
                        
            user.profileGen.map(item => (
                <tr key={item._id}>
                    <td>{item.rule_15}</td>
                    <td>{item.rule_16}</td>
                    <td>{item.rule_17}</td>
                    <td>{item.rule_18}</td>
                    <td>{item.rule_19}</td>
                </tr>
            ))
        :null
    )

    showUserPosts5 = (user) => (
        user.profileGen ? 
                        
            user.profileGen.map(item => (
                <tr key={item._id}>
                    <td>{item.rule_20}</td>
                    <td>{item.rule_21}</td>
                    <td>{item.rule_22}</td>
                    <td>{item.rule_23}</td>
                    <td>{item.rule_24}</td>
                </tr>
            ))
        :null
    )

    showUserPosts6 = (user) => (
        user.profileGen ? 
                        
            user.profileGen.map(item => (
                <tr key={item._id}>
                    <td>{item.rule_25}</td>
                    <td>{item.rule_26}</td>
                    <td>{item.rule_27}</td>
                    <td>{item.rule_28}</td>
                    <td>{item.rule_29}</td>
                </tr>
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
                    <thead>
                        <tr>
                            <th>№ 1</th>
                            <th>№ 2</th>
                            <th>№ 3</th>
                            <th>№ 4</th>
                            <th>№ 5</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.showUserPosts(user)}
                    </tbody>
                    <thead>
                        <tr>
                            <th>№ 6</th>
                            <th>№ 7</th>
                            <th>№ 8</th>
                            <th>№ 9</th>
                            <th>№ 10</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showUserPosts2(user)}
                    </tbody>
                    <thead>
                        <tr>
                            <th>№ 11</th>
                            <th>№ 12</th>
                            <th>№ 13</th>
                            <th>№ 14</th>
                            <th>№ 15</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showUserPosts3(user)}
                    </tbody>
                    <thead>
                        <tr>
                            <th>№ 16</th>
                            <th>№ 17</th>
                            <th>№ 18</th>
                            <th>№ 19</th>
                            <th>№ 20</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showUserPosts4(user)}
                    </tbody>
                    <thead>
                        <tr>
                            <th>№ 21</th>
                            <th>№ 22</th>
                            <th>№ 23</th>
                            <th>№ 24</th>
                            <th>№ 25</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showUserPosts5(user)}
                    </tbody>
                    <thead>
                        <tr>
                            <th>№ 26</th>
                            <th>№ 27</th>
                            <th>№ 28</th>
                            <th>№ 29</th>
                            <th>№ 30</th>
                        </tr>
                    </thead>
                    <tbody>
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

