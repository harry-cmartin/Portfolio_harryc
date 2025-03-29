# 📌 Portfolio_harryc

PROJETO EM CONSTANTE ATUALIAZAÇÃO

## TECNOLOGIAS USADAS

<center>
    <div  data-badges>
    <img src="https://img.shields.io/badge/next.js-%23000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
        <img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" />
        <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
        <img src="https://img.shields.io/badge/prisma-%232D3748.svg?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
        <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
        <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
        <img src="https://img.shields.io/badge/n8n-%2300C4B4.svg?style=for-the-badge&logo=n8n&logoColor=white" alt="n8n" />
        <img src="https://img.shields.io/badge/supabase-%233ECF8E.svg?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
    </div>
</center>

# 💎 Funcionalidades do projeto 💎

- Integração com repositórios do github
- Integração com agente de IA em chat
- Tecnologias destacadas 
- Exibição de projetos
- Exibição de projetos com as tecnologias associadas

# 🛠 REQUISISTOS 

## NODE.JS na máquina

### Baixar o fnm:

```bash

winget install Schniz.fnm

```

### Baixar o Node.js:

```bash
fnm install 22
```

### Verificar a Node.js version:

```bash
node -v # Should print "v22.14.0".
```

### Verificar a versão do Npm:

```bash
npm -v # Should print "10.9.2".
```


# 💡 Como executar:

1. Clonar o repositório  

    ```sh
    git clone https://github.com/harry-cmartin/Portfolio_harryc.git
    ```

3. Acesse sua conta no [Supabase](https://supabase.com) ou crie uma nova conta.

4. Navegue até o projeto no Supabase e clique no botão `connect`.
   
5. Clique em selecionar ORM e selecione o ORM Prisma.
   
6. Copie as variáveis de ambiente listadas, crie um arquivo `.env` na pasta backend e preencha com as seguintes informações:
    ```
    DATABASE_URL=
    DIRECT_URL=
    PORT= "caso valor não seja definido o app roda na porta 4000"
    ```
7. Crie uma conta no site no [n8n](https://n8n.io), e importe o fluxo definido no arquivo assistente-pessoal que está na pasta assets.

8. Após importar o fluxo, clique no primeiro nó, acesse `webhooks url`, clique em `Production URL` e copie o valor dessa URL.
**Obs: Lembre-se de ativar o workflow no n8n**

9. Crie um arquivo `.env` na pasta web e preencha com as seguintes informações, sendo que a URL da API é a URL do backend e a segunda variável deve ter como valor a URL que extraimos no n8n, podendo tambem ser local:

    ```
    NEXT_PUBLIC_API_URL=
    NEXT_PUBLIC_CHAT_WEBHOOK=
    ```

10. Instale as dependências dos projetos `web` e `backend` com o comando `npm i` em cada uma das pastas

11. Rode o comando `npm run dev` para iniciar o projeto


### Deploy do backend: fly.io
### Deploy do frontend: Vercel
