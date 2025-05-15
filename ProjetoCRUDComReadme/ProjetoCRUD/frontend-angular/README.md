
# Projeto Angular - Frontend CRUD

Este projeto Angular consome a API ASP.NET Core e realiza operações CRUD de produtos.

## ✅ Tecnologias

- Angular 17+
- TypeScript
- Bootstrap (opcional)
- Angular CLI

## ▶️ Como Rodar

### 1. Requisitos

- Node.js
- Angular CLI

### 2. Comandos

```bash
npm install
ng serve
```

Acesse em:
```
http://localhost:4200
```

## 📁 Estrutura

- `services/product.service.ts` – Serviço HTTP para consumir a API
- `models/product.ts` – Interface do produto

Você pode adicionar os componentes de Listagem e Formulário com comandos:

```bash
ng generate component components/ProductList
ng generate component components/ProductForm
```

Depois, use `ngModel` ou `ReactiveForms` para montar os formulários.

---

🚀 Backend necessário para funcionar: [ASP.NET Core CRUD API](../backend-api)
