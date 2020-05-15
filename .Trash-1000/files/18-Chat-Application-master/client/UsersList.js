import React from 'react';

import styles from './UsersList.css';

const UsersList = props => (
  <div className={styles.Users}>
    <div className={styles.UsersOnline}>
      {props.users.length} people online
    </div>
    <ul className={styles.UsersList}>
      {
        //metoda .map tworzy tablicę zawierającą elementy które są wynikiem
        //działania wybranych instrukcji (return jsx) na obiekty innej tablicy (user)
        props.users.map((user) => {
          return (
            <li key={user.id} className={styles.UserItem}>
              {user.name}
            </li>
          );
        })
      }
    </ul>
  </div>
);

export default UsersList;

// Komponenty prezentacyjne nie mają metody render - są one po prostu funkcjami,
// które przyjmują na wejście propsy, a na wyjściu odpowiednio renderują komponent.
// const UsersList = props => ( // to co trzeba wyrenderować );

// Props key na elemencie li jest wymagany, ponieważ iterujemy po liście 
// użytkowników. Jest to potrzebne algorytmowi, który działa 'pod maską' w
// Reakcie, aby nie przerenderowywać niepotrzebnie elementów,
// które nie uległy zmianie.
