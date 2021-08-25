import { client } from "@/mongodb/mongodbClient"

export default async function handler(req, res) {
    try {
        await client.connect()
        const photos = await client.db(process.env.MONGODB_DATABASE).collection("photoAlbum").
            find({}, { sort: { createdDate: -1 } }).toArray()
        res.status(200).json(JSON.parse(JSON.stringify(photos)))
    } catch (e) {
        console.log(e)
        res.status(400).end()
    } finally {
        await client.close()
        res.status(200).end()
    }
}