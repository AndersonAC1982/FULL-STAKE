Sim, dá pra fazer os dois! 👇

---
/*
## ✅ 1. **Arquivos Prontos para Download**

Vou gerar os arquivos completos do projeto base com:

* Back-End ASP.NET Core (API pronta)
* Front-End Angular (com componentes, serviço e rotas funcionando)

Você vai poder baixar, abrir no VSCode ou Visual Studio + Angular CLI, rodar e ver tudo funcionando. 🚀

➡️ **Estou preparando isso e te aviso assim que estiver pronto.**

---

## 🧠 2. **Passo a Passo Explicado**

Enquanto isso, aqui vai o **guia inicial completo para você montar do zero** e entender cada parte:

---*/
/*
### 🛠 Back-End ASP.NET Core (API)

#### ✅ Passos:

1. **Criar o projeto:**
*/
//```bash
dotnet new webapi -n backend-api
cd backend-api
```

//2. **Criar a model:**

//```csharp
// Models/Product.cs
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public decimal Price { get; set; }
}
```

//3. **Criar o DbContext e configurar o banco (SQLite):**

//```bash
dotnet add package Microsoft.EntityFrameworkCore.Sqlite
dotnet add package Microsoft.EntityFrameworkCore.Tools
```

//```csharp
// Data/AppDbContext.cs
using Microsoft.EntityFrameworkCore;
using backend_api.Models;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}
    public DbSet<Product> Products { get; set; }
}


//4. **Configurar no `Program.cs`:**

//```csharp
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=products.db"));


//5. **Criar o Controller:**

//```bash
dotnet add package Microsoft.AspNetCore.OpenApi


//```csharp
// Controllers/ProductsController.cs
[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly AppDbContext _context;
    public ProductsController(AppDbContext context) => _context = context;

    [HttpGet] public async Task<ActionResult> Get() => Ok(await _context.Products.ToListAsync());

    [HttpPost] public async Task<ActionResult> Post(Product p)
    {
        _context.Products.Add(p);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(Get), new { id = p.Id }, p);
    }

    [HttpPut("{id}")] public async Task<ActionResult> Put(int id, Product p)
    {
        if (id != p.Id) return BadRequest();
        _context.Entry(p).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("{id}")] public async Task<ActionResult> Delete(int id)
    {
        var product = await _context.Products.FindAsync(id);
        if (product == null) return NotFound();
        _context.Products.Remove(product);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}


//6. **Criar o banco e rodar:**

//```bash
dotnet ef migrations add Initial
dotnet ef database update
dotnet run



/*
### 💻 Front-End Angular

#### ✅ Criar o projeto:*/

//```bash
ng new frontend-angular
cd frontend-angular
ng generate component components/ProductList
ng generate component components/ProductForm
ng generate service services/product
```

//#### ✅ Exemplo de service:

//```ts
// services/product.service.ts
@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl = 'https://localhost:port/api/products'; // Ajuste a porta

  constructor(private http: HttpClient) {}

  getProducts() { return this.http.get<Product[]>(this.apiUrl); }
  addProduct(product: Product) { return this.http.post(this.apiUrl, product); }
  updateProduct(product: Product) { return this.http.put(`${this.apiUrl}/${product.id}`, product); }
  deleteProduct(id: number) { return this.http.delete(`${this.apiUrl}/${id}`); }
}

