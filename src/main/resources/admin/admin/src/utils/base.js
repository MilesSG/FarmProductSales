const base = {
    get() {
        return {
            url : "http://localhost:8080/lelenongchanpinxiaoshou/",
            name: "lelenongchanpinxiaoshou",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/lelenongchanpinxiaoshou/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "森屿线上农副产品销售系统设计与实现"
        } 
    }
}
export default base
