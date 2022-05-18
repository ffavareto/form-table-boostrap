let corpo_modal = document.querySelector('.modal-body');
let footer_modal = document.querySelector('.modal-footer');
const botao_form = document.querySelector('form button');
const form = document.forms.namedItem('dados');
const botao_confirma_dados = document.querySelector('#confirma');
const corpo_tabela = document.querySelector('table tbody');
const cadastros = [];

botao_form.addEventListener('click', () => {
    const cadastro = new Cadastro(form);

    window.salvaCadastro = () => {
        cadastros.push(cadastro);
        atualizaTabela()
        form.reset();
    };

    corpo_modal.innerHTML = templateCorpoModal(form);
    footer_modal.innerHTML = templateFooterModal();
});

function Cadastro(form) {
    this.nome = form.nome.value;
    this.sobrenome = form.sobrenome.value;
    this.cep = form.cep.value;
    this.rua = form.rua.value;
    this.bairro = form.bairro.value;
    this.cidade = form.cidade.value;
    this.estado = form.estado.value;
}

function atualizaTabela() {
    corpo_tabela.innerHTML = '';
    cadastros.forEach(cadastro => {
        corpo_tabela.innerHTML += `
            <tr>
                <td>${cadastro.nome} ${cadastro.sobrenome}</td>
                <td>${cadastro.rua}, ${cadastro.bairro}, ${cadastro.cidade} - ${cadastro.estado}</td>
            </tr>
        `;
    });
}

function templateFooterModal() {
    return `
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" id="confirma" class="btn btn-success" data-bs-dismiss="modal" onclick="salvaCadastro()">
            Confirmar e fechar
        </button>
    `;
};

function templateCorpoModal({ nome, sobrenome, cep, rua, bairro, cidade, estado }) {
    return `
        <form class="mx-auto w-75 mt-5">
            <div class="row g-3 mb-3">
                <div class="col-sm">
                    <input type="text" class="form-control" placeholder="Nome" aria-label="Nome" value="${nome.value}" disabled>
                </div>
                <div class="col-sm">
                    <input type="text" class="form-control" placeholder="Sobrenome" aria-label="Sobrenome" value="${sobrenome.value}" disabled>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-sm-3">
                    <input type="text" class="form-control" placeholder="CEP" aria-label="CEP" value="${cep.value}" disabled>
                </div>
                <div class="col-sm-9">
                    <input type="text" class="form-control" placeholder="Rua" aria-label="Rua" value="${rua.value}" disabled>
                </div>
                <div class="col-sm-5">
                    <input type="text" class="form-control" placeholder="Bairro" aria-label="Bairro" value="${bairro.value}" disabled>
                </div>
                <div class="col-sm-5">
                    <input type="text" class="form-control" placeholder="Cidade" aria-label="Cidade" value="${cidade.value}" disabled>
                </div>
                <div class="col-sm-2">
                    <input type="text" class="form-control" placeholder="Estado" aria-label="Estado" value="${estado.value}" disabled>
                </div>
            </div>
        </form>
    `;
};