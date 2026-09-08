import { createSlice } from "@reduxjs/toolkit";

import { themeColors, themeFonts } from "./themes";

const defaultFont = 0;
const defaultColor = 0;
const defaultMode = "dark";

const savedColor = localStorage.getItem("themeColor");
const savedFont = localStorage.getItem("themeFont");
const savedMode = localStorage.getItem("themeMode");

const themesSlice = createSlice({
  name: "themes",

  initialState: {
    generalColorId:
      savedColor !== null ? Number(savedColor) : defaultColor,

    generalFontId:
      savedFont !== null ? Number(savedFont) : defaultFont,

    generalThemeMode:
      savedMode === "light" || savedMode === "dark"
        ? savedMode
        : defaultMode,
  },

  reducers: {
    setColor(state, action) {
      state.generalColorId = action.payload;

      localStorage.setItem(
        "themeColor",
        action.payload
      );
    },

    setFont(state, action) {
      state.generalFontId = action.payload;

      localStorage.setItem(
        "themeFont",
        action.payload
      );
    },

    setThemeMode(state, action) {
      state.generalThemeMode = action.payload;

      localStorage.setItem(
        "themeMode",
        action.payload
      );
    },

    toggleThemeMode(state) {
      state.generalThemeMode =
        state.generalThemeMode === "dark"
          ? "light"
          : "dark";

      localStorage.setItem(
        "themeMode",
        state.generalThemeMode
      );
    },

    resetColor(state) {
      state.generalColorId = defaultColor;

      localStorage.setItem(
        "themeColor",
        defaultColor
      );
    },

    resetFont(state) {
      state.generalFontId = defaultFont;

      localStorage.setItem(
        "themeFont",
        defaultFont
      );
    },

    resetThemeMode(state) {
      state.generalThemeMode = defaultMode;

      localStorage.setItem(
        "themeMode",
        defaultMode
      );
    },
  },
});


// * Apply Theme
export const applyTheme = (
  colorId,
  fontId,
  mode
) => {
  const themeColor = themeColors[colorId]?.[mode];
  const themeFont = themeFonts[fontId];

  if (!themeColor || !themeFont) return;

  const root = document.documentElement;

  const variables = {
    "--primary": themeColor.primary,
    "--primary-hover": themeColor.primaryHover,
    "--primary-active": themeColor.primaryActive,
    "--primary-light": themeColor.primaryLight,

    "--primary-inverse": themeColor.primaryInverse,

    "--bg-main": themeColor.bgMain,
    "--bg-secondary": themeColor.bgSecondary,
    "--bg-surface": themeColor.bgSurface,
    "--bg-layout": themeColor.bgLayout,

    "--text-main": themeColor.textMain,
    "--text-muted": themeColor.textMuted,
    "--text-light": themeColor.textLight,
    "--text-inverse": themeColor.textInverse,

    "--heading-font":
      `"${themeFont.headingFont}", Open Sans, sans-serif`,

    "--text-font":
      `"${themeFont.textFont}", Open Sans, sans-serif`,

    "--container-padding": "32px",
    "--card-padding": "24px",
  };

  Object.entries(variables).forEach(
    ([key, value]) => {
      root.style.setProperty(key, value);
    }
  );

  root.setAttribute("data-theme", mode);
};


export const {
  setColor,
  setFont,
  setThemeMode,
  toggleThemeMode,
  resetColor,
  resetFont,
  resetThemeMode,
} = themesSlice.actions;


export default themesSlice.reducer;