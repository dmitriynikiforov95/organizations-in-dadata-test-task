export default class DadataApiService {
  _apiBase =
    "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party";

  async getResource(query) {
    const res = await fetch(`${this._apiBase}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Token 73ba661ebb7513208c7da38e014275266e068676",
      },
      body: JSON.stringify(query),
    });

    if (!res.ok) {
      throw new Error(`Could not fetch  ${this._apiBase} +
                , received ${res.status}`);
    }
    return await res.json();
  }

  fetchOrganizations(query) {
    return this.getResource(query);
  }
}
