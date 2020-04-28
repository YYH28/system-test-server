const router = require('koa-router')()
// 引入用户模型
const employeeApi = require('../controller/employeeApi')

// 获取员工表所有信息
router.post('/api/employee/getAll', employeeApi.getAll)
// 添加员工信息
router.post('/api/employee/add',employeeApi.add)
// 根据员工id查询信息
router.get('/api/employee/getById/:id',employeeApi.getById)
// 修改员工
router.post('/api/employee/edit',employeeApi.edit)
// 根据员工id删除信息
router.get('/api/employee/delete/:id',employeeApi.delete)

module.exports = router