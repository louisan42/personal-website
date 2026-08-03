import portfolioData from "@/data/portfolio.json";

export interface CommandOutput {
  type: "text" | "error" | "success" | "component";
  content: string | React.ReactNode;
}

export const commands: Record<string, string> = {
  help: "Show available commands",
  about: "Display professional summary",
  skills: "List technical skills",
  experience: "Show work history",
  projects: "List featured projects",
  contact: "Show contact information",
  clear: "Clear terminal output",
  gui: "Switch to GUI/Web mode",
};

export const executeCommand = (cmd: string): CommandOutput => {
  const cleanCmd = cmd.trim().toLowerCase();

  if (cleanCmd === "") {
    return { type: "text", content: "" };
  }

  // Help Command
  if (cleanCmd === "help") {
    const helpText = Object.entries(commands)
      .map(([key, desc]) => `${key.padEnd(12)} - ${desc}`)
      .join("\n");

    return { type: "text", content: helpText };
  }

  // About Command
  if (cleanCmd === "about") {
    const { name, title, bio, philosophy } = portfolioData.personal;

    return {
      type: "text",
      content: `
NAME: ${name}
TITLE: ${title}

${bio}

PHILOSOPHY:
${philosophy}
      `.trim(),
    };
  }

  // Skills Command
  if (cleanCmd === "skills") {
    const skillsOutput = portfolioData.skills.categories
      .map((cat) => {
        const items = cat.items.map((i) => `  - ${i.name}`).join("\n");

        return `${cat.icon} ${cat.name}:\n${items}`;
      })
      .join("\n\n");

    return { type: "text", content: skillsOutput };
  }

  // Experience Command
  if (cleanCmd === "experience") {
    const expOutput = portfolioData.experience
      .map(
        (job) => `
[${job.period}] ${job.title} @ ${job.company}
${job.description}
Technologies: ${job.technologies.join(", ")}
    `,
      )
      .join("\n");

    return { type: "text", content: expOutput.trim() };
  }

  // Projects Command
  if (cleanCmd === "projects") {
    const projOutput = portfolioData.projects
      .map(
        (p) => `
* ${p.title} (${p.status})
  ${p.description}
  Stack: ${p.tags.join(", ")}
  Link: ${p.link}
    `,
      )
      .join("\n");

    return { type: "text", content: projOutput.trim() };
  }

  // Contact Command
  if (cleanCmd === "contact") {
    const contact = portfolioData.contact;
    const lines = [
      `Email:    ${contact.email}`,
      `GitHub:   ${contact.github}`,
      `LinkedIn: ${contact.linkedin}`,
    ];

    if (contact.twitter) {
      lines.push(`Twitter:  ${contact.twitter}`);
    }

    return { type: "text", content: lines.join("\n") };
  }

  if (cleanCmd === "clear") {
    return { type: "text", content: "CLEAR" };
  }

  if (cleanCmd === "gui") {
    return { type: "success", content: "Switching to Web View..." };
  }

  return {
    type: "error",
    content: `Command not found: '${cleanCmd}'. Type 'help' to see available commands.`,
  };
};
