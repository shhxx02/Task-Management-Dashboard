const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      new: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Prepare Monthly Report",
        description: "Compile and format data for monthly sales report.",
        category: "Reporting",
        date: "2025-06-15",
        active: true,
        new: false,
        completed: false,
        failed: false
      },
      {
        title: "Client Follow-up",
        description: "Follow up with Client X regarding proposal feedback.",
        category: "Client Communication",
        date: "2025-06-10",
        active: false,
        new: false,
        completed: true,
        failed: false
      },
      {
        title: "Update CRM",
        description: "Enter latest client data in the CRM system.",
        category: "Data Entry",
        date: "2025-06-20",
        active: false,
        new: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      new: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Website QA Testing",
        description: "Check UI responsiveness on multiple browsers.",
        category: "Quality Assurance",
        date: "2025-06-18",
        active: true,
        new: true,
        completed: false,
        failed: false
      },
      {
        title: "Bug Fixes",
        description: "Fix reported bugs from last week’s release.",
        category: "Development",
        date: "2025-06-12",
        active: false,
        new: false,
        completed: true,
        failed: false
      },
      {
        title: "Daily Standup",
        description: "Attend and share updates in daily standup.",
        category: "Meetings",
        date: "2025-06-24",
        active: true,
        new: false,
        completed: false,
        failed: false
      },
      {
        title: "Write Unit Tests",
        description: "Write test cases for new modules.",
        category: "Testing",
        date: "2025-06-22",
        active: false,
        new: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      new: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Research Competitors",
        description: "Analyze top 5 competitors in the same market.",
        category: "Market Research",
        date: "2025-06-08",
        active: false,
        new: false,
        completed: true,
        failed: false
      },
      {
        title: "Prepare Presentation",
        description: "Build slides for the quarterly team meeting.",
        category: "Design",
        date: "2025-06-23",
        active: true,
        new: true,
        completed: false,
        failed: false
      },
      {
        title: "Post on LinkedIn",
        description: "Create and schedule a post about product update.",
        category: "Social Media",
        date: "2025-06-25",
        active: false,
        new: false,
        completed: false,
        failed: true
      },
      {
        title: "Internal Training",
        description: "Attend workshop on cybersecurity basics.",
        category: "Training",
        date: "2025-06-14",
        active: false,
        new: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      new: 0,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        title: "Inventory Check",
        description: "Audit office supplies inventory.",
        category: "Logistics",
        date: "2025-06-11",
        active: false,
        new: false,
        completed: true,
        failed: false
      },
      {
        title: "Vendor Meeting",
        description: "Discuss pricing and delivery timelines.",
        category: "Procurement",
        date: "2025-06-19",
        active: true,
        new: false,
        completed: false,
        failed: false
      },
      {
        title: "Invoice Verification",
        description: "Verify vendor invoices against POs.",
        category: "Accounts",
        date: "2025-06-13",
        active: false,
        new: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Karan",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      new: 1,
      completed: 1,
      failed: 2
    },
    tasks: [
      {
        title: "Onboarding Prep",
        description: "Prepare welcome kit for new joiners.",
        category: "HR",
        date: "2025-06-10",
        active: false,
        new: false,
        completed: false,
        failed: true
      },
      {
        title: "Organize Team Lunch",
        description: "Finalize venue and send calendar invite.",
        category: "Events",
        date: "2025-06-21",
        active: true,
        new: true,
        completed: false,
        failed: false
      },
      {
        title: "Update Employee Records",
        description: "Ensure all recent changes are reflected in system.",
        category: "HR",
        date: "2025-06-16",
        active: false,
        new: false,
        completed: true,
        failed: false
      },
      {
        title: "Collect Feedback",
        description: "Send survey to team and collect responses.",
        category: "Feedback",
        date: "2025-06-22",
        active: false,
        new: false,
        completed: false,
        failed: true
      },
      {
        title: "Policy Review",
        description: "Review and suggest updates to leave policy.",
        category: "Compliance",
        date: "2025-06-24",
        active: true,
        new: false,
        completed: false,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123"
  }
];


export const setLocalStorage = ()=>{
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))

}

export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))  

  return {employees,admin}
}