import Image from "next/image"

type ProjectStatus = "failed" | "in-progress" | "success";

interface Project {
  name: string;
  status: ProjectStatus;
  link?: string;
  info?: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// Project data
const projects: Project[] = [
  {
    name: "FoodeiInt",
    status: "failed",
    info: "I was trying to replicate alibaba but for the africa & diaspora food trade",
  },
  {
    name: "Hflix",
    status: "failed",
    info: "Its a streaming service sharing platform <br> Believe me when i say this webapp took me 6+ months to code and i did code everything on my phone",
    link: "https://hflixng.web.app//",
  },
  {
    name: "Payme",
    status: "in-progress",
    info: "I was trying to replicate india's upi in my country, i might go back to it though and i make a working demo",
    link: "https://pay-me-delta.vercel.app/",
  },
  {
    name: "UniTap",
    status: "success",
    info: "An Nfc attendance system i am making it cause i basically hate the present way my uni does it and it would challenge me into hardware",
    link: "https://docs.google.com/document/d/13zSSsfOk7NyUKqum9CsC6rJLzZ9VUxtOhpgwLPcyvYM/edit?usp=sharing",
  },
  {
    name: "StudySync",
    status: "success",
    info: "Just a cool simple school schedleing app",
    link: "https://studysync.vercel.app/",
  },
  {
    name: "Poki",
    status: "failed",
    info: "Here i was also trying to replicate MEESHO from india",
    link: "https://poki-seven.vercel.app/",
  },
  {
    name: "Zuum",
    status: "failed",
    info: "Here I was trying to replicate Zepto (the attention they had got into me, so I wanted to replicate it) <br> Lesson: this did push me to my limit because I for once went out there knocking on people's houses, sharing flyers about my 10min grocery delivery startup. I did get one customer that never ordered and my parents were surprised and happy because I put myself out there. This might probably be the best in retrospect just because it made me uncomfortable <br> Why I stopped: realized this wasn't going to be easier than I thought, it wasn't a problem I had. Nigerian e-commerce space is different because Nigerians barely have enough to spend. Can you believe we spend 80% of our income on food? It was more of a want than a need and it was ironically mine",
  },
  {
    name: "FastAI",
    status: "failed",
    info: "AI-powered image translation webapp, i launched on producthunt 2x, man this was good, cause i got feedbacks ( and it was either a figma plugin or one tailored to app developers ) i built it to test out the concept ",
    link: "https://fastai.framer.website/",
  },
  {
    name: "Soundchat",
    status: "failed",
    info: "a messaging platform that u can respond with short funny meme audios, this is the standard wannabe zuck path that i also followed also <br> built it on my phone in <3 weeks for buildspace ",
    link: "https://youtu.be/ecc-zggffOM?si=KTKV3v5dOdy7xpiw",
  },
  {
    name: "BetBBN",
    status: "success",
    info: "So I spawned this up in about 3 days <br> Tons of people in my country watch a very popular reality show, and I was like why not allow them to bet on it (yes, I did this without a license, but honestly I didn't care, because I was like even if this ever becomes big, I would fix the issues in the future) <br> And I made my first online money because of this (₦50 = $0.031). I was so freaking happy",
    link: "https://bet-bbn.vercel.app/",
  },
  {
    name: "VerseSearcher",
    status: "failed",
    info: "a webapp to search for any music lyrics i did this cause of a friend, yh nothing special ",
    link: "https://versesearch.vercel.app/",
  },
];

// Social links data
const socialLinks: SocialLink[] = [
  {
    name: "Twitter",
    url: "https://x.com/LivingstoneAre",
    icon: "/twitter.svg",
  },
  {
    name: "GitHub",
    url: "https://github.com/STONESCODE001",
    icon: "/github.svg",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "/linkedin.svg",
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/@LivingstoneAre",
    icon: "/youtube.svg",
  },
];

// Status colors mapping
const statusColors: Record<ProjectStatus, string> = {
  failed: "bg-rose-600",
  "in-progress": "bg-amber-400",
  success: "bg-green-700",
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-start min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-start">
        {/* Header Section */}
        <div className="flex gap-4 items-start sm:flex-row">
         <Image
            className="rounded-sm"
            src="/pp.png"
            alt="my profile picture"
            width={60}
            height={60}
            priority
          />
          <div>
            <h4 className="text-xl font-bold tracking-tight text-balance text-gray-900">
              Livingstone Are
            </h4>
            <p className="text-md font-normal tracking-tight text-balance text-gray-900">
              I am basically building what i love
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-0">
          <h4 className="text-md font-bold tracking-tight text-balance text-gray-900">
            About Me
          </h4>
          <p className="text-md font-normal tracking-tight text-balance text-gray-900">
            19 Year Old Nigerian 200 lvl Computer Engineering Student
          </p>
        </div>

        {/* Projects Section */}
        <div>
          <h4 className="text-md font-bold tracking-tight text-balance text-gray-900">
            Projects Stats
          </h4>
          <p className="text-md font-normal tracking-tight text-balance text-gray-900">
            <span className="text-lg font-bold">11</span> Software Projects{" "}
            <span className="text-lg font-bold">1</span> Hardware Project
          </p>
          <ol className="list-inside ml-4 mt-2 text-sm/6 text-start sm:text-left font-[family-name:var(--font-geist-mono)]">
            {projects.map((project, index) => (
              <>
                <li key={index} className=" tracking-[-.01em] font-semibold">
                  {project.link ? (
                    <a
                      className="items-center hover:underline hover:text-blue-700 hover:underline-offset-4"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.name}
                    </a>
                  ) : (
                    project.name
                  )}{" "}
                  <code
                    className={`${
                      statusColors[project.status]
                    } text-white px-1 py-0 rounded font-[family-name:var(--font-geist-mono)] font-bold`}
                  >
                    -
                  </code>
                </li>
                <div className=" font-light mt-0 pt-0 mb-2 p-5">
                  <p dangerouslySetInnerHTML={{ __html: project.info || '' }} />
                </div>
              </>
            ))}
          </ol>
        </div>

        {/* Essays Section */}
        <div>
          <h4 className="text-md font-bold tracking-tight text-balance text-gray-900">
            Essays / Write-ups
          </h4>
          <p className="text-md font-normal tracking-tight text-balance text-gray-900">
            Coming Soon.... ( but you can check out my youtube )
          </p>
        </div>

        {/* A little about me */}
        <div>
          <h4 className="text-md font-bold tracking-tight text-balance text-gray-900">
            A bit of context about me
          </h4>
          <p className="text-md font-normal tracking-tight text-balance text-gray-900">
            I got into uni 2 months after i clocked 16 and i left 17 ( i was studying software engineering ) why you may ask, well up to that point my dad was doing all the thinking for me yes i picked my dream course tht i had in mind since i was like like 9/10 <br /> so what did i do, i tried everything but looking back now i was just so focused on making money alone, but nevertheless it drove me forward, cause i had to test out tons of my ideas out and i did learn coding form scratch all with my phone ( an itel A56 pro ) <br /> <strong> ps: i did miss tons of details and i mean a lot but yh hopefully his gives you a positive glimpise into me ( thats on you though )</strong>
          </p>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <h4 className="text-md font-bold tracking-tight text-balance text-gray-900">
          Socials
        </h4>
        {socialLinks.map((social, index) => (
          <a
            key={index}
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src={social.icon}
              alt={`${social.name} icon`}
              width={16}
              height={16}
            />
            {social.name}
          </a>
        ))}
      </footer>
    </div>
  );
}
