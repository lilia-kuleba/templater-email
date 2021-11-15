import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {sendEmail} from "./emailTemplaterAPI";

const initialState = {
  recipients: '',
  subject: '',
  body: `Hi {name},\n\nWe’d like to invite you to a {subject} on {date} at {location}.\n\nThanks,\n{signature}.`,
  isSuccess: false,
  isFail: false,
  step: 1,
  placeholders: [],
  placeholdersValue: [],
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
    changeIsSuccess: (state, action) => {
      state.isSuccess = action.payload;
    },
    changeIsFail: (state, action) => {
      state.isFail = action.payload;
    },
    addPlaceholder: (state, action) => {
      state.placeholders = action.payload;
    },
    changePlaceholderValue: (state, action) => {
      state.placeholdersValue = action.payload;
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
  changeIsSuccess,
  changeIsFail,
  addPlaceholder,
  changePlaceholderValue,
} = emailTemplaterSlice.actions;

export const selectRecipients = state => state.email.recipients;
export const selectSubject = state => state.email.subject;
export const selectBody = state => state.email.body;
export const selectIsSuccess = state => state.email.isSuccess;
export const selectIsFail = state => state.email.isFail;
export const selectStep = state => state.email.step;
export const selectPlaceholdersValue = state => state.email.placeholdersValue;
export const selectPlaceholders = state => state.email.placeholders;

export default emailTemplaterSlice.reducer;
