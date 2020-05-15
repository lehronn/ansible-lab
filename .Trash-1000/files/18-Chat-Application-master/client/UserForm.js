import React, {Component} from 'react';

import styles from './UserForm.css';

class UserForm extends Component {
  constructor(props) {
    super(props);
    const backgroundQuantity = 4; //ile będzie zdjęć do losowania?
    let backgroundCounter = Math.ceil( Math.random() * backgroundQuantity ); //losowanie zdjęcia do wyświetlenia.
    this.state = {name: '', backgroundCounter: backgroundCounter}; //przekazanie stanu z imieniem i wylosowanym zdjęciem do wyświetlenia.
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onUserSubmit(this.state.name);
  }

  handleChange(e) {
    this.setState({ name : e.target.value });
  }

  render() {
    let currentBackground = 'images/'+ this.state.backgroundCounter +'.jpg'; //adres wylosowanego zdjęcia przekazujemy do zmiennej.

//w <form style=> jest przekazanie zmiennej do propsa. `${}` to template z ES6.
    return(
      <form style={{background:`url(${currentBackground})`, backgroundSize: 'cover'}} className={styles.UserForm} onSubmit={e => this.handleSubmit(e)}>
        <input
          className={styles.UserInput}
          placeholder='Your name is?'
          onChange={e => this.handleChange(e)}
          value={this.state.name}
        />
      </form>
    );
  }
}

export default UserForm;

// Do propsa onSubmit podpięliśmy metodę handleSubmit, która zatwierdza
// formularz modyfikując tym samym stan w komponencie App. Należy zauważyć,
// że komponent UserForm posiada własny stan, który stworzyliśmy w konstruktorze
// (this.state = {name: ''}) i nie należy go mylić ze stanem w
// komponencie App. Komponent input wyświetla wartość z props value,
// a skoro podpięliśmy do niego this.state.name, to jego początkowa wartość
// to puste pole. Musimy zaimplementować metodę, dzięki której będziemy
// mogli modyfikować ten stan, stąd props onChange do którego podpięliśmy
// metodę handleChange.
//
// Metoda handleChange odbiera wartość, którą wpisujemy w input, który
// jest połączony zdarzeniem (ang. event) wpisywania, a następnie modyfikuje
// odpowiednio stan zmieniając tym samym tekst widoczny w inpucie.
//
// W metodzie handleSubmit musimy zapobiec domyślnemu zachowaniu, jakie oferuje
// formularz i napisać swoje - wykorzystujemy do tego metodę e.preventDefault().
// Następnie wywołujemy metodę onUserSubmit, która została podpięta w do
// omponentu UserForm, przekazując do niej to, co wpisaliśmy w formularzu.
