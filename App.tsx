import { PortalProvider } from "@gorhom/portal";
import { Provider as AppStoreProvider } from "react-redux";
import { Center } from "./ui";
import { Store } from "redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Categories from "./src/Screens/Registration/Categories";
import ContactDetails from "./src/Screens/Registration/ContactDetails";
import Feed from "./src/Screens/Registration/Feed";
import SplashScreen from "./src/Screens/SplashScreen";
import { Pages } from "./src/Utils/Pages";
import { ApplicationState } from "./src/Store";
import { configureStore } from "./configureStore";
import Success from "./src/Screens/Registration/Success";
import BrandListing from "./src/Screens/BrandListing";
import SignleBrand from "./src/Screens/SingleBrand";
import { patchJS } from "./src/Utils";
import Login from "./src/Screens/Registration/Login";
import UserProfile from "./src/Screens/UserProfile";
// icons
import { Ionicons, FontAwesome, Feather } from "@expo/vector-icons";
import { Image } from "react-native";
import { razzleDazzleRose, silver } from "./src/Utils/Colors";
import Inbox from "./src/Screens/Inbox";
import Favoris from "./src/Screens/UserProfileMenus/Favoris";
import ContactUs from "./src/Screens/UserProfileMenus/ContactUs";
import Faq from "./src/Screens/UserProfileMenus/Faq";
import PaymentPreferences from "./src/Screens/UserProfileMenus/PaymentPreferences";
import PaymentSetup from "./src/Screens/UserProfileMenus/PaymentSetup";
import PersonalDetails from "./src/Screens/UserProfileMenus/PersonalDetails";
import SuggestFeature from "./src/Screens/UserProfileMenus/SuggestFeature";

patchJS();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppHeader = () => (
  <Center bgColor="white" pt={50} pb={2}>
    <Image source={require("./src/Svg/buzztest_img.png")} />
  </Center>
);

function AppTabs() {
  return (
    <Tab.Navigator
      initialRouteName="POSTS"
      screenOptions={{
        tabBarActiveTintColor: silver,
      }}
    >
      <Tab.Screen
        name="CAMPAIGNS"
        component={BrandListing}
        options={{
          header: AppHeader,
          tabBarActiveTintColor: razzleDazzleRose,
          tabBarInactiveTintColor: silver,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="POSTS"
        component={BrandListing}
        options={{
          header: AppHeader,
          tabBarActiveTintColor: razzleDazzleRose,
          tabBarInactiveTintColor: silver,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="newspaper-o" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="INBOX"
        component={Inbox}
        options={{
          header: AppHeader,
          tabBarActiveTintColor: razzleDazzleRose,
          tabBarInactiveTintColor: silver,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="mail-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="YOU"
        component={UserProfile}
        options={{
          header: AppHeader,
          tabBarActiveTintColor: razzleDazzleRose,
          tabBarInactiveTintColor: silver,
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export function AppScreens() {
  return (
    <>
      <AppTabs />
    </>
  );
}

export default function App() {
  const globalStore: Store<ApplicationState> = configureStore();
  return (
    <AppStoreProvider store={globalStore}>
      <PortalProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={Pages.Splash}
              component={SplashScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={Pages.Home}
              component={AppScreens}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={Pages.SingleBrand}
              component={SignleBrand}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={Pages.Login}
              component={Login}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={Pages.ContactDetails}
              component={ContactDetails}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={Pages.FeedCustomization}
              component={Feed}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={Pages.CategoriesSelection}
              component={Categories}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={Pages.SuccessRegistration}
              component={Success}
              options={{
                headerShown: false,
              }}
            />
            {/* Nested Screens */}
            <Stack.Screen
              name={Pages.Favoris}
              component={Favoris}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={Pages.ContactUs}
              component={ContactUs}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={Pages.Faq}
              component={Faq}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={Pages.PaymentPreferences}
              component={PaymentPreferences}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={Pages.PaymentSetup}
              component={PaymentSetup}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={Pages.PersonalDetails}
              component={PersonalDetails}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={Pages.SuggestFeature}
              component={SuggestFeature}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PortalProvider>
    </AppStoreProvider>
  );
}
