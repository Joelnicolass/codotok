import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../../../../domain/entities/User.entity";

export const keyAuth = "nIhNcCAuKL12Aj";

export const getAuth = createAsyncThunk("auth/getAuth", async () => {
  try {
    const auth = localStorage.getItem(keyAuth);

    if (auth) {
      return JSON.parse(auth);
    }

    return {
      token: null,
      user: null,
    };
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
