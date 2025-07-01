# Express CRUD API com PostgreSQL e Docker

API RESTful para gerenciamento de usuários, construída com Node.js, Express e PostgreSQL.  
O projeto utiliza validação de dados com Joi e está preparada para rodar em ambiente Docker.

---

## Funcionalidades

- Criação, leitura, atualização e exclusão (CRUD) de usuários
- Validação robusta dos dados de entrada via Joi
- Tratamento centralizado e consistente de erros
- Conexão com banco PostgreSQL configurável via variáveis de ambiente
- Containerização do banco de dados para facilitar desenvolvimento local

---

## Tecnologias Utilizadas

- Node.js
- Express
- PostgreSQL
- Docker
- Joi (validação)
- Dotenv (variáveis de ambiente)
- CORS (segurança e controle de acesso)

---

## Configuração do Ambiente

### Variáveis de ambiente (`.env`)

| Variável      | Descrição                          | Exemplo            |
| ------------- | -------------------------------- | ------------------ |
| `PORT`        | Porta que a API irá escutar       | `3001`             |
| `DB_USER`     | Usuário do PostgreSQL             | `postgres`         |
| `DB_PASSWORD` | Senha do usuário PostgreSQL       | `senha123`         |
| `DB_HOST`     | Host do banco (localhost ou docker) | `localhost`         |
| `DB_PORT`     | Porta do banco PostgreSQL          | `5432`             |
| `DB_DATABASE` | Nome do banco de dados             | `expresscrud`      |

---


## Endpoints da API

| Método | Endpoint       | Descrição                    | Validação     |
| ------ | -------------- | ----------------------------| ------------- |
| POST   | `/api/user`    | Criar novo usuário           | Sim (Joi)    |
| GET    | `/api/user`    | Listar todos os usuários     | Não          |
| GET    | `/api/user/:id`| Buscar usuário por ID        | Não          |
| PUT    | `/api/user/:id`| Atualizar usuário existente  | Sim (Joi)    |
| DELETE | `/api/user/:id`| Deletar usuário              | Não          |

---

## Instruções para Rodar com Docker

- Certifique-se de que o PostgreSQL está rodando em um container Docker.
- Configure as credenciais do banco no arquivo `.env`.
- Ao iniciar a aplicação, a tabela `users` será criada automaticamente.
- A API ficará disponível em: `http://localhost:3001/api`

---

## Tratamento de Erros e Validação

- Todos os dados enviados para criação e atualização de usuários passam por validação com Joi.
- Campos obrigatórios: `name` (mínimo 3 caracteres) e `email` (formato válido).
- O middleware de erros retorna mensagens padronizadas e status HTTP apropriados.

---

## Contato e Contribuição

Este projeto foi desenvolvido com fins educacionais, focado em boas práticas de API REST com Node.js e PostgreSQL.  
Para sugestões, dúvidas ou melhorias, abra uma issue ou envie um pull request no repositório

