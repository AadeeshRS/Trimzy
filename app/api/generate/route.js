import clientPromise from "@/lib/mongodb"

export async function POST(request) {
    try {
        const body = await request.json()
        const client = await clientPromise;
        const db = client.db("trimzy")
        const collection = db.collection('url')

        // Check if the short url exists
        const doc = await collection.findOne({ shorturl: body.shorturl })
        if (doc) {
            return Response.json({ success: false, error: true, message: "URL already exists!" })
        }

        await collection.insertOne({
            url: body.url,
            shorturl: body.shorturl
        })

        return Response.json({ success: true, error: false, message: 'url generated successfully' })
    } catch (error) {
        console.error("API Error:", error)
        return Response.json({ success: false, error: true, message: error.message }, { status: 500 })
    }
}