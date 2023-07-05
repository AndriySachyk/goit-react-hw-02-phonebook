import { nanoid } from "nanoid"
import { Component, createElement } from "react"

export class App extends Component {
  
state = {
  name: '',
  number: '',
  contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
}

  
  handleInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
    console.log(this.state)
  
  }
  
     
  
  
  createContact = (e) => {
    e.preventDefault()
    // const oldState = {}
    // console.log(oldState)
   
      this.setState(() => {
          this.state.contacts.map(contact => {
              contact.id = nanoid()
          })
            });
        this.state.contacts.find(
          ({ name }) => name.toLowerCase() === this.state.name.toLowerCase()
          )
          ? alert(`${this.state.name} is already in contacts.`)
          : this.state.contacts.push({id:nanoid(), name:this.state.name, number: this.state.number});
          
          
        this.setState({
          name: '',
          number: '' 
        })
     
          console.log(this.state)

  }

  



  createElementContact = ({state}) => {
    console.log(this.state.contacts)
     state.contacts.map(contact => {
       return `<li><p>${contact.name}</p><p>${contact.number}</p></li>` 
   })
 }



  render() {
    return(
      <div>
        <h2>Phonebook</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleInput}
            value={this.state.name}
            />
          <label htmlFor="number">Number</label>
          <input
            type="tel"
            name="number"
            id="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleInput}
            value={this.state.number}
          />
          <button type="submit" onClick={this.createContact}>Add Contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {this.createElementContact()}
       
        </ul>
      </div>
    );
    
  }
  

  
};
