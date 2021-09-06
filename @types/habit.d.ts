type Habit = {
  title: string,
  score: number,
  prompt: string,
  // computed field on the backend.
  streak: number,
  user_id: number,
  // [Temporal frequency library](https://www.npmjs.com/package/date-frequency/v/0.3.0)
  frequency: string // [[everyday]], custom: every _ days, weekly, monthly

  // relations
  answers: Answer[], // a habit can have many answers (via dates)
  user: User // a habit must belong to a user
}
