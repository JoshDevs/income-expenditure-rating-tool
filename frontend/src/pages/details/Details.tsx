import { ProgressiveForm } from "../../components/progressiveFrom/ProgressiveForm";
import Fade from "@mui/material/Fade";

export const Details: React.FC = () => { 
    return (
        <Fade in={true}>
            <div className="personal-detail-container">
                <ProgressiveForm />
            </div>
        </Fade>
    )
}