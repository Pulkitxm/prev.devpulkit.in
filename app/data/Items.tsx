import {
  AzureVm,
  IconAlembic,
  IconAwsCloudFront,
  IconAwsEC2,
  IconAwsS3,
  IconBrandBootstrap,
  JavaScriptIcon,
  IconCypress,
  IconDocker,
  IconEslint,
  IconExpress,
  IconFastApi,
  IconGithubactions,
  IconGraphql,
  IconHono,
  IconJava,
  IconJest,
  IconMapbox,
  IconMaterialUi,
  IconMongodb,
  IconMysql,
  IconNextjs,
  IconNodejs,
  IconPostgresql,
  IconPrisma,
  IconPsycopG2,
  IconPython,
  IconReact,
  IconReactNative,
  IconReactquery,
  IconRecoil,
  IconRedis,
  IconRedux,
  IconSQL,
  IconServerless,
  IconSqlAlechemy,
  IconTailwindcss,
  IconTypescript,
} from "../../lib/skills-Icons";

type Item = {
  name: string;
  icon: typeof JavaScriptIcon;
  url?: string;
};

const lanuguages: Item[] = [
  {
    name: "JavaScript",
    icon: JavaScriptIcon,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    icon: IconTypescript,
    url: "https://www.typescriptlang.org",
  },
  {
    name: "Python",
    icon: IconPython,
    url: "https://www.python.org",
  },
  {
    name: "Java",
    icon: IconJava,
    url: "https://www.java.com/en",
  },
  {
    name: "SQL",
    icon: IconSQL,
    url: "https://www.mysql.com",
  },
];

const libAndFrameworks: Item[] = [
  {
    name: "React",
    icon: IconReact,
    url: "https://react.dev",
  },
  {
    name: "NextJS",
    icon: IconNextjs,
    url: "https://nextjs.org",
  },
  {
    name: "Express",
    icon: IconExpress,
    url: "https://expressjs.com",
  },
  {
    name: "Fast Api",
    icon: IconFastApi,
    url: "https://fastapi.tiangolo.com",
  },
  {
    name: "HonoJs(Serverless)",
    icon: IconHono,
    url: "https://hono.dev",
  },
  {
    name: "NodeJs",
    icon: IconNodejs,
    url: "https://nodejs.org",
  },
  {
    name: "React Native",
    icon: IconReactNative,
    url: "https://reactnative.dev",
  },
  {
    name: "Tailwind Css",
    icon: IconTailwindcss,
    url: "https://tailwindcss.com",
  },
  {
    name: "Bootstrap",
    icon: IconBrandBootstrap,
    url: "https://getbootstrap.com",
  },
  {
    name: "Material UI",
    icon: IconMaterialUi,
    url: "https://mui.com/material-ui",
  },
];

const databasesAndOrms: Item[] = [
  {
    name: "MongoDb",
    icon: IconMongodb,
    url: "https://www.mongodb.com",
  },
  {
    name: "Postgres",
    icon: IconPostgresql,
    url: "https://www.postgresql.org",
  },
  {
    name: "SqlAlchemy",
    icon: IconSqlAlechemy,
    url: "https://www.sqlalchemy.org",
  },
  {
    name: "Redis",
    icon: IconRedis,
    url: "https://redis.io",
  },
  {
    name: "Alembic",
    icon: IconAlembic,
    url: "https://alembic.sqlalchemy.org",
  },
  {
    name: "MySql",
    icon: IconMysql,
    url: "https://mysql.com",
  },
  {
    name: "Prisma",
    icon: IconPrisma,
    url: "https://www.prisma.io",
  },
  {
    name: "PyScopG2",
    icon: IconPsycopG2,
    url: "https://pypi.org/project/psycopg2",
  },
];

const otherTools: Item[] = [
  {
    name: "Mapbox",
    icon: IconMapbox,
    url: "https://www.mapbox.com",
  },
  {
    name: "Jest",
    icon: IconJest,
    url: "https://jestjs.io",
  },
  {
    name: "Cypress",
    icon: IconCypress,
    url: "https://www.cypress.io",
  },
  {
    name: "React Query",
    icon: IconReactquery,
    url: "https://tanstack.com/query/v3",
  },
  {
    name: "GraphQl",
    icon: IconGraphql,
    url: "https://graphql.org",
  },
  {
    name: "Github Actions",
    icon: IconGithubactions,
    url: "https://github.com/features/actions",
  },
  {
    name: "Serverless",
    icon: IconServerless,
  },
  {
    name: "EsLint",
    icon: IconEslint,
    url: "https://eslint.org",
  },
  {
    name: "Redux",
    icon: IconRedux,
    url: "https://redux.js.org",
  },
  {
    name: "Recoil",
    icon: IconRecoil,
    url: "https://recoiljs.org",
  },
];

const platforms: Item[] = [
  {
    name: "AWS S3",
    icon: IconAwsS3,
    url: "https://aws.amazon.com/s3",
  },
  {
    name: "AWS EC2",
    icon: IconAwsEC2,
    url: "https://aws.amazon.com/pm/ec2",
  },
  {
    name: "AWS CloudFront",
    icon: IconAwsCloudFront,
    url: "https://aws.amazon.com/cloudfront",
  },
  {
    name: "Azure VM",
    icon: AzureVm,
    url: "https://azure.microsoft.com/en-in/free/virtual-machines/search",
  },
  {
    name: "Docker",
    icon: IconDocker,
    url: "https://www.docker.com",
  },
];

export const displayItems = [
  {
    name: "Languages",
    items: lanuguages,
  },
  {
    name: "Libraries and Framworks",
    items: libAndFrameworks,
  },
  {
    name: "Databases and ORMs",
    items: databasesAndOrms,
  },
  {
    name: "Other Tools",
    items: otherTools,
  },
  {
    name: "Platforms",
    items: platforms,
  },
];
