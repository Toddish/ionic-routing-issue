import React from 'react';
import { useHistory } from 'react-router-dom';

import { IonContent, IonPage } from '@ionic/react';

import { useUserContext } from '../../contexts/user';

const AuthPage: React.FC = () => {
  const { logIn } = useUserContext();
  const history = useHistory();

  const onLogIn = () => {
    logIn();
    history.push("/feed");
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <p>Auth page</p>
        <a onClick={onLogIn}>Log in</a>
      </IonContent>
    </IonPage>
  );
};

export default AuthPage;
