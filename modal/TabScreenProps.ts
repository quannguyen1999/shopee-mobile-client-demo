import { ParamListBase, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


export interface ITabScreenProps {
    name: string;
    navigation: NativeStackNavigationProp<any>;
    route: RouteProp<ParamListBase, any>;
}
