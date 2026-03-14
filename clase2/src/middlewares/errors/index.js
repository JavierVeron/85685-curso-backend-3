import EnumErrors from "../../services/errors/EnumsErrors.js";

export default (error, req, res, next) => {
    //console.log(error.cause);

    switch(error.code) {
        case EnumErrors.INVALID_TYPES:
            res.send({status:"Error", error:error.name});
            break;
        default:
            res.send({status:"Error", message:"Unkown error"})
            break;
    }
}