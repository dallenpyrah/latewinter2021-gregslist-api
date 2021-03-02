import { dbContext } from "../db/DbContext";


// class HousesService {
//     async getOne(id) {
//         return await dbContext.Houses.findById(id)
//     }
//     async edit(id, body) {
//         return await dbContext.Houses.findByIdAndUpdate(id, body, {new: true})
//     }
//     async delete(id) {
//         return await dbContext.Houses.findByIdAndDelete(id)
//     }

//     async create(newHouse){
//         return await dbContext.Houses.create(newHouse)
//     }

//     async find(query = {}){
//         return await dbContext.Houses.find(query)
//     }
// }

// export const housesService = new HousesService();

// class HousesService{ 
    
//     async find(query = {}){
//         return dbContext.Houses.find(query)
//     }

//     async getOne(id){
//         return dbContext.Houses.findById(id)
//     }

//     async edit(id, body){
//         return dbContext.Houses.findByIdAndUpdate(id, body)
//     }

//     async create(newHouse){
//         return dbContext.Houses.create(newHouse)
//     }

//     async delete(id){
//         return dbContext.Houses.findByIdAndDelete(id)
//     }
// }

// export const housesService = new HousesService();


class HousesService{ 
    async find(query={}){
        return await dbContext.Houses.find(query)
    }
    
    async getOne(id){
        return await dbContext.Houses.findById(id)
    }

    async create(newHouse){
        return await dbContext.Houses.create(newHouse)
    }

    async edit(id, body){
        return await dbContext.Houses.findByIdAndUpdate(id, body)
    }

    async delete(id){
        return await dbContext.Houses.findByIdAndDelete(id)
    }
}

export const housesService = new HousesService();