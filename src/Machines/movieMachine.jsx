import { createMachine } from "xstate";

const movieMachine = createMachine({
  id: "movie theater",
  initial: "idle",
  states: {
    idle: {
      on: {
        EXPLORING: "explore",
        ADD: "seats",
        PROFILE: "profile",
      },
    },
    explore: {
      on: {
        ADD: "seats",
        BACK: "idle",
        PROFILE: "profile",
      },
    },
    seats: {
      on: {
        PAYMENT: "payment",
        EXPLORING: "explore",
        BACK: "idle",
        PROFILE: "profile",
      },
    },
    payment: {
      type: "final",
    },
    profile: {
      on: {
        BACK: "idle",
        EXPLORING: "explore",
        ADD: "seats",
      },
    },
  },
});

export default movieMachine;
