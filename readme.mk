## Formas de utilizar ícones dentro do input 
	- Position relative/absolute 
	- Label personalizado com ícone (font-awesome)

## Animação com input focus
	- Animação do border-bottom-width
	- Como fazer com que o ícone mude de característica junto com o input:focus
		- utilize a concatenação (input:focus + label)
		- o + é somente para o elemento abaixo do input, já o ~ é para qualquer elemento abaixo do input

## Mover o label para o topo quando o input:focus for aplicado
	- Utilizar Position relative/absolute
	- Posicionar o label como placeholder com position (top, left, bottom, right)
	- Quando o input:focus for acionado o label mudará de posição com position (top left, bottom, right)
	- Dúvida: Depois que o label muda de posição e algo é digitado no input, o label volta para a posição inicial e sobrepõe o texto. Como resolver? 
	- O que eu quero? - Manter o label em cima do input depois que o usuário tenha digitado algo dentro do input 

## Adicionar box-shadow no input