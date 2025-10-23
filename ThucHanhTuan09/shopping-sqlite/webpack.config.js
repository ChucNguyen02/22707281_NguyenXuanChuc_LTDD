const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync(env, argv);

    // đảm bảo webpack 5 hiểu .wasm
    config.experiments = config.experiments || {};
    config.experiments.asyncWebAssembly = true;

    // rule để xử lý file .wasm như asset/resource (sẽ trả URL)
    config.module.rules.push({
        test: /\.wasm$/,
        type: 'asset/resource',
    });

    // copy wa-sqlite.wasm từ node_modules vào output public
    const wasmSrc = path.resolve(__dirname, 'node_modules/expo-sqlite/web/wa-sqlite/wa-sqlite.wasm');

    config.plugins.push(
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: wasmSrc,
                    to: 'static/media/wa-sqlite.wasm',
                },
            ],
        })
    );

    // đảm bảo asset filename dễ debug
    config.output = config.output || {};
    config.output.assetModuleFilename = 'static/media/[name].[hash][ext]';

    return config;
};
