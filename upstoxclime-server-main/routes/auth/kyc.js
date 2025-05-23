const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Middleware
router.use(bodyParser.json());

// Mongoose model
const Image = mongoose.model('Image', {
  imageUrl: String,
});

// Store Image URL - /kyc
router.post('/kyc', async (req, res) => {
  try {
    const { imageUrl } = req.body;
    const image = new Image({ imageUrl });
    await image.save();
    res.status(201).json({ message: 'Image URL stored successfully' });
  } catch (error) {
    console.error('Error storing image URL:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Store Image URL 2 - /kyc2
router.post('/kyc2', async (req, res) => {
  try {
    const { imageUrl2 } = req.body;
    const image = new Image({ imageUrl: imageUrl2 });
    await image.save();
    res.status(201).json({ message: 'Image URL stored successfully' });
  } catch (error) {
    console.error('Error storing image URL:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Store Image URL 3 - /kyc3
router.post('/kyc3', async (req, res) => {
  try {
    const { imageUrl3 } = req.body;
    const image = new Image({ imageUrl: imageUrl3 });
    await image.save();
    res.status(201).json({ message: 'Image URL stored successfully' });
  } catch (error) {
    console.error('Error storing image URL:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Fetch all images - /kyc/fetch-images
router.get('/kyc/fetch-images', async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
