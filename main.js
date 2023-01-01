const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`;


// 정규표현식 생성
{

  // const regexp = new RegExp('the', 'gi');
  const regexp = /the/gi;
  console.log(str.match(regexp));

}


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