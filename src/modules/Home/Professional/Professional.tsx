import {
  Chart as ChartJS,
  ArcElement,
  Filler,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
  type ChartData,
  type ChartOptions,
  type Plugin,
  type ScriptableContext,
} from "chart.js";
import { Pie, Radar } from "react-chartjs-2";
import { technologyGroups, type SkillModel } from "../../../models/ResumeModel";
import { frontendPiePalette, pieDepthStyle } from "../../../models/ChartModel";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import styles from "./Professional.module.scss";

ChartJS.register(ArcElement, Filler, LineElement, PointElement, RadialLinearScale, Tooltip);

const pieColors = frontendPiePalette.map((color) => color.base);

/** 依實際圖表尺寸建立亮面到暗面的漸層，初次排版前使用基底色。 */
function createPieGradient(context: ScriptableContext<"doughnut">) {
  const palette = frontendPiePalette[context.dataIndex % frontendPiePalette.length] ?? frontendPiePalette[0];
  const { ctx, chartArea } = context.chart;
  if (!chartArea) return palette.base;

  const gradient = ctx.createLinearGradient(chartArea.left, chartArea.top, chartArea.right, chartArea.bottom);
  gradient.addColorStop(0, palette.light);
  gradient.addColorStop(0.4, palette.base);
  gradient.addColorStop(0.85, palette.dark);
  gradient.addColorStop(1, palette.side);
  return gradient;
}

const pieDepthPlugin: Plugin<"pie"> = {
  id: "pie-depth",
  // 先繪製向下堆疊的暗色側面；沿用原扇區幾何，保持數值比例與滑鼠判定一致。
  beforeDatasetDraw(chart, { meta }) {
    const { ctx } = chart;
    ctx.save();
    for (let depth = pieDepthStyle.depth; depth > 0; depth--) {
      meta.data.forEach((element, index) => {
        if (!(element instanceof ArcElement) || !Number.isFinite(element.outerRadius)) return;
        const palette = frontendPiePalette[index % frontendPiePalette.length];
        ctx.shadowColor = depth === pieDepthStyle.depth ? "rgba(0, 0, 0, 0.45)" : "transparent";
        ctx.shadowBlur = depth === pieDepthStyle.depth ? pieDepthStyle.shadowBlur : 0;
        ctx.shadowOffsetY = depth === pieDepthStyle.depth ? pieDepthStyle.shadowOffset : 0;
        const side = new ArcElement({
          x: element.x,
          y: element.y + depth,
          startAngle: element.startAngle,
          endAngle: element.endAngle,
          circumference: element.circumference,
          innerRadius: element.innerRadius,
          outerRadius: element.outerRadius,
          options: { ...element.options, backgroundColor: palette.side, borderColor: palette.side, borderWidth: 0 },
        });
        side.draw(ctx);
      });
    }
    ctx.restore();
  },
};
const frontendPlugins = [pieDepthPlugin];
const floatingTooltip = {
  position: "nearest" as const,
  displayColors: false,
  backgroundColor: "#172c31",
  titleColor: "#b9ffe1",
  bodyColor: "#ffffff",
  borderColor: "rgba(255, 255, 255, 0.32)",
  borderWidth: 1,
  padding: 12,
  caretPadding: 8,
  titleFont: { size: 14 },
  bodyFont: { size: 13 },
};

const frontendData: ChartData<"pie"> = {
  labels: technologyGroups.frontend.map((skill) => skill.name),
  datasets: [{
    data: technologyGroups.frontend.map((skill) => skill.percent),
    backgroundColor: createPieGradient,
    borderColor: "rgba(226, 255, 255, 0.7)",
    borderWidth: 1.5,
    spacing: 2,
    hoverOffset: 10,
  }],
};

const frontendOptions: ChartOptions<"pie"> = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  layout: { padding: pieDepthStyle.padding },
  interaction: { mode: "nearest", intersect: false },
  plugins: {
    legend: { display: false },
    tooltip: {
      ...floatingTooltip,
      callbacks: {
        title: (items) => items[0]?.label ?? "",
        label: (context) => `熟練度 ${context.parsed}%`,
      },
    },
  },
};

/** 以同一份技能資料產生雷達圖，避免圖表與下方數值不一致。 */
function createRadarData(skills: readonly SkillModel[], borderColor: string, backgroundColor: string): ChartData<"radar"> {
  return {
    labels: skills.map((skill) => skill.name),
    datasets: [{
      label: "技術熟練度",
      data: skills.map((skill) => skill.percent),
      backgroundColor,
      borderColor,
      borderWidth: 2,
      pointBackgroundColor: borderColor,
      pointBorderColor: "#405465",
      pointRadius: 4,
      pointHoverRadius: 7,
    }],
  };
}

const radarOptions: ChartOptions<"radar"> = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  interaction: { mode: "nearest", intersect: false },
  plugins: {
    legend: { display: false },
    tooltip: {
      ...floatingTooltip,
      callbacks: {
        title: (items) => items[0]?.label ?? "",
        label: (context) => `熟練度 ${context.parsed.r}%`,
      },
    },
  },
  scales: {
    r: {
      min: 0,
      max: 100,
      ticks: {
        stepSize: 25,
        color: "#e5edf0",
        backdropColor: "transparent",
      },
      grid: { color: "rgba(255, 255, 255, 0.28)" },
      angleLines: { color: "rgba(255, 255, 255, 0.28)" },
      pointLabels: {
        color: "#ffffff",
        font: { size: 11 },
      },
    },
  },
};

const radarGroups = [
  {
    id: "backend",
    title: "Backend",
    skills: technologyGroups.backend,
    data: createRadarData(technologyGroups.backend, "#00d483", "rgba(0, 212, 131, 0.22)"),
  },
  {
    id: "tools",
    title: "Tools & AI Tool",
    skills: technologyGroups.tools,
    data: createRadarData(technologyGroups.tools, "#66b5ff", "rgba(102, 181, 255, 0.22)"),
  },
] as const;

/** 以 Chart.js 呈現 Frontend、Backend 與合併的 Tools / AI Tool 技術。 */
const Professional = () => {
  return (
    <section id="professional" className={styles.professional} aria-labelledby="professional-title" tabIndex={-1}>
      <div className="page-container">
        <div className={styles.skillsContent}>
          <SectionHeading id="professional-title" number="01" title="PROFESSIONAL" subtitle="FRONTEND, BACKEND, TOOLS & AI TOOL" />
          <div className={styles.chartGrid}>
            <figure className={styles.chartCard}>
              <h3>Frontend</h3>
              <p className={styles.chartDescription}>圓餅圖呈現各項技術分數的相對占比</p>
              <div className={styles.chartFrame}>
                <Pie
                  data={frontendData}
                  options={frontendOptions}
                  plugins={frontendPlugins}
                  role="img"
                  aria-label={`Frontend 技術：${technologyGroups.frontend.map((skill) => `${skill.name} ${skill.percent}%`).join("、")}`}
                />
              </div>
              <figcaption>
                <ul className={styles.skillLegend}>
                  {technologyGroups.frontend.map((skill, index) => (
                    <li key={skill.name}>
                      <span className={styles.legendName}>
                        <span className={styles.legendSwatch} style={{ backgroundColor: pieColors[index] }} />
                        {skill.name}
                      </span>
                      <strong>{skill.percent}%</strong>
                    </li>
                  ))}
                </ul>
              </figcaption>
            </figure>

            {radarGroups.map((group) => (
              <figure className={`${styles.chartCard} ${group.id === "tools" ? styles.toolsCard : ""}`} key={group.id}>
                <h3>{group.title}</h3>
                <p className={styles.chartDescription}>雷達圖呈現各項技術的熟練度</p>
                <div className={styles.chartFrame}>
                  <Radar
                    data={group.data}
                    options={radarOptions}
                    role="img"
                    aria-label={`${group.title} 技術：${group.skills.map((skill) => `${skill.name} ${skill.percent}%`).join("、")}`}
                  />
                </div>
                <figcaption>
                  <ul className={styles.skillLegend}>
                    {group.skills.map((skill) => (
                      <li key={skill.name}>
                        <span>{skill.name}</span>
                        <strong>{skill.percent}%</strong>
                      </li>
                    ))}
                  </ul>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Professional;
