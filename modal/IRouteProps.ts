import { IStackScreenProps } from "./StackScreenProps";


export default interface IRouteProps {
    component: React.FunctionComponent<IStackScreenProps>;
    name: string;
    title?: string;
    icon?: ( color: string ,focused: boolean) => React.ReactNode;
    pageReset?: string;

}
