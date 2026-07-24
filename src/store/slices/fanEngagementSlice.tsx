import { createSlice } from "@reduxjs/toolkit";

interface fanEngagementSliceState {
  isShareReel: boolean;
  isEditPost: boolean;
  isCommentOpen: boolean;
  isDownloadAppOpen: boolean;
}

const initialState: fanEngagementSliceState = {
  isShareReel: false,
  isEditPost: false,
  isCommentOpen: false,
  isDownloadAppOpen: false,
};

const fanEngagementSlice = createSlice({
  name: "fanEngagement",
  initialState,
  reducers: {
    setIsShareReel(state) {
      state.isShareReel = !state.isShareReel;
    },
    setIsEditPost(state) {
      state.isEditPost = !state.isEditPost;
    },
    setIsCommentOpen(state, action) {
      state.isCommentOpen = action.payload;
    },
    setIsDownloadAppOpen(state) {
      state.isDownloadAppOpen = !state.isDownloadAppOpen;
    },
  },
});

export const {
  setIsShareReel,
  setIsEditPost,
  setIsCommentOpen,
  setIsDownloadAppOpen,
} = fanEngagementSlice.actions;
export default fanEngagementSlice.reducer;
