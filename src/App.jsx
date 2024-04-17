import "./App.css";
import {
  Accordian,
  ImageSlider,
  LightDarkModeSwitch,
  LoadMoreData,
  RandamColorGenator,
  StarRating,
  TestTab,
  TreeView,
} from "./components";
import AutoComplete from "./components/auto-complete";
import GithubProfileFinder from "./components/github-profile";
import TicTacTor from "./components/tic-tac-toe";

function App() {
  return (
    <>
      {/* Project 1 Accordian */}
      {/* <Accordian /> */}

      {/* Project 2 RandomColorGenarator */}
      {/* <RandamColorGenator /> */}

      {/* Project 3 Star Rating */}
      {/* <StarRating /> */}

      {/* Project 4 Image Slider */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} /> */}

      {/* Project 5 Load More Data */}
      {/* <LoadMoreData /> */}

      {/* Project 6 Tree View */}
      {/* <TreeView /> */}

      {/* Project 7 Light dark mode  */}
      {/* <LightDarkModeSwitch /> */}

      {/* Project 8 Scroll indicator */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* Project 9 Custom Tab */}
      {/* <TestTab /> */}

      {/* Project 10 github profile */}
      {/* <GithubProfileFinder /> */}

      {/* Project 11 search AutoComplete */}
      {/* <AutoComplete /> */}

      {/* Project 12 Tic-tac-toe */}
      <TicTacTor />
    </>
  );
}

export default App;
