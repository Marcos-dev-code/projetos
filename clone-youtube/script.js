let botao = document.getElementById('img-menu');
//let menuEscondido = document.querySelector('.escondido');

//Função para exibir o menu lateral que inicialmente fica oculto.
//Esse trecho do código substitui a img do menu, pelo conteúdodo menu.
botao.addEventListener('click',function(){
    botao.innerHTML= `
                        <ul>
                            <li>Início</li>
                            <li>Shorts</li>
                            <li>Inscrições</li>
                        </ul>
                        <hr>
                        <ul>
                            <li>Você</li>
                            <li>Histórico</li>
                            <li>Playlists</li>
                            <li>Seus vídeos</li>
                            <li>Assistir mais tarde</li>
                            <li>Vídeos marcados com "gostei"</li>
                        </ul>
                        <hr>
                        <p>Inscrições</p>
                        <hr>
                        <p>Explorar</p>
                        <ul>
                            <li>Em alta</li>
                            <li>Shopping</li>
                            <li>Música</li>
                            <li>Filmes</li>
                            <li>Ao vivo</li>
                            <li>Jogos</li>
                            <li>Notícias</li>
                            <li>Esporte</li>
                            <li>Cursos</li>
                            <li>Podcasts</li>
                        </ul>
                        <hr>
                        <p>Mais do YouTube</p>
                        <ul>
                            <li>YouTube Premium</li>
                            <li>YouTube Studio</li>
                            <li>YouTube Music</li>
                            <li>YouTube Kids</li>
                        </ul>
                        <hr>
                        <ul>
                            <li>Configurações</li>
                            <li>Histórico de denúncia</li>
                            <li>Ajuda</li>
                            <li>Enviar Feedback</li>
                        </ul>
                        
                        <hr>
                        <p id="tags"> <a>Sobre  </a><a>imprensa  </a><br>
                            <a>Direitos Autorais  </a><a>Entre em contato  </a>
                            <a>Criadores de conteúdo  </a><a>Publicidade  </a><br>
                            <a>Desenvolvedores</a> </p>`
    //if(menuEscondido.style.display == "none" || menuEscondido.style.display == ""){
//menuEscondido.style.display="block"
    //}else{
//menuEscondido.style.display="none"
   // }
   
})