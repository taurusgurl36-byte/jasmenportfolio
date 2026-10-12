import {
  Blocks,
  Box,
  CircuitBoard,
  Clapperboard,
  Code,
  Cpu,
  Keyboard,
  LayoutTemplate,
  Palette,
  PanelsTopLeft,
  Ruler,
  Wrench,
} from "lucide-react";

// App marks and descriptive icons for every skill in the résumé.
const skillIcons = {
  "Basic Programming": { icon: Code, color: "#2563eb" },
  JavaScript: { mark: "JS", color: "#111827", background: "#f7df1e" },
  "UI/UX Design": { icon: PanelsTopLeft, color: "#a855f7" },
  "Web Page Design": { icon: LayoutTemplate, color: "#0891b2" },
  "Embedded Systems": { icon: Cpu, color: "#059669" },
  "Lego Robotics": { icon: Blocks, color: "#ef4444" },
  "Microsoft Office Word": { mark: "W", color: "#fff", background: "#185abd" },
  "Microsoft PowerPoint": { mark: "P", color: "#fff", background: "#c43e1c" },
  "Microsoft Excel": { mark: "X", color: "#fff", background: "#107c41" },
  "Windows Operating System Tutorial": { mark: "windows", color: "#0078d4" },
  "Speed Typing": { icon: Keyboard, color: "#6366f1" },
  "Adobe Photoshop": { mark: "Ps", color: "#31a8ff", background: "#001e36" },
  "Graphics Design": { icon: Palette, color: "#db2777" },
  "Digital Animation": { icon: Clapperboard, color: "#8b5cf6" },
  "Basic AutoCAD 2D": { icon: Ruler, color: "#dc2626" },
  "Basic AutoCAD 3D": { icon: Box, color: "#dc2626" },
  "Electrical Plan": { icon: CircuitBoard, color: "#d97706" },
  "Mechanical Machine Troubleshooting": { icon: Wrench, color: "#64748b" },
};

export default function SkillIcon({ skill }) {
  const {
    icon: Icon,
    mark,
    color,
    background,
  } = skillIcons[skill] ?? skillIcons["Basic Programming"];

  return (
    <span
      className="skill-icon"
      aria-hidden="true"
      style={{ "--skill-color": color, "--skill-background": background }}
    >
      {Icon ? (
        <Icon size={18} strokeWidth={1.8} />
      ) : mark === "windows" ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 2h9v9H2zm11 0h9v9h-9zM2 13h9v9H2zm11 0h9v9h-9z" />
        </svg>
      ) : (
        <span className="skill-mark">{mark}</span>
      )}
    </span>
  );
}
