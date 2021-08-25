import { SinkRepair } from "./SinkRepair.js"
import { fetchRequests } from "./dataAccess.js"
//import { ServiceForm } from "./ServiceForm.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = SinkRepair()
        }
    )
}


render()

