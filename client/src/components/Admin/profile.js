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

            let profileGen1 = nextProps.user.profileGen[0].rule_0 ? 'да' : 'нет';
            let profileGen2 = nextProps.user.profileGen[0].rule_1 ? 'да' : 'нет';
            let profileGen3 = nextProps.user.profileGen[0].rule_2 ? 'да' : 'нет';
            let profileGen4 = nextProps.user.profileGen[0].rule_3 ? 'да' : 'нет';
            let profileGen5 = nextProps.user.profileGen[0].rule_4 ? 'да' : 'нет';
            let profileGen6 = nextProps.user.profileGen[0].rule_5 ? 'да' : 'нет';
            let profileGen7 = nextProps.user.profileGen[0].rule_6 ? 'да' : 'нет';
            let profileGen8 = nextProps.user.profileGen[0].rule_7 ? 'да' : 'нет';
            let profileGen9 = nextProps.user.profileGen[0].rule_8 ? 'да' : 'нет';
            let profileGen10 = nextProps.user.profileGen[0].rule_9 ? 'да' : 'нет';
            let profileGen11 = nextProps.user.profileGen[0].rule_10 ? 'да' : 'нет';
            let profileGen12 = nextProps.user.profileGen[0].rule_11 ? 'да' : 'нет';
            let profileGen13 = nextProps.user.profileGen[0].rule_12 ? 'да' : 'нет';
            let profileGen14 = nextProps.user.profileGen[0].rule_13 ? 'да' : 'нет';
            let profileGen15 = nextProps.user.profileGen[0].rule_14 ? 'да' : 'нет';
            let profileGen16 = nextProps.user.profileGen[0].rule_15 ? 'да' : 'нет';
            let profileGen17 = nextProps.user.profileGen[0].rule_16 ? 'да' : 'нет';
            let profileGen18 = nextProps.user.profileGen[0].rule_17 ? 'да' : 'нет';
            let profileGen19 = nextProps.user.profileGen[0].rule_18 ? 'да' : 'нет';
            let profileGen20 = nextProps.user.profileGen[0].rule_19 ? 'да' : 'нет';
            let profileGen21 = nextProps.user.profileGen[0].rule_20 ? 'да' : 'нет';
            let profileGen22 = nextProps.user.profileGen[0].rule_21 ? 'да' : 'нет';
            let profileGen23 = nextProps.user.profileGen[0].rule_22 ? 'да' : 'нет';
            let profileGen24 = nextProps.user.profileGen[0].rule_23 ? 'да' : 'нет';
            let profileGen25 = nextProps.user.profileGen[0].rule_24 ? 'да' : 'нет';
            let profileGen26 = nextProps.user.profileGen[0].rule_25 ? 'да' : 'нет';
            let profileGen27 = nextProps.user.profileGen[0].rule_26 ? 'да' : 'нет';
            let profileGen28 = nextProps.user.profileGen[0].rule_27 ? 'да' : 'нет';
            let profileGen29 = nextProps.user.profileGen[0].rule_28 ? 'да' : 'нет';
            let profileGen30 = nextProps.user.profileGen[0].rule_29 ? 'да' : 'нет';


            nextProps.user.profileGen[0].rule_0 === null ? nextProps.user.profileGen[0].rule_0 = 'н/д' : nextProps.user.profileGen[0].rule_0 = profileGen1
            nextProps.user.profileGen[0].rule_1 === null ? nextProps.user.profileGen[0].rule_1 = 'н/д' : nextProps.user.profileGen[0].rule_1 = profileGen2 
            nextProps.user.profileGen[0].rule_2 === null ? nextProps.user.profileGen[0].rule_2 = 'н/д' : nextProps.user.profileGen[0].rule_2 = profileGen3
            nextProps.user.profileGen[0].rule_3 === null ? nextProps.user.profileGen[0].rule_3 = 'н/д' : nextProps.user.profileGen[0].rule_3 = profileGen4 
            nextProps.user.profileGen[0].rule_4 === null ? nextProps.user.profileGen[0].rule_4 = 'н/д' : nextProps.user.profileGen[0].rule_4 = profileGen5
            nextProps.user.profileGen[0].rule_5 === null ? nextProps.user.profileGen[0].rule_5 = 'н/д' : nextProps.user.profileGen[0].rule_5 = profileGen6
            nextProps.user.profileGen[0].rule_6 === null ? nextProps.user.profileGen[0].rule_6 = 'н/д' : nextProps.user.profileGen[0].rule_6 = profileGen7
            nextProps.user.profileGen[0].rule_7 === null ? nextProps.user.profileGen[0].rule_7 = 'н/д' : nextProps.user.profileGen[0].rule_7 = profileGen8
            nextProps.user.profileGen[0].rule_8 === null ? nextProps.user.profileGen[0].rule_8 = 'н/д' : nextProps.user.profileGen[0].rule_8 = profileGen9
            nextProps.user.profileGen[0].rule_9 === null ? nextProps.user.profileGen[0].rule_9 = 'н/д' : nextProps.user.profileGen[0].rule_9 = profileGen10
            nextProps.user.profileGen[0].rule_10 === null ? nextProps.user.profileGen[0].rule_10 = 'н/д' : nextProps.user.profileGen[0].rule_10 = profileGen11
            nextProps.user.profileGen[0].rule_11 === null ? nextProps.user.profileGen[0].rule_11 = 'н/д' : nextProps.user.profileGen[0].rule_11 = profileGen12
            nextProps.user.profileGen[0].rule_12 === null ? nextProps.user.profileGen[0].rule_12 = 'н/д' : nextProps.user.profileGen[0].rule_12 = profileGen13
            nextProps.user.profileGen[0].rule_13 === null ? nextProps.user.profileGen[0].rule_13 = 'н/д' : nextProps.user.profileGen[0].rule_13 = profileGen14
            nextProps.user.profileGen[0].rule_14 === null ? nextProps.user.profileGen[0].rule_14 = 'н/д' : nextProps.user.profileGen[0].rule_14 = profileGen15
            nextProps.user.profileGen[0].rule_15 === null ? nextProps.user.profileGen[0].rule_15 = 'н/д' : nextProps.user.profileGen[0].rule_15 = profileGen16
            nextProps.user.profileGen[0].rule_16 === null ? nextProps.user.profileGen[0].rule_16 = 'н/д' : nextProps.user.profileGen[0].rule_16 = profileGen17
            nextProps.user.profileGen[0].rule_17 === null ? nextProps.user.profileGen[0].rule_17 = 'н/д' : nextProps.user.profileGen[0].rule_17 = profileGen18
            nextProps.user.profileGen[0].rule_18 === null ? nextProps.user.profileGen[0].rule_18 = 'н/д' : nextProps.user.profileGen[0].rule_18 = profileGen19
            nextProps.user.profileGen[0].rule_19 === null ? nextProps.user.profileGen[0].rule_19 = 'н/д' : nextProps.user.profileGen[0].rule_19 = profileGen20
            nextProps.user.profileGen[0].rule_20 === null ? nextProps.user.profileGen[0].rule_20 = 'н/д' : nextProps.user.profileGen[0].rule_20 = profileGen21
            nextProps.user.profileGen[0].rule_21 === null ? nextProps.user.profileGen[0].rule_21 = 'н/д' : nextProps.user.profileGen[0].rule_21 = profileGen22
            nextProps.user.profileGen[0].rule_22 === null ? nextProps.user.profileGen[0].rule_22 = 'н/д' : nextProps.user.profileGen[0].rule_22 = profileGen23
            nextProps.user.profileGen[0].rule_23 === null ? nextProps.user.profileGen[0].rule_23 = 'н/д' : nextProps.user.profileGen[0].rule_23 = profileGen24
            nextProps.user.profileGen[0].rule_24 === null ? nextProps.user.profileGen[0].rule_24 = 'н/д' : nextProps.user.profileGen[0].rule_24 = profileGen25
            nextProps.user.profileGen[0].rule_25 === null ? nextProps.user.profileGen[0].rule_25 = 'н/д' : nextProps.user.profileGen[0].rule_25 = profileGen26
            nextProps.user.profileGen[0].rule_26 === null ? nextProps.user.profileGen[0].rule_26 = 'н/д' : nextProps.user.profileGen[0].rule_26 = profileGen27
            nextProps.user.profileGen[0].rule_27 === null ? nextProps.user.profileGen[0].rule_27 = 'н/д' : nextProps.user.profileGen[0].rule_27 = profileGen28
            nextProps.user.profileGen[0].rule_28 === null ? nextProps.user.profileGen[0].rule_28 = 'н/д' : nextProps.user.profileGen[0].rule_28 = profileGen29
            nextProps.user.profileGen[0].rule_29 === null ? nextProps.user.profileGen[0].rule_29 = 'н/д' : nextProps.user.profileGen[0].rule_29 = profileGen30
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

    // showEmptyMessage = (user) => (
        
    // )

    showEmptyMessage = (data) => (
        //console.log(user)
        // user ?
        data ?
            <p>Информация отсутсвует в базе данных.</p>
        : null
    )

    showUserPosts = (user) => (
        user.profileGen ? 
                        
            user.profileGen.map(item => (
                <tbody key={item._id}>

                    <tr>
                        <td>Num</td>
                        <td class='fixCell'>Значение</td>
                        <td>Название</td>
                    </tr>

                    <tr>
                        <td>№ 1</td>
                        <td>{item.rule_0}</td>
                        <td>CFTR: 3944delGT  </td>
                    </tr>


                    <tr>
                        <td>№ 2</td>
                        <td>{item.rule_1} </td>
                        <td>CFTR: F508del </td>
                    </tr>

                    <tr>
                        <td>№ 3</td>
                        <td>{item.rule_2} </td>
                        <td>CFTR: K285N </td>
                    </tr>

                    <tr>
                        <td>№ 4</td>
                        <td>{item.rule_3} </td>
                        <td> CFTR: N1303K</td>
                    </tr>

                    <tr>
                        <td>№ 5</td>
                        <td>{item.rule_4}</td>
                        <td>CFTR: 1677delTA</td>
                    </tr>

                    <tr>
                        <td>№ 6</td>
                        <td>{item.rule_5}</td>
                        <td> CFTR: 3849+10kbC>T </td>
                    </tr>

                    <tr>
                        <td>№ 7</td>
                        <td>{item.rule_6}</td>
                        <td> PAH: IVS10nt546 </td>
                    </tr>

                    <tr>
                        <td>№ 8</td>
                        <td>{item.rule_7}</td>
                        <td> CFTR: W1282X </td>
                    </tr>

                    <tr>
                        <td>№ 9</td>
                        <td>{item.rule_8}</td>
                        <td> PAH: R261Q </td>
                    </tr>

                    <tr>
                        <td>№ 10</td>
                        <td>{item.rule_9}</td>
                        <td> CFTR: E92K</td>
                    </tr>

                    <tr>
                        <td>№ 11</td>
                        <td>{item.rule_10}</td>
                        <td> PAH: E280K </td>
                    </tr>

                    <tr>
                        <td>№ 12</td>
                        <td>{item.rule_11}</td>
                        <td> PAH: R408W </td>
                    </tr>

                    <tr>
                        <td>№ 13</td>
                        <td>{item.rule_12}</td>
                        <td> PAH: P281L </td>
                    </tr>

                    <tr>
                        <td>№ 14</td>
                        <td>{item.rule_13}</td>
                        <td> CFTR: G542X </td>
                    </tr>

                    <tr>
                        <td>№ 15</td>
                        <td>{item.rule_14}</td>
                        <td> PAH: IVS12+1G>A </td>
                    </tr>

                    <tr>
                        <td>№ 16</td>
                        <td>{item.rule_15}</td>
                        <td> PAH: Y414C </td>
                    </tr>

                    <tr>
                        <td>№ 17</td>
                        <td>{item.rule_16}</td>
                        <td> PAH: IVS4+5G>T</td>
                    </tr>

                    <tr>
                        <td>№ 18</td>
                        <td>{item.rule_17}</td>
                        <td>PAH: R158Q </td>
                    </tr>

                    <tr>
                        <td>№ 19</td>
                        <td>{item.rule_18}</td>
                        <td> CFTR: 2143delT</td>
                    </tr>

                    <tr>
                        <td>№ 20</td>
                        <td>{item.rule_19}</td>
                        <td> CFTR: R334W </td>
                    </tr>

                    <tr>
                        <td>№ 21</td>
                        <td>{item.rule_20}</td>
                        <td> PAH: R252W </td>
                    </tr>

                    <tr>
                        <td>№ 22</td>
                        <td>{item.rule_21}</td>
                        <td> CFTR: 394delTT </td>
                    </tr>

                    <tr>
                        <td>№ 23</td>
                        <td>{item.rule_22}</td>
                        <td> CFTR: 2184insA</td>
                    </tr>

                    <tr>
                        <td>№ 24</td>
                        <td>{item.rule_23}</td>
                        <td> CFTR: 3821delT</td>
                    </tr>

                    <tr>
                        <td>№ 25</td>
                        <td>{item.rule_24}</td>
                        <td> CFTR: S466X </td>
                    </tr>

                    <tr>
                        <td>№ 26</td>
                        <td>{item.rule_25}</td>
                        <td> GALT: N314D</td>
                    </tr>

                    <tr>
                        <td>№ 27</td>
                        <td>{item.rule_26}</td>
                        <td> GJB2: 35delG </td>
                    </tr>

                    <tr>
                        <td>№ 28</td>
                        <td>{item.rule_27}</td>
                        <td> CFTR: dele2,3 (21kb) </td>
                    </tr>

                    <tr>
                        <td>№ 29</td>
                        <td>{item.rule_28}</td>
                        <td> PAH: D222X</td>
                    </tr>

                    <tr>
                        <td>№ 30</td>
                        <td>{item.rule_29}</td>
                        <td> GALT: Q188R</td>
                    </tr>

                </tbody>
            ))
        :null
    )

    render() {

        let user = this.props.user;
        //let user = this.props.user.login;
        let userData = user.profileGen ? !user.profileGen[0] : false;

        //console.log('this.props');
        // console.log(user.profileGen);
        // console.log(user);
        //console.log(userData);




        //console.log(this.props);
    // var author = this.props.data.author,

    return (

        <div className="user_container">
            <div className="nfo">
                <h2>Данные о ваших мутациях:</h2>
    
                <div>
                    <span> Замечание:</span>
                </div>
                <p>Значение н/д, означает нет данных. Ожидайте, в ближайшем времени поле будет заполено администратором</p>
                <p>Также слежует отметить, что если у вас и вашего "партнера", существует одна и та же  нежелательная мутация
                (у одной и тоже мутации стоят единицы), это означает высокую вероятность проявления этой мутации в "плохой" форме у ребёнка данной пары</p>

                <div>
                    <span>Ваши результаты:</span>
                </div>

                <h4>Таблица мутаций:</h4>
                <table>
                    {this.showUserPosts(user)}
                </table>

                {this.showEmptyMessage(userData)}

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

