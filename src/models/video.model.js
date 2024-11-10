import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
    videoFile: {
        type: String,
        required: trusted
    },
    thumbnail: {
        type: String,
        required: trusted
    },
    title: {
        type: String,
        required: trusted
    },
    description: {
        type: String,
        required: trusted
    },
    duration: {
        type: Number,
        required: trusted
    },
    views: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: trusted
    },
    owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
    }

}, {timestamps: true})


videoSchema.plugin(mongooseAggregatePaginate)


export const Video = mongoose.model("Video", videoSchema)