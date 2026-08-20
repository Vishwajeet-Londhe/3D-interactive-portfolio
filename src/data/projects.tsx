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
  { // 01. AI Docker file optimizer project
    id: "aidockerfileoptimizer",
    category: "AI/ML + Web Development",
    title: "AI Dockerfile Optimizer",
    src: "/assets/projects-screenshots/aidockerfileoptimizer/2.png",
    screenshots: ["1.png", "2.png", "3.png"],
    live: "https://ai-docker-file-optimizer.netlify.app/",
    github:"https://github.com/Abhiz2411/AI-Docker-file-optimizer",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.vite],
      backend: [PROJECT_SKILLS.openai,PROJECT_SKILLS.netlify],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            AI-Docker-file-optimizer helps optimize Dockerfiles for smaller, more efficient images. 
            Simply paste your Dockerfile, and the app analyzes it for best practices and size 
            optimization tips. It then provides a refactored, optimized version of the Dockerfile. 
            Deployed on Vercel, it ensures fast and easy access to Dockerfile optimization.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/aidockerfileoptimizer/1.png`,
              `${BASE_PATH}/aidockerfileoptimizer/2.png`,
              `${BASE_PATH}/aidockerfileoptimizer/3.png`,
            ]}
          />
        </div>
      );
    },
  },
  { // 02. FinanceMe project
    id: "financeme",
    category: "Machine Learning",
    title: "FinanceMe: Complete DevOps Capstone Project",
    src: "/assets/projects-screenshots/financeme/1.png",
    screenshots: ["/assets/projects-screenshots/financeme/1.png"],
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
    github: "https://github.com/Abhiz2411/FinanceMe-Devops-Project-01",
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
              `${BASE_PATH}/financeme/1.png`,
              `${BASE_PATH}/financeme/2.png`,
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
              `${BASE_PATH}/financeme/4_A.png`,
              `${BASE_PATH}/financeme/4.png`,
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
              `${BASE_PATH}/financeme/5.png`,
              `${BASE_PATH}/financeme/6.png`,
              `${BASE_PATH}/financeme/7.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Continuous Monitoring </TypographyH3>
          <p className="font-mono mb-2">
          Prometheus and Grafana are used for real-time monitoring:
            Node Exporter is installed on both Build and Prod servers to collect server metrics (CPU, Disk Space, Memory Utilization).
            Grafana Dashboard is created to visualize these metrics for continuous monitoring.
          </p>
          <SlideShow images={[
                `${BASE_PATH}/financeme/3.png`,
                `${BASE_PATH}/financeme/8.png`,
                `${BASE_PATH}/financeme/9.png`,
                `${BASE_PATH}/financeme/10.png`,
            ]} />
        </div>
      );
    },
  },
  { // 03. Portfolio project
    id: "portfolio",
    category: "Web Development",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/myportfolio/landing.png",
    screenshots: ["assets/projects-screenshots/myportfolio/landing.png"],
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
              `${BASE_PATH}/myportfolio/landing.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`${BASE_PATH}/myportfolio/navbar.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/myportfolio/projects.png`,
              `${BASE_PATH}/myportfolio/project.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
  { // 04. Smart parking assitant
    id: "smartparkingassitant",
    category: "AI",
    title: "Smart Parking Assistant",
    src: "/assets/projects-screenshots/smartparkingassitant/01.jpeg",
    screenshots: ["01.jpeg", "03.png"],
    live: "https://github.com/Abhiz2411/smart-parking-assistant",
    github:"https://github.com/Abhiz2411/smart-parking-assistant",
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
              `${BASE_PATH}/smartparkingassitant/01.jpeg`,
              `${BASE_PATH}/smartparkingassitant/03.png`,
              `${BASE_PATH}/smartparkingassitant/04.jpg`,
            ]}
          />
        </div>
      );
    },
  },
  { // 05. Smart Job Tracker project
    id: "smartjobtracker",
    category: "Full stack",
    title: "Smart Job Tracker",
    src: "/assets/projects-screenshots/smartjobtracker/02.png",
    screenshots: ["01.png", "02.png", "03.png","04.png","05.png","06.png","07.png"],
    live: "https://job-tracker-application-eight.vercel.app/",
    github:"https://github.com/Abhiz2411/Job-tracker-application",
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
              `${BASE_PATH}/smartjobtracker/01.png`,
              `${BASE_PATH}/smartjobtracker/02.png`,
              `${BASE_PATH}/smartjobtracker/03.png`,
              `${BASE_PATH}/smartjobtracker/04.png`,
              `${BASE_PATH}/smartjobtracker/05.png`,
              `${BASE_PATH}/smartjobtracker/06.png`,
              `${BASE_PATH}/smartjobtracker/07.png`,
            ]}
          />
        </div>
      );
    },
  },
  { // 06. Savinder Puri portfolio project
    id: "savinderpurisportfolio",
    category: "Machine Learning",
    title: "Savinder Puri Portfolio",
    src: "/assets/projects-screenshots/savinderpuriportfolio/01.png",
    screenshots: ["01.png", "02.png", "03.png","04.png","05.png"],
    live: "https://savinder-puri.vercel.app/",
    github:"https://github.com/Abhiz2411/savinder-puri",
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
              `${BASE_PATH}/savinderpuriportfolio/01.png`,
              `${BASE_PATH}/savinderpuriportfolio/02.png`,
              `${BASE_PATH}/savinderpuriportfolio/03.png`,
              `${BASE_PATH}/savinderpuriportfolio/04.png`,
              `${BASE_PATH}/savinderpuriportfolio/05.png`,
            ]}
          />
        </div>
      );
    },
  },
];
export default projects;
