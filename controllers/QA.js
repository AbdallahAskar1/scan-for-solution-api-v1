// async function queryML(data) {
//     const response = await fetch(
//       "https://api-inference.huggingface.co/models/deepset/roberta-base-squad2",
//       {
//         headers: { Authorization: "Bearer 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" },
//         method: "POST",
//         body: JSON.stringify(data),
//       }
//     );
//     const result = await response.json();
//     return result;
//   }
  
// //   query({"inputs": {
// //       "question": "What's my name?",
// //       "context": "My name is Abdallah and I live in Egypt."
// //     }}).then((response) => {
// //     console.log(JSON.stringify(response));
// //   });

// module.exports=queryML;
// async function queryML(data) {
// 	const response = await fetch(
// 		"https://api-inference.huggingface.co/models/bert-base-uncased",
// 		{
// 			headers: { Authorization: "Bearer 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" },
// 			method: "POST",
// 			body: JSON.stringify(data),
// 		}
// 	);
// 	const result = await response.json();
// 	return result;
// }

// queryML({"inputs": "what is the html ?[MASK]."}).then((response) => {
// 	console.log(JSON.stringify(response));
// });

// module.exports=queryML;
//

async function queryML(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/deepset/roberta-large-squad2",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

module.exports = queryML;