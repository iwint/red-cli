module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                alias: {
                    '@api': './src/api',
                    '@assets': './src/assets',
                    '@components': './src/components',
                    '@constants': './src/constants',
                    '@hooks': './src/hooks',
                    '@navigation': './src/navigation',
                    '@screens': './src/screens',
                    '@utils': './src/utils',
                    '@layouts': './src/layouts',
                    '@interface': './src/interface',
                    '@services': './src/services',
                    '@store': './src/store',
                },
            },
        ],
        [
            'module:react-native-dotenv',
            {
                moduleName: '@env',
            },
        ],
    ],
};
