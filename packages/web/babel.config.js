const presets = ["next/babel"];
const plugins = [
  // https://mui.com/material-ui/guides/minimizing-bundle-size/#option-2
  // need to reduce bundle size because of material icons
  [
    "babel-plugin-import",
    {
      libraryName: "@mui/material",
      libraryDirectory: "",
      camel2DashComponentName: false,
    },
    "core",
  ],
  [
    "babel-plugin-import",
    {
      libraryName: "@mui/icons-material",
      libraryDirectory: "",
      camel2DashComponentName: false,
    },
    "icons",
  ],
];

module.exports = { presets, plugins };
