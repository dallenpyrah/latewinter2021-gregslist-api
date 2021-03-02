import { dbContext } from "../db/DbContext";


// class JobsService{
//     async getOne(id) {
//         return await dbContext.Jobs.findById(id)
//     }
//     async edit(id, body) {
//         return await dbContext.Jobs.findByIdAndUpdate(id, body, {new: true})
//     }
//     async delete(id) {
//         return await dbContext.Jobs.findOneAndDelete(id)
//     }
//     async create(newHouse) {
//         return await dbContext.Jobs.create(newHouse)
//     }
//     async find(query = {}) {
//         return await dbContext.Jobs.find(query)
//     }
    
// }

// export const jobsService = new JobsService();


class JobsService {

    async find(query={}){
        return await dbContext.Jobs.find(query)
    }

    async getOne(id){
        return await dbContext.Jobs.findById(id)
    }

    async delete(id){
        return await dbContext.Jobs.findByIdAndDelete(id)
    }

    async edit(id, body){
        return await dbContext.Jobs.findByIdAndUpdate(id, body)
    }

    async create(newJob){
        return await dbContext.Jobs.create(newJob)
    }
}

export const jobsService = new JobsService();