
# Projeto CRUD Base (C# + ASP.NET Core)

Este projeto é uma API RESTful simples feita com ASP.NET Core e SQLite, que implementa operações CRUD para um modelo de Produto.

## 📦 Tecnologias Utilizadas

- C#
- ASP.NET Core 7.0
- Entity Framework Core
- SQLite
- Swagger

## ▶️ Como Rodar o Projeto

### 1. Requisitos

- .NET 7 SDK ou superior instalado
- Visual Studio ou VS Code
- SQLite (opcional, pois o EF cria o arquivo `.db` automaticamente)

### 2. Restaurar Pacotes e Criar Banco de Dados

Abra o terminal na pasta `backend-api` e execute:

```bash
dotnet restore
dotnet ef migrations add Initial
dotnet ef database update
```

> Obs: Você pode precisar instalar o pacote de ferramentas do EF Core globalmente:
> ```bash
> dotnet tool install --global dotnet-ef
> ```

### 3. Executar o Projeto

```bash
dotnet run
```

A API será disponibilizada com Swagger no navegador:

```
https://localhost:<porta>/swagger
```

Substitua `<porta>` pelo valor mostrado no console.

### 4. Testar Endpoints

Use o Swagger ou Postman para testar os seguintes endpoints:

- `GET /api/products` – Lista todos os produtos
- `POST /api/products` – Cria um novo produto
- `PUT /api/products/{id}` – Atualiza um produto
- `DELETE /api/products/{id}` – Deleta um produto

---

🚧 Em breve: Front-end Angular para consumo desta API.
