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
- JDK 1.8+
- Maven 3.5+
- MySQL 5.7+
- IDE推荐：IntelliJ IDEA

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
2. 访问 http://localhost:8080

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

# FarmProductSales
