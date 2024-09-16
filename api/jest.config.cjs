/** @type {import('jest').Config} */
const config = {
  verbose: true,
  transform: {
    "\\.js$": ["babel-jest"],
  },
  moduleNameMapper: {
    "/otp/(.*)": "/Users/user/Desktop/my_project/jest/layer/src/$1",
  },
};

module.exports = config;
