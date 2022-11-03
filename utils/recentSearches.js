export function readStorage() {
  var recentSearches = JSON.parse(
    localStorage.getItem("recentSearches") || "[]"
  );

  return { recentSearches };
}

export function updateStorage(search) {
  var recentSearches = JSON.parse(
    localStorage.getItem("recentSearches") || "[]"
  );

  recentSearches.unshift(search);

  if (recentSearches.length > 5) {
    recentSearches.pop();
  }

  localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
}
