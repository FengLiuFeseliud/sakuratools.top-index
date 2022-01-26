import { createApp } from 'vue'
import App from './App'
import router from "./router"
import "./assets/main.css"

const app =  createApp(App)
// app.config.devtools = true

app.use(router)

app.mount('#App');
console.log([
    "  _____       _                 _______          _      _",
    " / ____|     | |               |__   __|        | |    | |",
    "| (___   __ _| | ___   _ _ __ __ _| | ___   ___ | |___ | |_ ___  _ __",
    " \\___ \\ / _` | |/ / | | | '__/ _` | |/ _ \\ / _ \\| / __|| __/ _ \\| '_ \\",
    " ____) | (_| |   <| |_| | | | (_| | | (_) | (_) | \\__ \\| || (_) | |_) |",
    "|_____/ \\__,_|_|\\_\\\\__,_|_|  \\__,_|_|\\___/ \\___/|_|___(_)__\\___/| .__/",
    "                                                                | |",
    "                                                                |_|",
    "                                  SakuraTools.top 2022 by FengLiuFeseliud"
].join("\n"));
