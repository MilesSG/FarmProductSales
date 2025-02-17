# 乐乐农产品销售系统 🌾

## 项目简介 📋
乐乐农产品销售系统是一个基于Spring Boot + MyBatis Plus的农产品在线销售平台，提供农产品展示、销售、管理等功能。

## 技术栈 🛠️
- 后端框架：Spring Boot 2.2.2.RELEASE
- 持久层框架：MyBatis Plus 2.3
- 安全框架：Shiro 1.3.2
- 模板引擎：Thymeleaf
- 数据库：MySQL
- 工具库：
  - Apache POI 3.17 (Excel处理)
  - FastJSON 1.2.8
  - Hutool 4.0.12
  - 百度AI SDK 4.4.1

## 主要功能 ✨
- 用户管理 👥
  - 用户注册
  - 用户登录
  - 权限控制
- 商品管理 🛒
  - 商品分类
  - 商品上架
  - 商品编辑
  - 商品下架
- 订单管理 📦
  - 订单创建
  - 订单跟踪
  - 订单统计
- 数据导出 📊
  - Excel导出
  - 数据统计

## 环境要求 🔧
### 基础环境
- JDK 1.8+ (推荐1.8.0_271)
  - 配置JAVA_HOME环境变量
  - 配置Path环境变量
- Maven 3.5+ (推荐3.8.1)
  - 配置MAVEN_HOME环境变量
  - 配置Path环境变量
- MySQL 5.7+ (推荐5.7.36)
  - 确保开启远程访问权限
  - 默认端口3306

### 开发工具
- IDE：IntelliJ IDEA 2021.2+ (推荐Ultimate版本)
  - 安装Maven插件
  - 安装Lombok插件
  - 安装Spring Boot插件
- 数据库管理工具：Navicat Premium 15+ / MySQL Workbench 8.0+
- 接口测试工具：Postman 8.0+ / Apifox

### 浏览器要求
- Chrome 90+
- Firefox 88+
- Edge 90+
- Safari 14+

### Node.js环境（前端开发）
- Node.js 14+ (推荐14.17.0)
  - 下载地址：https://nodejs.org/
  - Windows系统选择.msi安装包
  - 安装时勾选"Automatically install the necessary tools"
- npm 6+ (推荐6.14.13，Node.js安装时会自带)
- Vue CLI
  ```bash
  # 安装Vue CLI
  npm install -g @vue/cli
  
  # 验证安装
  vue --version
  ```

### 前端开发环境配置步骤
1. 安装Node.js
   - 下载并运行Node.js安装程序
   - 验证安装：
     ```bash
     node --version
     npm --version
     ```
   - 配置npm镜像（推荐使用淘宝镜像）：
     ```bash
     npm config set registry https://registry.npmmirror.com
     ```

2. 安装Vue开发工具
   - 安装Vue CLI：
     ```bash
     npm install -g @vue/cli
     ```
   - 安装Vue开发者工具（Vue Devtools）浏览器插件

3. IDE配置（VS Code推荐插件）
   - Vetur (Vue工具集)
   - Vue VSCode Snippets
   - ESLint
   - Prettier
   - Auto Close Tag
   - Auto Rename Tag

4. 前端项目启动
   ```bash
   # 进入前端项目目录
   cd src/main/resources/admin/admin
   
   # 安装依赖
   npm install
   
   # 启动开发服务器
   npm run serve
   ```

### 系统要求
- Windows 10/11 (推荐Windows 10专业版)
  - 至少8GB RAM
  - 至少100GB可用磁盘空间
- macOS Catalina (10.15) 或更高版本
- Linux (Ubuntu 18.04+, CentOS 7+)

### 网络要求
- 稳定的互联网连接
- 确保Maven仓库可访问
- 确保npm仓库可访问

### 推荐的开发环境配置步骤
1. 安装JDK 1.8
   - 下载并安装JDK
   - 配置环境变量：
     ```
     JAVA_HOME=C:\Program Files\Java\jdk1.8.0_271
     Path=%JAVA_HOME%\bin
     ```
   - 验证：`java -version`

2. 安装Maven
   - 下载并解压Maven
   - 配置环境变量：
     ```
     MAVEN_HOME=C:\Program Files\Apache\maven
     Path=%MAVEN_HOME%\bin
     ```
   - 验证：`mvn -version`

3. 安装MySQL
   - 下载并安装MySQL 5.7
   - 记住root密码
   - 配置允许远程访问
   - 验证：`mysql -u root -p`

4. 安装IDEA
   - 下载并安装IntelliJ IDEA Ultimate
   - 安装必要插件：
     - Lombok
     - Spring Boot
     - Maven Helper
     - MySQL Database

5. 配置Maven镜像
   - 修改settings.xml，添加阿里云镜像：
     ```xml
     <mirror>
       <id>alimaven</id>
       <name>aliyun maven</name>
       <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
       <mirrorOf>central</mirrorOf>
     </mirror>
     ```

## 部署步骤 📥

### 1. 数据库配置
1. 创建数据库
```sql
CREATE DATABASE lelenongchanpinxiaoshou DEFAULT CHARACTER SET utf8mb4;
```
2. 导入项目中的SQL文件

### 2. 修改配置
1. 修改`application.yml`中的数据库连接信息
```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/lelenongchanpinxiaoshou?useUnicode=true&characterEncoding=UTF-8&serverTimezone=Asia/Shanghai
    username: root
    password:888999
```

### 3. Maven配置
1. 确保`settings.xml`中配置了阿里云镜像
2. 执行以下命令安装依赖：
```bash
mvn clean install -DskipTests
```

### 4. 启动项目
1. 运行主类`LelenongchanpinxiaoshouApplication`
2. 访问 http://localhost:8080/lelenongchanpinxiaoshou/front/index.html
3. 后台登录页面 http://localhost:8080/lelenongchanpinxiaoshou/admin/dist/index.html
   账号/密码均是admin


## 开发建议 💡
1. 建议使用IDEA开发，方便调试
2. 确保Maven配置正确，使用阿里云镜像源
3. 遵循代码规范，保持代码整洁

## 常见问题 ❓
1. Maven依赖下载失败
   - 检查Maven配置
   - 确保网络连接正常
   - 尝试清理Maven缓存

2. 项目启动失败
   - 检查数据库配置
   - 确保端口未被占用
   - 查看日志定位问题

## 项目结构 📁
```
lelenongchanpinxiaoshou
├── src/main/java
│   ├── com.controller    // 控制器
│   ├── com.entity       // 实体类
│   ├── com.service      // 服务层
│   ├── com.dao          // 数据访问层
│   └── com.utils        // 工具类
├── src/main/resources
│   ├── mapper          // MyBatis映射文件
│   ├── static          // 静态资源
│   └── templates       // 页面模板
```