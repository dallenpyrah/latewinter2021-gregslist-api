import express from "express";
import { housesService } from "../services/HousesService";
import BaseController from "../utils/BaseController";


// export class HousesController extends BaseController {
//     constructor() {
//         super("api/houses");
//         this.router
//           .get("", this.getAll)
//           .post("", this.create)
//           .delete("/:id", this.delete)
//           .put("/:id", this.edit)
//           .get("/:id", this.getOne)
//       }

//     async create(req, res, next){
//         try {
//             let house = await housesService.create(req.body)
//             res.status(201).send(house)
//         } catch (error) {
//             next(error)
//         }
//     }

//     async getAll(req, res, next){
//         try {
//             return res.send(await housesService.find(req.query));
//         } catch (error) {
//             next(error)
//         }
//     }

//     async delete(req, res, next){
//         try {
//             res.send(await housesService.delete(req.params.id))
//         } catch (error) {
//             next(error)
//         }
//     }

//     async edit(req, res, next){
//         try {
//             res.send(await housesService.edit(req.params.id, req.body))
//         } catch (error) {
//             next(error)
//         }
//     }

//     async getOne(req, res, next){
//         try {
//             res.send(await housesService.getOne(req.params.id))
//         } catch (error) {
//             next(error)
//         }
//     }
// }

export class HousesController extends BaseController{
    constructor(){
        super("api/houses")
        this.router
        .get("", this.getAll)
        .post("", this.create)
        .get("/:id", this.getOne)
        .put("/:id", this.edit)
        .delete("/:id", this.delete)
    }

    async getAll(req, res, next){
        try {
            return res.send(await housesService.find(req.query))
        } catch (error) {
            next(error)
        }
    }

    async getOne(req, res, next){
        try {
            return res.send(await housesService.getOne(req.params.id))
        } catch (error) {
            next(error)
        }
    }

    async edit(req, res, next){
        try {
            return res.send(await housesService.edit(req.params.id, req.body))
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next){
        try {
            return res.send(await housesService.create(req.body))
        } catch (error) {
            next(error)
        }
    }

    async delete(req,res,next){
        try {
            return res.send(await housesService.delete(req.params.id))
        } catch (error) {
            next(error)
        }
    }
}