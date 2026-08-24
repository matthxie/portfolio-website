import FadeInOnScroll from "app/components/FadeInOnScroll";
import FlipCard from "app/components/FlipCard";
import ExperienceCard from "./components/ExperienceCard";
import SocialIcons from "./components/SocialIcons";
import SidePanel from "./components/SidePanel";
import ProjectCard from "./components/ProjectCard";


const projects = [
  {
    title: "Loregraph",
    description: "Local-first bi-temporal knowledge graph engine that retains superseded facts with \
                  validity windows for point-in-time queries. Replaced per-hop LLM graph traversal with \
                  personalized PageRank diffusion over a temporally-filtered subgraph, cutting query cost \
                  to $0.001-0.005. Scores 86% on LongMemEval-S and ships as an MCP server for Claude Code, \
                  with embedding and extraction (BGE-small, GLiNER, YAKE) running fully on-device.",
    stack: ["Python", "PyTorch", "Electron", "SQLite", "MCP"],
    githubLink: "https://github.com/yourproject",
  },
  {
    title: "DQN Tetris Bot",
    description: "Developed a DQN agent to play tetris on a custom-built classic Tetris environment.",
    stack: ["PyTorch", "Python"],
    githubLink: "https://github.com/yourproject",
  },
  {
    title: "AI Customer Service Call Center",
    description: "Used ChatGPT and AWS to automatically handle customer queries. Capable of storing \
                  user information and interaction history to provide a smooth conversational experience.",
    stack: ["AWS", "OpenAI", "Python", "Twilio"],
    githubLink: "https://github.com/yourproject"
  },
  {
    title: "Hyperspectral Satellite Image Denoising",
    description: "Co-developed a novel 3D diffusion model to denoise hyperspectral satellite images.",
    stack: ["Diffusion", "CNN", "Pytorch", "Python"],
    githubLink: "https://github.com/yourproject"
  },
];


const experiences = [
  {
    date: "Nov 2025 - Present",
    title: "Founding Machine Learning Engineer",
    company: "Uma",
    description: "Architected an AWS data lake on Apache Iceberg, Athena, and Kinesis Firehose to ingest \
                  and query per-frame CV telemetry across a 19-machine fleet at 5.4M frames/week. Designed \
                  a self-correcting MLOps pipeline that runs weekly diagnostics via embedding drift detection, \
                  confidence monitoring, and label mismatch analysis, classifies root cause, and triggers \
                  targeted finetuning on RunPod Serverless with automated backtesting and rollback. Built the \
                  entire production CV stack for real-time retail product tracking, spanning detection, edge \
                  inference, and a zero-shot auto-labeling pipeline (MediaPipe, YOLO-World, SAM2.1, Kalman \
                  filtering, BoT-SORT) at 95%+ box accuracy and a 7 hour train-to-production cycle.",
    stack: ["AWS", "PyTorch", "Iceberg", "YOLO", "SAM2", "Docker"],
    githubLink: "https://github.com/yourproject"
  },
  {
    date: "May 2025 - Oct 2025",
    title: "Machine Learning Engineer Intern",
    company: "Themis AI",
    description: "Built end-to-end active learning pipelines in PyTorch that reached 90% of baseline accuracy \
                  using 5% of the original training data through uncertainty-based sampling. Enhanced \
                  feature-space sampling by replacing PCA+clustering with ResNet-18 embeddings for 2.5x greater \
                  accuracy improvement over the random baseline. Implemented custom training loops, data loaders, \
                  and automated retraining cycles.",
    stack: ["PyTorch", "Python", "ResNet"],
    githubLink: "https://github.com/yourproject"
  },
  {
    date: "Jan 2025 - Apr 2025",
    title: "Machine Vision Engineer Intern",
    company: "Zebra Technologies",
    description: "Deployed C++ CNN applications for real-time object sorting, OCR, and anomaly detection on \
                  IoT hardware. Rewrote the C++ codebase with scheduling and parallel operations for a 6x \
                  speedup to real-time image processing. Implemented 2D and 3D computer vision algorithms such \
                  as convolutional edge finding and point cloud merging.",
    stack: ["C++", "CNN", "OpenCV"],
    githubLink: "https://github.com/yourproject"
  },
  {
    date: "Jun 2024 - May 2025",
    title: "Undergrad Research",
    company: "University of Toronto",
    description: "Researched prompting and agentic methods for LLMs to solve dynamic reasoning problems by \
                  formulating Markov Decision Processes and generating code solutions. Designed a \
                  chain-of-thought pipeline with LangChain that improved MDP formulation accuracy by 60%, and \
                  constructed RAG pipelines with LlamaIndex to extract 5000 datapoints from PDF textbooks; \
                  contributed to evaluation and prompt engineering for an agentic pipeline across GPT-4o, \
                  DeepSeek-R1, and Llama 3.3-70B.",
    stack: ["LLM", "LangChain", "LlamaIndex", "Python"],
    githubLink: "https://github.com/yourproject"
  },
  {
    date: "May 2024 - Jan 2025",
    title: "Machine Learning Research Intern",
    company: "Pardee Lab",
    description: "ICLR 2025: Co-author on two accepted workshop papers on quantizing \
                  Protein Language Models (PLMs) and novel peptide generation from scarce data. \
                  Fine-tuned ProteinBERT, ESM-2, ProstT5, and ProLLaMA to predict protein function, \
                  structure, and stability. Researched quantization techniques for LLMs, leveraging \
                  LoRA and QLoRA fine-tuning to achieve 7:1 model compression while preserving 90% of \
                  validation accuracy. Developed flexible PyTorch pipeline for training HuggingFace \
                  models across generative and classification tasks. Built benchmark tool to search \
                  hyperparameters and visualize metrics, aiding performance evaluations",
    stack: ["PyTorch", "Python", "Transformers", "LoRA", "QLoRA"
    ],
    githubLink: "https://github.com/yourproject",
  },
  {
    date: "Jan 2023 - Apr 2023",
    title: "Software Developer Intern",
    company: "Fundserv",
    description: "Developed Angular website in TypeScript to facilitate client access to Azure \
                  backend through microservice APIs. Created novel accessibility testing tool for \
                  Angular and integrated it with existing CI/CD pipeline. Conducted comprehensive \
                  unit tests on existing codebase using Jasmine and Karma.",
    stack: ["Angular", "TypeScript", "Java"],
    githubLink: "https://github.com/yourproject"
  },
];


const publications = [
  {
    date: "April 2025",
    title: "Assessing Quantization and Efficient Fine-Tuning for Protein Language Models",
    company: "ICLR 2025 Workshop",
    description: "OpenReview: https://openreview.net/forum?id=KBMxaCSwpB",
    stack: [],
    githubLink: ""
  },
  {
    date: "April 2025",
    title: "From Minimal Data To Maximal Insight: A Machine Learning Guided Platform For \
            Peptide Discovery",
    company: "ICLR 2025 Workshop",
    description: "OpenReview: https://openreview.net/forum?id=sfTXIiu7Op",
    stack: [],
    githubLink: ""
  },
  {
    date: "August 2024",
    title: "Beyond the Visible: Jointly Attending to Spectral and Spatial Dimensions with \
            HSI-Diffusion for the FINCH Spacecraft",
    company: "38th Annual Small Satellite Conference",
    description: "DOI: 10.48550/arXiv.2406.10724",
    stack: [],
    githubLink: ""
  },
]


export default function Page() {
  return (
      <section>
        <section id="about" className="h-screen w-full flex items-center px-12">
          <div className="max-w-4xl">
            <p className="mb-4">
              {`Hi, I'm`}
            </p>
            <h1 className="mb-8 text-7xl font-semibold tracking-tighter">
              Matthew Xie.
            </h1>
            <p className="mb-4">
              {`I'm an undergraduate student at the University of Toronto. I'm specializing in Statistics
              with focus in Machine Learning and minoring in Computer Science.`}
            </p>

            <div className="flex items-center gap-6">
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
              >
                <span>View Resume</span>
                <svg className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <SocialIcons />
            </div>
          </div>
        </section>

        <div className="flex min-h-screen">
          {/* Left Panel */}
          <SidePanel />

          {/* Right Content */}
          <main className="w-2/3 pt-32 px-12 py-20">
            <section id="experience" className="min-h-[1700px] w-full px-12 pb-20">
              <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
                Experience
              </h1>
              <FadeInOnScroll>
              <div className="max-w-6xl mx-auto">
                <div className="space-y-6">
                  {experiences.map((proj, idx) => (
                    <ExperienceCard key={idx} {...proj} />
                  ))}
                </div>
              </div> 
              </FadeInOnScroll>
            </section>


            <section id="projects" className="min-h-[670px] w-full px-12 py-20">
              <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
                Projects
              </h1>
              <FadeInOnScroll>
              <div className="max-w-6xl mx-auto">
                <div className="space-y-6">
                  {projects.map((proj, idx) => (
                    <ProjectCard key={idx} {...proj} />
                  ))}
                </div>
              </div> 
              </FadeInOnScroll>
            </section>


            <section id="publications" className="min-h-[700px] w-full px-12 py-20">
              <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
                Publications
              </h1>
              <FadeInOnScroll>
              <div className="max-w-6xl mx-auto">
                <div className="space-y-6">
                  {publications.map((proj, idx) => (
                    <ExperienceCard key={idx} {...proj} />
                  ))}
                </div>
              </div> 
              </FadeInOnScroll>
            </section>

          </main>
        </div>
    </section>
  )
}
