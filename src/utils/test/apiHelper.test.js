import axios from 'axios';
import apiHelper from '../apiHelper';
import { BASE_URL } from '../../constants';

jest.mock('axios');

test('get', async () => {
    axios.get.mockResolvedValueOnce('success');

    const response = await apiHelper.get(BASE_URL);

    expect(response).toBe('success');
    expect(axios.get).toBeCalledWith(BASE_URL);
});

test('post', async () => {
    axios.post.mockResolvedValueOnce('success');

    const response = await apiHelper.post(BASE_URL, {});

    expect(response).toBe('success');
    expect(axios.post).toBeCalledWith(BASE_URL, {});
});
