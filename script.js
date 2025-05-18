document.addEventListener("DOMContentLoaded", function () {
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
        },
      },
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });

  document.getElementById("copyJsonBtn").addEventListener("click", () => {
    const text = document.getElementById("resumeViewer").textContent;
    navigator.clipboard.writeText(text).then(() => {
      const msg = document.getElementById("copyMsg");
      msg.classList.add("show");

      setTimeout(() => {
        msg.classList.remove("show");
      }, 2000);
    });
  });

  const themeToggle = document.getElementById("themeToggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    const icon = themeToggle.querySelector(".theme-icon");
    if (document.body.classList.contains("light-theme")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  });

  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    contactForm.reset();
  });

  const professionalProfile = {
    name: "Aaryan Jha",
    title: "Software Engineer",
    technicalExpertise: [
      "ASP.NET Web API",
      "ASP.NET MVC",
      "Entity Framework (EF) Core",
      "Flutter",
      "PostgreSQL",
      "SQL Server",
      "LINQ",
      "Clean Architecture",
    ],
    experience: [
      {
        company: "Vertex Special Technologies",
        position: ".NET Developer",
        timeline: "2024 - Present",
        responsibilities: [
          "Integrated IoT-based employee punch-in/out system",
          "Implemented payment gateway for accounting software",
          "Conducted international knowledge transfer sessions",
          "Designed multi-tenant architecture",
          "Deployed .NET Core projects to IIS",
        ],
        technologies: [".NET Core", "PostgreSQL", "IIS", "Azure"],
      },
      {
        company: "ING Skill Academy",
        position: "Full Stack Developer & IoT Engineer",
        timeline: "2023",
        responsibilities: [
          "Developed college web applications",
          "Created UI/UX designs in Figma",
          "Implemented database designs",
          "Led IoT project development",
          "Demonstrated projects across Nepal",
        ],
        technologies: ["Flutter", "Firebase", "Arduino", "Figma"],
      },
    ],
    education: {
      degree: "BSc in Computer Science",
      institution: "Itahari International College",
      year: "2023",
    },
    awards: [
      {
        title: "Triple A Scholarship",
        year: "2023",
        description: "Top 10% of students in faculty",
      },
      {
        title: "30-second Pitch Challenge (3rd Place)",
        year: "2024",
        issuer: "Thammasat University, Thailand",
      },
    ],
    contact: {
      email: "whcloud91@email.com",
      github: "github.com/ScreamingSyntax",
      linkedin: "linkedin.com/in/aaryanjha",
    },
  };

  document.getElementById("resumeViewer").textContent = JSON.stringify(
    professionalProfile,
    null,
    2
  );
});
