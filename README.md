# 乐乐农产品销售系统 🌾

## 项目简介 📋
乐乐农产品销售系统是一个基于Spring Boot + MyBatis Plus的现代化农产品在线销售平台 🏪，致力于为农产品销售提供一站式解决方案。系统采用前后端分离架构，提供完整的农产品展示、销售、管理等功能 💫。

## 技术栈 🛠️
### 后端技术
- 核心框架：Spring Boot 2.2.2.RELEASE 🚀
- 持久层框架：MyBatis Plus 2.3 💾
- 安全框架：Shiro 1.3.2 🔐
- 模板引擎：Thymeleaf 📝
- 数据库：MySQL 🗄️

### 前端技术
- Vue.js 🎨
- Element UI 🎯
- Axios 📡
- Webpack 📦

### 工具库 🔧
- Apache POI 3.17 (Excel处理) 📊
- FastJSON 1.2.8 ⚡
- Hutool 4.0.12 🛠️
- 百度AI SDK 4.4.1 🤖

## 主要功能 ✨
### 用户端功能 👥
- 用户注册与登录 🔑
- 农产品浏览与搜索 🔍
- 购物车管理 🛒
- 订单管理 📦
- 收货地址管理 📍
- 个人中心 👤

### 商家端功能 🏪
- 商品管理 📝
  - 商品上架 ⬆️
  - 商品编辑 ✏️
  - 商品下架 ⬇️
  - 库存管理 📊
- 订单管理 📦
  - 订单处理 ✔️
  - 发货管理 🚚
  - 退款处理 💰

### 管理员功能 👨‍💼
- 用户管理 👥
- 商家管理 🏪
- 商品管理 🛍️
- 订单管理 📦
- 系统配置 ⚙️
- 数据统计 📊

## 环境要求 🔧
### 基础环境
- JDK 1.8+ (推荐1.8.0_271) ☕
  - 配置JAVA_HOME环境变量
  - 配置Path环境变量
- Maven 3.5+ (推荐3.8.1) 🏗️
  - 配置MAVEN_HOME环境变量
  - 配置Path环境变量
- MySQL 5.7+ (推荐5.7.36) 🗄️
  - 确保开启远程访问权限
  - 默认端口3306

### 开发工具 🔨
- IDE：IntelliJ IDEA 2021.2+ (推荐Ultimate版本) 💻
  - 安装Maven插件
  - 安装Lombok插件
  - 安装Spring Boot插件
- 数据库工具：Navicat Premium 15+ / MySQL Workbench 8.0+ 🗃️
- 接口测试：Postman 8.0+ / Apifox 🔌

### 前端开发环境 🎨
- Node.js 14+ (推荐14.17.0) 🟢
- npm 6+ (推荐6.14.13) 📦
- Vue CLI 🛠️

## 快速开始 🚀

### 1. 数据库配置 🗄️
```sql
CREATE DATABASE lelenongchanpinxiaoshou DEFAULT CHARACTER SET utf8mb4;
```
导入项目中的SQL文件

### 2. 修改配置 ⚙️
修改 `application.yml` 中的数据库连接信息：
```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/lelenongchanpinxiaoshou?useUnicode=true&characterEncoding=UTF-8&serverTimezone=Asia/Shanghai
    username: root
    password: 888999
```

### 3. 启动项目 🎯
1. 后端启动：运行 `LelenongchanpinxiaoshouApplication`
2. 前端启动：
   ```bash
   cd src/main/resources/admin/admin
   npm install
   npm run serve
   ```

### 4. 访问项目 🌐
- 前台访问地址：http://localhost:8080/lelenongchanpinxiaoshou/front/index.html
- 后台访问地址：http://localhost:8080/lelenongchanpinxiaoshou/admin/dist/index.html
- 默认管理员账号/密码：admin/admin

## 项目亮点 💡
- 前后端分离架构，提高开发效率 🔄
- 完善的权限管理系统 🔐
- 丰富的数据统计功能 📊
- 人性化的用户界面 🎨
- 完整的订单流程管理 📦
- 灵活的商品管理功能 🛍️

## 开发建议 💭
1. 推荐使用IDEA开发，提供完善的插件支持 💻
2. 确保Maven配置正确，使用阿里云镜像源加速依赖下载 🚀
3. 遵循代码规范，保持代码整洁 ✨
4. 做好代码版本控制，定期提交代码 📝

## 常见问题 ❓
1. Maven依赖下载失败 📥
   - 检查Maven配置
   - 确保网络连接正常
   - 尝试清理Maven缓存

2. 项目启动失败 🚫
   - 检查数据库配置
   - 确保端口未被占用
   - 查看日志定位问题

## 项目结构 📁
```
lelenongchanpinxiaoshou
├── src/main/java
│   ├── com.controller    // 控制器层 🎮
│   ├── com.entity       // 实体类层 📋
│   ├── com.service      // 服务层 ⚙️
│   ├── com.dao          // 数据访问层 💾
│   └── com.utils        // 工具类层 🔧
├── src/main/resources
│   ├── mapper          // MyBatis映射文件 🗺️
│   ├── static          // 静态资源文件 📂
│   └── templates       // 页面模板文件 📄
```

## 贡献指南 🤝
欢迎提交问题和改进建议！提交代码请遵循以下步骤：
1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 版权信息 ©️
Copyright © 2024 乐乐农产品销售系统