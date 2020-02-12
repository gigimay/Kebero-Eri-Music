const mongoose = require('mongoose');
const Review = mongoose.model('Review');

exports.addReview = async (req, res) => {
  req.body.author = req.user._id;
  req.body.store = req.params.id;
  const newReview = new Review(req.body);
  await newReview.save();
  req.flash('success', 'Thanks for your review, It is successfully saved!!')
  res.redirect('back');
}

exports.getChatRoom = async (req, res) => {
  // res.send('</br>this chat page is about to come by now and it will serve as a page where the </br>eritrean community can pure their idea\'s about the current situation of our country and how to get </br>forward to overpass the hard time we r living on!! for me i belive people have the power to do everything</br> and with the help of them by them for them we can secure the country and the need of the people soon!')
  req.body.author = req.user._id;
  req.body.store = req.params.id;
  // const newReview = new Review(req.body);
  // await newReview.save();
  req.flash('success', 'Thanks for your review, It is successfully saved!!')
  res.render('chatroom', {title: 'Chat Room'});
}
