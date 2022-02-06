module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],

  plugins: [
    ["prismjs", {
      "languages": ["javascript", "css", "markup", "bash"],
      "plugins": [
        "line-numbers",
        "inline-color",
        "autolinker",
        "highlight-keywords",
        "toolbar",
        "show-language",
      ],
      "theme": "okaidia", //主体名称
      "css": true
    }]
  ]
  
}
