import "bootstrap/dist/css/bootstrap.css";
import * as React from "react";
import { hot } from "react-hot-loader";
import LabeledComponent from "./labeled/labeled-component";
import ExplorerButtons from "./explorer-buttons-component";
import UserStateComponent from "./user-state-component";
import { Actions } from "./actions";
import { State } from "../state";

export type ExplorerState = {
  data: State;
  isLoading: boolean;
};

interface Props {
  state: ExplorerState;
  actions: Actions;
}

export const ExplorerComponent = (props: Props) => {
  const { state, actions } = props;
  return (
    <div>
      <h1>Welcome to Unmock API labeling explorer!</h1>
      {state.data === null || state.isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <UserStateComponent userState={state.data.userState} />
          <LabeledComponent
            actions={actions}
            userState={state.data.userState}
            labeled={state.data.labeled}
          />
          <ExplorerButtons actions={actions} labeled={state.data.labeled} />
        </div>
      )}
    </div>
  );
};

export default hot(module)(ExplorerComponent);
