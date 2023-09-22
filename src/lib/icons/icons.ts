export type IconsId =
  | "bar-chart"
  | "circle-1"
  | "circle-2"
  | "circle-3"
  | "circle-4"
  | "circle-5"
  | "circle-6"
  | "circle-7"
  | "error"
  | "gcon"
  | "github"
  | "grid"
  | "home"
  | "info"
  | "layout"
  | "sitemap"
  | "square-1"
  | "square-2"
  | "square-3"
  | "square-4"
  | "square-5"
  | "square-6"
  | "square-7"
  | "warning";

export type IconsKey =
  | "BarChart"
  | "Circle_1"
  | "Circle_2"
  | "Circle_3"
  | "Circle_4"
  | "Circle_5"
  | "Circle_6"
  | "Circle_7"
  | "Error"
  | "Gcon"
  | "Github"
  | "Grid"
  | "Home"
  | "Info"
  | "Layout"
  | "Sitemap"
  | "Square_1"
  | "Square_2"
  | "Square_3"
  | "Square_4"
  | "Square_5"
  | "Square_6"
  | "Square_7"
  | "Warning";

export enum Icons {
  BarChart = "bar-chart",
  Circle_1 = "circle-1",
  Circle_2 = "circle-2",
  Circle_3 = "circle-3",
  Circle_4 = "circle-4",
  Circle_5 = "circle-5",
  Circle_6 = "circle-6",
  Circle_7 = "circle-7",
  Error = "error",
  Gcon = "gcon",
  Github = "github",
  Grid = "grid",
  Home = "home",
  Info = "info",
  Layout = "layout",
  Sitemap = "sitemap",
  Square_1 = "square-1",
  Square_2 = "square-2",
  Square_3 = "square-3",
  Square_4 = "square-4",
  Square_5 = "square-5",
  Square_6 = "square-6",
  Square_7 = "square-7",
  Warning = "warning",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.BarChart]: "4097",
  [Icons.Circle_1]: "57344",
  [Icons.Circle_2]: "57345",
  [Icons.Circle_3]: "57346",
  [Icons.Circle_4]: "57347",
  [Icons.Circle_5]: "57348",
  [Icons.Circle_6]: "57349",
  [Icons.Circle_7]: "57350",
  [Icons.Error]: "5",
  [Icons.Gcon]: "1",
  [Icons.Github]: "61440",
  [Icons.Grid]: "8",
  [Icons.Home]: "2",
  [Icons.Info]: "3",
  [Icons.Layout]: "7",
  [Icons.Sitemap]: "6",
  [Icons.Square_1]: "57351",
  [Icons.Square_2]: "57352",
  [Icons.Square_3]: "57353",
  [Icons.Square_4]: "57354",
  [Icons.Square_5]: "57355",
  [Icons.Square_6]: "57356",
  [Icons.Square_7]: "57357",
  [Icons.Warning]: "4",
};
