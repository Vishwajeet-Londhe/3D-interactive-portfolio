import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI"/>,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify/>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3/>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap/>,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven/>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java"/>,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus/>,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino/>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  { // 01. KrishiRakshak Hackathon project
    id: "krishirakshak",
    category: "AI/ML + Full Stack",
    title: "Crop Disease And Pest Control",
    src: "/assets/projects-screenshots/1.Krishi-Hackathon/Home.jpg",
    screenshots: ["1.png", "Disease.jpg", "Government Scheme.png", "History.jpg", "Home.jpg", "Weather Based Prediction.png"],
    live: "https://ai-docker-file-optimizer.netlify.app/",
    github:"https://github.com/Vishwajeet-Londhe/hackathon-KrishiRakshak",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.vite],
      backend: [PROJECT_SKILLS.openai,PROJECT_SKILLS.netlify],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            KrishiRakshak helps farmers detect plant diseases and manage pests using AI-powered image analysis. 
            Simply upload an image of a plant, and the app provides a diagnosis and recommended solutions. 
            Deployed on Vercel, it ensures fast and easy access to plant health management.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/1.Krishi-Hackathon/1.png`,
              `${BASE_PATH}/1.Krishi-Hackathon/Disease.jpg`,
              `${BASE_PATH}/1.Krishi-Hackathon/Government Scheme.png`,
              `${BASE_PATH}/1.Krishi-Hackathon/History.jpg`,
              `${BASE_PATH}/1.Krishi-Hackathon/Home.jpg`,
              `${BASE_PATH}/1.Krishi-Hackathon/Weather Based Prediction.png`,
            ]}
          />
        </div>
      );
    },
  },
  { // 02. Face Mask Detection project
    id: "face-mask-detection",
    category: "Machine Learning",
    title: "Face Mask Detection",
    src: "/assets/projects-screenshots/2.Face-Mask-Detection/No Mask.png",
    screenshots: ["Mask.png", "No Mask.png", "Training Model.png", "With Mask Dataset.png", "Without Mask Dataset.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.bootstrap,
      ],
      backend: [
        PROJECT_SKILLS.java,
        PROJECT_SKILLS.maven,
        PROJECT_SKILLS.postgres,
      ],
    },
    live: "https://github.com/Abhiz2411/FinanceMe-Devops-Project-01",
    github: "https://github.com/Vishwajeet-Londhe/Face-Mask-Detector",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            FinanceMe: Complete DevOps Capstone Project
          </TypographyP>
          <TypographyP className="font-mono ">
            This project demonstrates the deployment of a DevOps pipeline for a global banking and
            financial services provider, FinanceMe. The company transitioned from a monolithic 
            architecture to a microservice-based architecture to handle increased traffic and 
            scaling challenges. The project involves automating infrastructure provisioning, build 
            and deployment processes, and continuous monitoring using modern DevOps tools and 
            AWS services.?
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Architecture </TypographyH3>
          <p className="font-mono mb-2">
            The project is divided into three main phases:
            1.Automating Infrastructure Provisioning
            2.Build and Deployment Automation
            3.Continuous Monitoring
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/2.Face-Mask-Detection/Mask.png`,
              `${BASE_PATH}/2.Face-Mask-Detection/No Mask.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Automating Infrastructure Provisioning</TypographyH3>
          <p className="font-mono mb-2">
          Terraform is used to create 4 AWS EC2 instances:
            Jenkins Master Node (for CI/CD pipeline management)
            Build Server (for application and Docker image builds)
            Production Server (for deploying Dockerized applications)
            Monitoring Server (for continuous monitoring of Build and Prod servers)
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/2.Face-Mask-Detection/Training Model.png`,
              `${BASE_PATH}/2.Face-Mask-Detection/With Mask Dataset.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Build and Deployment Automation</TypographyH3>

          <p className="font-mono mb-2">
          Jenkins is configured for a CI/CD pipeline:
            Jenkins Master Node is responsible for pipeline orchestration.
            Build Server is configured as a Jenkins Slave Node to handle application builds and Docker image creation.
            Ansible is used for automating deployment to the Prod server, where the application is deployed using an Ansible client-server model.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/2.Face-Mask-Detection/Without Mask Dataset.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Continuous Monitoring </TypographyH3>
          <p className="font-mono mb-2">
          Prometheus and Grafana are used for real-time monitoring:
            Node Exporter is installed on both Build and Prod servers to collect server metrics (CPU, Disk Space, Memory Utilization).
            Grafana Dashboard is created to visualize these metrics for continuous monitoring.
          </p>
          <SlideShow images={[
                `${BASE_PATH}/2.Face-Mask-Detection/Mask.png`,
            ]} />
        </div>
      );
    },
  },
  { // 03. Portfolio project
    id: "portfolio",
    category: "Web Development",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/3.myportfolio/landing.png",
    screenshots: ["landing.png", "navbar.png", "projects.png", "project.png", "blog.png"],
    live: "https://www.vishwajeetlondhe.me/",
    github:"https://github.com/Vishwajeet-Londhe/3D-interactive-portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/3.myportfolio/landing.png`,
              `${BASE_PATH}/3.myportfolio/navbar.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`${BASE_PATH}/3.myportfolio/blog.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/3.myportfolio/projects.png`,
              `${BASE_PATH}/3.myportfolio/project.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
  { // 04. AI Chatbot project
    id: "rag-chatbot",
    category: "AI",
    title: "RAG Based ChatBot",
    src: "/assets/projects-screenshots/4.RAG-CHATBOT/Home.png",
    screenshots: ["Home.png", "Detect Policy Contradictions.png", "Extra Features.png", "Ingesting Document.png", "Rag Working.png", "Relevance Score.png"],
    live: "https://github.com/Abhiz2411/smart-parking-assistant",
    github:"https://github.com/Vishwajeet-Londhe/potens-intern-AI-ML-vishwajeet-londhe",
    skills: {
      frontend: [PROJECT_SKILLS.python],
      backend: [PROJECT_SKILLS.cplusplus, PROJECT_SKILLS.arduino],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Transform parking with the Smart Parking Assistant, an IoT marvel powered by Arduino 
            and IR sensors to detect and recommend the best spots in real-time. Enjoy a sleek GUI 
            that visualizes availability and an intelligent system for quick, optimal decisions. 
            Built to adapt with customizable hardware and Python-powered software for seamless 
            integration. Say goodbye to parking woes and hello to smarter space utilization!
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/4.RAG-CHATBOT/Home.png`,
              `${BASE_PATH}/4.RAG-CHATBOT/Detect Policy Contradictions.png`,
              `${BASE_PATH}/4.RAG-CHATBOT/Extra Features.png`,
              `${BASE_PATH}/4.RAG-CHATBOT/Ingesting Document.png`,
              `${BASE_PATH}/4.RAG-CHATBOT/Rag Working.png`,
              `${BASE_PATH}/4.RAG-CHATBOT/Relevance Score.png`,
            ]}
          />
        </div>
      );
    },
  },
  { // 05. Internship Project - PrimeLDH-VictorReinz
    id: "primeldh-victorreanz",
    category: "Full stack",
    title: "PrimeLDH-VictorReinz",
    src: "/assets/projects-screenshots/5.PrimeLDH-VictorReanz/Home.png",
    screenshots: ["Home.png", "Filtering.png", "Layout.png", "Login.png", "Sorting.png"],
    live: "http://victorreinz.legacydatahub.com/",
    github:"",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.vite],
      backend: [PROJECT_SKILLS.firebase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Track your job applications effortlessly with a sleek, dark-themed app that lets you 
            manage, filter, and visualize your job search. Organize your applications with a 
            Kanban board, monitor progress through status updates, and store everything securely. 
            Enjoy seamless access across devices with a responsive design and email reminders for 
            interviews. A smarter, more intuitive way to stay on top of your job hunt!
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/5.PrimeLDH-VictorReanz/Home.png`,
              `${BASE_PATH}/5.PrimeLDH-VictorReanz/Filtering.png`,
              `${BASE_PATH}/5.PrimeLDH-VictorReanz/Layout.png`,
              `${BASE_PATH}/5.PrimeLDH-VictorReanz/Login.png`,
              `${BASE_PATH}/5.PrimeLDH-VictorReanz/Sorting.png`,
            ]}
          />
        </div>
      );
    },
  },
  { // 06. Land use and Land Cover Mapping using Random Forest Project
    id: "LULC",
    category: "Machine Learning",
    title: "Land Use and Land Cover Mapping",
    src: "/assets/projects-screenshots/6.LULC/Result Project.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"],
    live: "",
    github:"",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.vite],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Step into the digital world of Savinder Puri, the beloved DevOps guru and Spiritual 
            Alchemist, with this responsive portfolio website. 🌐✨ Explore his inspiring journey, 
            milestones, and life-changing services blending tech and spirituality. Built with 
            modern tools like React and TypeScript, it’s a heartfelt tribute to a mentor who 
            transforms lives. 💻🕊️ Crafted with ❤️ by Abhijit Zende! 🚀
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/6.LULC/1.png`,
              `${BASE_PATH}/6.LULC/2.png`,
              `${BASE_PATH}/6.LULC/3.png`,
              `${BASE_PATH}/6.LULC/4.png`,
              `${BASE_PATH}/6.LULC/5.png`,
              `${BASE_PATH}/6.LULC/6.png`,
            ]}
          />
        </div>
      );
    },
  },
];
export default projects;
