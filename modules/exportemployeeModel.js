const db = require('../config/db') // 引入配置文件
const Sequelize = db.sequelize;
const employee = Sequelize.import("../schema/employee"); // 引入文章数据表模型文件
employee.sync({
	force: false
}); // 自动创建表 (加force:true, 会先删掉表后再建表)
class employeeModel {
// 统计总数
	static async count() {
		return await employee.count()
	}
	// 查找
	static async getAll(data) {
		return await employee.findAndCountAll(
			{
			offset: (data.num-1) * data.size ,
			limit: parseInt(data.size)
			}
		)
	}
	static async getById(id) {
		return await employee.findOne({
			where: {
				id
			}
		})
	}
	// 添加
	static async add(data) {
		return await employee.create({
			name: data.name,
			sex: data.sex,
			education: data.education,
			telephone: data.telephone,
			birth: data.birth,
			status: data.status
		})
	}
	// 修改
	static async edit(data) {
		return await employee.update({
			name: data.name,
			sex: data.sex,
			education: data.education,
			telephone: data.telephone,
			birth: data.birth,
			status: data.status
		}, {
			where: {
				id:data.id
			}
		}).then(()=>{
			console.log('ok')
		}).catch((error)=>{
			console.log(error)
		})
	}
	// 删除
	static async delete(id) {
		return await employee.destroy({
			where: {
				id
			}
		})
	}
}
module.exports = employeeModel