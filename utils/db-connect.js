import mongoose from 'mongoose'

let url = process.env.dbUrl;
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = {
        conn: null,
        promise: null
    };
}



export default async function dbConnect() {
    if (cached.com) {
        return cached;
    }
    if (!cached.promise) {
        cached.promise = mongoose
            .connect(url, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            })
            .then((mongoose) => mongoose)
    }
    cached.conn = await cached.promise;
    return cached.conn;
}