import MenuHeader from "@/components/header/dashboard/MenuHeader";
import IRouteProps from "@/modal/IRouteProps";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCurrentUrl } from "@/hooks/navigation-slice";
import { Stack } from "expo-router";

export const ROUTES_HOME: IRouteProps[] = [
  {
    name: "home-page"
  },  
];

export default function HomeLayout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateCurrentUrl("HomePage"));
  }, []);
  return (
    <Stack>
      {ROUTES_HOME.map((r: any, i) => (
        <Stack.Screen
          key={i}
          name={r.name}

          options={{
            headerTitle: (props: any) =>  <MenuHeader />,
            headerStyle: {
              backgroundColor: "rgb(249 115 22)",
            }, 
            headerShown: r.name == "HomePage" && true,
          }}
        />
      ))}
      
     
    </Stack>
  );
}
