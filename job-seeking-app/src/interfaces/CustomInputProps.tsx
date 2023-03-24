import { Path, Control } from "react-hook-form";
import IFormValues from "./IFormValues";

export default interface CustomInputProps {
    label: Path<IFormValues>;
    control: Control<IFormValues>;
    required: boolean;
    visibilityToggle: boolean;
    children?: React.ReactNode;
}