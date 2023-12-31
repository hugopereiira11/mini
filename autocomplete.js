const dadosamentos = document.querySelector("#orcamentos");

fetch("nav/orcamentos/dados.json")
  .then((resp) => resp.json())
  .then((dados) => {

    let  data = dados.dezembro2023.length

    console.log(dados.dezembro2023);

    orcamentos.innerHTML += `
        <div class="content">
            <div class="info">
                <div class="fornecedor">${dados.dezembro2023[data - 1].fornecedor}</div>
                <div class="numero">${dados.dezembro2023[data - 1].num}</div>
                <div class="loja">${dados.dezembro2023[data - 1].loja}</div>
                <div class="valor">${dados.dezembro2023[data - 1].valor}</div>
                <div class="data">${dados.dezembro2023[data - 1].data}</div>
                <div class="estado">${dados.dezembro2023[data - 1].estado}</div>
            </div>
            <div class="view-pdf"><a href="${dados.dezembro2023[data - 1].link}">Visualizar</a></div>
        </div>

        <div class="content">
            <div class="info">
                <div class="fornecedor">${dados.dezembro2023[data - 1].fornecedor}</div>
                <div class="numero">${dados.dezembro2023[data - 2].num}</div>
                <div class="loja">${dados.dezembro2023[data - 2].loja}</div>
                <div class="valor">${dados.dezembro2023[data - 2].valor}</div>
                <div class="data">${dados.dezembro2023[data - 2].data}</div>
                <div class="estado">${dados.dezembro2023[data - 2].estado}</div>
            </div>
            <div class="view-pdf"><a href="${dados.dezembro2023[data - 2].link}">Visualizar</a></div>
        </div>

        <div class="content">
            <div class="info">
                <div class="fornecedor">${dados.dezembro2023[data - 3].fornecedor}</div>
                <div class="numero">${dados.dezembro2023[data - 3].num}</div>
                <div class="loja">${dados.dezembro2023[data - 3].loja}</div>
                <div class="valor">${dados.dezembro2023[data - 3].valor}</div>
                <div class="data">${dados.dezembro2023[data - 3].data}</div>
                <div class="estado">${dados.dezembro2023[data - 3].estado}</div>
            </div>
            <div class="view-pdf"><a href="${dados.dezembro2023[data - 3].link}">Visualizar</a></div>
        </div>
    
    `;
  });
