export type Project = {
  slug: string;
  index: string;
  title: string;
  summary: string;
  year: string;
  status: "producao" | "em-andamento" | "estudo";
  role: string;
  problem: string;
  solution: string;
  result: string;
  stack: string[];
  links?: { label: string; href: string }[];
  image?: string; // caminho em /public, ex: "/projects/medsys.png"
};

const gh = (repo: string) => `https://github.com/swetonyancelmo/${repo}`;

export const projects: Project[] = [
  {
    slug: "amigos-do-nordeste",
    index: "01",
    title: "Cadastro de Famílias — Amigos do Nordeste",
    summary:
      "Sistema para a associação que atende mais de 2.500 famílias no Sertão do Moxotó (PE): API, painel web e app de campo que funciona sem internet. Trabalho interdisciplinar da UNIBRA, nota 10.",
    year: "2026",
    status: "em-andamento",
    role: "líder técnico · arquitetura, telas, endpoints e infra",
    problem:
      "A associação precisava registrar as famílias atendidas e gerar relatórios, com uma equipe de estudantes que não podia gastar semanas configurando segurança antes de tocar no domínio.",
    solution:
      "Arquitetei o sistema inteiro e entreguei a base pronta: autenticação com argon2id, access token de 15 min em memória e renovação em cookie httpOnly, toda rota nascendo protegida, migrações Flyway e decisões registradas em ADRs. Defini regras do projeto (nada calculável é digitado; todo campo coletado aparece em algum relatório) e dividi as tarefas no Kanban.",
    result:
      "API, painel e app publicados, com 10 ADRs, CI no GitHub Actions e centenas de testes nos três repositórios. A equipe criava controllers de domínio sem mexer em Spring Security, e nenhum dado de família fica guardado no celular da agente.",
    stack: [
      "Java 21",
      "Spring Boot 3.4",
      "Spring Security",
      "JPA",
      "Flyway",
      "PostgreSQL",
      "Docker",
      "Next.js",
      "React Native",
    ],
    links: [
      { label: "api", href: gh("amigos-do-nordeste-api") },
      { label: "web", href: gh("amigos-do-nordeste-web") },
      { label: "app", href: gh("amigos-do-nordeste-app") },
    ],
  },
  {
    slug: "medsys-api",
    index: "02",
    title: "MedSys — API de gestão de consultas médicas",
    summary:
      "Ciclo completo de uma clínica: pacientes, médicos, agenda, consultas e receitas. Trabalho em equipe de 3 na disciplina de Cliente-Servidor.",
    year: "2026",
    status: "estudo",
    role: "arquitetura do backend, segurança e endpoints de pacientes, médicos e receitas",
    problem:
      "Uma API de clínica precisa impedir agendamento duplo, separar o que cada perfil pode fazer e aguentar tentativas de abuso no login — tudo isso com um time de três pessoas dividindo o trabalho.",
    solution:
      "Arquitetei o backend em camadas e dividi as tarefas. Implementei JWT com RBAC (paciente, médico, atendente) via Spring Security, rate limiting no login com Bucket4j, cache com Redis, prevenção de double booking com índices únicos parciais no Postgres e documentação Swagger.",
    result:
      "API completa com testes cobertos por JaCoCo, imagem publicada no Docker Hub e domínio modelado em português para o contexto de clínicas.",
    stack: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Redis",
      "PostgreSQL",
      "Flyway",
      "Bucket4j",
      "Swagger",
    ],
    links: [{ label: "código", href: gh("medsys-api") }],
  },
  {
    slug: "ecommerce-microservices",
    index: "03",
    title: "E-commerce em microsserviços",
    summary:
      "Catálogo, estoque e pedidos como serviços independentes, com gateway, discovery e circuit breaker.",
    year: "2026",
    status: "estudo",
    role: "projeto individual de estudo",
    problem:
      "Entender na prática o que muda quando um monólito vira serviços: como um pedido descobre o serviço de estoque, o que acontece quando ele cai e como cada serviço mantém seu próprio banco.",
    solution:
      "Cinco módulos Spring Cloud: Eureka para discovery, API Gateway como entrada única, OpenFeign para a chamada síncrona pedido → estoque protegida por Resilience4j (retry, circuit breaker com janela de 10 chamadas e fallback), um banco por serviço e Flyway em cada um.",
    result:
      "Um pedido com estoque zero falha de forma controlada (FAILED_NO_STOCK) e a queda do inventory abre o circuito em vez de derrubar o order. Serviu de base para o que estou estudando de system design.",
    stack: [
      "Java 21",
      "Spring Boot",
      "Spring Cloud",
      "Eureka",
      "OpenFeign",
      "Resilience4j",
      "PostgreSQL",
      "Flyway",
      "Docker",
    ],
    links: [{ label: "código", href: gh("ecommerce-microservices") }],
  },
  {
    slug: "wallet-clean-arch",
    index: "04",
    title: "Wallet — Clean Architecture em NestJS",
    summary:
      "Carteira digital (criar conta, depositar, sacar, transferir) com o domínio isolado do framework e do banco.",
    year: "2026",
    status: "estudo",
    role: "projeto individual de estudo",
    problem:
      "No estágio uso NestJS todo dia; queria entender como manter regras de negócio fora do framework para que uma troca de ORM ou de transporte não tocasse no domínio.",
    solution:
      "Quatro camadas (domain, application, infrastructure, presentation) com a regra de dependência apontando para dentro. Entidade Account com invariantes próprias, saldo em centavos para evitar ponto flutuante, exceções de domínio puras traduzidas para HTTP por um filter, repositório como interface implementada pelo TypeORM.",
    result:
      "Casos de uso testáveis sem subir Nest nem Postgres; a persistência é substituível sem tocar em domínio. Swagger está no roadmap.",
    stack: [
      "NestJS 11",
      "TypeScript",
      "TypeORM",
      "PostgreSQL 16",
      "Jest",
      "Supertest",
      "Docker Compose",
    ],
    links: [{ label: "código", href: gh("wallet-clean-arch") }],
  },
];
