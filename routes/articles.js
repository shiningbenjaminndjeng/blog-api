const express = require('express');
const router = express.Router();
const db = require('../database');

// CREATE
router.post('/', (req, res) => {
    const { title, content, author, date, category, tags } = req.body;

    db.run(
        `INSERT INTO articles (title, content, author, date, category, tags)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [title, content, author, date, category, tags],
        function (err) {
            if (err) return res.status(500).json(err);

            res.json({ message: "Article créé", id: this.lastID });
        }
    );
});

// READ ALL + FILTER
router.get('/', (req, res) => {
    let query = "SELECT * FROM articles WHERE 1=1";
    let params = [];

    if (req.query.category) {
        query += " AND category = ?";
        params.push(req.query.category);
    }

    if (req.query.author) {
        query += " AND author = ?";
        params.push(req.query.author);
    }

    if (req.query.date) {
        query += " AND date = ?";
        params.push(req.query.date);
    }

    db.all(query, params, (err, rows) => {
        if (err) return res.status(500).json(err);
        res.json(rows);
    });
});

// READ ONE
router.get('/:id', (req, res) => {
    db.get("SELECT * FROM articles WHERE id = ?", [req.params.id], (err, row) => {
        if (err) return res.status(500).json(err);
        res.json(row);
    });
});

// UPDATE
router.put('/:id', (req, res) => {
    const { title, content, category, tags } = req.body;

    db.run(
        `UPDATE articles SET title=?, content=?, category=?, tags=? WHERE id=?`,
        [title, content, category, tags, req.params.id],
        function (err) {
            if (err) return res.status(500).json(err);
            res.json({ message: "Article mis à jour" });
        }
    );
});

// DELETE
router.delete('/:id', (req, res) => {
    db.run("DELETE FROM articles WHERE id = ?", [req.params.id], function (err) {
        if (err) return res.status(500).json(err);
        res.json({ message: "Article supprimé" });
    });
});

// SEARCH
router.get('/search', (req, res) => {
    const q = `%${req.query.query}%`;

    db.all(
        "SELECT * FROM articles WHERE title LIKE ? OR content LIKE ?",
        [q, q],
        (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json(rows);
        }
    );
});

module.exports = router;