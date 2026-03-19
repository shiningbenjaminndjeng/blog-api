const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database.db');

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS articles (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            content TEXT,
            author TEXT,
            date TEXT,
            category TEXT,
            tags TEXT
        )
    `);
});

module.exports = db;