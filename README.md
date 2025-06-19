# Amigo Secreto 🎁

![Tela Principal](/screenshot/tela-principal.png)

## Menu

- [Descrição](#descrição)
  - [Layout do Projeto](#layout)
  - [Principais recursos incluem](#principais-recursos-incluem)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura de Pastas](#estrutura-de-pastas)
  - [Arquivos Principais](#arquivos-principais)
- [Como Instalar e Rodar o Projeto](#como-instalar-e-rodar-o-projeto)
  - [Configuração](#configuração)
  - [Casos de Uso Comuns](#casos-de-uso-comuns)
  - [Solução de Problemas](#solução-de-problemas)
- [Projeto ao Vivo](#projeto-ao-vivo)
- [Fluxo de Dados](#fluxo-de-dados)
- [Próximos Passos de Desenvolvimento](#próximos-passos-de-desenvolvimento)
- [Licença](#licença)
- [Autor](#autor)

## Descrição

**Amigo Secreto** é uma aplicação web moderna e intuitiva desenvolvida em React com TypeScript que simplifica a organização de sorteios de amigo secreto. Com uma interface elegante e responsiva, a aplicação permite cadastrar participantes de forma rápida, realizar sorteios automáticos garantindo que ninguém tire a si mesmo, e consultar os resultados de maneira privada e segura. Construída com as melhores práticas de desenvolvimento, incluindo gerenciamento de estado com Recoil, testes automatizados e validações robustas, oferece uma experiência fluida tanto para organizadores quanto para participantes.

### Layout

O layout do projeto é responsivo e foi desenvolvido no [Figma](https://www.figma.com/design/c3RarCwq533GF1rrTRQEES/Sorteador-de-amigo-secreto?node-id=35-134&p=f&t=Zqpu29yONV0B2HLp-0) pela equipe da Alura.

### Principais recursos incluem

- ✨ **Adicionar Participantes**: Interface intuitiva para cadastrar participantes do amigo secreto
- 🎲 **Sorteio Automático**: Algoritmo que garante que cada participante seja sorteado apenas uma vez
- 🔍 **Consulta Individual**: Cada participante pode consultar seu amigo secreto de forma privada
- ⚡ **Feedback Visual**: Mensagens de erro e sucesso com timer automático
- 📱 **Design Responsivo**: Interface adaptável para diferentes tamanhos de tela
- 🧪 **Cobertura de Testes**: Testes unitários e de integração com Vitest

## Tecnologias Utilizadas

### Frontend
- **React 18.3.1** - Biblioteca para construção da interface
- **TypeScript 5.8.3** - Superset do JavaScript com tipagem estática
- **Vite 6.3.5** - Build tool e dev server ultrarrápido
- **React Router DOM 7.6.2** - Roteamento para aplicações React
- **SCSS/Sass** - Pré-processador CSS para estilização avançada

### Gerenciamento de Estado
- **Recoil 0.7.7** - Biblioteca de gerenciamento de estado para React

### Utilitários
- **React Icons 5.5.0** - Biblioteca de ícones para React
- **just-shuffle 4.2.0** - Algoritmo de embaralhamento para o sorteio

### Desenvolvimento e Testes
- **Vitest 3.2.3** - Framework de testes unitários
- **Testing Library** - Utilitários para testes de componentes React
- **ESLint** - Linter para manter qualidade do código
- **TypeScript ESLint** - Regras específicas para TypeScript

## Estrutura de Pastas

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Card/           # Componente de cartão
│   ├── Footer/         # Rodapé da aplicação
│   ├── Formulario/     # Formulário de cadastro
│   ├── Header/         # Cabeçalho da aplicação
│   ├── Jogar/          # Botão para iniciar sorteio
│   ├── ListaParticipantes/ # Lista de participantes
│   └── Logo/           # Logotipo da aplicação
├── pages/              # Páginas da aplicação
│   ├── Home/           # Página inicial
│   └── Sorteio/        # Página de sorteio
├── state/              # Gerenciamento de estado
│   ├── atom.ts         # Átomos do Recoil
│   ├── helpers/        # Funções auxiliares
│   │   └── realizarSorteio.ts
│   └── hooks/          # Hooks customizados
│       ├── useAdicionarParticipante.ts
│       ├── useListaDeParticipantes.ts
│       ├── useMensagemErro.ts
│       └── useResultadoSorteio.ts
├── styles/             # Estilos globais
└── App.tsx            # Componente principal
```

### Arquivos Principais

- **`App.tsx`** - Componente raiz com roteamento e provider do Recoil
- **`state/atom.ts`** - Define os átomos de estado (participantes, resultado, erros)
- **`state/helpers/realizarSorteio.ts`** - Algoritmo de sorteio que garante distribuição justa
- **`pages/Home/index.tsx`** - Página de cadastro de participantes
- **`pages/Sorteio/index.tsx`** - Página de consulta do amigo secreto

## Como Instalar e Rodar o Projeto

### Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn** (gerenciador de pacotes)

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Melksedeque/amigo-secreto.git
   cd amigo-secreto
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```

### Configuração

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse a aplicação:**
   - Abra seu navegador em `http://localhost:5173`

### Casos de Uso Comuns

#### Executar Testes
```bash
# Executar todos os testes
npm run test

# Executar testes em modo watch
npm run test -- --watch

# Executar testes com cobertura
npm run test -- --coverage
```

#### Build para Produção
```bash
# Gerar build otimizado
npm run build

# Visualizar build localmente
npm run preview
```

#### Linting
```bash
# Verificar qualidade do código
npm run lint
```

### Solução de Problemas

**Erro de dependências:**
- Delete `node_modules` e `package-lock.json`
- Execute `npm install` novamente

**Porta já em uso:**
- O Vite automaticamente tentará a próxima porta disponível
- Ou especifique uma porta: `npm run dev -- --port 3000`

**Problemas de TypeScript:**
- Verifique se todas as dependências de tipos estão instaladas
- Execute `npm run build` para verificar erros de compilação


## Projeto ao Vivo

Para acessar uma versão de demonstração do projeto, visite: [Amigo Secreto](https://amigo-secreto-sandy-beta.vercel.app)

## Fluxo de Dados

A aplicação utiliza **Recoil** para gerenciamento de estado global, seguindo um padrão de arquitetura limpa:

### Estados Globais (Atoms)
- **`listaParticipantesState`** - Array com nomes dos participantes
- **`resultadoAmigoSecreto`** - Map com o resultado do sorteio (participante → amigo secreto)
- **`erroState`** - String com mensagens de erro temporárias

### Fluxo de Funcionamento

1. **Cadastro de Participantes** (`/`)
   - Usuário digita nome no formulário
   - Hook `useAdicionarParticipante` valida:
     - Nome deve ter mais de 3 caracteres
     - Nome não pode ser duplicado
   - Se válido, adiciona ao `listaParticipantesState`
   - Se inválido, exibe erro em `erroState` por 5 segundos

2. **Realização do Sorteio**
   - Botão "Jogar" chama `realizarSorteio()`
   - Algoritmo embaralha participantes usando `just-shuffle`
   - Cria pares garantindo que ninguém tire a si mesmo
   - Salva resultado em `resultadoAmigoSecreto`
   - Redireciona para `/sorteio`

3. **Consulta do Resultado** (`/sorteio`)
   - Participante seleciona seu nome
   - Hook `useResultadoSorteio` busca amigo secreto no Map
   - Exibe resultado por 5 segundos (timer automático)

### Hooks Customizados
- **`useListaDeParticipantes`** - Retorna lista de participantes
- **`useAdicionarParticipante`** - Adiciona participante com validação
- **`useMensagemErro`** - Retorna mensagem de erro atual
- **`useResultadoSorteio`** - Retorna Map com resultado do sorteio

## Próximos Passos de Desenvolvimento

O projeto Amigo Secreto está em constante evolução. Abaixo estão os próximos recursos e melhorias planejados:

### 🚀 Funcionalidades Futuras
- **Persistência de Dados**: Salvar sorteios no localStorage ou banco de dados
- **Múltiplos Sorteios**: Gerenciar vários grupos de amigo secreto
- **Configurações Avançadas**: Valor mínimo/máximo de presente, data limite
- **Notificações**: Sistema de lembretes por email ou push notifications
- **Tema Escuro**: Alternância entre modo claro e escuro
- **Exportar Lista**: Download da lista de participantes em PDF/Excel

### 🔧 Melhorias Técnicas
- **PWA**: Transformar em Progressive Web App
- **Testes E2E**: Implementar testes end-to-end com Cypress
- **Acessibilidade**: Melhorar suporte para leitores de tela
- **Performance**: Implementar lazy loading e code splitting
- **Internacionalização**: Suporte para múltiplos idiomas
- **Storybook**: Documentação visual dos componentes

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [MIT License](https://github.com/Melksedeque/amigo-secreto?tab=MIT-1-ov-file) para mais detalhes.

## Autor

- GitHub - [Melksedeque](https://github.com/Melksedeque/)
- FrontEndMentor - [Melksedeque](https://www.frontendmentor.io/profile/Melksedeque)
- Twitter / X - [SouzaMelk](https://x.com/SouzaMelk)
- LinkedIn - [Melksedeque Silva](https://www.linkedin.com/in/melksedeque-silva/)