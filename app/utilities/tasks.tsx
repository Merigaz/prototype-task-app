const tasksAPI = {
  status: "success",
  data: [
    {
      id: "task_001",
      title: "Complete project proposal",
      description:
        "Write the Q4 project proposal for the client including budget and timeline",
      quadrant: "Q1",
    },
    {
      id: "task_002",
      title: "Review code changes",
      description: "Review the latest pull requests from the team",
      status: "in-progress",
      quadrant: "Q2",
    },
    {
      id: "task_003",
      title: "Update documentation",
      description: "Update API documentation with new endpoints",
      quadrant: "Q1",
    },
    {
      id: "task_004",
      title: "Design system audit",
      description: "Review and audit current design system components",
      status: "completed",
      quadrant: "Q3",
    },
    {
      id: "task_005",
      title: "Deploy to production",
      description: "Deploy version 2.3.0 to production environment",
      status: "in-progress",
      quadrant: "Q4",
    },
    {
      id: "task_006",
      title: "Fix login bug",
      description: "Fix authentication issue in Safari browser",
      status: "in-progress",
      quadrant: "Q4",
    },
    {
      id: "task_007",
      title: "Write unit tests",
      description: "Write unit tests for new feature module",
      status: "completed",
      quadrant: "Q3",
    },
  ],
};
export default tasksAPI;
