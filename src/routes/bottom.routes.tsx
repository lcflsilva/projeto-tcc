import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import User from "../screens/user";
import Clubs from "../screens/discover"
import CustomTabBar from "../components/customTabBar";
import { themes } from "../global/themes";
import Config from "../screens/config";
import Home from "../screens/home";
import Shows from "../screens/shows";
import Discover from "../screens/discover";
import Post from "../screens/post";


const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            sceneStyle:{backgroundColor: themes.colors.backBlack}
        }}
        tabBar={props => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} /> 
      <Tab.Screen name="Shows" component={Shows} />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="User" component={User} />
      <Tab.Screen name="Config" component={Config}/>
      <Tab.Screen name="Post" component={Post}/>
    </Tab.Navigator>
  );
}