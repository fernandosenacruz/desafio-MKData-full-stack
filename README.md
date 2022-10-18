# Desafio fullstack MKData
Desafio técnico para o processo seletivo da empresa MK Data. 

## Como rodar localmente
<details>
  <summary>expandir</summary>
  Para rodar o Back End, siga estas etapas:

  - Clone o repositório

  ```bash
    $ git clone git@github.com:fernandosenacruz/desafio-MKData-full-stack.git
  ```

  - Entre na pasta do projeto

  ```bash
    $ cd desafio-MKData-full-stack
  ```

  - Instale as dependencias

  ```
    $ npm install
  ```

  - Execute como desenvolvedor

  ```
    $ npm run dev
  ```
</details>

## Documentação da API

### Cliente

**Body**
| Chave   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `number` | **Obrigatório**. O NOME do cliente |
| `type`      | `string` | **Obrigatório**. Tipo do cliente (CPF/CNPJ) |
| `taxpaperRegistration` | `string` | **Obrigatório**. Número de CPF/CNPJ do cliente |
| `group`     | `string` | **Obrigatório**. Grupo do cliente |
| `activate`      | `boolean` | **Obrigatório**. Situação do cliente |
| `registration`      | `string` | **Obrigatório**. Número do RG/IE do cliente |

#### Endpoints

<details>
  <summary>expandir</summary>

  #### Cadastra um cliente

  ```
    POST https://mddata-backend.herokuapp.com/clients/post
  ```

  #### Retorna todos os clientes

  ```
    GET https://mddata-backend.herokuapp.com/clients
  ```

  #### Retorna um cliente pelo id

  ```http
    GET https://mddata-backend.herokuapp.com/clients/${id}
  ```

  #### Atualiza os dados de um cliente

  ```http
    PUT https://mddata-backend.herokuapp.com/clients/${id}
  ```

  #### Deleta um cliente

  ```http
    DELETE https://mddata-backend.herokuapp.com/clients/${id}
  ```
</details>

## Aplicação rodando na vercel

https://desafio-mk-data-full-stack.vercel.app/
