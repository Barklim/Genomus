import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getAllow, getBookCompat, userCompatGens } from '../../actions'; // getUserGen, getOtherGen
import QrReader from "react-qr-reader";
import { Link } from 'react-router-dom';

import BookItem from '../../widgetsUI/book_item';

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
        allowShow: false,
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
            //this.props.dispatch(getOtherGen(this.state.otherGenId)) // для д0г0 чд0бы прих0дили пр0псы
            //this.props.dispatch(getBookCompat(this.state.otherGenId))
            this.setState({showFlaw:''});
            if (this.state.otherGenId.length !== 6 ) { 
                this.setState({showFlaw:true});
            }
        }
      }
      handleError(err) {
        console.error(err);
      }

    showUserConfig = (user) => (
        user.book_allow ? 
            
            user.book_allow.map(item => (
                <div key={item._id}>
                    <Link to={
                        `/user/edit-post/${item._id}`
                    }>
                    <BookItem {...item} key={item._id}/>
                    </Link>
                </div>
            ))
        :null
    )

    componentWillMount(){
        //this.props.dispatch(getUserGen(this.props.user.login.genId))
    }

    componentWillReceiveProps(nextProps){

        console.log("MEXT");
        console.log(nextProps);
        console.log(nextProps.user.userCompatGens);

        if(nextProps.user.allow === undefined){
        } else {
            this.setState({allowCheck: nextProps.user.allow.allowCheck});
            this.setState({allowShow: nextProps.user.allow.allowShow});
        } 

        if ( this.state.allowCheck === true ) {
            this.setState({allowMessage: true})
        } else {
            this.setState({allowMessage: false})
            this.setState({message:'ожидание ⏰'})
        }

        if(nextProps.user.allow === undefined || nextProps.user.userCompatGens === undefined ){ // nextProps.user.otherGen === undefined ||
            this.setState({message:'ожидание ⏰'})
        } else {

        console.log("MEXT2");
        console.log(nextProps);
        console.log(nextProps.user.userCompatGens.message);

            if ( nextProps.user.userCompatGens.message === 'bad' ) // п0иск пр0блемы
            {
                if (this.state.allowCheck === true) {
                    this.setState({message:'проблема ✘'})
                }
            } else {
                if (this.state.allowCheck === true) {
                    this.setState({message:'все хорошо ✔'})  
                }
            }
        }
    }

    handleInputId = (event) => {
        this.setState({otherGenId:event.target.value})
    } 

    handleCheckup(e) {
        e.preventDefault();

        this.setState({result: 'No result' })
        this.setState({message:'ожидание ⏰'})
        this.setState({showFlaw:''}); 
        if (this.state.otherGenId.length !== 6 ) { 
            this.setState({showFlaw:true});
        }

        if ( this.state.otherGenId.length === 6 ) {
            this.props.dispatch(getAllow(this.state.otherGenId))
            //this.props.dispatch(getOtherGen(this.state.otherGenId))

            console.log("ATTEMTIM !!!");
            console.log(this.state);
            console.log(this.props.user.login.genId);
            this.props.dispatch(userCompatGens(this.props.user.login.genId, this.state.otherGenId))

            this.props.dispatch(getBookCompat(this.state.otherGenId))
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
        let user = this.props.user;
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
                                    type='text' 
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

                            {
                                this.state.showFlaw === true ? 
                                    <div className="warning-msg">
                                        ⚠ GenId должен быть шестизначным! 
                                    </div>
                                :null
                            }

                            {
                                this.state.allowCheck === false ? 
                                    <div className="warning-msg">
                                        ⚠ Пользователь не разрешал сравнивать!
                                    </div>
                                :null
                            }

                            {
                                this.state.allowShow === true ? 
                                    <div className = 'none-nfo'>
                                        {this.showUserConfig(user)}
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

/*                            <h6>Дек0дир0вание qr:</h6>
                                <p>{this.state.result}</p>*/