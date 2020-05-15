import React, { Component } from 'react';
import io from 'socket.io-client';
import styles from './App.css';

import MessageForm from './MessageForm';
import MessageList from './MessageList';
import UsersList from './UsersList';
import UserForm from './UserForm';

const socket = io('/');

class App extends Component {
  constructor(props) {
    // Klasa App dziedziczy po klasie Component zaimportowanej z Reacta, więc
    // w konstruktorze musimy wywołać metodę super, która jest wywołaniem
    // konstruktora klasy rozszerzanej (Component).
    super(props);
    this.state = {users: [], messages: [], text: '', name: ''};
  }

  componentDidMount() {
  socket.on('message', message => this.messageReceive(message));
  socket.on('update', ({users}) => this.chatUpdate(users));
}

messageReceive(message) {
  const messages = [message, ...this.state.messages];
  this.setState({messages});
}
//Powyższa metoda odbiera wiadomość, a następnie aktualizuje stan wiadomości.
chatUpdate(users) {
  this.setState({users});
}
//Powyższa metoda wykonuje to samo, co poprzednia,
// tylko bez modyfikowania danych - w tym przypadku po prostu nie
// musimy martwić się dodawaniem usera do stanu. Serwer każdorazowo
// będzie wysyłał tablicę z aktualną listą użytkowników.
handleMessageSubmit(message) {
  const messages = [message, ...this.state.messages];
  this.setState({messages});
  socket.emit('message', message);
}
// Powyższa metoda zajmuje się wysyłaniem wiadomości do serwera.
// Zanim wyślemy wiadomość, aktualizujemy bieżący stan aplikacji,
// a następnie emitujemy wysyłaną wiadomość tak, aby wyświetliła się
// również reszcie użytkowników czatu.
handleUserSubmit(name) {
  this.setState({name});
  socket.emit('join', name);
}
// Powyższa metoda obsługuje tworzenie nowego użytkownika czatu, a następnie wysyła
// informację do serwera, który zajmuje się powiadomieniem reszty o fakcie, że
// dołączyliśmy do czatu.

  render() {
    // Jako że początkowy stan name w komponencie App ustawiliśmy na pusty string
    // (''), to przy starcie aplikacji pokaże nam się formularz do przekazania
    // nazwy użytkownika. Po jego uzupełnieniu i zatwierdzeniu, stan ulegnie
    // zmianie, przez co znowu wywołamy metodę render, która po ponownym
    // sprawdzeniu stanu wyrenderuje docelowy layout aplikacji. Ponadto, jeśli
    // spróbujemy zatwierdzić pustą nazwę użytkownika, to dalej będziemy widzieć
    // formularz.
    //
    //warunek tarnarny, tarnary operator, szybki IF po prostu.
    //<warunek_do_sprawdzenia> ? <przypadek_true> : <przypadek_false>
    return this.state.name !== '' ? this.renderLayout() : this.renderUserForm();
  }
    renderLayout() {
     return (

        <div className={styles.App}>
          <div className={styles.AppHeader}>
            <div className={styles.AppTitle}>
              ChatApp
            </div>
            <div className={styles.AppRoom}>
              App room
            </div>
          </div>
          <div className={styles.AppBody}>
            <UsersList
              users={this.state.users}
            />
            <div className={styles.MessageWrapper}>
              <MessageList
                messages={this.state.messages}
              />
              <MessageForm
                onMessageSubmit={message => this.handleMessageSubmit(message)}
                name={this.state.name}
              />
            </div>
          </div>
        </div>
     );
    }

    renderUserForm() {
      return (<UserForm onUserSubmit={name => this.handleUserSubmit(name)} />)
    }
};

export default App;

// MessageForm - przyjmuje dwa propsy:
// onMessageSubmit - czyli metodę, która ma zostać wywołana
//po zatwierdzeniu wiadomości. W tym miejscu od razu przypisujemy
//wywołanie metody handleMessageSubmit,
//która z kolei przyjmuje wiadomość, którą trzeba wysłać
// name - ten props trzyma informację na temat nazwy użytkownika,
//który wysyła wiadomość.
