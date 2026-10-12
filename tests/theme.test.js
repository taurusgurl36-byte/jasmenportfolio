import assert from "node:assert/strict";
import test from "node:test";
import { getStoredTheme, isDarkTheme, saveTheme } from "../src/utils/theme.js";

test("stored themes are validated and use the system default when missing", () => {
  let storedTheme = null;
  globalThis.window = { localStorage: { getItem: () => storedTheme } };
  try {
    assert.equal(getStoredTheme(), "system");
    storedTheme = "unexpected";
    assert.equal(getStoredTheme(), "system");
    storedTheme = "dark";
    assert.equal(getStoredTheme(), "dark");
    storedTheme = "light";
    assert.equal(getStoredTheme(), "light");
  } finally {
    delete globalThis.window;
  }
});

test("blocked browser storage does not prevent theme switching", () => {
  globalThis.window = {
    get localStorage() {
      throw new Error("Storage is blocked");
    },
  };
  try {
    assert.equal(getStoredTheme(), "system");
    assert.doesNotThrow(() => saveTheme("dark"));
  } finally {
    delete globalThis.window;
  }
});

test("explicit themes override the system preference", () => {
  let prefersDark = true;
  globalThis.window = { matchMedia: () => ({ matches: prefersDark }) };
  try {
    assert.equal(isDarkTheme("dark"), true);
    assert.equal(isDarkTheme("light"), false);
    assert.equal(isDarkTheme("system"), true);
    prefersDark = false;
    assert.equal(isDarkTheme("system"), false);
  } finally {
    delete globalThis.window;
  }
});

test("the selected theme is saved under the expected storage key", () => {
  const saved = new Map();
  globalThis.window = { localStorage: { setItem: (key, value) => saved.set(key, value) } };
  try {
    saveTheme("light");
    assert.equal(saved.get("theme"), "light");
  } finally {
    delete globalThis.window;
  }
});
