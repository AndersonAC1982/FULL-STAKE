namespace ProdutoAPI.Models;
public class Produto
{
    public int Id { get; set; }           // Chave primária
    public string Nome { get; set; } = null!;    // Nome do produto
    public decimal Preco { get; set; }    // Preço
}
