const { Events, ActivityType } = require('discord.js');

module.exports = {
  name: Events.ClientReady,
  once: false,
  execute(client) {
    const activities = [
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
      let random = Math.floor(Math.random() * activities.length);
      client.user.setActivity(activities[random]);
    }, 900000);
  },
};
