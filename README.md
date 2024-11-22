# Algoritmo de Cartas
Este algoritmo é baseado em um jogo de cartas, onde o algoritmo simula as rodadas até o final, mostrando cada turno e quem foi o jogador vencedor.
## Como funciona o jogo?
O jogo não tem nome definido, então vou chamá-lo de **Jogo**. *Sinta-se à vontade para jogá-lo em casa!*
### O que é necessário:
1. Um baralho de cartas, com uma quantidade *par* de cartas.
2. Dois jogadores.
### Como começar o jogo
As cartas são divididas igualmente entre os dois jogadores, de forma que ambos fiquem com a mesma quantidade de cartas. Um jogador aleatório é escolhido para iniciar a rodada.
#### As rodadas
O jogador da vez pega uma carta do topo de seu deck e decide se vai ganhar a rodada pelo *naipe* ou pelo *valor* de sua carta. Após decidir, ambos os jogadores jogam suas cartas, e a comparação é feita:
- A comparação de valor é baseada em qual carta tem o valor maior. Porém, há uma regra especial: o valor **1** vence o valor **12**.
- A comparação de naipes segue a seguinte ordem: **ouro < espada < copas < paus**. O jogador com o naipe superior vence.
-  **Se existir coriga**: o coriga tem o valor **0** e o naipe maior que **paus**.
- Em caso de empate, o jogador que não escolheu o critério (naipe ou valor) ganha a rodada.

Sempre que um jogador vence a rodada, ele pega as duas cartas jogadas e as coloca no final de seu deck. Além disso, o direito de definir o critério de avaliação (naipe ou valor) alterna entre os jogadores a cada rodada.
### Quando o jogo termina?
O jogo termina quando um dos jogadores fica sem cartas. O jogador que possuir todas as cartas é declarado o **vencedor**.

---
## O Algoritmo
O algoritmo foi desenvolvido para jogar este jogo de forma automática entre dois jogadores. Existem duas formas de configurar como os jogadores escolhem suas jogadas:
-  **Probabilidade Simples**: O jogador analisa as cartas disponíveis em sua mão e escolhe a melhor jogada com base na probabilidade calculada em relação ao baralho completo.

-  **Probabilidade Complexa**: O jogador leva em consideração todas as cartas já jogadas, deduzindo as cartas restantes no deck do oponente. Dessa forma, ele pode calcular probabilidades mais precisas e otimizar suas escolhas.

Neste projeto, o modelo inicial foi implementado com a abordagem simples para apresentar e testar o funcionamento do jogo.

---
## Como instalar e testar o projeto
1. Faça um fork do projeto.
2. Clone o repositório em sua máquina.
3. Entre na pasta do projeto e instale as dependências executando:
```bash
npm  install
```
4. Rode o projeto com o comando:
```bash
npm  run  dev
```
5. Ao rodar o projeto, será gerado um arquivo chamado ```result.txt``` dentro da pasta do projeto, onde são apresentadas todas as rodadas e a situação dos jogadores.
