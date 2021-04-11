const path = require('path');
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/test/jest-setup.ts'],
    moduleDirectories: ['node_modules'],
};
