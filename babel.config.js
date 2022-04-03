module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "babel-plugin-module-resolver",
        {
          alias: {
            assets: "./assets",
            images: "./assets/images",
            components: "./src/components",
            atoms: "./src/components/atoms",
            molecules: "./src/components/molecules",
            organisms: "./src/components/organisms",
            pages: "./src/components/pages",
            templates: "./src/components/templates",
            config: "./src/config",
            enums: "./src/enums",
            helpers: "./src/helpers",
            store: "./src/store",
            actions: "./src/store/actions",
            api: "./src/store/api",
            reducers: "./src/store/reducers",
            styles: "./src/styles",
          },
        },
      ],
    ],
  };
};
