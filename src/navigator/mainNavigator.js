import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen416516Navigator from '../features/BlankScreen416516/navigator';
import BlankScreen116440Navigator from '../features/BlankScreen116440/navigator';
import BlankScreen016439Navigator from '../features/BlankScreen016439/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen416516: { screen: BlankScreen416516Navigator },
BlankScreen116440: { screen: BlankScreen116440Navigator },
BlankScreen016439: { screen: BlankScreen016439Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
