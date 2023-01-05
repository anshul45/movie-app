import responseHandler from "../handlers/response.handler.js";

import reviewModel from "../models/review.model.js";

const create = async (req, res) => {
  try {
    const { movieId } = req.params;

    const reviews = new reviewModel({
      user: req.user.id,
      movieId,
      ...req.body,
    });

    await reviews.save();

    responseHandler.created(res, {
      ...reviews._doc,
      id: reviews.id,
      user: req.user,
    });
  } catch {
    responseHandler.error(res);
  }
};

const remove = async (req, res) => {
  try {
    const { reviewId } = req.params;

    const reviews = await reviewModel.findOne({
      _id: reviewId,
      user: req.user.id,
    });
    if (!reviews) return responseHandler.notfound(res);

    await reviews.remove();

    responseHandler.ok(res);
  } catch {
    responseHandler.error(res);
  }
};

const getReviewsOfUser = async (req, res) => {
  try {
    const reviews = await reviewModel
      .find({
        user: req.user.id,
      })
      .sort("-createdAt");

    responseHandler.ok(res, reviews);
  } catch {
    responseHandler.error(res);
  }
};

export default { create, remove, getReviewsOfUser };
