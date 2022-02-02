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
	- Solução: Utilizar a pseudo-classe :valid que representa qualquer elemento do form cujo conteúdo seja validado com sucesso. Isso faz com que os campos válidos adotem uma aparência que ajudem os usuários a confirmar que seus dados estão formatados corretamente
	- Aplicar: Utilziar a pseudo-classe :valid para que quando um conteúdo de um input seja validado, o label não volte para a posição inicial. 
	- pseudoclasse :invalid

## Adicionar box-shadow no input

## TABELAS - DIFICULDADES
## Propriedade border-colapse = collapse remove o espaço entre bordas de tabelas
## Como colocar border-radius na tabela? -> 
## Como separar o thead do tbody??? alternativas


## Dropdown com JavaScript 
	- Notificações
	- Perfil do Usuário 
	- Aulas Síncronas
	- Resultados por página em Atividades
	

## Modais - Como criar modal 
	- Botão criar atividade (Modal)
	- Filtro de atividades (Modal)