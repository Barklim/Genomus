import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfileGen } from '../../actions';
import { Link } from 'react-router-dom';

class Profile extends Component {

    componentWillMount(){
        this.props.dispatch(getProfileGen(this.props.user.login.genId)) 
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
        console.log(this.props);
    //console.log(props);
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
                <p>Значение 2, это значение по умолчанию. Ожидайте, в ближайшем времени поле будет заполено администратором</p>
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
        user:state.user,
        igen:state.igen
    }
}

export default connect(mapStateProps)(Profile);

