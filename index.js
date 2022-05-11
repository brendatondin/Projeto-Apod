//Sua aplicação deve ser capaz de receber uma data como entrada do usuário a partir de um formulário.
$('#submit').click(function () {
    requisicao()
})

function requisicao() {
    const calendario = $('#data').val();
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=PRIPdf4uEkAsOtpLagfHRybODnTK8QvwcRsNRegh&date=${calendario}`,
        success: function (data) {
            exibir(data)
        }
    })
}

//Com a data selecionada, ao clicar no botão de envio, uma requisição deve ser enviada à 
//[API da APOD](https://api.nasa.gov/planetary/apod ) para que seja obtida a foto ou vídeo referente ao dia escolhido.

function exibir(resultado) {
    const titulo = $('#titulo')
    const imagem = $('#imagem')
    const textoApi = $('#textoApi')

    titulo.html(`${resultado.title}`)
    textoApi.html(`${resultado.explanation}`)

    if (resultado.media_type == 'image') {
        imagem.html(`<img class='img' src="${resultado.url}"/>`)
    } else {
        imagem.html(`<iframe class="img" src="${resultado.url}?autoplay=1&mute=1"></iframe>`)
    }

}

//De posse dessa informação, a página deve ser manipulada para que os dados retornados sejam devidamente exibidos.