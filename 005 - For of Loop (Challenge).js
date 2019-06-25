let incomes = [62000, 67000, 75000];

for (let income of incomes) {
   income += 5000;
}

console.log(incomes);

//incomes does not get bumped up by 5000
// the reason is because it is not designed to do that.
// when using let, it does not allow updating or setting up new values
