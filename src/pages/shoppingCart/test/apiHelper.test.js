import axios from 'axios';
import apiHelper from '../apiHelper';

jest.mock('axios');

describe('apiHelper', () => {
  test('should send get request', async () => {
    // given
    axios.get.mockResolvedValue('success');

    // when
    const result = await apiHelper.get('http://localhost:8000');

    // then
    expect(result).toBe('success');
  })
})
