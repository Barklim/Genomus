import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBook, updateBook, clearBook, deleteBook } from '../../actions'

class EditBook extends PureComponent {

    state = {
        formdata:{
            _id:this.props.match.params.id,
            name:'',
            author:'',
            review:'',
            pages:'',
            //rating:'',
            price:'',
            img_url:'',
            allowCheck: false,
            allowCompat: false,
            allowShow: false,
        }
    }

    handleInput = (event,name) => {
        const newFormdata = {
            ...this.state.formdata
        }
        newFormdata[name] = event.target.value

/*        if ( name === 'allowCheck' ) {
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
        } */

        if ( name === 'allowCheck' ) {
            newFormdata[name] = event.target.checked

            if ( this.state.formdata.allowCheck === true ) {
                //newFormdata[name] = false
            } else {
                //newFormdata[name] = true
            }
        } 

        if ( name === 'allowCompat' ) {
            newFormdata[name] = event.target.checked

            if ( this.state.formdata.allowCompat === true ) {
                //newFormdata[name] = false
            } else {
                //newFormdata[name] = true
            }
        } 

        if ( name === 'allowShow' ) {
            newFormdata[name] = event.target.checked

            if ( this.state.formdata.allowShow === true ) {
                //newFormdata[name] = false
            } else {
                //newFormdata[name] = true
            }
        } 

        this.setState({
            formdata:newFormdata
        })
    }


    submitForm = (e) => {
        e.preventDefault();
        this.props.dispatch(updateBook(this.state.formdata))
    }

    deletePost = () => {
        this.props.dispatch(deleteBook(this.props.match.params.id))
    }
    redirectUser = () => {
        setTimeout(()=>{
            this.props.history.push('/')
        },1000)
    }

    componentWillMount(){
        this.props.dispatch(getBook(this.props.match.params.id))
    }

    componentWillReceiveProps(nextProps){
        let book = nextProps.books.book;
        this.setState({
            formdata:{
                _id:book._id,
                name:book.name,
                author:book.author,
                review:book.review,
                pages:book.pages,
                //rating:book.rating,
                price:book.price,
                img_url:book.img_url,
                allowCheck:book.allowCheck,
                allowCompat:book.allowCompat,
                allowShow:book.allowShow 
            }
        })
    }

    componentWillUnmount(){
        this.props.dispatch(clearBook())
    }

    render() {
        let books = this.props.books;
        console.log(this.props);
        console.log("this.state");
        console.log(this.state);
        return (
            <div className="rl_container article">
                {
                    books.updateBook ? 
                        <div className="edit_confirm">
                            анкета обновлена , <Link to={`/books/${books.book._id}`}>
                                Кликните сюда чтобы посмотреть анкету
                            </Link>
                        </div>
                    :null
                }
                {
                    books.postDeleted ? 
                        <div className="red_tag">
                            Анкета удалена
                            {this.redirectUser()}
                        </div>
                    :null
                }

                <form onSubmit={this.submitForm}>
                    <h2>Редактировать</h2>

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
                            <option val='Неизвестно'>Неизвестно</option>
                            <option val='Муж'>Муж</option>
                            <option val='Жен'>Жен</option>
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
                                            checked={this.state.formdata.allowCheck}
                                            onChange={(event)=>this.handleInput(event,'allowCheck')}
                                        />
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Отображать мою анкету для всех, в общем списке</td>
                                <td>
                                    <div>
                                        <input
                                            className="profile_checkbox"
                                            type="checkbox"
                                            checked={this.state.formdata.allowCompat}
                                            onChange={(event)=>this.handleInput(event,'allowCompat')}
                                        />
                                    </div>                        
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>Отображать мою анкету при проверке совместимости</td>
                                <td>
                                    <div>
                                        <input
                                            className="profile_checkbox"
                                            type="checkbox"
                                            checked={this.state.formdata.allowShow}
                                            onChange={(event)=>this.handleInput(event,'allowShow')}
                                        />
                                    </div>                        
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>

                    <p>Адрес картинки:</p>
                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите url ..."
                            value={this.state.formdata.img_url}
                            onChange={(event)=>this.handleInput(event,'img_url')}
                        />
                    </div>
                    
                    <p>Информация о вас:</p>
                    <textarea
                        value={this.state.formdata.review}
                        onChange={(event)=>this.handleInput(event,'review')}
                    />

                    <button type="submit">Принять</button>
                    <div className="delete_post">
                        <div className="button"
                            onClick={this.deletePost}
                        >
                            Удалить
                        </div>
                    </div>
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

export default connect(mapStateToProps)(EditBook)