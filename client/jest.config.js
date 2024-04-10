module.exports = {
  preset: "ts-jest/presets/js-with-babel",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  // Match test files with specific patterns
  testMatch: [
    "<rootDir>/src/**/*.tests.tsx",
    "<rootDir>/src/**/*.tests.ts",
    "<rootDir>/src/**/*.test.tsx",
    "<rootDir>/src/**/*.test.ts",
  ],
};
