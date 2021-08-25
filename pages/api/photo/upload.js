import { client } from "@/mongodb/mongodbClient"

export default async function handler(req, res) {

    const photoData = req.body

    try {
        await client.connect()
        await client.db(process.env.MONGODB_DATABASE).collection("photoAlbum").insertOne({ ...photoData, createdDate: new Date() })
        res.status(200).json({ message: "Ok." })
    } catch (e) {
        console.log(e)
        res.status(400).end()
    } finally {
        await client.close()
        res.status(200).end()
    }
}