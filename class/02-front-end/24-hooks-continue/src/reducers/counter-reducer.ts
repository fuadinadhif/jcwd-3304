export function counterReducer(state: number, action: string) {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "increment_by_10":
      return state + 10;
    case "decrement_by_10":
      return state - 10;
    case "reset":
      return 0;
    default:
      return state;
  }
}
