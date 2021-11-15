import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {sendEmail} from "./emailTemplaterAPI";
import {useDispatch} from "react-redux";

const initialState = {
  recipients: '',
  subject: '',
  body: `Hi {name},\n\nWe’d like to invite you to a {subject} on {date} at {location}.\n\nThanks,\n{signature}`,
  date: '',
  location: '',
  name: '',
  signature: '',
  isSuccess: false,
  isFail: false,
  step: 1,
};

export const sendNewEmail = createAsyncThunk(
  'emailTemplater/sendEmail',
  async (email) => {
    const response = await sendEmail(email);
    return response;
  }
);

export const emailTemplaterSlice = createSlice({
  name: 'emailTemplater',
  initialState,
  reducers: {
    changeRecipients: (state, action) => {
      state.recipients = action.payload;
    },
    changeSubject: (state, action) => {
      state.subject = action.payload;
    },
    changeBody: (state, action) => {
      state.body = action.payload;
    },
    changeStep: (state, action) => {
      state.step += action.payload;
    },
    changeDate: (state, action) => {
      state.date = action.payload;
    },
    changeLocation: (state, action) => {
      state.location = action.payload;
    },
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeIsSuccess: (state, action) => {
      state.isSuccess = action.payload;
    },
    changeIsFail: (state, action) => {
      state.isFail = action.payload;
    },
    changeSignature: (state, action) => {
      state.signature = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(sendNewEmail.fulfilled, (state) => {
        state.isSuccess = true;
      })
      .addCase(sendNewEmail.rejected, (state) => {
        state.isFail = true;
      })
  }
});

export const {
  changeRecipients,
  changeSubject,
  changeBody,
  changeStep,
  changeDate,
  changeLocation,
  changeName,
  changeIsSuccess,
  changeIsFail,
  changeSignature,
} = emailTemplaterSlice.actions;

export const selectRecipients = state => state.email.recipients;
export const selectSubject = state => state.email.subject;
export const selectBody = state => state.email.body;
export const selectDate = state => state.email.date;
export const selectLocation = state => state.email.location;
export const selectName = state => state.email.name;
export const selectIsSuccess = state => state.email.isSuccess;
export const selectIsFail = state => state.email.isFail;
export const selectSignature = state => state.email.signature;
export const selectStep = state => state.email.step;

export default emailTemplaterSlice.reducer;
