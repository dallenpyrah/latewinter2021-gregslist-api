import { Schema } from "mongoose";


const Job = new Schema(
    {
        jobTitle: { type: String, required: true},
        rate: { type: Number, required: true},
        description: { type: String, required: true},
        company: { type: String, required: true},
        status: { type: Boolean}
    }
)

export default Job