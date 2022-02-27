import { RootStateOrAny } from "react-redux";

export const getState = (state: RootStateOrAny) => state.auth;

export const getUser = (state: RootStateOrAny) => state.auth.user;
