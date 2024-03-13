import "./App.css";
import {
  Accordian,
  ImageSlider,
  LightDarkModeSwitch,
  LoadMoreData,
  RandamColorGenator,
  StarRating,
  TreeView,
} from "./components";
import { ScrollIndicator } from "./components/scroll-indicator";

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
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </>
  );
}

export default App;
