import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Main from "./pages/Main";
import SegQuaSex from "./pages/Manha/SegQuaSex";
import TerQuiSab from "./pages/Manha/TerQuiSab";
import Diariamente from "./pages/Manha/Diariamente";

const Manha = createBottomTabNavigator({
  SegQuaSex: {
    screen: SegQuaSex,
    navigationOptions: {
      title: "Segunda - Quarta - Sexta"
    }
  },
  TerQuiSab: {
    screen: TerQuiSab,
    navigationOptions: {
      title: "Terça - Quinta - Sábado"
    }
  },
  Diariamente: {
    screen: Diariamente,
    navigationOptions: {
      title: "Diariamente"
    }
  }
});

const AppNavigator = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      headerShown: false
    }
  },
  Manha: {
    screen: Manha,
    navigationOptions: {
      title: "Manhã"
    }
  }
});

export default createAppContainer(AppNavigator);
