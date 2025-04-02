
export const getAllUsers = (req, res, next) => {
    try {
        res.status(200).json({
            msg: "users are displayed!"
        });
    } catch (error) {
        next(error);
    }
};


