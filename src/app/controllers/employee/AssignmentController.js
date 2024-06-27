const Code = require('../../constants/CodeConstant.js');

const AssignmentService = require('../../services/AssignmentService.js');

const employeeAcceptOrder = async (req, res, next) => {
    data = req.body;
    try {
        let result = await AssignmentService.employeeAcceptOrder(data, next);
        let success = {
            code : Code.SUCCESS,
            message: "Thiết lặp nhiệm vụ thành công",
            data: result
        }
        res.send(success)
    } catch (error) {
        next(error);
    }
}

module.exports = {employeeAcceptOrder};