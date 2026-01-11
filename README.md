# TechZone Shop

Uma loja de tecnologia moderna e responsiva construída com React, especializada em produtos gamer, periféricos, wearables e acessórios.

## Sobre o Projeto

TechZone é um e-commerce completo desenvolvido como projeto educacional no curso Engenheiro FrontEnd da EBAC, focando em técnicas avançadas de estilização em React utilizando Emotion e styled-components.

## Tecnologias Utilizadas

### Frontend

- **React** (^19.2.0) - Biblioteca JavaScript para construção de interfaces
- **React Router DOM** (^7.11.0) - Roteamento de páginas
- **Emotion** (^11.14.0+) - CSS-in-JS para estilização avançada
- **Axios** (^1.13.2) - Cliente HTTP para requisições

### Desenvolvimento

- **Vite** (^7.2.4) - Build tool moderno e rápido
- **ESLint** (^9.39.1) - Linter para verificação de código
- **React Compiler** - Otimização automática de componentes React

### UI & Icons

- **FontAwesome** (^7.1.0) - Ícones SVG de alta qualidade
  - Free Solid Icons
  - Free Brands Icons

## Estrutura do Projeto

```
src/
├── api/              # Chamadas à API e configurações
├── assets/           # Imagens, ícones e recursos estáticos
├── components/       # Componentes reutilizáveis
├── context/          # Context API
│   ├── userContext.jsx       # Contexto de usuário
│   ├── productContext.jsx    # Contexto de produtos
│   └── cartContext.jsx       # Contexto de carrinho
├── hooks/            # Custom hooks
│   ├── useOffers.js         # Hook para ofertas
│   └── useSearchHistory.js  # Hook para histórico de busca
├── pages/            # Páginas da aplicação
│   ├── home/                 # Página inicial
│   ├── register/             # Página de registro
│   ├── search/               # Página de busca
│   └── categorias/           # Páginas de categorias
│       ├── gamer/
│       ├── perifericos/
│       ├── wearables/
│       └── acessorios/
├── App.jsx           # Componente raiz
├── main.jsx          # Ponto de entrada
└── global.css        # Estilos globais
```

## Categorias de Produtos

- **Gamer** - Periféricos e equipamentos para jogadores
- **Periféricos** - Acessórios de computador diversos
- **Wearables** - Dispositivos vestíveis e smartwatches
- **Acessórios** - Acessórios de tecnologia em geral

## Scripts Disponíveis

```bash
# Inicia o servidor de desenvolvimento
npm run dev

# Cria build de produção
npm run build

# Executa lint no código
npm run lint

# Visualiza a build de produção localmente
npm run preview
```

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/annesilv4/techzone-shop.git
cd techzone-shop
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Abra no navegador:

```
http://localhost:5173
```

## Recursos Principais

- ✨ Interface moderna e responsiva
- 🛒 Carrinho de compras funcional
- 🔍 Sistema de busca com histórico
- 👤 Autenticação e contexto de usuário
- 🎨 Estilização avançada com Emotion/Styled-Components
- 📱 Design mobile-first com media queries
- 🚀 Performance otimizada com React Compiler

## Recursos de Estilo

O projeto demonstra técnicas avançadas de CSS-in-JS:

- Emotion styled-components
- CSS-in-JS com props dinâmicos
- Responsive design com media queries
- Global styles e temas

## Contribuição

Este é um projeto educacional. Sinta-se livre para fazer fork e ajustar conforme necessário para aprendizado.

## Autor

Desenvolvido por Anne Carolayne - Aluno de Desenvolvimento Full Stack em Python

## Licença

Este projeto é de uso educacional.
