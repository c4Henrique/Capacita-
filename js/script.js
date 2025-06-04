// Theme Toggle
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Verifica se há uma preferência salva
    const savedTheme = localStorage.getItem('theme');
    
    // Aplica o tema salvo ou o tema do sistema
    if (savedTheme) {
        document.body.dataset.theme = savedTheme;
        updateThemeIcon(savedTheme);
    } else if (prefersDarkScheme.matches) {
        document.body.dataset.theme = 'dark';
        updateThemeIcon('dark');
    }
    
    // Adiciona o evento de clique no botão de tema
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.dataset.theme;
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.body.dataset.theme = newTheme;
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
    
    // Atualiza o ícone do tema
    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        icon.classList.remove('fa-moon', 'fa-sun');
        icon.classList.add(theme === 'dark' ? 'fa-sun' : 'fa-moon');
    }
});

// Dados dos cursos organizados por trilhas
const courseData = {
    trilhas: [
        {
            id: 'eletricidade',
            nome: 'ELETRICIDADE PRÁTICA',
            descricao: 'Para quem quer atuar como eletricista, com ou sem experiência.',
            cursos: {
                iniciante: [
                    {
                        id: 'eletricidade-basica',
                        titulo: 'Eletricidade Básica: Conceitos, Tensão e Corrente',
                        descricao: 'Aprenda os fundamentos da eletricidade, incluindo conceitos básicos, tensão, corrente e suas aplicações práticas.',
                        nivel: 'Iniciante',
                        imagem: 'imagens/eletricidade-basica.jpg'
                    },
                    {
                        id: 'instalacoes-residenciais',
                        titulo: 'Instalações Elétricas Residenciais',
                        descricao: 'Domine as técnicas de instalação elétrica residencial, desde o planejamento até a execução.',
                        nivel: 'Iniciante',
                        imagem: 'imagens/instalacoes-residenciais.jpg'
                    },
                    {
                        id: 'nr10',
                        titulo: 'NR10: Segurança em Instalações Elétricas',
                        descricao: 'Conheça as normas de segurança para trabalhos com eletricidade e proteja-se adequadamente.',
                        nivel: 'Iniciante',
                        imagem: 'imagens/nr10.jpg'
                    }
                ],
                intermediario: [
                    {
                        id: 'diagramas-eletricos',
                        titulo: 'Leitura e Interpretação de Diagramas Elétricos',
                        descricao: 'Aprenda a ler e interpretar diagramas elétricos profissionais.',
                        nivel: 'Intermediário',
                        imagem: 'imagens/diagramas-eletricos.jpg'
                    },
                    {
                        id: 'instalacoes-prediais',
                        titulo: 'Instalações Prediais e Quadros de Distribuição',
                        descricao: 'Domine as técnicas de instalação em prédios e a montagem de quadros de distribuição.',
                        nivel: 'Intermediário',
                        imagem: 'imagens/instalacoes-prediais.jpg'
                    },
                    {
                        id: 'projeto-iluminacao',
                        titulo: 'Projeto de Iluminação e Tomadas na Prática',
                        descricao: 'Aprenda a projetar sistemas de iluminação e distribuição de tomadas de forma eficiente.',
                        nivel: 'Intermediário',
                        imagem: 'imagens/projeto-iluminacao.jpg'
                    }
                ],
                avancado: [
                    {
                        id: 'comandos-eletricos',
                        titulo: 'Comandos Elétricos com Contatores e Relés',
                        descricao: 'Domine os comandos elétricos industriais usando contatores e relés.',
                        nivel: 'Avançado',
                        imagem: 'imagens/comandos-eletricos.jpg'
                    },
                    {
                        id: 'eletricidade-industrial',
                        titulo: 'Eletricidade Industrial: Motores, CLP e Soft Starters',
                        descricao: 'Aprenda sobre motores elétricos, CLPs e soft starters em ambientes industriais.',
                        nivel: 'Avançado',
                        imagem: 'imagens/eletricidade-industrial.jpg'
                    },
                    {
                        id: 'energia-solar',
                        titulo: 'Energia Solar Residencial e Sistemas Fotovoltaicos',
                        descricao: 'Domine a instalação e manutenção de sistemas de energia solar residencial.',
                        nivel: 'Avançado',
                        imagem: 'imagens/energia-solar.jpg'
                    }
                ]
            }
        },
        {
            id: 'excel',
            nome: 'EXCEL E ANÁLISE DE DADOS',
            descricao: 'Para quem quer dominar planilhas e usar dados para trabalhar melhor.',
            cursos: {
                iniciante: [
                    {
                        id: 'excel-zero',
                        titulo: 'Excel do Zero: Formatação, Fórmulas Básicas e Gráficos',
                        descricao: 'Aprenda Excel desde o básico, incluindo formatação, fórmulas e criação de gráficos.',
                        nivel: 'Iniciante',
                        imagem: 'imagens/excel-zero.jpg'
                    },
                    {
                        id: 'planilhas-controle',
                        titulo: 'Planilhas para Controle Pessoal e Financeiro',
                        descricao: 'Crie planilhas eficientes para controle pessoal e financeiro.',
                        nivel: 'Iniciante',
                        imagem: 'imagens/planilhas-controle.jpg'
                    },
                    {
                        id: 'google-planilhas',
                        titulo: 'Google Planilhas na Prática',
                        descricao: 'Domine o Google Planilhas para trabalho colaborativo e em nuvem.',
                        nivel: 'Iniciante',
                        imagem: 'imagens/google-planilhas.jpg'
                    }
                ],
                intermediario: [
                    {
                        id: 'formulas-avancadas',
                        titulo: 'Fórmulas Avançadas e Tabelas Dinâmicas',
                        descricao: 'Aprenda fórmulas avançadas e a criar tabelas dinâmicas no Excel.',
                        nivel: 'Intermediário',
                        imagem: 'imagens/formulas-avancadas.jpg'
                    },
                    {
                        id: 'dashboards',
                        titulo: 'Dashboards com Excel',
                        descricao: 'Crie dashboards profissionais e interativos no Excel.',
                        nivel: 'Intermediário',
                        imagem: 'imagens/dashboards.jpg'
                    },
                    {
                        id: 'excel-escritorio',
                        titulo: 'Excel para Escritório e Relatórios Profissionais',
                        descricao: 'Domine o Excel para criar relatórios profissionais e otimizar processos de escritório.',
                        nivel: 'Intermediário',
                        imagem: 'imagens/excel-escritorio.jpg'
                    }
                ],
                avancado: [
                    {
                        id: 'vba',
                        titulo: 'VBA: Automatizando Planilhas',
                        descricao: 'Aprenda a programar em VBA para automatizar tarefas no Excel.',
                        nivel: 'Avançado',
                        imagem: 'imagens/vba.jpg'
                    },
                    {
                        id: 'excel-financeiro',
                        titulo: 'Excel Financeiro e Análise de Indicadores',
                        descricao: 'Domine o Excel para análises financeiras e indicadores de negócios.',
                        nivel: 'Avançado',
                        imagem: 'imagens/excel-financeiro.jpg'
                    },
                    {
                        id: 'power-bi',
                        titulo: 'Power BI: Criação de Relatórios Interativos',
                        descricao: 'Aprenda a criar relatórios interativos e dashboards com Power BI.',
                        nivel: 'Avançado',
                        imagem: 'imagens/power-bi.jpg'
                    }
                ]
            }
        },
        {
            id: 'industria',
            nome: 'INDÚSTRIA E MANUTENÇÃO',
            descricao: 'Para quem quer trabalhar com manutenção, mecânica e automação.',
            cursos: {
                iniciante: [
                    {
                        id: 'mecanica-industrial',
                        titulo: 'Fundamentos da Mecânica Industrial',
                        descricao: 'Aprenda os fundamentos da mecânica industrial e seus princípios básicos.',
                        nivel: 'Iniciante',
                        imagem: 'imagens/mecanica-industrial.jpg'
                    },
                    {
                        id: 'soldagem',
                        titulo: 'Noções Básicas de Soldagem Elétrica',
                        descricao: 'Conheça as técnicas básicas de soldagem elétrica e suas aplicações.',
                        nivel: 'Iniciante',
                        imagem: 'imagens/soldagem.jpg'
                    },
                    {
                        id: 'ferramentas-epi',
                        titulo: 'Ferramentas e EPI na Indústria',
                        descricao: 'Aprenda sobre ferramentas industriais e equipamentos de proteção individual.',
                        nivel: 'Iniciante',
                        imagem: 'imagens/ferramentas-epi.jpg'
                    }
                ],
                intermediario: [
                    {
                        id: 'montagem-manutencao',
                        titulo: 'Montagem e Manutenção de Máquinas',
                        descricao: 'Domine as técnicas de montagem e manutenção de máquinas industriais.',
                        nivel: 'Intermediário',
                        imagem: 'imagens/montagem-manutencao.jpg'
                    },
                    {
                        id: 'instrumentacao',
                        titulo: 'Instrumentação e Sensores Industriais',
                        descricao: 'Aprenda sobre instrumentação industrial e diferentes tipos de sensores.',
                        nivel: 'Intermediário',
                        imagem: 'imagens/instrumentacao.jpg'
                    },
                    {
                        id: 'clp-ladder',
                        titulo: 'CLP com Ladder: Introdução e Aplicações',
                        descricao: 'Conheça a programação de CLPs usando a linguagem Ladder.',
                        nivel: 'Intermediário',
                        imagem: 'imagens/clp-ladder.jpg'
                    }
                ],
                avancado: [
                    {
                        id: 'arduino',
                        titulo: 'Automação com Arduino e Revezamento',
                        descricao: 'Aprenda a criar projetos de automação usando Arduino e revezamento.',
                        nivel: 'Avançado',
                        imagem: 'imagens/arduino.jpg'
                    },
                    {
                        id: 'manutencao-preventiva',
                        titulo: 'Projetos de Manutenção Preventiva',
                        descricao: 'Desenvolva projetos de manutenção preventiva para equipamentos industriais.',
                        nivel: 'Avançado',
                        imagem: 'imagens/manutencao-preventiva.jpg'
                    },
                    {
                        id: 'clp-ihm',
                        titulo: 'Integração de CLP + Interface Homem-Máquina (IHM)',
                        descricao: 'Aprenda a integrar CLPs com interfaces homem-máquina para automação industrial.',
                        nivel: 'Avançado',
                        imagem: 'imagens/clp-ihm.jpg'
                    }
                ]
            }
        },
        {
            id: 'informatica',
            nome: 'INFORMÁTICA E PRODUTIVIDADE',
            descricao: 'Para quem quer trabalhar melhor com ferramentas digitais.',
            cursos: {
                iniciante: [
                    {
                        id: 'informatica-basica',
                        titulo: 'Informática Básica: Windows, Navegadores e Segurança',
                        descricao: 'Aprenda os fundamentos da informática, incluindo Windows, navegadores e segurança digital.',
                        nivel: 'Iniciante',
                        imagem: 'imagens/informatica-basica.jpg'
                    },
                    {
                        id: 'office-essencial',
                        titulo: 'Pacote Office Essencial: Word, Excel, PowerPoint',
                        descricao: 'Domine as ferramentas essenciais do Pacote Office para produtividade.',
                        nivel: 'Iniciante',
                        imagem: 'imagens/office-essencial.jpg'
                    },
                    {
                        id: 'digitacao',
                        titulo: 'Digitação Rápida e Efetiva',
                        descricao: 'Aprenda técnicas de digitação rápida e eficiente.',
                        nivel: 'Iniciante',
                        imagem: 'imagens/digitacao.jpg'
                    }
                ],
                intermediario: [
                    {
                        id: 'organizacao-digital',
                        titulo: 'Organização Digital com Trello, Google Agenda e Drive',
                        descricao: 'Aprenda a organizar sua vida digital usando ferramentas de produtividade.',
                        nivel: 'Intermediário',
                        imagem: 'imagens/organizacao-digital.jpg'
                    },
                    {
                        id: 'word-profissional',
                        titulo: 'Word Profissional: Modelos, Currículos, Documentos',
                        descricao: 'Domine o Word para criar documentos profissionais e currículos.',
                        nivel: 'Intermediário',
                        imagem: 'imagens/word-profissional.jpg'
                    },
                    {
                        id: 'powerpoint-profissional',
                        titulo: 'PowerPoint para Apresentações Profissionais',
                        descricao: 'Crie apresentações profissionais e impactantes com PowerPoint.',
                        nivel: 'Intermediário',
                        imagem: 'imagens/powerpoint-profissional.jpg'
                    }
                ],
                avancado: [
                    {
                        id: 'zapier-scripts',
                        titulo: 'Automação de Tarefas com Zapier e Scripts',
                        descricao: 'Aprenda a automatizar tarefas usando Zapier e scripts.',
                        nivel: 'Avançado',
                        imagem: 'imagens/zapier-scripts.jpg'
                    },
                    {
                        id: 'notion',
                        titulo: 'Gestão de Projetos com Notion',
                        descricao: 'Domine o Notion para gerenciar projetos e equipes.',
                        nivel: 'Avançado',
                        imagem: 'imagens/notion.jpg'
                    },
                    {
                        id: 'google-workspace',
                        titulo: 'Google Workspace para Negócios',
                        descricao: 'Aprenda a usar o Google Workspace para otimizar processos de negócios.',
                        nivel: 'Avançado',
                        imagem: 'imagens/google-workspace.jpg'
                    }
                ]
            }
        }
    ],
    trilhasRapidas: [
        {
            id: 'curriculo',
            titulo: 'Como Criar Currículos de Impacto',
            descricao: 'Aprenda a criar currículos que se destacam no mercado de trabalho.',
            duracao: '2h',
            imagem: 'imagens/curriculo.jpg'
        },
        {
            id: 'whatsapp',
            titulo: 'Atendimento ao Cliente via WhatsApp',
            descricao: 'Domine as técnicas de atendimento ao cliente usando WhatsApp.',
            duracao: '3h',
            imagem: 'imagens/whatsapp.jpg'
        },
        {
            id: 'entrevistas',
            titulo: 'Como Passar em Entrevistas Técnicas',
            descricao: 'Prepare-se para entrevistas técnicas e aumente suas chances de sucesso.',
            duracao: '2h',
            imagem: 'imagens/entrevistas.jpg'
        },
        {
            id: 'financas',
            titulo: 'Organização Financeira Pessoal com Excel',
            descricao: 'Aprenda a organizar suas finanças pessoais usando Excel.',
            duracao: '3h',
            imagem: 'imagens/financas.jpg'
        },
        {
            id: 'impressao-3d',
            titulo: 'Curso Relâmpago: Introdução à Impressão 3D',
            descricao: 'Conheça os fundamentos da impressão 3D e suas aplicações.',
            duracao: '4h',
            imagem: 'imagens/impressao-3d.jpg'
        }
    ]
};

// Função para gerar os cards de cursos
function generateCourseCards() {
    const coursesContainer = document.querySelector('.courses-grid');
    if (!coursesContainer) return;

    // Limpa o container
    coursesContainer.innerHTML = '';

    // Gera cards para cada trilha
    courseData.trilhas.forEach(trilha => {
        // Adiciona o título da trilha
        const trilhaTitle = document.createElement('h3');
        trilhaTitle.className = 'trilha-title';
        trilhaTitle.textContent = trilha.nome;
        coursesContainer.appendChild(trilhaTitle);

        // Adiciona a descrição da trilha
        const trilhaDesc = document.createElement('p');
        trilhaDesc.className = 'trilha-description';
        trilhaDesc.textContent = trilha.descricao;
        coursesContainer.appendChild(trilhaDesc);

        // Gera cards para cada nível
        Object.entries(trilha.cursos).forEach(([nivel, cursos]) => {
            cursos.forEach(curso => {
                const card = document.createElement('div');
                card.className = 'course-card';
                card.innerHTML = `
                    <div class="course-image">
                        <img src="${curso.imagem}" alt="${curso.titulo}">
                    </div>
                    <div class="course-content">
                        <h3>${curso.titulo}</h3>
                        <p>${curso.descricao}</p>
                        <div class="course-footer">
                            <a href="curso.html?id=${curso.id}" class="btn btn-ver-curso">Ver Curso</a>
                            <a href="pagamento.html?id=${curso.id}" class="btn btn-adquirir-curso">Adquirir Curso</a>
                            <span class="course-level-duration">${curso.nivel}</span>
                        </div>
                    </div>
                `;
                coursesContainer.appendChild(card);
            });
        });
    });

    // Adiciona seção de Trilhas Rápidas
    const trilhasRapidasTitle = document.createElement('h3');
    trilhasRapidasTitle.className = 'trilha-title';
    trilhasRapidasTitle.textContent = 'TRILHAS RÁPIDAS';
    coursesContainer.appendChild(trilhasRapidasTitle);

    // Gera cards para trilhas rápidas
    courseData.trilhasRapidas.forEach(curso => {
        const card = document.createElement('div');
        card.className = 'course-card trilha-rapida';
        card.innerHTML = `
            <div class="course-image">
                <img src="${curso.imagem}" alt="${curso.titulo}">
            </div>
            <div class="course-content">
                <h3>${curso.titulo}</h3>
                <p>${curso.descricao}</p>
                <div class="course-footer">
                    <a href="curso.html?id=${curso.id}" class="btn btn-ver-curso">Ver Curso</a>
                    <a href="pagamento.html?id=${curso.id}" class="btn btn-adquirir-curso">Adquirir Curso</a>
                    <span class="course-level-duration">${curso.duracao}</span>
                </div>
            </div>
        `;
        coursesContainer.appendChild(card);
    });
}

// Função para filtrar cursos por categoria
function filterCourses(category) {
    const coursesContainer = document.querySelector('.courses-grid');
    if (!coursesContainer) return;

    // Remove filtro ativo anterior
    document.querySelectorAll('.filter-btn.active').forEach(btn => {
        btn.classList.remove('active');
    });

    // Adiciona filtro ativo ao botão clicado
    event.target.classList.add('active');

    // Limpa o container
    coursesContainer.innerHTML = '';

    if (category === 'all') {
        generateCourseCards();
        return;
    }

    // Filtra e gera cards apenas para a categoria selecionada
    const trilha = courseData.trilhas.find(t => t.id === category);
    if (trilha) {
        // Adiciona título e descrição da trilha
        const trilhaTitle = document.createElement('h3');
        trilhaTitle.className = 'trilha-title';
        trilhaTitle.textContent = trilha.nome;
        coursesContainer.appendChild(trilhaTitle);

        const trilhaDesc = document.createElement('p');
        trilhaDesc.className = 'trilha-description';
        trilhaDesc.textContent = trilha.descricao;
        coursesContainer.appendChild(trilhaDesc);

        // Gera cards para cada nível
        Object.entries(trilha.cursos).forEach(([nivel, cursos]) => {
            cursos.forEach(curso => {
                const card = document.createElement('div');
                card.className = 'course-card';
                card.innerHTML = `
                    <div class="course-image">
                        <img src="${curso.imagem}" alt="${curso.titulo}">
                    </div>
                    <div class="course-content">
                        <h3>${curso.titulo}</h3>
                        <p>${curso.descricao}</p>
                        <div class="course-footer">
                            <a href="curso.html?id=${curso.id}" class="btn btn-ver-curso">Ver Curso</a>
                            <a href="pagamento.html?id=${curso.id}" class="btn btn-adquirir-curso">Adquirir Curso</a>
                            <span class="course-level-duration">${curso.nivel}</span>
                        </div>
                    </div>
                `;
                coursesContainer.appendChild(card);
            });
        });
    }
}

// Função para buscar cursos
function searchCourses(query) {
    const coursesContainer = document.querySelector('.courses-grid');
    if (!coursesContainer) return;

    // Limpa o container
    coursesContainer.innerHTML = '';

    // Busca em todas as trilhas
    courseData.trilhas.forEach(trilha => {
        Object.entries(trilha.cursos).forEach(([nivel, cursos]) => {
            cursos.forEach(curso => {
                if (curso.titulo.toLowerCase().includes(query.toLowerCase()) ||
                    curso.descricao.toLowerCase().includes(query.toLowerCase())) {
                    const card = document.createElement('div');
                    card.className = 'course-card';
                    card.innerHTML = `
                        <div class="course-image">
                            <img src="${curso.imagem}" alt="${curso.titulo}">
                        </div>
                        <div class="course-content">
                            <h3>${curso.titulo}</h3>
                            <p>${curso.descricao}</p>
                            <div class="course-footer">
                                <a href="curso.html?id=${curso.id}" class="btn btn-ver-curso">Ver Curso</a>
                                <a href="pagamento.html?id=${curso.id}" class="btn btn-adquirir-curso">Adquirir Curso</a>
                                <span class="course-level-duration">${curso.nivel}</span>
                            </div>
                        </div>
                    `;
                    coursesContainer.appendChild(card);
                }
            });
        });
    });

    // Busca nas trilhas rápidas
    courseData.trilhasRapidas.forEach(curso => {
        if (curso.titulo.toLowerCase().includes(query.toLowerCase()) ||
            curso.descricao.toLowerCase().includes(query.toLowerCase())) {
            const card = document.createElement('div');
            card.className = 'course-card trilha-rapida';
            card.innerHTML = `
                <div class="course-image">
                    <img src="${curso.imagem}" alt="${curso.titulo}">
                </div>
                <div class="course-content">
                    <h3>${curso.titulo}</h3>
                    <p>${curso.descricao}</p>
                    <div class="course-footer">
                        <a href="curso.html?id=${curso.id}" class="btn btn-ver-curso">Ver Curso</a>
                        <a href="pagamento.html?id=${curso.id}" class="btn btn-adquirir-curso">Adquirir Curso</a>
                        <span class="course-level-duration">${curso.duracao}</span>
                    </div>
                </div>
            `;
            coursesContainer.appendChild(card);
        }
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    generateCourseCards();

    // Adiciona event listeners para os botões de filtro
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterCourses(e.target.dataset.category);
        });
    });

    // Adiciona event listener para a busca
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchCourses(e.target.value);
        });
    }

    // Add hover effect to course cards
    const cards = document.querySelectorAll('.course-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}); 