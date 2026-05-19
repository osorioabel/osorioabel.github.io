import svgPaths from "../../../imports/svg-aqdowdil4a";
import Wrapper from "./Wrapper";

export default function Twitter({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <Wrapper additionalClassNames="w-6 h-6 shrink-0">
      <g id="Twitter">
        <path d={svgPaths.pc28c200} fill={variant === "light" ? "rgba(241,241,241,0.7)" : "#656D72"} />
      </g>
    </Wrapper>
  );
}
