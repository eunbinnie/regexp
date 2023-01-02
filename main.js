const str = `
010-1234-5678.
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
hxyp
http://localhost:1234
d`;


// 정규표현식 생성
{

  // const regexp = new RegExp('the', 'gi');
  const regexp = /the/gi;
  console.log(str.match(regexp));

}
console.log("====================");


// 메소드
{

  const regexp = /fox/gi;
  console.log(regexp.test(str));  // true

  const regexp2 = /fox/gi;
  console.log(str.replace(regexp2, 'AAA')); // The quick brown AAA jumps over the lazy dog.
  console.log(str); // The quick brown fox jumps over the lazy dog.

  // let str= ~
  // str=str.replace(regexp2,'AAA')
  // console.log(str)
  // : 이러면 원본 수정됨

}
console.log("====================");


// 플래그(옵션)
{

  console.log(str.match(/the/g)); // ['the', 'the']
  console.log(str.match(/the/gi));  // ['the', 'The', 'the']
  console.log(str.match(/\.$/gim)); // ['.', '.']

}
console.log("====================");


// 패턴(표현)_1
{

  console.log(str.match(/d$/gm));
  console.log(str.match(/^t/gim));

  console.log(str.match(/h..p/g));
  console.log(str.match(/fox|dog/));
  console.log(str.match(/https?/g));

  console.log(str.match(/d{2}/g));
  console.log(str.match(/d{2,}/g));
  console.log(str.match(/d{2,3}/g));
  console.log(str.match(/\b\w{2,3}\b/g));

}