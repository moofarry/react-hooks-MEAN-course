import { getImage } from "../../base/11-async-await";

describe("test with async-await and fech", () => {
  test("should return url of imge", async () => {
    const url = await getImage();
    expect(url.includes('http')).toBe(true);
  });
});
