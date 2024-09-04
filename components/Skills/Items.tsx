import {
  AzureVm,
  IconAlembic,
  IconAwsCloudFront,
  IconAwsEC2,
  IconAwsS3,
  IconBrandBootstrap,
  IconBxlJavascript,
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
  IconPyScopG2,
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
} from "./Icons";

type Item = {
  name: string;
  icon: JSX.Element;
};

export const lanuguages: Item[] = [
  {
    name: "JavaScript",
    icon: <IconBxlJavascript />,
  },
  {
    name: "TypeScript",
    icon: <IconTypescript />,
  },
  {
    name: "Python",
    icon: <IconPython />,
  },
  {
    name: "Java",
    icon: <IconJava />,
  },
  {
    name: "SQL",
    icon: <IconSQL />,
  },
];

export const libAndFrameworks: Item[] = [
  {
    name: "React",
    icon: <IconReact />,
  },
  {
    name: "NextJS",
    icon: <IconNextjs />,
  },
  {
    name: "Express",
    icon: <IconExpress />,
  },
  {
    name: "Fast Api",
    icon: <IconFastApi />,
  },
  {
    name: "HonoJs(Serverless)",
    icon: <IconHono />,
  },
  {
    name: "NodeJs",
    icon: <IconNodejs />,
  },
  {
    name: "React Native",
    icon: <IconReactNative />,
  },
  {
    name: "Tailwind Css",
    icon: <IconTailwindcss />,
  },
  {
    name: "Bootstrap",
    icon: <IconBrandBootstrap />,
  },
  {
    name: "Material UI",
    icon: <IconMaterialUi />,
  },
];

export const databasesAndOrms: Item[] = [
  {
    name: "MongoDb",
    icon: <IconMongodb />,
  },
  {
    name: "Postgres",
    icon: <IconPostgresql />,
  },
  {
    name: "MySql",
    icon: <IconMysql />,
  },
  {
    name: "SqlAlchemy",
    icon: <IconSqlAlechemy />,
  },
  {
    name: "Redis",
    icon: <IconRedis />,
  },
  {
    name: "Alembic",
    icon: <IconAlembic />,
  },
  {
    name: "Prisma",
    icon: <IconPrisma />,
  },
  {
    name: "PyScopG2",
    icon: <IconPyScopG2 />,
  },
];

export const otherTools: Item[] = [
  {
    name: "Mapbox",
    icon: <IconMapbox />,
  },
  {
    name: "Jest",
    icon: <IconJest />,
  },
  {
    name: "Cypress",
    icon: <IconCypress />,
  },
  {
    name: "React Query",
    icon: <IconReactquery />,
  },
  {
    name: "GraphQl",
    icon: <IconGraphql />,
  },
  {
    name: "Github Actions",
    icon: <IconGithubactions />,
  },
  {
    name: "Serverless",
    icon: <IconServerless />,
  },
  {
    name: "EsLint",
    icon: <IconEslint />,
  },
  {
    name: "Redux",
    icon: <IconRedux />,
  },
  {
    name: "Recoil",
    icon: <IconRecoil />,
  },
];

export const platforms: Item[] = [
  {
    name: "AWS S3",
    icon: <IconAwsS3 />,
  },
  {
    name: "AWS EC2",
    icon: <IconAwsEC2 />,
  },
  {
    name: "AWS CloudFront",
    icon: <IconAwsCloudFront />,
  },
  {
    name: "Azure VM",
    icon: <AzureVm />,
  },
  {
    name: "Docker",
    icon: <IconDocker />,
  },
];
