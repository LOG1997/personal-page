import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/lottery-done.png"
          title="3D动态抽奖可配置型应用"
          description="使用Vue+Threejs构建的3D动态抽奖应用，动画优美，功能丰富。可完美适配各种场合抽奖使用。"
          url="https://24years.top/log-lottery/"
        />
        {/* <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        /> */}
        <ProjectCard
          src="/logPersonalPage.png"
          title="个人主页"
          description="Nextjs构建的个人主页，服务端渲染"
          url="https://24years.top"
        />
      </div>
    </div>
  );
};

export default Projects;
