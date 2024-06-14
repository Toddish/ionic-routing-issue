import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  IonContent, IonPage, useIonViewDidEnter, useIonViewDidLeave, useIonViewWillEnter,
  useIonViewWillLeave
} from '@ionic/react';

import { useUserContext } from '../../contexts/user';

const DummyPage: React.FC<{ page: string }> = ({ page }) => {
  const { user, logOut } = useUserContext();
  const history = useHistory();

  const onLogOut = () => {
    logOut();
    history.push("/auth");
  };

  useIonViewWillEnter(() => console.log(`Dummy page ${page} will enter`));
  useIonViewDidEnter(() => console.log(`Dummy page ${page} did enter`));
  useIonViewWillLeave(() => console.log(`Dummy page ${page} will leave`));
  useIonViewDidLeave(() => console.log(`Dummy page ${page} did leave`));

  return (
    <IonPage>
      <IonContent fullscreen>
        <p>Dummy page - {page}</p>
        <a onClick={() => history.push("/feed")}>Go to feed</a>
        <br />
        <a onClick={() => history.push("/profile")}>Go to profile</a>
        <br />
        <br />
        <br />
        {user && <a onClick={onLogOut}>Log out</a>}
      </IonContent>
    </IonPage>
  );
};

export default DummyPage;
