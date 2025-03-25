<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

  <h1>Validador de CPF</h1>

  <p>Este projeto valida um número de CPF utilizando o algoritmo padrão de cálculo dos dois dígitos verificadores. A validação verifica se o número informado é válido ou não.</p>

  <h2>Funcionalidade</h2>
  <ul>
    <li>O código solicita ao usuário que insira um CPF via terminal (usando `readline` do Node.js).</li>
    <li>Remove qualquer caractere que não seja número (como pontos ou traços) da entrada.</li>
    <li>Valida o CPF com base nos dois dígitos verificadores.</li>
    <li>Exibe se o CPF inserido é válido ou inválido no terminal.</li>
  </ul>

  <h2>Como Funciona</h2>
  <ol>
    <li>O usuário digita um CPF no terminal.</li>
    <li>O código remove caracteres não numéricos do CPF.</li>
    <li>Verifica se todos os dígitos são iguais, o que indicaria um CPF inválido.</li>
    <li>Calcula os dois dígitos verificadores a partir dos 9 primeiros dígitos do CPF.</li>
    <li>Compara o CPF calculado com o CPF informado e informa se o CPF é válido ou inválido.</li>
  </ol>

  <h2>Como Usar</h2>
  <p>Para usar o código, você precisa ter o Node.js instalado em seu computador.</p>
  <ol>
    <li>Clone o repositório para o seu computador:</li>
    <pre><code>git clone https://github.com/seu-usuario/validar-cpf.git</code></pre>
    <li>Entre no diretório do projeto:</li>
    <pre><code>cd validar-cpf</code></pre>
    <li>Execute o código com o Node.js:</li>
    <pre><code>node validarCPF.js</code></pre>
    <li>Digite o CPF quando solicitado no terminal.</li>
  </ol>

  <h2>Exemplo de Uso</h2>
  <pre><code>
Digite seu CPF: 123.456.789-09
CPF INVÁLIDO!
  </code></pre>

  <pre><code>
Digite seu CPF: 123.456.789-00
CPF VÁLIDO!
  </code></pre>

  <h2>Licença</h2>
  <p>Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.</p>

</body>
</html>
