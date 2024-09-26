//Pegando elementos
let headNivel=document.querySelector('.nivel')
let vidaPlayerHeader=document.querySelector('.vidaPlayer')
let headTempo=document.querySelector('.tempo')
let player=document.querySelector('.player')
let inimigo=document.querySelector('.inimigo0')
let inimigo1=document.querySelector('.inimigo1')
let inimigo2=document.querySelector('.inimigo2')
let inimigo3=document.querySelector('.inimigo3')
let inimigo4=document.querySelector('.inimigo4')
let mira=document.querySelector('.mira')
let telaDeMorte=document.querySelector('.telaDeMorte')
let nivelMorte=document.querySelector('.nivelMorte')
let tempoMorte=document.querySelector('.tempoMorte')
let telaDeVitoria=document.querySelector('.telaDeVitoria')
let nivelVitoria=document.querySelector('.nivelVitoria')

//Definindo variaveis principais
let nivel=1
let vidaPlayer=20
let vidaInimigo=[20,30,40,50,60]
let inimigosMortos=false
let cronometro=0
let danoPlayer=5
let playerVelocidade=4
let bool = true
let x = 640
let y = 320
let playerWidth = 134
let playerHeight = 100
let velInimigo = 1000
let velInimigoDist = 10

//Condições header
if(bool==true){headNivel.innerText=`Nível: ${nivel}`}
vidaPlayerHeader.innerText=`Vida: `+vidaPlayer
mira.style.display='none'

telaDeMorte.style.display='none'
telaDeVitoria.style.display='none'
inimigo1.style.display='none'
inimigo2.style.display='none'
inimigo3.style.display='none'
inimigo4.style.display='none'

let mouseEixoX
let mouseEixoY

function mostrarMouse(event){
    let mouseX=Number(event.clientX)
    let mouseY=Number(event.clientY)

    mouseEixoX = mouseX
    mouseEixoY = mouseY   
}


//movimentar
window.addEventListener("keydown",function(event){
    var tecla = event.keyCode
    
    //W
    if(tecla == "87" && y>0 && vidaPlayer > 0 && inimigosMortos==false && bool ==true){
        y = y-playerVelocidade
        player.style.top=y+"px"
    }
    //S
    if(tecla == "83" && y<570 && vidaPlayer > 0 && inimigosMortos==false && bool ==true){
        y = y+playerVelocidade
        player.style.top=y+"px"
    }
    //D
    if(tecla == "68" && x<1210 && vidaPlayer > 0 && inimigosMortos==false && bool ==true){
        x = x+playerVelocidade
        player.style.left=x+"px"
    }
    //A
    if(tecla == "65" && x>0 && vidaPlayer > 0 && inimigosMortos==false && bool ==true){
        x = x-playerVelocidade
        player.style.left=x+"px"
    }

})

//inimigo
let inimigoY = [620, 620, 620, 500, 500]
let inimigoX = [640, 500, 750, 420, 830]

//Movimentar inimigo
let movimentarInimigoInterval=setInterval(function(){

    //Movimento do Inimigo 0
    if((x + 40) > inimigoX[0] && bool ==true){
        inimigoX[0] = inimigoX[0] + velInimigoDist
        inimigo.style.left= inimigoX[0]+"px"
    }
    if((x + 40) < inimigoX[0] && bool ==true){
        inimigoX[0] = inimigoX[0] - velInimigoDist
        inimigo.style.left= inimigoX[0]+"px"
    }
    if((y + 30) < inimigoY[0] && bool ==true){
        inimigoY[0] = inimigoY[0] - velInimigoDist
        inimigo.style.top= inimigoY[0]+"px"
    }
    if((y + 30) > inimigoY[0] && bool ==true){
        inimigoY[0] = inimigoY[0] + velInimigoDist
        inimigo.style.top= inimigoY[0]+"px"
    }

    //Movimento do Inimigo 1
    if(nivel>=2){
        if((x + 40) > inimigoX[1] && bool ==true){
            inimigoX[1] = inimigoX[1] + velInimigoDist
            inimigo1.style.left= inimigoX[1]+"px"
        }
        if((x + 40) < inimigoX[1] && bool ==true){
            inimigoX[1] = inimigoX[1] - velInimigoDist
            inimigo1.style.left= inimigoX[1]+"px"
        }
        if((y + 30) < inimigoY[1] && bool ==true){
            inimigoY[1] = inimigoY[1] - velInimigoDist
            inimigo1.style.top= inimigoY[1]+"px"
        }
        if((y + 30) > inimigoY[1] && bool ==true){
            inimigoY[1] = inimigoY[1] + velInimigoDist
            inimigo1.style.top= inimigoY[1]+"px"
        }
    }

    //Movimento do Inimigo 2
    if(nivel>=3){
        if((x + 40) > inimigoX[2] && bool ==true){
            inimigoX[2] = inimigoX[2] + velInimigoDist
            inimigo2.style.left= inimigoX[2]+"px"
        }
        if((x + 40) < inimigoX[2] && bool ==true){
            inimigoX[2] = inimigoX[2] - velInimigoDist
            inimigo2.style.left= inimigoX[2]+"px"
        }
        if((y + 30) < inimigoY[2] && bool ==true){
            inimigoY[2] = inimigoY[2] - velInimigoDist
            inimigo2.style.top= inimigoY[2]+"px"
        }
        if((y + 30) > inimigoY[2] && bool ==true){
            inimigoY[2] = inimigoY[2] + velInimigoDist
            inimigo2.style.top= inimigoY[2]+"px"
        }
    }

    //Movimento do Inimigo 3
    if(nivel>=4){
        if((x + 40) > inimigoX[3] && bool ==true){
            inimigoX[3] = inimigoX[3] + velInimigoDist
            inimigo3.style.left= inimigoX[3]+"px"
        }
        if((x + 40) < inimigoX[3] && bool ==true){
            inimigoX[3] = inimigoX[3] - velInimigoDist
            inimigo3.style.left= inimigoX[3]+"px"
        }
        if((y + 30) < inimigoY[3] && bool ==true){
            inimigoY[3] = inimigoY[3] - velInimigoDist
            inimigo3.style.top= inimigoY[3]+"px"
        }
        if((y + 30) > inimigoY[3] && bool ==true){
            inimigoY[3] = inimigoY[3] + velInimigoDist
            inimigo3.style.top= inimigoY[3]+"px"
        }
    }

    //Movimento do Inimigo 4
    if(nivel>=5){
        if((x + 40) > inimigoX[4] && bool ==true){
            inimigoX[4] = inimigoX[4] + velInimigoDist
            inimigo4.style.left= inimigoX[4]+"px"
        }
        if((x + 40) < inimigoX[4] && bool ==true){
            inimigoX[4] = inimigoX[4] - velInimigoDist
            inimigo4.style.left= inimigoX[4]+"px"
        }
        if((y + 30) < inimigoY[4] && bool ==true){
            inimigoY[4] = inimigoY[4] - velInimigoDist
            inimigo4.style.top= inimigoY[4]+"px"
        }
        if((y + 30) > inimigoY[4] && bool ==true){
            inimigoY[4] = inimigoY[4] + velInimigoDist
            inimigo4.style.top= inimigoY[4]+"px"
        }
    }

},velInimigo)

//Dano do inimigo
let danoInimigoInterval=setInterval(function(){

    //Verificando colisão do inimigo 0 no player
    if(
        x < (inimigoX[0] + inimigoWidth) && (x + playerWidth) > inimigoX[0] &&
        y < (inimigoY[0] + inimigoHeight) && (y + playerHeight) > inimigoY[0] 
        && bool ==true && vidaInimigo[0] > 0
    ){
        vidaPlayer= vidaPlayer-10
        vidaPlayerHeader.innerText=`Vida: `+vidaPlayer
        }

    //Verificando colisão do inimigo 1 no player
    if(
        x < (inimigoX[1] + inimigoWidth) && (x + playerWidth) > inimigoX[1] &&
        y < (inimigoY[1] + inimigoHeight) && (y + playerHeight) > inimigoY[1] 
        && bool ==true && nivel >= 2 && vidaInimigo[1] > 0
    ){
        vidaPlayer= vidaPlayer-10
        vidaPlayerHeader.innerText=`Vida: `+vidaPlayer
        }

    //Verificando colisão do inimigo 2 no player
    if(
        x < (inimigoX[2] + inimigoWidth) && (x + playerWidth) > inimigoX[2] &&
        y < (inimigoY[2] + inimigoHeight) && (y + playerHeight) > inimigoY[2] 
        && bool ==true && nivel >= 3 && vidaInimigo[2] > 0
    ){
        vidaPlayer= vidaPlayer-10
        vidaPlayerHeader.innerText=`Vida: `+vidaPlayer
        }

    //Verificando colisão do inimigo 3 no player
    if(
        x < (inimigoX[3] + inimigoWidth) && (x + playerWidth) > inimigoX[3] &&
        y < (inimigoY[3] + inimigoHeight) && (y + playerHeight) > inimigoY[3] 
        && bool ==true && nivel >= 4 && vidaInimigo[3] > 0
    ){
        vidaPlayer= vidaPlayer-10
        vidaPlayerHeader.innerText=`Vida: `+vidaPlayer
        }

    //Verificando colisão do inimigo 4 no player
    if(
        x < (inimigoX[4] + inimigoWidth) && (x + playerWidth) > inimigoX[4] &&
        y < (inimigoY[4] + inimigoHeight) && (y + playerHeight) > inimigoY[4] 
        && bool ==true && nivel >= 5 && vidaInimigo[4] > 0
    ){
        vidaPlayer= vidaPlayer-10
        vidaPlayerHeader.innerText=`Vida: `+vidaPlayer
        }


    //Verificando se o player está vivo
    if(vidaPlayer<=0){
        bool = false
        
        nivelMorte.innerText='Nível alcançado: '+ nivel
        tempoMorte.innerText='Tempo de jogo: '+ cronometro
        telaDeMorte.style.display='block'
        
        }
    },1000)

//Cronometro
let cronometroInterval=setInterval(function(){
    if(vidaPlayer>0 && bool ==true){
        cronometro++
        headTempo.innerText= cronometro+` segundos`
    }
},1000)

//Atirar
let size= 20
let carregado=true
let miraX,miraY
let miraWidth=134
let miraHeight=110
let inimigoWidth=60
let inimigoHeight=35

window.addEventListener("click",function(){
    
    if(carregado==true && vidaPlayer>0 && inimigosMortos==false && bool ==true){
        mira.style.display='block'
        mira.style.left=(mouseEixoX - 353)+"px"
        mira.style.top=(mouseEixoY - 185)+"px"

        miraX=(mouseEixoX - 353)
        miraY=(mouseEixoY - 185)

        carregado=false

        //Verificando colisão do tiro no inimigo 0
        if(
            inimigoX[0] < (miraX + miraWidth) && (inimigoX[0] + inimigoWidth) > miraX &&
            inimigoY[0] < (miraY + miraHeight) && (inimigoY[0] + inimigoHeight) > miraY  
            && bool == true
        ){vidaInimigo[0]=vidaInimigo[0]-danoPlayer}

        //Verificando colisão do tiro no inimigo 1
        if(
            inimigoX[1] < (miraX + miraWidth) && (inimigoX[1] + inimigoWidth) > miraX &&
            inimigoY[1] < (miraY + miraHeight) && (inimigoY[1] + inimigoHeight) > miraY  
            && bool == true && nivel>=2
        ){vidaInimigo[1]=vidaInimigo[1]-danoPlayer}

        //Verificando colisão do tiro no inimigo 2
        if(
            inimigoX[2] < (miraX + miraWidth) && (inimigoX[2] + inimigoWidth) > miraX &&
            inimigoY[2] < (miraY + miraHeight) && (inimigoY[2] + inimigoHeight) > miraY  
            && bool == true && nivel>=3
        ){vidaInimigo[2]=vidaInimigo[2]-danoPlayer}

        //Verificando colisão do tiro no inimigo 3
        if(
            inimigoX[3] < (miraX + miraWidth) && (inimigoX[3] + inimigoWidth) > miraX &&
            inimigoY[3] < (miraY + miraHeight) && (inimigoY[3] + inimigoHeight) > miraY  
            && bool == true && nivel>=4
        ){vidaInimigo[3]=vidaInimigo[3]-danoPlayer}

        //Verificando colisão do tiro no inimigo 4
        if(
            inimigoX[4] < (miraX + miraWidth) && (inimigoX[4] + inimigoWidth) > miraX &&
            inimigoY[4] < (miraY + miraHeight) && (inimigoY[4] + inimigoHeight) > miraY  
            && bool == true && nivel>=5
        ){vidaInimigo[4]=vidaInimigo[4]-danoPlayer}


        //Checando se todos os inimigos estão mortos
        if(nivel==1 && vidaInimigo[0]<=0){inimigosMortos=true}
        if(nivel==2 && vidaInimigo[0]<=0 && vidaInimigo[1]<=0){inimigosMortos=true}
        if(nivel==3 && vidaInimigo[0]<=0 && vidaInimigo[1]<=0 &&
           vidaInimigo[2] <= 0
        ){inimigosMortos=true}
        if(nivel==4 && vidaInimigo[0]<=0 && vidaInimigo[1]<=0 &&
            vidaInimigo[2] <= 0  && vidaInimigo[3]<=0
         ){inimigosMortos=true}
        if(nivel==5 && vidaInimigo[0]<=0 && vidaInimigo[1]<=0 &&
            vidaInimigo[2] <= 0  && vidaInimigo[3]<=0 && vidaInimigo[4]<=0
         ){inimigosMortos=true}

        if(inimigosMortos==true){
            bool = false

            telaDeVitoria.style.display='block' 
            
            if(nivel >= 5){
                nivelVitoria.innerText='Você concluiu o jogo em '+cronometro+' segundos \n\n Meu instagram: @roldezirzacarias \n\n Obrigado por jogar!'
                document.querySelector('.aprimorar').style.display='none'
                document.querySelector('.continuar').style.display='none'
                this.document.querySelector('.tituloMelhorar').innerHTML=`Confira mais jogos no portifólio do meu curriculo virtual acessando o seguinte link: \n\n <a href="https://roldezir.github.io/roldezirjuniorcv/portifolio.html">Curriculo Roldezir</a>`
            }else{nivelVitoria.innerText='Você completou o Nível: '+nivel}
        }

        //Fazer o inimigo desaparecer caso sua vida fique zerada
        if(vidaInimigo[0] <= 0){inimigo.style.display='none'}
        if(vidaInimigo[1] <= 0){inimigo1.style.display='none'}
        if(vidaInimigo[2] <= 0){inimigo2.style.display='none'}
        if(vidaInimigo[3] <= 0){inimigo3.style.display='none'}
        if(vidaInimigo[4] <= 0){inimigo4.style.display='none'}

        //Tempo de recarga do tiro
        let cooldow=this.setInterval(function(){
            carregado=true
            mira.style.display='none'
            clearInterval(cooldow)
        },3000)

    }
        
})

//Tela de Morte
function jogarNovamente(){
    location.reload()
}



let nVidaPlayer = 0
//Tela de Vitoria
function continuar(){
    
    x = 640
    y = 320
    player.style.top=y+'px'
    player.style.left=x+'px'
    
    nivel++
    
    //Nivel 2
    if(document.getElementById("aprimorar1").checked && nivel==2){
        nVidaPlayer ++
        window.alert('Vida: +'+10)
    }else if(document.getElementById("aprimorar2").checked && nivel==2){
        playerVelocidade = playerVelocidade + 4
        window.alert('Velocidade: +'+4)
    }else if(document.getElementById("aprimorar3").checked && nivel==2){
        danoPlayer = danoPlayer + 5
        window.alert('Dano: +'+5)
    }

    //Nivel 3
    if(document.getElementById("aprimorar1").checked && nivel==3){
        nVidaPlayer ++
        window.alert('Vida: +'+10)
    }else if(document.getElementById("aprimorar2").checked && nivel==3){
        playerVelocidade = playerVelocidade + 4
        window.alert('Velocidade: +'+4)
    }else if(document.getElementById("aprimorar3").checked && nivel==3){
        danoPlayer = danoPlayer + 10
        window.alert('Dano: +'+5)}

    //Nivel 4
    if(document.getElementById("aprimorar1").checked && nivel==4){
        nVidaPlayer ++
        window.alert('Vida: +'+10)
    }else if(document.getElementById("aprimorar2").checked && nivel==4){
        playerVelocidade = playerVelocidade + 4
        window.alert('Velocidade: +'+4)
    }else if(document.getElementById("aprimorar3").checked && nivel==4){
        danoPlayer = danoPlayer + 15
        window.alert('Dano: +'+5)}   
    
    //Nivel 5
    if(document.getElementById("aprimorar1").checked && nivel==5){
        nVidaPlayer ++
        window.alert('Vida: +'+10)
    }else if(document.getElementById("aprimorar2").checked && nivel==5){
        playerVelocidade = playerVelocidade + 4
        window.alert('Velocidade: +'+4)
    }else if(document.getElementById("aprimorar3").checked && nivel==5){
        danoPlayer = danoPlayer + 20
        window.alert('Dano: +'+5)}

    if(nVidaPlayer==0){
        vidaPlayer = 20
    }else if(nVidaPlayer==1){
        vidaPlayer= 30
    }else if(nVidaPlayer==2){
        vidaPlayer = 40
    }else if(nVidaPlayer==3){
        vidaPlayer = 50
    }else if(nVidaPlayer==4){
        vidaPlayer = 60
    }

    telaDeVitoria.style.display='none'
    levelManager()
}  

//Gerenciador de nivel
function levelManager(){
    if(nivel == 2){
        headNivel.innerText=`Nível: ${nivel}`
        vidaPlayerHeader.innerText=`Vida: `+vidaPlayer
        
        vidaInimigo[0]=30
        inimigoY = [620, 580]
        inimigoX = [740, 400]
        inimigo.style.top=inimigoY[0]+'px'
        inimigo.style.left=inimigoX[0]+'px'
        inimigo.style.top=inimigoY[1]+'px'
        inimigo.style.left=inimigoX[1]+'px'

        inimigo.style.display='block'
        inimigo1.style.display='block'

        inimigosMortos=false

        velInimigo=700
        velInimigoDist=15

        bool=true
    }

    if(nivel == 3){
        headNivel.innerText=`Nível: ${nivel}`
        vidaPlayerHeader.innerText=`Vida: `+vidaPlayer
        
        vidaInimigo[0]=50
        vidaInimigo[1]=50
        inimigoY = [620, 220, 320]
        inimigoX = [940, 800, 950]
        inimigo.style.top=inimigoY[0]+'px'
        inimigo.style.left=inimigoX[0]+'px'
        inimigo.style.top=inimigoY[1]+'px'
        inimigo.style.left=inimigoX[1]+'px'
        inimigo.style.top=inimigoY[2]+'px'
        inimigo.style.left=inimigoX[2]+'px'

        inimigo.style.display='block'
        inimigo1.style.display='block'
        inimigo2.style.display='block'

        inimigosMortos=false

        velInimigo=300
        velInimigoDist=20

        bool=true
    }

    if(nivel == 4){
        headNivel.innerText=`Nível: ${nivel}`
        vidaPlayerHeader.innerText=`Vida: `+vidaPlayer
        
        vidaInimigo[0]=80
        vidaInimigo[1]=80
        vidaInimigo[2]=80
        inimigoY = [220, 20, 210, 600]
        inimigoX = [340, 650, 850, 520]
        inimigo.style.top=inimigoY[0]+'px'
        inimigo.style.left=inimigoX[0]+'px'
        inimigo.style.top=inimigoY[1]+'px'
        inimigo.style.left=inimigoX[1]+'px'
        inimigo.style.top=inimigoY[2]+'px'
        inimigo.style.left=inimigoX[2]+'px'
        inimigo.style.top=inimigoY[3]+'px'
        inimigo.style.left=inimigoX[3]+'px'

        inimigo.style.display='block'
        inimigo1.style.display='block'
        inimigo2.style.display='block'
        inimigo3.style.display='block'

        inimigosMortos=false

        velInimigo=100
        velInimigoDist=25

        bool=true
    }

    if(nivel == 5){
        headNivel.innerText=`Nível: ${nivel}`
        vidaPlayerHeader.innerText=`Vida: `+vidaPlayer
        
        vidaInimigo[0]=100
        vidaInimigo[1]=100
        vidaInimigo[2]=100
        vidaInimigo[3]=100
        inimigoY = [100, 220, 220, 648, 362]
        inimigoX = [640, 500, 133, 420, 830]
        inimigo.style.top=inimigoY[0]+'px'
        inimigo.style.left=inimigoX[0]+'px'
        inimigo.style.top=inimigoY[1]+'px'
        inimigo.style.left=inimigoX[1]+'px'
        inimigo.style.top=inimigoY[2]+'px'
        inimigo.style.left=inimigoX[2]+'px'
        inimigo.style.top=inimigoY[3]+'px'
        inimigo.style.left=inimigoX[3]+'px'
        inimigo.style.top=inimigoY[4]+'px'
        inimigo.style.left=inimigoX[4]+'px'

        inimigo.style.display='block'
        inimigo1.style.display='block'
        inimigo2.style.display='block'
        inimigo3.style.display='block'
        inimigo4.style.display='block'

        inimigosMortos=false

        velInimigo=50
        velInimigoDist=30

        bool=true
    }

}