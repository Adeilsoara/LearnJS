const button = document.getElementById('button')
const notificacao = document.getElementById('notificacoes')

const mensagen = [
    'mensagem 1', 
    'mensagem 2',
    'mensagem 3',
] 

button.addEventListener('click', () => criarNotificacao())

function criarNotificacao(){
    const noti = document.createElement('div')/* <div></div> */
    noti.classList.add('notificacao') /* <div class='notificacao'></div> */
    
    noti.innerText = getRandomMensagem()

    notificacao.appendChild(noti)

    setTimeout(() => {
        notificacao.remove()
    },3000)
}

function getRandomMensagem() {
    return mensagen[Math.floor(Math.random() * mensagen.length)]
}