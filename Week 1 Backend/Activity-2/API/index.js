require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const News = require('./Models/news');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get('/news', async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/news/:id', getNews, (req, res) => {
  res.json(res.news);
});

app.post('/news', async (req, res) => {
  const news = new News({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    tags: req.body.tags
  });

  try {
    const newNews = await news.save();
    res.status(201).json(newNews);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.patch('/news/:id', getNews, async (req, res) => {
  if (req.body.title != null) {
    res.news.title = req.body.title;
  }
  if (req.body.content != null) {
    res.news.content = req.body.content;
  }
  if (req.body.author != null) {
    res.news.author = req.body.author;
  }
  if (req.body.tags != null) {
    res.news.tags = req.body.tags;
  }
  if (req.body.isPublished != null) {
    res.news.isPublished = req.body.isPublished;
  }

  try {
    const updatedNews = await res.news.save();
    res.json(updatedNews);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.delete('/news/:id', getNews, async (req, res) => {
  try {
    await res.news.remove();
    res.json({ message: 'Deleted News' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getNews(req, res, next) {
  let news;
  try {
    news = await News.findById(req.params.id);
    if (news == null) {
      return res.status(404).json({ message: 'Cannot find news' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.news = news;
  next();
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});