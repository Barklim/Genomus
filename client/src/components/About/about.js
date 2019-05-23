import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {
    render() {
        //console.log(this.props.user.login.genId);
    
        return (
            <div className="rl_container">
                <div className="format_about">
                    <h2>Информация о нас</h2>
                    <h4>Мы в социальных сетях: <a href="https://vk.com/genomusApp">https://vk.com/genomusApp</a></h4>
                    <h4>Обратная связь: example@gmail.com</h4>
                    <h4>Здесь можно будет скачать файл apk. для Android  </h4>
                    {
                        this.props.user.login.genId !== undefined  ? 
                            <p> Ваш QR-code: </p>
                        :null
                    }
                    {
                        this.props.user.login.genId === undefined  ? 
                            <p> Ваш QR-code, будет здесь: </p>
                        :null
                    }
                    {
                        this.props.user.login.genId !== undefined  ? 
                            <img 
                                alt='robots' 
                                src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${this.props.user.login.genId}`} 
                                className="qr"
                            />
                        :null
                    }
                    {
                        this.props.user.login.genId === undefined  ? 
                            <img 
                                alt='robots' 
                                src={`https://www.denso-wave.com/imageupd/3217/14078_contents4.jpg`} 
                                className="qr"
                            />
                        :null
                    }
                </div>
            </div>
        );
    }
}

function mapStateProps(state) {
    return {
        user:state.user
    }
}

export default connect(mapStateProps)(About)
/*
                    <h2>F.A.Q.</h2>
                    <p>Что это?</p> 
                    <p>Веб-приложение для "мониторинга" здоровья</p> 
                    <p>Как пользоваться?</p> 
                    <p>Зарегиструйтесь и залогинтись</p> 
                    <p>Что делает вкладка совместимость?</p> 
                    <p>Проверяет вашу совместимость с партнёром. Ввести Genid вы можете вручную либо сканировав qr-code </p>
                    <p>Как рассчитывается рейтинг?</p> 
                    <p>Вручную администратором. Оценка зависит от "полноты" данных анкеты.П0ка дак</p>
                    <p>П0чему не 'на р0баед м0я кардинка'?</p> 
                    <p>Убедидесь, чд0 вы ввели к0ррекдный url-адрес</p>
*/