import posts from "~/data/db.json";
// const { find } = useStrapi4()
export default defineEventHandler(async (event) => {
    const method = event.req.method
    if (method=="GET") {
        return 'Huell'
    }
})