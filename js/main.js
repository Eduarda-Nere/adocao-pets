$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true
    });

    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 0000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            pets: {
                required: true
            },
            mensagem: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira o seu e-mail',
            telefone: 'Por favor, insira um número de celular',
            pets: 'Por favor, insira o nome do animal'
        },
        submitHandler: function (form) {
            alert('Formulário enviado com sucesso!');
            form.reset();
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });

    $('.lista-pets button').click(function(){
        const destino = $('#contato');
        const nomePet = $(this).closest('li').find('h3').text().trim();
        
        $('#pets').val(nomePet);

        $('html, body').animate({
            scrollTop: destino.offset().top
        }, 1000);
    });

    $('nav a[href^="#"]').click(function(e) {
        e.preventDefault();
        const target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 600);
        }
    });
});