interface WeeklyBlog {
  week: number;
  title: string;
  description: string;
  nextWeekPlan: string;
}

export const weeklyBlogData: WeeklyBlog[] = [
  {
    week: 3,
    title: 'Machine Learningggggg!',
    description: 'TBD',
    nextWeekPlan: 'TBD'
  },
  {
    week: 2,
    title: 'CONTENT IS KING but CONTEXT IS QUEEN!',
    description:
      "No idea why i blab about it on the title, its not really relevant to me meh. I thought about it throughout the week and i think what would be cool is if I show case my learning here, and a little embarassing documentation of the process here HAHA, I could always hide it when im looking for a job I guess :) So big idea is MACHINE LEARNING and ALGORITHM, started a few weeks back on algos and i found i really suck at it ( which is good! content baby!) but for this week atleast I wanna get one foot into ML. I took a course before on it, but i've always been facinated with game reinforcement learning, which begs the question...does that mean i need to learn simulation creation as well ? Unity?? BAH this is gonna be a pain.",
    nextWeekPlan: 'Touch on ML '
  },
  {
    week: 1,
    title: 'Finish Client Setup and Landing Page',
    description:
      "Finally done with setup and made myself a Landing page, setup finished earlier than i thought! Since I had free time, i went into deeeeep end of animation in css, involving keyframes and stuff that i've always wanted try out! For now the site looks shitty but there are alot of CSS animations crammed in haha. Again its just for learning so i don't really mind. ",
    nextWeekPlan: 'Think about content!'
  },
  {
    week: 0,
    title: 'Setup Setup SETUP!',
    description:
      "So I want a website! But thinking about it more, it would be cool if I had a basic setup to branch off from in future projects. Hence I've decided to create a repo for a basic setup of backend and front-end :) For now i've got the backend working but i'm having trouble setting up env/absolute imports for front-end, will get to it next week!",
    nextWeekPlan: 'Fixing bugs on client-setup'
  }
];
