module.exports = {
    rootDir: '../',
    setupFilesAfterEnv: ["./config/jest.setup.js"],
    transform: {
        '\\.js$': ['babel-jest', { configFile: './config/.babelrc' }],
        '\\.jsx$': ['babel-jest', { configFile: './config/.babelrc' }],
        '\\.ts$': ['babel-jest', { configFile: './config/.babelrc' }],
        '\\.tsx$': ['babel-jest', { configFile: './config/.babelrc' }],
    },
    moduleNameMapper: {
        "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules"
    },
    verbose: true,
    collectCoverage: true,
    coveragePathIgnorePatterns: ["<rootDir>/test/test-utils.js"],
    testEnvironment: "jsdom",
    coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
};