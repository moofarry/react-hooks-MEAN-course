import { getGifs } from "../../helpers/getGif"

describe('Test with getGifs Fetch', () => {
  
  test('should have 5 elemets', async ()  => {
    
    const gifs = await getGifs('Neon Genesis Evangelion');
    expect(gifs.length).toBe(5);

  })
  
})
