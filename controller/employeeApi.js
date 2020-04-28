const employeeModel = require('../modules/exportemployeeModel');
class employeeApi {
  static async getAll(ctx) {
    let req = ctx.request.body;
    try {
      let data = await employeeModel.getAll(req);
      console.log(`结果${Object.values(data)}`)
      ctx.response.status = 200;
      ctx.body = {
        code: 200,
        msg: '查询成功',
        data
      };
    } catch (error) {
      ctx.response.status = 412;
      ctx.body = {
        code: 412,
        msg: '查询失败',
        data: error
      };
    }
  }
  static async add(ctx) {
    let req = ctx.request.body;
    if (req.name && req.sex && req.telephone && req.education && req.birth) {
      console.log(`${req.name}`)
      try {
        let ret = await employeeModel.add(req);
        let data = await employeeModel.getById(ret.id);
        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          msg: '创建成功',
          data
        };
      } catch (error) {
        ctx.response.status = 412;
        ctx.body = {
          code: 412,
          msg: '创建失败',
          data: error
        };
      }
    } else {
      ctx.response.status = 416;
      ctx.body = {
        code: 416,
        msg: '添加参数不全'
      };
    }
  }
  static async getById(ctx) {
    let id = ctx.params.id;
    if (id) {
      try {
        let data = await employeeModel.getById(id);
        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          msg: '查询成功',
          data
        };
      } catch (error) {
        ctx.response.status = 412;
        ctx.body = {
          code: 412,
          msg: '查询失败',
          data: error
        };
      }
    } else {
      ctx.response.status = 416;
      ctx.body = {
        code: 416,
        msg: '查询参数为空'
      };
    }
  }
  static async edit(ctx) {
    let req = ctx.request.body;
    if (req.name && req.sex && req.telephone && req.education && req.birth) {
      try {
        let ret = await employeeModel.edit(req);
        console.log(typeof ret)
        let data = await employeeModel.getById(req.id);
        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          msg: '修改成功',
          data
        };
      } catch (error) {
        ctx.response.status = 412;
        ctx.body = {
          code: 412,
          msg: '修改失败',
          data: error
        };
      }
    } else {
      ctx.response.status = 416;
      ctx.body = {
        code: 416,
        msg: '参数不全'
      };
    }
  }
  static async delete(ctx) {
    let id = ctx.params.id;
    if (id) {
      try {
        let data = await employeeModel.delete(id);
        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          msg: '删除成功'
        };
      } catch (error) {
        ctx.response.status = 412;
        ctx.body = {
          code: 412,
          msg: '删除失败',
          data: error
        };
      }
    } else {
      ctx.response.status = 416;
      ctx.body = {
        code: 416,
        msg: '删除参数为空'
      };
    }
  }
}
module.exports = employeeApi