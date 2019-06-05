module.exports = {
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],
    coverageDirectory: 'coverage',
    moduleFileExtensions: ['js', 'json', 'jsx'],
    setupFiles: ['<rootDir>/enzyme.config.js'],
    testEnvironment: 'jsdom',
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    testPathIgnorePatterns: ['\\\\node_modules\\\\',
    '<rootDir>/cypress',
  ],
    testURL: 'http://localhost',
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    verbose: false,
    transform: {
        '.+\\.(css|styl|less|sass|scss)$':
          '<rootDir>/node_modules/jest-css-modules-transform',
        '^.+\\.js?$': 'babel-jest',
        '^.+\\.jsx?$': 'babel-jest',
      },
      moduleNameMapper: {
        '^.+\\.(jpg|png|svg)$': 'babel-jest'
  },
      modulePathIgnorePatterns: [ 'src/store.js', 'src/App.js', 'index.js', 'src/reducers/index.js', '/mocks', '/utils', 'AuthorizationHOC.jsx', 'action-types/createMeetupActionType.js', 'actions/authActions.js', 'actions/getAQuestionAction.js', 'components/SingleMeetup.jsx']

  };
