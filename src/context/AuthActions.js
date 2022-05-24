
export const loginStart = (userCredentials) => ({
    type: "LOGIN_START"
});

export const loginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});

export const loginError = (error) => ({
    type: "LOGIN_ERROR",
    payload: error,
});
export const trainingCancel = (trainingId) => ({
    type: "TRAINING_CANCEL",
    payload: trainingId,
});

export const trainingEntry = (trainingId) => ({
    type: "TRAINING_ENTRY",
    payload: trainingId,
});



