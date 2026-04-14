const express = require('express');

const router = express.Router();

const NBAStars = {
    2020: "LeBron James",
    2021: "Kevin Durant",
    2022: "Giannis Antetokounmpo",
    2023: "Stephen Curry",
    2024: "Luka Dončić",
    2025: "Nikola Jokić"
}

router.get('/years', (req, res) => {
    res.json(Object.keys(NBAStars));
});

router.get('/star/:year', (req, res) => {
    const year = req.params.year;
    const star = NBAStars[year];
    if (star) {
        res.json({ year, star });
    } else {
        res.status(404).json({ error: 'Star not found for the given year' });
    }
});

module.exports = router;