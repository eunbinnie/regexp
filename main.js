const str = `
010-1234-5678.
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
hxyp
http://localhost:1234
동해물과_백두산이 마르고 닳도록
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
console.log("====================");


const h = `  the hello  world   !


`;
const str2 = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`;

// 패턴(표현)_2
{

  console.log(str.match(/[fox]/g)); // f or o or x
  console.log(str.match(/[0-9]{1,}/g));
  console.log(str.match(/[가-힇]{1,}/g));

  console.log(str.match(/\w/g));
  console.log(str.match(/\bf\w{1,}\b/g));
  console.log(str.match(/\d{1,}/g));
  console.log(str.match(/\s/g));
  console.log(h.replace(/\s/g, ''));

  console.log(str2.match(/.{1,}(?=@)/g));
  console.log(str2.match(/(?<=@).{1,}/g));

}