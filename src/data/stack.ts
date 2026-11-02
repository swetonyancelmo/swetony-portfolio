export type Depth = "producao" | "projetos" | "estudo";

export type StackItem = {
  name: string;
  depth: Depth;
  note?: string;
};

export type StackCategory = {
  id: string;
  title: string;
  items: StackItem[];
};

export const depthLabel: Record<Depth, string> = {
  producao: "em produção",
  projetos: "em projetos",
  estudo: "estudando",
};

export const depthHint: Record<Depth, string> = {
  producao: "uso no dia a dia do estágio, em sistemas no ar",
  projetos: "usei em projetos próprios e acadêmicos",
  estudo: "estudando agora ou usado no time, ainda não por mim",
};

export const stack: StackCategory[] = [
  {
    id: "backend",
    title: "Backend",
    items: [
      { name: "NestJS", depth: "producao", note: "APIs GraphQL e relatórios" },
      { name: "GraphQL", depth: "producao" },
      { name: "Node.js / TypeScript", depth: "producao" },
      {
        name: "Spring Boot",
        depth: "projetos",
        note: "Security, Data JPA, Cloud",
      },
      { name: "Java 21", depth: "projetos" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    items: [
      {
        name: "Next.js / React",
        depth: "producao",
        note: "telas de relatórios",
      },
      { name: "TypeScript", depth: "producao" },
      { name: "React Native (Expo)", depth: "projetos", note: "app offline" },
      { name: "Angular", depth: "projetos" },
      { name: "Tailwind CSS", depth: "projetos" },
    ],
  },
  {
    id: "dados",
    title: "Dados & Mensageria",
    items: [
      {
        name: "PostgreSQL / SQL",
        depth: "producao",
        note: "investigação de dados clínicos",
      },
      { name: "TypeORM", depth: "producao" },
      { name: "Python", depth: "producao", note: "ETL" },
      { name: "ClickHouse", depth: "projetos" },
      { name: "Flyway", depth: "projetos", note: "migrações versionadas" },
      { name: "Redis", depth: "projetos", note: "cache" },
      { name: "Kafka / Redpanda", depth: "projetos", note: "pipeline para ClickHouse" },
    ],
  },
  {
    id: "infra",
    title: "Infra & Qualidade",
    items: [
      { name: "Docker / Compose", depth: "producao" },
      { name: "Git / GitHub", depth: "producao" },
      { name: "Swagger / OpenAPI", depth: "projetos" },
      { name: "JUnit 5 / Jest", depth: "projetos" },
      { name: "Kubernetes", depth: "estudo" },
      { name: "AWS", depth: "estudo" },
    ],
  },
];
