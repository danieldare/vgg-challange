const brackets = {
    '(': ')',
    '{': '}',
    '[': ']'
};

function isBalanced(string) {
    const arr = [];
    for(let char in string){
      if (brackets[arr[arr.length - 1]] === string[char]) {
        arr.pop();
      } else {
        arr.push(string[char]);
      }
    }
    return !arr.length ? console.log(1): console.log(0);
} 