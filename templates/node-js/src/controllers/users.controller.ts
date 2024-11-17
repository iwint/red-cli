import catchAsync from "../utils/catch-async";

const getAllUsers = catchAsync(async (req, res) => {
    res.send("Hello bro");
});
const getUser = catchAsync(async (req, res) => {});

export default { getAllUsers, getUser };
