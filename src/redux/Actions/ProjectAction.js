import { history } from "../../App";
import { projectServices } from "../../services/ProjectServices";
import swal from 'sweetalert';




export const CreateProjectAction = (newProject) => {
    return async dispatch => {
        try {
            let resuilt = await projectServices.creatProject(newProject);
            await swal({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
                button: "OK!",
            });
            await history.push("/getproject");
        } catch (error) {
            await swal({
                title: "Project name already exists!",
                text: "You clicked the button!",
                icon: "warning",
                button: "OK!",
            });
        }
    };
};
