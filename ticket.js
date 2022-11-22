  class TicketManager {
    #precioBaseDeGanancia
    constructor(){
        this.events = []
        this.#precioBaseDeGanancia = 0.15
    
    }

    getEvents = () => {return this.events}
    getNextID = () => {
        const count = this.events.length

        if (count > 0){
            const lastEvent = this.events[count-1]
            const id = lastEvent.id + 1

            return id
        } else{
            return 1
        }
    }
    addEvent = (name, place, price, capacity, date) => {
        const id = this.getNextID()
        const event = {
            id,
            name,
            place,
            price: price * (1+ this.#precioBaseDeGanancia),
            capacity: capacity ?? 50,
            date: date ?? new Date().toLocaleDateString(),
            participantes: []
        }

        this.events.push(event)
    }
 }

 const ticketManager = new TicketManager()
 ticketManager.addEvent("bad bunny", "Medellin", 120, 0, 0)
 ticketManager.addEvent("AC DC", "Miami", 2000, 0, 0)
 console.log(ticketManager.getEvents());