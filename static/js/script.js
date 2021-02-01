$('#up').fadeOut(700)
// window.location.href = "http://192.168.100.36:5500"

$(document).ready(function () {

    var Menu = false

    $('.cite').on('click', function(){
        $('.choice-cite').toggleClass('active')
        $('.bell-bg').toggleClass('active')
    })

    $('.choice-cite').on('click', function(){
        $('.choice-cite').toggleClass('active')
        $('.bell-bg').toggleClass('active')
    })

    $('#bell').on('click', function () {
        $('.choice-cite').removeClass('active')
        $('.bell').toggleClass('active')
        $('.bell-bg').toggleClass('active')
    })

    $('#close-bell').on('click', function () {
        $('.bell').toggleClass('active')
        $('.bell-bg').toggleClass('active')
    })

    $('.prices-content-block-prices__form').on('click', function () {
        $('.bell').toggleClass('active')
        $('.bell-bg').toggleClass('active')
    })

    function menu() {
        $('.menu').toggleClass('active')
        $('.prev').toggleClass('active')
        $('.prices').toggleClass('active')
        $('.m-garant').toggleClass('active')
        $('.progress').toggleClass('active')
        $('.benefits').toggleClass('active')
        $('.elimination').toggleClass('active')
        $('.questions').toggleClass('active')
        $('.cooperation').toggleClass('active')
        $('.gratitude').toggleClass('active')
        $('.m-result').toggleClass('active')
        $('.m-footer').toggleClass('active')
    }

    function questions() {
        $('.container-link').toggleClass('active')
        $('header').addClass('active')
        $('.prev').toggleClass('active')
        $('.prices').toggleClass('active')
        $('.progress').toggleClass('active')
        $('.benefits').toggleClass('active')
        $('.elimination').toggleClass('active')
        $('.questions-title').toggleClass('active')
        $('.questions-container').toggleClass('active')
        $('.cooperation').toggleClass('active')
        $('.gratitude').toggleClass('active')
        $('.m-result').toggleClass('active')
        $('.m-footer').toggleClass('active')
    }

    function send() {
        $('.prev').toggleClass('active')
        $('.prices').toggleClass('active')
        $('.progress').toggleClass('active')
        $('.benefits').toggleClass('active')
        $('.elimination').toggleClass('active')
        $('.questions').toggleClass('active')
        $('.cooperation').toggleClass('active')
        $('.gratitude').toggleClass('active')
        $('.m-result').toggleClass('active')
        $('.m-footer').toggleClass('active')
    }

    $('#menu').on('click', function () {
        console.log('fjaof')
        Menu = true
        menu()
        $('.menu-open').toggleClass('active')
        $('.menu-close').toggleClass('active')
    })

    $('#close').on('click', function () {
        Menu = false
        menu()
        $('.menu-open').toggleClass('active')
        $('.menu-close').toggleClass('active')
    })

    $('.send__item').on('click', function () {
        if (Menu == false) {
            send()
            $('.menu-open').toggleClass('active')
            $('.bell-close').toggleClass('active')
            $('.mobile-bell').toggleClass('active')
            $('.container-link').toggleClass('active')
        }
        if (Menu == true) {
            $('.menu').toggleClass('active')
            $('.menu-close').toggleClass('active')
            $('.bell-close').toggleClass('active')
            $('.mobile-bell').toggleClass('active')
            $('.container-link').toggleClass('active')
            Menu = false
        }
    })

    function mobilePrice(){
        $('.prices-main-description').toggleClass('active')
        $('.prices-bg').toggleClass('active')
    }

    $('#close-price').on('click', function () {
        mobilePrice()
    })

    $('#prices-main-block-1').on('click', function () {
        mobilePrice()
        let prices__title = 'АЛЬТЕРНАТИВНАЯ ЛИКВИДАЦИЯ'
        let prices__contant = 'Поиск покупателей для вашей организации с последующим внесением изменений. Нотаринальный договор купли-продажи, вступает, как определенная гарантия от отмены изменений, наличи полного волеизъявления покупателя, документарной проверки дееспособности сторон.'
        let prices__time = 'oт 5 дней'
        let prices__cost = 'oт 30 000₽'
        $('.prices-main-description-container__title').html(prices__title)
        $('.prices-main-description-container__contant').html( prices__contant)
        $('.prices-main-description-container__time').html(prices__time)
        $('.prices-main-description-container__cost').html(prices__cost)
    })

    $('#prices-main-block-2').on('click', function () {
        mobilePrice()
        let prices__title = 'ДОБРОВОЛЬНАЯ ЛИКВИДАЦИЯ'
        let prices__contant = 'По окончании ликвидации снимаются все обязательства и притязания. Компания официально прекращает свою деятельность с внесением в ЕГРЮЛ. Идеально подходит для компаний с нулевыми оборотами. Возможно прохождение налоговой проверки, подходит только при отсутствии долгов'
        let prices__time = 'от 3 месяцев'
        let prices__cost = 'от 25000₽'
        $('.prices-main-description-container__title').html(prices__title)
        $('.prices-main-description-container__contant').html( prices__contant)
        $('.prices-main-description-container__time').html(prices__time)
        $('.prices-main-description-container__cost').html(prices__cost)
    })

    $('#prices-main-block-3').on('click', function () {
        mobilePrice()
        let prices__title = 'ДОБРОВОЛЬНАЯ ЛИКВИДАЦИЯ С ГАРАНТИЕЙ ОТСУТСВИЯ ВПН'
        let prices__contant = 'Данная ликвидация рекомендована компаниями, где есть риск налоговой проверки с доначислением (большие обороты в год, были возвраты из бюджета, были гос. контракты на крупные суммы или иные основания). Точную стоимость можем определить после получения от вас ИНН компании. Проведем анализ с указанием конкретных рисковых контрагентов, на наличие разрывов по налогам и др.'
        let prices__time = 'от 4-5 месяцев'
        let prices__cost = 'от 140 000₽'
        $('.prices-main-description-container__title').html(prices__title)
        $('.prices-main-description-container__contant').html( prices__contant)
        $('.prices-main-description-container__time').html(prices__time)
        $('.prices-main-description-container__cost').html(prices__cost)
    })

    $('#prices-main-block-4').on('click', function () {
        mobilePrice()
        let prices__title = 'СОЗДАНИЕ ОБЩЕСТВА'
        let prices__contant = 'Полное консультирование по регистрации. Подготовка документов. Полное сопровождение. Подача и получение документов в налоговом органе. Получение ЭЦП для электронного взаимодействия с гом.органамию. Регистрация в любом регионе России'
        let prices__time = 'от 3 дней'
        let prices__cost = 'от 1500₽'
        $('.prices-main-description-container__title').html(prices__title)
        $('.prices-main-description-container__contant').html( prices__contant)
        $('.prices-main-description-container__time').html(prices__time)
        $('.prices-main-description-container__cost').html(prices__cost)
    })

    $('#prices-main-block-5').on('click', function () {
        mobilePrice()
        let prices__title = 'ИЗМЕНЕНИЯ В УЧРЕДИТЕЛЬНЫЕ ДОКУМЕНТЫ'
        let prices__contant = 'Смена исполнительного органа. Смена наименования организации. Уменьшение, увелечение уставного капитала. Приведение устава организации в соответствие с ГК РФ. Изменение других положений Устава'
        let prices__time = 'от 5 дней'
        let prices__cost = 'от 1500₽'
        $('.prices-main-description-container__title').html(prices__title)
        $('.prices-main-description-container__contant').html( prices__contant)
        $('.prices-main-description-container__time').html(prices__time)
        $('.prices-main-description-container__cost').html(prices__cost)
    })

    $('#prices-main-block-6').on('click', function () {
        mobilePrice()
        let prices__title = 'УПРАВЛЯЕМОЕ БАНКРОТСТВО'
        let prices__contant = 'По окончании процедуры банкротсвта законно списываются все долги. Подходим для организаций с любыми долгами'
        let prices__time = 'от 6 месяцев'
        let prices__cost = 'от 120 000₽'
        $('.prices-main-description-container__title').html(prices__title)
        $('.prices-main-description-container__contant').html( prices__contant)
        $('.prices-main-description-container__time').html(prices__time)
        $('.prices-main-description-container__cost').html(prices__cost)
    })

    $('#prices-main-block-7').on('click', function () {
        mobilePrice()
        let prices__title = 'ГОТОВОЕ ООО'
        let prices__contant = 'Полное консультирование по регистрации ООО. Самый быстрый и простой способ начать собственный бизнес. Организация уже имеет пакет учредительных докуметов, юридический адрес, печать и стоит на учете в фондах'
        let prices__time = 'от 1 дня'
        let prices__cost = 'от 50 000₽'
        $('.prices-main-description-container__title').html(prices__title)
        $('.prices-main-description-container__contant').html( prices__contant)
        $('.prices-main-description-container__time').html(prices__time)
        $('.prices-main-description-container__cost').html(prices__cost)
    })

    $('#prices-main-block-8').on('click', function () {
        mobilePrice()
        let prices__title = 'ЮРИДИЧЕСКИЙ АДРЕС'
        let prices__contant = 'Предоставление юридического адреса под создание, изменение'
        let prices__time = 'от 1 дня'
        let prices__cost = 'от 50 000₽'
        $('.prices-main-description-container__title').html(prices__title)
        $('.prices-main-description-container__contant').html( prices__contant)
        $('.prices-main-description-container__time').html(prices__time)
        $('.prices-main-description-container__cost').html(prices__cost)
    })

    $('#prices-main-block-9').on('click', function () {
        mobilePrice()
        let prices__title = 'НАЛОГОВЫЕ СПОРЫ'
        let prices__contant = 'Взаимодействие с налоговой службой в ходе проверки. Споры по доначислению НДС. Урегулирование сложных ситуаций'
        let prices__time = 'По согласованию'
        let prices__cost = 'По согласованию'
        $('.prices-main-description-container__title').html(prices__title)
        $('.prices-main-description-container__contant').html( prices__contant)
        $('.prices-main-description-container__time').html(prices__time)
        $('.prices-main-description-container__cost').html(prices__cost)
    })

    $('#close-bell-mob').on('click', function () {
        send()
        $('.menu-open').toggleClass('active')
        $('.bell-close').toggleClass('active')
        $('.mobile-bell').toggleClass('active')
        $('.container-link').toggleClass('active')
    })

    $('#dispatch').on('click', function () {
        $('.call-back').addClass('active')
        $('.mobile-bell').toggleClass('active')
        $('.bell-close').removeClass('active')
        setTimeout(
            () => {
                send()
                $('.call-back').removeClass('active')
                $('.menu-open').toggleClass('active')
                $('.container-link').toggleClass('active')
            },
            3000
        );
    })

    $('.container-link__item').on('click', function (event) {
        $(".container-link__whatsapp").toggleClass("active");
        $(".container-link__telegram").toggleClass("active");
        $(".container-link__call").toggleClass("active");
        $(this).toggleClass("active");
    })

    $('.questions-container__button').on('click', function () {
        questions()
        $('.questions-container-main').addClass('active')
    })

    $('.close-search').on('click', function () {
        questions()
        $('header').removeClass('active')
        $('.questions-container-main').removeClass('active')
    })

    $(window).scroll(function () {
        if ($(window).scrollTop() > 120) {
            $('#up').fadeIn(900)
        } else {
            $('#up').fadeOut(700)
        }
    });

    
    $(".bell").submit(function () {
        var form_data = $(this).serialize();
        $.ajax({
        type: "POST",
        url: `https://xn----8sbpj1akeecdle1m.xn--p1ai/send?${form_data}`,
        crossDomain: true,
        headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "POST,GET,PUT,DELETE,OPTIONS"
        },
        success: function () {
        // $(".successfully-wrapper").addClass("active");
        $(".bell").removeClass("active");
        $('.bell-bg').removeClass('active')
        setTimeout(function () {
        // $(".successfully-wrapper").removeClass("active");
        // $('body').css('overflow-y', 'auto');
        }, 2000);
        }
        });
        event.preventDefault();
        });
        
        $(".mobile-bell-container").submit(function () {
        var form_data = $(this).serialize();
        $.ajax({
        type: "POST",
        url: `https://xn----8sbpj1akeecdle1m.xn--p1ai/send?${form_data}`,
        crossDomain: true,
        headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "POST,GET,PUT,DELETE,OPTIONS"
        },
        success: function () {
        // $(".successfully-wrapper").addClass("active");
        $(".bell").removeClass("active");
        setTimeout(function () {
        // $(".successfully-wrapper").removeClass("active");
        // $('body').css('overflow-y', 'auto');
        }, 2000);
        }
        });
        event.preventDefault();
        });
        


    $('.prices-content').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 1290,
            settings: {
                // centerMode: true,
                slidesToShow: 2,
                slidesToScroll: 2,
            }   
        },
        {
            breakpoint: 1190,
            settings: {
                // centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
        ]
    });


    $('.cooperation-container').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
        responsive: [{
                breakpoint: 1290,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.gratitude-container').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
        responsive: [{
                breakpoint: 1290,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.answer-close').on('click', function (event) {
        $('.answer').toggleClass('active');
        $('.bell-bg').toggleClass('active');
    })

    $('#1').on('click', function (event) {
        let answerTitle = 'НАШЛИ ЦЕНЫ НИЖЕ?';
        let answerContent = 'У нас работают профессиональные юристы, специализирующиеся на ликвидации и регистрации предприятий. За более чем 15 лет на рынке мы накопили огромный опыт и решили множество дел разной сложности. Мы строго соблюдаем законы и сроки и гарантируем 100% результат. Низкие же цены зачастую предлагают непрофильные юристы, которые плохо разбираются в вопросе. Не обладая нужными знаниями, они не могут завершить процесс ликвидации, нарушают сроки, а иногда и вовсе пропадают. Чтобы не платить дважды, выбирайте опытных специалистов!';
        $('.answer').toggleClass('active');
        $('.bell-bg').toggleClass('active');
        $('.answer-container-title').html(answerTitle);
        $('.answer-container-content').html(answerContent)
    })
    $('#2').on('click', function (event) {
        let answerTitle = 'НУЖЕН ЛИ ДИРЕКТОР И ВСЕ УЧРЕДИТЕЛИ ДЛЯ ЛИКВИДАЦИИ ФИРМЫ?';
        let answerContent = 'Как правило, для начала процесса ликвидации требуется присутствие директора или одного из учредителей. Все остальные участники могут только подписать протокол.';
        $('.answer').toggleClass('active');
        $('.bell-bg').toggleClass('active');
        $('.answer-container-title').html(answerTitle);
        $('.answer-container-content').html(answerContent)
    })
    $('#3').on('click', function (event) {
        let answerTitle = 'ЧТО БУДEТ С МОЕЙ ФИРМОЙ ПОСЛЕ ЛИКВИДАЦИИ?';
        let answerContent = 'Фирма прекратит деятельность, исключится из государственного реестра. Следовательно по этой компании уже не будет запросов госорганов, она не должна сдавать отчетность.';
        $('.answer').toggleClass('active');
        $('.bell-bg').toggleClass('active');
        $('.answer-container-title').html(answerTitle);
        $('.answer-container-content').html(answerContent)
    })
    $('#4').on('click', function (event) {
        let answerTitle = 'КАКИЕ ДОКУМЕНТЫ НУЖНЫ ДЛЯ ЛИКВИДАЦИИ?';
        let answerContent = 'Обычно требуются:<br> - устав,<br> - свидетельство о регистрации,<br> - свидетельство о постановке на учет,<br> - копия паспорта руководителя.<br> В оригиналах документы понадобятся для нотариуса при заверке.';
        $('.answer').toggleClass('active');
        $('.bell-bg').toggleClass('active');
        $('.answer-container-title').html(answerTitle);
        $('.answer-container-content').html(answerContent)
    })
    $('#5').on('click', function (event) {
        let answerTitle = 'КОГДА НУЖНО ЗАКРЫТЬ РАСЧEТНЫЙ СЧЕТ?';
        let answerContent = 'Счет можно закрыть в любой момент до окончания ликвидации.';
        $('.answer').toggleClass('active');
        $('.bell-bg').toggleClass('active');
        $('.answer-container-title').html(answerTitle);
        $('.answer-container-content').html(answerContent)
    })
    $('#6').on('click', function (event) {
        let answerTitle = 'ЗАНИМАЕТЕСЬ ЛИ ВЫ ФИРМАМИ В ДРУГИХ РЕГИОНАХ?';
        let answerContent = 'Порядок регистрации един по России, и у нас есть обширная партнерская сеть, через которую мы можем надежно подавать и получать документы. Обязанность подготовки и заверки документов остается на нас.';
        $('.answer').toggleClass('active');
        $('.bell-bg').toggleClass('active');
        $('.answer-container-title').html(answerTitle);
        $('.answer-container-content').html(answerContent)
    })
    $('#7').on('click', function (event) {
        let answerTitle = 'С ЧЕГО НАЧАТЬ ПРОЦЕДУРУ ЛИКВИДАЦИИ?';
        let answerContent = 'С консультации, по телефону или лично. В этом случае специалист подробно проконсультирует вас о предпочтительном способе и сроках ликвидации.';
        $('.answer').toggleClass('active');
        $('.bell-bg').toggleClass('active');
        $('.answer-container-title').html(answerTitle);
        $('.answer-container-content').html(answerContent)
    })
    $('#8').on('click', function (event) {
        let answerTitle = 'МОГУТ ЛИ УЧРЕДИТЕЛИ ОТВЕЧАТЬ ПО ДОЛГАМ ФИРМЫ В СЛУЧАЕ ЕЕ ЛИКВИДАЦИИ?';
        let answerContent = 'Учредители отвечают только в пределах своих вкладов в уставный капитал, кроме случаев субсидиарной ответственности при банкротстве.';
        $('.answer').toggleClass('active');
        $('.bell-bg').toggleClass('active');
        $('.answer-container-title').html(answerTitle);
        $('.answer-container-content').html(answerContent)
    })
    $('#9').on('click', function (event) {
        let answerTitle = 'ОДИН ИЗ СОУЧРЕДИТЕЛЕЙ НЕ ХОЧЕТ ЛИКВИДИРОВАТЬ ФИРМУ, А ОСТАЛЬНЫЕ ХОТЯТ. ЧТО ДЕЛАТЬ В ЭТОМ СЛУЧАЕ?';
        let answerContent = 'Для ликвидации необходимо 100% голосов всех учредителей, иначе ее могут отменить в судебном порядке. Если один не согласен, то можно оставшимся выйти из этого общества или продать свои акции.';
        $('.answer').toggleClass('active');
        $('.bell-bg').toggleClass('active');
        $('.answer-container-title').html(answerTitle);
        $('.answer-container-content').html(answerContent)
    })

    function mobileQuestions(){
        $('.mobile-answer').toggleClass('active')
        $('.questions-container-search').toggleClass('active')
        $('.questions-container-questions__block').toggleClass('active')
        $('.questions-container-bg').toggleClass('active');
    }

    $('#mobile-questions-1').on('click', function(){
        let answerTitle = 'НАШЛИ ЦЕНЫ НИЖЕ?';
        let answerContent = 'У нас работают профессиональные юристы, специализирующиеся на ликвидации и регистрации предприятий. За более чем 15 лет на рынке мы накопили огромный опыт и решили множество дел разной сложности. Мы строго соблюдаем законы и сроки и гарантируем 100% результат. Низкие же цены зачастую предлагают непрофильные юристы, которые плохо разбираются в вопросе. Не обладая нужными знаниями, они не могут завершить процесс ликвидации, нарушают сроки, а иногда и вовсе пропадают. Чтобы не платить дважды, выбирайте опытных специалистов!';
        mobileQuestions()
        $('.mobile-answer-container__title').html(answerTitle);
        $('.mobile-answer-container__content').html(answerContent)
    })

    $('#mobile-questions-2').on('click', function(){
        let answerTitle = 'НУЖЕН ЛИ ДИРЕКТОР И ВСЕ УЧРЕДИТЕЛИ ДЛЯ ЛИКВИДАЦИИ ФИРМЫ?';
        let answerContent = 'Как правило, для начала процесса ликвидации требуется присутствие директора или одного из учредителей. Все остальные участники могут только подписать протокол.';
        mobileQuestions()
        $('.mobile-answer-container__title').html(answerTitle);
        $('.mobile-answer-container__content').html(answerContent)
    })

    $('#mobile-questions-4').on('click', function(){
        let answerTitle = 'ЧТО БУДEТ С МОЕЙ ФИРМОЙ ПОСЛЕ ЛИКВИДАЦИИ?';
        let answerContent = 'Фирма прекратит деятельность, исключится из государственного реестра. Следовательно по этой компании уже не будет запросов госорганов, она не должна сдавать отчетность.';
        mobileQuestions()
        $('.mobile-answer-container__title').html(answerTitle);
        $('.mobile-answer-container__content').html(answerContent)
    })

    $('#mobile-questions-3').on('click', function(){
        let answerTitle = 'КАКИЕ ДОКУМЕНТЫ НУЖНЫ ДЛЯ ЛИКВИДАЦИИ?';
        let answerContent = 'Обычно требуются:<br> - устав,<br> - свидетельство о регистрации,<br> - свидетельство о постановке на учет,<br> - копия паспорта руководителя.<br> В оригиналах документы понадобятся для нотариуса при заверке.';
        mobileQuestions()
        $('.mobile-answer-container__title').html(answerTitle);
        $('.mobile-answer-container__content').html(answerContent)
    })

    $('#mobile-questions-5').on('click', function(){
        let answerTitle = 'КОГДА НУЖНО ЗАКРЫТЬ РАСЧEТНЫЙ СЧЕТ?';
        let answerContent = 'Счет можно закрыть в любой момент до окончания ликвидации.';
        mobileQuestions()
        $('.mobile-answer-container__title').html(answerTitle);
        $('.mobile-answer-container__content').html(answerContent)
    })

    $('#mobile-questions-7').on('click', function(){
        let answerTitle = 'ЗАНИМАЕТЕСЬ ЛИ ВЫ ФИРМАМИ В ДРУГИХ РЕГИОНАХ?';
        let answerContent = 'Порядок регистрации един по России, и у нас есть обширная партнерская сеть, через которую мы можем надежно подавать и получать документы. Обязанность подготовки и заверки документов остается на нас.';
        mobileQuestions()
        $('.mobile-answer-container__title').html(answerTitle);
        $('.mobile-answer-container__content').html(answerContent)
    })

    $('#mobile-questions-8').on('click', function(){
        let answerTitle = 'С ЧЕГО НАЧАТЬ ПРОЦЕДУРУ ЛИКВИДАЦИИ?';
        let answerContent = 'С консультации, по телефону или лично. В этом случае специалист подробно проконсультирует вас о предпочтительном способе и сроках ликвидации.';
        mobileQuestions()
        $('.mobile-answer-container__title').html(answerTitle);
        $('.mobile-answer-container__content').html(answerContent)
    })

    $('#mobile-questions-6').on('click', function(){
        let answerTitle = 'МОГУТ ЛИ УЧРЕДИТЕЛИ ОТВЕЧАТЬ ПО ДОЛГАМ ФИРМЫ В СЛУЧАЕ ЕЕ ЛИКВИДАЦИИ?';
        let answerContent = 'Учредители отвечают только в пределах своих вкладов в уставный капитал, кроме случаев субсидиарной ответственности при банкротстве.';
        mobileQuestions()
        $('.mobile-answer-container__title').html(answerTitle);
        $('.mobile-answer-container__content').html(answerContent)
    })

    $('#mobile-questions-9').on('click', function(){
        let answerTitle = 'ОДИН ИЗ СОУЧРЕДИТЕЛЕЙ НЕ ХОЧЕТ ЛИКВИДИРОВАТЬ ФИРМУ, А ОСТАЛЬНЫЕ ХОТЯТ. ЧТО ДЕЛАТЬ В ЭТОМ СЛУЧАЕ?';
        let answerContent = 'Для ликвидации необходимо 100% голосов всех учредителей, иначе ее могут отменить в судебном порядке. Если один не согласен, то можно оставшимся выйти из этого общества или продать свои акции.';
        mobileQuestions()
        $('.mobile-answer-container__title').html(answerTitle);
        $('.mobile-answer-container__content').html(answerContent)
    })

    $('#mobile-answer-close').on('click', function(){
        $('.mobile-answer').toggleClass('active')
        $('.questions-container-search').toggleClass('active')
        $('.questions-container-questions__block').toggleClass('active')
        $('.questions-container-bg').toggleClass('active');
    })


    $('#click').on('click', function (e) {
        $('html,body').stop().animate({
            scrollTop: $('header').offset().top
        }, 1000);
        e.preventDefault();
    });
    $('#prices').on('click', function (e) {
        $('html,body').stop().animate({
            scrollTop: $('.prices').offset().top
        }, 1000);
        e.preventDefault();
    });
    $('#elimination').on('click', function (e) {
        $('html,body').stop().animate({
            scrollTop: $('.elimination').offset().top
        }, 1000);
        e.preventDefault();
    });
    $('#questions').on('click', function (e) {
        $('html,body').stop().animate({
            scrollTop: $('.questions').offset().top
        }, 1000);
        e.preventDefault();
    });
    $('#result').on('click', function (e) {
        $('html,body').stop().animate({
            scrollTop: $('.result').offset().top
        }, 1000);
        e.preventDefault();
    });
    $('#contact').on('click', function (e) {
        $('html,body').stop().animate({
            scrollTop: $('.footer').offset().top
        }, 1000);
        e.preventDefault();
    });
    $('#mobile-prices').on('click', function (e) {
        menu()
        $('.menu-open').toggleClass('active')
        $('.menu-close').toggleClass('active')
        $('html,body').stop().animate({
            scrollTop: $('#prices-link').offset().top
        }, 1000);
        e.preventDefault();
    });
    $('#mobile-elimination').on('click', function (e) {
        menu()
        $('.menu-open').toggleClass('active')
        $('.menu-close').toggleClass('active')
        $('html,body').stop().animate({
            scrollTop: $('#elimination-link').offset().top
        }, 1000);
        e.preventDefault();
    });
    $('#mobile-questions').on('click', function (e) {
        menu()
        $('.menu-open').toggleClass('active')
        $('.menu-close').toggleClass('active')
        $('html,body').stop().animate({
            scrollTop: $('#questions-link').offset().top
        }, 1000);
        e.preventDefault();
    });
    $('#mobile-result').on('click', function (e) {
        menu()
        $('.menu-open').toggleClass('active')
        $('.menu-close').toggleClass('active')
        $('html,body').stop().animate({
            scrollTop: $('#result-link').offset().top
        }, 1000);
        e.preventDefault();
    });
    $('#mobile-footer').on('click', function (e) {
        menu()
        $('.menu-open').toggleClass('active')
        $('.menu-close').toggleClass('active')
        $('html,body').stop().animate({
            scrollTop: $('#footer-link').offset().top
        }, 1000);
        e.preventDefault();
    });

    $("#questionsSearch").on("keyup", function() {  //2
        var value = $(this).val().toLowerCase();  //3
        $("#questionsMenu li").filter(function() {  //4
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)  //5
        });
    });


})


