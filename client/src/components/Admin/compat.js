import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getUserGen, getOtherGen } from '../../actions';

class Compat extends PureComponent {

    state = {
            otherGenId:'',
            ownerId:this.props.user.login.genId,
            message:''
    }

    componentWillMount(){
        this.props.dispatch(getUserGen(this.props.user.login.genId))
    }

 /*   // shieeeeeeeeeet
    componentWillReceiveProps(nextProps){
        if(nextProps.user.otherGen === undefined){
            this.setState({message:'Введите значение genId'})
        } else {
            if (nextProps.user.otherGen.rule_0 === nextProps.user.userGen.rule_0 === 1 )

                this.setState({message:'test2'})
             else {
                this.setState({message:'test3'})

            }
            //this.setState({message:'test2'})
            //console.log('!')
            //console.log(nextProps.user.otherGen)
        }

    }
    */

   /* componentWillReceiveProps(nextProps){
        if(nextProps.user.otherGen === undefined){
            this.setState({message:'Введите значение genId'})
        } else {

            for (var i = 0; i < 3 ; i++) {
                //var variable = ; 
                var re = /0/gi;
                var ruleOne = 'rule_0';
                var ruleSecond = 'rule_0';

                var ruleOne = ruleOne.replace(re, i);
                var ruleSecond = ruleSecond.replace(re, i);

                console.log(ruleOne, ruleSecond);

                //nextProps.user.otherGen.[rule_0] == 

                var test_1 = 'nextProps.user.otherGen.' + ruleOne;
                var test_2 = 'nextProps.user.userGen.' + ruleSecond;

                if (test_1 === test_2 === 1 ) {
                    console.log('!');
                }

                this.setState({message:'trouble'})
            }       
                //this.setState({message:'test2'})
            //this.setState({message:'test2'})
            //console.log('!')
            //console.log(nextProps.user.otherGen)
        }

    }*/

    // ищем здрововье, отметая больные варианты
     componentWillReceiveProps(nextProps){
        if(nextProps.user.otherGen === undefined){
            this.setState({message:'Ожидание'})
        } else {

            if (
                ((nextProps.user.otherGen.rule_0 === 1 ) && (nextProps.user.userGen.rule_0 === 1 )) ||
                ((nextProps.user.otherGen.rule_1 === 1 ) && (nextProps.user.userGen.rule_1 === 1 )) ||
                ((nextProps.user.otherGen.rule_2 === 1 ) && (nextProps.user.userGen.rule_2 === 1 )) ||
                ((nextProps.user.otherGen.rule_3 === 1 ) && (nextProps.user.userGen.rule_3 === 1 )) ||
                ((nextProps.user.otherGen.rule_4 === 1 ) && (nextProps.user.userGen.rule_4 === 1 )) ||
                ((nextProps.user.otherGen.rule_5 === 1 ) && (nextProps.user.userGen.rule_5 === 1 )) ||
                ((nextProps.user.otherGen.rule_6 === 1 ) && (nextProps.user.userGen.rule_6 === 1 )) ||
                ((nextProps.user.otherGen.rule_7 === 1 ) && (nextProps.user.userGen.rule_7 === 1 )) ||
                ((nextProps.user.otherGen.rule_8 === 1 ) && (nextProps.user.userGen.rule_8 === 1 )) ||
                ((nextProps.user.otherGen.rule_9 === 1 ) && (nextProps.user.userGen.rule_9 === 1 )) ||
                ((nextProps.user.otherGen.rule_10 === 1 ) && (nextProps.user.userGen.rule_10 === 1 )) ||
                ((nextProps.user.otherGen.rule_11 === 1 ) && (nextProps.user.userGen.rule_11 === 1 )) ||
                ((nextProps.user.otherGen.rule_12 === 1 ) && (nextProps.user.userGen.rule_12 === 1 )) ||
                ((nextProps.user.otherGen.rule_13 === 1 ) && (nextProps.user.userGen.rule_13 === 1 )) ||
                ((nextProps.user.otherGen.rule_14 === 1 ) && (nextProps.user.userGen.rule_14 === 1 )) ||
                ((nextProps.user.otherGen.rule_15 === 1 ) && (nextProps.user.userGen.rule_15 === 1 )) ||
                ((nextProps.user.otherGen.rule_16 === 1 ) && (nextProps.user.userGen.rule_16 === 1 )) ||
                ((nextProps.user.otherGen.rule_17 === 1 ) && (nextProps.user.userGen.rule_17 === 1 )) ||
                ((nextProps.user.otherGen.rule_18 === 1 ) && (nextProps.user.userGen.rule_18 === 1 )) ||
                ((nextProps.user.otherGen.rule_19 === 1 ) && (nextProps.user.userGen.rule_19 === 1 )) ||
                ((nextProps.user.otherGen.rule_20 === 1 ) && (nextProps.user.userGen.rule_20 === 1 )) ||
                ((nextProps.user.otherGen.rule_21 === 1 ) && (nextProps.user.userGen.rule_21 === 1 )) ||
                ((nextProps.user.otherGen.rule_22 === 1 ) && (nextProps.user.userGen.rule_22 === 1 )) ||
                ((nextProps.user.otherGen.rule_23 === 1 ) && (nextProps.user.userGen.rule_23 === 1 )) ||
                ((nextProps.user.otherGen.rule_24 === 1 ) && (nextProps.user.userGen.rule_24 === 1 )) ||
                ((nextProps.user.otherGen.rule_25 === 1 ) && (nextProps.user.userGen.rule_25 === 1 )) ||
                ((nextProps.user.otherGen.rule_26 === 1 ) && (nextProps.user.userGen.rule_26 === 1 )) ||
                ((nextProps.user.otherGen.rule_27 === 1 ) && (nextProps.user.userGen.rule_27 === 1 )) ||
                ((nextProps.user.otherGen.rule_28 === 1 ) && (nextProps.user.userGen.rule_28 === 1 )) ||
                ((nextProps.user.otherGen.rule_29 === 1 ) && (nextProps.user.userGen.rule_29 === 1 )) 
                ) {
                this.setState({message:'trouble'})
            } else {
                this.setState({message:'it s okay'})
                  
            }
                //this.setState({message:'test2'})
            //this.setState({message:'test2'})
            //console.log('!')
            //console.log(nextProps.user.otherGen)
        }

    }


    handleInputId = (event) => {
        this.setState({otherGenId:event.target.value})
    } 

    handleCheckup(e) {
        e.preventDefault();
        this.props.dispatch(getOtherGen(this.state.otherGenId))
    }



    submitForm = (e) => {
        e.prevetDefault();

        //this.setState({message:''});
    }
    //let user = props.user.login;
    //console.log(user);
    render() {
        //let genId = this.props.genId;

        //console.log(this.props);
        console.log(this.state);
        console.log(this.props.user);
        console.log(this.props.user.login.genId);
        return (
            <div className="user_container">
                <div className="nfo">
                    <div className="rl_container article">
                        <form onSubmit={this.submitForm}>
                            <div>
                            <span>Проверьте совместимость:</span>
                            </div>

                            <div className="form_element">
                                <input 
                                    type='number' 
                                    placeholder='Введите Qr-code'
                                    value={this.state.otherGenId}
                                    onChange={this.handleInputId}
                                />
                            </div>

                            <button type="submit"
                            onClick={(e) => this.handleCheckup(e)}
                            >Проверить</button>

                            <h6>Введите чужой genId в поле</h6>

                            <div className={this.state.message === 'trouble' ? 'trouble':'okey'}>
                                {this.state.message}
                            </div>
                            
                            <h6>Здесь вы можете посмотреть совместимость генетического кода с противоположным полом</h6>
                            <h6>Убедитесь, что в вашем профиле в полях проставлены значения</h6>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
}

function mapStateProps(state) {
    return {
        user:state.user
    }
}

export default connect(mapStateProps)(Compat);