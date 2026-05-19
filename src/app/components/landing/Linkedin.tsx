import svgPaths from "../../../imports/svg-aqdowdil4a";
import Wrapper from "./Wrapper";

export default function Linkedin({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <Wrapper additionalClassNames="w-6 h-6 shrink-0">
      <g id="Linkedin">
        <path d={svgPaths.p801bc0} fill={variant === "light" ? "rgba(241,241,241,0.7)" : "#656D72"} />
      </g>
    </Wrapper>
  );
}
