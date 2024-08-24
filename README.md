# Projeto de Login com React, TypeScript e Vite

Este projeto é um sistema de login simples construído com React, TypeScript e Vite. O objetivo é demonstrar como criar uma interface de autenticação de usuário com alguns recursos básicos, como login por redes sociais (Google e Facebook), validação de formulários, e uma interface estilizada com efeito de vidro.

## 📋 Funcionalidades

- **Login com Email e Senha**: Autenticação tradicional via email e senha.
- **Login Social**: Opções para login via Google e Facebook.
- **Lembrar-me**: Opção para manter o usuário logado.
- **Esqueci minha senha**: Link para recuperação de senha.
- **Interface estilizada**: Efeito de vidro (Glassmorphism) com bordas arredondadas e placeholders estilizados.
- **Avatar do Usuário**: Mostra o avatar do usuário após o login.

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática ao código.
- **Vite**: Ferramenta de build que fornece um ambiente de desenvolvimento rápido para projetos front-end.
- **CSS3**: Usado para a estilização da interface, incluindo efeitos de Glassmorphism.
- **Firebase**: Usado para autenticação de usuários, incluindo suporte para login social.
- **FontAwesome**: Biblioteca de ícones usada para exibir os ícones das redes sociais e ícones de formulários.

## 📦 Estrutura do Projeto

```bash
.
├── public/
├── src/
│   ├── assets/             # Imagens e outros assets estáticos
│   ├── components/         # Componentes React reutilizáveis
│   ├── App.tsx             # Componente principal do aplicativo
│   ├── main.tsx            # Ponto de entrada do aplicativo
│   ├── styles/             # Arquivos CSS globais e módulos de estilo
│   └── firebase.ts         # Configuração do Firebase
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md