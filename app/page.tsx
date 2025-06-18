import FadeInOnScroll from "app/components/FadeInOnScroll";
import FlipCard from "app/components/FlipCard";
import ExperienceCard from "./components/ExperienceCard";


const projects = [
  {
    title: "DQN Tetris Bot",
    description: "Developed a DQN agent to play tetris on a custom-built classic Tetris environment",
    stack: ["PyTorch", "Python"],
    githubLink: "https://github.com/yourproject",
  },
  {
    title: "AI Customer Service Center",
    description: "Used ChatGPT and AWS to automatically handle customer queries.",
    stack: ["AWS", "OpenAI", "Python", "Twilio"],
    githubLink: "https://github.com/yourproject"
  },
  {
    title: "",
    description: "Used Twilio, AWS, and ChatGPT to automatically handle customer queries.",
    stack: ["AWS", "OpenAI", "Python", "Twilio"],
    githubLink: "https://github.com/yourproject"
  },
];


const experiences = [
  {
    date: "May 2025 - Present",
    title: "Machine Learning Intern Team Lead | Themis AI",
    description: "Leading a team of 10 interns to develop optimal data labeling algorithms. \
                  Using Capsa to make uncertainty-aware improvements to model training speed. \
                  Also overseeing extension of existing open-source data labeling platforms.",
    stack: ["PyTorch", "Python"],
    githubLink: "https://github.com/yourproject"
  },
  {
    date: "Jan - Apr 2025",
    title: "Machine Vision Engineer Intern | Zebra Technologies",
    description: "Developed C++ and C# applications for automated quality inspection, \
                  OCR, and object classification. Trained and deployed CNN models on IoT hardware. \
                  Applying computer vision, 2D and 3D image processing algorithms.",
    stack: ["C++", "C#", "CNN"],
    githubLink: "https://github.com/yourproject"
  },
  {
    date: "May 2024 - Jan 2025",
    title: "Machine Learning Research Intern | Pardee Lab",
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
    title: "Software Developer Intern | Fundserv",
    description: "Developed Angular website in TypeScript to facilitate client access to Azure \
                  backend through microservice APIs. Created novel accessibility testing tool for \
                  Angular and integrated it with existing CI/CD pipeline. Conducted comprehensive \
                  unit tests on existing codebase using Jasmine and Karma. Developed Angular \
                  website in TypeScript to facilitate client access to Azure backend through \
                  microservice APIs. Created novel accessibility testing tool for Angular and \
                  integrated it with existing CI/CD pipeline. Conducted comprehensive unit tests \
                  on existing codebase using Jasmine and Karma",
    stack: ["Angular", "TypeScript", "Java"],
    githubLink: "https://github.com/yourproject"
  },
];


export default function Page() {
  return (
      <section>
        <section className="h-screen w-full flex items-center px-12">
          <div className="max-w-4xl">
            <h1 className="mb-8 text-5xl font-semibold tracking-tighter">
              Hi! I'm Matthew
            </h1>
            <p className="mb-4">
              {`I'm an undergraduate student at the University of Toronto. I'm specializing in Statistics
              with focus in Machine Learning and minoring in Computer Science.`}
            </p>
          </div>
        </section>

        
        <section className="h-[500px] w-full flex px-12">
          <div className="max-w-3xl max-w-4xl">
            <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
              About Me
            </h1>
            <FadeInOnScroll>
            <p className="mb-4">
              {`I have an interest in deep learning and AI research and building products that
              leverage these technologies. I have research experience quantizing Protein Language Models (PLMs)
              built using Transformer architectures with LoRA and QLoRA. I'm also assisting with exploring novel
              prompting and agentic techniques that allow LLMs to solve more complex MDP reasoning problems.`}
            </p>
            </FadeInOnScroll>
          </div>
        </section>


        <section className="h-[950px] w-full px-12 py-20">
          <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
            What I'm Doing
          </h1>
          <FadeInOnScroll>
          <div className="max-w-6xl mx-auto">
            <div>
              {experiences.map((proj, idx) => (
                <ExperienceCard key={idx} {...proj} />
              ))}
            </div>
          </div> 
          </FadeInOnScroll>
        </section>


        <section className="h-[600px] w-full px-12 py-20">
          <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
            My Projects
          </h1>
          <FadeInOnScroll>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((proj, idx) => (
                <FlipCard key={idx} {...proj} />
              ))}
            </div>
          </div> 
          </FadeInOnScroll>
        </section>
        
    </section>
  )
}
