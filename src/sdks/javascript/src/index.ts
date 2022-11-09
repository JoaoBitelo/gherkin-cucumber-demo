import Assinante from './models/sale';

/* eslint-disable no-console */
async function app(): Promise<void> {
  const docString = `
    {
      "assinanteId": "123",
      "id": "123"
    }
  `;
  console.log(docString);
  const aaaa = Assinante.validateSale(JSON.parse(docString));
  // console.log(aaaa?.errors);
  console.log(aaaa);
}

export default (async () => {
  try {
    await app();
  } catch (err) {
    console.log(err);
  }
})();

