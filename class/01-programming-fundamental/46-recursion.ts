function recursiveCountDown(starting: number) {
  if (starting === 0) {
    return;
  }

  console.log(starting);
  recursiveCountDown(starting - 1);
}

recursiveCountDown(5);
