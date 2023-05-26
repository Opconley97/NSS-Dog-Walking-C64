import { getPets , getWalkers } from "./database.js"

const pets = getPets()


document.addEventListener(
    "click", 
    (clickEvent) => {
        const clickTarget = clickEvent.target
        const walkerId = clickTarget.dataset.walkerid

        const walkers = getWalkers()
        for (const walker of walkers) {
            if (parseInt(walkerId) === walker.id) {
                window.alert(`This pet is being walked by ${walker.name}`)
            }
        }
        
    }
)

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li data-walkerId="${pet.walkerId}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

