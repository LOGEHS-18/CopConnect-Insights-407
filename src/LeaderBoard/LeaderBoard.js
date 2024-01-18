// Leaderboard.js
import React from 'react';
import './Leaderboard.css';

const Leaderboard = () => {
  const leaderboardData = Array.from({ length: 100 }, (_, index) => ({
    rank: index + 1,
    name: `Player ${index + 1}`,
    progress: `${Math.floor(Math.random() * 100)}%`,
    cases: Math.floor(Math.random() * 1000),
    solved: `${Math.floor(Math.random() * 100)} days`,
    ratings: getStarRating(),
    avatar: `avatar${(index % 5) + 1}.jpg`,
  }));

  // Add percentage property to each player
  const leaderboardWithPercentage = leaderboardData.map((player) => ({
    ...player,
    percentage: Math.floor(Math.random() * 20) + 80, // Example: Random percentage between 80 and 100
  }));

  // Sort players based on percentage, ratings, stars, and cases solved
  const sortedLeaderboard = leaderboardWithPercentage.sort((a, b) => {
    const percentageComparison = b.percentage - a.percentage;
    if (percentageComparison !== 0) return percentageComparison;

    const ratingComparison = b.ratings.length - a.ratings.length;
    if (ratingComparison !== 0) return ratingComparison;

    const starsComparison = b.ratings.localeCompare(a.ratings);
    if (starsComparison !== 0) return starsComparison;

    return b.cases - a.cases;
  });

  return (
    <div className="leaderboard-container">
      <h1 className="leaderboard-title">Leaderboard</h1>
      <div className="leaderboard">
        {sortedLeaderboard.map((player) => (
          <div className="leaderboard-card" key={player.rank}>
            <div className="rank">{player.rank}</div>
            <img className="avatar" src='https://cdn.siasat.com/wp-content/uploads/2019/06/Rajasthan-Police.jpg' alt={`Avatar for ${player.name}`} />
            <div className="details">
              <span className="name">{player.name}</span>
              <span className="progress">{player.progress}</span>
              <span className="cases">{player.cases} cases</span>
              <span className="solved">{player.solved} solved</span>
              <span className="ratings">{player.ratings}</span>
              <span className="percentage">{player.percentage}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const getStarRating = () => {
  const rating = Math.floor(Math.random() * 5) + 1;
  return '⭐'.repeat(rating);
};

export default Leaderboard;
