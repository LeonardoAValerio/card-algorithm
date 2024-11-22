# Algoritmo de Cartas
Esse algoritmo é baseado em um jogo de cartas, onde o algoritmo joga até o final, mostrando cada rodada, e quem foi o player vencedor.
## Como funciona o Jogo?
O Jogo não tem nome, então vou chama-lo de o **Jogo**.  *Sinta-se a vontade para jogar em casa*
### Oque precisa:
1. Um baralho de cartas, onde tenha uma quantidade *par* de cartas.
2. Dois jogadores.
### Começando o jogo
São divididos para os dois jogadores as cartas, onde que cada um fique com a mesma quantidade de cartas. Então um jogador aleatório começa com a rodada nele.
#### As rodadas
O jogador pega uma carta do topo de seu deck, e analisa se vai ganhar a rodada pelo *naipe* ou pelo valor de sua *carta*. Quando escolhido os dois jogadores jogam suas cartas e comparam
- A comparação de valor é baseado se o valor é maior que outro, de quem for maior ganhar. Exceto pela regra que o valor 1, ganha do valor 12
- A comparação dos naipes é baseada em ouro < espada < copa < paus, sendo quem ganhar nessa comparação ganha a rodada.
- Se empatar o jogador que não definiu oque seria avaliado na rodada ganha.

Toda vez que um jogador ganha, ele pega as duas cartas que foram jogadas na rodada e coloca em seu deck. 
Além de que toda rodada é trocada quem define oque vai ser avaliado naquela rodada, ou seja uma vez é o jogador 1, e na próxima o 2, e assim seguindo.
###  O joga acaba quando?
O jogo só acaba quando um dos jogadores chega a 0 cartas, assim com todas as cartas é o Vitorioso
## O Algoritmo
O algoritmo visa então jogar esse jogo de forma automática entre os dois jogadores. Sendo assim existem duas formas de você definir como o jogador vai escolher sua carta, sendo elas:
- **Probabilidade simples** : O jogador vai apenas de maneira simples verificar qual seria o melhor escolha visando a carta que está sua mão. Ou seja ele vai ver o valor e o naipe e ver a probabilidade em relação ao Deck completo qual a melhor carta.
- **Probabilidade complexa**: O jogador analisaria todas as cartas que ele já jogou, sabendo então quais cartas tem, assim descobrindo a probabilidade das cartas do oponentes. Podendo também saber as cartas que estão na mão do oponente aperfeiçoando ainda mais qual lance escolher

Dentro deste projeto foi abordado inicialmente de forma simples, para apenas conseguir apresentar e testar o jogo
## Como instalar e testar o projeto
1. Fazer um fork no projeto
2. Clonar o projeto em sua máquina
3. entrar na pasta e baixar todas as dependências utilizando:
```bash
npm install
```
4. Rodar o projeto com o comando:
```bash
npm run dev
```
5. Ao rodar o projeto será gerado um "result.txt" dentro da pasta do projeto, onde são apresentados as rodadas e a situação dos players
