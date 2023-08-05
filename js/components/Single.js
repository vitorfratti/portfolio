const Single = {
    template: `
    <section class="single-projeto" id="single-projeto">
        <div class="container" v-for="(single, index) in single" :key="index">
            <div class="top">
                <a href="#"><h4><span><- </span>Projetos</h4></a>
                <h2>{{ single.nome }}</h2>
                <p>{{ single.descricao }}</p>
            </div>
            <div class="mid">
                <div class="left">
                    <div class="tools" v-if="single.status == false">
                        <img :src="projeto.src" alt="example">
                    </div>
                    <div v-else class="single-projeto_box">
                        <img :src="single.src" alt="example">
                    </div>
                    <div class="action-buttons">
                        <a :href="single.site" target="_blank" class="site">Ir para o site</a>
                        <a v-if="single.categoria == 'Corporativo'" :href="single.repositorio" target="_blank" title="Projeto Corporativo" class="repositorio disabled" disabled>
                            Ver repositório
                            <img src="image/svg/blocked.svg" alt="blocked">
                        </a>
                        <a v-else class="repositorio" :href="single.repositorio" target="_blank">Ver repositório</a>
                    </div>
                </div>
                <div class="right">
                    <div class="title">
                        <h2>Conhecimentos utilizados:</h2>
                    </div>
                    <div class="conhecimentos">
                        <span v-for="(conhecimento, index) in single.conhecimentos" :key="index" @mouseover="single.conhecimentoActive = []; single.conhecimentoActive.push(conhecimento)" @click="single.conhecimentoActive = []; single.conhecimentoActive.push(conhecimento)">
                            <img :src="conhecimento.src" alt="">
                        </span>
                    </div>
                    <div class="conhecimentos_text">
                        <span v-for="(conhecimento, index) in single.conhecimentoActive" :key="index">
                            <h3>{{ conhecimento.name }}</h3>
                            <h4 v-if="conhecimento.level === 'Avançado'" class="avancado">{{ conhecimento.level }}</h4>
                            <h4 v-if="conhecimento.level === 'Intermediário'" class="intermediario">{{ conhecimento.level }}</h4>
                            <h4 v-if="conhecimento.level === 'Básico'" class="basico">{{ conhecimento.level }}</h4>
                            <p>{{ conhecimento.descricao }}</p>
                        </span>
                    </div>
                </div>
            </div>
            <div class="bottom">
            <a href="../../index.html"><h4><span><- </span>Voltar para Projetos</h4></a>
            </div>
        </div>
    </section>
    `,
    data() {
        return {}
    },
    mounted() {
        this.single[0].conhecimentoActive.push(this.single[0].conhecimentos[0])

        $('html, body').animate({ scrollTop: 0 }, 'slow');
    },
    props: ['single']
};

export default Single;