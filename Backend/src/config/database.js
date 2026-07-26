const mongoose = require("mongoose")



async function connectToDB() {

    try {
        await mongoose.connect(process.env.MONGO_URI)

        console.log("Connected to Database")
    }
    catch (err) {
        console.error("❌ Failed to connect to MongoDB:", err.message)
        process.exit(1)
    }

    mongoose.connection.on("error", (err) => {
        console.error("MongoDB connection error after initial connect:", err.message)
    })
}

module.exports = connectToDB