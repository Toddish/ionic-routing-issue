/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */
/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';
/* Theme variables */
import './theme/variables.css';

import { Redirect, Route } from 'react-router-dom';

import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { useUserContext } from './contexts/user';
import AuthPage from './pages/auth-page';
import DummyPage from './pages/dummy-page';

setupIonicReact();

const App: React.FC = () => {
  const { user } = useUserContext();
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/auth" exact>
            <AuthPage />
          </Route>
          <Route path="/feed" exact>
            {user ? <DummyPage page="feed" /> : <Redirect to="/auth" />}
          </Route>
          <Route path="/profile" exact>
            {user ? <DummyPage page="profile" /> : <Redirect to="/auth" />}
          </Route>
          <Route exact path="/">
            <Redirect to="/auth" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
