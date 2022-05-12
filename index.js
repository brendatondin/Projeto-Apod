window.onload = function () {
    let today = new Date();
    let date =
        today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=PRIPdf4uEkAsOtpLagfHRybODnTK8QvwcRsNRegh&date=${date}`,
        success: function (data) {
            exibir(data);
        },
        error: function (request, error) {
            alert(request.responseText);
        },
    });
};


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