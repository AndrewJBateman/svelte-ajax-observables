import { startWith, map } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

const baseUrl = "https://api.github.com/users/";
const apiURL = "https://api.github.com/search/repositories?q=svelte";
const userSearchUrl = `${baseUrl + "AndrewJBateman"}`;

export const reposObservable = ajax(apiURL).pipe(
  map((x) => x?.response),
  map((x) => x?.items),
  startWith([])
);

export const user = ajax(userSearchUrl).pipe(
  map((x) => x?.response),
  startWith([])
);
