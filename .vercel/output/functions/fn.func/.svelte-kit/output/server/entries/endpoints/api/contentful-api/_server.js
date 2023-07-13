import { j as json } from "../../../../chunks/index.js";
async function POST({ request }) {
  const result = await request.json();
  return json(result);
}
export {
  POST
};
