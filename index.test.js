describe('fetchData', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it('should fetch data successfully', async () => {
    const mockData = { id: 1, name: 'Test' };
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const { fetchData } = require('./index');
    const result = await fetchData('https://api.example.com/data');

    expect(result).toEqual(mockData);
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/data');
  });

  it('should handle errors', async () => {
    global.fetch.mockRejectedValueOnce(new Error('Failed to fetch'));

    const { fetchData } = require('./index');
    const result = await fetchData('https://api.example.com/data');

    expect(result).toBeNull();
  });
});
