import { baseUrl } from "./constans";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}
//на случай если сделаем фичу для просмотра своих результатов
export function getUser(jwt) {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then(checkResponse);
}


export function getUsersScore(jwt) {
  return fetch(`${baseUrl}/users/top`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  }).then(checkResponse);
}

