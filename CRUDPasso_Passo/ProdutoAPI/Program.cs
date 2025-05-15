using Microsoft.EntityFrameworkCore;
using ProdutoAPI.Data;
using ProdutoAPI.Models;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddDbContext<AppDbContext>(opt =>
    opt.UseSqlite("Data Source=produtos.db"));

var app = builder.Build();
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


// Mapeamento de rotas do CRUD

// CREATE
app.MapPost("/produtos", async (Produto produto, AppDbContext db) =>
{
    db.Produtos.Add(produto);
    await db.SaveChangesAsync();
    return Results.Created($"/produtos/{produto.Id}", produto);
});

// READ - Todos
app.MapGet("/produtos", async (AppDbContext db) =>
    await db.Produtos.ToListAsync());

// READ - Por ID
app.MapGet("/produtos/{id}", async (int id, AppDbContext db) =>
    await db.Produtos.FindAsync(id) is Produto p ? Results.Ok(p) : Results.NotFound());

// UPDATE
app.MapPut("/produtos/{id}", async (int id, Produto input, AppDbContext db) =>
{
    var produto = await db.Produtos.FindAsync(id);
    if (produto is null) return Results.NotFound();

    produto.Nome = input.Nome;
    produto.Preco = input.Preco;

    await db.SaveChangesAsync();
    return Results.NoContent();
});

// DELETE
app.MapDelete("/produtos/{id}", async (int id, AppDbContext db) =>
{
    var produto = await db.Produtos.FindAsync(id);
    if (produto is null) return Results.NotFound();

    db.Produtos.Remove(produto);
    await db.SaveChangesAsync();
    return Results.NoContent();
});

app.Run();

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
