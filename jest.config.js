/* eslint-env node */
module.exports = {
  // Liste des chemins des fichiers à tester
  testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"],
  // Transformer les fichiers TypeScript avec ts-jest
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  // Définir le module mapper si nécessaire
  moduleNameMapper: {
    // Exemple pour les fichiers CSS
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  // Configuration spécifique à TypeScript
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
      // Autres options de ts-jest
    },
  },
  setupFilesAfterEnv: ["./jest-setup.ts"],
};
