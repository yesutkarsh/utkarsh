export const dynamic = 'force-dynamic' // defaults to auto
import { Projects } from "./data"
export async function GET(request) {
    return Response.json(Projects)
}


