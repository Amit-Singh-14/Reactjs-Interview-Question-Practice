import React, { useContext } from "react";
import { FeatureFlagsContext } from "./context";
import {
  Accordian,
  LightDarkModeSwitch,
  RandamColorGenator,
  TestTab,
  TicTacTor,
  TreeView,
} from "../../components";
import menus from "../tree-view/data";

function FeatureFlags() {
  const { loading, enableFlags } = useContext(FeatureFlagsContext);
  // console.log(data);
  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkModeSwitch />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacTor />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandamColorGenator />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus} />,
    },
    {
      key: "showTabs",
      component: <TestTab />,
    },
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enableFlags[getCurrentKey];
  }

  if (loading) return <h1>Loading data ! Please wait</h1>;
  return (
    <div>
      <h1 className="text-center text-4xl p-2">FeatureFlag Based on FeaturesEnableContext</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? (
          <div key={componentItem.key}>{componentItem.component}</div>
        ) : null
      )}
    </div>
  );
}

export default FeatureFlags;
