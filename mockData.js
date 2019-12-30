const categories = require("./Categories");
const giftCards = require("./GiftCardMockData");
const commentsReviews = require("./CommentsReviews");
const brands = require("./BrandsData");
const users = require("./UserData");
const userGifts = require("./UserGifts");

const user_gifts = userGifts;
const comments_reviews = commentsReviews;

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  giftCards,
  users,
  user_gifts,
  categories,
  comments_reviews,
  brands
};
