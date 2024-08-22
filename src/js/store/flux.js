import Details from "../views/DetailsPeople";

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: [],
            vehicles: [],
            planets: [],
            favorites: [],
            readLater: [],
            details: [],
        },
        actions: {
            getPeople: () => {
                fetch("https://www.swapi.tech/api/people")
                    .then(resp => resp.json())
                    .then(data => setStore({ characters: data.results }))
                    .catch(error => console.log(error));
            },
            getVehicles: () => {
                fetch("https://www.swapi.tech/api/vehicles")
                    .then(resp => resp.json())
                    .then(data => setStore({ vehicles: data.results }))
                    .catch(error => console.log(error));
            },
            getPlanets: () => {
                fetch("https://www.swapi.tech/api/planets")
                    .then(resp => resp.json())
                    .then(data => setStore({ planets: data.results }))
                    .catch(error => console.log(error));
            },
            getDetails: (type, id) => {
                fetch(`https://www.swapi.tech/api/${type}/${id}`)
                    .then(resp => resp.json())
                    .then(data => setStore({ details: data.result.properties }))
                    .catch(error => console.log(error));
            },
            addToFavorites: (item) => {
                const store = getStore();
                
                    setStore({ favorites: [...store.favorites, item] });
                
            },

            removeFromFavorites: (name) => {
                const store = getStore();
                setStore({ favorites: store.favorites.filter(fav => fav !== name) });
            },
            addToReadLater: (item) => {
                const store = getStore();
                if (!store.readLater.includes(item)) {
                    setStore({ readLater: [...store.readLater, item] });
                }
            },
            removeFromReadLater: (item) => {
                const store = getStore();
                setStore({ readLater: store.readLater.filter(rl => rl !== item) });
            }
        }
    };
};

export default getState;
