import React, { useEffect, useState } from "react";

function AutoComplete() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState([]);
  const [searchitem, setSearchItem] = useState("");
  const [showDropdown, setShowDropdowm] = useState(false);
  const [filterUser, setFilterUser] = useState([]);

  async function fetchUserdata() {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      setUser(data.users.map((f) => f.firstName));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("failed to fetch user");
      setError(true);
    }
  }

  function handleInput(event) {
    const query = event.target.value.toLowerCase();
    setSearchItem(query);

    if (query.length > 1) {
      const filterUser =
        user && user.length ? user.filter((f) => f.toLowerCase().indexOf(query) != -1) : [];
      setFilterUser(filterUser);
      setShowDropdowm(true);
      //   console.log(filterUser);
    } else {
      setShowDropdowm(false);
      setFilterUser([]);
    }
  }

  function handleSelect(event) {
    setSearchItem(event.target.innerText);
    setFilterUser([]);
    setShowDropdowm(false);
  }

  useEffect(() => {
    fetchUserdata();
  }, []);

  console.log(filterUser);

  return (
    <div className="min-h-screen w-full flex justify-center">
      <div>
        <h1 className="text-6xl">Search Auto-Complete</h1>
        {loading ? (
          <div>Fetching data please wait.....</div>
        ) : (
          <div>
            <input
              className="border w-full border-gray-800 rounded-lg px-4 py-2 mt-3 focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="search users..."
              value={searchitem}
              onChange={handleInput}
            />
          </div>
        )}
        {showDropdown && <DropdownItems filterUser={filterUser} handleSelect={handleSelect} />}
      </div>
    </div>
  );
}

function DropdownItems({ filterUser, handleSelect }) {
  return (
    <div className="mt-2  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        {filterUser &&
          filterUser.length &&
          filterUser.map((u, index) => (
            <div
              key={index}
              onClick={handleSelect}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
              role="menuitem"
            >
              {u}
            </div>
          ))}
      </div>
    </div>
  );
}

export default AutoComplete;
