// Import all the necessary libraries
const { Events, ActivityType } = require('discord.js');

module.exports = {
  // Set the type of event
  name: Events.ClientReady,
  once: false,
  execute(client) {
    const activities = [
      // Set the name and the type of status
      { name: 'Suggestion Master', type: ActivityType.Playing },
      { name: 'Idea Guru', type: ActivityType.Playing },
      { name: 'Feedback Ninja', type: ActivityType.Playing },
      { name: 'Brainstorming Buddy', type: ActivityType.Playing },
      { name: 'Opinion Oracle', type: ActivityType.Playing },
      { name: 'Recommendation Robot', type: ActivityType.Playing },
      { name: 'Input Intellect', type: ActivityType.Playing },
      { name: 'Proposal Prodigy', type: ActivityType.Playing },
      { name: 'Innovation Incarnate', type: ActivityType.Playing },
      { name: 'Concept Crusader', type: ActivityType.Playing },
    ];
    setInterval(() => {
      // Randomly select a status every 15 minutes
      let random = Math.floor(Math.random() * activities.length);
      client.user.setActivity(activities[random]);
    }, 900000);
  },
};
