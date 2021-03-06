module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  // Setup Enzyme
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFiles: ["jest-webextension-mock"],
  setupFilesAfterEnv: ["<rootDir>/src/setupEnzyme.ts"],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
  reporters: ["default", "jest-junit"],
};
