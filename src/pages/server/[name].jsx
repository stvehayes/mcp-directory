import { useParams } from '../../router'
import { servers, featured } from '../../data/Data.js'
import ServerDetail from '../ServerDetail.jsx'

function slugify(str) {
    return str
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '')
}

export default function ServerDetailPage() {
    const { name } = useParams()
    // Search both servers and featured arrays
    const allServers = [...servers, ...featured]
    const server = allServers.find(
        (s) => slugify(s.name) === name.toLowerCase()
    )
    return <ServerDetail server={server} />
}
