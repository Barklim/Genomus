import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addBook, clearNewBook } from '../../actions'

class AddBook extends Component {

    state = {
        formdata:{
            name:'',
            author:'',
            review:'',
            pages:'',
            rating:9,
            price:'Муж',
            allowCheck: false,
            allowCompat: false
        }
    }


    handleInput = (event,name) => {
        const newFormdata = {
            ...this.state.formdata
        }
        newFormdata[name] = event.target.value

/*        if ( this.state.allowCheck === true && name === 'allowCheck' ) {
            newFormdata[name] = false
        } else {
            newFormdata[name] = true
        }*/

        if ( name === 'allowCheck' ) {
            if ( this.state.formdata.allowCheck === true ) {
                 newFormdata[name] = false
            } else {
                newFormdata[name] = true
            }
        } 

        if ( name === 'allowCompat' ) {
            if ( this.state.formdata.allowCompat === true ) {
                 newFormdata[name] = false
            } else {
                newFormdata[name] = true
            }
        } 

        this.setState({
            formdata:newFormdata
        })

    }

    showNewBook = (book) => (
        book.post ?
            <div className="conf_link">
                Вы создали анкету !!! <Link to={`/books/${book.bookId}`}>
                    Нажмите на ссылку, чтобы ее посмотреть
                </Link>
            </div>
        :null
    )


    submitForm = (e) => {
        e.preventDefault();
        this.props.dispatch(addBook({
            ...this.state.formdata,
            ownerId:this.props.user.login.id,
            genId:this.props.user.login.genId
        }))
    }

    componentWillUnmount(){
        this.props.dispatch(clearNewBook())
    }

    render() {
        console.log(this.state);
        console.log(this.newFormdata);
        return (
            <div className="rl_container article">
                <form onSubmit={this.submitForm}>
                    <h2>Создать анкету</h2>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите имя"
                            value={this.state.formdata.name}
                            onChange={(event)=>this.handleInput(event,'name')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите университет"
                            value={this.state.formdata.author}
                            onChange={(event)=>this.handleInput(event,'author')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Введите возраст"
                            value={this.state.formdata.pages}
                            onChange={(event)=>this.handleInput(event,'pages')}
                        />
                    </div>

                    <div className="form_element">
                        <select
                            className="select_box"
                            value={this.state.formdata.price}
                            onChange={(event)=>this.handleInput(event,'price')}
                        >   
                            <option val='Муж'>Муж</option>
                            <option val='Жен'>Жен</option>
                            <option val='Неизвестно'>Неизвестно</option>
                        </select>
                    </div>
                    
                    <div className="profile_table">
                    <table>
                        <thead>
                            <tr>
                                <td>Разрешать проверять совместимость</td>
                                <th>
                                    <div>
                                        <input
                                            className="profile_checkbox"
                                            type="checkbox"
                                            checked={this.state.allowCheck}
                                            onChange={(event)=>this.handleInput(event,'allowCheck')}
                                        />
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Отображать мою анкету при проверке совместимости</td>
                                <td>
                                    <div>
                                        <input
                                            className="profile_checkbox"
                                            type="checkbox"
                                            checked={this.state.allowCompat}
                                            onChange={(event)=>this.handleInput(event,'allowCompat')}
                                        />
                                    </div>                        
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>

                    <p>Информация о вас:</p>
                    <textarea
                        value={this.state.formdata.review}
                        onChange={(event)=>this.handleInput(event,'review')}
                    />

                    <button type="submit">Создать</button>
                    {
                        this.props.books.newbook ? 
                            this.showNewBook(this.props.books.newbook)
                        :null
                    }
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        books:state.books
    }
}

export default connect(mapStateToProps)(AddBook)