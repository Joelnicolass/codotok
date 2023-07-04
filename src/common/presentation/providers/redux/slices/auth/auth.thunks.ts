import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../../../../domain/entities/User.entity";
import { isExpired } from "react-jwt";

export const keyAuth = "nIhNcCAuKL12Aj";

export const getAuth = createAsyncThunk("auth/getAuth", async () => {
  try {
    const auth = localStorage.getItem(keyAuth);

    if (!auth) {
      return {
        token: null,
        user: null,
      };
    }

    const state = JSON.parse(auth);

    if (isExpired(state.token)) {
      localStorage.removeItem(keyAuth);

      return {
        token: null,
        user: null,
      };
    }

    return state;
  } catch (error) {
    return error;
  }
});

export const login = createAsyncThunk(
  "auth/login",
  async (data: { token: string; user: User }, thunkAPI) => {
    try {
      localStorage.setItem(keyAuth, JSON.stringify(data));

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    localStorage.removeItem(keyAuth);
  } catch (error) {
    return error;
  }
});

export const loginGoogle = createAsyncThunk(
  "auth/loginGoogle",
  async (data: { token: string; user: User }, thunkAPI) => {
    try {
      localStorage.setItem(keyAuth, JSON.stringify(data));

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
