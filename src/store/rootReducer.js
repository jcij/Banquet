import { combineReducers } from "redux";
import Category from "./slices/category.slice";
import Portfolio from "./slices/portfolio.slice";
import Section from "./slices/section.slice";
import Slider from "./slices/slider.slice";
import General from "./slices/general.slice";

const rootReducer = combineReducers({
  Category,
  Portfolio,
  Section,
  Slider,
  General,
});

export default rootReducer;
