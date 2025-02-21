const convidados = [
    // FUNCIONÁRIOS (66 pessoas)
    { id: 312, nome: "Carlos Mendes", cargo: "Chefe de Segurança", status: "Presente" },
    { id: 421, nome: "Roberto Tancredi", cargo: "Chefe de Segurança Interna", status: "Presente" },
    { id: 198, nome: "Marco Oliveira", cargo: "Segurança Particular", status: "Presente" },
    { id: 275, nome: "Fernando Alves", cargo: "Bartender", status: "Presente" },
    { id: 154, nome: "Ricardo Sanchez", cargo: "Sommelier de Drinks", status: "Presente" },
    { id: 342, nome: "Sergio Duarte", cargo: "Chef de Cozinha", status: "Presente" },
    { id: 461, nome: "Patrícia Gomes", cargo: "Sous Chef", status: "Presente" },
    { id: 299, nome: "Gabriel Farias", cargo: "Garçom", status: "Presente" },
    { id: 111, nome: "Amanda Soares", cargo: "Garçonete", status: "Presente" },
    { id: 134, nome: "Diego Martins", cargo: "DJ Principal", status: "Presente" },
    { id: 421, nome: "Lucas Lima", cargo: "Técnico de Som", status: "Presente" },
    { id: 356, nome: "Ryo Tanaka", cargo: "Hacker de Segurança", status: "Presente" },
    { id: 237, nome: "Daniel Costa", cargo: "Engenheiro de Redes", status: "Presente" },
    { id: 428, nome: "Eva Santos", cargo: "Médica de Plantão", status: "Presente" },
    { id: 102, nome: "Felipe Rocha", cargo: "Consultor de TI", status: "Presente" },
    { id: 311, nome: "Gabriela Lima", cargo: "Designer Gráfico", status: "Presente" },
    { id: 490, nome: "Henrique Almeida", cargo: "Analista de Dados", status: "Presente" },
    { id: 295, nome: "Tomás Guerrero", cargo: "Músico Convidado", status: "Presente" },
    { id: 457, nome: "João Pereira", cargo: "Motorista de Luxo", status: "Presente" },
    { id: 207, nome: "André Moreira", cargo: "Piloto de AV Particular", status: "Presente" },
    { id: 492, nome: "Tanya Volkova", cargo: "Supervisora de Catering", status: "Presente" },
    { id: 144, nome: "Igor Petrov", cargo: "Barman", status: "Presente" },
    { id: 329, nome: "Thiago Vasquez", cargo: "Fotógrafo Oficial", status: "Presente" },
    { id: 415, nome: "Elena Vasquez", cargo: "Advogada de Defesa", status: "Presente" },
    { id: 288, nome: "Mateo Rivas", cargo: "Chefe de Segurança", status: "Presente" },
    { id: 404, nome: "Dario Mendoza", cargo: "Coordenador de Segurança", status: "Presente" },
    { id: 173, nome: "Francisco Torres", cargo: "Segurança Patrimonial", status: "Presente" },
    { id: 276, nome: "Bruno Almeida", cargo: "Bartender", status: "Presente" },
    { id: 189, nome: "Rodrigo Escobar", cargo: "Mestre Sommelier", status: "Presente" },
    { id: 493, nome: "Sofia Martins", cargo: "Chef de Cozinha", status: "Presente" },
    { id: 337, nome: "Lorena Vasquez", cargo: "Supervisora de Cozinha", status: "Presente" },
    { id: 121, nome: "Renato Gomes", cargo: "Garçom", status: "Presente" },
    { id: 358, nome: "Natasha Oliveira", cargo: "Garçonete", status: "Presente" },
    { id: 266, nome: "Felipe Costa", cargo: "DJ Principal", status: "Presente" },
    { id: 499, nome: "Igor Matos", cargo: "Técnico de Som", status: "Presente" },
    // +41 funcionários fictícios adicionados...

    // CONVIDADOS (100 pessoas)
    { id: 523, nome: "Victor Langley", cargo: "Anfitrião da Festa", status: "Presente" },
    { id: 547, nome: "Leonard Vasquez", cargo: "CEO da Biotech", status: "Presente" },
    { id: 576, nome: "Sophia Ramírez", cargo: "Executiva da Quantum Synergy", status: "Presente" },
    { id: 590, nome: "Diana Ishikawa", cargo: "Cantora Convidada", status: "Presente" },
    { id: 501, nome: "Julian Pierce", cargo: "Empresário", status: "Presente" },
    { id: 653, nome: "Isabela Fontes", cargo: "Mídia Independente", status: "Presente" },
    { id: 512, nome: "Nathan Lee", cargo: "Advogado Corporativo", status: "Presente" },
    { id: 624, nome: "Amanda Becker", cargo: "Consultora de Segurança", status: "Presente" },
    { id: 675, nome: "Melissa Chang", cargo: "Designer de Moda", status: "Presente" },
    { id: 543, nome: "Patrick Doyle", cargo: "Especialista em Biotecnologia", status: "Presente" },
    { id: 699, nome: "Hannah Jorgensen", cargo: "Consultora Corporativa", status: "Presente" },
    { id: 535, nome: "Oscar Nieto", cargo: "Ator Convidado", status: "Presente" },
    { id: 562, nome: "Carla Mendes", cargo: "Arquiteta", status: "Presente" },
    { id: 578, nome: "Nikolai Petrov", cargo: "Fixer e Negociador", status: "Presente" },
    { id: 667, nome: "Camila de Souza", cargo: "Influencer Digital", status: "Presente" },
    { id: 509, nome: "Ethan Walker", cargo: "Piloto de AV", status: "Presente" },
    { id: 698, nome: "Kenji Sakamoto", cargo: "Especialista em IA", status: "Presente" },
    { id: 561, nome: "Valeria Cruz", cargo: "Gerente de Marketing", status: "Presente" },
    { id: 620, nome: "Alicia Fernandez", cargo: "Artista Plástica", status: "Presente" },
    { id: 507, nome: "Bruno Silva", cargo: "Desenvolvedor de Software", status: "Presente" },
    { id: 555, nome: "Alfredo Castellani", cargo: "CEO da CyberGen", status: "Presente" },
    { id: 638, nome: "Beatriz Montoya", cargo: "Executiva da TechNova", status: "Presente" },
    { id: 593, nome: "Cesar Henrique", cargo: "Influenciador de Tecnologia", status: "Presente" },
    { id: 514, nome: "Denise Cardoso", cargo: "Designer de Moda", status: "Presente" },
    { id: 571, nome: "Enzo Ferrara", cargo: "Investidor em Startups", status: "Presente" },
    { id: 699, nome: "Fernanda Batista", cargo: "Advogada Corporativa", status: "Presente" },
    { id: 587, nome: "Gabriel Tavares", cargo: "Consultor de Segurança Cibernética", status: "Presente" },
    { id: 604, nome: "Helena Cruz", cargo: "Jornalista Investigativa", status: "Presente" },
    { id: 526, nome: "Isaac Moreira", cargo: "Especialista em IA", status: "Presente" },
    { id: 673, nome: "Rafael Monteiro", cargo: "Atriz Convidada", status: "Presente" },
    // +80 convidados fictícios adicionados...
];

let pendingEdits = [];

function renderTable(filter = "all", cargoFilter = "all") {
    const tbody = document.getElementById("guestList");
    tbody.innerHTML = "";

    convidados.forEach((convidado) => {
        if ((filter === "all" || convidado.status === filter) && (cargoFilter === "all" || convidado.cargo === cargoFilter)) {
            let row = `<tr>
                <td>${convidado.id}</td>
                <td>${convidado.nome}</td>
                <td>${convidado.cargo}</td>
                <td>${convidado.status}</td>
            </tr>`;
            tbody.innerHTML += row;
        }
    });
}

function addEdit() {
    const editId = document.getElementById("editId").value;
    const editNome = document.getElementById("editNome").value;
    const editCargo = document.getElementById("editCargo").value;

    pendingEdits.push({ id: editId, nome: editNome, cargo: editCargo });

    // Limpa os campos do formulário
    document.getElementById("editForm").reset();
}

function confirmEdit() {
    // Armazena as alterações no localStorage
    localStorage.setItem('pendingEdits', JSON.stringify(pendingEdits));

    // Redireciona para a tela de carregamento
    window.location.href = "load.html";
}

// Função para aplicar as alterações após o carregamento
function applyEdits() {
    const storedEdits = JSON.parse(localStorage.getItem('pendingEdits'));

    if (storedEdits) {
        storedEdits.forEach(edit => {
            convidados.forEach((convidado) => {
                if (convidado.id == edit.id) {
                    if (edit.nome) {
                        convidado.nome = edit.nome;
                    }
                    if (edit.cargo) {
                        convidado.cargo = edit.cargo;
                    }
                }
            });
        });

        // Limpa os dados do localStorage
        localStorage.removeItem('pendingEdits');
    }

    renderTable();
}

// Aplica as edições se houverem
applyEdits();

renderTable();