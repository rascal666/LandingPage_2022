phone_js = document.querySelectorAll('.phone-js');


let _byRender = `
	<p>Позвоните по телефонам в Беларуси</p>
								<div class="col_cintact_futer">
									<div class="massenger_futer">
										<img src="https://www.pulscen.ru/system/ckeditor_assets/pictures/288317/content_ikodnka.png" alt="" />

										<a class="numder_futer fat" href="tel:+375173882537">+375 17 388 25 37​</a>
									</div>
									<div class="massenger_futer">
										<img src="https://www.pulscen.ru/system/ckeditor_assets/pictures/288317/content_ikodnka.png" alt="" />

										<a class="numder_futer fat" href="tel:+375445189191">+375 44 518 91 91</a>
									</div>
								</div>
								<p>Или на бесплатный международный номер:</p>
								<div class="col_cintact_futer">
									<div class="massenger_futer">
										<img src="https://www.pulscen.ru/system/ckeditor_assets/pictures/288317/content_ikodnka.png" alt="" />

										<a class="numder_futer fat" href="tel:81080010009191">8 10 800 1000 91 91</a>
									</div>
								</div>
`;



class Ondata {
    constructor(dom) {
        this.domContent = document.querySelector('.onheading');
        this.utm = [];
        // номера телефонов стран
        this.generalNumbers = {
            kz: '8 10 800 1000 91 91',
            free: '8 800 234 43 10',
            pay: '8 800 100 91 91',
            ua: '+380 (89) 120 50 46',
            don: '+380 (89) 120 50 46',
            by: '8 10 800 1000 91 91',
        };
        this.generalNumbersSok = {
            kz: 'tel:81080010009191',
            free: 'tel:88002344310',
            pay: 'tel:88001009191',
            ua: 'tel:380891205046',
            don: 'tel:380891205046',
            by: 'tel:81080010009191',
        };
        // подписи к номерам телефонов стран
        this.generalNote = {
            kz: 'Казахстана',
            free: 'РФ',
            pay: 'РФ',
            ua: 'Украины',
            don: 'Донецка и Луганска',
            by: '',
        };
        // события для разных стран
        this.generalEvent = {
            kz: '_KZ_',
            free: '_РФ_',
            pay: '_РФ_',
            ua: '_YA_',
            don: '_ДНР&ЛНР_',
            by: '_РБ_',
        };
        // настройка id под страны
        this.generalId = {
            kz: '99572059',
            free: '99572059',
            pay: '99560299',
            ua: '99572059',
            don: '99572059',
            by: '99593226',
        };
        // аттребуты
        this.dataId = [
            'data-company',
            'data-company-id',
        ];

        // берем элемент который передали в конструкторе
        const _dom = document.querySelector(dom);

        // преобразуем поисковой запрос в объект с параметрами для удобства
        if (window.location.search && window.location.search.length > 0) {
            this.utm = window.location.search
                .slice(1)
                .split('&')
                .map(function (param) {
                    return param.split('=');
                });

            const _tempUtm = {};

            for (let index = 0; index < this.utm.length; index++) {
                _tempUtm[this.utm[index][0]] = this.utm[index][1] ? this.utm[index][1] : undefined;
            }

            this.utm = _tempUtm;
            console.log(this.utm);
        }

        // если элемент найден
        if (_dom) {

            //меняем значение событий
            _dom.innerHTML = _dom.innerHTML.replace(/_РФ_/gi, this.generalEvent[this.utm.utm_rascal])

            // если в списке с номерами есть подходящий под параметр номер то
            if (this.generalNumbers[this.utm.utm_rascal]) {
                const _numder = document.querySelectorAll('.phone-js');
                const _by = document.querySelector('.contact__by');
                const _contact__main = document.querySelector('.contact__main');
                const _note = document.querySelector('.phoneNote-js');
                const _item__by = document.querySelectorAll('.item-by');
                const _illustr__head = document.querySelectorAll('.illustr__head');
                // если нашли этот элемент то вставляем в него телефон из списка
                if (_numder) {
                    _numder.forEach(element => {
                        element.innerHTML = this.generalNumbers[this.utm.utm_rascal]
                        element.setAttribute('href', this.generalNumbersSok[this.utm.utm_rascal])
                    });
                    // подставляем правильный комментарий к номеру
                    _note.innerHTML = this.generalNote[this.utm.utm_rascal]
                }

                // если беларусь то скрываем обычный номер, показываем блок РБ
                if (this.utm.utm_rascal == 'by') {
                    _by.innerHTML = _byRender
                    _contact__main.style.display = 'none'
                    _item__by.forEach(element => {
                        element.style.display = 'none'
                    });
                }
                if (this.utm.utm_rascal == 'free') {
                    _illustr__head.forEach(e => {
                        e.src = "https://www.pulscen.ru/system/ckeditor_assets/pictures/302104/content_fbfb.png"
                    })
                }
                if (this.utm.utm_rascal == 'ua' || this.utm.utm_rascal == 'don') {
                    _illustr__head.forEach(e => {
                        e.src = "https://www.pulscen.ru/system/ckeditor_assets/pictures/302105/content_group_1204.png"
                    })

                }

                //меняем значение id аттрибутов у data-company, data-company, data-params
                this.params = document.querySelectorAll('.feedback-js');
                this.dataId.forEach(_dataId => { //_dataId массив с аттрибутами data-company, data-company,
                    this.params.forEach(element => {
                        element.setAttribute(_dataId, this.generalId[this.utm.utm_rascal])
                        element.setAttribute('data-params', `"{company_id":` + this.generalId[this.utm.utm_rascal] + `}`)
                    })
                })
            }

        } else {
            // если не нашли исходный элемент то пишем в консоль ошибку
            console.warn('Не удалось найти искомый элемент', dom);
            return false;
        }
        this.element = document.querySelector('.js-body');
        this.setInnerText()
        this.element = document.querySelector('.js-body');
        // =================================================================

    };
    setInnerText (utm, whyText, text) {
        if (this.utm.utm_rascal == utm) {
            this.element.innerHTML = this.element.innerHTML.replace(whyText, text);
            return this
        }
    }

}


// класс создали
const onData = new Ondata('.js-body');
// console.log(domContent);
let re = '/50% на первые места в каталоге/gi'
let by = 'Хочу +2 месяца'
// пользуешься созданным классом
onData.setInnerText("by", /2мес.Звезда/gi, "2мес.Платина");
onData.setInnerText("free", /2 МЕСЯЦА ТАРИФА/gi, "");
onData.setInnerText("free", /«ПЛАТИНА»/i, "2 МЕСЯЦА");
onData.setInnerText("free", /В ПОДАРОК!/gi, "ПРЕМИУМ-ПАКЕТА  В ПОДАРОК!");
onData.setInnerText("free", /вы получаете подарок/gi, "до 25 февраля вы получаете подарок");
onData.setInnerText("free", /на одном из самых эффективных пакетов «Платина»./gi, "на ПРЕМИАЛЬНОМ пакете!");

onData.setInnerText("free", /в другом городе/gi, "в другом регионе");
onData.setInnerText("free", /любого тарифа/gi, "любого пакета тарифа «Старт» ");


onData.setInnerText("ua", /2 МЕСЯЦА ТАРИФА/gi, "");
onData.setInnerText("ua", /«ПЛАТИНА»/i, "2 МЕСЯЦА");
onData.setInnerText("ua", /В ПОДАРОК!/gi, "ПРЕМИУМ-ПАКЕТА  В ПОДАРОК!");
onData.setInnerText("ua", /вы получаете подарок/gi, "до 25 февраля вы получаете подарок");
onData.setInnerText("ua", /на одном из самых эффективных пакетов «Платина»./gi, "на ПРЕМИАЛЬНОМ пакете!");

onData.setInnerText("ua", /в другом городе/gi, "в другом регионе");
onData.setInnerText("ua", /любого тарифа/gi, "любого пакета тарифа «Старт» ");













