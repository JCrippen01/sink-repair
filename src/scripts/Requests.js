import { getRequests } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${requests.map((requestObject) => {
                return `<li class = "list" id = "${requestObject.id}" > "${requestObject.description}" </li>`
            
            })
            }
        </ul>
    `
    return html
}
