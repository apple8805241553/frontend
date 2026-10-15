import { useState, type KeyboardEvent } from "react";
import { projects } from "../../../models/ResumeModel";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import styles from "./Portfolio.module.scss";

/** 以可循環切換的輪播呈現作品預覽。 */
const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultipleProjects = projects.length > 1;

  function moveSlide(direction: number) {
    if (!hasMultipleProjects) return;
    setActiveIndex((index) => (index + direction + projects.length) % projects.length);
  }

  function handleControlsKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      moveSlide(event.key === "ArrowLeft" ? -1 : 1);
    }
  }

  return (
    <section id="portfolio" className={`${styles.portfolio} page-container`} aria-labelledby="portfolio-title" tabIndex={-1}>
      <SectionHeading id="portfolio-title" number="02" title="PORTFOLIO" />
      <p className={styles.portfolioSubtitle}>MY LATEST WORK.</p>
      <div className={styles.carousel} role="region" aria-roledescription="輪播" aria-label="作品集">
        <div id="portfolio-slides" className={styles.carouselViewport}>
          <div className={styles.carouselTrack} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {projects.map((project, index) => (
              <div
                className={styles.projectSlide}
                key={project.id}
                role="group"
                aria-roledescription="投影片"
                aria-label={`${index + 1} / ${projects.length}：${project.title}`}
                aria-hidden={index !== activeIndex}
                inert={index !== activeIndex}
              >
                <a
                  className={styles.projectCard}
                  style={{ backgroundColor: project.imageBackground }}
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`觀看 ${project.title} 示範影片（在新分頁開啟）`}
                >
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    width={project.imageWidth}
                    height={project.imageHeight}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className={styles.projectOverlay}>
                    <h3>{project.title}</h3>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
        {hasMultipleProjects && (
          <div className={styles.carouselControls} onKeyDown={handleControlsKeyDown}>
            <button type="button" className={styles.arrowButton} aria-label="上一張作品" title="上一張作品" aria-controls="portfolio-slides" onClick={() => moveSlide(-1)}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6" /></svg>
            </button>
            <div className={styles.indicators} role="group" aria-label="選擇作品">
              {projects.map((project, index) => (
                <button
                  type="button"
                  className={styles.indicatorButton}
                  key={project.id}
                  aria-label={`顯示第 ${index + 1} 張作品：${project.title}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  aria-controls="portfolio-slides"
                  onClick={() => setActiveIndex(index)}
                >
                  <span />
                </button>
              ))}
            </div>
            <button type="button" className={styles.arrowButton} aria-label="下一張作品" title="下一張作品" aria-controls="portfolio-slides" onClick={() => moveSlide(1)}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m10 6 6 6-6 6" /></svg>
            </button>
          </div>
        )}
        <p className={styles.slideStatus} role="status" aria-live="polite" aria-atomic="true">
          {projects.length > 0 && `${String(activeIndex + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")} — ${projects[activeIndex].title}`}
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
