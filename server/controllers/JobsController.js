import { jobsService } from "../services/JobsService";
import BaseController from "../utils/BaseController";


// export class JobsController extends BaseController{
//     constructor(){
//         super("api/jobs")
//         this.router
//         .get("", this.getAll)
//         .post("", this.create)
//         .delete("/:id", this.delete)
//         .put("/:id", this.edit)
//         .get("/:id", this.getOne)
//     }
//     async getAll(req, res, next) {
//         try {
//             res.send(await jobsService.find(req.query))
//         } catch (error) {
//             next(error)
//         }
//     }

//     async create(req, res, next){
//         try {
//             res.send(await jobsService.create(req.body))
//         } catch (error) {
//             next(error)
//         }
//     }

//     async delete(req, res, next){
//         try {
//             res.send(await jobsService.delete(req.params.id))
//         } catch (error) {
//             next(error)
//         }
//     }

//     async edit(req, res, next){
//         try {
//             res.send(await jobsService.edit(req.params.id, req.body))
//         } catch (error) {
//             next(error)
//         }
//     }

//     async getOne(req, res, next){
//         try {
//             res.send(await jobsService.getOne(req.params.id))
//         } catch (error) {
//             next(error)
//         }
//     }
// }

// export class JobsController extends BaseController{
//     constructor(){
//          super("api/jobs")
//          this.router
//          .get("", this.getAll)
//          .post("", this.create)
//          .get("/:id", this.getOne)
//          .delete("/:id", this.delete)
//          .put("/:id", this.edit)
//     }

//     async getAll(req, res, next){
//         try {
//             return res.send(await jobsService.find(req.query))
//         } catch (error) {
//             next(error)
//         }
//     }

//     async getOne(req, res, next){
//         try {
//             return res.send(await jobsService.getOne(req.params.id))
//         } catch (error) {
//             next(error)
//         }
//     }

//     async create(req, res, next){
//         try {
//             return res.send(await jobsService.create(req.body))
//         } catch (error) {
//             next(error)
//         }
//     }

//     async delete(req, res, next){
//         try {
//             return res.send(await jobsService.delete(req.params.id))
//         } catch (error) {
//             next(error)
//         }
//     }

//     async edit(req, res, next){
//         try {
//             return res.send(await jobsService.edit(req.params.id, req.body))
//         } catch (error) {
//             next(error)
//         }
//     }
// }


export class JobsController extends BaseController{
    constructor(){
        super("api/jobs")
        this.router
        .get("", this.getAll)
        .post("", this.create)
        .delete("/:id", this.delete)
        .put("/:id", this.edit)
        .get("/:id", this.getOne)
    }

    async getAll(req, res, next){
        try {
            return res.send(await jobsService.find(req.query))
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next){
        try {
            return res.send(await jobsService.create(req.body))
        } catch (error) {
            next(error)
        }
    }

    async edit(req, res, next){
        try {
            return res.send(await jobsService.edit(req.params.id, req.body))
        } catch (error) {
            next(error)
        }
    }

    async getOne(req, res, next){
        try {
            return res.send(await jobsService.getOne(req.params.id))
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next){
        try {
            return res.send(await jobsService.delete(req.params.id))
        } catch (error) {
            next(error)
        }
    }
}