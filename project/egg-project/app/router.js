'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/login', controller.user.login);//登陆
  router.post('/register', controller.user.register);//注册
  router.get('/web/userlist', controller.user.list);//用户列表
  router.put('/web/black', controller.user.black);//用户加入黑名单


  router.get('/person/list', controller.transfer.list);//旅游意向数据
  router.post('/transfer', controller.transfer.index);//提交信息
  router.get('/collect', controller.collect.index);//select框数据
  router.get('/product/list', controller.product.list);//旅游数据
  router.post('/product/screen', controller.product.screen);//筛选旅游数据
  router.post('/product/list', controller.product.detail);  //产品详情数据
  router.get('/blog/list', controller.blog.list);//blog页面数据
  router.post("/blog/search", controller.blog.search);//blog页面模糊搜索
  router.post('/blog/listFilter', controller.blog.filter);//blog页面数据的筛选



  router.post('/crm/login', controller.crm.user.login);  //crm登陆

  router.get('/crm/menu', controller.crm.menu.index);//左侧列表

  router.get('/crm/userlist', controller.crm.user.list);//职员列表
  router.post('/crm/blackuser', controller.crm.user.black);//拉黑职员
  router.post('/crm/useradd', controller.crm.user.add);//添加职员
  router.put('/crm/userreset', controller.crm.user.updata);//编辑职员
  router.post('/crm/usersearch', controller.crm.user.search);//筛选职员

  router.get('/crm/rolelist', controller.crm.role.list);//角色列表
  router.delete('/crm/roledelete', controller.crm.role.remove);//删除角色
  router.post('/crm/roleadd', controller.crm.role.add);//添加角色
  router.get('/crm/roletree', controller.crm.role.treelist);//role角色tree列表
  router.post('/role/rolemenu', controller.crm.role.menu);//获取角色所对应的列表
};
