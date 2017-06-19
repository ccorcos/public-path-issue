# Public Path Issue

When using `appcache-webpack-plugin` in conjunction with `html-webpack-plugin`, the `html-webpack-plugin` does not use the `publicPath` for the `.appcache` file when generating the html file.

In the config, you can see the `publicPath` is `/somewhere/` and inside the generated `index.html` file you can see that this path is used for the bundle.js file but not the index.appcache file.
