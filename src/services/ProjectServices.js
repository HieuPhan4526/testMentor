import { baseServices } from "./baseServices";

export class ProjectServices extends baseServices {
    creatProject = (newProject) => {
        return this.post(`api/Project/createProject`, newProject);
    };
    getAllProject = () => {
        return this.get(`api/Project/getAllProject`);
    };
}
export const projectServices = new ProjectServices(); 