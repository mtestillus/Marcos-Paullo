<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mt Estillus</title>
  <style>
    body {
      margin: 0;
      font-family: 'Arial', sans-serif;
      background-color: #ffffff;
      color: #000000;
    }
    header {
      background-color: #000000;
      color: #ffffff;
      padding: 20px;
      text-align: center;
    }
    nav a {
      margin: 0 15px;
      color: #ffffff;
      text-decoration: none;
      font-weight: bold;
    }
    .section {
      padding: 50px;
      text-align: center;
    }
    .products {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
    }
    .product-card {
      border: 1px solid #000;
      padding: 20px;
      width: 250px;
    }
    footer {
      background-color: #000000;
      color: #ffffff;
      text-align: center;
      padding: 20px;
      margin-top: 40px;
    }
    button {
      background-color: #000000;
      color: #ffffff;
      border: none;
      padding: 10px 20px;
      margin-top: 20px;
      cursor: pointer;
    }
    button:hover {
      background-color: #333333;
    }
  </style>
</head>
<body>

<header>
  <h1>Mt Estillus</h1>
  <nav>
    <a href="#sobre">Sobre</a>
    <a href="#colecao">Coleção</a>
    <a href="#contato">Contato</a>
  </nav>
</header>

<section class="section" id="home">
  <h2>Bem-vindo à Mt Estillus</h2>
  <p>Moda masculina e feminina para quem busca estilo e autenticidade.</p>
  <button>Ver Coleção</button>
</section>

<section class="section" id="sobre">
  <h2>Sobre Nós</h2>
  <p>Na Mt Estillus, vestimos atitude. Somos especializados em bermudas de linho, camisas oversized, sapatos e camisas peruanas — tudo pensado para você que valoriza conforto e estilo.</p>
</section>

<section class="section" id="colecao">
  <h2>Nossa Coleção</h2>
  <div class="products">
    <div class="product-card">
      <h3>Bermudas de Linho</h3>
      <p>Conforto e elegância para todos os momentos.</p>
    </div>
    <div class="product-card">
      <h3>Camisas Oversized</h3>
      <p>O clássico do streetwear moderno.</p>
    </div>
    <div class="product-card">
      <h3>Sapatos Estilosos</h3>
      <p>Passos firmes com personalidade.</p>
    </div>
    <div class="product-card">
      <h3>Camisas Peruanas</h3>
      <p>Leveza e sofisticação que se sente.</p>
    </div>
  </div>
</section>

<section class="section" id="contato">
  <h2>Contato</h2>
  <p>Quer falar com a gente?</p>
  <p>WhatsApp: (coloque seu número aqui)</p>
  <p>Instagram: <a href="https://instagram.com/mtestillus" target="_blank">@mtestillus</a></p>
  <p>Loja física: (coloque o endereço)</p>
</section>

<footer>
  <p>© 2025 Mt Estillus. Todos os direitos reservados.</p>
</footer>

</body>
</html>
