import Single from './components/Single.js';

const routes = [
    { path: '/single', component: Single },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

const app = Vue.createApp({
    data() {
        return {
            section: 'home',
            activeHeader: null,
            activeModal: false,
            sliderPosition: 0,
            projetos: [
                {
                    nome: 'Ecoa Energias Renováveis',
                    descricao: 'Site institucional, feito em: jQuery, Sass, PHP, WordPress.',
                    src: 'image/Ecoa.png',
                    buttons: false,
                    status: true,
                    categoria: 'Corporativo',
                    site: null,
                    repositorio: null,
                    conhecimentos: [
                        {
                            name: 'jQuery',
                            level: 'Intermediário',
                            descricao: 'jQuery é uma biblioteca JavaScript de alto desempenho que simplifica a manipulação e interação com elementos HTML, tratamento de eventos, animações e requisições assíncronas. Com uma sintaxe concisa e poderosa, o jQuery agiliza o desenvolvimento web e garante compatibilidade com diferentes navegadores.',
                            src: 'image/svg/jquery.svg'
                        },
                        {
                            name: 'Sass',
                            level: 'Avançado',
                            descricao: 'Sass é uma linguagem de folhas de estilo que estende o CSS. Ele oferece recursos adicionais, como variáveis, mixins e aninhamento de seletores, que tornam a escrita de estilos mais eficiente e modular. O Sass é compilado para CSS, permitindo que os estilos sejam utilizados pelos navegadores.',
                            src: 'image/svg/sass.svg'
                        },
                        {
                            name: 'PHP',
                            level: 'Intermediário',
                            descricao: 'PHP é uma linguagem de programação do lado do servidor, usada principalmente para criar páginas da web dinâmicas. Com o PHP, é possível interagir com bancos de dados, processar formulários, gerar conteúdo personalizado e muito mais. Sua sintaxe é semelhante ao HTML, permitindo a incorporação fácil de código PHP em arquivos HTML.',
                            src: 'image/svg/php.svg'
                        },
                        {
                            name: 'WordPress',
                            level: 'Intermediário',
                            descricao: 'WordPress é uma plataforma de gerenciamento de conteúdo (CMS) popular e de código aberto, usada para criar e gerenciar sites e blogs. Com recursos flexíveis e uma grande variedade de plugins e temas, o WordPress permite criar sites personalizados de forma acessível e amigável.',
                            src: 'image/svg/wordpress.svg'
                        }
                    ],
                    conhecimentoActive: []
                },
                {
                    nome: 'VillaReal Marina',
                    descricao: 'Site institucional, feito em: jQuery, Sass, PHP, WordPress.',
                    src: 'image/Home - VillaReal Marina.png',
                    buttons: false,
                    status: true,
                    categoria: 'Corporativo',
                    site: 'https://marinavillareal.com.br/',
                    repositorio: null,
                    conhecimentos: [
                        {
                            name: 'jQuery',
                            level: 'Intermediário',
                            descricao: 'jQuery é uma biblioteca JavaScript de alto desempenho que simplifica a manipulação e interação com elementos HTML, tratamento de eventos, animações e requisições assíncronas. Com uma sintaxe concisa e poderosa, o jQuery agiliza o desenvolvimento web e garante compatibilidade com diferentes navegadores.',
                            src: 'image/svg/jquery.svg'
                        },
                        {
                            name: 'Sass',
                            level: 'Avançado',
                            descricao: 'Sass é uma linguagem de folhas de estilo que estende o CSS. Ele oferece recursos adicionais, como variáveis, mixins e aninhamento de seletores, que tornam a escrita de estilos mais eficiente e modular. O Sass é compilado para CSS, permitindo que os estilos sejam utilizados pelos navegadores.',
                            src: 'image/svg/sass.svg'
                        },
                        {
                            name: 'PHP',
                            level: 'Intermediário',
                            descricao: 'PHP é uma linguagem de programação do lado do servidor, usada principalmente para criar páginas da web dinâmicas. Com o PHP, é possível interagir com bancos de dados, processar formulários, gerar conteúdo personalizado e muito mais. Sua sintaxe é semelhante ao HTML, permitindo a incorporação fácil de código PHP em arquivos HTML.',
                            src: 'image/svg/php.svg'
                        },
                        {
                            name: 'WordPress',
                            level: 'Intermediário',
                            descricao: 'WordPress é uma plataforma de gerenciamento de conteúdo (CMS) popular e de código aberto, usada para criar e gerenciar sites e blogs. Com recursos flexíveis e uma grande variedade de plugins e temas, o WordPress permite criar sites personalizados de forma acessível e amigável.',
                            src: 'image/svg/wordpress.svg'
                        }
                    ],
                    conhecimentoActive: []
                },
                {
                    nome: 'Em desenvolvimento',
                    descricao: 'Aguarde, novos projetos estão sendo desenvolvidos.',
                    src: 'image/svg/tools.svg',
                    buttons: false,
                    status: false,
                    categoria: null,
                    site: null,
                    repositorio: null,
                    conhecimentos: []
                },
                {
                    nome: 'Em desenvolvimento',
                    descricao: 'Aguarde, novos projetos estão sendo desenvolvidos.',
                    src: 'image/svg/tools.svg',
                    buttons: false,
                    status: false,
                    categoria: null,
                    site: null,
                    repositorio: null,
                    conhecimentos: []
                }
            ],
            single: [
                {
                    nome: 'Ecoa Energias Renováveis',
                    descricao: 'Site institucional, feito em: jQuery, Sass, PHP, WordPress.',
                    src: 'image/Ecoa.png',
                    buttons: false,
                    status: true,
                    categoria: 'Corporativo',
                    site: null,
                    repositorio: null,
                    conhecimentos: [
                        {
                            name: 'jQuery',
                            level: 'Intermediário',
                            descricao: 'jQuery é uma biblioteca JavaScript de alto desempenho que simplifica a manipulação e interação com elementos HTML, tratamento de eventos, animações e requisições assíncronas. Com uma sintaxe concisa e poderosa, o jQuery agiliza o desenvolvimento web e garante compatibilidade com diferentes navegadores.',
                            src: 'image/svg/jquery.svg'
                        },
                        {
                            name: 'Sass',
                            level: 'Avançado',
                            descricao: 'Sass é uma linguagem de folhas de estilo que estende o CSS. Ele oferece recursos adicionais, como variáveis, mixins e aninhamento de seletores, que tornam a escrita de estilos mais eficiente e modular. O Sass é compilado para CSS, permitindo que os estilos sejam utilizados pelos navegadores.',
                            src: 'image/svg/sass.svg'
                        },
                        {
                            name: 'PHP',
                            level: 'Intermediário',
                            descricao: 'PHP é uma linguagem de programação do lado do servidor, usada principalmente para criar páginas da web dinâmicas. Com o PHP, é possível interagir com bancos de dados, processar formulários, gerar conteúdo personalizado e muito mais. Sua sintaxe é semelhante ao HTML, permitindo a incorporação fácil de código PHP em arquivos HTML.',
                            src: 'image/svg/php.svg'
                        },
                        {
                            name: 'WordPress',
                            level: 'Intermediário',
                            descricao: 'WordPress é uma plataforma de gerenciamento de conteúdo (CMS) popular e de código aberto, usada para criar e gerenciar sites e blogs. Com recursos flexíveis e uma grande variedade de plugins e temas, o WordPress permite criar sites personalizados de forma acessível e amigável.',
                            src: 'image/svg/wordpress.svg'
                        }
                    ],
                    conhecimentoActive: []
                },
            ],
            conhecimentos: [
                {
                    name: 'HTML',
                    level: 'Avançado',
                    descricao: 'HTML é uma linguagem de marcação usada para estruturar e exibir conteúdo na web. Composta por elementos e tags, o HTML define a estrutura e semântica de uma página, permitindo adicionar texto, imagens e links. Combinado com CSS e JavaScript, o HTML possibilita criar páginas web dinâmicas e interativas.',
                    src: 'image/svg/html.svg'
                },
                {
                    name: 'CSS',
                    level: 'Avançado',
                    descricao: 'CSS é uma linguagem de estilo utilizada para controlar a apresentação e o layout de elementos em uma página da web. Com o CSS, é possível definir cores, fontes, tamanhos, posicionamento e outros aspectos visuais dos elementos HTML. ',
                    src: 'image/svg/css.svg'
                },
                {
                    name: 'JavaScript',
                    level: 'Avançado',
                    descricao: 'JavaScript é uma linguagem de programação utilizada para adicionar interatividade a páginas web. Com ele, é possível manipular elementos HTML, responder a eventos e criar funcionalidades dinâmicas. Executado no lado do cliente, o JavaScript é essencial para o desenvolvimento web moderno.',
                    src: 'image/svg/js.svg'
                },
                {
                    name: 'PHP',
                    level: 'Intermediário',
                    descricao: 'PHP é uma linguagem de programação do lado do servidor, usada principalmente para criar páginas da web dinâmicas. Com o PHP, é possível interagir com bancos de dados, processar formulários, gerar conteúdo personalizado e muito mais. Sua sintaxe é semelhante ao HTML, permitindo a incorporação fácil de código PHP em arquivos HTML.',
                    src: 'image/svg/php.svg'
                },
                {
                    name: 'Sass',
                    level: 'Avançado',
                    descricao: 'Sass é uma linguagem de folhas de estilo que estende o CSS. Ele oferece recursos adicionais, como variáveis, mixins e aninhamento de seletores, que tornam a escrita de estilos mais eficiente e modular. O Sass é compilado para CSS, permitindo que os estilos sejam utilizados pelos navegadores.',
                    src: 'image/svg/sass.svg'
                },
                {
                    name: 'Vue.js',
                    level: 'Avançado',
                    descricao: 'Vue.js é um framework JavaScript progressivo e de código aberto, usado para criar interfaces de usuário interativas. Ele adota uma abordagem baseada em componentes para a construção de aplicativos web reativos e escaláveis.',
                    src: 'image/svg/vue.svg'
                },
                {
                    name: 'WordPress',
                    level: 'Intermediário',
                    descricao: 'WordPress é uma plataforma de gerenciamento de conteúdo (CMS) popular e de código aberto, usada para criar e gerenciar sites e blogs. Com recursos flexíveis e uma grande variedade de plugins e temas, o WordPress permite criar sites personalizados de forma acessível e amigável.',
                    src: 'image/svg/wordpress.svg'
                },
                {
                    name: 'Git',
                    level: 'Avançado',
                    descricao: 'Git é um sistema de controle de versão distribuído amplamente utilizado para o rastreamento de mudanças em projetos de desenvolvimento de software. Ele permite que equipes colaborem no desenvolvimento de código-fonte de forma eficiente, controlando as versões e facilitando a integração de alterações.',
                    src: 'image/svg/git.svg'
                },
                {
                    name: 'jQuery',
                    level: 'Intermediário',
                    descricao: 'jQuery é uma biblioteca JavaScript de alto desempenho que simplifica a manipulação e interação com elementos HTML, tratamento de eventos, animações e requisições assíncronas. Com uma sintaxe concisa e poderosa, o jQuery agiliza o desenvolvimento web e garante compatibilidade com diferentes navegadores.',
                    src: 'image/svg/jquery.svg'
                },
                {
                    name: 'React',
                    level: 'Intermediário',
                    descricao: 'React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
                    src: 'image/svg/react.svg'
                },
                {
                    name: 'SQL',
                    level: 'Intermediário',
                    descricao: 'SQL é uma linguagem de domínio específico desenvolvida para gerenciar dados relacionais em um sistema de gerenciamento de banco de dados, ou para processamento de fluxo de dados em um sistema de gerenciamento de fluxo de dados.',
                    src: 'image/svg/sql.svg'
                },
                {
                    name: 'Linux',
                    level: 'Intermediário',
                    descricao: 'Linux é um Sistema Operacional, assim como o Windows e o Mac OS, que possibilita a execução de programas em um computador e outros dispositivos. Linux pode ser livremente modificado e distribuído. Apesar desta interpretação ser simplista é perfeitamente correta e aceitável.',
                    src: 'image/svg/linux.svg'
                }
            ],
            conhecimentoActive: [
                {
                    name: 'HTML',
                    level: 'Avançado',
                    descricao: 'HTML é uma linguagem de marcação usada para estruturar e exibir conteúdo na web. Composta por elementos e tags, o HTML define a estrutura e semântica de uma página, permitindo adicionar texto, imagens e links. Combinado com CSS e JavaScript, o HTML possibilita criar páginas web dinâmicas e interativas.',
                    src: 'image/svg/html.svg'
                }
            ]
        }
    },
    components: {
        Single
    },
    methods: {
        changeSection() {
            const element = document.getElementById(this.section);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        },
        toggleMenu() {
            document.querySelector('.menu-lateral').classList.toggle('closed')
        },
        showProject(index) {
            this.single = []
            this.single.push(this.projetos[index])
        },
        animateJumpLeft() {
            document.querySelector('.slick-prev').classList.add('animate__tada')
            setTimeout(() => {
                document.querySelector('.slick-prev').classList.remove('animate__tada')
            }, 400)
        },
        animateJumpRight() {
            document.querySelector('.slick-next').classList.add('animate__tada')
            setTimeout(() => {
                document.querySelector('.slick-next').classList.remove('animate__tada')
            }, 400)
        },
        initSlick() {
            $('.slider').slick({
                autoplay: false,
                autoplaySpeed: 3000,
                dots: false,
                arrows: false,
                infinite: true,
                speed: 400,
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: '<button class="slick-prev" aria-label="Previous"><-></button>',
                nextArrow: '<button class="slick-next" aria-label="Next">-></button>',
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true
                        }
                    }
                ]
            });
        }
    },
    mounted() {
        this.initSlick();

        const header = document.getElementById('original-header').offsetTop;
          
            if (window.scrollY > header) {
                this.activeHeader = true
            } else if (window.scrollY <= header) {
                this.activeHeader = false
            }

        window.addEventListener('scroll', () => {
            const header = document.getElementById('original-header').offsetTop;
          
            if (window.scrollY > header) {
                this.activeHeader = true
            } else {
                this.activeHeader = false
            }
        });
    }
})

app.use(router)

app.mount('#app')

$('.slick-prev').click(function () {
    $('.slider').slick('slickPrev');
});

$('.slick-next').click(function () {
    $('.slider').slick('slickNext');
});

// AOS

AOS.init({
    duration: 1500
});
  
  