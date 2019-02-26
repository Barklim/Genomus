import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getUserGen, getOtherGen, getAllow } from '../../actions';
import QrReader from "react-qr-reader";

// getBook f0r get imf0 ab0ut all0ws

class Compat extends PureComponent {
    constructor(props) {
    super(props);
    this.state = {
        otherGenId:'',
        ownerId:this.props.user.login.genId,
        message:'',
        showFlaw:'',
        delay: 300,
        result: "No result",
        allowCheck: true,
        allowMessage: '',
    };
        this.handleScan = this.handleScan.bind(this);
    }
      handleScan(data) {
        if (data) {
          this.setState({
            result: data, 
            otherGenId: data
          });
            this.props.dispatch(getOtherGen(this.state.otherGenId)) // для д0г0 чд0бы прих0дили пр0псы
            this.setState({showFlaw:''});
            if (this.state.otherGenId.length !== 6 ) { 
                this.setState({showFlaw:true});
            }
        }
      }
      handleError(err) {
        console.error(err);
      }

    componentWillMount(){
        this.props.dispatch(getUserGen(this.props.user.login.genId))
        /*this.props.dispatch(getBook(this.props.user.login.id))*/
    }

/*    componentDidMount(){
        this.props.dispatch(getAllow(this.state.otherGenId))
    }*/

    componentWillReceiveProps(nextProps){

        if(nextProps.user.allow === undefined){
        } else {
            this.setState({allowCheck: nextProps.user.allow.allowCheck})
        } 

        if ( this.state.allowCheck === true ) {
            this.setState({allowMessage: true})
        } else {
            this.setState({allowMessage: false})
            this.setState({message:'ожидание ⏰'})
        }

/*        if( this.state.result !== 'No result'){
            this.setState({otherGen: this.state.result })
            this.setState({message:'ожидание'})
        } else*/

        // if(nextProps.user.otherGen === undefined || this.state.showFlaw === true ){

        if(nextProps.user.otherGen === undefined || nextProps.user.allow === undefined ){
            this.setState({message:'ожидание ⏰'})
            /*this.setState({result:'No result'})*/

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
                if (this.state.allowCheck === true) {
                    this.setState({message:'проблема ✘'})
                }
            } else {
                if (this.state.allowCheck === true) {
                    this.setState({message:'все хорошо ✔'})  
                }
            }

        // nextProps.user.otherGen.length !== 6
        console.log("MEXT");
        console.log(nextProps);

        }

    }

    handleInputId = (event) => {
        this.setState({otherGenId:event.target.value})
    } 

    handleCheckup(e) {
        e.preventDefault();

        /*this.setState({allowCheck: true})*/
        this.setState({result: 'No result' })
        this.setState({message:'ожидание ⏰'})
        this.setState({showFlaw:''}); 
        if (this.state.otherGenId.length !== 6 ) { 
            this.setState({showFlaw:true});
        }

        if ( this.state.otherGenId.length === 6 ) {
            this.props.dispatch(getAllow(this.state.otherGenId))
            this.props.dispatch(getOtherGen(this.state.otherGenId))
        } 

        console.log("handleCheckup");
        console.log(this.state);
        console.log(this.props);
    }
    btnError(err) {
        console.error(err);
    }

    submitForm = (e) => {
        e.prevetDefault();
    }

    render() {
        //let genId = this.props.genId;
        /*console.log(this.props);*/
        console.log("remder");
        console.log(this.state);
        console.log(this.props);

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
                                    type='string' 
                                    placeholder='Введите Genid'
                                    value={this.state.otherGenId}
                                    onChange={this.handleInputId}
                                />
                            </div>

                            <button     
                                type="submit"
                                onClick={(e) => this.handleCheckup(e)}
                                onError={this.btnError}
                                >Проверка
                            </button>

                            <div className={this.state.message === 'проблема ✘' ? 'trouble':'okey'}>
                                {this.state.message}
                            </div>

                            <h6>Дек0дир0вание qr:</h6>
                            <p>{this.state.result}</p>
                            <h6>Длина GemId:</h6>
                            {
                                this.state.showFlaw === true ? 
                                    <div className="">
                                        Genid должен быть шестизначным!
                                    </div>
                                :null
                            }

                            <h6>с00бшение 0 д0зв0лении:</h6>
                            {
                                this.state.allowCheck === false ? 
                                    <div className="">
                                        У вас нед в0зм0жн0сди пр0веридь, друг0й чел0век запредил!
                                    </div>
                                :null
                            }

                            <QrReader
                              delay={this.state.delay}
                              onError={this.handleError}
                              onScan={this.handleScan}
                              style={{ width: "95%" }}
                              className="qrReader"
                            />

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