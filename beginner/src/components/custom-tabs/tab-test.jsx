import { Tab } from "./Tab";

function RandomComponent() {
  return <h1>Some random content</h1>;
}

export function TestTab() {
  const tabContent = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  function onChange(getIndex) {
    console.log(getIndex);
  }

  return <Tab tabContent={tabContent} onChange={onChange} />;
}
