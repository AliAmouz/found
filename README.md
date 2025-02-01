# BugTrack (formerly Found)

![BugTrack Logo](path_to_logo_image)

## Table of Contents

- [Inspiration](#inspiration)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Challenges](#challenges)
- [Accomplishments](#accomplishments)
- [Lessons Learned](#lessons-learned)
- [Future Plans](#future-plans)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Inspiration

In today's digital landscape, cyberattacks are increasingly prevalent, posing significant threats to small and medium-sized enterprises (SMEs). Many SMEs struggle to secure their applications due to the prohibitive costs of existing solutions like HackerOne. To address this gap, we developed **BugTrack**, an open-source bug bounty platform designed to make cybersecurity accessible to all, regardless of budget constraints. Our mission is to empower companies to safeguard their digital assets while providing ethical hackers with a platform to showcase their skills and contribute to a safer internet.

## Features

### **For Companies**
- **Cost-Effective Bug Bounty Programs** – Easily create and manage bug bounty initiatives tailored to your organization's needs.
- **Vulnerability Management** – Efficiently track, prioritize, and address reported vulnerabilities.
- **Security Posture Enhancement** – Leverage community-driven insights to strengthen your application's security.

### **For Ethical Hackers**
- **Transparent Submission Process** – Submit identified vulnerabilities with clarity and receive timely feedback.
- **Reward System** – Earn recognition and rewards for valid submissions.
- **Community Engagement** – Collaborate with peers and contribute to a safer digital ecosystem.

## Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/) with [Tailwind CSS](https://tailwindcss.com/) for a responsive and intuitive user interface.
- **Backend:** [Express.js](https://expressjs.com/) with [MongoDB](https://www.mongodb.com/) for efficient data management.
- **Authentication:** [JSON Web Tokens (JWT)](https://jwt.io/) for secure user authentication.

## Challenges

- **Submodule Management:** Integrating the frontend and backend as submodules required careful handling to ensure seamless collaboration.
- **Authentication Implementation:** Balancing secure JWT-based authentication with a smooth user experience posed challenges.
- **Database Design:** Crafting a scalable schema to manage bug submissions, user roles, and rewards necessitated multiple iterations.
- **Time Constraints:** Balancing feature development within the hackathon timeline was a constant challenge.

## Accomplishments

- **Open-Source Platform:** Delivered a fully transparent solution that promotes collaboration.
- **User-Friendly Interface:** Developed an intuitive UI using Next.js and Tailwind CSS.
- **Scalable Backend:** Built a robust backend capable of efficiently handling multiple users and bug submissions.
- **Community Impact:** Created a platform with the potential to democratize cybersecurity for companies of all sizes.

## Lessons Learned

- **Technical Proficiency:** Enhanced our understanding of full-stack development, encompassing frontend, backend, and database management.
- **Problem-Solving:** Overcame challenges like submodule management and authentication, fostering growth as developers.
- **User-Centric Design:** Emphasized designing with empathy, considering the needs of both companies and ethical hackers.

## Future Plans

1. **Finalize and Refine Features** – Enhance the GUI and finalize key functionalities before deployment.
2. **CI/CD Integration** – Implement seamless integration to automate security tests during development.
3. **Gamification** – Introduce badges, leaderboards, and rewards to increase platform engagement.
4. **Mobile Application** – Develop a mobile app for users to manage bug bounties on the go.
5. **Community Building** – Foster a community of ethical hackers and companies to promote collaboration and knowledge sharing.

## Getting Started

To get a local copy up and running, follow these steps:

### **Prerequisites**
- Install [Node.js](https://nodejs.org/en/download/) (v14.x or later)
- Install [MongoDB](https://www.mongodb.com/try/download/community) and ensure it's running on your local machine or provide a cloud connection string

### **Installation**

#### **1. Clone the Repository**
```bash
git clone https://github.com/AliAmouz/found.git
cd found
```

#### **2. Install Backend Dependencies**
```bash
cd backend
npm install
```

#### **3. Configure Backend Environment Variables**
Create a `.env` file in the `backend` directory with the following content:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

#### **4. Start the Backend Server**
```bash
npm start
```

#### **5. Install Frontend Dependencies**
Open a new terminal window and navigate to the `found` directory:
```bash
cd ../found
npm install
```

#### **6. Configure Frontend Environment Variables**
Create a `.env.local` file in the `found` directory with the following content:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

#### **7. Start the Frontend Application**
```bash
npm run dev
```

#### **8. Access the Application**
Open your browser and navigate to `http://localhost:3000` to interact with BugTrack.

## Contributing

We welcome contributions from the community! To contribute:

1. **Fork the repository.**
2. **Create a new branch** (`git checkout -b feature/YourFeature`).
3. **Commit your changes** (`git commit -m 'Add YourFeature'`).
4. **Push to the branch** (`git push origin feature/YourFeature`).
5. **Open a Pull Request.**

Please ensure your code adheres to our coding standards and includes relevant tests.

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to the **open-source community** for providing invaluable resources and inspiration.
- Special appreciation to all **contributors and ethical hackers** dedicated to making the internet a safer place.

---

### **Project Links**
- **GitHub Repo:** [BugTrack Repository](https://github.com/AliAmouz/found)
- **Demo Video:** [Watch on YouTube](https://youtu.be/QENINURZQ14)

We invite you to explore, contribute, and join us in our mission to democratize cybersecurity!
