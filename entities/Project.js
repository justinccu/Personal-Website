export class Project {
  constructor(data) {
    this.title = data.title;
    this.description = data.description;
    this.technologies = data.technologies || [];
    this.image_url = data.image_url;
    this.project_url = data.project_url;
    this.github_url = data.github_url;
    this.featured = data.featured || false;
  }

  static async list(sortBy = "-created_date") {
    return [
      new Project({
        title: "Longphase",
        description: "An ultra-fast program for phasing SNPs, Indels, and SVs.",
        technologies: ["C / C++", "Bioinformatics", "Algorithm", "Structural Variation Detection", "Phasing / Haplotagging"],
        image_url: "/images/gene.png",
        project_url: "https://ccu365-my.sharepoint.com/:p:/g/personal/409510089_office365_ccu_edu_tw/ERV1JwvnMmJHmkDpWq6ywZ4BOv86XzrYlZzWYPZhff6yNA?e=7Qs93X",
        github_url: "https://github.com/twolinin/longphase",
        featured: true
      }),
      new Project({
        title: "CCU Volleyball League",
        description: "A full-stack website for volleyball game schedule planning.",
        technologies: ["Flask", "PostgreSQL", "Tailwind CSS"],
        image_url: "/images/volleyball.png",
        project_url: "https://ccu-volleyball-league.onrender.com",
        github_url: null,
        featured: false
      }),
      new Project({
        title: "Courses Recommendation",
        description: "A course planning system that supports student's major and interests.",
        technologies: ["C", "Python", "Word Embedding"],
        image_url: "/images/CCU_course.png",
        project_url: "https://prezi.com/view/AvlN9mEEcYthHXyeuluw/?referral_token=w5nP5XlnB3FN",
        github_url: "https://github.com/justinccu/Courses_Recommendation_System"
      })
    ];
  }
}