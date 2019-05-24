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
            nextProps.user.profileGen[0].rule_0 === null ? nextProps.user.profileGen[0].rule_0 = 'н' : nextProps.user.profileGen[0].rule_0 = nextProps.user.profileGen[0].rule_0
            nextProps.user.profileGen[0].rule_1 === null ? nextProps.user.profileGen[0].rule_1 = 'н' : nextProps.user.profileGen[0].rule_1 = nextProps.user.profileGen[0].rule_1 
            nextProps.user.profileGen[0].rule_2 === null ? nextProps.user.profileGen[0].rule_2 = 'н' : nextProps.user.profileGen[0].rule_2 = nextProps.user.profileGen[0].rule_2
            nextProps.user.profileGen[0].rule_3 === null ? nextProps.user.profileGen[0].rule_3 = 'н' : nextProps.user.profileGen[0].rule_3 = nextProps.user.profileGen[0].rule_3 
            nextProps.user.profileGen[0].rule_4 === null ? nextProps.user.profileGen[0].rule_4 = 'н' : nextProps.user.profileGen[0].rule_4 = nextProps.user.profileGen[0].rule_4
            nextProps.user.profileGen[0].rule_5 === null ? nextProps.user.profileGen[0].rule_5 = 'н' : nextProps.user.profileGen[0].rule_5 = nextProps.user.profileGen[0].rule_5
            nextProps.user.profileGen[0].rule_6 === null ? nextProps.user.profileGen[0].rule_6 = 'н' : nextProps.user.profileGen[0].rule_6 = nextProps.user.profileGen[0].rule_6
            nextProps.user.profileGen[0].rule_7 === null ? nextProps.user.profileGen[0].rule_7 = 'н' : nextProps.user.profileGen[0].rule_7 = nextProps.user.profileGen[0].rule_7
            nextProps.user.profileGen[0].rule_8 === null ? nextProps.user.profileGen[0].rule_8 = 'н' : nextProps.user.profileGen[0].rule_8 = nextProps.user.profileGen[0].rule_8
            nextProps.user.profileGen[0].rule_9 === null ? nextProps.user.profileGen[0].rule_9 = 'н' : nextProps.user.profileGen[0].rule_9 = nextProps.user.profileGen[0].rule_9
            nextProps.user.profileGen[0].rule_10 === null ? nextProps.user.profileGen[0].rule_10 = 'н' : nextProps.user.profileGen[0].rule_10 = nextProps.user.profileGen[0].rule_10
            nextProps.user.profileGen[0].rule_11 === null ? nextProps.user.profileGen[0].rule_11 = 'н' : nextProps.user.profileGen[0].rule_11 = nextProps.user.profileGen[0].rule_11
            nextProps.user.profileGen[0].rule_12 === null ? nextProps.user.profileGen[0].rule_12 = 'н' : nextProps.user.profileGen[0].rule_12 = nextProps.user.profileGen[0].rule_12
            nextProps.user.profileGen[0].rule_13 === null ? nextProps.user.profileGen[0].rule_13 = 'н' : nextProps.user.profileGen[0].rule_13 = nextProps.user.profileGen[0].rule_13
            nextProps.user.profileGen[0].rule_14 === null ? nextProps.user.profileGen[0].rule_14 = 'н' : nextProps.user.profileGen[0].rule_14 = nextProps.user.profileGen[0].rule_14
            nextProps.user.profileGen[0].rule_15 === null ? nextProps.user.profileGen[0].rule_15 = 'н' : nextProps.user.profileGen[0].rule_15 = nextProps.user.profileGen[0].rule_15
            nextProps.user.profileGen[0].rule_16 === null ? nextProps.user.profileGen[0].rule_16 = 'н' : nextProps.user.profileGen[0].rule_16 = nextProps.user.profileGen[0].rule_16
            nextProps.user.profileGen[0].rule_17 === null ? nextProps.user.profileGen[0].rule_17 = 'н' : nextProps.user.profileGen[0].rule_17 = nextProps.user.profileGen[0].rule_17
            nextProps.user.profileGen[0].rule_18 === null ? nextProps.user.profileGen[0].rule_18 = 'н' : nextProps.user.profileGen[0].rule_18 = nextProps.user.profileGen[0].rule_18
            nextProps.user.profileGen[0].rule_19 === null ? nextProps.user.profileGen[0].rule_19 = 'н' : nextProps.user.profileGen[0].rule_19 = nextProps.user.profileGen[0].rule_19
            nextProps.user.profileGen[0].rule_20 === null ? nextProps.user.profileGen[0].rule_20 = 'н' : nextProps.user.profileGen[0].rule_20 = nextProps.user.profileGen[0].rule_20
            nextProps.user.profileGen[0].rule_21 === null ? nextProps.user.profileGen[0].rule_21 = 'н' : nextProps.user.profileGen[0].rule_21 = nextProps.user.profileGen[0].rule_21
            nextProps.user.profileGen[0].rule_22 === null ? nextProps.user.profileGen[0].rule_22 = 'н' : nextProps.user.profileGen[0].rule_22 = nextProps.user.profileGen[0].rule_22
            nextProps.user.profileGen[0].rule_23 === null ? nextProps.user.profileGen[0].rule_23 = 'н' : nextProps.user.profileGen[0].rule_23 = nextProps.user.profileGen[0].rule_23
            nextProps.user.profileGen[0].rule_24 === null ? nextProps.user.profileGen[0].rule_24 = 'н' : nextProps.user.profileGen[0].rule_24 = nextProps.user.profileGen[0].rule_24
            nextProps.user.profileGen[0].rule_25 === null ? nextProps.user.profileGen[0].rule_25 = 'н' : nextProps.user.profileGen[0].rule_25 = nextProps.user.profileGen[0].rule_25
            nextProps.user.profileGen[0].rule_26 === null ? nextProps.user.profileGen[0].rule_26 = 'н' : nextProps.user.profileGen[0].rule_26 = nextProps.user.profileGen[0].rule_26
            nextProps.user.profileGen[0].rule_27 === null ? nextProps.user.profileGen[0].rule_27 = 'н' : nextProps.user.profileGen[0].rule_27 = nextProps.user.profileGen[0].rule_27
            nextProps.user.profileGen[0].rule_28 === null ? nextProps.user.profileGen[0].rule_28 = 'н' : nextProps.user.profileGen[0].rule_28 = nextProps.user.profileGen[0].rule_28
            nextProps.user.profileGen[0].rule_29 === null ? nextProps.user.profileGen[0].rule_29 = 'н' : nextProps.user.profileGen[0].rule_29 = nextProps.user.profileGen[0].rule_29
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

    showUserPosts = (user) => (
        user.profileGen ? 
                        
            user.profileGen.map(item => (
                <tbody key={item._id}>

                    <tr>
                        <td>Num</td>
                        <td>Знач.</td>
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
                    {this.showUserPosts(user)}
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

