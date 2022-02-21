import axios from 'axios';
import apiHelper from '../apiHelper';
import { BASE_URL } from '../../constants';

jest.mock('axios');

test('apiHelper', async () => {
    axios.get.mockResolvedValueOnce('success');

    const result = await apiHelper.get(BASE_URL);

    expect(result).toBe('success');
    expect(axios.get).toBeCalledWith(BASE_URL);
});
