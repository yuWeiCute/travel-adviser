# Life Circle 生活圈应用

## Screenshot 项目截图
[<img src="/.github/pics/demo.webp">](https://lifecircle.netlify.app/ "Go to demo website")

## Demo
[**Check out the demo**](https://lifecircle.netlify.app/)

## Introduction
Build and Deploy an advanced Travel Companion Application using Google Maps. With Geolocation, Google Maps API, Searching for places, Fetching restaurants, hotels and attractions based on location from specialized Rapid APIs, data filtering and much more.  
使用谷歌地图构建并部署高级旅行伴侣应用程序。使用地理定位、谷歌地图API、搜索地点、从专门的快速API获取基于位置的餐厅、酒店和景点、数据过滤等等。

- Advanced React Best Practices such as folder & file structure, hooks and refs  
- 前端采用React, Hooks, refs等实现高性能、可复用、易追溯的项目代码。  
  
- Creating a User Interface using Material UI\
- 使用Material UIb编写样式  
  
- Working with Google Maps API
- 使用谷歌地图API  
  
- Fetching data from unlimited sources using RapidAPI
- 使用RapidAPI获取数据

[RapidAPI](https://rapidapi.com/hub?utm_source=youtube.com/JavaScriptMastery&utm_medium=DevRel&utm_campaign=DevRel)
[Life Circle API](https://rapidapi.com/apidojo/api/travel-advisor?utm_source=youtube.com/JavaScriptMastery&utm_medium=DevRel&utm_campaign=DevRel)
[Open Weather Map API](https://rapidapi.com/community/api/open-weather-map?utm_source=youtube.com/JavaScriptMastery&utm_medium=DevRel&utm_campaign=DevRel)

Setup: run ```npm i && npm start``` to start the development server
开始：输入```npm i && npm start```来启动项目

## Technology Stack 技术栈
 > React 

 > Material UI

 > Axios

 > RapidAPI 

 > ...

## Project Structure 项目结构
```bash
├──public
│  ├──index.html             // 项目首页
│  └──logo.png               // 图标
└──src                       // 项目源文件
    ├──api                   // 请求接口
    │  └──travelAdvisorAPI.js
    ├──components            
    │  ├──Header             // Header
    │  │  ├──Header.js
    │  │  └──styles.js
    │  ├──List               // 表单
    │  │  ├──List.js
    │  │  └──styles.js
    │  ├──Map                // 地图
    │  │  ├──Map.js
    │  │  └──styles.js
    │  ├──PlaceDetails       // 表单Item
    │  │  ├──PlaceDetails.js
    │  │  └──styles.js
    ├──App.js
    ├──index.js
    └──mapStyles.js          // 地图样式
│  .env                      // 环境变量配置
│  .eslintrc.js              // eslint配置
│  .gitignore                // git忽略配置
│  package-lock.json
│  package.json              // 依赖配置
│  yarn.lock  
```