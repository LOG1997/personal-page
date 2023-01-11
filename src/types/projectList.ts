export interface iProjectlist {
  /**
   * 创建时间
   */
  createTime: string;
  /**
   * 当前状态，开发中、已发布
   */
  currentStatus: string;
  projectDesc: string;
  /**
   * 开发者列表
   */
  developers: Developer[];
  githubPackages: GithubPackage[];
  githubProjectName: string;
  /**
   * 项目名
   */
  projecName: string;
  /**
   * 项目图标
   */
  projectIcon: string;
  /**
   * 项目背景图片
   */
  projectImage: string;
  /**
   * 访问链接
   */
  projectLink: string;
  /**
   * 项目类型，逗号分隔
   */
  projectTypes: string;
  projectTitle: string;
  /**
   * 项目主题颜色
   */
  themeColor: string;
}

export interface Developer {
  developersAvatar: string;
  developersGithub: string;
  developersName: string;
}

export interface GithubPackage {
  packageName: string;
  packageVersion: string;
}

export interface iCardContent {
  projecName: string;
  projectIcon: string;
  currentStatus: string;
}
