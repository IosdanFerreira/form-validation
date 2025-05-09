# Form validation - Login e Signup

## Descrição

Este projeto é uma aplicação frontend focada em validação de formulários nas telas de login e cadastro, utilizando tecnologias modernas como React, React Hook Form e Zod. O objetivo é garantir uma experiência de usuário acessível e segura, validando todos os campos com mensagens claras e feedback visual.

## Funcionalidades

- **Telas de Login e cadastro:**
  - Validação de nome válido
  - Validação de email válido
  - Senha com regras de segurança (mínimo 8 caracteres, letra maiúscula, minúscula, número e caractere especial).
  - Diálogo de sucesso após envio dos dados
  - Feedback visual para erros de validação
  - Organização de código limpa e reutilizável

## Tecnologias Utilizadas

- Next.js
- Typescript
- React
- React Hook Form
- Zod
- Tailwind CSS

## Pré-requisitos

- [Node.js](https://nodejs.org/) (>= 16.0)
- [npm](https://www.npmjs.com/) (>= 8.0) or [Yarn](https://yarnpkg.com/) (>= 1.22)

## Instruções de Instalação

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/IosdanFerreira/form-validation.git
    cd form-validation
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    #ou
    yarn install
    ```

3.  **Inicie a aplicação:**

    ```bash
    npm run dev
    #ou
    yarn dev
    ```

4.  **Acesse no navegador:**

    ```bash
    http://localhost:3000
    ```

## Exemplo de validação

1.  ```bash
    const formSchema = z.object({
      email: z.string().email({ message: "Insira um email válido" }),
      password: z.string().regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/,
        {
          message:
            "A senha deve conter 8 caracteres, pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial",
        }
      ),
    });

    ```
