const messages = [] // set "messages" to empty array 
let id = 0 // set "id" to number 0

module.exports = { // export objects
  create: (req, res) => { // create create method method
    const {text, time} = req.body // destructure req.body into "time" and "text" variables
    messages.push({ id, text, time }) // push "id", text, time to end of array
    id++ // increment id
    res.status(200).send(messages) // return status 200 and the new messages array
  },

  read: (req, res) => { // create read method
    res.status(200).send(messages) // give'n her all she's got cap'n!
  },
  
  update: (req, res) => { // create update method
    const {text} = req.body // destructure req.body into "text" variable
    const updateId = req.params.id // get whatever this is and set it to id
    const messageIndex = messages.findIndex(message => message.id == updateId)
    let message = messages[messageIndex]

    messages[messageIndex] = {
      id: message.id,
      text: text || message.text,
      time: message.time
    }

    res.status(200).send(messages)
  },

  delete: (req, res) => { // create delete method
    const deleteId = req.params.id 
    messageIndex = messages.findIndex(message => message.id == deleteId)
    messages.splice(messageIndex, 1)
    res.status(200).send(messages)
  }
}
