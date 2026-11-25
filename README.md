# Ficha de Herói: Bronkyu - O Cavaleiro da Espada Torta

Este projeto foi desenvolvido como evolução da Parte 1 para a Parte 2 do Projeto Prático (JavaScript - Módulo 3). Trata-se de uma página web interativa em formato de tela de status de RPG para o personagem autoral Bronkyu, um guerreiro rúnico que vaga pelo mundo empunhando a Lâmina do Vazio, uma espada que drena a força vital de seus oponentes.

## 🎨 Protótipo Inicial
- **Link do Protótipo (Canva):** [Clique no link para visualizar](https://canva.link/648us04bfsq3chm)

---

## Funcionalidades de JavaScript Implementadas (Parte 2)

1. **Menu Hambúrguer Responsivo**:
   - Alternância dinâmica da classe .ativo via classList.toggle() ao clicar no ícone do menu em dispositivos móveis, mudando o símbolo visual entre ☰ e X através do operador ternário.

2. **História Expansível ("Ver mais")**:
   - Botão interativo na seção Sobre o Herói que revela ou oculta o segundo parágrafo da história, alternando o texto entre "Ver história completa" e "Ver menos".

3. **Barra de Experiência (XP) Interativa**:
   - Botão "Completar Missão (+25 XP)" que incrementa o contador de experiência de um total de 200 XP, atualiza proporcionalmente a largura da barra de progresso em tempo real e dispara uma mensagem de "Nível Up!" ao atingir o limite.

4. **Inventário Dinâmico e Filtros**:
   - Os itens do inventário são armazenados em um Array de Objetos e renderizados automaticamente no DOM via .forEach() e createElement(). Inclui contador dinâmico de itens e botões de filtro por categoria (Todos, Armas, Armaduras, Relíquias) utilizando o método .filter(), com destaque visual para a categoria ativa.

5. **Formulário de Contato com Validação**:
   - Intercepta o envio com `preventDefault()`, verifica se os campos obrigatórios (nome, e-mail e mensagem) estão preenchidos, valida o formato do e-mail e exibe mensagens dinâmicas de erro ou sucesso diretamente na tela.

6. **Alternância de Tema (Modo Noturno / Modo Claro)**:
   - Botão na barra de navegação que alterna a classe `.modo-claro` no `<body>`, adaptando o contraste e as variáveis de cores da interface.

7. **Pesquisa Complementar — Persistência com `localStorage`**:
   - Salva automaticamente o XP, o nível atual do herói e o tema selecionado no navegador do usuário (`localStorage`), restaurando o progresso ao recarregar a página.

---

## 🛠️ Decisões de UI/UX

Durante o desenvolvimento da página, foram aplicados os seguintes princípios de UI/UX:

- **PARTE 1** - Estrutura e Estética:

1. **Hierarquia Visual:**
   - O nome do herói (`<h1>`) e sua imagem de capa recebem o maior destaque visual no topo, guiando o olhar do usuário primeiramente para a identidade do personagem antes de avançar para a história e atributos.

2. **Contraste e Escolha da paleta de cores:**
   - Foi utilizada uma paleta de cores escura para o fundo (`#030408`) combinada com textos em branco/azul claro (`aliceblue`/`#f8fafc`) para garantir alto contraste e leitura confortável em todas as seções.

3. **Consistência e Conforto Visual:**
   - Padronização de bordas arredondadas, efeitos de *hover* nos botões e paleta de cores em tons de azul espectral em todas as seções (Inventário, Atributos e Galeria).

- **PARTE 2**: — Princípios de Interação:

1. **Visibilidade do Estado do Sistema**:
   - O menu mobile altera seu ícone de ☰ para X quando aberto, e a barra de XP exibe numericamente a pontuação atual (X / 200 XP) e o nível do personagem.

2. **Feedback Imediato**:
   - Cada clique em "Completar Missão" atualiza visualmente a barra de progresso e exibe confirmação textual na tela. Da mesma forma, o envio do formulário retorna feedback colorido (vermelho para erro, verde para sucesso) sem depender de alert().

3. **Prevenção de Erros**:
   - O formulário orienta o usuário antes de concluir o envio caso algum campo obrigatório esteja vazio ou o e-mail seja inválido.

4. **Controle e Liberdade do Usuário**:
   - O menu mobile, a história expandida e os filtros do inventário podem ser alternados ou revertidos a qualquer momento sem recarregar a página.

---

## 🚀 Tecnologias Utilizadas
- **HTML5** (Semântica acessível)
- **CSS3** (Flexbox, CSS Grid, Media Queries para responsividade e Variáveis `:root`)
- **JavaScript (ES6+)** (Manipulação do DOM, Eventos, Arrays/Objetos, Condicionais e Validação de Formulários)

---

## Link do Repositório no GitHub
- GitHub: https://github.com/Guilherme-O-Lima/ficha-heroi-parte2

## 👤 Autor
- **Guilherme Orguem Lima**
- Estudante de Engenharia da Computação
- [LinkedIn](https://www.linkedin.com/in/guilherme-orguem-8b932a402/)
