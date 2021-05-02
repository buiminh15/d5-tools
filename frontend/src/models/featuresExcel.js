
import ToolAdmin from '../views/featuresExcel/ToolAdmin'
import ToolRedmine from '../views/featuresExcel/ToolRedmine'

export const featuresExcel = [
  {
    title: "Tool Admin",
    subTitle: "Excel add-in help your work more effectively",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis ac ipsum nec volutpat. Cras et congue felis. Maecenas rutrum porta nisi quis hendrerit. ",
    icon: ["fas", "list-alt"],
    path: "/tool-admin/",
    name: "tool-admin",
    meta: {
      layout: "main",
      title: "Random Data Generator Tool Online",
      tag: "This Generator will allow you to create any data you may need for your testing purposes. " +
        "For example, if you need to create a body for your API request, this Generator will do it for you in seconds!"
    },
    component: ToolAdmin
  },
  {
    title: "Tool Redmine",
    subTitle: "Log bugs to redmine ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis ac ipsum nec volutpat. Cras et congue felis. Maecenas rutrum porta nisi quis hendrerit. ",
    icon: ["fas", "list-alt"],
    path: "/tool-redmine/",
    name: "tool-redmine",
    meta: {
      layout: "main",
      title: "Random Data Generator Tool Online",
      tag: "This Generator will allow you to create any data you may need for your testing purposes. " +
        "For example, if you need to create a body for your API request, this Generator will do it for you in seconds!"
    },
    component: ToolRedmine
  },
 
];

