import httpStatus from "http-status";
import catchAsync from "../utils/catch-async";

const getAllChats = catchAsync(async (req, res) => {
    res.status(httpStatus.ACCEPTED).send({ message: "Getting chats" });
});

export default {
    getAllChats,
};
