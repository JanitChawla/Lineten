export const FULL_NAME = "Janit Chawla";
export const RESUME_LINK = "https://janitchawla.github.io/JanitResume.pdf";
export const FOOTER_TEXT = " ";
export const SOCIAL_LINKS = [
    {
        name: "Email",
        icon: "far fa-lg fa-envelope",
        link: "mailto:janitchawla31@gmail.com",
    },
    {
        name: "Github",
        icon: "fab fa-lg fa-github",
        link: "https://github.com/janitchawla",
    },
    {
        name: "Linkedin",
        icon: "fab fa-lg fa-linkedin-in",
        link: "https://www.linkedin.com/in/janit-chawla-478457191",
    },
    {
        name: "Twitter",
        icon: "fab fa-lg fa-twitter",
        link: "https://x.com/janitchawla",
    },
    {
        name: "Instagram",
        icon: "fab fa-lg fa-instagram",
        link: "https://www.instagram.com/chawlajanit/",
    },
    {
        name: "Medium blog",
        icon: "lni lni-medium",
        link: "https://medium.com/@chawlajanit"
    }
];

export const SKILLS = [
    {
        name: "Docker",
        icon: "devicon-docker-plain colored",
    },
    {
        name: "Kubernetes",
        icon: "devicon-kubernetes-plain colored"
    },
    {
        name: "Jenkins  CI/CD",
        icon: "devicon-jenkins-plain colored",
    },
    {
        name: "Ansible",
        icon: "devicon-ansible-plain colored"
    },
    {
        name: "AWS",
        icon: "devicon-amazonwebservices-original colored"
    },
    {
        name: "Git",
        icon: "devicon-git-plain colored",
    },
    {
        name: "Bash",
        icon: "devicon-bash-plain colored",
    },
    {
        name: "Linux",
        svg: "https://user-images.githubusercontent.com/48391286/116357092-b63c8380-a819-11eb-8975-30668aa7d647.png",
    },
    {
        name: "Javascript",
        icon: "devicon-javascript-plain colored",
    },
    {
        name: "Reactjs",
        icon: "devicon-react-original colored",
    },
    {
        name: "C/C++",
        icon: "devicon-c-plain colored",
    },
    {
        name: "Java",
        icon: "devicon-java-plain colored",
    },
    {
        name: "Node",
        icon: "devicon-nodejs-plain colored",
    },
    {
        name: "MongoDB",
        icon: "devicon-mongodb-plain colored",
    },
];

export const ABOUT = [
    {
        index: "1",
        text: "I'm a 22 year-old Engineer currently Working as a DevOps Engineer",
    },
    {
        index: "2",
        text: "I enjoy solving problems, writing and building products. I'm also passionate about communities and open-source.",
    },
    {
        index: "3",
        text: "I like to peek under the hood, tinker with technologies and learn new skills.",
    },
    {
        index: "4",
        text: "Having Experience of Frontend-Developer and a DevOps Engineer"
    },
    // {
    //     index: "5",
    //     text: "Developer to DevOps Engineer"
    // }
];

export const WORK = [
    {
        title: "Node.js CI/CD with Load Balancer",
        description: "Created jenkins pipeline that does the following: Checkout nodejs code from github -> Build the code and pushes the artifact to nexus -> fetches the artifact and pushes it to VM’s through ansible and unzip the artifact -> Start the nodejs server on 2 Vm’s using ansible. Pipeline gives the option to update the version of code from v1 to v2. Tried to achieve near 0 downtime while updating the application: used rolling update Implemented a loadbalancer and health checks",
        description2: "Jenkins, Nexus, Node, Systemd, Loadbalancer, Ansible ",
        ghlink: "https://github.com/JanitChawla/Node-ansible",
        // extlink: "https://ywalia01.github.io/dune-api-frontend/",
    },
    {
        title: "CI/CD for kubernetes deployment",
        description:
            "Running Jenkins in a kubernetes cluster. Created a jenkins pipeline for building docker image and pushing to docker hub -> Pulling the image and deploying it on a kubernetes cluster using yaml files. Also implemented webhooks in it so as whenever there is a push to github repo, pipeline should automatically get triggered. This helped me learn about kubernetes authentication with service accounts, config file and tokens",
        description2: "Jenkins, Kubernetes, Webhooks",
        ghlink: "https://github.com/JanitChawla/Jenkins",
        // extlink: "https://the-dune-api.herokuapp.com/quotes/1",
    },
    {
        title: "Containerized Application",
        description:
            "Containerized notejam application using docker and kubernetes. Created Docker file for the django project and connected it with postgres container Docker image: https://hub.docker.com/r/janit31/notejam-webapp",
        description2: "Docker",
        ghlink: "https://github.com/JanitChawla/Notejam-Containerzed",
        // extlink: "https://www.npmjs.com/package/random-dune-quotes",
    },
    {
        title: "Kubernetes Deployment",
        description: "Created a docker images for a fullstack application. Using kubernetes deployed application, created deployments, service, ingress, persistent volume, pvc, secrets, config-map",
        description2: "Docker, Kubernetes",
        ghlink: "https://github.com/JanitChawla/Notejam-Containerzed/tree/main/notejam/k8",
        // extlink: "https://ywalia01.netlify.app/",
    },
    {
        title: "Umbrella Helm",
        description: "Created Umbrella Helm chart for the app deployment",
        description2: "Helm, Kubernetes",
        ghlink: "https://github.com/JanitChawla/Helm",
        // extlink: "https://artist-pfolio.netlify.app/",
    },
];

export const Front = [
    {
        title: "Crowd Funding using Blockchain",
        description: " A Crowdfunding webApp by which a user can create a campaign to raise funds using blockchain. User should have a metamask wallet and have sepolia test eth.",
        description2: "Reactjs, Solidity, Tailwindcss, Thirdweb",
        // ghlink: "https://github.com/ywalia01/artist-portfolio",
        extlink: "https://crowdfunding-sepolia.netlify.app/",
    },
    {
        title: "Enactus ADGITM website",
        description: " A website for  my college society. I headed the team for building this website. ",
        description2: "Reactjs, React-Bootstrap, JavaScript",
        // ghlink: "https://github.com/ywalia01/artist-portfolio",
        extlink: "https://enactusadgitm.in/"
    },
    {
        title: "Design Development Days",
        description: " A website for an event for UI/UX designers.",
        description2: "Reactjs, Tailwindcss",
        // ghlink: "https://github.com/ywalia01/artist-portfolio",
        extlink: "https://design-dexignare.netlify.app/",
    },
    {
        title: "Burger Builder",
        description: " Burger Builder app in which a user can register and make a burger and Order.",
        description2: "Reactjs, Redux, Google firebase",
        // ghlink: "https://github.com/ywalia01/artist-portfolio",
        extlink: "https://burger-builder-ff5ba.firebaseapp.com/"
    },
];