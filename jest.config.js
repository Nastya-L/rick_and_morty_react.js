const config = {
    testEnvironment: 'jest-environment-jsdom',
    extensionsToTreatAsEsm: ['.jsx'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg)$': 'identity-obj-proxy',
        '\\.(css|less|scss|sss|styl)$': 'identity-obj-proxy'
      },
};

module.exports = config;