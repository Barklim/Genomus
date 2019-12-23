import React, { Component } from 'react';
import { connect } from 'react-redux';
var QRCode = require('qrcode.react');

class About extends Component {
    render() {
        //console.log(this.props.user.login.genId);
    
        return (
            <div className="rl_container">
                <div className="format_about">
                    <h2>Подробнее о проекте</h2>

                    <p>Жизнь наших клеток управляется генами. Гены – участки длинной цепочки ДНК, 
                    отвечающие за синтез несущих какую-либо функцию продуктов. Всего у человека примерно 25 000 генов, 
                    все они распределены по хромосомам, которых у человека 23 пары. Это значит, 
                    что каждый ген существует в двух вариантах – один вариант в одной хромосоме из пары, 
                    а другой – в другой хромосоме, из той же пары. Каждый из двух вариантов генов называется аллелью. 
                    Аллели могут быть доминантными и рецессивными. В случае, если аллель доминантная, её действие обязательно будет проявляться.
                    Рецессивные же аллели будут проявляться только в двух случаях – если у человека обе аллели одинаковые,
                    или если второй копии просто нет. Последний случай характерен для некоторых заболеваний,
                    которыми болеют только мужчины – например, гемофилии.</p>

                    <p>В случае аутосомно-рецессивных (связанных с попаданием двух рецессивных дефектных аллелей в гены ребёнка при зачатии)
                    заболеваний оба родителя могут не знать о наличии у них дефектных генов и быть абсолютно здоровыми, 
                    но вероятность рождения больного ребёнка в такой семье будет составлять 25%.</p>

                    <p>Несмотря на то, что дефекты в генах, вызывающие развитие аутосомно-рецессивных заболеваний, 
                    встречаются по отдельности нечасто, в сумме больным рождается каждый сотый ребёнок.
                    </p>

                    <p>
                    Аутосомно-рецессивные заболевания зачастую приводят к инвалидности и смерти. Среди них: 
                    </p>

                    <ul>{listItems}</ul>

                    {
                        this.props.user.login.genId !== undefined  ? 
                            <div>
                                <p> Вы можете дать отсканировать свой QR-код вместо того, чтобы набирать GenId. Быстро и удобно! Функция может не работать, если запрещён доступ к камере.</p>
                                <p> Ваш QR-code: </p>
                            </div>
                        :null
                    }
                    {
                        this.props.user.login.genId === undefined  ? 
                            <p> Ваш QR-code, будет здесь: </p>
                        :null
                    }
                    {
                        this.props.user.login.genId !== undefined  ? 
                            <QRCode 
                            value={this.props.user.login.genId}
                            className="qr"
                            size='256'
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
                    // <h4>Мы в социальных сетях: <a href="https://vk.com/genomusApp">https://vk.com/genomusApp</a></h4>
                    // <h4>Обратная связь: example@gmail.com</h4>
                    // <h4>Здесь можно будет скачать файл apk. для Android  </h4>


                    //                    {
                    //     this.props.user.login.genId !== undefined  ? 
                    //         <img 
                    //             alt='robots' 
                    //             src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${this.props.user.login.genId}`} 
                    //             className="qr"
                    //         />
                    //     :null
                    // }

function mapStateProps(state) {
    return {
        user:state.user
    }
}

const numbers = [ 'муковисцидоз,', 'фенилкетонурия,', 'галактоземия,', 'врождённая тугоухость.'];
const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
);

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