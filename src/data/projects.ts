
export type Project = {
  number: string;
  slug: string;
  name: string;
  category: string;
  featured: boolean;
  image: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  serverGithubUrl?: string;
  overview: string;
  features: string[];
  challenges: string[];
  engineeringFocus: string[];
  futurePlans: string[];
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "neighbourly",
    name: "Neighbourly",
    category: "FULL-STACK WEB APPLICATION",
    featured: true,
    image: "/images/projects/neighbourly.png",

    description:
      "A community-driven platform where people can create, discover, join, and manage social development events in their local areas.",

    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "JWT",
      "DaisyUI",
      "React Hot Toast",
      "REST API",
    ],

    liveUrl: "https://neighbourly-client.vercel.app/",

    githubUrl:
      "https://github.com/mdrakibulislammasud/B14_A_08_Client",

    serverGithubUrl:
      "https://github.com/mdrakibulislammasud/B14_A_08_Server",

    overview:
      "Neighbourly is a community events platform designed to help people take part in local social development activities. Users can discover events, create and manage their own events, and join activities in their communities.",

    features: [
      "User authentication and session handling",
      "Create, update, and delete community events",
      "Discover available local events",
      "Join and leave events",
      "View events joined by the current user",
      "Protected API endpoints with token verification",
    ],

    challenges: [
      "Keeping authentication reliable when the Next.js client and Express API are deployed on separate domains, including configuring secure cross-site session cookies.",
      "Protecting event-management endpoints so only authenticated users can perform permitted actions.",
      "Keeping event participation state consistent across joining, leaving, and viewing a user's joined events.",
    ],

    engineeringFocus: [
      "Connecting a separately deployed Next.js client with an Express API",
      "Implementing authenticated and protected server endpoints with token verification",
      "Managing event creation and participation workflows with MongoDB",
    ],

    futurePlans: [
      "Add event search, filters, and categories",
      "Introduce event reminders and participation updates",
      "Build organizer dashboards and event analytics",
      "Improve location-based event discovery",
    ],
  },

  {
    number: "02",
    slug: "fitlog",
    name: "FitLog",
    category: "FITNESS & WORKOUT PLANNER",
    featured: false,
    image: "/images/projects/fitlog.png",

    description:
      "A responsive workout library and daily planner for exploring exercises, viewing workout details, organizing a five-workout daily plan, and saving exercises for later.",

    technologies: [
      "Next.js App Router",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "Context API",
      "Lucide React",
      "localStorage",
    ],

    liveUrl: "https://fitlog-diligent3.vercel.app/",

    githubUrl:
      "https://github.com/mdrakibulislammasud/FitLog",

    overview:
      "FitLog is a dark, responsive workout library and daily workout planner. Users can browse twelve movements, inspect exercise instructions, build a daily plan with a five-workout limit, save exercises, and keep their choices between visits using localStorage.",

    features: [
      "Browse a responsive workout library populated through a REST API",
      "Open dedicated workout detail pages with specifications and instructions",
      "Build Today's Plan with a maximum of five workouts",
      "Save workouts for later and view live plan/saved counters",
      "Search workouts and sort by duration, calories, or rating",
      "Mark workouts as done and remove them from the plan",
      "Persist plan and saved selections in localStorage",
      "Show loading states, toast feedback, and a custom 404 page",
    ],

    challenges: [
      "Loading workout-library data asynchronously from a REST API and accounting for loading and error states.",
      "Managing plan and saved-workout state consistently across pages, while enforcing the five-workout limit.",
      "Persisting user selections with localStorage so the plan remains available after a page reload.",
    ],

    engineeringFocus: [
      "Using Next.js App Router and dynamic workout detail routes",
      "Managing shared plan and saved state with React Context API",
      "Combining API data, client-side search/sorting, and local persistence",
    ],

    futurePlans: [
      "Document additional application workflows and capabilities",
      "Explore workout progress tracking",
      "Consider personalized workout recommendations",
    ],
  },

  {
    number: "03",
    slug: "dev-stack-builder",
    name: "Dev Stack Builder",
    category: "INTERACTIVE REACT APPLICATION",
    featured: false,
    image: "/images/projects/devstack.png",

    description:
      "An interactive application that helps developers explore modern technologies and build their own personalized development stack.",

    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "CSS3",
      "React Hooks",
      "React-Toastify",
      "JSON",
    ],

    liveUrl: "https://b14-a05-dev-stack-psi.vercel.app/",

    githubUrl:
      "https://github.com/mdrakibulislammasud/B14-A05-DevStack",

    overview:
      "Dev Stack Builder is an interactive React application where developers can browse a technology collection and assemble a personal development stack.",

    features: [
      "Browse technology cards loaded from JSON data",
      "Add technologies to a personal stack",
      "Prevent duplicate technology selections",
      "Remove individual technologies or clear the stack",
      "Show selection counts and toast feedback",
      "Responsive navigation for smaller screens",
    ],

    challenges: [
      "Loading the technology catalogue from JSON data and presenting a clear loading state while it is retrieved.",
      "Keeping the selected stack in sync as technologies are added, removed, or cleared.",
      "Preventing duplicate selections and keeping the stack counter accurate after each interaction.",
    ],

    engineeringFocus: [
      "Organizing technology information as reusable JSON data",
      "Managing data, selection, and mobile-navigation state with React Hooks",
      "Handling duplicate selections, item removal, and toast feedback",
    ],

    futurePlans: [
      "Add technology search and category filters",
      "Allow users to save and share their selected stack",
      "Expand the technology library",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
